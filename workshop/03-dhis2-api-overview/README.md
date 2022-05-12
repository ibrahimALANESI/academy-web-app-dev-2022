# DHIS2 API Overview

## Useful Links

- [DHIS2 API documentation](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-235/web-api.html)
- [REST API Query Viewer](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/general/query-viewer.html)
- [Data Query Playground](https://runtime.dhis2.nu/playground)

## Examples

Analytics Query (URL parameters)

```
https://academy.demos.dhis2.org/web-app/api/33/analytics.json?dimension=dx:hCVSHjcml9g;fbfJHSPpUQD;cYeuwXTCPkU;yTHydhurQQU;rbkr8PL0rwM;ybzlGLjWwnK&dimension=fMZEcRHuamy:qkPbeWaFsnU;wbrDrL2aYEc&dimension=pe:LAST_12_MONTHS&dimension=J5jldMd8OHv:uYxK4wmcPqA;tDZVQ1WtwpA;EYbopBOJWsW;RXL3lPSK8oG;CXw2yu5fodb&filter=ou:ImspTQPwCqd&displayProperty=SHORTNAME
```

Pretty-printed:

```
https://academy.demos.dhis2.org/web-app/api/33/analytics.json
?dimension=dx:hCVSHjcml9g;fbfJHSPpUQD;cYeuwXTCPkU;yTHydhurQQU;rbkr8PL0rwM;ybzlGLjWwnK
&dimension=fMZEcRHuamy:qkPbeWaFsnU;wbrDrL2aYEc
&dimension=pe:LAST_12_MONTHS
&dimension=J5jldMd8OHv:uYxK4wmcPqA;tDZVQ1WtwpA;EYbopBOJWsW;RXL3lPSK8oG;CXw2yu5fodb
&filter=ou:ImspTQPwCqd
&displayProperty=SHORTNAME
```

Data Query (same result)

```json
{
  "result": {
    "resource": "analytics",
    "params": {
        "dimension": [
            "dx:hCVSHjcml9g;fbfJHSPpUQD;cYeuwXTCPkU;yTHydhurQQU;rbkr8PL0rwM;ybzlGLjWwnK",
            "fMZEcRHuamy:qkPbeWaFsnU;wbrDrL2aYEc",
            "pe:LAST_12_MONTHS",
            "J5jldMd8OHv:uYxK4wmcPqA;tDZVQ1WtwpA;EYbopBOJWsW;RXL3lPSK8oG;CXw2yu5fodb"
        ],
        "filter": "ou:ImspTQPwCqd",
        "displayProperty": "SHORTNAME"
    }
  }
}
```

## Task 1

You're now going to practice on using these elements:

- Metadata object filter
- Browsing the web API
- Metadata field filter

We want you to create the following query:

```Fetch organisation units: get only ones with ‘CHP’ in the name. Use a page size of 10, and sort the results by the name property in descending order. For each result, get the id, name, displayName, code, and lastUpdated properties```

then run it against [academy.demos.dhis2.org/web-app](https://academy.demos.dhis2.org/web-app) and paste the result in a new `solution.json` file in this directory (`03-dhis2-api-overview`).

Some handy links:

- [REST API Documentation](https://docs.dhis2.org/2.34/en/dhis2_developer_manual/web-api.html)
- [App Runtime Docs](https://runtime.dhis2.nu)
- [Data Query Playground](https://runtime.dhis2.nu/playground)
