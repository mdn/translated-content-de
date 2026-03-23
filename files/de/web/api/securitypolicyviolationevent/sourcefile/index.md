---
title: "SecurityPolicyViolationEvent: sourceFile-Eigenschaft"
short-title: sourceFile
slug: Web/API/SecurityPolicyViolationEvent/sourceFile
l10n:
  sourceCommit: 6720d579bd658f02c56363805e97e69f93dc79f1
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die **`sourceFile`**-Eigenschaft, die nur lesbar ist, des [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)-Interfaces ist ein String, der die URL des Skripts darstellt, in dem die [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)-Verletzung aufgetreten ist.

## Wert

Ein String, der die URL des Skripts darstellt, in dem die Verletzung aufgetreten ist, oder `null`, wenn die Verletzung nicht in einem Skript auftrat.

Beachten Sie, dass sowohl `columnNumber` als auch `lineNumber` nicht-null Werte haben sollten, wenn diese Eigenschaft nicht `null` ist.

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

- [`CSPViolationReport.sourceFile`](/de/docs/Web/API/CSPViolationReport/sourceFile)
