---
title: "SecurityPolicyViolationEvent: disposition-Eigenschaft"
short-title: disposition
slug: Web/API/SecurityPolicyViolationEvent/disposition
l10n:
  sourceCommit: 701ac4440432ac215713b6b7f274291ca643c49a
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die **`disposition`** schreibgeschützte Eigenschaft der Schnittstelle [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent) gibt an, wie die verletzte [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) vom Benutzeragenten behandelt werden soll.

## Wert

Mögliche Werte sind:

- `"enforce"`
  - : Die Richtlinie wird durchgesetzt und die Ressourcenanfrage wird blockiert.
- `"report"`
  - : Der Verstoß wird gemeldet, aber die Ressourcenanfrage wird nicht blockiert.

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
