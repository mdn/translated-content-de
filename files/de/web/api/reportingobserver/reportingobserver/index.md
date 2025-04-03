---
title: "ReportingObserver: ReportingObserver() Konstruktor"
short-title: ReportingObserver()
slug: Web/API/ReportingObserver/ReportingObserver
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Der **`ReportingObserver()`** Konstruktor der [Reporting-API](/de/docs/Web/API/Reporting_API) erstellt eine neue [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) Objektinstanz, die verwendet werden kann, um Berichte zu sammeln und darauf zuzugreifen.

## Syntax

```js-nolint
new ReportingObserver(callback)
new ReportingObserver(callback, options)
```

### Parameter

- `callback`

  - : Eine Rückruffunktion, die ausgeführt wird, wenn der Beobachter beginnt, Berichte zu sammeln (d.h. über [`ReportingObserver.observe()`](/de/docs/Web/API/ReportingObserver/observe)). Der Rückruffunktion werden zwei Parameter übergeben:

    - `reports`
      - : Eine Sequenz von [`Report`](/de/docs/Web/API/Report)-Objekten, die die im Berichtswarteschlangen des Beobachters gesammelten Berichte darstellen. Dies ist wahrscheinlich die häufigste Methode, um die Berichte abzurufen.
    - `observer`
      - : Ein Verweis auf dasselbe `ReportingObserver`-Objekt, das die rekursive Berichtssammlung, etc. ermöglicht.

- `options` {{optional_inline}}

  - : Ein Objekt, das Ihnen ermöglicht, die Optionen zum Erstellen des Objekts festzulegen. Die verfügbaren Optionen sind:

    - `types`
      - : Ein Array von Strings, die die Typen von Berichten darstellen, die von diesem Beobachter gesammelt werden sollen. Verfügbare Typen umfassen `deprecation`, `intervention` und `crash` (obwohl dieser letzte Typ normalerweise nicht über einen `ReportingObserver` abrufbar ist). Wenn diese Option weggelassen wird, werden alle unterstützten Typen gesammelt.
    - `buffered`
      - : Ein boolescher Wert, der definiert, ob die Berichte, die erzeugt wurden, bevor der Beobachter erstellt werden konnte, beobachtbar (`true`) sein sollen oder nicht (`false`).

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

- [Reporting-API](/de/docs/Web/API/Reporting_API)
