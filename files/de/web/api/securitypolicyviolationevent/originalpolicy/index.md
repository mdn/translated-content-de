---
title: "SecurityPolicyViolationEvent: originalPolicy-Eigenschaft"
short-title: originalPolicy
slug: Web/API/SecurityPolicyViolationEvent/originalPolicy
l10n:
  sourceCommit: 701ac4440432ac215713b6b7f274291ca643c49a
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`originalPolicy`**-Eigenschaft des [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)-Interfaces ist ein String, der die [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) enthält, deren Durchsetzung die Verletzung aufgedeckt hat.

## Wert

Ein String, der die Richtlinie darstellt, deren Durchsetzung die Verletzung aufgedeckt hat.

Dies ist der String im {{HTTPHeader("Content-Security-Policy")}} HTTP-Header, der die Liste der [Direktiven](/de/docs/Web/HTTP/Headers/Content-Security-Policy#directives) und deren Werte enthält, die die CSP-Richtlinie bilden.

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
