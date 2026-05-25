export type SourceDataColumn = {
  name: string;
  type: string;
  nullable: boolean;
  primaryKey: boolean;
  unique: boolean;
  defaultValue: string;
  sourceLine: string;
};

export type SourceDataTable = {
  id: string;
  sourceProject: string;
  name: string;
  displayName: string;
  framework: string;
  sourceFile: string;
  columns: SourceDataColumn[];
};

export const sourceDataTables: SourceDataTable[] = [
  {
    "id": "agency-services-prisma-schema-prisma-ab-test",
    "sourceProject": "agencyServices",
    "name": "ABTest",
    "displayName": "AB Test",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String   @id @default(cuid())"
      },
      {
        "name": "campaignId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "campaignId      String"
      },
      {
        "name": "campaign",
        "type": "Campaign",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "campaign        Campaign @relation(fields: [campaignId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            String"
      },
      {
        "name": "variantA",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "variantA        String"
      },
      {
        "name": "variantB",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "variantB        String"
      },
      {
        "name": "status",
        "type": "ABTestStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "RUNNING",
        "sourceLine": "status          ABTestStatus @default(RUNNING)"
      },
      {
        "name": "winnerVariant",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "winnerVariant   String?"
      },
      {
        "name": "startDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now(",
        "sourceLine": "startDate       DateTime @default(now())"
      },
      {
        "name": "endDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "endDate         DateTime?"
      }
    ]
  },
  {
    "id": "agency-services-prisma-schema-prisma-activity",
    "sourceProject": "agencyServices",
    "name": "Activity",
    "displayName": "Activity",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String   @id @default(cuid())"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId          String"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user            User     @relation(fields: [userId], references: [id])"
      },
      {
        "name": "action",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "action          String"
      },
      {
        "name": "entityType",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entityType      String"
      },
      {
        "name": "entityId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entityId        String"
      },
      {
        "name": "metadata",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "metadata        Json?"
      }
    ]
  },
  {
    "id": "agency-services-prisma-schema-prisma-ai-content",
    "sourceProject": "agencyServices",
    "name": "AIContent",
    "displayName": "AI Content",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String   @id @default(cuid())"
      },
      {
        "name": "type",
        "type": "AIContentType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type            AIContentType"
      },
      {
        "name": "prompt",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "prompt          String"
      },
      {
        "name": "content",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "content         String"
      },
      {
        "name": "metadata",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "metadata        Json?"
      }
    ]
  },
  {
    "id": "agency-services-prisma-schema-prisma-application",
    "sourceProject": "agencyServices",
    "name": "Application",
    "displayName": "Application",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String   @id @default(cuid())"
      },
      {
        "name": "candidateId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "candidateId     String"
      },
      {
        "name": "candidate",
        "type": "Candidate",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "candidate       Candidate @relation(fields: [candidateId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "jobId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "jobId           String"
      },
      {
        "name": "job",
        "type": "JobPosition",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "job             JobPosition @relation(fields: [jobId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "status",
        "type": "ApplicationStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "RECEIVED",
        "sourceLine": "status          ApplicationStatus @default(RECEIVED)"
      },
      {
        "name": "appliedAt",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now(",
        "sourceLine": "appliedAt       DateTime @default(now())"
      }
    ]
  },
  {
    "id": "agency-services-prisma-schema-prisma-approval-workflow",
    "sourceProject": "agencyServices",
    "name": "ApprovalWorkflow",
    "displayName": "Approval Workflow",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String   @id @default(cuid())"
      },
      {
        "name": "projectId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "projectId       String"
      },
      {
        "name": "project",
        "type": "Project",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project         Project  @relation(fields: [projectId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "title",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title           String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description     String?"
      },
      {
        "name": "status",
        "type": "ApprovalStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "PENDING",
        "sourceLine": "status          ApprovalStatus @default(PENDING)"
      },
      {
        "name": "requestedById",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "requestedById   String"
      },
      {
        "name": "requestedBy",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "requestedBy     User     @relation(fields: [requestedById], references: [id])"
      },
      {
        "name": "approvedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "approvedAt      DateTime?"
      },
      {
        "name": "rejectedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rejectedAt      DateTime?"
      }
    ]
  },
  {
    "id": "agency-services-prisma-schema-prisma-billing-info",
    "sourceProject": "agencyServices",
    "name": "BillingInfo",
    "displayName": "Billing Info",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String   @id @default(cuid())"
      },
      {
        "name": "clientId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "clientId        String   @unique"
      },
      {
        "name": "client",
        "type": "Client",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client          Client   @relation(fields: [clientId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "billingAddress",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "billingAddress  String?"
      },
      {
        "name": "paymentTerms",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "30",
        "sourceLine": "paymentTerms    Int      @default(30)"
      },
      {
        "name": "preferredMethod",
        "type": "PaymentMethod",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "BANK_TRANSFER",
        "sourceLine": "preferredMethod PaymentMethod @default(BANK_TRANSFER)"
      },
      {
        "name": "taxId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "taxId           String?"
      }
    ]
  },
  {
    "id": "agency-services-prisma-schema-prisma-campaign",
    "sourceProject": "agencyServices",
    "name": "Campaign",
    "displayName": "Campaign",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String   @id @default(cuid())"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description     String?"
      },
      {
        "name": "clientId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId        String"
      },
      {
        "name": "client",
        "type": "Client",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client          Client   @relation(fields: [clientId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "managerId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "managerId       String"
      },
      {
        "name": "manager",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "manager         User     @relation(fields: [managerId], references: [id])"
      },
      {
        "name": "status",
        "type": "CampaignStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "DRAFT",
        "sourceLine": "status          CampaignStatus @default(DRAFT)"
      },
      {
        "name": "type",
        "type": "CampaignType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type            CampaignType"
      },
      {
        "name": "startDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "startDate       DateTime?"
      },
      {
        "name": "endDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "endDate         DateTime?"
      },
      {
        "name": "budget",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "budget          Float?"
      },
      {
        "name": "spent",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "spent           Float    @default(0)"
      },
      {
        "name": "channels",
        "type": "CampaignChannel[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "channels        CampaignChannel[]"
      },
      {
        "name": "metrics",
        "type": "CampaignMetric[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "metrics         CampaignMetric[]"
      },
      {
        "name": "abTests",
        "type": "ABTest[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "abTests         ABTest[]"
      }
    ]
  },
  {
    "id": "agency-services-prisma-schema-prisma-campaign-channel",
    "sourceProject": "agencyServices",
    "name": "CampaignChannel",
    "displayName": "Campaign Channel",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String   @id @default(cuid())"
      },
      {
        "name": "campaignId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "campaignId      String"
      },
      {
        "name": "campaign",
        "type": "Campaign",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "campaign        Campaign @relation(fields: [campaignId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "channel",
        "type": "ChannelType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "channel         ChannelType"
      },
      {
        "name": "budget",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "budget          Float?"
      },
      {
        "name": "spent",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "spent           Float    @default(0)"
      }
    ]
  },
  {
    "id": "agency-services-prisma-schema-prisma-campaign-metric",
    "sourceProject": "agencyServices",
    "name": "CampaignMetric",
    "displayName": "Campaign Metric",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String   @id @default(cuid())"
      },
      {
        "name": "campaignId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "campaignId      String"
      },
      {
        "name": "campaign",
        "type": "Campaign",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "campaign        Campaign @relation(fields: [campaignId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "date",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date            DateTime"
      },
      {
        "name": "impressions",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "impressions     Int      @default(0)"
      },
      {
        "name": "clicks",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "clicks          Int      @default(0)"
      },
      {
        "name": "conversions",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "conversions     Int      @default(0)"
      },
      {
        "name": "spend",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "spend           Float    @default(0)"
      },
      {
        "name": "revenue",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "revenue         Float    @default(0)"
      }
    ]
  },
  {
    "id": "agency-services-prisma-schema-prisma-candidate",
    "sourceProject": "agencyServices",
    "name": "Candidate",
    "displayName": "Candidate",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String   @id @default(cuid())"
      },
      {
        "name": "firstName",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "firstName       String"
      },
      {
        "name": "lastName",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lastName        String"
      },
      {
        "name": "email",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email           String"
      },
      {
        "name": "phone",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone           String?"
      },
      {
        "name": "resumeUrl",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resumeUrl       String?"
      },
      {
        "name": "resumeText",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resumeText      String?"
      },
      {
        "name": "skills",
        "type": "String[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "skills          String[]"
      },
      {
        "name": "experience",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "experience      Int?"
      },
      {
        "name": "currentTitle",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "currentTitle    String?"
      },
      {
        "name": "currentCompany",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "currentCompany  String?"
      },
      {
        "name": "expectedSalary",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expectedSalary  Float?"
      },
      {
        "name": "location",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location        String?"
      },
      {
        "name": "status",
        "type": "CandidateStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NEW",
        "sourceLine": "status          CandidateStatus @default(NEW)"
      },
      {
        "name": "score",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "score           Float?"
      },
      {
        "name": "source",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source          String?"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           String?"
      },
      {
        "name": "createdById",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "createdById     String"
      },
      {
        "name": "createdBy",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "createdBy       User     @relation(fields: [createdById], references: [id])"
      },
      {
        "name": "applications",
        "type": "Application[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "applications    Application[]"
      },
      {
        "name": "interviews",
        "type": "Interview[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "interviews      Interview[]"
      },
      {
        "name": "offers",
        "type": "Offer[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "offers          Offer[]"
      },
      {
        "name": "placements",
        "type": "Placement[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "placements      Placement[]"
      }
    ]
  },
  {
    "id": "agency-services-prisma-schema-prisma-client",
    "sourceProject": "agencyServices",
    "name": "Client",
    "displayName": "Client",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String   @id @default(cuid())"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            String"
      },
      {
        "name": "email",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email           String"
      },
      {
        "name": "phone",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone           String?"
      },
      {
        "name": "company",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company         String?"
      },
      {
        "name": "website",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "website         String?"
      },
      {
        "name": "address",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "address         String?"
      },
      {
        "name": "industry",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "industry        String?"
      },
      {
        "name": "status",
        "type": "ClientStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "ACTIVE",
        "sourceLine": "status          ClientStatus @default(ACTIVE)"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           String?"
      },
      {
        "name": "createdById",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "createdById     String"
      },
      {
        "name": "createdBy",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "createdBy       User     @relation(fields: [createdById], references: [id])"
      },
      {
        "name": "contracts",
        "type": "Contract[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contracts       Contract[]"
      },
      {
        "name": "billingInfo",
        "type": "BillingInfo?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "billingInfo     BillingInfo?"
      },
      {
        "name": "projects",
        "type": "Project[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "projects        Project[]"
      },
      {
        "name": "communications",
        "type": "Communication[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "communications  Communication[]"
      },
      {
        "name": "invoices",
        "type": "Invoice[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "invoices        Invoice[]"
      },
      {
        "name": "campaigns",
        "type": "Campaign[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "campaigns       Campaign[]"
      },
      {
        "name": "leads",
        "type": "Lead[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "leads           Lead[]"
      }
    ]
  },
  {
    "id": "agency-services-prisma-schema-prisma-comment",
    "sourceProject": "agencyServices",
    "name": "Comment",
    "displayName": "Comment",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String   @id @default(cuid())"
      },
      {
        "name": "taskId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "taskId          String"
      },
      {
        "name": "task",
        "type": "Task",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "task            Task     @relation(fields: [taskId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId          String"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user            User     @relation(fields: [userId], references: [id])"
      },
      {
        "name": "content",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "content         String"
      }
    ]
  },
  {
    "id": "agency-services-prisma-schema-prisma-commission",
    "sourceProject": "agencyServices",
    "name": "Commission",
    "displayName": "Commission",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String   @id @default(cuid())"
      },
      {
        "name": "type",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type            String"
      },
      {
        "name": "referenceId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "referenceId     String"
      },
      {
        "name": "amount",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount          Float"
      },
      {
        "name": "percentage",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "percentage      Float"
      },
      {
        "name": "status",
        "type": "CommissionStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "PENDING",
        "sourceLine": "status          CommissionStatus @default(PENDING)"
      },
      {
        "name": "paidAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "paidAt          DateTime?"
      }
    ]
  },
  {
    "id": "agency-services-prisma-schema-prisma-communication",
    "sourceProject": "agencyServices",
    "name": "Communication",
    "displayName": "Communication",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String   @id @default(cuid())"
      },
      {
        "name": "clientId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId        String"
      },
      {
        "name": "client",
        "type": "Client",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client          Client   @relation(fields: [clientId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId          String"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user            User     @relation(fields: [userId], references: [id])"
      },
      {
        "name": "type",
        "type": "CommunicationType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type            CommunicationType"
      },
      {
        "name": "subject",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subject         String"
      },
      {
        "name": "content",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "content         String"
      }
    ]
  },
  {
    "id": "agency-services-prisma-schema-prisma-contract",
    "sourceProject": "agencyServices",
    "name": "Contract",
    "displayName": "Contract",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String   @id @default(cuid())"
      },
      {
        "name": "clientId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId        String"
      },
      {
        "name": "client",
        "type": "Client",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client          Client   @relation(fields: [clientId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "title",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title           String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description     String?"
      },
      {
        "name": "startDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "startDate       DateTime"
      },
      {
        "name": "endDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "endDate         DateTime?"
      },
      {
        "name": "value",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "value           Float"
      },
      {
        "name": "status",
        "type": "ContractStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "DRAFT",
        "sourceLine": "status          ContractStatus @default(DRAFT)"
      },
      {
        "name": "documentUrl",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "documentUrl     String?"
      }
    ]
  },
  {
    "id": "agency-services-prisma-schema-prisma-distribution-rule",
    "sourceProject": "agencyServices",
    "name": "DistributionRule",
    "displayName": "Distribution Rule",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String   @id @default(cuid())"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            String"
      },
      {
        "name": "criteria",
        "type": "Json",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "criteria        Json"
      },
      {
        "name": "assignTo",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assignTo        String"
      },
      {
        "name": "priority",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "priority        Int      @default(0)"
      },
      {
        "name": "active",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "active          Boolean  @default(true)"
      }
    ]
  },
  {
    "id": "agency-services-prisma-schema-prisma-follow-up",
    "sourceProject": "agencyServices",
    "name": "FollowUp",
    "displayName": "Follow Up",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String   @id @default(cuid())"
      },
      {
        "name": "leadId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "leadId          String"
      },
      {
        "name": "lead",
        "type": "Lead",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lead            Lead     @relation(fields: [leadId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "type",
        "type": "FollowUpType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type            FollowUpType"
      },
      {
        "name": "scheduledAt",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scheduledAt     DateTime"
      },
      {
        "name": "completedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "completedAt     DateTime?"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           String?"
      },
      {
        "name": "outcome",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "outcome         String?"
      }
    ]
  },
  {
    "id": "agency-services-prisma-schema-prisma-interview",
    "sourceProject": "agencyServices",
    "name": "Interview",
    "displayName": "Interview",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String   @id @default(cuid())"
      },
      {
        "name": "candidateId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "candidateId     String"
      },
      {
        "name": "candidate",
        "type": "Candidate",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "candidate       Candidate @relation(fields: [candidateId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "scheduledAt",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scheduledAt     DateTime"
      },
      {
        "name": "duration",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "60",
        "sourceLine": "duration        Int      @default(60)"
      },
      {
        "name": "type",
        "type": "InterviewType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type            InterviewType"
      },
      {
        "name": "location",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location        String?"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           String?"
      },
      {
        "name": "feedback",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feedback        String?"
      },
      {
        "name": "rating",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rating          Int?"
      },
      {
        "name": "status",
        "type": "InterviewStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "SCHEDULED",
        "sourceLine": "status          InterviewStatus @default(SCHEDULED)"
      }
    ]
  },
  {
    "id": "agency-services-prisma-schema-prisma-invoice",
    "sourceProject": "agencyServices",
    "name": "Invoice",
    "displayName": "Invoice",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String   @id @default(cuid())"
      },
      {
        "name": "invoiceNumber",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "invoiceNumber   String   @unique"
      },
      {
        "name": "clientId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId        String"
      },
      {
        "name": "client",
        "type": "Client",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client          Client   @relation(fields: [clientId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "createdById",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "createdById     String"
      },
      {
        "name": "createdBy",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "createdBy       User     @relation(fields: [createdById], references: [id])"
      },
      {
        "name": "type",
        "type": "BillingType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type            BillingType"
      },
      {
        "name": "status",
        "type": "InvoiceStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "DRAFT",
        "sourceLine": "status          InvoiceStatus @default(DRAFT)"
      },
      {
        "name": "subtotal",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subtotal        Float"
      },
      {
        "name": "tax",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "tax             Float    @default(0)"
      },
      {
        "name": "total",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total           Float"
      },
      {
        "name": "dueDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dueDate         DateTime"
      },
      {
        "name": "paidAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "paidAt          DateTime?"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           String?"
      },
      {
        "name": "items",
        "type": "InvoiceItem[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "items           InvoiceItem[]"
      },
      {
        "name": "payments",
        "type": "Payment[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payments        Payment[]"
      }
    ]
  },
  {
    "id": "agency-services-prisma-schema-prisma-invoice-item",
    "sourceProject": "agencyServices",
    "name": "InvoiceItem",
    "displayName": "Invoice Item",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String   @id @default(cuid())"
      },
      {
        "name": "invoiceId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "invoiceId       String"
      },
      {
        "name": "invoice",
        "type": "Invoice",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "invoice         Invoice  @relation(fields: [invoiceId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "description",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description     String"
      },
      {
        "name": "quantity",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quantity        Float"
      },
      {
        "name": "unitPrice",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unitPrice       Float"
      },
      {
        "name": "amount",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount          Float"
      }
    ]
  },
  {
    "id": "agency-services-prisma-schema-prisma-job-position",
    "sourceProject": "agencyServices",
    "name": "JobPosition",
    "displayName": "Job Position",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String   @id @default(cuid())"
      },
      {
        "name": "title",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title           String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description     String?"
      },
      {
        "name": "requirements",
        "type": "String[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "requirements    String[]"
      },
      {
        "name": "skills",
        "type": "String[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "skills          String[]"
      },
      {
        "name": "location",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location        String?"
      },
      {
        "name": "salaryMin",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salaryMin       Float?"
      },
      {
        "name": "salaryMax",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salaryMax       Float?"
      },
      {
        "name": "type",
        "type": "JobType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FULL_TIME",
        "sourceLine": "type            JobType  @default(FULL_TIME)"
      },
      {
        "name": "status",
        "type": "JobStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "OPEN",
        "sourceLine": "status          JobStatus @default(OPEN)"
      },
      {
        "name": "applications",
        "type": "Application[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "applications    Application[]"
      },
      {
        "name": "placements",
        "type": "Placement[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "placements      Placement[]"
      }
    ]
  },
  {
    "id": "agency-services-prisma-schema-prisma-lead",
    "sourceProject": "agencyServices",
    "name": "Lead",
    "displayName": "Lead",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String   @id @default(cuid())"
      },
      {
        "name": "firstName",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "firstName       String"
      },
      {
        "name": "lastName",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lastName        String"
      },
      {
        "name": "email",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email           String"
      },
      {
        "name": "phone",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone           String?"
      },
      {
        "name": "company",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company         String?"
      },
      {
        "name": "title",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title           String?"
      },
      {
        "name": "source",
        "type": "LeadSource",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source          LeadSource"
      },
      {
        "name": "status",
        "type": "LeadStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NEW",
        "sourceLine": "status          LeadStatus @default(NEW)"
      },
      {
        "name": "score",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "score           Int      @default(0)"
      },
      {
        "name": "qualityScore",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "qualityScore    Int?"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           String?"
      },
      {
        "name": "clientId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId        String?"
      },
      {
        "name": "client",
        "type": "Client?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client          Client?  @relation(fields: [clientId], references: [id])"
      },
      {
        "name": "assignedToId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assignedToId    String?"
      },
      {
        "name": "assignedTo",
        "type": "User?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assignedTo      User?    @relation(fields: [assignedToId], references: [id])"
      },
      {
        "name": "convertedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "convertedAt     DateTime?"
      },
      {
        "name": "followUps",
        "type": "FollowUp[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "followUps       FollowUp[]"
      },
      {
        "name": "distributions",
        "type": "LeadDistribution[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "distributions   LeadDistribution[]"
      }
    ]
  },
  {
    "id": "agency-services-prisma-schema-prisma-lead-distribution",
    "sourceProject": "agencyServices",
    "name": "LeadDistribution",
    "displayName": "Lead Distribution",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String   @id @default(cuid())"
      },
      {
        "name": "leadId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "leadId          String"
      },
      {
        "name": "lead",
        "type": "Lead",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lead            Lead     @relation(fields: [leadId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "assignedTo",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assignedTo      String"
      },
      {
        "name": "assignedAt",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now(",
        "sourceLine": "assignedAt      DateTime @default(now())"
      },
      {
        "name": "reason",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reason          String?"
      }
    ]
  },
  {
    "id": "agency-services-prisma-schema-prisma-lookup",
    "sourceProject": "agencyServices",
    "name": "Lookup",
    "displayName": "Lookup",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id          String   @id @default(cuid())"
      },
      {
        "name": "category",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category    String   // e.g., \"industry\", \"lead_source\", \"candidate_source\""
      },
      {
        "name": "value",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "value       String   // The actual value stored in database"
      },
      {
        "name": "label",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "label       String   // Display label for UI"
      },
      {
        "name": "order",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "order       Int      @default(0)"
      },
      {
        "name": "active",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "active      Boolean  @default(true)"
      }
    ]
  },
  {
    "id": "agency-services-prisma-schema-prisma-milestone",
    "sourceProject": "agencyServices",
    "name": "Milestone",
    "displayName": "Milestone",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String   @id @default(cuid())"
      },
      {
        "name": "projectId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "projectId       String"
      },
      {
        "name": "project",
        "type": "Project",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project         Project  @relation(fields: [projectId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "title",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title           String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description     String?"
      },
      {
        "name": "dueDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dueDate         DateTime"
      },
      {
        "name": "completed",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "completed       Boolean  @default(false)"
      },
      {
        "name": "completedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "completedAt     DateTime?"
      }
    ]
  },
  {
    "id": "agency-services-prisma-schema-prisma-offer",
    "sourceProject": "agencyServices",
    "name": "Offer",
    "displayName": "Offer",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String   @id @default(cuid())"
      },
      {
        "name": "candidateId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "candidateId     String"
      },
      {
        "name": "candidate",
        "type": "Candidate",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "candidate       Candidate @relation(fields: [candidateId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "salary",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salary          Float"
      },
      {
        "name": "startDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "startDate       DateTime"
      },
      {
        "name": "expiresAt",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expiresAt       DateTime"
      },
      {
        "name": "status",
        "type": "OfferStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "PENDING",
        "sourceLine": "status          OfferStatus @default(PENDING)"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           String?"
      }
    ]
  },
  {
    "id": "agency-services-prisma-schema-prisma-password-reset-token",
    "sourceProject": "agencyServices",
    "name": "PasswordResetToken",
    "displayName": "Password Reset Token",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id        String   @id @default(cuid())"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId    String"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "token",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "token     String   @unique"
      },
      {
        "name": "expiresAt",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expiresAt DateTime"
      },
      {
        "name": "used",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "used      Boolean  @default(false)"
      }
    ]
  },
  {
    "id": "agency-services-prisma-schema-prisma-payment",
    "sourceProject": "agencyServices",
    "name": "Payment",
    "displayName": "Payment",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String   @id @default(cuid())"
      },
      {
        "name": "invoiceId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "invoiceId       String"
      },
      {
        "name": "invoice",
        "type": "Invoice",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "invoice         Invoice  @relation(fields: [invoiceId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "amount",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount          Float"
      },
      {
        "name": "method",
        "type": "PaymentMethod",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "method          PaymentMethod"
      },
      {
        "name": "reference",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reference       String?"
      },
      {
        "name": "paidAt",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now(",
        "sourceLine": "paidAt          DateTime @default(now())"
      }
    ]
  },
  {
    "id": "agency-services-prisma-schema-prisma-placement",
    "sourceProject": "agencyServices",
    "name": "Placement",
    "displayName": "Placement",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String   @id @default(cuid())"
      },
      {
        "name": "candidateId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "candidateId     String"
      },
      {
        "name": "candidate",
        "type": "Candidate",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "candidate       Candidate @relation(fields: [candidateId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "jobId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "jobId           String"
      },
      {
        "name": "job",
        "type": "JobPosition",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "job             JobPosition @relation(fields: [jobId], references: [id])"
      },
      {
        "name": "startDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "startDate       DateTime"
      },
      {
        "name": "endDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "endDate         DateTime?"
      },
      {
        "name": "salary",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "salary          Float"
      },
      {
        "name": "fee",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fee             Float?"
      },
      {
        "name": "status",
        "type": "PlacementStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "ACTIVE",
        "sourceLine": "status          PlacementStatus @default(ACTIVE)"
      }
    ]
  },
  {
    "id": "agency-services-prisma-schema-prisma-project",
    "sourceProject": "agencyServices",
    "name": "Project",
    "displayName": "Project",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String   @id @default(cuid())"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description     String?"
      },
      {
        "name": "clientId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId        String"
      },
      {
        "name": "client",
        "type": "Client",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client          Client   @relation(fields: [clientId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "managerId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "managerId       String"
      },
      {
        "name": "manager",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "manager         User     @relation(fields: [managerId], references: [id])"
      },
      {
        "name": "status",
        "type": "ProjectStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "PLANNING",
        "sourceLine": "status          ProjectStatus @default(PLANNING)"
      },
      {
        "name": "startDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "startDate       DateTime?"
      },
      {
        "name": "endDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "endDate         DateTime?"
      },
      {
        "name": "budget",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "budget          Float?"
      },
      {
        "name": "tasks",
        "type": "Task[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tasks           Task[]"
      },
      {
        "name": "milestones",
        "type": "Milestone[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "milestones      Milestone[]"
      },
      {
        "name": "teamMembers",
        "type": "TeamMember[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "teamMembers     TeamMember[]"
      },
      {
        "name": "files",
        "type": "ProjectFile[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "files           ProjectFile[]"
      },
      {
        "name": "approvalWorkflows",
        "type": "ApprovalWorkflow[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "approvalWorkflows ApprovalWorkflow[]"
      },
      {
        "name": "timeEntries",
        "type": "TimeEntry[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "timeEntries     TimeEntry[]"
      }
    ]
  },
  {
    "id": "agency-services-prisma-schema-prisma-project-file",
    "sourceProject": "agencyServices",
    "name": "ProjectFile",
    "displayName": "Project File",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String   @id @default(cuid())"
      },
      {
        "name": "projectId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "projectId       String"
      },
      {
        "name": "project",
        "type": "Project",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project         Project  @relation(fields: [projectId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            String"
      },
      {
        "name": "url",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "url             String"
      },
      {
        "name": "type",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type            String"
      },
      {
        "name": "size",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "size            Int"
      },
      {
        "name": "uploadedAt",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now(",
        "sourceLine": "uploadedAt      DateTime @default(now())"
      }
    ]
  },
  {
    "id": "agency-services-prisma-schema-prisma-retainer",
    "sourceProject": "agencyServices",
    "name": "Retainer",
    "displayName": "Retainer",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String   @id @default(cuid())"
      },
      {
        "name": "clientId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId        String"
      },
      {
        "name": "amount",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount          Float"
      },
      {
        "name": "frequency",
        "type": "RetainerFrequency",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "frequency       RetainerFrequency"
      },
      {
        "name": "startDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "startDate       DateTime"
      },
      {
        "name": "endDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "endDate         DateTime?"
      },
      {
        "name": "status",
        "type": "RetainerStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "ACTIVE",
        "sourceLine": "status          RetainerStatus @default(ACTIVE)"
      }
    ]
  },
  {
    "id": "agency-services-prisma-schema-prisma-task",
    "sourceProject": "agencyServices",
    "name": "Task",
    "displayName": "Task",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String   @id @default(cuid())"
      },
      {
        "name": "projectId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "projectId       String"
      },
      {
        "name": "project",
        "type": "Project",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project         Project  @relation(fields: [projectId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "title",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title           String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description     String?"
      },
      {
        "name": "assigneeId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assigneeId      String?"
      },
      {
        "name": "assignee",
        "type": "User?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assignee        User?    @relation(fields: [assigneeId], references: [id])"
      },
      {
        "name": "status",
        "type": "TaskStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TODO",
        "sourceLine": "status          TaskStatus @default(TODO)"
      },
      {
        "name": "priority",
        "type": "Priority",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "MEDIUM",
        "sourceLine": "priority        Priority @default(MEDIUM)"
      },
      {
        "name": "dueDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dueDate         DateTime?"
      },
      {
        "name": "estimatedHours",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimatedHours  Float?"
      },
      {
        "name": "comments",
        "type": "Comment[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "comments        Comment[]"
      },
      {
        "name": "timeEntries",
        "type": "TimeEntry[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "timeEntries     TimeEntry[]"
      }
    ]
  },
  {
    "id": "agency-services-prisma-schema-prisma-team-member",
    "sourceProject": "agencyServices",
    "name": "TeamMember",
    "displayName": "Team Member",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String   @id @default(cuid())"
      },
      {
        "name": "projectId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "projectId       String"
      },
      {
        "name": "project",
        "type": "Project",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project         Project  @relation(fields: [projectId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId          String"
      },
      {
        "name": "role",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "role            String?"
      }
    ]
  },
  {
    "id": "agency-services-prisma-schema-prisma-time-entry",
    "sourceProject": "agencyServices",
    "name": "TimeEntry",
    "displayName": "Time Entry",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String   @id @default(cuid())"
      },
      {
        "name": "projectId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "projectId       String"
      },
      {
        "name": "project",
        "type": "Project",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project         Project  @relation(fields: [projectId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "taskId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "taskId          String?"
      },
      {
        "name": "task",
        "type": "Task?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "task            Task?    @relation(fields: [taskId], references: [id])"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId          String"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user            User     @relation(fields: [userId], references: [id])"
      },
      {
        "name": "hours",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hours           Float"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description     String?"
      },
      {
        "name": "date",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date            DateTime"
      },
      {
        "name": "billable",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "billable        Boolean  @default(true)"
      }
    ]
  },
  {
    "id": "agency-services-prisma-schema-prisma-user",
    "sourceProject": "agencyServices",
    "name": "User",
    "displayName": "User",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "cuid(",
        "sourceLine": "id              String    @id @default(cuid())"
      },
      {
        "name": "email",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email           String    @unique"
      },
      {
        "name": "password",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password        String"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            String"
      },
      {
        "name": "role",
        "type": "UserRole",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "MEMBER",
        "sourceLine": "role            UserRole  @default(MEMBER)"
      },
      {
        "name": "avatar",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "avatar          String?"
      },
      {
        "name": "emailVerified",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "emailVerified   Boolean   @default(false)"
      },
      {
        "name": "verifyToken",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "verifyToken     String?"
      },
      {
        "name": "verifyTokenExp",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "verifyTokenExp  DateTime?"
      },
      {
        "name": "clients",
        "type": "Client[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clients              Client[]"
      },
      {
        "name": "projects",
        "type": "Project[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "projects             Project[]"
      },
      {
        "name": "tasks",
        "type": "Task[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tasks                Task[]"
      },
      {
        "name": "timeEntries",
        "type": "TimeEntry[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "timeEntries          TimeEntry[]"
      },
      {
        "name": "campaigns",
        "type": "Campaign[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "campaigns            Campaign[]"
      },
      {
        "name": "candidates",
        "type": "Candidate[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "candidates           Candidate[]"
      },
      {
        "name": "leads",
        "type": "Lead[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "leads                Lead[]"
      },
      {
        "name": "invoices",
        "type": "Invoice[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "invoices             Invoice[]"
      },
      {
        "name": "communications",
        "type": "Communication[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "communications       Communication[]"
      },
      {
        "name": "approvalWorkflows",
        "type": "ApprovalWorkflow[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "approvalWorkflows    ApprovalWorkflow[]"
      },
      {
        "name": "comments",
        "type": "Comment[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "comments             Comment[]"
      },
      {
        "name": "activities",
        "type": "Activity[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "activities           Activity[]"
      },
      {
        "name": "passwordResets",
        "type": "PasswordResetToken[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "passwordResets       PasswordResetToken[]"
      }
    ]
  },
  {
    "id": "ai-aerospace-mro-backend-routes-ai-js-ai-results",
    "sourceProject": "AIAerospaceMRO",
    "name": "ai_results",
    "displayName": "Ai Results",
    "framework": "SQL",
    "sourceFile": "backend/routes/ai.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "endpoint",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "endpoint VARCHAR(100) NOT NULL"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "request_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "request_payload JSONB"
      },
      {
        "name": "raw_response",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "raw_response TEXT"
      },
      {
        "name": "parsed_result",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "parsed_result JSONB"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(100)"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-aerospace-mro-backend-seed-js-aircraft-maintenance",
    "sourceProject": "AIAerospaceMRO",
    "name": "aircraft_maintenance",
    "displayName": "Aircraft Maintenance",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "aircraft_reg",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aircraft_reg VARCHAR(20)"
      },
      {
        "name": "aircraft_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aircraft_type VARCHAR(100)"
      },
      {
        "name": "maintenance_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "maintenance_type VARCHAR(100)"
      },
      {
        "name": "scheduled_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scheduled_date DATE"
      },
      {
        "name": "due_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "due_date DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Scheduled'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'Scheduled'"
      },
      {
        "name": "priority",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Medium'",
        "sourceLine": "priority VARCHAR(20) DEFAULT 'Medium'"
      },
      {
        "name": "assigned_team",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assigned_team VARCHAR(100)"
      },
      {
        "name": "estimated_hours",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimated_hours DECIMAL(10,2)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "hangar_location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hangar_location VARCHAR(50)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-aerospace-mro-backend-seed-js-audit-log",
    "sourceProject": "AIAerospaceMRO",
    "name": "audit_log",
    "displayName": "Audit Log",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "log_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "log_number VARCHAR(50) UNIQUE"
      },
      {
        "name": "action_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "action_type VARCHAR(50)"
      },
      {
        "name": "module",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "module VARCHAR(100)"
      },
      {
        "name": "record_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "record_id INTEGER"
      },
      {
        "name": "record_reference",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "record_reference VARCHAR(100)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "performed_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "performed_by VARCHAR(100)"
      },
      {
        "name": "user_role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_role VARCHAR(50)"
      },
      {
        "name": "ip_address",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ip_address VARCHAR(50)"
      },
      {
        "name": "old_value",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "old_value TEXT"
      },
      {
        "name": "new_value",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "new_value TEXT"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Info'",
        "sourceLine": "severity VARCHAR(20) DEFAULT 'Info'"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Logged'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'Logged'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-aerospace-mro-backend-seed-js-compliance-records",
    "sourceProject": "AIAerospaceMRO",
    "name": "compliance_records",
    "displayName": "Compliance Records",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "directive_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "directive_number VARCHAR(50)"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(300)"
      },
      {
        "name": "authority",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'FAA'",
        "sourceLine": "authority VARCHAR(50) DEFAULT 'FAA'"
      },
      {
        "name": "aircraft_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aircraft_type VARCHAR(100)"
      },
      {
        "name": "applicability",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "applicability TEXT"
      },
      {
        "name": "compliance_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "compliance_date DATE"
      },
      {
        "name": "due_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "due_date DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Open'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'Open'"
      },
      {
        "name": "priority",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'High'",
        "sourceLine": "priority VARCHAR(20) DEFAULT 'High'"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "corrective_action",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "corrective_action TEXT"
      },
      {
        "name": "inspector_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inspector_name VARCHAR(100)"
      },
      {
        "name": "documentation_ref",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "documentation_ref VARCHAR(200)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-aerospace-mro-backend-seed-js-customers",
    "sourceProject": "AIAerospaceMRO",
    "name": "customers",
    "displayName": "Customers",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "customer_code",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customer_code VARCHAR(20)"
      },
      {
        "name": "company_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_name VARCHAR(200)"
      },
      {
        "name": "contact_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contact_name VARCHAR(100)"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255)"
      },
      {
        "name": "phone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone VARCHAR(20)"
      },
      {
        "name": "address",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "address TEXT"
      },
      {
        "name": "city",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "city VARCHAR(100)"
      },
      {
        "name": "country",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "country VARCHAR(100)"
      },
      {
        "name": "customer_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Airline'",
        "sourceLine": "customer_type VARCHAR(50) DEFAULT 'Airline'"
      },
      {
        "name": "fleet_size",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "fleet_size INTEGER DEFAULT 0"
      },
      {
        "name": "contract_start",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contract_start DATE"
      },
      {
        "name": "contract_end",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contract_end DATE"
      },
      {
        "name": "account_manager",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "account_manager VARCHAR(100)"
      },
      {
        "name": "credit_limit",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "credit_limit DECIMAL(14,2) DEFAULT 0"
      },
      {
        "name": "total_revenue",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "total_revenue DECIMAL(14,2) DEFAULT 0"
      },
      {
        "name": "total_work_orders",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "total_work_orders INTEGER DEFAULT 0"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Active'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'Active'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-aerospace-mro-backend-seed-js-documents",
    "sourceProject": "AIAerospaceMRO",
    "name": "documents",
    "displayName": "Documents",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "document_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "document_number VARCHAR(50) UNIQUE"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(300)"
      },
      {
        "name": "document_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "document_type VARCHAR(100)"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100)"
      },
      {
        "name": "revision",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Rev",
        "sourceLine": "revision VARCHAR(20) DEFAULT 'Rev A'"
      },
      {
        "name": "effective_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "effective_date DATE"
      },
      {
        "name": "expiry_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expiry_date DATE"
      },
      {
        "name": "aircraft_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aircraft_type VARCHAR(100)"
      },
      {
        "name": "ata_chapter",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ata_chapter VARCHAR(20)"
      },
      {
        "name": "author",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "author VARCHAR(100)"
      },
      {
        "name": "approved_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "approved_by VARCHAR(100)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'Active'"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "file_reference",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "file_reference VARCHAR(300)"
      },
      {
        "name": "distribution_list",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "distribution_list TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-aerospace-mro-backend-seed-js-fleet-health",
    "sourceProject": "AIAerospaceMRO",
    "name": "fleet_health",
    "displayName": "Fleet Health",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "aircraft_reg",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aircraft_reg VARCHAR(20)"
      },
      {
        "name": "aircraft_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aircraft_type VARCHAR(100)"
      },
      {
        "name": "operator",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "operator VARCHAR(100)"
      },
      {
        "name": "total_flight_hours",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total_flight_hours DECIMAL(12,2)"
      },
      {
        "name": "total_cycles",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total_cycles INTEGER"
      },
      {
        "name": "last_major_check",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_major_check VARCHAR(20)"
      },
      {
        "name": "last_check_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_check_date DATE"
      },
      {
        "name": "next_check_due",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "next_check_due DATE"
      },
      {
        "name": "health_score",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "100",
        "sourceLine": "health_score INTEGER DEFAULT 100"
      },
      {
        "name": "engine_status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Normal'",
        "sourceLine": "engine_status VARCHAR(50) DEFAULT 'Normal'"
      },
      {
        "name": "avionics_status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Normal'",
        "sourceLine": "avionics_status VARCHAR(50) DEFAULT 'Normal'"
      },
      {
        "name": "airframe_status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Normal'",
        "sourceLine": "airframe_status VARCHAR(50) DEFAULT 'Normal'"
      },
      {
        "name": "landing_gear_status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Normal'",
        "sourceLine": "landing_gear_status VARCHAR(50) DEFAULT 'Normal'"
      },
      {
        "name": "apu_status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Normal'",
        "sourceLine": "apu_status VARCHAR(50) DEFAULT 'Normal'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-aerospace-mro-backend-routes-gap-ai-cross-fleet-asset-reallocation-js-gap-features",
    "sourceProject": "AIAerospaceMRO",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_ai_cross_fleet_asset_reallocation.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-aerospace-mro-backend-routes-gap-ai-hangar-bay-assignment-optimization-js-gap-features",
    "sourceProject": "AIAerospaceMRO",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_ai_hangar_bay_assignment_optimization.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-aerospace-mro-backend-routes-gap-ai-supply-chain-disruption-forecasting-js-gap-features",
    "sourceProject": "AIAerospaceMRO",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_ai_supply_chain_disruption_forecasting.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-aerospace-mro-backend-routes-gap-ai-training-path-recommendation-technician-js-gap-features",
    "sourceProject": "AIAerospaceMRO",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_ai_training_path_recommendation_technician.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-aerospace-mro-backend-routes-gap-customer-portal-fleet-owner-visibility-js-gap-features",
    "sourceProject": "AIAerospaceMRO",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_customer_portal_fleet_owner_visibility.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-aerospace-mro-backend-routes-gap-environmental-impact-carbon-footprint-reporting-js-gap-features",
    "sourceProject": "AIAerospaceMRO",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_environmental_impact_carbon_footprint_reporting.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-aerospace-mro-backend-routes-gap-mobile-technician-app-job-reference-js-gap-features",
    "sourceProject": "AIAerospaceMRO",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_mobile_technician_app_job_reference.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-aerospace-mro-backend-routes-gap-notifications-subsystem-visible-js-gap-features",
    "sourceProject": "AIAerospaceMRO",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_notifications_subsystem_visible.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-aerospace-mro-backend-routes-gap-oem-data-bridge-boeing-airbus-js-gap-features",
    "sourceProject": "AIAerospaceMRO",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_oem_data_bridge_boeing_airbus.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-aerospace-mro-backend-routes-gap-outbound-webhooks-js-gap-features",
    "sourceProject": "AIAerospaceMRO",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_outbound_webhooks.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-aerospace-mro-backend-seed-js-hangar-management",
    "sourceProject": "AIAerospaceMRO",
    "name": "hangar_management",
    "displayName": "Hangar Management",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "hangar_code",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hangar_code VARCHAR(20)"
      },
      {
        "name": "hangar_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hangar_name VARCHAR(100)"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(100)"
      },
      {
        "name": "capacity",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "capacity INTEGER DEFAULT 0"
      },
      {
        "name": "current_occupancy",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "current_occupancy INTEGER DEFAULT 0"
      },
      {
        "name": "aircraft_reg",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aircraft_reg VARCHAR(20)"
      },
      {
        "name": "hangar_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'General'",
        "sourceLine": "hangar_type VARCHAR(50) DEFAULT 'General'"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Available'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'Available'"
      },
      {
        "name": "equipment_available",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "equipment_available TEXT"
      },
      {
        "name": "contact_person",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contact_person VARCHAR(100)"
      },
      {
        "name": "phone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone VARCHAR(20)"
      },
      {
        "name": "daily_rate",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "daily_rate DECIMAL(12,2) DEFAULT 0"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-aerospace-mro-backend-seed-js-inventory",
    "sourceProject": "AIAerospaceMRO",
    "name": "inventory",
    "displayName": "Inventory",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "part_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "part_number VARCHAR(50)"
      },
      {
        "name": "part_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "part_name VARCHAR(200)"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100)"
      },
      {
        "name": "quantity",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "quantity INTEGER DEFAULT 0"
      },
      {
        "name": "min_quantity",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "5",
        "sourceLine": "min_quantity INTEGER DEFAULT 5"
      },
      {
        "name": "unit_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unit_cost DECIMAL(12,2)"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(100)"
      },
      {
        "name": "warehouse",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "warehouse VARCHAR(50)"
      },
      {
        "name": "supplier",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "supplier VARCHAR(200)"
      },
      {
        "name": "condition_code",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'NEW'",
        "sourceLine": "condition_code VARCHAR(20) DEFAULT 'NEW'"
      },
      {
        "name": "certification",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "certification VARCHAR(100)"
      },
      {
        "name": "last_received",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_received DATE"
      },
      {
        "name": "expiry_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expiry_date DATE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-aerospace-mro-backend-routes-ai-js-maintenance-predictions",
    "sourceProject": "AIAerospaceMRO",
    "name": "maintenance_predictions",
    "displayName": "Maintenance Predictions",
    "framework": "SQL",
    "sourceFile": "backend/routes/ai.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "aircraft_id",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aircraft_id TEXT NOT NULL"
      },
      {
        "name": "lookahead_days",
        "type": "INT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "90",
        "sourceLine": "lookahead_days INT NOT NULL DEFAULT 90"
      },
      {
        "name": "predicted_maintenance_windows",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "predicted_maintenance_windows JSONB"
      },
      {
        "name": "parts_likely_to_fail",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "parts_likely_to_fail JSONB"
      },
      {
        "name": "estimated_labor_cost",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimated_labor_cost NUMERIC"
      },
      {
        "name": "estimated_parts_cost",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimated_parts_cost NUMERIC"
      },
      {
        "name": "ai_analysis",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_analysis TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-aerospace-mro-backend-seed-js-mel-items",
    "sourceProject": "AIAerospaceMRO",
    "name": "mel_items",
    "displayName": "Mel Items",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "mel_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "mel_number VARCHAR(50) UNIQUE"
      },
      {
        "name": "aircraft_reg",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aircraft_reg VARCHAR(20)"
      },
      {
        "name": "ata_chapter",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ata_chapter VARCHAR(20)"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(300)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'C'",
        "sourceLine": "category VARCHAR(10) DEFAULT 'C'"
      },
      {
        "name": "deferral_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deferral_date DATE"
      },
      {
        "name": "expiry_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expiry_date DATE"
      },
      {
        "name": "rectification_interval",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rectification_interval VARCHAR(50)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'Active'"
      },
      {
        "name": "operational_restriction",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "operational_restriction TEXT"
      },
      {
        "name": "maintenance_action",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "maintenance_action TEXT"
      },
      {
        "name": "deferred_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deferred_by VARCHAR(100)"
      },
      {
        "name": "approved_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "approved_by VARCHAR(100)"
      },
      {
        "name": "rectified_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rectified_date DATE"
      },
      {
        "name": "rectified_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rectified_by VARCHAR(100)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-aerospace-mro-backend-seed-js-part-lifecycle",
    "sourceProject": "AIAerospaceMRO",
    "name": "part_lifecycle",
    "displayName": "Part Lifecycle",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "part_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "part_number VARCHAR(50)"
      },
      {
        "name": "part_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "part_name VARCHAR(200)"
      },
      {
        "name": "serial_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serial_number VARCHAR(100)"
      },
      {
        "name": "aircraft_reg",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aircraft_reg VARCHAR(20)"
      },
      {
        "name": "installed_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "installed_date DATE"
      },
      {
        "name": "last_inspection",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_inspection DATE"
      },
      {
        "name": "next_inspection",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "next_inspection DATE"
      },
      {
        "name": "cycle_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "cycle_count INTEGER DEFAULT 0"
      },
      {
        "name": "max_cycles",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "max_cycles INTEGER"
      },
      {
        "name": "flight_hours",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "flight_hours DECIMAL(10,2) DEFAULT 0"
      },
      {
        "name": "max_flight_hours",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "max_flight_hours DECIMAL(10,2)"
      },
      {
        "name": "condition_status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Serviceable'",
        "sourceLine": "condition_status VARCHAR(50) DEFAULT 'Serviceable'"
      },
      {
        "name": "manufacturer",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "manufacturer VARCHAR(100)"
      },
      {
        "name": "certificate_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "certificate_number VARCHAR(100)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-aerospace-mro-backend-routes-part-lifecycle-js-part-movements",
    "sourceProject": "AIAerospaceMRO",
    "name": "part_movements",
    "displayName": "Part Movements",
    "framework": "SQL",
    "sourceFile": "backend/routes/partLifecycle.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "part_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "part_id INTEGER NOT NULL"
      },
      {
        "name": "action",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "action VARCHAR(50) NOT NULL"
      },
      {
        "name": "technician_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technician_id INTEGER"
      },
      {
        "name": "technician_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technician_name VARCHAR(100)"
      },
      {
        "name": "work_order_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "work_order_id INTEGER"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(200)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "performed_by_user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "performed_by_user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-aerospace-mro-backend-seed-js-purchase-orders",
    "sourceProject": "AIAerospaceMRO",
    "name": "purchase_orders",
    "displayName": "Purchase Orders",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "po_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "po_number VARCHAR(50) UNIQUE"
      },
      {
        "name": "vendor_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vendor_name VARCHAR(200)"
      },
      {
        "name": "vendor_code",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vendor_code VARCHAR(20)"
      },
      {
        "name": "order_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "order_date DATE"
      },
      {
        "name": "expected_delivery",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expected_delivery DATE"
      },
      {
        "name": "actual_delivery",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "actual_delivery DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Draft'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'Draft'"
      },
      {
        "name": "priority",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Medium'",
        "sourceLine": "priority VARCHAR(20) DEFAULT 'Medium'"
      },
      {
        "name": "total_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "total_amount DECIMAL(14,2) DEFAULT 0"
      },
      {
        "name": "currency",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'USD'",
        "sourceLine": "currency VARCHAR(10) DEFAULT 'USD'"
      },
      {
        "name": "items_description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "items_description TEXT"
      },
      {
        "name": "quantity",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1",
        "sourceLine": "quantity INTEGER DEFAULT 1"
      },
      {
        "name": "unit_price",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unit_price DECIMAL(12,2)"
      },
      {
        "name": "requested_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "requested_by VARCHAR(100)"
      },
      {
        "name": "approved_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "approved_by VARCHAR(100)"
      },
      {
        "name": "aircraft_reg",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aircraft_reg VARCHAR(20)"
      },
      {
        "name": "department",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "department VARCHAR(100)"
      },
      {
        "name": "payment_status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Pending'",
        "sourceLine": "payment_status VARCHAR(50) DEFAULT 'Pending'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-aerospace-mro-backend-seed-js-safety-incidents",
    "sourceProject": "AIAerospaceMRO",
    "name": "safety_incidents",
    "displayName": "Safety Incidents",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "incident_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "incident_number VARCHAR(50) UNIQUE"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(300)"
      },
      {
        "name": "incident_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "incident_date DATE"
      },
      {
        "name": "aircraft_reg",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aircraft_reg VARCHAR(20)"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(100)"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Minor'",
        "sourceLine": "severity VARCHAR(20) DEFAULT 'Minor'"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100)"
      },
      {
        "name": "reported_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reported_by VARCHAR(100)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "root_cause",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "root_cause TEXT"
      },
      {
        "name": "corrective_action",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "corrective_action TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Open'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'Open'"
      },
      {
        "name": "investigation_lead",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "investigation_lead VARCHAR(100)"
      },
      {
        "name": "closure_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "closure_date DATE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-aerospace-mro-backend-seed-js-shift-scheduling",
    "sourceProject": "AIAerospaceMRO",
    "name": "shift_scheduling",
    "displayName": "Shift Scheduling",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "shift_code",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "shift_code VARCHAR(20)"
      },
      {
        "name": "technician_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technician_name VARCHAR(100)"
      },
      {
        "name": "employee_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "employee_id VARCHAR(20)"
      },
      {
        "name": "shift_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Day'",
        "sourceLine": "shift_type VARCHAR(20) DEFAULT 'Day'"
      },
      {
        "name": "shift_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "shift_date DATE"
      },
      {
        "name": "start_time",
        "type": "TIME",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_time TIME"
      },
      {
        "name": "end_time",
        "type": "TIME",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "end_time TIME"
      },
      {
        "name": "hangar_location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hangar_location VARCHAR(50)"
      },
      {
        "name": "aircraft_reg",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aircraft_reg VARCHAR(20)"
      },
      {
        "name": "task_description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "task_description TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Scheduled'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'Scheduled'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-aerospace-mro-backend-seed-js-technicians",
    "sourceProject": "AIAerospaceMRO",
    "name": "technicians",
    "displayName": "Technicians",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "employee_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "employee_id VARCHAR(20) UNIQUE"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(100)"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255)"
      },
      {
        "name": "phone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone VARCHAR(20)"
      },
      {
        "name": "specialization",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "specialization VARCHAR(100)"
      },
      {
        "name": "license_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "license_type VARCHAR(50)"
      },
      {
        "name": "license_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "license_number VARCHAR(50)"
      },
      {
        "name": "license_expiry",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "license_expiry DATE"
      },
      {
        "name": "certifications",
        "type": "TEXT[]",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "certifications TEXT[]"
      },
      {
        "name": "rating",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'A'",
        "sourceLine": "rating VARCHAR(20) DEFAULT 'A'"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Active'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'Active'"
      },
      {
        "name": "hire_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hire_date DATE"
      },
      {
        "name": "total_experience_years",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total_experience_years INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-aerospace-mro-backend-seed-js-tool-calibration",
    "sourceProject": "AIAerospaceMRO",
    "name": "tool_calibration",
    "displayName": "Tool Calibration",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "tool_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "tool_id VARCHAR(50) UNIQUE"
      },
      {
        "name": "tool_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tool_name VARCHAR(200)"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100)"
      },
      {
        "name": "manufacturer",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "manufacturer VARCHAR(100)"
      },
      {
        "name": "model_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_number VARCHAR(100)"
      },
      {
        "name": "serial_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serial_number VARCHAR(100)"
      },
      {
        "name": "calibration_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "calibration_date DATE"
      },
      {
        "name": "next_calibration",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "next_calibration DATE"
      },
      {
        "name": "calibration_interval_days",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "365",
        "sourceLine": "calibration_interval_days INTEGER DEFAULT 365"
      },
      {
        "name": "calibration_standard",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "calibration_standard VARCHAR(200)"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(100)"
      },
      {
        "name": "assigned_to",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assigned_to VARCHAR(100)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Calibrated'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'Calibrated'"
      },
      {
        "name": "accuracy_rating",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Pass'",
        "sourceLine": "accuracy_rating VARCHAR(20) DEFAULT 'Pass'"
      },
      {
        "name": "certificate_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "certificate_number VARCHAR(100)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-aerospace-mro-backend-seed-js-training-records",
    "sourceProject": "AIAerospaceMRO",
    "name": "training_records",
    "displayName": "Training Records",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "record_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "record_number VARCHAR(20)"
      },
      {
        "name": "employee_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "employee_id VARCHAR(20)"
      },
      {
        "name": "technician_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technician_name VARCHAR(100)"
      },
      {
        "name": "training_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Initial'",
        "sourceLine": "training_type VARCHAR(50) DEFAULT 'Initial'"
      },
      {
        "name": "course_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "course_name VARCHAR(200)"
      },
      {
        "name": "provider",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "provider VARCHAR(100)"
      },
      {
        "name": "start_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_date DATE"
      },
      {
        "name": "completion_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "completion_date DATE"
      },
      {
        "name": "expiry_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expiry_date DATE"
      },
      {
        "name": "score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "score DECIMAL(5,2)"
      },
      {
        "name": "pass_fail",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Pending'",
        "sourceLine": "pass_fail VARCHAR(10) DEFAULT 'Pending'"
      },
      {
        "name": "certificate_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "certificate_number VARCHAR(50)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Scheduled'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'Scheduled'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-aerospace-mro-backend-seed-js-users",
    "sourceProject": "AIAerospaceMRO",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(100) NOT NULL"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "password",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password VARCHAR(255) NOT NULL"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'technician'",
        "sourceLine": "role VARCHAR(50) DEFAULT 'technician'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-aerospace-mro-backend-seed-js-vendors",
    "sourceProject": "AIAerospaceMRO",
    "name": "vendors",
    "displayName": "Vendors",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "vendor_code",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "vendor_code VARCHAR(20) UNIQUE"
      },
      {
        "name": "company_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_name VARCHAR(200)"
      },
      {
        "name": "contact_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contact_name VARCHAR(100)"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255)"
      },
      {
        "name": "phone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone VARCHAR(20)"
      },
      {
        "name": "address",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "address TEXT"
      },
      {
        "name": "city",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "city VARCHAR(100)"
      },
      {
        "name": "country",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "country VARCHAR(100)"
      },
      {
        "name": "specialization",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "specialization VARCHAR(200)"
      },
      {
        "name": "rating",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "5.00",
        "sourceLine": "rating DECIMAL(3,2) DEFAULT 5.00"
      },
      {
        "name": "contract_start",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contract_start DATE"
      },
      {
        "name": "contract_end",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contract_end DATE"
      },
      {
        "name": "payment_terms",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payment_terms VARCHAR(50)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Active'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'Active'"
      },
      {
        "name": "total_orders",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "total_orders INTEGER DEFAULT 0"
      },
      {
        "name": "total_spent",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "total_spent DECIMAL(14,2) DEFAULT 0"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-aerospace-mro-backend-seed-js-warranty-tracking",
    "sourceProject": "AIAerospaceMRO",
    "name": "warranty_tracking",
    "displayName": "Warranty Tracking",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "warranty_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "warranty_number VARCHAR(20)"
      },
      {
        "name": "part_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "part_number VARCHAR(50)"
      },
      {
        "name": "part_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "part_name VARCHAR(200)"
      },
      {
        "name": "serial_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serial_number VARCHAR(100)"
      },
      {
        "name": "vendor_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vendor_name VARCHAR(200)"
      },
      {
        "name": "purchase_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "purchase_date DATE"
      },
      {
        "name": "warranty_start",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "warranty_start DATE"
      },
      {
        "name": "expiry_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expiry_date DATE"
      },
      {
        "name": "warranty_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Full'",
        "sourceLine": "warranty_type VARCHAR(50) DEFAULT 'Full'"
      },
      {
        "name": "coverage_details",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "coverage_details TEXT"
      },
      {
        "name": "claim_status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'No",
        "sourceLine": "claim_status VARCHAR(20) DEFAULT 'No Claim'"
      },
      {
        "name": "claim_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "claim_amount DECIMAL(12,2) DEFAULT 0"
      },
      {
        "name": "claim_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "claim_date DATE"
      },
      {
        "name": "claim_description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "claim_description TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Active'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'Active'"
      },
      {
        "name": "aircraft_reg",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aircraft_reg VARCHAR(20)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-aerospace-mro-backend-seed-js-work-orders",
    "sourceProject": "AIAerospaceMRO",
    "name": "work_orders",
    "displayName": "Work Orders",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "wo_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "wo_number VARCHAR(50) UNIQUE"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(300)"
      },
      {
        "name": "aircraft_reg",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aircraft_reg VARCHAR(20)"
      },
      {
        "name": "maintenance_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "maintenance_type VARCHAR(100)"
      },
      {
        "name": "priority",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Medium'",
        "sourceLine": "priority VARCHAR(20) DEFAULT 'Medium'"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Open'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'Open'"
      },
      {
        "name": "assigned_to",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assigned_to VARCHAR(100)"
      },
      {
        "name": "estimated_hours",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimated_hours DECIMAL(10,2)"
      },
      {
        "name": "actual_hours",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "actual_hours DECIMAL(10,2)"
      },
      {
        "name": "labor_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "labor_cost DECIMAL(12,2)"
      },
      {
        "name": "parts_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "parts_cost DECIMAL(12,2)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "start_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_date DATE"
      },
      {
        "name": "target_completion",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "target_completion DATE"
      },
      {
        "name": "completed_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "completed_date DATE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-architectural-design-generator-backend-src-routes-ai-extras-js-accessibility-audits",
    "sourceProject": "AIArchitecturalDesignGenerator",
    "name": "accessibility_audits",
    "displayName": "Accessibility Audits",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/aiExtras.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "design_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "design_id INTEGER"
      },
      {
        "name": "score",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "score INTEGER"
      },
      {
        "name": "ai_results",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_results JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-architectural-design-generator-backend-src-config-database-js-activity-log",
    "sourceProject": "AIArchitecturalDesignGenerator",
    "name": "activity_log",
    "displayName": "Activity Log",
    "framework": "SQL",
    "sourceFile": "backend/src/config/database.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "action",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "action VARCHAR(50) NOT NULL"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(100)"
      },
      {
        "name": "item_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "item_id INTEGER"
      },
      {
        "name": "item_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "item_name VARCHAR(255)"
      },
      {
        "name": "details",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "details TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-architectural-design-generator-backend-src-config-database-js-ai-results",
    "sourceProject": "AIArchitecturalDesignGenerator",
    "name": "ai_results",
    "displayName": "Ai Results",
    "framework": "SQL",
    "sourceFile": "backend/src/config/database.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(100) NOT NULL"
      },
      {
        "name": "item_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "item_id INTEGER"
      },
      {
        "name": "item_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "item_name VARCHAR(255)"
      },
      {
        "name": "result_data",
        "type": "JSONB",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_data JSONB NOT NULL"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-architectural-design-generator-backend-src-routes-ai-extras-js-architecture-templates",
    "sourceProject": "AIArchitecturalDesignGenerator",
    "name": "architecture_templates",
    "displayName": "Architecture Templates",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/aiExtras.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "template_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "template_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "dimensions",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dimensions JSONB"
      },
      {
        "name": "ai_results",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_results JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-architectural-design-generator-backend-src-routes-ai-extras-js-color-palettes",
    "sourceProject": "AIArchitecturalDesignGenerator",
    "name": "color_palettes",
    "displayName": "Color Palettes",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/aiExtras.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "room_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "room_type VARCHAR(100)"
      },
      {
        "name": "mood",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mood VARCHAR(100)"
      },
      {
        "name": "ai_results",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_results JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-architectural-design-generator-backend-src-routes-ai-backlog-js-design-collab-locks",
    "sourceProject": "AIArchitecturalDesignGenerator",
    "name": "design_collab_locks",
    "displayName": "Design Collab Locks",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/aiBacklog.js",
    "columns": [
      {
        "name": "design_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "design_id INTEGER PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "locked_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "locked_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "expires_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expires_at TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-architectural-design-generator-backend-src-routes-ai-backlog-js-design-comments",
    "sourceProject": "AIArchitecturalDesignGenerator",
    "name": "design_comments",
    "displayName": "Design Comments",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/aiBacklog.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "design_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "design_id INTEGER NOT NULL"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "author_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "author_name VARCHAR(255)"
      },
      {
        "name": "body",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "body TEXT NOT NULL"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-architectural-design-generator-backend-src-routes-ai-extras-js-design-comments",
    "sourceProject": "AIArchitecturalDesignGenerator",
    "name": "design_comments",
    "displayName": "Design Comments",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/aiExtras.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "design_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "design_id INTEGER NOT NULL"
      },
      {
        "name": "author",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "author VARCHAR(255)"
      },
      {
        "name": "comment_text",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "comment_text TEXT NOT NULL"
      },
      {
        "name": "ai_grouping",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_grouping JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-architectural-design-generator-backend-src-routes-ai-backlog-js-design-versions",
    "sourceProject": "AIArchitecturalDesignGenerator",
    "name": "design_versions",
    "displayName": "Design Versions",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/aiBacklog.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "design_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "design_id INTEGER NOT NULL"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "label",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "label VARCHAR(255)"
      },
      {
        "name": "snapshot",
        "type": "JSONB",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "snapshot JSONB NOT NULL"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-architectural-design-generator-backend-src-config-database-js-favorites",
    "sourceProject": "AIArchitecturalDesignGenerator",
    "name": "favorites",
    "displayName": "Favorites",
    "framework": "SQL",
    "sourceFile": "backend/src/config/database.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(100) NOT NULL"
      },
      {
        "name": "item_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "item_id INTEGER NOT NULL"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-architectural-design-generator-backend-src-routes-ai-extras-js-furniture-arrangements",
    "sourceProject": "AIArchitecturalDesignGenerator",
    "name": "furniture_arrangements",
    "displayName": "Furniture Arrangements",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/aiExtras.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "room_dimensions",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "room_dimensions JSONB"
      },
      {
        "name": "ai_results",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_results JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-architectural-design-generator-backend-src-routes-gap-ai-design-bim-conversion-2d-js-gap-features",
    "sourceProject": "AIArchitecturalDesignGenerator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap_ai_design_bim_conversion_2d.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-architectural-design-generator-backend-src-routes-gap-ai-energy-modeling-pipeline-js-gap-features",
    "sourceProject": "AIArchitecturalDesignGenerator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap_ai_energy_modeling_pipeline.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-architectural-design-generator-backend-src-routes-gap-ai-precedent-project-search-similar-js-gap-features",
    "sourceProject": "AIArchitecturalDesignGenerator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap_ai_precedent_project_search_similar.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-architectural-design-generator-backend-src-routes-gap-ai-structural-feasibility-checker-js-gap-features",
    "sourceProject": "AIArchitecturalDesignGenerator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap_ai_structural_feasibility_checker.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-architectural-design-generator-backend-src-routes-gap-design-version-control-branching-js-gap-features",
    "sourceProject": "AIArchitecturalDesignGenerator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap_design_version_control_branching.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-architectural-design-generator-backend-src-routes-gap-multi-user-collaborative-design-editing-js-gap-features",
    "sourceProject": "AIArchitecturalDesignGenerator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap_multi_user_collaborative_design_editing.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-architectural-design-generator-backend-src-routes-gap-native-rendering-visualization-pipeline-js-gap-features",
    "sourceProject": "AIArchitecturalDesignGenerator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap_native_rendering_visualization_pipeline.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-architectural-design-generator-backend-src-routes-gap-outbound-webhooks-js-gap-features",
    "sourceProject": "AIArchitecturalDesignGenerator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap_outbound_webhooks.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-architectural-design-generator-backend-src-routes-gap-structural-analysis-hooks-js-gap-features",
    "sourceProject": "AIArchitecturalDesignGenerator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap_structural_analysis_hooks.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-architectural-design-generator-backend-src-routes-ai-extras-js-lighting-simulations",
    "sourceProject": "AIArchitecturalDesignGenerator",
    "name": "lighting_simulations",
    "displayName": "Lighting Simulations",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/aiExtras.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "ai_results",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_results JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-architectural-design-generator-backend-src-routes-ai-backlog-js-material-library-items",
    "sourceProject": "AIArchitecturalDesignGenerator",
    "name": "material_library_items",
    "displayName": "Material Library Items",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/aiBacklog.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(120)"
      },
      {
        "name": "data",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'{}'::jsonb",
        "sourceLine": "data JSONB DEFAULT '{}'::jsonb"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-architectural-design-generator-backend-src-config-database-js-notes",
    "sourceProject": "AIArchitecturalDesignGenerator",
    "name": "notes",
    "displayName": "Notes",
    "framework": "SQL",
    "sourceFile": "backend/src/config/database.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(100) NOT NULL"
      },
      {
        "name": "item_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "item_id INTEGER NOT NULL"
      },
      {
        "name": "content",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "content TEXT NOT NULL"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-architectural-design-generator-backend-src-seed-js-users",
    "sourceProject": "AIArchitecturalDesignGenerator",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "password",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password VARCHAR(255) NOT NULL"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-architectural-design-generator-backend-src-config-database-js-users",
    "sourceProject": "AIArchitecturalDesignGenerator",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "backend/src/config/database.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "password",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password VARCHAR(255) NOT NULL"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-coworking-space-manager-backend-db-schema-sql-access-logs",
    "sourceProject": "AICoworkingSpaceManager",
    "name": "access_logs",
    "displayName": "Access Logs",
    "framework": "SQL",
    "sourceFile": "backend/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "access_point",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "access_point VARCHAR(255) NOT NULL"
      },
      {
        "name": "access_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "access_type VARCHAR(10) NOT NULL CHECK (access_type IN ('entry', 'exit'))"
      },
      {
        "name": "method",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "method VARCHAR(20) NOT NULL CHECK (method IN ('key_card', 'app'))"
      },
      {
        "name": "timestamp",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-coworking-space-manager-backend-routes-ai-custom-js-ai-results",
    "sourceProject": "AICoworkingSpaceManager",
    "name": "ai_results",
    "displayName": "Ai Results",
    "framework": "SQL",
    "sourceFile": "backend/routes/aiCustom.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature VARCHAR(100) NOT NULL"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(255)"
      },
      {
        "name": "usage",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "usage JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-coworking-space-manager-backend-db-schema-sql-amenities",
    "sourceProject": "AICoworkingSpaceManager",
    "name": "amenities",
    "displayName": "Amenities",
    "framework": "SQL",
    "sourceFile": "backend/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type VARCHAR(100)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'available'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'available' CHECK (status IN ('available', 'unavailable', 'maintenance'))"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(255)"
      },
      {
        "name": "usage_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "usage_count INTEGER DEFAULT 0"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-coworking-space-manager-backend-db-schema-sql-checkins",
    "sourceProject": "AICoworkingSpaceManager",
    "name": "checkins",
    "displayName": "Checkins",
    "framework": "SQL",
    "sourceFile": "backend/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "check_in_time",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "check_in_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "check_out_time",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "check_out_time TIMESTAMP"
      },
      {
        "name": "desk_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "desk_id INTEGER REFERENCES desks(id) ON DELETE SET NULL"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-coworking-space-manager-backend-db-schema-sql-cleaning-schedules",
    "sourceProject": "AICoworkingSpaceManager",
    "name": "cleaning_schedules",
    "displayName": "Cleaning Schedules",
    "framework": "SQL",
    "sourceFile": "backend/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "area",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "area VARCHAR(255) NOT NULL"
      },
      {
        "name": "scheduled_time",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scheduled_time TIMESTAMP NOT NULL"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'in_progress', 'completed'))"
      },
      {
        "name": "assigned_to",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assigned_to VARCHAR(255)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-coworking-space-manager-backend-db-schema-sql-community-posts",
    "sourceProject": "AICoworkingSpaceManager",
    "name": "community_posts",
    "displayName": "Community Posts",
    "framework": "SQL",
    "sourceFile": "backend/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255) NOT NULL"
      },
      {
        "name": "content",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "content TEXT"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100)"
      },
      {
        "name": "likes",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "likes INTEGER DEFAULT 0"
      },
      {
        "name": "comments_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "comments_count INTEGER DEFAULT 0"
      },
      {
        "name": "pinned",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "pinned BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-coworking-space-manager-backend-db-schema-sql-day-passes",
    "sourceProject": "AICoworkingSpaceManager",
    "name": "day_passes",
    "displayName": "Day Passes",
    "framework": "SQL",
    "sourceFile": "backend/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "guest_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "guest_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "guest_email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "guest_email VARCHAR(255)"
      },
      {
        "name": "guest_phone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "guest_phone VARCHAR(50)"
      },
      {
        "name": "date",
        "type": "DATE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date DATE NOT NULL"
      },
      {
        "name": "desk_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "desk_id INTEGER REFERENCES desks(id) ON DELETE SET NULL"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'active' CHECK (status IN ('active', 'used', 'expired'))"
      },
      {
        "name": "price",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "price DECIMAL(10, 2) NOT NULL"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-coworking-space-manager-backend-db-schema-sql-desks",
    "sourceProject": "AICoworkingSpaceManager",
    "name": "desks",
    "displayName": "Desks",
    "framework": "SQL",
    "sourceFile": "backend/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(100) NOT NULL"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type VARCHAR(50) NOT NULL CHECK (type IN ('hot_desk', 'dedicated_desk', 'standing_desk'))"
      },
      {
        "name": "floor",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "floor INTEGER NOT NULL"
      },
      {
        "name": "zone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "zone VARCHAR(50)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'available'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'available' CHECK (status IN ('available', 'occupied', 'maintenance'))"
      },
      {
        "name": "assigned_to",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assigned_to INTEGER REFERENCES users(id) ON DELETE SET NULL"
      },
      {
        "name": "features",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'[]'",
        "sourceLine": "features JSONB DEFAULT '[]'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-coworking-space-manager-backend-db-schema-sql-events",
    "sourceProject": "AICoworkingSpaceManager",
    "name": "events",
    "displayName": "Events",
    "framework": "SQL",
    "sourceFile": "backend/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "event_date",
        "type": "DATE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "event_date DATE NOT NULL"
      },
      {
        "name": "start_time",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_time TIMESTAMP NOT NULL"
      },
      {
        "name": "end_time",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "end_time TIMESTAMP NOT NULL"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(255)"
      },
      {
        "name": "capacity",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "capacity INTEGER"
      },
      {
        "name": "attendees_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "attendees_count INTEGER DEFAULT 0"
      },
      {
        "name": "organizer_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "organizer_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type VARCHAR(50) CHECK (type IN ('workshop', 'networking', 'seminar', 'social', 'meetup', 'hackathon'))"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'upcoming'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'upcoming' CHECK (status IN ('upcoming', 'ongoing', 'completed', 'cancelled'))"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-coworking-space-manager-backend-routes-gap-accesscontrol-checkins-lack-ai-anomaly-detection-js-gap-features",
    "sourceProject": "AICoworkingSpaceManager",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_accesscontrol_checkins_lack_ai_anomaly_detection.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-coworking-space-manager-backend-routes-gap-limited-calendar-integration-no-full-google-outlook-adapter-js-gap-features",
    "sourceProject": "AICoworkingSpaceManager",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_limited_calendar_integration_no_full_google_outlook_adapter.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-coworking-space-manager-backend-routes-gap-limited-guest-wifi-bandwidth-management-js-gap-features",
    "sourceProject": "AICoworkingSpaceManager",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_limited_guest_wifi_bandwidth_management.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-coworking-space-manager-backend-routes-gap-limited-payment-integration-only-stripe-stub-js-gap-features",
    "sourceProject": "AICoworkingSpaceManager",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_limited_payment_integration_only_stripe_stub.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-coworking-space-manager-backend-routes-gap-maintenance-cleaning-parking-storage-phonebooths-lack-ai-end-js-gap-features",
    "sourceProject": "AICoworkingSpaceManager",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_maintenance_cleaning_parking_storage_phonebooths_lack_ai_end.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-coworking-space-manager-backend-routes-gap-no-member-mobile-app-for-check-in-booking-community-js-gap-features",
    "sourceProject": "AICoworkingSpaceManager",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_no_member_mobile_app_for_check_in_booking_community.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-coworking-space-manager-backend-routes-gap-no-webhooks-js-gap-features",
    "sourceProject": "AICoworkingSpaceManager",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_no_webhooks.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-coworking-space-manager-backend-db-schema-sql-guest-wifi",
    "sourceProject": "AICoworkingSpaceManager",
    "name": "guest_wifi",
    "displayName": "Guest Wifi",
    "framework": "SQL",
    "sourceFile": "backend/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "guest_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "guest_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "access_code",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "access_code VARCHAR(100) NOT NULL"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "expires_at",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expires_at TIMESTAMP NOT NULL"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'expired', 'revoked'))"
      }
    ]
  },
  {
    "id": "ai-coworking-space-manager-backend-db-schema-sql-invoices",
    "sourceProject": "AICoworkingSpaceManager",
    "name": "invoices",
    "displayName": "Invoices",
    "framework": "SQL",
    "sourceFile": "backend/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "amount",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount DECIMAL(10, 2) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('paid', 'pending', 'overdue'))"
      },
      {
        "name": "due_date",
        "type": "DATE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "due_date DATE NOT NULL"
      },
      {
        "name": "paid_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "paid_date DATE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-coworking-space-manager-backend-db-schema-sql-mail-packages",
    "sourceProject": "AICoworkingSpaceManager",
    "name": "mail_packages",
    "displayName": "Mail Packages",
    "framework": "SQL",
    "sourceFile": "backend/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type VARCHAR(20) NOT NULL CHECK (type IN ('mail', 'package'))"
      },
      {
        "name": "sender",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sender VARCHAR(255)"
      },
      {
        "name": "tracking_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tracking_number VARCHAR(255)"
      },
      {
        "name": "received_date",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "received_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "picked_up_date",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "picked_up_date TIMESTAMP"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'received'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'received' CHECK (status IN ('received', 'notified', 'picked_up'))"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-coworking-space-manager-backend-db-schema-sql-maintenance-requests",
    "sourceProject": "AICoworkingSpaceManager",
    "name": "maintenance_requests",
    "displayName": "Maintenance Requests",
    "framework": "SQL",
    "sourceFile": "backend/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(255)"
      },
      {
        "name": "priority",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "priority VARCHAR(20) DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'urgent'))"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'open'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'open' CHECK (status IN ('open', 'in_progress', 'resolved', 'closed'))"
      },
      {
        "name": "assigned_to",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assigned_to VARCHAR(255)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "resolved_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resolved_at TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-coworking-space-manager-backend-db-schema-sql-meeting-room-bookings",
    "sourceProject": "AICoworkingSpaceManager",
    "name": "meeting_room_bookings",
    "displayName": "Meeting Room Bookings",
    "framework": "SQL",
    "sourceFile": "backend/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "room_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "room_id INTEGER NOT NULL REFERENCES meeting_rooms(id) ON DELETE CASCADE"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255) NOT NULL"
      },
      {
        "name": "start_time",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_time TIMESTAMP NOT NULL"
      },
      {
        "name": "end_time",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "end_time TIMESTAMP NOT NULL"
      },
      {
        "name": "attendees",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1",
        "sourceLine": "attendees INTEGER DEFAULT 1"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'confirmed'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'confirmed' CHECK (status IN ('confirmed', 'cancelled', 'completed', 'no_show'))"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-coworking-space-manager-backend-db-schema-sql-meeting-rooms",
    "sourceProject": "AICoworkingSpaceManager",
    "name": "meeting_rooms",
    "displayName": "Meeting Rooms",
    "framework": "SQL",
    "sourceFile": "backend/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(100) NOT NULL"
      },
      {
        "name": "capacity",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "capacity INTEGER NOT NULL"
      },
      {
        "name": "floor",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "floor INTEGER NOT NULL"
      },
      {
        "name": "amenities",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'[]'",
        "sourceLine": "amenities JSONB DEFAULT '[]'"
      },
      {
        "name": "hourly_rate",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hourly_rate DECIMAL(10, 2) NOT NULL"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'available'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'available' CHECK (status IN ('available', 'occupied', 'maintenance'))"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-coworking-space-manager-backend-db-schema-sql-member-profiles",
    "sourceProject": "AICoworkingSpaceManager",
    "name": "member_profiles",
    "displayName": "Member Profiles",
    "framework": "SQL",
    "sourceFile": "backend/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER UNIQUE NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "skills",
        "type": "TEXT[]",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "skills TEXT[]"
      },
      {
        "name": "interests",
        "type": "TEXT[]",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "interests TEXT[]"
      },
      {
        "name": "availability",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "availability VARCHAR(100)"
      },
      {
        "name": "linkedin",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "linkedin VARCHAR(500)"
      },
      {
        "name": "website",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "website VARCHAR(500)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-coworking-space-manager-backend-db-schema-sql-membership-plans",
    "sourceProject": "AICoworkingSpaceManager",
    "name": "membership_plans",
    "displayName": "Membership Plans",
    "framework": "SQL",
    "sourceFile": "backend/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type VARCHAR(50) NOT NULL CHECK (type IN ('hot_desk', 'dedicated_desk', 'private_office'))"
      },
      {
        "name": "price_monthly",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "price_monthly DECIMAL(10, 2) NOT NULL"
      },
      {
        "name": "features",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'[]'",
        "sourceLine": "features JSONB DEFAULT '[]'"
      },
      {
        "name": "max_members",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1",
        "sourceLine": "max_members INTEGER DEFAULT 1"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-coworking-space-manager-backend-db-schema-sql-parking-spots",
    "sourceProject": "AICoworkingSpaceManager",
    "name": "parking_spots",
    "displayName": "Parking Spots",
    "framework": "SQL",
    "sourceFile": "backend/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "spot_number",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "spot_number VARCHAR(20) NOT NULL"
      },
      {
        "name": "floor",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "floor INTEGER NOT NULL"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type VARCHAR(20) NOT NULL CHECK (type IN ('car', 'motorcycle', 'bicycle'))"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'available'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'available' CHECK (status IN ('available', 'assigned', 'maintenance'))"
      },
      {
        "name": "assigned_to",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assigned_to INTEGER REFERENCES users(id) ON DELETE SET NULL"
      },
      {
        "name": "vehicle_info",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vehicle_info JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-coworking-space-manager-backend-db-schema-sql-phone-booth-bookings",
    "sourceProject": "AICoworkingSpaceManager",
    "name": "phone_booth_bookings",
    "displayName": "Phone Booth Bookings",
    "framework": "SQL",
    "sourceFile": "backend/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "booth_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "booth_id INTEGER NOT NULL REFERENCES phone_booths(id) ON DELETE CASCADE"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "start_time",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_time TIMESTAMP NOT NULL"
      },
      {
        "name": "end_time",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "end_time TIMESTAMP NOT NULL"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'confirmed'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'confirmed' CHECK (status IN ('confirmed', 'cancelled', 'completed', 'no_show'))"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-coworking-space-manager-backend-db-schema-sql-phone-booths",
    "sourceProject": "AICoworkingSpaceManager",
    "name": "phone_booths",
    "displayName": "Phone Booths",
    "framework": "SQL",
    "sourceFile": "backend/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(100) NOT NULL"
      },
      {
        "name": "floor",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "floor INTEGER NOT NULL"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'available'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'available' CHECK (status IN ('available', 'occupied', 'maintenance'))"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-coworking-space-manager-backend-db-schema-sql-referrals",
    "sourceProject": "AICoworkingSpaceManager",
    "name": "referrals",
    "displayName": "Referrals",
    "framework": "SQL",
    "sourceFile": "backend/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "referrer_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "referrer_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "referee_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "referee_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "referee_email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "referee_email VARCHAR(255) NOT NULL"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'signed_up', 'active', 'rewarded'))"
      },
      {
        "name": "reward_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "reward_amount DECIMAL(10, 2) DEFAULT 0"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-coworking-space-manager-backend-db-schema-sql-storage-lockers",
    "sourceProject": "AICoworkingSpaceManager",
    "name": "storage_lockers",
    "displayName": "Storage Lockers",
    "framework": "SQL",
    "sourceFile": "backend/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "locker_number",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "locker_number VARCHAR(20) NOT NULL"
      },
      {
        "name": "size",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "size VARCHAR(20) NOT NULL CHECK (size IN ('small', 'medium', 'large'))"
      },
      {
        "name": "floor",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "floor INTEGER NOT NULL"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'available'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'available' CHECK (status IN ('available', 'assigned', 'maintenance'))"
      },
      {
        "name": "assigned_to",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assigned_to INTEGER REFERENCES users(id) ON DELETE SET NULL"
      },
      {
        "name": "monthly_rate",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "monthly_rate DECIMAL(10, 2) NOT NULL"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-coworking-space-manager-backend-db-schema-sql-team-members",
    "sourceProject": "AICoworkingSpaceManager",
    "name": "team_members",
    "displayName": "Team Members",
    "framework": "SQL",
    "sourceFile": "backend/db/schema.sql",
    "columns": [
      {
        "name": "team_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "team_id INTEGER NOT NULL REFERENCES teams(id) ON DELETE CASCADE"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'member'",
        "sourceLine": "role VARCHAR(50) DEFAULT 'member' CHECK (role IN ('owner', 'admin', 'member'))"
      }
    ]
  },
  {
    "id": "ai-coworking-space-manager-backend-db-schema-sql-teams",
    "sourceProject": "AICoworkingSpaceManager",
    "name": "teams",
    "displayName": "Teams",
    "framework": "SQL",
    "sourceFile": "backend/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "company",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company VARCHAR(255)"
      },
      {
        "name": "plan_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "plan_id INTEGER REFERENCES membership_plans(id) ON DELETE SET NULL"
      },
      {
        "name": "member_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "member_count INTEGER DEFAULT 0"
      },
      {
        "name": "primary_contact_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "primary_contact_id INTEGER REFERENCES users(id) ON DELETE SET NULL"
      },
      {
        "name": "billing_email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "billing_email VARCHAR(255)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-coworking-space-manager-backend-db-schema-sql-usage-analytics",
    "sourceProject": "AICoworkingSpaceManager",
    "name": "usage_analytics",
    "displayName": "Usage Analytics",
    "framework": "SQL",
    "sourceFile": "backend/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "date",
        "type": "DATE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date DATE NOT NULL"
      },
      {
        "name": "area",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "area VARCHAR(100) NOT NULL"
      },
      {
        "name": "hour",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hour INTEGER NOT NULL CHECK (hour >= 0 AND hour <= 23)"
      },
      {
        "name": "occupancy_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "occupancy_count INTEGER DEFAULT 0"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-coworking-space-manager-backend-db-schema-sql-users",
    "sourceProject": "AICoworkingSpaceManager",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "backend/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "password_hash",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password_hash VARCHAR(255) NOT NULL"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'member'",
        "sourceLine": "role VARCHAR(50) DEFAULT 'member' CHECK (role IN ('member', 'admin', 'staff', 'guest'))"
      },
      {
        "name": "company",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company VARCHAR(255)"
      },
      {
        "name": "skills",
        "type": "TEXT[]",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "skills TEXT[]"
      },
      {
        "name": "bio",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bio TEXT"
      },
      {
        "name": "phone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone VARCHAR(50)"
      },
      {
        "name": "avatar_url",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "avatar_url VARCHAR(500)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-coworking-space-manager-backend-db-schema-sql-visitors",
    "sourceProject": "AICoworkingSpaceManager",
    "name": "visitors",
    "displayName": "Visitors",
    "framework": "SQL",
    "sourceFile": "backend/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "host_user_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "host_user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "visitor_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "visitor_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "visitor_email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "visitor_email VARCHAR(255)"
      },
      {
        "name": "visitor_company",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "visitor_company VARCHAR(255)"
      },
      {
        "name": "purpose",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "purpose TEXT"
      },
      {
        "name": "check_in_time",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "check_in_time TIMESTAMP"
      },
      {
        "name": "check_out_time",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "check_out_time TIMESTAMP"
      },
      {
        "name": "badge_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "badge_number VARCHAR(50)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'expected'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'expected' CHECK (status IN ('expected', 'checked_in', 'checked_out', 'cancelled'))"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-space-debris-tracker-backend-src-database-js-ai-analyses",
    "sourceProject": "AISpaceDebrisTracker",
    "name": "ai_analyses",
    "displayName": "Ai Analyses",
    "framework": "SQL",
    "sourceFile": "backend/src/database.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature VARCHAR(100)"
      },
      {
        "name": "input_data",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data JSONB"
      },
      {
        "name": "result",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result JSONB"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(255)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-space-debris-tracker-backend-src-database-js-conjunction-events",
    "sourceProject": "AISpaceDebrisTracker",
    "name": "conjunction_events",
    "displayName": "Conjunction Events",
    "framework": "SQL",
    "sourceFile": "backend/src/database.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "primary_object",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "primary_object VARCHAR(255)"
      },
      {
        "name": "secondary_object",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "secondary_object VARCHAR(255)"
      },
      {
        "name": "tca",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tca TIMESTAMP"
      },
      {
        "name": "miss_distance",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "miss_distance DECIMAL"
      },
      {
        "name": "probability",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "probability DECIMAL"
      },
      {
        "name": "relative_velocity",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "relative_velocity DECIMAL"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "status VARCHAR(50)"
      },
      {
        "name": "action_taken",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "action_taken VARCHAR(255)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-space-debris-tracker-backend-src-database-js-debris-removal-missions",
    "sourceProject": "AISpaceDebrisTracker",
    "name": "debris_removal_missions",
    "displayName": "Debris Removal Missions",
    "framework": "SQL",
    "sourceFile": "backend/src/database.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "mission_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mission_name VARCHAR(255)"
      },
      {
        "name": "target_object",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "target_object VARCHAR(255)"
      },
      {
        "name": "method",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "method VARCHAR(100)"
      },
      {
        "name": "estimated_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimated_cost DECIMAL"
      },
      {
        "name": "launch_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "launch_date DATE"
      },
      {
        "name": "duration_days",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "duration_days INTEGER"
      },
      {
        "name": "success_probability",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "success_probability DECIMAL"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "status VARCHAR(50)"
      },
      {
        "name": "agency",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "agency VARCHAR(255)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-space-debris-tracker-backend-src-routes-custom-views-js-digest-subscriptions",
    "sourceProject": "AISpaceDebrisTracker",
    "name": "digest_subscriptions",
    "displayName": "Digest Subscriptions",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/customViews.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255) NOT NULL"
      },
      {
        "name": "min_severity",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "min_severity VARCHAR(50) NOT NULL DEFAULT 'medium'"
      },
      {
        "name": "frequency",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'daily'",
        "sourceLine": "frequency VARCHAR(50) NOT NULL DEFAULT 'daily'"
      },
      {
        "name": "next_run",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "next_run TIMESTAMP"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-space-debris-tracker-backend-src-routes-gap-no3d-visualization-of-debris-clouds-at-the-js-gap-features",
    "sourceProject": "AISpaceDebrisTracker",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gapNo3dVisualizationOfDebrisCloudsAtThe.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-space-debris-tracker-backend-src-routes-gap-no-ai-driven-debris-characterization-from-limited-observations-frontend-js-gap-features",
    "sourceProject": "AISpaceDebrisTracker",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gapNoAiDrivenDebrisCharacterizationFromLimitedObservationsFrontend.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-space-debris-tracker-backend-src-routes-gap-no-audit-logging-js-gap-features",
    "sourceProject": "AISpaceDebrisTracker",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gapNoAuditLogging.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-space-debris-tracker-backend-src-routes-gap-no-integration-with-norad-tle-feeds-or-jspoc-js-gap-features",
    "sourceProject": "AISpaceDebrisTracker",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gapNoIntegrationWithNoradTleFeedsOrJspoc.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-space-debris-tracker-backend-src-routes-gap-no-multi-target-rendezvous-optimization-endpoint-js-gap-features",
    "sourceProject": "AISpaceDebrisTracker",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gapNoMultiTargetRendezvousOptimizationEndpoint.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-space-debris-tracker-backend-src-routes-gap-no-multi-tenant-operator-support-js-gap-features",
    "sourceProject": "AISpaceDebrisTracker",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gapNoMultiTenantOperatorSupport.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-space-debris-tracker-backend-src-routes-gap-no-regulatory-compliance-tracking-backend-outer-space-treaty-js-gap-features",
    "sourceProject": "AISpaceDebrisTracker",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gapNoRegulatoryComplianceTrackingBackendOuterSpaceTreaty.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-space-debris-tracker-backend-src-routes-gap-no-sensor-fusion-ml-for-observation-confidence-js-gap-features",
    "sourceProject": "AISpaceDebrisTracker",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gapNoSensorFusionMlForObservationConfidence.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-space-debris-tracker-backend-src-routes-gap-no-webhooks-or-push-notifications-for-real-time-conjunction-js-gap-features",
    "sourceProject": "AISpaceDebrisTracker",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gapNoWebhooksOrPushNotificationsForRealTimeConjunction.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-space-debris-tracker-backend-src-database-js-launch-windows",
    "sourceProject": "AISpaceDebrisTracker",
    "name": "launch_windows",
    "displayName": "Launch Windows",
    "framework": "SQL",
    "sourceFile": "backend/src/database.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "mission_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mission_name VARCHAR(255)"
      },
      {
        "name": "launch_site",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "launch_site VARCHAR(255)"
      },
      {
        "name": "target_orbit",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "target_orbit VARCHAR(100)"
      },
      {
        "name": "window_start",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "window_start TIMESTAMP"
      },
      {
        "name": "window_end",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "window_end TIMESTAMP"
      },
      {
        "name": "vehicle",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vehicle VARCHAR(255)"
      },
      {
        "name": "payload_mass",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payload_mass DECIMAL"
      },
      {
        "name": "weather_status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "weather_status VARCHAR(50)"
      },
      {
        "name": "debris_clearance",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "debris_clearance VARCHAR(50)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "status VARCHAR(50)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-space-debris-tracker-backend-src-database-js-satellites",
    "sourceProject": "AISpaceDebrisTracker",
    "name": "satellites",
    "displayName": "Satellites",
    "framework": "SQL",
    "sourceFile": "backend/src/database.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "norad_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "norad_id VARCHAR(50) UNIQUE"
      },
      {
        "name": "operator",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "operator VARCHAR(255)"
      },
      {
        "name": "mission_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mission_type VARCHAR(100)"
      },
      {
        "name": "orbit_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "orbit_type VARCHAR(100)"
      },
      {
        "name": "altitude",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "altitude DECIMAL"
      },
      {
        "name": "inclination",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inclination DECIMAL"
      },
      {
        "name": "launch_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "launch_date DATE"
      },
      {
        "name": "expected_lifetime",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expected_lifetime INTEGER"
      },
      {
        "name": "fuel_remaining",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fuel_remaining DECIMAL"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "status VARCHAR(50)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-space-debris-tracker-backend-src-database-js-space-objects",
    "sourceProject": "AISpaceDebrisTracker",
    "name": "space_objects",
    "displayName": "Space Objects",
    "framework": "SQL",
    "sourceFile": "backend/src/database.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "norad_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "norad_id VARCHAR(50) UNIQUE"
      },
      {
        "name": "object_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "object_type VARCHAR(100)"
      },
      {
        "name": "orbit_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "orbit_type VARCHAR(100)"
      },
      {
        "name": "inclination",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inclination DECIMAL"
      },
      {
        "name": "apogee",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "apogee DECIMAL"
      },
      {
        "name": "perigee",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "perigee DECIMAL"
      },
      {
        "name": "period",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "period DECIMAL"
      },
      {
        "name": "launch_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "launch_date DATE"
      },
      {
        "name": "country",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "country VARCHAR(100)"
      },
      {
        "name": "rcs",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rcs DECIMAL"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "status VARCHAR(50)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-space-debris-tracker-backend-src-database-js-users",
    "sourceProject": "AISpaceDebrisTracker",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "backend/src/database.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "password",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password VARCHAR(255) NOT NULL"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  }
];
