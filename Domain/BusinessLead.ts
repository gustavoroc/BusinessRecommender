import { BusinessTarget } from './Type/BusinessTarget';
import { BusinessChanell } from './Type/BusinessChannel';
import { BusinessSaleMethodology } from './Type/BusinessSaleMethodology';

export class BusinessLead 
{
    public TargetRelationship:  { count: Number, target: BusinessTarget }
    public ChannelRelationship: { count: Number, channel: BusinessChanell }
    public SalesMethodology:    { count: Number, methodology: BusinessSaleMethodology }
}