---
title: "ReportingObserver: ReportingObserver() Konstruktor"
short-title: ReportingObserver()
slug: Web/API/ReportingObserver/ReportingObserver
l10n:
  sourceCommit: a019b326a3ad0c16d78d236582927a38ccaea8b4
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Der **`ReportingObserver()`** Konstruktor der [Reporting API](/de/docs/Web/API/Reporting_API) erstellt eine neue [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) Objektinstanz, die verwendet werden kann, um Berichte zu sammeln und darauf zuzugreifen.

## Syntax

```js-nolint
new ReportingObserver(callback)
new ReportingObserver(callback, options)
```

### Parameter

- `callback`
  - : Eine Callback-Funktion, die ausgeführt wird, wenn der Beobachter beginnt, Berichte zu sammeln (also über [`ReportingObserver.observe()`](/de/docs/Web/API/ReportingObserver/observe)).
    Der Callback-Funktion werden zwei Parameter übergeben:
    - `reports`
      - : Eine Sequenz von Objekten, die die im Berichts-Queue des Beobachters gesammelten Berichte darstellen.

        Berichtsobjekte sollten die folgenden Eigenschaften haben:
        - `body`
          - : Ein Objekt, das den Hauptteil des Berichts darstellt.
            Die Struktur des Berichts (insbesondere dessen Hauptteil) hängt von dessen [`type`](#type) ab.
        - `type`
          - : Ein String, der den Typ des Berichts angibt.
            Informationen zu Berichtstypen finden Sie unten bei [`options.types`](#types).
        - `url`
          - : Ein String, der die URL des Dokuments darstellt, das den Bericht generiert hat.

    - `observer`
      - : Ein Verweis auf dasselbe `ReportingObserver` Objekt, was rekursive Berichtssammlung usw. ermöglicht.

- `options` {{optional_inline}}
  - : Ein Objekt, das Ihnen erlaubt, die Optionen für die Objekterstellung festzulegen.
    Die verfügbaren Optionen sind:
    - `types`
      - : Ein Array von Strings, das die Typen von Berichten darstellt, die von diesem Beobachter gesammelt werden sollen.
        Verfügbare Typen sind unter anderem:
        - `coep`
          - : Verstöße gegen die {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) der Seite.
            Berichte sind Instanzen von [`COEPViolationReport`](/de/docs/Web/API/COEPViolationReport).
        - `coop`
          - : Verstöße gegen die {{httpheader("Cross-Origin-Opener-Policy")}} (COOP) der Seite.
            Berichte sind Instanzen von [`COOPViolationReport`](/de/docs/Web/API/COOPViolationReport).
        - `crash`
          - : Browser-Absturzberichte.
            (Absturzberichte sind über einen `ReportingObserver` nicht abrufbar, können aber an einen Server gesendet werden).
        - `csp-violation`
          - : Verstöße gegen die CSP-Richtlinie der Seite.
            Berichte sind Instanzen von [`CSPViolationReport`](/de/docs/Web/API/CSPViolationReport).
        - `deprecation`
          - : Veraltete Funktionen, die von der Seite verwendet werden.
            Berichte sind Instanzen von [`DeprecationReport`](/de/docs/Web/API/DeprecationReport).
        - `integrity-violation`
          - : Verstöße gegen die Integritätsrichtlinie der Seite.
            Berichte sind Instanzen von [`IntegrityViolationReport`](/de/docs/Web/API/IntegrityViolationReport).
        - `intervention`
          - : Funktionen, die vom User Agent blockiert werden, zum Beispiel, wenn eine Anzeige die Seitenleistung erheblich beeinträchtigt.
            Berichte sind Instanzen von [`InterventionReport`](/de/docs/Web/API/InterventionReport).
        - `permissions-policy-violation`
          - : Verstöße gegen die {{httpheader("Permissions-Policy")}} der Seite.
            Berichte sind Instanzen von [`PermissionsPolicyViolationReport`](/de/docs/Web/API/PermissionsPolicyViolationReport).

        Wenn diese Option ausgelassen wird, werden alle unterstützten Typen gesammelt.

    - `buffered`
      - : Ein boolescher Wert, der definiert, ob die Berichte, die generiert wurden, bevor der Beobachter erstellt werden konnte, beobachtbar sein sollen (`true`) oder nicht (`false`).

## Beispiele

### Bestimmte Berichtstypen anzeigen

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
