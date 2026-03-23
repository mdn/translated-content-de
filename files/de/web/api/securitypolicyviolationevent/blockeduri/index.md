---
title: "SecurityPolicyViolationEvent: blockedURI-Eigenschaft"
short-title: blockedURI
slug: Web/API/SecurityPolicyViolationEvent/blockedURI
l10n:
  sourceCommit: 6720d579bd658f02c56363805e97e69f93dc79f1
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`blockedURI`**-Eigenschaft der [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)-Schnittstelle ist ein String, der die URI der Ressource darstellt, die blockiert wurde, weil sie gegen eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) verstößt.

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

- [`CSPViolationReport.blockedURL`](/de/docs/Web/API/CSPViolationReport/blockedURL)
