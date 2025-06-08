import { BusinessTarget } from './Type/BusinessTarget';
import { BusinessChannel } from './Type/BusinessChannel';
import { BusinessSaleMethodology } from './Type/BusinessSaleMethodology';

export class BusinessLead
{
    public TargetRelationship!:  { count: Number, target: BusinessTarget };
    public ChannelRelationship!: { count: Number, channel: BusinessChannel };
    public SaleMethodology!:    { count: Number, methodology: BusinessSaleMethodology };
}