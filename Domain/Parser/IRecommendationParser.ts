import { BusinessLead } from "../BusinessLead";

/**
 * Defines a strategy for parsing incoming business leads.
 */
export interface IRecommendationParser
{
    /**
     * Process a collection of leads and apply parser logic.
     */
    Parse(leads: Array<BusinessLead>): void;
}

