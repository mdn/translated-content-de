---
title: "SecurityPolicyViolationEvent: statusCode-Eigenschaft"
short-title: statusCode
slug: Web/API/SecurityPolicyViolationEvent/statusCode
l10n:
  sourceCommit: 1a7695e13c51d85a81e3e5d85feedbc5dbd2a379
---

{{APIRef("Reporting API")}}

Die schreibgeschützte Eigenschaft **`statusCode`** des {{domxref("SecurityPolicyViolationEvent")}}-Interfaces ist eine Zahl, die den HTTP-Statuscode des Fensters oder Arbeiters repräsentiert, in dem die [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP)-Verletzung aufgetreten ist.

## Wert

Eine Zahl, die den Statuscode des Fensters oder Arbeiters repräsentiert, in dem die Verletzung aufgetreten ist.

## Beispiele

```js
document.addEventListener("securitypolicyviolation", (e) => {
  console.log(e.statusCode);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSPViolationReportBody.statusCode`](/de/docs/Web/API/CSPViolationReportBody#cspviolationreportbody.statuscode)
