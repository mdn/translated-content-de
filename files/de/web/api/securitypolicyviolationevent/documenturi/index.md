---
title: "SecurityPolicyViolationEvent: documentURI-Eigenschaft"
short-title: documentURI
slug: Web/API/SecurityPolicyViolationEvent/documentURI
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`documentURI`**-Eigenschaft der [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)-Schnittstelle ist ein String, der die URI des Dokuments oder Workers darstellt, in dem die [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)-Verletzung aufgetreten ist.

## Wert

Ein String, der die URI des Dokuments oder Workers darstellt, in dem die Verletzung aufgetreten ist.

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

- [`CSPViolationReportBody.documentURL`](/de/docs/Web/API/CSPViolationReportBody/documentURL)
