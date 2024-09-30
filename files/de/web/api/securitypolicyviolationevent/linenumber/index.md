---
title: "SecurityPolicyViolationEvent: lineNumber-Eigenschaft"
short-title: lineNumber
slug: Web/API/SecurityPolicyViolationEvent/lineNumber
l10n:
  sourceCommit: 701ac4440432ac215713b6b7f274291ca643c49a
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`lineNumber`** des [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)-Interfaces ist die Zeilennummer im Dokument oder Worker-Skript, an der der Verstoß gegen die [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) aufgetreten ist.

## Wert

Eine Zahl, die die Zeilennummer darstellt, an der der Verstoß aufgetreten ist.

## Beispiele

```js
document.addEventListener("securitypolicyviolation", (e) => {
  console.log(e.lineNumber);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSPViolationReportBody.lineNumber`](/de/docs/Web/API/CSPViolationReportBody/lineNumber)
