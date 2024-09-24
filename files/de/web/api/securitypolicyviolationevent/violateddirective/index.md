---
title: "SecurityPolicyViolationEvent: violatedDirective-Eigenschaft"
short-title: violatedDirective
slug: Web/API/SecurityPolicyViolationEvent/violatedDirective
l10n:
  sourceCommit: a5c1400a03d86162ea5c4342a93c2d96df470630
---

{{APIRef("Reporting API")}}

Die schreibgeschützte **`violatedDirective`**-Eigenschaft der {{domxref("SecurityPolicyViolationEvent")}}-Schnittstelle ist ein String, der die verletzte [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP)-Direktive darstellt.

Dies ist ein historisches Alias von {{domxref("SecurityPolicyViolationEvent.effectiveDirective")}} und hat denselben Wert.

## Wert

Ein String, der die verletzte [`Content-Security-Policy`-Direktive](/de/docs/Web/HTTP/Headers/Content-Security-Policy#directives) darstellt.

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
