---
title: "ReportingObserver: observe() Methode"
short-title: observe()
slug: Web/API/ReportingObserver/observe
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("Reporting API")}}

Die **`observe()`**-Methode des
[`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Interfaces weist einen Reporting Observer an, mit dem Sammeln von Berichten in seiner Berichts-Warteschlange zu beginnen.

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
