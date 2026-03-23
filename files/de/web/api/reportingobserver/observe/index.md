---
title: "ReportingObserver: observe() Methode"
short-title: observe()
slug: Web/API/ReportingObserver/observe
l10n:
  sourceCommit: 6720d579bd658f02c56363805e97e69f93dc79f1
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die **`observe()`** Methode der [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) Schnittstelle weist einen Reporting-Observer an, damit er beginnt, Berichte in seiner Berichts-Warteschlange zu sammeln.

## Syntax

```js-nolint
observe()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

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
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reporting API](/de/docs/Web/API/Reporting_API)
