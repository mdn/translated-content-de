---
title: "SecurityPolicyViolationEvent: statusCode-Eigenschaft"
short-title: statusCode
slug: Web/API/SecurityPolicyViolationEvent/statusCode
l10n:
  sourceCommit: 6720d579bd658f02c56363805e97e69f93dc79f1
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`statusCode`**-Eigenschaft des [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)-Interfaces ist eine Zahl, die den HTTP-Statuscode des Fensters oder Arbeiters darstellt, in dem der [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)-Verstoß aufgetreten ist.

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

- [`CSPViolationReport.statusCode`](/de/docs/Web/API/CSPViolationReport/statusCode)
