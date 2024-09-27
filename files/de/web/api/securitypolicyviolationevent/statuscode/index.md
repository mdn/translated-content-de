---
title: "SecurityPolicyViolationEvent: Eigenschaft statusCode"
short-title: statusCode
slug: Web/API/SecurityPolicyViolationEvent/statusCode
l10n:
  sourceCommit: 701ac4440432ac215713b6b7f274291ca643c49a
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die **`statusCode`** schreibgeschützte Eigenschaft des [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)-Interfaces ist eine Zahl, die den HTTP-Statuscode des Fensters oder Arbeiters darstellt, in dem der Verstoß gegen die [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) aufgetreten ist.

## Wert

Eine Zahl, die den Statuscode des Fensters oder Arbeiters darstellt, in dem der Verstoß aufgetreten ist.

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
