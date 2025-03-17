---
title: "ReportingObserver: ReportingObserver() Konstruktor"
short-title: ReportingObserver()
slug: Web/API/ReportingObserver/ReportingObserver
l10n:
  sourceCommit: a7d66cf8b1251dc43f4b35c8060b95df69f58a0a
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Der **`ReportingObserver()`**-Konstruktor der [Reporting API](/de/docs/Web/API/Reporting_API) erstellt eine neue Instanz des [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objekts, die zur Sammlung und zum Zugriff auf Berichte verwendet werden kann.

## Syntax

```js-nolint
new ReportingObserver(callback)
new ReportingObserver(callback, options)
```

### Parameter

- `callback`

  - : Eine Callback-Funktion, die ausgeführt wird, wenn der Observer beginnt, Berichte zu sammeln (d.h. über [`ReportingObserver.observe()`](/de/docs/Web/API/ReportingObserver/observe)). Die Callback-Funktion erhält zwei Parameter:

    - `reports`
      - : Eine Sequenz von [`Report`](/de/docs/Web/API/Report)-Objekten, die die im Berichtswarteschlangen des Observers gesammelten Berichte darstellen. Dies ist wahrscheinlich der häufigste Weg, um die Berichte abzurufen.
    - `observer`
      - : Ein Verweis auf dasselbe `ReportingObserver`-Objekt, das eine rekursive Sammlung von Berichten usw. ermöglicht.

- `options` {{optional_inline}}

  - : Ein Objekt, das es Ihnen ermöglicht, die Optionen für die Erstellung des Objekts festzulegen. Die verfügbaren Optionen sind:

    - `types`
      - : Ein Array von Strings, die die Typen von Berichten repräsentieren, die von diesem Observer gesammelt werden sollen. Verfügbare Typen sind `deprecation`, `intervention` und `crash` (obwohl letzterer Typ in der Regel nicht über einen `ReportingObserver` abrufbar ist). Wenn diese Option weggelassen wird, werden alle unterstützten Typen gesammelt.
    - `buffered`
      - : Ein Boolean, der definiert, ob die Berichte, die generiert wurden, bevor der Observer erstellt werden konnte, beobachtbar sein sollen (`true`) oder nicht (`false`).

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
