---
title: "SecurityPolicyViolationEvent: columnNumber-Eigenschaft"
short-title: columnNumber
slug: Web/API/SecurityPolicyViolationEvent/columnNumber
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`columnNumber`**-Eigenschaft der [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)-Schnittstelle gibt die Spaltennummer im Dokument oder im Worker-Skript an, an der der Verstoß gegen die [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) aufgetreten ist.

## Wert

Eine Zahl, die die Spaltennummer darstellt, an der der Verstoß aufgetreten ist.

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

- [`CSPViolationReportBody.columnNumber`](/de/docs/Web/API/CSPViolationReportBody/columnNumber)
