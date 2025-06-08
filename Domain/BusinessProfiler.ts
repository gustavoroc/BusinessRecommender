import { IRecomendationParser } from "./Parser/IRecomendationParser";
import { BusinessLead } from "./BusinessLead";

export class BusinessProfiler 
{

   static Execute(parser : IRecomendationParser, leads: Array<BusinessLead>) {
      parser.Parse(leads);
   }
    
}