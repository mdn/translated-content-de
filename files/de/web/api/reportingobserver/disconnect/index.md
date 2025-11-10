---
title: "ReportingObserver: disconnect() Methode"
short-title: disconnect()
slug: Web/API/ReportingObserver/disconnect
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die **`disconnect()`**-Methode des [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Interfaces stoppt einen Berichtsbeobachter, der zuvor begonnen hatte, zu beobachten und Berichte zu sammeln.

Nach dem Aufruf von `disconnect()` werden weder [`ReportingObserver.takeRecords()`](/de/docs/Web/API/ReportingObserver/takeRecords) noch der `records`-Parameter des [`ReportingObserver()`](/de/docs/Web/API/ReportingObserver/ReportingObserver)-Callbacks Berichte zurückgeben. Der zugehörige Beobachter wird nicht mehr aktiv sein.

## Syntax

```js-nolint
disconnect()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

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

observer.disconnect();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reporting API](/de/docs/Web/API/Reporting_API)
