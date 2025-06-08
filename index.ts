import { BusinessLead } from './Domain/BusinessLead';
import { BusinessProfiler } from './Domain/BusinessProfiler';
import { IRecomendationParser } from './Domain/Parser/IRecomendationParser';

export class Index
{
    public Run(): void
    {
        let leads          = [new BusinessLead()];
        let parserStrategy = new MockParser();

        BusinessProfiler.Execute(parserStrategy, leads);
    }
}


class MockParser implements IRecomendationParser
{
    Parse(leads: Array<BusinessLead>) {
        throw new Error('Method not implemented.');
    }
}