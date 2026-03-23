---
title: "SecurityPolicyViolationEvent: columnNumber-Eigenschaft"
short-title: columnNumber
slug: Web/API/SecurityPolicyViolationEvent/columnNumber
l10n:
  sourceCommit: 6720d579bd658f02c56363805e97e69f93dc79f1
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die **`columnNumber`**-Eigenschaft des [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)-Interfaces ist die Zeichenposition in der Quellcodedatei des Dokuments oder Worker-Skripts, an der die Verletzung der [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) aufgetreten ist.

Diese Eigenschaft wird zusammen mit den Eigenschaften [`SecurityPolicyViolationEvent.sourceFile`](/de/docs/Web/API/SecurityPolicyViolationEvent/sourceFile) und [`SecurityPolicyViolationEvent.lineNumber`](/de/docs/Web/API/SecurityPolicyViolationEvent/lineNumber) verwendet, die zusammen den exakten Ort im Quellcode angeben, der die Verletzung verursacht hat.

## Wert

Eine Zahl, die die Zeichenpositionsnummer darstellt, an der die Verletzung aufgetreten ist.

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

- [`CSPViolationReport.columnNumber`](/de/docs/Web/API/CSPViolationReport/columnNumber)
