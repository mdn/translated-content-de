---
title: "ReportingObserver: takeRecords() Methode"
short-title: takeRecords()
slug: Web/API/ReportingObserver/takeRecords
l10n:
  sourceCommit: 6720d579bd658f02c56363805e97e69f93dc79f1
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die **`takeRecords()`**-Methode der [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Schnittstelle gibt die aktuelle Liste von Berichten zurück, die in der Berichtswarteschlange des Observers enthalten sind, und leert die Warteschlange.

## Syntax

```js-nolint
takeRecords()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von Bericht-Objekten, wie beispielsweise [`COEPViolationReport`](/de/docs/Web/API/COEPViolationReport) und [`IntegrityViolationReport`](/de/docs/Web/API/IntegrityViolationReport).

Die Objektwörterbücher sind im [Reporting API](/de/docs/Web/API/Reporting_API#dictionaries) aufgeführt.

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

const records = observer.takeRecords();
console.log(records);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reporting API](/de/docs/Web/API/Reporting_API)
