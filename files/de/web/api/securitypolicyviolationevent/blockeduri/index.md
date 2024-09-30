---
title: "SecurityPolicyViolationEvent: blockedURI-Eigenschaft"
short-title: blockedURI
slug: Web/API/SecurityPolicyViolationEvent/blockedURI
l10n:
  sourceCommit: 701ac4440432ac215713b6b7f274291ca643c49a
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die **`blockedURI`**-Eigenschaft des [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)-Interfaces ist eine schreibgeschützte Zeichenkette, die die URI der Ressource darstellt, die blockiert wurde, weil sie gegen eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) verstößt.

## Wert

Eine Zeichenkette, die die URI der blockierten Ressource darstellt.

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

- [`CSPViolationReportBody.blockedURL`](/de/docs/Web/API/CSPViolationReportBody/blockedURL)
