---
title: "SecurityPolicyViolationEvent: disposition-Eigenschaft"
short-title: disposition
slug: Web/API/SecurityPolicyViolationEvent/disposition
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`disposition`**-Eigenschaft der [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)-Schnittstelle gibt an, wie die verletzte [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) vom Benutzeragenten behandelt werden soll.

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

- [`CSPViolationReportBody.disposition`](/de/docs/Web/API/CSPViolationReportBody/disposition)
