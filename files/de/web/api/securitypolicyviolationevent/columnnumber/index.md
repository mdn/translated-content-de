---
title: "SecurityPolicyViolationEvent: columnNumber-Eigenschaft"
short-title: columnNumber
slug: Web/API/SecurityPolicyViolationEvent/columnNumber
l10n:
  sourceCommit: a5c1400a03d86162ea5c4342a93c2d96df470630
---

{{APIRef("Reporting API")}}

Die schreibgeschützte Eigenschaft **`columnNumber`** des {{domxref("SecurityPolicyViolationEvent")}}-Interfaces ist die Spaltennummer im Dokument oder Worker-Skript, an der der Verstoß gegen die [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) aufgetreten ist.

## Wert

Eine Zahl, die die Spaltennummer repräsentiert, an der der Verstoß aufgetreten ist.

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

- [`CSPViolationReportBody.columnNumber`](/de/docs/Web/API/CSPViolationReportBody#cspviolationreportbody.columnnumber)
