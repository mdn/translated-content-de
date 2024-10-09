---
title: "ReportingObserver: disconnect()-Methode"
short-title: disconnect()
slug: Web/API/ReportingObserver/disconnect
l10n:
  sourceCommit: a7d66cf8b1251dc43f4b35c8060b95df69f58a0a
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die **`disconnect()`**-Methode des [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Interfaces beendet einen zuvor gestarteten Reporting Observer, sodass keine Berichte mehr gesammelt werden.

Nach dem Aufruf von `disconnect()` geben weder [`ReportingObserver.takeRecords()`](/de/docs/Web/API/ReportingObserver/takeRecords) noch der `records` Parameter des [`ReportingObserver()`](/de/docs/Web/API/ReportingObserver/ReportingObserver)-Callbacks Berichte zurück. Der zugehörige Observer ist nicht mehr aktiv.

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
