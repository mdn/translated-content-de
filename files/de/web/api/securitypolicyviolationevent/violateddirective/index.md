---
title: "SecurityPolicyViolationEvent: violatedDirective Eigenschaft"
short-title: violatedDirective
slug: Web/API/SecurityPolicyViolationEvent/violatedDirective
l10n:
  sourceCommit: 701ac4440432ac215713b6b7f274291ca643c49a
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die **`violatedDirective`** schreibgeschützte Eigenschaft des [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent) Interfaces ist ein String, der die [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) Direktive darstellt, die verletzt wurde.

Dies ist ein historisches Alias von [`SecurityPolicyViolationEvent.effectiveDirective`](/de/docs/Web/API/SecurityPolicyViolationEvent/effectiveDirective) und hat denselben Wert.

## Wert

Ein String, der die [Content-Security-Policy Direktive](/de/docs/Web/HTTP/Headers/Content-Security-Policy#directives) darstellt, die verletzt wurde.

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
