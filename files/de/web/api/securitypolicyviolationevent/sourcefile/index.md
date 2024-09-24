---
title: "SecurityPolicyViolationEvent: sourceFile-Eigenschaft"
short-title: sourceFile
slug: Web/API/SecurityPolicyViolationEvent/sourceFile
l10n:
  sourceCommit: a5c1400a03d86162ea5c4342a93c2d96df470630
---

{{APIRef("Reporting API")}}

Die schreibgeschützte Eigenschaft **`sourceFile`** der Schnittstelle {{domxref("SecurityPolicyViolationEvent")}} ist ein String, der die URL des Skripts darstellt, in dem der Verstoß gegen die [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) aufgetreten ist.

## Wert

Ein String, der die URL des Skripts darstellt, in dem der Verstoß aufgetreten ist, oder `null`, wenn der Verstoß nicht in einem Skript aufgetreten ist.

Beachten Sie, dass sowohl `columnNumber` als auch `lineNumber` Nicht-Null-Werte haben sollten, wenn diese Eigenschaft nicht `null` ist.

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

- [`CSPViolationReportBody.sourceFile`](/de/docs/Web/API/CSPViolationReportBody#cspviolationreportbody.sourcefile)
