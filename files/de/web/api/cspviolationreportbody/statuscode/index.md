---
title: "CSPViolationReportBody: statusCode-Eigenschaft"
short-title: statusCode
slug: Web/API/CSPViolationReportBody/statusCode
l10n:
  sourceCommit: 51b1250b1d51c2e0837c4d59798457a1261eb2af
---

{{APIRef("Reporting API")}}

Die **`statusCode`**-Eigenschaft der [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Schnittstelle ist eine schreibgeschützte Zahl, die den [HTTP-Statuscode](/de/docs/Web/HTTP/Status) der Antwort auf die Anfrage darstellt, die eine Verletzung der [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) ausgelöst hat (beim Laden eines Fensters oder Workers).

## Wert

Eine Zahl, die den HTTP-Statuscode der Antwort auf die Anfrage darstellt, die die CSP-Verletzung ausgelöst hat.

## Beispiele

In diesem Beispiel erstellen wir einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Berichte über Inhaltsverletzungen des Typs `"csp-violation"` zu beobachten.
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

Beachten Sie, dass es zwar mehrere Berichte im zurückgegebenen Array geben kann, aber aus Gründen der Übersichtlichkeit protokollieren wir nur den Statuscode des ersten Berichts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SecurityPolicyViolationEvent.statusCode`](/de/docs/Web/API/SecurityPolicyViolationEvent/statusCode)
