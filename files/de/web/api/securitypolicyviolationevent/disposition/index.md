---
title: "SecurityPolicyViolationEvent: disposition-Eigenschaft"
short-title: disposition
slug: Web/API/SecurityPolicyViolationEvent/disposition
l10n:
  sourceCommit: 6720d579bd658f02c56363805e97e69f93dc79f1
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die **`disposition`** schreibgeschützte Eigenschaft des [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)-Interfaces gibt an, wie die verletzte [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) vom Benutzeragenten behandelt wird.

## Wert

Mögliche Werte sind:

- `"enforce"`
  - : Die Richtlinie wird durchgesetzt und die Ressourcenanforderung wird blockiert.
- `"report"`
  - : Der Verstoß wird gemeldet, aber die Ressourcenanforderung wird nicht blockiert.

## Beispiele

```js
document.addEventListener("securitypolicyviolation", (e) => {
  console.log(e.disposition);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSPViolationReport.disposition`](/de/docs/Web/API/CSPViolationReport/disposition)
