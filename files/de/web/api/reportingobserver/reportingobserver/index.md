---
title: "ReportingObserver: ReportingObserver() Konstruktor"
short-title: ReportingObserver()
slug: Web/API/ReportingObserver/ReportingObserver
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("Reporting API")}}

Der **`ReportingObserver()`**-Konstruktor der [Reporting API](/de/docs/Web/API/Reporting_API) erstellt eine neue
[`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objektinstanz, die verwendet werden kann, um Berichte zu sammeln und darauf zuzugreifen.

## Syntax

```js-nolint
new ReportingObserver(callback)
new ReportingObserver(callback, options)
```

### Parameter

- `callback`

  - : Eine Callback-Funktion, die ausgeführt wird, wenn der Observer beginnt, Berichte zu sammeln (d. h. über
    [`ReportingObserver.observe()`](/de/docs/Web/API/ReportingObserver/observe)). Die Callback-Funktion erhält zwei
    Parameter:

    - `reports`
      - : Eine Sequenz von [`Report`](/de/docs/Web/API/Report)-Objekten, die die Berichte darstellen, die in der Berichtswarteschlange des Observers gesammelt wurden. Dies ist wahrscheinlich die gebräuchlichste Methode, um die Berichte abzurufen.
    - `observer`
      - : Ein Verweis auf dasselbe `ReportingObserver`-Objekt, das eine rekursive Berichtssammlung usw. ermöglicht.

- `options` {{optional_inline}}

  - : Ein Objekt, mit dem Sie die Optionen für die Erstellung des Objekts festlegen können. Die verfügbaren Optionen sind:

    - `types`
      - : Ein Array von Strings, das die Arten von Berichten darstellt, die von diesem Observer gesammelt werden sollen. Verfügbare Typen sind `deprecation`, `intervention` und `crash` (obwohl dieser letzte Typ normalerweise nicht über einen `ReportingObserver` abrufbar ist). Wenn diese Option weggelassen wird, werden alle unterstützten Typen gesammelt.
    - `buffered`
      - : ein Boolescher Wert, der definiert, ob die Berichte, die generiert wurden, bevor der Observer erstellt werden konnte, beobachtbar (`true`) oder nicht (`false`) sein sollen.

## Beispiele

```js
const options = {
  types: ["deprecation"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  reportBtn.onclick = () => displayReports(reports);
}, options);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reporting API](/de/docs/Web/API/Reporting_API)
