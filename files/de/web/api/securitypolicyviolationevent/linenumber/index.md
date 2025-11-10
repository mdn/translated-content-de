---
title: "SecurityPolicyViolationEvent: lineNumber-Eigenschaft"
short-title: lineNumber
slug: Web/API/SecurityPolicyViolationEvent/lineNumber
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`lineNumber`** des [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)-Interfaces ist die Zeilennummer im Dokument oder Workerskript, an der der Verstoß gegen die [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) aufgetreten ist.

## Wert

Eine Zahl, die die Zeilennummer repräsentiert, an der der Verstoß aufgetreten ist.

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
