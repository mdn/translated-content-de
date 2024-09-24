---
title: "SecurityPolicyViolationEvent: documentURI-Eigenschaft"
short-title: documentURI
slug: Web/API/SecurityPolicyViolationEvent/documentURI
l10n:
  sourceCommit: a5c1400a03d86162ea5c4342a93c2d96df470630
---

{{APIRef("Reporting API")}}

Die **`documentURI`** schreibgeschützte Eigenschaft der {{domxref("SecurityPolicyViolationEvent")}}-Schnittstelle ist ein Zeichenfolgenwert, der die URI des Dokuments oder Arbeiters darstellt, in dem die [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP)-Verletzung auftrat.

## Wert

Eine Zeichenfolge, die die URI des Dokuments oder Arbeiters darstellt, in dem die Verletzung auftrat.

## Beispiele

```js
document.addEventListener("securitypolicyviolation", (e) => {
  console.log(e.documentURI);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSPViolationReportBody.documentURL`](/de/docs/Web/API/CSPViolationReportBody#cspviolationreportbody.documenturl)
