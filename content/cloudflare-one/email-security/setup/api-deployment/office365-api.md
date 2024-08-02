---
title: Set up with Microsoft 365
pcx_content_type: how-to
weight: 3
meta:
 title: Set up with Microsoft 365
---

# Set up with Microsoft 365

This guide will instruct you through setting up Microsoft Office 365 with Email Security via the Cloudflare dashboard.

## Prerequisites

* A [Cloudflare account](https://dash.cloudflare.com/sign-up).
* A domain to protect.

## Enable Email Security via the dashboard

To enable Email Security:

1. Log in to the [Cloudflare dashboard](https://dash.cloudflare.com/).
2. Select **Zero Trust**.
3. Select **Email Security**.
4. Select **Monitoring**. If you are a first time user, select **Contact sales**. Otherwise, select **Connect an integration**.

Continue with [Enable Microsoft integration](/cloudflare-one/email-security/setup/api-deployment/office365-api/#enable-microsoft-integration) for the next steps.

### Enable Microsoft integration

To enable Microsoft integration:

1. **Name integration**: Add your integration name, then select **Continue**.
2. **Authorize integration**:
   - Select **Authorize**. Selecting **Authorize** will take you to the Microsoft Sign in page where you will have to enter your email address.
   - Once you enter your email address, select **Next**.
   - After selecting **Next**, the system will show a dialog box with a list of requested permissions. Select **Accept** to authorize Email Security. Upon authorization, you will be redirected to a page where you can review details and enroll integration.
3. **Review details**: Review your integration details, then:
   - Select **Complete ES set up** where you will be able to connect your domains and configure auto-moves.
   - Select **Continue to ES**.

Continue with [Connect your domains](/cloudflare-one/email-security/setup/api-deployment/office365-api/#connect-your-domains) for the next steps.

### Connect your domains

On the **Set up Email Security** page, you will be able to connect your domains. To connect your domains:

1. **Connect domains**: Select at least one domain. Then, select **Continue**.
2. (**Optional**, select **Skip for now** to skip this step) **Configure auto-move**: Refer to [Auto-moves](/cloudflare-one/email-security/auto-moves/) to configure auto-moves.
3. **Review details**: Review your connected domains, then select **Go to domains**. 

Your domains are now connected successfully.
 
### Connect new domains

To connect new domains:

1. Log in to the [Cloudflare dashboard](https://dash.cloudflare.com/).
2. Select **Zero Trust**.
3. Select **Email security**.
4. Select **Settings**.
5. On the **Integrated domains** page, select **+ Connect a domain**.
6. Select the domains you want Email Security to scan.
7. Select **Save**.

## Prevent Cloudflare from scanning a domain

If you want to prevent Cloudflare from scanning a domain:

1. On the **Integrated domains** page, select the domain you do not want to be scanned.
2. Select the three dots > **Stop scanning**.

## View an integration

To view the integration for each connected domain:

1. Select a domain.
2. Select the three dots > **View integration**.

Once you have set up Email Security to scan through your inbox, Email Security will display detailed information about your inbox. Refer to [Monitor your inbox](/cloudflare-one/insights/email-monitoring/) to learn more.