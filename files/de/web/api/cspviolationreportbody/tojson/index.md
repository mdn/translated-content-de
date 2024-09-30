---
title: "CSPViolationReportBody: toJSON()-Methode"
short-title: toJSON()
slug: Web/API/CSPViolationReportBody/toJSON
l10n:
  sourceCommit: 51b1250b1d51c2e0837c4d59798457a1261eb2af
---

{{APIRef("Reporting API")}}

Die **`toJSON()`**-Methode der [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Schnittstelle ist ein _Serializer_, der eine JSON-Darstellung des `CSPViolationReportBody`-Objekts zurückgibt.

Das Vorhandensein einer `toJSON()`-Methode ermöglicht es, `CSPViolationReportBody`-Objekte mit der {{jsxref("JSON.stringify()")}}-Methode in eine Zeichenkette umzuwandeln.

Dies wird von der Reporting-API verwendet, um eine serialisierte Version eines Verstoßberichts zu erstellen, die an einen Reporting-Endpunkt gesendet wird.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein JSON-Objekt, das die Serialisierung des [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Objekts ist.

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

Wir rufen `toJSON()` auf `firstReport` auf, das eine Instanz von [`Report`](/de/docs/Web/API/Report) ist, was wiederum dazu führt, dass die in dieser Schnittstelle definierte `toJSON()`-Methode aufgerufen wird, um den `body` des Berichts zu serialisieren.

Zum Zweck der Demonstration rufen wir auch `JSON.stringify()` auf `firstReport` auf, um eine Zeichenkette zu erstellen, die die JSON-Daten enthält.
Beim Senden oder Speichern von Berichtsinformationen ist es gebräuchlicher, dies zu tun, als `toJSON()` direkt zu verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
