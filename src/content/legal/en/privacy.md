---
title: Privacy Policy
description: What data Traki collects, why, who processes it, and how to exercise your rights.
updated: 2026-10-15
---

Traki is an Android app for logging and tracking expenses. This policy explains what personal data the app handles and how. It applies to the Traki app and to this website.

## Who is responsible

Traki is developed by **Felipe Chibey**, an individual developer, who is the data controller for the data described here. For any privacy question or request, write to [traki.app@gmail.com](mailto:traki.app@gmail.com).

## What data we collect

**Account data.** Your email address and password, used to create your account and sign you in. Passwords are stored hashed by our authentication provider; nobody can read them.

**The financial records you enter.** Expenses and income (amount, currency, category, date and a short description), your accounts (name and currency), custom categories, budgets and app settings such as your default currency and language.

**The text you type to log an expense.** When you write something like “taxi 18 yesterday”, the text is sent to our server and to an AI provider (see below) to work out the amount, category, account, currency and date. We store the resulting record, whose description may be your original text.

**Abuse-prevention counters.** The number of expenses you log per hour, used to rate-limit the service. These counters are deleted after one day.

**Technical data.** Like any online service, our infrastructure providers keep standard request logs (such as IP address and timestamps) for security and operation, for a limited time under their own policies.

**What we don't collect.** Traki has no ads, no analytics, no tracking SDKs and no crash-reporting service. It doesn't access your location, contacts or bank accounts. We don't sell your data or share it for advertising.

## Data on your device

The app keeps a local copy of your records so it works offline, plus a queue of expenses waiting to sync. This copy stays on your phone, and it is wiped when you delete your account from the app or uninstall it.

## Why we use it

We use your data only to provide Traki's features: syncing your records, interpreting the expenses you type, converting between currencies and tracking budgets. The legal basis is the performance of our contract with you (Article 6(1)(b) GDPR). Rate-limiting and security logs rely on our legitimate interest in keeping the service secure and available (Article 6(1)(f) GDPR).

## Who processes your data

We use the following providers, which process data on our behalf and only for this purpose:

| Provider | Purpose | Location |
| --- | --- | --- |
| [Supabase](https://supabase.com/privacy) | Database, authentication and server functions | European Union (Ireland) |
| [Groq](https://groq.com/privacy-policy) | Interpreting the text you type to log an expense | United States |

Groq receives only the text you typed, the names of your categories and accounts, your account currencies and today's date — never your email or any identifier of your account. Groq does not use this data to train models and may retain it for up to 30 days for abuse monitoring and troubleshooting. Transfers to the United States are covered by the safeguards in the provider's data-processing terms, such as the EU Standard Contractual Clauses.

Currency exchange rates are fetched by our server from a public rates service; no personal data is sent to it.

## How long we keep it

We keep your data for as long as you have an account. When you delete your account, your login and all your records are deleted immediately and permanently. Abuse-prevention counters are kept for one day.

## Your rights

You have the right to access, correct, delete, restrict or object to the processing of your personal data, and to receive it in a portable format. You can edit or delete your records directly in the app, and you can delete your account at any time [from the app or from this website](../delete-account/). For anything else, email [traki.app@gmail.com](mailto:traki.app@gmail.com); we answer within one month.

If you think your data is being handled unlawfully, you can complain to the Spanish Data Protection Agency ([AEPD](https://www.aepd.es)) or to the data protection authority where you live.

## Security

All traffic between the app and our servers is encrypted (HTTPS). Every record is tied to your account and the database only lets each account read and change its own data.

## Children

Traki is not intended for children under 16, and we don't knowingly collect their data.

## Changes to this policy

If this policy changes, we'll update it here and change the date at the top.
