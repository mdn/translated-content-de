---
title: "SecurityPolicyViolationEvent: columnNumber-Eigenschaft"
short-title: columnNumber
slug: Web/API/SecurityPolicyViolationEvent/columnNumber
l10n:
  sourceCommit: 701ac4440432ac215713b6b7f274291ca643c49a
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die **`columnNumber`**-Eigenschaft des [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)-Interfaces ist die Spaltennummer im Dokument oder Worker-Skript, an der der Verstoß gegen die [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) aufgetreten ist.

## Wert

Eine Zahl, die die Spaltennummer darstellt, an der der Verstoß aufgetreten ist.

## Beispiele

```js
document.addEventListener("securitypolicyviolation", (e) => {
  console.log(e.columnNumber);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSPViolationReportBody.columnNumber`](/de/docs/Web/API/CSPViolationReportBody/columnNumber)
