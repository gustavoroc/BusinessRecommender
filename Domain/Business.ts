import { BusinessTarget } from './Type/BusinessTarget';
import { BusinessChannel } from './Type/BusinessChannel';
import { BusinessSaleMethodology } from './Type/BusinessSaleMethodology';
import { BusinessLead } from './BusinessLead';

export class Business {
        public Name!: string;

        public Field!: BusinessTarget;
        public Channel!: BusinessChannel;
        public SaleMethodology!: BusinessSaleMethodology;

        public LeadRecommendation!: Array<BusinessLead>;
}