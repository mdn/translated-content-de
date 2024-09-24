---
title: "ReportingObserver: ReportingObserver() Konstruktor"
short-title: ReportingObserver()
slug: Web/API/ReportingObserver/ReportingObserver
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("Reporting API")}}

Der **`ReportingObserver()`** Konstruktor der [Reporting API](/de/docs/Web/API/Reporting_API) erstellt eine neue
{{domxref("ReportingObserver")}} Objektinstanz, die verwendet werden kann, um Berichte zu sammeln und darauf zuzugreifen.

## Syntax

```js-nolint
new ReportingObserver(callback)
new ReportingObserver(callback, options)
```

### Parameter

- `callback`

  - : Eine Callback-Funktion, die läuft, wenn der Observer beginnt, Berichte zu sammeln (d.h. über
    {{domxref("ReportingObserver.observe()")}}). Der Callback-Funktion werden zwei
    Parameter übergeben:

    - `reports`
      - : Eine Sequenz von {{domxref("Report")}} Objekten, die die
        Berichte repräsentieren, die in der Berichtswarteschlange des Observers gesammelt wurden. Dies ist wahrscheinlich der häufigste Weg, um die Berichte zu erhalten.
    - `observer`
      - : Eine Referenz auf dasselbe `ReportingObserver`
        Objekt, was eine rekursive Berichtssammlung usw. ermöglicht.

- `options` {{optional_inline}}

  - : Ein Objekt, das Ihnen erlaubt, die Optionen für die Erstellung des Objekts festzulegen. Die verfügbaren Optionen sind:

    - `types`
      - : Ein Array von Zeichenfolgen, die die Arten von Berichten repräsentieren,
        die von diesem Observer gesammelt werden sollen. Verfügbare Typen umfassen `deprecation`,
        `intervention` und `crash` (obwohl dieser letzte Typ normalerweise
        nicht über einen `ReportingObserver` abrufbar ist). Wenn diese Option weggelassen wird, werden alle unterstützten Typen gesammelt.
    - `buffered`
      - : Ein Boolean, der definiert, ob die Berichte, die erstellt wurden, bevor der Observer erstellt werden konnte, beobachtbar
        sein sollen (`true`) oder nicht (`false`).

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
