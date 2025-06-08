# What is this?

Imagine hundreds of clients telling you what they care about:  
*“I'm into B2B.” “I want sales enablement.” “I like SaaS but hate cold calls.”*

This project captures that intent and turns it into **signal**.  
From there, we run the magic: routing logic + pluggable algorithms = matched leads to the right companies.

The cool part? The system is fully extensible. You define new "intents", new rules, or even throw in your own matching engine. The design is composable and clean.

## Why it exists

Because recommendation systems shouldn't feel like black boxes.  
Because lead distribution shouldn't be random.

## Key Concepts

- **Lead Tagging**: Every lead carries semantic flags like `b2bFocus`, `interestedInSales`, etc.
- **Business Profiles**: Companies are described with the types of clients they want.
- **Match Engine**: A plug-and-play layer where matching logic lives.
- **Routing Layer**: Leads get directed to the best-fit businesses, right at entry time.

## Tech Stack

- TypeScript
- Modular architecture (domain-focused)
- Room for:
  - Machine learning layer (optional)
  - Graph-based relationships
  - Scoring engines
- Could easily plug into any CRM or pipeline in the future
