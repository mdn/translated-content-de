---
title: "ReportingObserver: disconnect() Methode"
short-title: disconnect()
slug: Web/API/ReportingObserver/disconnect
l10n:
  sourceCommit: 6720d579bd658f02c56363805e97e69f93dc79f1
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die **`disconnect()`** Methode der [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) Schnittstelle stoppt einen Reporting-Observer, der zuvor mit dem Sammeln von Berichten begonnen hatte.

Nach dem Aufruf von `disconnect()` werden weder [`ReportingObserver.takeRecords()`](/de/docs/Web/API/ReportingObserver/takeRecords) noch der [`reports`](/de/docs/Web/API/ReportingObserver/ReportingObserver#reports) Parameter des `ReportingObserver()` Rückrufs Berichte zurückgeben. Der zugehörige Observer wird nicht mehr aktiv sein.

## Syntax

```js-nolint
disconnect()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Grundlegende Verwendung

```js
const options = {
  types: ["deprecation"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  reportBtn.onclick = () => displayReports(reports);
}, options);

observer.observe();

// …

observer.disconnect();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reporting API](/de/docs/Web/API/Reporting_API)
