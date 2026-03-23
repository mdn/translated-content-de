---
title: "SecurityPolicyViolationEvent: referrer-Eigenschaft"
short-title: referrer
slug: Web/API/SecurityPolicyViolationEvent/referrer
l10n:
  sourceCommit: 6720d579bd658f02c56363805e97e69f93dc79f1
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die **`referrer`**-Eigenschaft, die schreibgeschützt ist, des [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)-Interfaces ist ein String, der den Referrer für die Ressourcen darstellt, deren [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) verletzt wurde.
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

- [`CSPViolationReport.referrer`](/de/docs/Web/API/CSPViolationReport/referrer)
