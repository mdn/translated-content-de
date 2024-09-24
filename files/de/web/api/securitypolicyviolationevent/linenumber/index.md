---
title: "SecurityPolicyViolationEvent: lineNumber-Eigenschaft"
short-title: lineNumber
slug: Web/API/SecurityPolicyViolationEvent/lineNumber
l10n:
  sourceCommit: a5c1400a03d86162ea5c4342a93c2d96df470630
---

{{APIRef("Reporting API")}}

Die **`lineNumber`** schreibgeschützte Eigenschaft der {{domxref("SecurityPolicyViolationEvent")}}-Schnittstelle ist die Zeilennummer im Dokument oder Worker-Skript, an der der Verstoß gegen die [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) aufgetreten ist.

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

- [`CSPViolationReportBody.lineNumber`](/de/docs/Web/API/CSPViolationReportBody#cspviolationreportbody.linenumber)
