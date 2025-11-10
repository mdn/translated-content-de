---
title: "SecurityPolicyViolationEvent: statusCode-Eigenschaft"
short-title: statusCode
slug: Web/API/SecurityPolicyViolationEvent/statusCode
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die **`statusCode`**-Schreibgeschützte Eigenschaft des [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)-Interfaces ist eine Zahl, die den HTTP-Statuscode des Fensters oder Workers darstellt, in dem der Verstoß gegen die [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) aufgetreten ist.

## Wert

Eine Zahl, die den Statuscode des Fensters oder Workers darstellt, in dem der Verstoß aufgetreten ist.

## Beispiele

```js
document.addEventListener("securitypolicyviolation", (e) => {
  console.log(e.statusCode);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSPViolationReportBody.statusCode`](/de/docs/Web/API/CSPViolationReportBody/statusCode)
