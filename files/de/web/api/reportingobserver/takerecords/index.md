---
title: "ReportingObserver: takeRecords()-Methode"
short-title: takeRecords()
slug: Web/API/ReportingObserver/takeRecords
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("Reporting API")}}

Die **`takeRecords()`**-Methode der {{domxref("ReportingObserver")}}-Schnittstelle liefert die aktuelle Liste der Berichte, die sich in der Berichtswarteschlange des Observers befinden, und leert die Warteschlange.

## Syntax

```js-nolint
takeRecords()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von {{domxref("Report")}}-Objekten.

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
