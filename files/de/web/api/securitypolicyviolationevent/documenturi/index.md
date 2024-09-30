---
title: "SecurityPolicyViolationEvent: documentURI-Eigenschaft"
short-title: documentURI
slug: Web/API/SecurityPolicyViolationEvent/documentURI
l10n:
  sourceCommit: 701ac4440432ac215713b6b7f274291ca643c49a
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die **`documentURI`** schreibgeschützte Eigenschaft des [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)-Interfaces ist ein String, der die URI des Dokuments oder Workers darstellt, in dem die [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP)-Verletzung aufgetreten ist.

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
