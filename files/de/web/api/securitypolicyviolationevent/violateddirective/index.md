---
title: "SecurityPolicyViolationEvent: violatedDirective-Eigenschaft"
short-title: violatedDirective
slug: Web/API/SecurityPolicyViolationEvent/violatedDirective
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die **`violatedDirective`**-Schreibgeschützte Eigenschaft des [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)-Interfaces ist ein String, der die [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)-Direktive darstellt, die verletzt wurde.

Dies ist ein historisches Alias von [`SecurityPolicyViolationEvent.effectiveDirective`](/de/docs/Web/API/SecurityPolicyViolationEvent/effectiveDirective) und hat denselben Wert.

## Wert

Ein String, der die verletzte [`Content-Security-Policy`-Direktive](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#directives) darstellt.

## Beispiele

```js
document.addEventListener("securitypolicyviolation", (e) => {
  console.log(e.violatedDirective);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
