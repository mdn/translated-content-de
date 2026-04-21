---
title: "ReportingObserver: ReportingObserver() Konstruktor"
short-title: ReportingObserver()
slug: Web/API/ReportingObserver/ReportingObserver
l10n:
  sourceCommit: 927ef5f1b2906bae06ff98ea5148a1808b01f07b
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Der **`ReportingObserver()`** Konstruktor der [Reporting API](/de/docs/Web/API/Reporting_API) erstellt eine neue Instanz des [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objekts, das zum Sammeln und Zugreifen auf Berichte verwendet werden kann.

## Syntax

```js-nolint
new ReportingObserver(callback)
new ReportingObserver(callback, options)
```

### Parameter

- `callback`
  - : Eine Callback-Funktion, die ausgeführt wird, wenn der Beobachter beginnt, Berichte zu sammeln (d.h. über [`ReportingObserver.observe()`](/de/docs/Web/API/ReportingObserver/observe)).
    Der Callback-Funktion werden zwei Parameter übergeben:
    - `reports`
      - : Eine Sequenz von Objekten, die die Berichte darstellen, die in der Berichtswarteschlange des Beobachters gesammelt wurden.

        Es wird erwartet, dass Berichtsobjekte die folgenden Eigenschaften haben:
        - `body`
          - : Ein Objekt, das den Inhalt des Berichts darstellt.
            Die Struktur des Berichts (insbesondere seines Inhalts) hängt von seinem [`type`](#type) ab.
        - `type`
          - : Ein String, der den Typ des Berichts angibt.
            Für Informationen zu Berichtstypen siehe [`options.types`](#types) unten.
        - `url`
          - : Ein String, der die URL des Dokuments darstellt, das den Bericht erzeugt hat.

    - `observer`
      - : Ein Verweis auf dasselbe `ReportingObserver`-Objekt, der eine rekursive Berichtssammlung ermöglicht und so weiter.

- `options` {{optional_inline}}
  - : Ein Objekt, das Ihnen ermöglicht, die Optionen für die Erstellung des Objekts festzulegen.
    Die verfügbaren Optionen sind:
    - `types`
      - : Ein Array von Strings, das die Typen der Berichte darstellt, die von diesem Beobachter gesammelt werden sollen.
        Verfügbare Typen umfassen:
        - `coep`
          - : Verstöße gegen die {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) der Website.
            Berichte sind Instanzen von [`COEPViolationReport`](/de/docs/Web/API/COEPViolationReport).
        - `coop`
          - : Verstöße gegen die {{httpheader("Cross-Origin-Opener-Policy")}} (COOP) der Website.
            Berichte sind Instanzen von [`COOPViolationReport`](/de/docs/Web/API/COOPViolationReport).
        - `crash`
          - : Browser-Absturzberichte.
            Berichte sind Instanzen von [`CrashReport`](/de/docs/Web/API/CrashReport). Beachten Sie, dass Absturzberichte nicht über einen `ReportingObserver` abrufbar sind, jedoch an einen Server gesendet werden können.
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
          - : Funktionen, die vom Benutzeragenten blockiert wurden, zum Beispiel, wenn eine Anzeige die Seitenleistung erheblich beeinträchtigt.
            Berichte sind Instanzen von [`InterventionReport`](/de/docs/Web/API/InterventionReport).
        - `permissions-policy-violation`
          - : Verstöße gegen die {{httpheader("Permissions-Policy")}} der Website.
            Berichte sind Instanzen von [`PermissionsPolicyViolationReport`](/de/docs/Web/API/PermissionsPolicyViolationReport).

        Wenn diese Option weggelassen wird, werden alle unterstützten Typen gesammelt.

    - `buffered`
      - : Ein Boolean, der definiert, ob die Berichte, die generiert wurden, bevor der Beobachter erstellt werden konnte, beobachtbar (`true`) sein sollen oder nicht (`false`).

## Beispiele

### Spezifische Berichtstypen anzeigen

Dieser Code zeigt, wie ein `ReportingObserver` erstellt wird, der verwendet werden könnte, um [`deprecation`](#deprecation) und [`integrity-violation`](#integrity-violation) Berichte zu beobachten.

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
