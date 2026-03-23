---
title: "SecurityPolicyViolationEvent: lineNumber-Eigenschaft"
short-title: lineNumber
slug: Web/API/SecurityPolicyViolationEvent/lineNumber
l10n:
  sourceCommit: 6720d579bd658f02c56363805e97e69f93dc79f1
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die **`lineNumber`**-Eigenschaft, die nur lesbar ist, des [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)-Interfaces ist die Zeilennummer im Dokument oder im Worker-Skript, an der die Verletzung der [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) aufgetreten ist.

## Wert

Eine Zahl, die die Zeilennummer repräsentiert, an der die Verletzung aufgetreten ist.

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

- [`CSPViolationReport.lineNumber`](/de/docs/Web/API/CSPViolationReport/lineNumber)
