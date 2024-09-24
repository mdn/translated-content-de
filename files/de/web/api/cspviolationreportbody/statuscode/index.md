---
title: "CSPViolationReportBody: statusCode-Eigenschaft"
short-title: statusCode
slug: Web/API/CSPViolationReportBody/statusCode
l10n:
  sourceCommit: 51b1250b1d51c2e0837c4d59798457a1261eb2af
---

{{APIRef("Reporting API")}}

Die **`statusCode`**-Eigenschaft der schreibgeschützten Schnittstelle {{domxref("CSPViolationReportBody")}} ist eine Zahl, die den [HTTP-Statuscode](/de/docs/Web/HTTP/Status) der Antwort auf die Anfrage darstellt, die eine Verletzung der [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) ausgelöst hat (beim Laden eines Fensters oder eines Workers).

## Wert

Eine Zahl, die den HTTP-Statuscode der Antwort auf die Anfrage darstellt, die die CSP-Verletzung ausgelöst hat.

## Beispiele

In diesem Beispiel erstellen wir einen neuen {{domxref("ReportingObserver")}}, um Berichte über Inhaltsverletzungen vom Typ `"csp-violation"` zu beobachten. Jedes Mal, wenn die Callback-Funktion aufgerufen wird, protokollieren wir den Statuscode für den ersten Eintrag des Berichtsarrays.

```js
const observer = new ReportingObserver(
  (reports, observer) => {
    console.log(`statusCode: ${reports[0].body.statusCode}`);
    // Zum Beispiel: 200
  },
  {
    types: ["csp-violation"],
    buffered: true,
  },
);

observer.observe();
```

Beachten Sie, dass, obwohl es mehrere Berichte im zurückgegebenen Array geben kann, wir der Kürze halber nur den Statuscode des ersten Berichts protokollieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("SecurityPolicyViolationEvent.statusCode")}}
