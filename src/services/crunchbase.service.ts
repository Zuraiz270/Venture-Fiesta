import { Injectable, OnModuleInit } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Organization, OrganizationDocument } from '../schemas/organization.schema';
import * as dotenv from 'dotenv';

dotenv.config(); // Load environment variables

@Injectable()
export class CrunchbaseService implements OnModuleInit {
  private readonly API_URL = 'https://api.crunchbase.com/v3.1/organizations';
  private readonly API_KEY = process.env.CRUNCHBASE_API_KEY;
  private readonly DELAY_MS = 60000; // 60 seconds

  constructor(
    private readonly httpService: HttpService,
    @InjectModel(Organization.name) private readonly organizationModel: Model<OrganizationDocument>, // Ensure InjectModel is used
  ) {}

  async onModuleInit() {
    console.log('🔄 Fetching data from Crunchbase API...');
    await this.fetchAndSaveData();
  }

  async fetchAndSaveData() {
    try {
      const url = `${this.API_URL}?user_key=${this.API_KEY}`;
      const response = await this.httpService.get(url).toPromise();
      const data = response?.data;

      if (data && data.entities) {
        for (const entity of data.entities) {
          const formattedEntity = this.formatData(entity);
          await this.organizationModel.updateOne(
            { uuid: formattedEntity.uuid },
            formattedEntity,
            { upsert: true }
          );
        }
        console.log('✅ Data saved successfully to MongoDB.');
      } else {
        console.warn('⚠️ No data received from Crunchbase.');
      }
    } catch (error) {
      console.error('❌ Error fetching data:', (error as any).message);
    }

    setTimeout(() => this.fetchAndSaveData(), this.DELAY_MS);
  }

  private formatData(entity: any) {
    return {
      name: entity.properties.name,
      uuid: entity.uuid,
      permalink: entity.properties.permalink,
      description: entity.properties.description,
      website_url: entity.properties.website_url,
      funding_total: entity.properties.funding_total,
      equity_funding_total: entity.properties.equity_funding_total,
      revenue_range: entity.properties.revenue_range,
      ipo_status: entity.properties.ipo_status,
      valuation: entity.properties.valuation,
      valuation_date: entity.properties.valuation_date,
      status: entity.properties.status,
      location_identifiers: entity.properties.location_identifiers,
      categories: entity.properties.categories,
      investor_identifiers: entity.properties.investor_identifiers,
      funding_stage: entity.properties.funding_stage,
      num_employees_enum: entity.properties.num_employees_enum,
      operating_status: entity.properties.operating_status,
      image_url: entity.properties.image_url,
      founded_on: entity.properties.founded_on,
      num_funding_rounds: entity.properties.num_funding_rounds,
      num_investors: entity.properties.num_investors,
      num_exits: entity.properties.num_exits,
      updated_at: entity.properties.updated_at,
    };
  }
}
