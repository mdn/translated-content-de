---
title: "SecurityPolicyViolationEvent: effectiveDirective-Eigenschaft"
short-title: effectiveDirective
slug: Web/API/SecurityPolicyViolationEvent/effectiveDirective
l10n:
  sourceCommit: 6720d579bd658f02c56363805e97e69f93dc79f1
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`effectiveDirective`** des [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)-Interfaces ist ein String, der die verletzte [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)-Direktive darstellt.

Diese ersetzt [`SecurityPolicyViolationEvent.violatedDirective`](/de/docs/Web/API/SecurityPolicyViolationEvent/violatedDirective), ihr historisches Alias.

## Wert

Ein String, der die spezifische verletzte [`Content-Security-Policy`-Direktive](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#directives) darstellt.

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

- [`CSPViolationReport.effectiveDirective`](/de/docs/Web/API/CSPViolationReport/effectiveDirective)
