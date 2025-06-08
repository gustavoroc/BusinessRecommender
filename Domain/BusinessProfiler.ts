import { IRecommendationParser } from "./Parser/IRecommendationParser";
import { BusinessLead } from "./BusinessLead";

export class BusinessProfiler 
{

   static Execute(parser: IRecommendationParser, leads: Array<BusinessLead>): void {
      parser.Parse(leads);
   }
    
}