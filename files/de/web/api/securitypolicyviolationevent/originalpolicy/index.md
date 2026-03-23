---
title: "SecurityPolicyViolationEvent: originalPolicy-Eigenschaft"
short-title: originalPolicy
slug: Web/API/SecurityPolicyViolationEvent/originalPolicy
l10n:
  sourceCommit: 6720d579bd658f02c56363805e97e69f93dc79f1
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`originalPolicy`**-Eigenschaft des [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)-Interfaces ist ein String, der die [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) enthält, deren Durchsetzung die Verletzung aufgedeckt hat.

## Wert

Ein String, der die Richtlinie repräsentiert, deren Durchsetzung die Verletzung aufgedeckt hat.

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

- [`CSPViolationReport.originalPolicy`](/de/docs/Web/API/CSPViolationReport/originalPolicy)
