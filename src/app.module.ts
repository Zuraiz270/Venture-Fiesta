import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HttpModule } from '@nestjs/axios';
import { CrunchbaseService } from './services/crunchbase.service';
import { Organization, OrganizationSchema } from './schemas/organization.schema';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/crunchbaseDB'), // Connect to MongoDB
    MongooseModule.forFeature([{ name: Organization.name, schema: OrganizationSchema }]), // This is required
  ],
  providers: [CrunchbaseService],
  exports: [CrunchbaseService], // Ensure CrunchbaseService is exported if used elsewhere
})
export class AppModule {}
