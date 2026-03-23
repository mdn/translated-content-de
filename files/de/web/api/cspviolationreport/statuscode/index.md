---
title: "CSPViolationReport: statusCode-Eigenschaft"
short-title: statusCode
slug: Web/API/CSPViolationReport/statusCode
l10n:
  sourceCommit: 6720d579bd658f02c56363805e97e69f93dc79f1
---

{{APIRef("Reporting API")}}

Die **`statusCode`**-Eigenschaft des [`CSPViolationReport`](/de/docs/Web/API/CSPViolationReport)-Dictionaries ist eine Zahl, die den [HTTP-Statuscode](/de/docs/Web/HTTP/Reference/Status) der Antwort auf die Anfrage darstellt, die eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)-Verletzung ausgelöst hat (beim Laden eines Fensters oder eines Arbeiters).

## Wert

Eine Zahl, die den HTTP-Statuscode der Antwort auf die Anfrage darstellt, die die CSP-Verletzung ausgelöst hat.

## Beispiele

In diesem Beispiel erstellen wir einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Inhaltsverletzungsberichte des Typs `"csp-violation"` zu beobachten.
Jedes Mal, wenn die Rückruffunktion aufgerufen wird, protokollieren wir den Statuscode für den ersten Eintrag des Berichtsarrays.

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

Beachten Sie, dass es mehrere Berichte im zurückgegebenen Array geben kann. Aus Gründen der Übersichtlichkeit protokollieren wir jedoch nur den Statuscode des ersten Berichts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SecurityPolicyViolationEvent.statusCode`](/de/docs/Web/API/SecurityPolicyViolationEvent/statusCode)
