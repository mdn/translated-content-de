---
title: "ReportingObserver: takeRecords() Methode"
short-title: takeRecords()
slug: Web/API/ReportingObserver/takeRecords
l10n:
  sourceCommit: a7d66cf8b1251dc43f4b35c8060b95df69f58a0a
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die **`takeRecords()`**-Methode der [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Schnittstelle gibt die aktuelle Liste der Berichte zurück, die sich in der Berichtswarteschlange des Observers befinden, und leert die Warteschlange.

## Syntax

```js-nolint
takeRecords()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von [`Report`](/de/docs/Web/API/Report)-Objekten.

## Beispiele

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
