---
title: "ReportingObserver: ReportingObserver() Konstruktor"
short-title: ReportingObserver()
slug: Web/API/ReportingObserver/ReportingObserver
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("Reporting API")}}

Der **`ReportingObserver()`**-Konstruktor der [Reporting API](/de/docs/Web/API/Reporting_API) erstellt eine neue Instanz des [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objekts, das zum Sammeln und Zugreifen auf Berichte verwendet werden kann.

## Syntax

```js-nolint
new ReportingObserver(callback)
new ReportingObserver(callback, options)
```

### Parameter

- `callback`

  - : Eine Callback-Funktion, die ausgeführt wird, wenn der Observer beginnt, Berichte zu sammeln (d. h. über [`ReportingObserver.observe()`](/de/docs/Web/API/ReportingObserver/observe)). Der Callback-Funktion werden zwei Parameter übergeben:

    - `reports`
      - : Eine Abfolge von [`Report`](/de/docs/Web/API/Report)-Objekten, die die im Berichtswarteschlange des Observers gesammelten Berichte darstellen. Dies ist wahrscheinlich die häufigste Methode, um die Berichte abzurufen.
    - `observer`
      - : Ein Verweis auf dasselbe `ReportingObserver`-Objekt, das eine rekursive Berichtssammlung usw. ermöglicht.

- `options` {{optional_inline}}

  - : Ein Objekt, das es Ihnen ermöglicht, die Optionen für das Erstellen des Objekts festzulegen. Die verfügbaren Optionen sind:

    - `types`
      - : Ein Array von Strings, die die Arten von Berichten darstellen, die von diesem Observer gesammelt werden sollen. Verfügbare Typen sind `deprecation`, `intervention` und `crash` (obwohl letzterer Typ normalerweise nicht über einen `ReportingObserver` abrufbar ist). Wenn diese Option weggelassen wird, werden alle unterstützten Typen gesammelt.
    - `buffered`
      - : Ein Boolean, der definiert, ob die Berichte, die vor der Erstellung des Observers erzeugt wurden, beobachtbar sein sollen (`true`) oder nicht (`false`).

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
