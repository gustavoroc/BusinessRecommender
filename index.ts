import { BusinessLead } from './Domain/BusinessLead';
import { BusinessProfiler } from './Domain/BusinessProfiler';
import { IRecommendationParser } from './Domain/Parser/IRecommendationParser';

declare const require: any;
declare const module: any;

export class Index
{
    public Run(): void
    {
        let leads          = [new BusinessLead()];
        let parserStrategy = new MockParser();

        BusinessProfiler.Execute(parserStrategy, leads);
    }
}


class MockParser implements IRecommendationParser {
    Parse(leads: Array<BusinessLead>): void {
        console.log(`Parsed ${leads.length} lead(s).`);
    }
}

if (require.main === module) {
    new Index().Run();
}
