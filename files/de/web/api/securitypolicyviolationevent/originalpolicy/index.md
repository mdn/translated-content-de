---
title: "SecurityPolicyViolationEvent: Eigenschaft originalPolicy"
short-title: originalPolicy
slug: Web/API/SecurityPolicyViolationEvent/originalPolicy
l10n:
  sourceCommit: a5c1400a03d86162ea5c4342a93c2d96df470630
---

{{APIRef("Reporting API")}}

Die schreibgeschützte Eigenschaft **`originalPolicy`** des {{domxref("SecurityPolicyViolationEvent")}}-Interfaces ist ein String, der die [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) enthält, deren Durchsetzung die Verletzung aufgedeckt hat.

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

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- [`CSPViolationReportBody.originalPolicy`](/de/docs/Web/API/CSPViolationReportBody#cspviolationreportbody.originalpolicy)
