---
title: "CSPViolationReportBody: statusCode-Eigenschaft"
short-title: statusCode
slug: Web/API/CSPViolationReportBody/statusCode
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Reporting API")}}

Die schreibgeschützte Eigenschaft **`statusCode`** des [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Interfaces ist eine Zahl, die den [HTTP-Statuscode](/de/docs/Web/HTTP/Reference/Status) der Antwort auf die Anfrage darstellt, die eine Verletzung der [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) ausgelöst hat (beim Laden eines Fensters oder Arbeiters).

## Wert

Eine Zahl, die den HTTP-Statuscode der Antwort auf die Anfrage darstellt, die die CSP-Verletzung ausgelöst hat.

## Beispiele

In diesem Beispiel erstellen wir einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Berichte über Inhaltsverletzungen vom Typ `"csp-violation"` zu beobachten.
Jedes Mal, wenn die Callback-Funktion aufgerufen wird, protokollieren wir den Statuscode für den ersten Eintrag des Berichtsarrays.

```js
const observer = new ReportingObserver(
  (reports, observer) => {
    console.log(`statusCode: ${reports[0].body.statusCode}`);
    // For example: 200
  },
  {
    types: ["csp-violation"],
    buffered: true,
  },
);

observer.observe();
```

Beachten Sie, dass es zwar mehrere Berichte im zurückgegebenen Array geben kann, wir aus Gründen der Kürze jedoch nur den Statuscode des ersten Berichts protokollieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SecurityPolicyViolationEvent.statusCode`](/de/docs/Web/API/SecurityPolicyViolationEvent/statusCode)
