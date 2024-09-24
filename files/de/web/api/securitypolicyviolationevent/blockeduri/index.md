---
title: "SecurityPolicyViolationEvent: blockedURI-Eigenschaft"
short-title: blockedURI
slug: Web/API/SecurityPolicyViolationEvent/blockedURI
l10n:
  sourceCommit: a5c1400a03d86162ea5c4342a93c2d96df470630
---

{{APIRef("Reporting API")}}

Die schreibgeschützte Eigenschaft **`blockedURI`** des {{domxref("SecurityPolicyViolationEvent")}}-Interfaces ist ein String, der die URI der Ressource darstellt, die blockiert wurde, weil sie gegen eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) verstößt.

## Wert

Ein String, der die URI der blockierten Ressource darstellt.

## Beispiele

```js
document.addEventListener("securitypolicyviolation", (e) => {
  console.log(e.blockedURI);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSPViolationReportBody.blockedURL`](/de/docs/Web/API/CSPViolationReportBody#cspviolationreportbody.blockedurl)
