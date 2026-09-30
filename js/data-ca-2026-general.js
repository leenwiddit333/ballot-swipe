/*
  California statewide propositions — November 3, 2026 General Election.

  EDITORIAL RULES (see README.md):
  - "plain" and "fiscal" come from the Legislative Analyst's Office (LAO) analysis, rewritten in plain language.
  - "eli5" is the "In plain English" paragraph. Most bias-prone layer: read it as a YES voter and as a NO voter.
  - "topic" is one of: housing, budget, elections, health, environment.
  - "yesSays" / "noSays" are each side's own strongest case, stated in their voice. We don't argue with them here.
  - "money" is only what is reported in campaign finance filings or reporting that cites them. If we haven't verified it, we say so.
  - Every card stays status: "draft" until a second person checks it against the Official Voter Information Guide
    (voterguide.sos.ca.gov) and the LAO analysis. Change it to "verified" and fill in verifiedBy + verifiedOn.
*/

window.ELECTION = {
  id: "ca-2026-11-03",
  state: "California",
  name: "November 3, 2026 General Election",
  electionDate: "2026-11-03",
  officialGuide: "https://voterguide.sos.ca.gov/propositions/",
  moneyTracker: "https://www.sos.ca.gov/campaign-lobbying/helpful-resources/measure-contributions",
  props: [
    {
      num: "1",
      nickname: "Housing bond",
      title: "Authorizes Bonds for Housing Affordability Programs",
      topic: "housing",
      eli5: "The state wants to borrow money to help build lower-cost places to live and to help veterans buy homes. Like a mortgage, the state pays it back with interest over about 25 years, using money from the state budget.",
      placedBy: "Legislature",
      yesMeans: "The state can borrow $11.25 billion for affordable housing and veterans' home loans.",
      noMeans: "The state does not borrow this money for these housing programs.",
      yesSays: "California is short on homes people can afford. This builds them and helps veterans buy homes.",
      noSays: "This adds more state debt and doesn't fix why homes are so expensive to build.",
      plain: [
        "$10 billion goes to state housing programs: affordable rental apartments, help buying a first home, and housing for farmworkers, seniors, college students, and people experiencing homelessness.",
        "About $5.1 billion of that goes to the main state program that builds affordable apartment buildings, and $1.15 billion to supportive housing (housing with on-site services).",
        "$1.25 billion goes to the CalVet Home Loan program. Veterans repay those loans through their mortgage payments."
      ],
      fiscal: "The state would pay about $500 million to $600 million a year for roughly 25 years to repay the bonds. The LAO estimates the money could help fund up to 40,000 rental homes.",
      supporters: ["California YIMBY"],
      opponents: ["Some Republican state legislators"],
      money: null,
      conflictsWith: [],
      sources: [
        { label: "LAO analysis", url: "https://lao.ca.gov/BallotAnalysis/Proposition?number=1&year=2026" },
        { label: "Official Voter Guide", url: "https://voterguide.sos.ca.gov/propositions/1/" },
        { label: "California Budget & Policy Center", url: "https://calbudgetcenter.org/resources/proposition-1-californias-veterans-and-affordable-housing-bond/" }
      ],
      status: "draft"
    },
    {
      num: "2",
      nickname: "Rainy day fund",
      title: "Increases State's Rainy Day Fund",
      topic: "budget",
      eli5: "California has a savings account for bad years. This lets the state save twice as much as it can now. The part people argue about: money put into savings wouldn't count toward a limit that sometimes sends extra money back to taxpayers.",
      placedBy: "Legislature",
      yesMeans: "The state can save up to 20% of its general tax revenue in reserves, up from 10%.",
      noMeans: "The current savings cap of 10% stays.",
      yesSays: "Saving more in good years protects schools, health care, and public safety when a recession hits.",
      noSays: "It creates a loophole around the state spending limit and makes taxpayer rebates less likely.",
      plain: [
        "Raises the cap on the state's main savings account from 10% to 20% of General Fund tax revenue.",
        "Money put into savings would no longer count toward the state spending limit (the \"Gann limit\"), which normally requires extra money to be returned to taxpayers or given to schools.",
        "Allows some tax revenue to be used to pay down the state's roughly $20 billion federal unemployment insurance debt."
      ],
      fiscal: "No new tax and no tax cut. It changes how much the state can set aside in savings instead of spending or returning.",
      supporters: ["CA Professional Firefighters", "LA Area Chamber of Commerce", "Gov. Gavin Newsom"],
      opponents: ["Authors of the official ballot argument against (names not yet verified)"],
      money: null,
      conflictsWith: [],
      sources: [
        { label: "LAO analysis", url: "https://lao.ca.gov/BallotAnalysis/Proposition?number=2&year=2026" },
        { label: "Official Voter Guide", url: "https://voterguide.sos.ca.gov/propositions/2/" },
        { label: "CalMatters", url: "https://calmatters.org/california-voter-guide-2026/proposition-2-rainy-day-fund/" }
      ],
      status: "draft"
    },
    {
      num: "3",
      nickname: "High-income tax extension",
      title: "Provides Permanent Funding for Schools and Health Care by Extending Existing Tax on High Incomes",
      topic: "budget",
      eli5: "Since 2012, people who make a lot (roughly $370,000 or more a year) have paid a little extra state income tax, and a big share goes to schools. That extra tax is set to end in 2030. This makes it permanent. Nobody's tax goes up from what they pay today.",
      placedBy: "Legislature",
      yesMeans: "Extra income tax rates on high earners, set to expire in 2030, become permanent.",
      noMeans: "Those extra rates end after 2030 as currently scheduled.",
      yesSays: "This money is a major source of school funding. Losing it means layoffs and program cuts.",
      noSays: "California already has some of the highest income taxes in the country. People and jobs may leave.",
      plain: [
        "Voters raised income tax rates on high earners in 2012 (Prop 30) and extended them in 2016 (Prop 55) until 2030.",
        "This removes the 2030 end date. The rates apply to income above roughly $370,000 a year for a single filer (adjusted for inflation each year).",
        "It does not raise anyone's current tax rate."
      ],
      fiscal: "Keeps about $5 billion to $15 billion a year in state revenue. The LAO estimates about 40% would typically go to schools and community colleges.",
      supporters: ["California Teachers Association", "California State PTA", "CA School Nurses Organization", "Planned Parenthood Affiliates of CA"],
      opponents: ["California Taxpayers Association", "Family Business Association of California", "California Hispanic Chambers of Commerce"],
      money: null,
      conflictsWith: [],
      sources: [
        { label: "LAO analysis", url: "https://lao.ca.gov/BallotAnalysis/Proposition?number=3&year=2026" },
        { label: "Official Voter Guide", url: "https://voterguide.sos.ca.gov/propositions/3/" },
        { label: "KPBS explainer", url: "https://www.kpbs.org/news/politics/2026/09/23/proposition-3-make-income-taxes-on-higher-earners-permanent-to-fund-education-and-healthcare" }
      ],
      status: "draft"
    },
    {
      num: "4",
      nickname: "Public campaign financing",
      title: "Repeals Prohibition Against Public Funding of Election Campaigns",
      topic: "elections",
      eli5: "Right now California bans using public money to help pay for political campaigns. This removes the ban. It doesn't start a program by itself. A city, county, or the state would have to decide later to create one.",
      placedBy: "Legislature",
      yesMeans: "State and local governments would be allowed to create public funding programs for campaigns.",
      noMeans: "The current ban on public funding of campaigns stays.",
      yesSays: "Public financing lowers the power of big private donors and lets candidates without wealthy backers run.",
      noSays: "Taxpayers would end up paying for candidates they don't support, and the programs cost money to run.",
      plain: [
        "Lifts the ban on using public money to help fund candidates' campaigns.",
        "It does not create a program or spend money by itself. A city, county, or the state would have to create one later.",
        "Any program could not use money set aside for education, transportation, or public safety."
      ],
      fiscal: "A few hundred thousand dollars a year for the state ethics commission (FPPC) to advise governments. Any program's cost would depend on later decisions.",
      supporters: ["League of Women Voters of CA", "California Nurses Association", "Consumer Watchdog"],
      opponents: ["California Taxpayers Association", "Howard Jarvis Taxpayers Association", "Family Business Association of California"],
      money: null,
      conflictsWith: [],
      sources: [
        { label: "LAO analysis", url: "https://lao.ca.gov/BallotAnalysis/Proposition?number=4&year=2026" },
        { label: "Official Voter Guide", url: "https://voterguide.sos.ca.gov/propositions/4/" },
        { label: "CaVotes (League of Women Voters)", url: "https://cavotes.org/ballot-measure/2026-prop-4/" }
      ],
      status: "draft"
    },
    {
      num: "5",
      nickname: "Recall elections",
      title: "Changes Recall Election Process for Statewide Officers",
      topic: "elections",
      eli5: "Today, when voters try to remove a statewide official like the governor, the same ballot lists possible replacements, and one can win with a small share of the vote. This removes that list. If the official is removed, the normal backup takes over, like the lieutenant governor stepping in for the governor.",
      placedBy: "Legislature",
      yesMeans: "Recall ballots would no longer include a list of replacement candidates. A vacancy would be filled by the normal succession rules.",
      noMeans: "Voters keep choosing a replacement on the same ballot as the recall.",
      yesSays: "Voters keep the power to recall, and a replacement can't win with a small share of the vote.",
      noSays: "It takes away voters' right to pick the replacement and hands that choice to politicians.",
      plain: [
        "Today, a recall ballot asks two things: remove the official? and who replaces them?",
        "Under Prop 5, only the first question stays. If a governor is recalled, the lieutenant governor takes over, and voters may elect a new governor at the next statewide election.",
        "Other statewide offices would be filled by appointment under existing rules. Legislative seats would get a separate special election.",
        "A recalled official could not be appointed to the vacancy but could run in a later special election."
      ],
      fiscal: "Could change election costs depending on how many recalls and special elections happen. See the LAO analysis for details.",
      supporters: ["Authors of the official ballot argument for (names not yet verified)"],
      opponents: ["Authors of the official ballot argument against (names not yet verified)"],
      money: null,
      conflictsWith: [],
      sources: [
        { label: "LAO analysis", url: "https://lao.ca.gov/BallotAnalysis/Proposition?number=5&year=2026" },
        { label: "Official Voter Guide", url: "https://voterguide.sos.ca.gov/propositions/5/" },
        { label: "CalMatters", url: "https://calmatters.org/california-voter-guide-2026/proposition-5-recall-reform/" }
      ],
      status: "draft"
    },
    {
      num: "37",
      nickname: "Middle-income home loans",
      title: "Creates Loan Program for Middle-Income Buyers of Qualified New Homes",
      topic: "housing",
      eli5: "This creates a state program that lends middle-income buyers up to 17% of the price of a newly built home, so their regular mortgage can be smaller. Buyers pay it back. The program borrows up to $25 billion, and the loan payments are designed to repay it.",
      placedBy: "Voters (signature petition)",
      yesMeans: "A state agency could issue up to $25 billion in bonds to offer second mortgages to middle-income buyers of new homes.",
      noMeans: "No new state second-mortgage program is created.",
      yesSays: "It helps working families afford a newly built home without costing taxpayers, and gets more homes built.",
      noSays: "Low down payments raise default risk, it doesn't prioritize first-time buyers, and it could push building farther out.",
      plain: [
        "The California Housing Finance Agency would offer fixed-rate second mortgages covering up to 17% of the price of a newly built home.",
        "To qualify: live in California at least a year, live in the home, earn under 200% of the local median income, and put at least 3% down.",
        "Only new homes (and some converted non-residential buildings) qualify."
      ],
      fiscal: "The LAO says there would likely be no direct cost to the state, because borrowers' payments are designed to repay the bonds. If many borrowers default, there may not be enough to repay them.",
      supporters: ["Former Senate leader Robert Hertzberg (sponsor)", "California Teachers Association", "United Nurses Associations of California", "Construction unions"],
      opponents: ["League of Women Voters of California", "No official argument against was submitted"],
      money: { yes: "More than $22 million raised, including from the California Association of Realtors and construction unions.", no: "No major opposition campaign reported." },
      conflictsWith: [],
      sources: [
        { label: "LAO analysis", url: "https://lao.ca.gov/BallotAnalysis/Proposition?number=37&year=2026" },
        { label: "Official Voter Guide", url: "https://voterguide.sos.ca.gov/propositions/37/" },
        { label: "California Budget & Policy Center", url: "https://calbudgetcenter.org/resources/will-proposition-37-make-homeownership-more-affordable-its-not-guaranteed/" }
      ],
      status: "draft"
    },
    {
      num: "38",
      nickname: "Immunology research bond",
      title: "Authorizes Bonds for Immunology Medical Research",
      topic: "health",
      eli5: "The state would borrow $8.4 billion for medical research on the immune system, aimed at diseases like cancer and Alzheimer's. Half the money would go to one research institute. CalMatters reports the measure's main funder co-founded the institute most likely to get that half.",
      placedBy: "Voters (signature petition)",
      yesMeans: "The state borrows $8.4 billion for research on immune-system treatments for diseases like cancer and Alzheimer's.",
      noMeans: "The state does not borrow this money.",
      yesSays: "Immunotherapy could lead to cures, and federal research funding is being cut.",
      noSays: "Half the money goes to one institute picked by the measure's authors instead of through open competition.",
      plain: [
        "Creates an $8.4 billion bond for immunology research into cancer, heart disease, Alzheimer's, and other diseases.",
        "Half goes to one research institute affiliated with the University of California. The other half is split among selected public universities and nonprofits.",
        "Drugs developed with the money must be sold to Californians at a 20% discount, and 10% of drug revenue returns to the state."
      ],
      fiscal: "About $500 million to $600 million a year for roughly 20 years to repay the bonds. Some of that could be offset if the research earns money.",
      supporters: ["Alzheimer's Association", "Michael J. Fox Foundation", "ALS Association", "National Multiple Sclerosis Society"],
      opponents: ["Robert Kaplan (Stanford, former NIH official)", "Courage California"],
      money: { yes: "Main backer Gary Michelson and his foundation gave at least $8.2 million; co-founder Meyer Luskin gave at least $5 million. CalMatters found the institute they co-founded is likely the only one that qualifies for the $4.2 billion share.", no: "No major opposition spending reported." },
      conflictsWith: [],
      sources: [
        { label: "LAO analysis", url: "https://lao.ca.gov/BallotAnalysis/Proposition?number=38&year=2026" },
        { label: "Official Voter Guide", url: "https://voterguide.sos.ca.gov/propositions/38/" },
        { label: "CalMatters: who's behind it", url: "https://calmatters.org/politics/elections/2026/07/proposition-38-california/" }
      ],
      status: "draft"
    },
    {
      num: "39",
      nickname: "Voter ID",
      title: "Prohibits Citizens from Voting Unless They Present Government-Issued Identification",
      topic: "elections",
      eli5: "You'd have to show a government ID to vote in person, and write part of an ID number on your mail ballot envelope. The state would offer free ID cards. Right now, most California voters don't have to show ID.",
      placedBy: "Voters (signature petition)",
      yesMeans: "You'd need a government ID to vote in person, and part of a government ID number to vote by mail.",
      noMeans: "Voting rules stay as they are. California does not require ID for most voters.",
      yesSays: "Most states require ID. It builds trust in elections, and the state would give out free ID cards.",
      noSays: "Eligible voters without ID, especially people with disabilities, low incomes, or who recently moved, would have a harder time voting.",
      plain: [
        "Amends the state constitution to require a government-issued photo ID to vote in person.",
        "Mail voters would write the last four digits of a government ID number on their ballot envelope.",
        "The state would have to provide free voter ID cards and step up upkeep of voter registration lists."
      ],
      fiscal: "State and county costs of tens of millions to low hundreds of millions of dollars a year.",
      supporters: ["Howard Jarvis Taxpayers Association", "Latino American Political Association", "California Women's Leadership Association"],
      opponents: ["ACLU California Action", "Common Cause", "League of Women Voters of California"],
      money: { yes: "Top donor is Wisconsin billionaire Richard Uihlein, about $17 million. Others include Steve Bray ($1M loan), Nicole Shanahan ($370K), and the Winklevoss twins ($250K).", no: "Donors include ACLU of Northern California, Reed Hastings ($1M), Patty Quillin ($1.5M), and Quinn Delaney ($1.5M)." },
      conflictsWith: [],
      sources: [
        { label: "LAO analysis", url: "https://lao.ca.gov/BallotAnalysis/Proposition?number=39&year=2026" },
        { label: "Official Voter Guide", url: "https://voterguide.sos.ca.gov/propositions/39/" },
        { label: "CalMatters", url: "https://calmatters.org/california-voter-guide-2026/proposition-39-voter-id/" }
      ],
      status: "draft"
    },
    {
      num: "40",
      nickname: "Billionaire tax",
      title: "Imposes One-Time Tax on Certain Taxpayers",
      topic: "budget",
      eli5: "People worth more than $1 billion who lived in California on January 1, 2026 would pay a one-time tax of 5% of their wealth. Most of the money would go to health care. It's a single payment, not a yearly tax.",
      placedBy: "Voters (signature petition)",
      yesMeans: "Californians worth more than $1 billion pay a one-time 5% tax on their wealth, mostly to fund health care.",
      noMeans: "No wealth tax.",
      yesSays: "Billionaires gained the most from recent federal tax cuts, and this money protects health care for millions.",
      noSays: "Billionaires will leave the state, and California will lose tax revenue over time.",
      plain: [
        "Applies to people who lived in California on January 1, 2026 and are worth more than $1 billion.",
        "They pay a one-time tax of 5% of their net worth, due in 2027. Real estate, pensions, and retirement accounts are generally not counted.",
        "Most of the money goes to state health care programs, with smaller amounts for food assistance and education."
      ],
      fiscal: "Large one-time revenue, but the amount depends heavily on how many billionaires stay. See the LAO analysis for its estimate.",
      supporters: ["SEIU United Healthcare Workers West (sponsor)", "California Democratic Party"],
      opponents: ["Silicon Valley entrepreneurs and business groups", "Some health and labor organizations"],
      money: { yes: "About $31 million raised, mostly from SEIU-UHW.", no: "More than $56 million against, through Building a Better California, funded by Google co-founder Sergey Brin and other billionaires." },
      conflictsWith: ["41", "42"],
      conflictNote: "Props 41 and 42 are funded by the same group opposing Prop 40. If Prop 42 passes with more votes than Prop 40, Prop 40 would be cancelled even if it also passes. Prop 41 could also block it.",
      sources: [
        { label: "LAO analysis", url: "https://lao.ca.gov/BallotAnalysis/Proposition?number=40&year=2026" },
        { label: "Official Voter Guide", url: "https://voterguide.sos.ca.gov/propositions/40/" },
        { label: "CalMatters: how 41 & 42 could cancel it", url: "https://calmatters.org/health/2026/09/california-wealth-tax-prop-40-41-42/" }
      ],
      status: "draft"
    },
    {
      num: "41",
      nickname: "Tax audits and spending limit",
      title: "Prohibits New State Taxes That Exclude Revenues from State Spending Limit. Requires Audits for New State Special Taxes",
      topic: "budget",
      eli5: "This does two things. It requires regular audits of programs paid for by new special taxes. It also cancels new state taxes that skip the state spending limit, which reporters say could knock out the billionaire tax in Prop 40.",
      placedBy: "Voters (signature petition)",
      yesMeans: "New state taxes can't be exempt from the spending limit, and programs funded by new special taxes get regular audits.",
      noMeans: "The rules for new state taxes stay the same.",
      yesSays: "Voters deserve independent audits showing whether special tax money is spent well.",
      noSays: "It's written to cancel the billionaire tax and makes it harder to fund public services.",
      plain: [
        "Cancels state taxes passed after January 1, 2026 whose revenue is exempt from the state spending limit.",
        "Before a citizen initiative with a special tax goes on the ballot, the State Auditor reviews the programs it would fund.",
        "Programs paid for by special taxes created after January 1, 2026 get audited every four years."
      ],
      fiscal: "Net effect unknown; it depends on future tax decisions. Audits would cost low millions of dollars a year, mostly paid from the taxes being audited.",
      supporters: ["California Taxpayers Association", "CA Society of CPAs", "CalAsian Chamber of Commerce"],
      opponents: ["SEIU United Healthcare Workers West", "Sen. Bernie Sanders"],
      money: { yes: "Building a Better California (the group opposing Prop 40, funded by Sergey Brin and other billionaires) has raised about $131 million for Props 41 and 42 combined.", no: null },
      conflictsWith: ["40"],
      conflictNote: "Reporting by CalMatters says Prop 41 could block the billionaire tax (Prop 40) even if Prop 40 passes.",
      sources: [
        { label: "LAO analysis", url: "https://lao.ca.gov/BallotAnalysis/Proposition?number=41&year=2026" },
        { label: "Official Voter Guide", url: "https://voterguide.sos.ca.gov/propositions/41/" },
        { label: "CalMatters", url: "https://calmatters.org/california-voter-guide-2026/proposition-41-tax-audits/" }
      ],
      status: "draft"
    },
    {
      num: "42",
      nickname: "Ban on wealth and retroactive taxes",
      title: "Prohibits New State Personal Property Taxes and Certain Retroactive State Taxes",
      topic: "budget",
      eli5: "This bans new state taxes on owning things like stocks, businesses, or savings, and bans taxes that reach back in time. It's aimed at stopping wealth taxes. If it gets more votes than Prop 40, Prop 40 would not take effect.",
      placedBy: "Voters (signature petition)",
      yesMeans: "The state can't create new taxes on owning things other than real estate (like stocks or businesses), or taxes that reach back in time.",
      noMeans: "No new limits on these kinds of taxes.",
      yesSays: "People shouldn't be taxed just for owning retirement accounts, investments, or a business, or for things they did in the past.",
      noSays: "It's designed by billionaires to kill the billionaire tax and block future taxes on extreme wealth.",
      plain: [
        "Bans new state taxes on owning personal property: everything besides real estate, including business shares, investments, retirement accounts, and intellectual property.",
        "Bans new state taxes that apply to things people did or owned before the tax took effect.",
        "Applies to taxes enacted on or after January 1, 2026, and cancels conflicting ones."
      ],
      fiscal: "No direct cost now. It limits the state's options for raising revenue in the future.",
      supporters: ["CA Professional Firefighters", "State Building & Construction Trades Council", "AMVETS Department of CA"],
      opponents: ["SEIU United Healthcare Workers West", "Sen. Bernie Sanders"],
      money: { yes: "Building a Better California (the group opposing Prop 40, funded by Sergey Brin and other billionaires) has raised about $131 million for Props 41 and 42 combined.", no: null },
      conflictsWith: ["40"],
      conflictNote: "If Prop 42 gets more yes votes than Prop 40, Prop 40 (the billionaire tax) would be cancelled even if it also passes.",
      sources: [
        { label: "LAO analysis", url: "https://lao.ca.gov/BallotAnalysis/Proposition?number=42&year=2026" },
        { label: "Official Voter Guide", url: "https://voterguide.sos.ca.gov/propositions/42/" },
        { label: "CalMatters", url: "https://calmatters.org/california-voter-guide-2026/proposition-42-property-taxes/" }
      ],
      status: "draft"
    },
    {
      num: "43",
      nickname: "Two-thirds vote for local taxes",
      title: "Limits Voters' Ability to Raise Revenues for Local Government Services",
      topic: "budget",
      eli5: "When residents gather signatures to put a local tax for something specific (like parks or fire services) on the ballot, it can pass today with just over half the vote. This would require a two-thirds vote instead, which makes those taxes harder to pass.",
      placedBy: "Voters (signature petition)",
      yesMeans: "Local special taxes proposed by citizen petition would need a two-thirds vote to pass instead of a simple majority.",
      noMeans: "Citizen-proposed local special taxes can still pass with a simple majority.",
      yesSays: "It restores Prop 13's two-thirds rule and protects homeowners and renters from new taxes passed in low-turnout elections.",
      noSays: "It makes it harder for communities to fund fire protection, 911, schools, roads, and housing, and lets a minority block what most voters want.",
      plain: [
        "Special taxes are local taxes for a specific purpose, like parks or fire services.",
        "A 2017 California Supreme Court ruling let special taxes proposed by citizen petition pass with 50% plus one. Taxes proposed by local governments already need two-thirds.",
        "Starting January 1, 2027, citizen-proposed special taxes would also need two-thirds."
      ],
      fiscal: "Likely less local tax revenue in the future, depending on which measures would have passed with a majority but not two-thirds.",
      supporters: ["Anti-tax and taxpayer groups (names not yet verified)"],
      opponents: ["Local service and housing advocates (names not yet verified)"],
      money: null,
      conflictsWith: [],
      sources: [
        { label: "LAO analysis", url: "https://lao.ca.gov/BallotAnalysis/Proposition?number=43&year=2026" },
        { label: "Official Voter Guide", url: "https://voterguide.sos.ca.gov/propositions/43/" },
        { label: "CalMatters", url: "https://calmatters.org/california-voter-guide-2026/proposition-43-tax-threshold/" }
      ],
      status: "draft"
    },
    {
      num: "44",
      nickname: "Clinic spending rule",
      title: "Community clinic spending requirement (official title not yet confirmed)",
      topic: "health",
      eli5: "Community clinics that serve low-income patients would have to spend at least 90 cents of every dollar they bring in on patient care, or pay fines. It's sponsored by the same health care workers' union that is behind Prop 40.",
      placedBy: "Voters (signature petition)",
      yesMeans: "Nonprofit community clinics must spend at least 90% of their revenue on patient care, or face fines.",
      noMeans: "No new spending requirement for community clinics.",
      yesSays: "Clinics should spend money on patients, not executive pay and overhead.",
      noSays: "Most clinics couldn't meet the rule. Fines could force them to cut services or close.",
      plain: [
        "Applies to private nonprofit safety-net clinics that serve low-income patients.",
        "At least 90% of yearly revenue must go to health care services. Administration and other costs are capped at 10%.",
        "The attorney general decides what counts as patient care and can fine clinics that fall short."
      ],
      fiscal: "State costs to enforce the rule. Opponents estimate clinics could owe over $1.7 billion in fines in the first year; see the LAO for the neutral estimate.",
      supporters: ["SEIU United Healthcare Workers West (sponsor)"],
      opponents: ["California Primary Care Association", "California Medical Association", "Planned Parenthood Affiliates of CA", "California Hospital Association", "California Democratic Party"],
      money: null,
      conflictsWith: [],
      sources: [
        { label: "LAO analysis", url: "https://lao.ca.gov/BallotAnalysis/Proposition?number=44&year=2026" },
        { label: "Official Voter Guide", url: "https://voterguide.sos.ca.gov/propositions/44/" },
        { label: "CalMatters", url: "https://calmatters.org/california-voter-guide-2026/proposition-44-clinic-funding/" }
      ],
      status: "draft"
    },
    {
      num: "45",
      nickname: "Faster environmental review",
      title: "Modifies Environmental Review for Certain Projects",
      topic: "environment",
      eli5: "California requires environmental studies before many projects get built, and lawsuits over those studies can slow things down for years. This sets deadlines for the studies and limits those lawsuits for projects like housing, transit, water, and clean energy.",
      placedBy: "Voters (signature petition)",
      yesMeans: "Many housing, transportation, water, energy, and health projects get faster environmental review and faster court decisions.",
      noMeans: "Environmental review (CEQA) stays as it is.",
      yesSays: "Reviews and lawsuits delay badly needed housing and infrastructure for years. Deadlines get projects built.",
      noSays: "It weakens protections for communities and the environment and makes the law harder to enforce.",
      plain: [
        "Changes the California Environmental Quality Act (CEQA) for eligible projects: housing, transportation, water, clean energy, health facilities, wildfire prevention, schools, and broadband.",
        "Agencies get deadlines, for example about 365 business days to finish a full environmental impact report.",
        "Courts would face limits on what evidence they can consider and what remedies they can order in CEQA lawsuits."
      ],
      fiscal: "See the LAO analysis. Effects depend on how many projects qualify and how agencies and courts respond.",
      supporters: ["California Chamber of Commerce (author)", "California Children's Hospital Association", "California Water Association", "California Council for Affordable Housing"],
      opponents: ["Coalition for Clean Air", "CA Environmental Voters", "National Wildlife Federation", "California Democratic Party", "Labor unions"],
      money: { yes: "Funded by gas and electric utilities, corporate PACs, and a PAC largely funded by tech executives.", no: null },
      conflictsWith: [],
      sources: [
        { label: "LAO analysis", url: "https://lao.ca.gov/BallotAnalysis/Proposition?number=45&year=2026" },
        { label: "Official Voter Guide", url: "https://voterguide.sos.ca.gov/propositions/45/" },
        { label: "CalMatters", url: "https://calmatters.org/california-voter-guide-2026/proposition-45-environmental-review/" }
      ],
      status: "draft"
    }
  ]
};
