# CDO Club Website Structure - Mermaid Diagrams

## 1. Overall Site Architecture

```mermaid
graph TD
    A[CDO Club Home<br/>cdoclub.com] --> B[CDO Summits<br/>cdosummit.com]
    A --> C[Careers /<br/>Executive Search]
    A --> D[Membership]
    A --> E[Publications]
    A --> F[Endorsements]
    A --> G[CDO of the Year]
    A --> H[Media Room]
    A --> I[Hall of Fame]
    A --> J[Member Login]
    
    B --> B1[CDAO Summits]
    B --> B2[CAIO Summits]
    B --> B3[Past Events]
    B --> B4[Register]
    
    C --> C1[Job Postings<br/>GOLD+ Members]
    C --> C2[Job Updates<br/>SILVER+ Members]
    C --> C3[Career Portal]
    
    D --> D1[Basic - FREE]
    D --> D2[Silver - $495/yr]
    D --> D3[Gold - $995/yr]
    D --> D4[Platinum - $1,495/yr]
    D --> D5[Corporate - $4,995/yr]
    
    E --> E1[CAIO Talent Map<br/>Coming Soon]
    E --> E2[CDO Talent Map 2013]
    E --> E3[101 CDOs to CEO<br/>Bain Capital Report]
    E --> E4[Monthly Jobs Updates<br/>2014-2024]
    
    F --> F1[CAIO/CDAO Summits<br/>23 endorsements]
    F --> F2[IBM Summits<br/>59 endorsements]
    F --> F3[Historical Events<br/>205 endorsements]
    
    G --> G1[CDAO of the Year]
    G --> G2[CDO of the Year]
    G --> G3[Past Winners<br/>2013-2022]
    
    H --> H1[Media Coverage<br/>28 pages]
    H --> H2[Press Releases<br/>10 pages]
    H --> H3[Photo Gallery]
    H --> H4[Video Gallery]
    H --> H5[Logos & Assets]
    H --> H6[Contact Info]
    
    I --> I1[CDOs → CEO<br/>101+ tracked]
    I --> I2[CDOs → Board<br/>100+ tracked]
    I --> I3[CDAOs → CEO]
    I --> I4[CDAOs → Board]
    
    style A fill:#e1f5ff
    style B fill:#ffe1e1
    style D fill:#e1ffe1
    style E fill:#fff3e1
```

## 2. Navigation Hierarchy

```mermaid
graph LR
    subgraph "Primary Navigation"
        N1[Home]
        N2[CDO Summits »]
        N3[Careers »]
        N4[Membership]
        N5[Publications]
        N6[Endorsements]
        N7[CDO of the Year »]
        N8[Media Room]
    end
    
    subgraph "Footer Navigation"
        F1[Home]
        F2[CDO Summits]
        F3[Careers]
        F4[Membership]
        F5[Endorsements]
        F6[CDO of the Year]
        F7[Hall of Fame]
        F8[Media Room]
        F9[Privacy Policy]
    end
    
    subgraph "Utility"
        U1[Member Login]
        U2[Newsletter Signup]
        U3[Join Membership]
    end
```

## 3. Membership Structure & Benefits Flow

```mermaid
graph TD
    START[Visitor] --> DECISION{Choose<br/>Membership}
    
    DECISION -->|Free| BASIC[BASIC<br/>FREE]
    DECISION -->|$495/yr| SILVER[SILVER<br/>$495/yr]
    DECISION -->|$995/yr| GOLD[GOLD<br/>$995/yr]
    DECISION -->|$1,495/yr| PLATINUM[PLATINUM<br/>$1,495/yr]
    DECISION -->|$4,995/yr| CORP[CORPORATE<br/>$4,995/yr]
    
    BASIC --> B1[✓ Newsletter 2x/week]
    BASIC --> B2[✓ Blog Posts]
    
    SILVER --> B1
    SILVER --> B2
    SILVER --> S1[✓ Jobs Updates]
    
    GOLD --> B1
    GOLD --> B2
    GOLD --> S1
    GOLD --> G1[✓ Career Page Access]
    GOLD --> G2[✓ 1 Job Post/year]
    
    PLATINUM --> B1
    PLATINUM --> B2
    PLATINUM --> S1
    PLATINUM --> G1
    PLATINUM --> P1[✓ 125+ hrs Videos]
    PLATINUM --> P2[✓ 1-hr Consultation]
    PLATINUM --> P3[✓ 3 Job Posts/year]
    PLATINUM --> P4[✓ Summit Discounts]
    PLATINUM --> P5[✓ Preferred Seating]
    PLATINUM --> P6[✓ VIP Badge]
    
    CORP --> B1
    CORP --> B2
    CORP --> S1
    CORP --> G1
    CORP --> P1
    CORP --> P3
    CORP --> P4
    CORP --> P5
    CORP --> P6
    CORP --> C1[✓ 10 Platinum Seats]
    CORP --> C2[✓ Half-day Consultation]
    CORP --> C3[✓ 10 Summit Tickets]
    CORP --> C4[✓ 10 Job Posts/year]
    
    style BASIC fill:#f0f0f0
    style SILVER fill:#c0c0c0
    style GOLD fill:#ffd700
    style PLATINUM fill:#e5e4e2
    style CORP fill:#4169e1,color:#fff
```

## 4. Content Organization by Topic

```mermaid
graph TD
    subgraph "CAIO Content"
        CAIO1[CAIO Summit<br/>Boston 2023]
        CAIO2[CAIO Summit<br/>DC Oct 2024]
        CAIO3[CAIO Jobs Updates<br/>Monthly]
        CAIO4[CAIO Talent Map<br/>Coming 2025]
        CAIO5[CAIO News<br/>Breaking]
    end
    
    subgraph "CDAO Content"
        CDAO1[CDAO Summits<br/>2013-2024]
        CDAO2[CDAO Jobs Updates<br/>Monthly]
        CDAO3[CDAO of the Year<br/>Awards]
        CDAO4[CDAO to CEO<br/>Hall of Fame]
    end
    
    subgraph "CDO Content"
        CDO1[CDO Summits<br/>Historical]
        CDO2[CDO Jobs Updates<br/>Monthly]
        CDO3[CDO of the Year<br/>Awards]
        CDO4[CDO Talent Map<br/>2013]
        CDO5[CDO to CEO<br/>101+ Report]
    end
    
    subgraph "Cross-Cutting"
        CC1[Video Portal<br/>125+ hours]
        CC2[Photo Galleries]
        CC3[Media Coverage]
        CC4[Press Releases]
        CC5[Endorsements]
        CC6[Career Services]
    end
    
    style CAIO1 fill:#ff9999
    style CAIO2 fill:#ff9999
    style CAIO3 fill:#ff9999
    style CAIO4 fill:#ff9999
    style CAIO5 fill:#ff9999
    
    style CDAO1 fill:#99ccff
    style CDAO2 fill:#99ccff
    style CDAO3 fill:#99ccff
    style CDAO4 fill:#99ccff
    
    style CDO1 fill:#99ff99
    style CDO2 fill:#99ff99
    style CDO3 fill:#99ff99
    style CDO4 fill:#99ff99
    style CDO5 fill:#99ff99
```

## 5. User Journey Map

```mermaid
graph LR
    subgraph "Discovery"
        D1[Search/Social] --> D2[Land on Site]
        D2 --> D3[Read Article]
        D3 --> D4[View Summit Info]
    end
    
    subgraph "Engagement"
        D4 --> E1[Subscribe Newsletter]
        E1 --> E2[Receive Updates]
        E2 --> E3[Attend Webinar/Event]
    end
    
    subgraph "Conversion"
        E3 --> C1{Value<br/>Recognized?}
        C1 -->|Yes| C2[Join as Member]
        C1 -->|No| E2
        C2 --> C3{Which Tier?}
    end
    
    subgraph "Retention"
        C3 --> C4[Silver/Gold/Platinum]
        C4 --> R1[Access Jobs]
        C4 --> R2[View Videos]
        C4 --> R3[Attend Summits]
        C4 --> R4[Network]
        R1 --> R5[Renew Annually]
        R2 --> R5
        R3 --> R5
        R4 --> R5
    end
    
    subgraph "Advocacy"
        R5 --> A1[Refer Colleagues]
        R5 --> A2[Provide Endorsement]
        R5 --> A3[Speak at Summit]
        R5 --> A4[Upgrade Tier]
    end
```

## 6. Content Access Matrix

```mermaid
graph TD
    subgraph "Public Access - FREE"
        PUB1[Homepage Articles]
        PUB2[Newsletter Signup]
        PUB3[Event Information]
        PUB4[Endorsements Preview]
        PUB5[Media Room Overview]
    end
    
    subgraph "SILVER $495/yr"
        SIL1[Full Jobs Updates]
        SIL2[CAIO Job Market]
        SIL3[CDAO Job Market]
        SIL4[CDO Job Market]
    end
    
    subgraph "GOLD $995/yr"
        GOLD1[Career Page Full Access]
        GOLD2[Open Job Listings]
        GOLD3[1 Job Post/year]
        GOLD4[Apply to Positions]
    end
    
    subgraph "PLATINUM $1,495/yr"
        PLAT1[125+ Hours Video]
        PLAT2[All Summit Recordings]
        PLAT3[1-hour Consultation]
        PLAT4[3 Job Posts/year]
        PLAT5[Summit Discounts]
        PLAT6[VIP Treatment]
        PLAT7[CAIO Talent Map<br/>Upon Release]
    end
    
    subgraph "CORPORATE $4,995/yr"
        CORP1[10 Platinum Seats]
        CORP2[Half-day Consultation]
        CORP3[10 Summit Tickets]
        CORP4[10 Job Posts/year]
        CORP5[All Platinum Benefits]
    end
    
    PUB1 -.Upgrade.-> SIL1
    SIL1 -.Upgrade.-> GOLD1
    GOLD1 -.Upgrade.-> PLAT1
    PLAT1 -.Upgrade.-> CORP1
    
    style PUB1 fill:#f0f0f0
    style SIL1 fill:#c0c0c0
    style GOLD1 fill:#ffd700
    style PLAT1 fill:#e5e4e2
    style CORP1 fill:#4169e1,color:#fff
```

## 7. Event Ecosystem

```mermaid
graph TD
    subgraph "Event Types"
        E1[CAIO Summits]
        E2[CDAO Summits]
        E3[IBM Partnerships]
        E4[Virtual Webinars]
    end
    
    subgraph "Geographic Markets"
        G1[North America<br/>US, Canada]
        G2[Europe<br/>UK, EU, Turkey]
        G3[Asia Pacific<br/>Japan, Australia, Israel]
    end
    
    subgraph "Event Formats"
        F1[Full-Day Summit]
        F2[Multi-Day Conference]
        F3[90-min Webinar]
        F4[Panel Discussions]
    end
    
    subgraph "Post-Event Content"
        P1[Video Recordings]
        P2[Photo Galleries]
        P3[Recap Articles]
        P4[Press Releases]
        P5[Social Media Posts]
    end
    
    E1 --> G1
    E2 --> G1
    E2 --> G2
    E2 --> G3
    E3 --> G1
    E4 --> G1
    
    E1 --> F2
    E2 --> F1
    E3 --> F1
    E4 --> F3
    
    F1 --> P1
    F1 --> P2
    F1 --> P3
    F1 --> P4
    F1 --> P5
    
    P1 --> M[Member Video Portal<br/>125+ hours]
```

## 8. Timeline of Major Milestones

```mermaid
timeline
    title CDO Club History of Firsts
    2011 : First CDO Community (LinkedIn)
         : First CDO Talent Map (Harvard Club)
    2012 : CDOSummit.com Launch
         : CDOClub.com Launch
    2013 : First CDO Summit (Thomson Reuters NYC)
         : First CDO of the Year Award (Teddy Goff)
         : First CDO Talent Map Published
    2014 : First UK CDO Summit (BBC London)
         : Monthly Jobs Updates Launch
    2015 : First EU CDO Summit (Amsterdam)
         : First Turkey CDO Summit (Istanbul)
    2016 : First Sydney CDO Summit (Australia)
         : First Tel Aviv CDO Summit (Israel)
         : First CDAO of the Year Award (DJ Patil)
    2017 : Tokyo, Toronto Summits
    2018 : "101 CDOs to CEO" Report (Bain Capital)
    2019 : First CAIO Tracking (200 CAIOs)
    2020 : IBM Partnership Webinar Series
    2023 : First Chief AI Officer Summit (Boston)
         : 10th Anniversary CDAO Summit
    2024 : CAIO Executive Search Practice
         : 11th CDAO & 3rd CAIO Summits (DC)
    2025 : TaaS Platform Launch (Fractional CAIOs)
         : First CAIO Talent Map (Upcoming)
```

## 9. Member Value Flow

```mermaid
flowchart TD
    START([New Visitor]) --> A[Discover Content]
    
    A --> B{Interest<br/>Level?}
    
    B -->|Curious| C[Subscribe Newsletter<br/>BASIC - FREE]
    B -->|Engaged| D[Join SILVER<br/>$495/yr]
    B -->|Active Job Seeker| E[Join GOLD<br/>$995/yr]
    B -->|Career Investor| F[Join PLATINUM<br/>$1,495/yr]
    B -->|Organization| G[Corporate Plan<br/>$4,995/yr]
    
    C --> C1[Receive Updates]
    C1 --> C2[Learn & Stay Informed]
    C2 --> C3{Ready for<br/>More?}
    C3 -->|Yes| D
    C3 -->|No| C1
    
    D --> D1[Access Jobs Updates]
    D1 --> D2[Track Market Trends]
    D2 --> D3{Need Job<br/>Access?}
    D3 -->|Yes| E
    D3 -->|No| D1
    
    E --> E1[Browse Open Positions]
    E1 --> E2[Post Job Opening]
    E2 --> E3{Want Video<br/>Learning?}
    E3 -->|Yes| F
    E3 -->|No| E1
    
    F --> F1[Watch 125+ hrs Videos]
    F1 --> F2[Book Consultation]
    F2 --> F3[Attend Summit VIP]
    F3 --> F4[Network with Peers]
    F4 --> F5{Scale to<br/>Team?}
    F5 -->|Yes| G
    F5 -->|No| F6[Renew Platinum]
    
    G --> G1[10 Team Members Access]
    G1 --> G2[Team Learning]
    G2 --> G3[Organization Transformation]
    G3 --> G4[Renew Corporate]
    
    F6 --> F1
    G4 --> G1
    
    style START fill:#e1f5ff
    style C fill:#f0f0f0
    style D fill:#c0c0c0
    style E fill:#ffd700
    style F fill:#e5e4e2
    style G fill:#4169e1,color:#fff
```

## 10. Content Types & Distribution

```mermaid
pie title Content Distribution by Type
    "Breaking News & Updates" : 25
    "Job Market Reports" : 20
    "Event Recaps & Promotions" : 20
    "Research Reports" : 10
    "Awards & Recognition" : 10
    "Video Content" : 10
    "Endorsements" : 5
```

## 11. Role Focus Evolution

```mermaid
gantt
    title CDO Club Focus Areas Timeline
    dateFormat YYYY
    axisFormat %Y
    
    section Chief Digital Officer
    CDO Community      :2011, 2025
    CDO Summits        :2013, 2025
    CDO Research       :2011, 2025
    
    section Chief Data Officer
    CDAO Tracking      :2014, 2025
    CDAO Awards        :2016, 2025
    CDAO Summits       :2016, 2025
    
    section Chief AI Officer
    CAIO Tracking      :2019, 2025
    CAIO Summits       :2023, 2025
    CAIO Research      :2024, 2025
```

## 12. Revenue Streams Architecture

```mermaid
graph TB
    REV[Total Revenue] --> R1[Membership<br/>Subscriptions]
    REV --> R2[Event Tickets]
    REV --> R3[Sponsorships]
    REV --> R4[Job Postings]
    REV --> R5[Executive Search]
    REV --> R6[Consulting]
    
    R1 --> R1A[Basic: $0]
    R1 --> R1B[Silver: $495]
    R1 --> R1C[Gold: $995]
    R1 --> R1D[Platinum: $1,495]
    R1 --> R1E[Corporate: $4,995]
    
    R2 --> R2A[Early Bird Pricing]
    R2 --> R2B[Regular Pricing]
    R2 --> R2C[VIP Packages]
    
    R3 --> R3A[Platinum Sponsors]
    R3 --> R3B[Gold Sponsors]
    R3 --> R3C[Silver Sponsors]
    R3 --> R3D[Partners]
    
    R4 --> R4A[Individual Posts<br/>$1,000 each]
    R4 --> R4B[Membership Bundles<br/>1-10 posts]
    
    R5 --> R5A[Search Fees<br/>Commission]
    R5 --> R5B[Retained Search]
    R5 --> R5C[TaaS Platform<br/>2025 Launch]
    
    R6 --> R6A[1-hour Calls<br/>Platinum]
    R6 --> R6B[Half-day Sessions<br/>Corporate]
    R6 --> R6C[Custom Programs]
    
    style REV fill:#4169e1,color:#fff
    style R1 fill:#90EE90
    style R2 fill:#FFD700
    style R3 fill:#FF6B6B
```

## 13. External Link Ecosystem

```mermaid
graph LR
    SITE[cdoclub.com] --> EXT1[LinkedIn Group<br/>4176032]
    SITE --> EXT2[Twitter<br/>@BeTheMedia]
    SITE --> EXT3[Facebook<br/>/CDOClub]
    SITE --> EXT4[Instagram<br/>@davidmathison]
    SITE --> EXT5[YouTube<br/>BeTheMedia]
    SITE --> EXT6[LinkedIn Profile<br/>/davidmathison]
    
    SITE --> DOM1[cdosummit.com<br/>Summit Info]
    SITE --> DOM2[caiosummit.com<br/>CAIO Summit]
    SITE --> DOM3[boston.cdosummit.com]
    SITE --> DOM4[dc.cdosummit.com]
    SITE --> DOM5[nyc.cdosummit.com]
    SITE --> DOM6[london.cdosummit.co.uk]
    SITE --> DOM7[sydney.cdosummit.com]
    SITE --> DOM8[cdoclub.jp<br/>Japan]
    SITE --> DOM9[cdoclub.co.il<br/>Israel]
    
    SITE --> PAY[1ShoppingCart<br/>Payment Processing]
    SITE --> MAIL[Mailchimp<br/>Email Marketing]
    SITE --> EVT[Eventbrite<br/>Event Registration]
    
    style SITE fill:#e1f5ff
    style DOM1 fill:#ffe1e1
    style DOM2 fill:#ffe1e1
```

## 14. Information Architecture - Publications Section

```mermaid
graph TD
    PUBS[Publications] --> CAT1[Talent Maps]
    PUBS --> CAT2[Job Updates Archive]
    PUBS --> CAT3[Special Reports]
    
    CAT1 --> TM1[CAIO Talent Map<br/>Coming 2025]
    CAT1 --> TM2[CDO Talent Map<br/>2013]
    
    CAT2 --> JU1[Chief AI Officer<br/>Monthly 2023-2024]
    CAT2 --> JU2[Chief Data Officer<br/>Monthly 2014-2024]
    CAT2 --> JU3[Chief Digital Officer<br/>Monthly 2014-2024]
    
    JU2 --> Y2024[2024: Jan-Dec]
    JU2 --> Y2023[2023: Jan-Dec]
    JU2 --> Y2022[2022: Jan-Dec]
    JU2 --> Y2021[2021: Jan-Dec]
    JU2 --> MORE[2014-2020...]
    
    CAT3 --> SR1[101 CDOs to CEO<br/>Bain Capital 2018]
    CAT3 --> SR2[CDO Growth Analysis]
    CAT3 --> SR3[Sector Studies]
    
    style PUBS fill:#fff3e1
    style TM1 fill:#ff9999
    style SR1 fill:#99ccff
```

## 15. Awards Program Structure

```mermaid
graph TD
    AWARDS[CDO of the Year<br/>Awards Program] --> TYPE1[Chief Data/Analytics<br/>Officer Awards]
    AWARDS --> TYPE2[Chief Digital<br/>Officer Awards]
    
    TYPE1 --> T1Y[US CDAO of the Year]
    TYPE1 --> T1Y2[US CAO of the Year]
    TYPE1 --> T1INT[International<br/>UK, Japan, Israel, ANZ]
    
    TYPE2 --> T2Y[US CDO of the Year]
    TYPE2 --> T2INT[International<br/>UK, EU, Japan, Israel, ANZ]
    
    T1Y --> RECENT1[2021: Eileen Vidrine<br/>US Air Force]
    T1Y --> RECENT2[2020: Mona Siddiqui<br/>HHS]
    T1Y --> RECENT3[2019: Linda Avery<br/>Fed Reserve NY]
    
    T2Y --> RECENT4[2021: Bernardo Rodriguez<br/>J.D. Power]
    T2Y --> RECENT5[2020: All US CDOs]
    T2Y --> RECENT6[2019: Atif Rafiq<br/>MGM Resorts]
    
    RECENT1 --> HOF[Hall of Fame<br/>Potential]
    RECENT2 --> HOF
    RECENT3 --> HOF
    RECENT4 --> HOF
    RECENT5 --> HOF
    RECENT6 --> HOF
    
    HOF --> PATH1[CDO → CEO]
    HOF --> PATH2[CDO → Board]
```

## 16. Partner & Sponsor Ecosystem

```mermaid
graph TD
    PARTNERS[Partners & Sponsors] --> CAT1[Platinum Partners]
    PARTNERS --> CAT2[Academic Partners]
    PARTNERS --> CAT3[Corporate Sponsors]
    PARTNERS --> CAT4[Media Partners]
    
    CAT1 --> P1[IBM<br/>Long-term Partner]
    CAT1 --> P2[Microsoft]
    CAT1 --> P3[Accenture]
    CAT1 --> P4[McKinsey]
    CAT1 --> P5[Bain Capital]
    
    CAT2 --> A1[Northeastern University<br/>Institute for Experiential AI]
    CAT2 --> A2[Columbia University]
    CAT2 --> A3[Harvard University]
    CAT2 --> A4[UTS Sydney]
    CAT2 --> A5[University of Maryland]
    
    CAT3 --> C1[Alation]
    CAT3 --> C2[BigID]
    CAT3 --> C3[Thomson Reuters]
    CAT3 --> C4[BBC]
    CAT3 --> C5[CNN/Time Warner]
    
    CAT4 --> M1[Forbes]
    CAT4 --> M2[Wall Street Journal]
    CAT4 --> M3[CNBC]
    CAT4 --> M4[Financial Times]
    
    style P1 fill:#4169e1,color:#fff
    style A1 fill:#90EE90
```

## 17. Data Flow & Analytics

```mermaid
graph LR
    subgraph "Data Sources"
        DS1[Member Profiles]
        DS2[Job Postings]
        DS3[Event Registrations]
        DS4[LinkedIn Data]
        DS5[Public Announcements]
        DS6[Media Coverage]
    end
    
    subgraph "Data Processing"
        DP1[Track New Hires]
        DP2[Track Promotions]
        DP3[Track CDO→CEO]
        DP4[Track Salaries]
        DP5[Track Companies]
    end
    
    subgraph "Data Products"
        PROD1[Talent Maps]
        PROD2[Jobs Updates]
        PROD3[Hall of Fame]
        PROD4[Market Reports]
        PROD5[Awards Program]
    end
    
    DS1 --> DP1
    DS2 --> DP1
    DS3 --> DP2
    DS4 --> DP2
    DS5 --> DP3
    DS6 --> DP4
    
    DP1 --> PROD1
    DP1 --> PROD2
    DP2 --> PROD2
    DP3 --> PROD3
    DP4 --> PROD1
    DP5 --> PROD4
    
    PROD3 --> PROD5
```

## 18. Complete Site Map

```mermaid
graph TD
    ROOT[cdoclub.com] --> L1_1[Home]
    ROOT --> L1_2[CDO Summits]
    ROOT --> L1_3[Careers]
    ROOT --> L1_4[Membership]
    ROOT --> L1_5[Publications]
    ROOT --> L1_6[Endorsements]
    ROOT --> L1_7[CDO of Year]
    ROOT --> L1_8[Media Room]
    ROOT --> L1_9[Hall of Fame]
    ROOT --> L1_10[Privacy Policy]
    ROOT --> L1_11[Member Login]
    
    L1_1 --> L2_1[Breaking News]
    L1_1 --> L2_2[Featured Articles]
    L1_1 --> L2_3[Photo Gallery]
    L1_1 --> L2_4[Newsletter Signup]
    L1_1 --> L2_5[Summit Promos]
    L1_1 --> L2_6[Blog Archive<br/>35+ pages]
    
    L1_2 --> L2_7[cdosummit.com]
    L1_2 --> L2_8[caiosummit.com]
    L1_2 --> L2_9[Event Calendar]
    L1_2 --> L2_10[Past Events]
    L1_2 --> L2_11[Registration]
    
    L1_3 --> L2_12[Open Positions<br/>GOLD+ Only]
    L1_3 --> L2_13[Job Updates<br/>SILVER+ Only]
    L1_3 --> L2_14[Career Advice]
    L1_3 --> L2_15[Executive Search]
    
    L1_4 --> L2_16[Basic FREE]
    L1_4 --> L2_17[Silver $495]
    L1_4 --> L2_18[Gold $995]
    L1_4 --> L2_19[Platinum $1,495]
    L1_4 --> L2_20[Corporate $4,995]
    L1_4 --> L2_21[Benefits Comparison]
    L1_4 --> L2_22[Join Now]
    
    L1_5 --> L2_23[CAIO Talent Map<br/>Coming Soon]
    L1_5 --> L2_24[CDO Talent Map 2013]
    L1_5 --> L2_25[101 CDOs to CEO]
    L1_5 --> L2_26[Jobs Archives]
    L1_5 --> L2_27[Download Forms]
    
    L2_26 --> L3_1[CDO Jobs 2014-2024]
    L2_26 --> L3_2[CDAO Jobs 2014-2024]
    L2_26 --> L3_3[CAIO Jobs 2023-2024]
    
    L1_6 --> L2_28[CAIO Summit: 15]
    L1_6 --> L2_29[CDAO Summit: 8]
    L1_6 --> L2_30[IBM Summits: 59]
    L1_6 --> L2_31[Historical: 205]
    
    L1_7 --> L2_32[CDAO Awards]
    L1_7 --> L2_33[CDO Awards]
    L1_7 --> L2_34[2013-2022 Winners]
    L1_7 --> L2_35[Award Criteria]
    
    L2_32 --> L3_4[US Winners]
    L2_32 --> L3_5[International]
    L2_33 --> L3_6[US Winners]
    L2_33 --> L3_7[International]
    
    L1_8 --> L2_36[Media Coverage<br/>28 pages]
    L1_8 --> L2_37[Press Releases<br/>10 pages]
    L1_8 --> L2_38[Photo Gallery]
    L1_8 --> L2_39[Video Gallery]
    L1_8 --> L2_40[CDO Talent Map<br/>Infographics]
    L1_8 --> L2_41[Logos & Creative]
    L1_8 --> L2_42[David Mathison Bio]
    L1_8 --> L2_43[Contact Info]
    
    L1_9 --> L2_44[CDOs → CEO]
    L1_9 --> L2_45[CDOs → Board]
    L1_9 --> L2_46[CDAOs → CEO]
    L1_9 --> L2_47[CDAOs → Board]
    L1_9 --> L2_48[2011-2023 Data]
    
    L2_44 --> L3_8[101+ Tracked]
    L2_45 --> L3_9[100+ Tracked]
    
    style ROOT fill:#4169e1,color:#fff
    style L1_1 fill:#e1f5ff
    style L1_4 fill:#e1ffe1
    style L1_5 fill:#fff3e1
```

