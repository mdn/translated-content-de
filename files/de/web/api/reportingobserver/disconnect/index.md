---
title: "ReportingObserver: disconnect()-Methode"
short-title: disconnect()
slug: Web/API/ReportingObserver/disconnect
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("Reporting API")}}

Die **`disconnect()`**-Methode der
[`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Schnittstelle stoppt einen zuvor gestarteten Reporting-Observer, sodass er keine Berichte mehr sammelt.

Nach dem Aufruf von `disconnect()` werden weder
[`ReportingObserver.takeRecords()`](/de/docs/Web/API/ReportingObserver/takeRecords) noch der `records`-Parameter des
[`ReportingObserver()`](/de/docs/Web/API/ReportingObserver/ReportingObserver)
Callbacks irgendwelche Berichte zurückgeben. Der zugehörige Observer wird nicht mehr aktiv sein.

## Syntax

```js-nolint
disconnect()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

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

// ...

observer.disconnect();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reporting API](/de/docs/Web/API/Reporting_API)
