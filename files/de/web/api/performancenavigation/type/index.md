---
title: "PerformanceNavigation: type-Eigenschaft"
short-title: type
slug: Web/API/PerformanceNavigation/type
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

Die veraltete, schreibgeschützte Eigenschaft
**`PerformanceNavigation.type`**
gibt einen `unsigned short` zurück, der eine Konstante enthält, die beschreibt, wie die Navigation zu dieser Seite erfolgte.

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist im [Navigation Timing Level 2-Spezifikation](https://w3c.github.io/navigation-timing/#obsolete) als veraltet markiert.
> Bitte nutzen Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Schnittstelle.

## Wert

Ein `unsigned short`.

Mögliche Werte sind:

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Wert</th>
      <th scope="col">Konstantenname</th>
      <th scope="col">Bedeutung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>0</code></td>
      <td><code>TYPE_NAVIGATE</code></td>
      <td>
        Die Seite wurde aufgerufen, indem einem Link, einem Lesezeichen, einer Formularübermittlung, einem Skript gefolgt wurde oder indem die URL in die Adressleiste eingegeben wurde.
      </td>
    </tr>
    <tr>
      <td><code>1</code></td>
      <td><code>TYPE_RELOAD</code></td>
      <td>
        Die Seite wurde durch Klicken auf die Schaltfläche Neu laden oder über die Methode [`Location.reload()`](/de/docs/Web/API/Location/reload) aufgerufen.
      </td>
    </tr>
    <tr>
      <td><code>2</code></td>
      <td><code>TYPE_BACK_FORWARD</code></td>
      <td>Die Seite wurde durch Navigation im Verlauf aufgerufen.</td>
    </tr>
    <tr>
      <td><code>255</code></td>
      <td><code>TYPE_RESERVED</code></td>
      <td>Auf andere Weise.</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Historisch gesehen testeten Entwickler für einen `type` von `"TYPE_BACK_FORWARD"`, um eine Indikation der Back-/Forward-Cache ([bfcache](/de/docs/Glossary/bfcache))-Trefferrate zu erhalten. Dies lieferte jedoch keine Gründe für bfcache-Blockierungen oder andere Daten. Die Eigenschaft [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons) sollte verwendet werden, um den bfcache zukünftig zu überwachen. Siehe [Beobachtung von bfcache-Blockierungsgründen](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) für weitere Informationen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`PerformanceNavigation`](/de/docs/Web/API/PerformanceNavigation)-Interface, zu dem es gehört.
