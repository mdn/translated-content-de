---
title: "SecurityPolicyViolationEvent: Eigenschaft referrer"
short-title: referrer
slug: Web/API/SecurityPolicyViolationEvent/referrer
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`referrer`** des [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)-Interfaces ist ein String, der den Referrer für die Ressourcen darstellt, deren [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) verletzt wurde.
Dies wird eine URL oder `null` sein.

## Wert

Ein String, der die URL für den Referrer der Ressourcen darstellt, deren Richtlinie verletzt wurde, oder `null`.

## Beispiele

```js
document.addEventListener("securitypolicyviolation", (e) => {
  console.log(e.referrer);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSPViolationReportBody.referrer`](/de/docs/Web/API/CSPViolationReportBody/referrer)
