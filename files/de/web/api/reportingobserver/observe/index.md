---
title: "ReportingObserver: observe() Methode"
short-title: observe()
slug: Web/API/ReportingObserver/observe
l10n:
  sourceCommit: a7d66cf8b1251dc43f4b35c8060b95df69f58a0a
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die **`observe()`** Methode des
[`ReportingObserver`](/de/docs/Web/API/ReportingObserver) Interfaces weist einen Reporting Observer an, mit dem Sammeln von Berichten in seiner Berichtsqueue zu beginnen.

## Syntax

```js-nolint
observe()
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
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reporting API](/de/docs/Web/API/Reporting_API)
