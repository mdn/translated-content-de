---
title: "ReportingObserver: ReportingObserver() Konstruktor"
short-title: ReportingObserver()
slug: Web/API/ReportingObserver/ReportingObserver
l10n:
  sourceCommit: 6720d579bd658f02c56363805e97e69f93dc79f1
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Der **`ReportingObserver()`**-Konstruktor der [Reporting API](/de/docs/Web/API/Reporting_API) erstellt eine neue Instanz eines [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objekts, die verwendet werden kann, um Berichte zu sammeln und darauf zuzugreifen.

## Syntax

```js-nolint
new ReportingObserver(callback)
new ReportingObserver(callback, options)
```

### Parameter

- `callback`
  - : Eine Rückruffunktion, die ausgeführt wird, wenn der Observer beginnt, Berichte zu sammeln (d.h. über [`ReportingObserver.observe()`](/de/docs/Web/API/ReportingObserver/observe)).
    Die Rückruffunktion erhält zwei Parameter:
    - `reports`
      - : Eine Sequenz von Objekten, die die im Berichtswarteschlange des Beobachters gesammelten Berichte darstellen.

        Berichtobjekte sollten die folgenden Eigenschaften haben:
        - `body`
          - : Ein Objekt, das den Körper des Berichts darstellt.
            Die Struktur des Berichts (insbesondere sein Körper) hängt von seinem [`type`](#type) ab.
        - `type`
          - : Ein String, der den Typ des Berichts angibt.
            Informationen über Berichtsarten finden Sie unten bei [`options.types`](#types).
        - `url`
          - : Ein String, der die URL des Dokuments repräsentiert, das den Bericht erzeugt hat.

    - `observer`
      - : Eine Referenz auf dasselbe `ReportingObserver`-Objekt, das eine rekursive Berichterfassung und ähnliche Vorgänge ermöglicht.

- `options` {{optional_inline}}
  - : Ein Objekt, das es Ihnen ermöglicht, die Optionen für die Erstellung des Objekts festzulegen.
    Die verfügbaren Optionen sind:
    - `types`
      - : Ein Array von Strings, das die Arten von Berichten darstellt, die von diesem Beobachter gesammelt werden sollen.
        Verfügbare Typen sind:
        - `coep`
          - : Verstöße gegen die {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) der Website.
            Berichte sind Instanzen von [`COEPViolationReport`](/de/docs/Web/API/COEPViolationReport).
        - `crash`
          - : Browser-Absturzberichte.
            (Absturzberichte sind über einen `ReportingObserver` nicht abrufbar, können jedoch an einen Server gesendet werden).
        - `csp-violation`
          - : Verstöße gegen die CSP-Richtlinie der Website.
            Berichte sind Instanzen von [`CSPViolationReport`](/de/docs/Web/API/CSPViolationReport).
        - `deprecation`
          - : Veraltete Funktionen, die von der Website verwendet werden.
            Berichte sind Instanzen von [`DeprecationReport`](/de/docs/Web/API/DeprecationReport).
        - `integrity-violation`
          - : Verstöße gegen die Integritätsrichtlinie der Seite.
            Berichte sind Instanzen von [`IntegrityViolationReport`](/de/docs/Web/API/IntegrityViolationReport).
        - `intervention`
          - : Funktionen, die vom User-Agent blockiert werden, z.B. wenn eine Anzeige die Seitenleistung erheblich beeinträchtigt.
            Berichte sind Instanzen von [`InterventionReport`](/de/docs/Web/API/InterventionReport).

        Wenn diese Option weggelassen wird, werden alle unterstützten Typen gesammelt.

    - `buffered`
      - : Ein boolescher Wert, der definiert, ob die Berichte, die generiert wurden, bevor der Beobachter erstellt werden konnte, sichtbar sein sollen (`true`) oder nicht (`false`).

## Beispiele

### Spezifische Berichtstypen anzeigen

Dieser Code zeigt, wie ein `ReportingObserver` erstellt werden kann, der verwendet werden könnte, um [`deprecation`](#deprecation) und [`integrity-violation`](#integrity-violation) Berichte zu beobachten.

```js
const options = {
  types: ["deprecation", "integrity-violation"],
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
