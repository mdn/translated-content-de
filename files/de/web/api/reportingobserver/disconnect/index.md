---
title: "ReportingObserver: disconnect()-Methode"
short-title: disconnect()
slug: Web/API/ReportingObserver/disconnect
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("Reporting API")}}

Die **`disconnect()`**-Methode der {{domxref("ReportingObserver")}}-Schnittstelle stoppt einen Reporting-Observer, der zuvor mit dem Sammeln von Berichten begonnen hatte.

Nach dem Aufrufen von `disconnect()` werden weder {{domxref("ReportingObserver.takeRecords()")}} noch der `records`-Parameter des [`ReportingObserver()`](/de/docs/Web/API/ReportingObserver/ReportingObserver)-Callbacks Berichte zurückgeben. Der zugehörige Observer ist nicht mehr aktiv.

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

// ...

observer.disconnect();
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Reporting API](/de/docs/Web/API/Reporting_API)
