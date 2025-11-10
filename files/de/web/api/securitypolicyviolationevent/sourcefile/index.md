---
title: "SecurityPolicyViolationEvent: sourceFile-Eigenschaft"
short-title: sourceFile
slug: Web/API/SecurityPolicyViolationEvent/sourceFile
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`sourceFile`**-Eigenschaft des [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)-Interfaces ist ein String, der die URL des Skripts darstellt, in dem der Verstoß gegen die [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) aufgetreten ist.

## Wert

Ein String, der die URL des Skripts darstellt, in dem der Verstoß aufgetreten ist, oder `null`, wenn der Verstoß nicht in einem Skript aufgetreten ist.

Beachten Sie, dass sowohl `columnNumber` als auch `lineNumber` nicht-null Werte aufweisen sollten, wenn diese Eigenschaft nicht `null` ist.

## Beispiele

```js
document.addEventListener("securitypolicyviolation", (e) => {
  console.log(e.sourceFile);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSPViolationReportBody.sourceFile`](/de/docs/Web/API/CSPViolationReportBody/sourceFile)
