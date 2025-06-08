import { BusinessLead } from "../BusinessLead";

export interface IRecomendationParser
{
    Parse(leads: Array<BusinessLead>);
}

