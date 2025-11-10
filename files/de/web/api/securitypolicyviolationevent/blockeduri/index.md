---
title: "SecurityPolicyViolationEvent: blockedURI Eigenschaft"
short-title: blockedURI
slug: Web/API/SecurityPolicyViolationEvent/blockedURI
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die **`blockedURI`** schreibgeschützte Eigenschaft der Schnittstelle [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent) ist eine Zeichenkette, die die URI der Ressource darstellt, die blockiert wurde, weil sie gegen eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) verstößt.

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
