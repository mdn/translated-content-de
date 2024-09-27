---
title: "CSPViolationReportBody: toJSON() Methode"
short-title: toJSON()
slug: Web/API/CSPViolationReportBody/toJSON
l10n:
  sourceCommit: 51b1250b1d51c2e0837c4d59798457a1261eb2af
---

{{APIRef("Reporting API")}}

Die **`toJSON()`**-Methode des [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Interfaces ist ein _Serializer_, der eine JSON-Darstellung des `CSPViolationReportBody`-Objekts zurückgibt.

Die Existenz einer `toJSON()`-Methode ermöglicht es, `CSPViolationReportBody`-Objekte mithilfe der {{jsxref("JSON.stringify()")}}-Methode in einen String umzuwandeln.

Dies wird von der Reporting-API verwendet, um eine serialisierte Version eines Verstoßberichts zu erstellen, der an einen Reporting-Endpunkt gesendet werden soll.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein JSON-Objekt, das die Serialisierung des [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Objekts darstellt.

## Beispiele

In diesem Beispiel erstellen wir einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um CSP-Verstoßberichte zu beobachten, und geben dann eine JSON-Darstellung des ersten Eintrags zurück.

```js
const observer = new ReportingObserver(
  (reports, observer) => {
    const firstReport = reports[0];
    // Log JSON object
    console.log(firstReport.toJSON());
    // Log JSON object as a string
    console.log(JSON.stringify(firstReport));
  },
  {
    types: ["csp-violation"],
    buffered: true,
  },
);

observer.observe();
```

Wir rufen `toJSON()` auf `firstReport` auf, das eine Instanz von [`Report`](/de/docs/Web/API/Report) ist. Dadurch wird die in diesem Interface definierte `toJSON()` aufgerufen, um den `body` des Berichts zu serialisieren.

Für Demonstrationszwecke rufen wir auch `JSON.stringify()` auf `firstReport` auf, um einen String zu erzeugen, der die JSON-Daten enthält.
Beim Senden oder Speichern von Berichtsinformationen ist es üblicher, dies zu tun, als `toJSON()` direkt zu verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
