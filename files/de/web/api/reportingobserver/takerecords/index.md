---
title: "ReportingObserver: Methode takeRecords()"
short-title: takeRecords()
slug: Web/API/ReportingObserver/takeRecords
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("Reporting API")}}

Die **`takeRecords()`**-Methode der [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Schnittstelle gibt die aktuelle Liste von Berichten zurück, die sich in der Berichts-Warteschlange des Observers befinden, und leert die Warteschlange.

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
