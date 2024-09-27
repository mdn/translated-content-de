---
title: "SecurityPolicyViolationEvent: referrer-Eigenschaft"
short-title: referrer
slug: Web/API/SecurityPolicyViolationEvent/referrer
l10n:
  sourceCommit: 701ac4440432ac215713b6b7f274291ca643c49a
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die **`referrer`** schreibgeschützte Eigenschaft des [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)-Interfaces ist ein Zeichenfolgenwert, der den Referrer für die Ressourcen darstellt, deren [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) verletzt wurde. Dies wird eine URL oder `null` sein.

## Wert

Eine Zeichenfolge, die die URL für den Referrer der Ressourcen darstellt, deren Richtlinie verletzt wurde, oder `null`.

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
