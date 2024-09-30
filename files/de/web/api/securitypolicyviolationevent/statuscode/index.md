---
title: "SecurityPolicyViolationEvent: statusCode-Eigenschaft"
short-title: statusCode
slug: Web/API/SecurityPolicyViolationEvent/statusCode
l10n:
  sourceCommit: 701ac4440432ac215713b6b7f274291ca643c49a
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die **`statusCode`**-Eigenschaft der [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)-Schnittstelle ist eine schreibgeschützte Zahl, die den HTTP-Statuscode des Fensters oder Workers darstellt, in dem der Verstoß gegen die [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) aufgetreten ist.

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
