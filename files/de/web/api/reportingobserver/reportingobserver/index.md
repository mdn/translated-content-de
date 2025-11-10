---
title: "ReportingObserver: ReportingObserver() Konstruktor"
short-title: ReportingObserver()
slug: Web/API/ReportingObserver/ReportingObserver
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Der **`ReportingObserver()`**-Konstruktor der [Reporting API](/de/docs/Web/API/Reporting_API) erstellt eine neue Instanz des [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) Objekts, das zum Sammeln und Zugreifen auf Berichte verwendet werden kann.

## Syntax

```js-nolint
new ReportingObserver(callback)
new ReportingObserver(callback, options)
```

### Parameter

- `callback`

  - : Eine Callback-Funktion, die ausgeführt wird, wenn der Observer beginnt, Berichte zu sammeln (d.h. über
    [`ReportingObserver.observe()`](/de/docs/Web/API/ReportingObserver/observe)). Der Callback-Funktion werden zwei
    Parameter übergeben:
    - `reports`
      - : Eine Sequenz von [`Report`](/de/docs/Web/API/Report)-Objekten, die
        die gesammelten Berichte in der Berichts-Warteschlange des Observers repräsentieren. Dies ist wahrscheinlich
        die gebräuchlichste Methode, um die Berichte abzurufen.
    - `observer`
      - : Ein Verweis auf dasselbe `ReportingObserver`-
        Objekt, das eine rekursive Berichtssammlung usw. ermöglicht.

- `options` {{optional_inline}}
  - : Ein Objekt, das Ihnen ermöglicht, die Optionen für die Erstellung des Objekts festzulegen. Die verfügbaren Optionen sind:
    - `types`
      - : Ein Array von Strings, die die Typen der Berichte repräsentieren, die von diesem Observer gesammelt werden sollen. Verfügbare Typen sind `deprecation`,
        `intervention` und `crash` (obwohl dieser letzte Typ normalerweise
        nicht über einen `ReportingObserver` abrufbar ist). Wenn diese Option weggelassen wird, werden alle unterstützten Typen gesammelt.
    - `buffered`
      - : Ein Boolean, der definiert, ob die Berichte, die
        generiert wurden, bevor der Observer erstellt werden konnte, beobachtbar
        (`true`) oder nicht (`false`) sein sollen.

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
