---
title: "CSPViolationReportBody: toJSON() Methode"
short-title: toJSON()
slug: Web/API/CSPViolationReportBody/toJSON
l10n:
  sourceCommit: 51b1250b1d51c2e0837c4d59798457a1261eb2af
---

{{APIRef("Reporting API")}}

Die **`toJSON()`** Methode des {{domxref("CSPViolationReportBody")}} Interfaces ist ein _Serializer_, der eine JSON-Darstellung des `CSPViolationReportBody` Objekts zurückgibt.

Das Vorhandensein einer `toJSON()` Methode ermöglicht es, `CSPViolationReportBody` Objekte mit der Methode {{jsxref("JSON.stringify()")}} in eine Zeichenkette umzuwandeln.

Dies wird von der Reporting API verwendet, um eine serialisierte Version eines Verletzungsberichts zu erstellen, die an einen Reporting-Endpunkt gesendet wird.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein JSON-Objekt, das die Serialisierung des {{domxref("CSPViolationReportBody")}} Objekts ist.

## Beispiele

In diesem Beispiel erstellen wir einen neuen {{domxref("ReportingObserver")}}, um CSP-Verletzungsberichte zu beobachten, und geben dann eine JSON-Darstellung des ersten Eintrags zurück.

```js
const observer = new ReportingObserver(
  (reports, observer) => {
    const firstReport = reports[0];
    // JSON-Objekt protokollieren
    console.log(firstReport.toJSON());
    // JSON-Objekt als Zeichenkette protokollieren
    console.log(JSON.stringify(firstReport));
  },
  {
    types: ["csp-violation"],
    buffered: true,
  },
);

observer.observe();
```

Wir rufen `toJSON()` auf dem `firstReport` auf, welches eine {{domxref("Report")}} Instanz ist. Dies führt dazu, dass `toJSON()` in diesem Interface aufgerufen wird, um den `body` des Berichts zu serialisieren.

Zum Zweck der Demonstration rufen wir ebenfalls `JSON.stringify()` auf `firstReport` auf, um eine Zeichenkette zu erstellen, die die JSON-Daten enthält. Beim Senden oder Speichern von Berichtsinformationen ist es üblicher, dies zu tun, als `toJSON()` direkt zu verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
