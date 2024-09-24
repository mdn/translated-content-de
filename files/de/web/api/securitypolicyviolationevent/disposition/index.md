---
title: "SecurityPolicyViolationEvent: disposition-Eigenschaft"
short-title: disposition
slug: Web/API/SecurityPolicyViolationEvent/disposition
l10n:
  sourceCommit: a5c1400a03d86162ea5c4342a93c2d96df470630
---

{{APIRef("Reporting API")}}

Die schreibgeschützte Eigenschaft **`disposition`** des {{domxref("SecurityPolicyViolationEvent")}}-Interfaces gibt an, wie die verletzte [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) vom Benutzeragenten behandelt werden soll.

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

- [`CSPViolationReportBody.disposition`](/de/docs/Web/API/CSPViolationReportBody#cspviolationreportbody.disposition)
