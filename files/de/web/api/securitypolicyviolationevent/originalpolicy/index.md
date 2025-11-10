---
title: "SecurityPolicyViolationEvent: originalPolicy-Eigenschaft"
short-title: originalPolicy
slug: Web/API/SecurityPolicyViolationEvent/originalPolicy
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`originalPolicy`**-Eigenschaft des [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)-Interfaces ist ein String, der die [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) enthält, deren Durchsetzung den Verstoß aufgedeckt hat.

## Wert

Ein String, der die Richtlinie darstellt, deren Durchsetzung den Verstoß aufgedeckt hat.

Dies ist der String im {{HTTPHeader("Content-Security-Policy")}} HTTP-Header, der die Liste von [Direktiven](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#directives) und deren Werte enthält, die die CSP-Richtlinie bilden.

## Beispiele

```js
document.addEventListener("securitypolicyviolation", (e) => {
  console.log(e.originalPolicy);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSPViolationReportBody.originalPolicy`](/de/docs/Web/API/CSPViolationReportBody/originalPolicy)
