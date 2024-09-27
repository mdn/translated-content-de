---
title: "SecurityPolicyViolationEvent: effectiveDirective-Eigenschaft"
short-title: effectiveDirective
slug: Web/API/SecurityPolicyViolationEvent/effectiveDirective
l10n:
  sourceCommit: 701ac4440432ac215713b6b7f274291ca643c49a
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`effectiveDirective`** des Interfaces [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent) ist ein String, der die [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP)-Direktive darstellt, die verletzt wurde.

Dies ersetzt [`SecurityPolicyViolationEvent.violatedDirective`](/de/docs/Web/API/SecurityPolicyViolationEvent/violatedDirective), seinen historischen Alias.

## Wert

Ein String, der die spezifische [`Content-Security-Policy`-Direktive](/de/docs/Web/HTTP/Headers/Content-Security-Policy#directives) darstellt, die verletzt wurde.

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
