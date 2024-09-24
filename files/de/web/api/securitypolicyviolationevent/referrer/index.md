---
title: "SecurityPolicyViolationEvent: referrer-Eigenschaft"
short-title: referrer
slug: Web/API/SecurityPolicyViolationEvent/referrer
l10n:
  sourceCommit: a5c1400a03d86162ea5c4342a93c2d96df470630
---

{{APIRef("Reporting API")}}

Die schreibgeschützte Eigenschaft **`referrer`** des {{domxref("SecurityPolicyViolationEvent")}}-Interfaces ist ein String, der den Referrer für die Ressourcen darstellt, deren [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) verletzt wurde. Dies wird eine URL oder `null` sein.

## Wert

Ein String, der die URL für den Referrer der Ressourcen darstellt, deren Richtlinie verletzt wurde, oder `null`.

## Beispiele

```js
document.addEventListener("securitypolicyviolation", (e) => {
  console.log(e.referrer);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSPViolationReportBody.referrer`](/de/docs/Web/API/CSPViolationReportBody#cspviolationreportbody.referrer)
