---
title: "CSPViolationReportBody: toJSON() Methode"
short-title: toJSON()
slug: Web/API/CSPViolationReportBody/toJSON
l10n:
  sourceCommit: 3b1efe57f3b22a97acb9db335f2848c90cdfe40e
---

{{APIRef("Reporting API")}}{{deprecated_header}}

Die **`toJSON()`** Methode der [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Schnittstelle ist ein _Serializer_, der eine JSON-Darstellung des `CSPViolationReportBody`-Objekts zurückgibt.

Das Vorhandensein einer `toJSON()`-Methode ermöglicht es `CSPViolationReportBody`-Objekten, mittels der {{jsxref("JSON.stringify()")}}-Methode in einen String umgewandelt zu werden.

Dies wird von der Reporting-API genutzt, um eine serialisierte Version eines Verstoßberichts zu erstellen, die an einen Reporting-Endpunkt gesendet wird.

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

Wir rufen `toJSON()` auf dem `firstReport` auf, welches eine Instanz von [`Report`](/de/docs/Web/API/Report) ist. Dies führt dazu, dass die `toJSON()`-Methode, die in dieser Schnittstelle definiert ist, aufgerufen wird, um den `body` des Berichts zu serialisieren.

Zu Demonstrationszwecken rufen wir auch `JSON.stringify()` auf `firstReport` auf, um einen String zu erstellen, der die JSON-Daten enthält. Beim Senden oder Speichern von Berichtsinformationen ist es üblicher, dies zu tun, als `toJSON()` direkt zu verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
