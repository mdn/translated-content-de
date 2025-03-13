---
title: "SecurityPolicyViolationEvent: effectiveDirective-Eigenschaft"
short-title: effectiveDirective
slug: Web/API/SecurityPolicyViolationEvent/effectiveDirective
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`effectiveDirective`**-Eigenschaft der [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)-Schnittstelle ist ein String, der die [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)-Direktive darstellt, die verletzt wurde.

Dies ersetzt [`SecurityPolicyViolationEvent.violatedDirective`](/de/docs/Web/API/SecurityPolicyViolationEvent/violatedDirective), seinen historischen Alias.

## Wert

Ein String, der die spezifische [`Content-Security-Policy`-Direktive](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#directives) darstellt, die verletzt wurde.

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

- [`CSPViolationReportBody.effectiveDirective`](/de/docs/Web/API/CSPViolationReportBody/effectiveDirective)
