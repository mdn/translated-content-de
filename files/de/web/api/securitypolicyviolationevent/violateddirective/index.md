---
title: "SecurityPolicyViolationEvent: violatedDirective-Eigenschaft"
short-title: violatedDirective
slug: Web/API/SecurityPolicyViolationEvent/violatedDirective
l10n:
  sourceCommit: 701ac4440432ac215713b6b7f274291ca643c49a
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`violatedDirective`** des [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)-Interfaces ist ein Zeichenfolgenwert, der die [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP)-Direktive darstellt, die verletzt wurde.

Dies ist ein historischer Alias von [`SecurityPolicyViolationEvent.effectiveDirective`](/de/docs/Web/API/SecurityPolicyViolationEvent/effectiveDirective) und hat denselben Wert.

## Wert

Eine Zeichenfolge, die die verletzte [`Content-Security-Policy`](Content-Security-Policy#directives)-Direktive darstellt.

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
