---
title: "SecurityPolicyViolationEvent: columnNumber-Eigenschaft"
short-title: columnNumber
slug: Web/API/SecurityPolicyViolationEvent/columnNumber
l10n:
  sourceCommit: a0d3dd05ba50e0ff4a595bb0c06499bdfc736e9f
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`columnNumber`**-Eigenschaft des [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)-Interfaces ist die Zeichenposition in der Quelldateizeile des Dokuments oder Worker-Skripts, an der der Verstoß gegen die [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) aufgetreten ist.

Diese Eigenschaft wird zusammen mit den Eigenschaften [`SecurityPolicyViolationEvent.sourceFile`](/de/docs/Web/API/SecurityPolicyViolationEvent/sourceFile) und [`SecurityPolicyViolationEvent.lineNumber`](/de/docs/Web/API/SecurityPolicyViolationEvent/lineNumber) verwendet, die zusammen den genauen Ort im Quellcode angeben, der den Verstoß verursacht hat.

## Wert

Eine Zahl, die die Zeichenpositionsnummer angibt, an der der Verstoß aufgetreten ist.

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
