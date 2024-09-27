---
title: "SecurityPolicyViolationEvent: sourceFile-Eigenschaft"
short-title: sourceFile
slug: Web/API/SecurityPolicyViolationEvent/sourceFile
l10n:
  sourceCommit: 701ac4440432ac215713b6b7f274291ca643c49a
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`sourceFile`** der Schnittstelle [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent) ist ein String, der die URL des Skripts darstellt, in dem der Verstoß gegen die [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) aufgetreten ist.

## Wert

Ein String, der die URL des Skripts darstellt, in dem der Verstoß aufgetreten ist, oder `null`, wenn der Verstoß nicht in einem Skript liegt.

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

- [`CSPViolationReportBody.sourceFile`](/de/docs/Web/API/CSPViolationReportBody/sourceFile)
