---
title: "SecurityPolicyViolationEvent: documentURI-Eigenschaft"
short-title: documentURI
slug: Web/API/SecurityPolicyViolationEvent/documentURI
l10n:
  sourceCommit: 6720d579bd658f02c56363805e97e69f93dc79f1
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`documentURI`**-Eigenschaft des [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)-Interfaces ist ein String, der den URI des Dokuments oder Workers darstellt, in dem der [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)-Verstoß aufgetreten ist.

## Wert

Ein String, der den URI des Dokuments oder Workers darstellt, in dem der Verstoß aufgetreten ist.

## Beispiele

```js
document.addEventListener("securitypolicyviolation", (e) => {
  console.log(e.documentURI);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSPViolationReport.documentURL`](/de/docs/Web/API/CSPViolationReport/documentURL)
