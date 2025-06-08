import { BusinessTarget } from './Type/BusinessTarget';
import { BusinessChanell } from './Type/BusinessChannel';
import { BusinessSaleMethodology } from './Type/BusinessSaleMethodology';
import { BusinessLead } from './BusinessLead';

export class Business
{
        public Name : string;
        
        public Field: BusinessTarget;
        public Channel: BusinessChanell;
        public SaleMethodology: BusinessSaleMethodology;

        public LeadRecommendation: Array<BusinessLead>;
}