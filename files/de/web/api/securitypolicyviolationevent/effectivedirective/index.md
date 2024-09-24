---
title: "SecurityPolicyViolationEvent: effectiveDirective Eigenschaft"
short-title: effectiveDirective
slug: Web/API/SecurityPolicyViolationEvent/effectiveDirective
l10n:
  sourceCommit: 1a7695e13c51d85a81e3e5d85feedbc5dbd2a379
---

{{APIRef("Reporting API")}}

Die schreibgeschützte Eigenschaft **`effectiveDirective`** des {{domxref("SecurityPolicyViolationEvent")}}-Interfaces ist eine Zeichenfolge, die die [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP)-Richtlinie darstellt, die verletzt wurde.

Diese ersetzt {{domxref("SecurityPolicyViolationEvent.violatedDirective")}}, das historische Alias.

## Wert

Eine Zeichenfolge, die die bestimmte [Richtlinie der `Content-Security-Policy`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#directives) darstellt, die verletzt wurde.

## Beispiele

```js
document.addEventListener("securitypolicyviolation", (e) => {
  console.log(e.effectiveDirective);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSPViolationReportBody.effectiveDirective`](/de/docs/Web/API/CSPViolationReportBody#cspviolationreportbody.effectivedirective)
