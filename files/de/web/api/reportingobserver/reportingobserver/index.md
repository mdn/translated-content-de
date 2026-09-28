---
title: "ReportingObserver: Konstruktor ReportingObserver()"
short-title: ReportingObserver()
slug: Web/API/ReportingObserver/ReportingObserver
l10n:
  sourceCommit: 15e1155ab8a0587405601cc4753bb789cd6ac47c
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Der Konstruktor **`ReportingObserver()`** der [Reporting API](/de/docs/Web/API/Reporting_API) erstellt eine neue Instanz des Objekts [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), mit der Berichte gesammelt und abgerufen werden können.

## Syntax

```js-nolint
new ReportingObserver(callback)
new ReportingObserver(callback, options)
```

### Parameter

- `callback`
  - : Eine Callback-Funktion, die ausgeführt wird, wenn der Observer beginnt, Berichte zu sammeln (d.h. über [`ReportingObserver.observe()`](/de/docs/Web/API/ReportingObserver/observe)).
    Die Callback-Funktion erhält zwei Parameter:
    - `reports`
      - : Eine Folge von Objekten, die die in der Berichtswarteschlange des Observers gesammelten Berichte darstellen.

        Berichtsobjekte haben voraussichtlich die folgenden Eigenschaften:
        - `body`
          - : Ein Objekt, das den Inhalt des Berichts darstellt.
            Die Struktur des Berichts (insbesondere seines Inhalts) hängt von seinem [`type`](#type) ab.
        - `type`
          - : Ein String, der den Typ des Berichts angibt.
            Informationen zu Berichtstypen finden Sie unten unter [`options.types`](#types).
        - `url`
          - : Ein String, der die URL des Dokuments angibt, das den Bericht erzeugt hat.

    - `observer`
      - : Eine Referenz auf dasselbe `ReportingObserver`-Objekt, die beispielsweise das rekursive Sammeln von Berichten ermöglicht.

- `options` {{optional_inline}}
  - : Ein Objekt, mit dem Sie die Optionen für die Erstellung des Objekts festlegen können.
    Die verfügbaren Optionen sind:
    - `types`
      - : Ein Array von Strings, das die Berichtstypen angibt, die dieser Observer sammeln soll.
        Zu den verfügbaren Typen gehören:
        - `coep`
          - : Verstöße gegen die {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) der Website.
            Die Berichte sind Instanzen von [`COEPViolationReport`](/de/docs/Web/API/COEPViolationReport).
        - `crash`
          - : Berichte über Browser-Abstürze.
            Die Berichte sind Instanzen von [`CrashReport`](/de/docs/Web/API/CrashReport). Beachten Sie, dass Absturzberichte nicht über einen `ReportingObserver` abgerufen, aber an einen Server gesendet werden können.
        - `csp-violation`
          - : Verstöße gegen die CSP-Richtlinie der Website.
            Die Berichte sind Instanzen von [`CSPViolationReport`](/de/docs/Web/API/CSPViolationReport).
        - `deprecation`
          - : Veraltete Funktionen, die von der Website verwendet werden.
            Die Berichte sind Instanzen von [`DeprecationReport`](/de/docs/Web/API/DeprecationReport).
        - `integrity-violation`
          - : Verstöße gegen die Integritätsrichtlinie der Seite.
            Die Berichte sind Instanzen von [`IntegrityViolationReport`](/de/docs/Web/API/IntegrityViolationReport).
        - `intervention`
          - : Funktionen, die vom User Agent blockiert werden, beispielsweise wenn eine Anzeige die Seitenleistung erheblich beeinträchtigt.
            Die Berichte sind Instanzen von [`InterventionReport`](/de/docs/Web/API/InterventionReport).
        - `permissions-policy-violation`
          - : Verstöße gegen die {{httpheader("Permissions-Policy")}} der Website.
            Die Berichte sind Instanzen von [`PermissionsPolicyViolationReport`](/de/docs/Web/API/PermissionsPolicyViolationReport).

        Wenn diese Option weggelassen wird, werden alle unterstützten Typen gesammelt.

    - `buffered`
      - : Ein boolescher Wert, der festlegt, ob Berichte, die vor der Erstellung des Observers erzeugt wurden, beobachtet werden können (`true`) oder nicht (`false`).

## Beispiele

### Bestimmte Berichtstypen anzeigen

Dieser Code zeigt, wie Sie einen `ReportingObserver` erstellen, mit dem sich Berichte der Typen [`deprecation`](#deprecation) und [`integrity-violation`](#integrity-violation) beobachten lassen.

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
