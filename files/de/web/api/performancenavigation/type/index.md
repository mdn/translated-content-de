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
gibt ein `unsigned short` zurück, das eine Konstante enthält, die beschreibt, wie die Navigation zu dieser Seite durchgeführt wurde.

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist im [Navigation Timing Level 2 Specification](https://w3c.github.io/navigation-timing/#obsolete) veraltet.
> Bitte verwenden Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Schnittstelle.

## Wert

Ein `unsigned short`.

Die möglichen Werte sind:

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
        Die Seite wurde durch Folgen eines Links, eines Lesezeichens, eine Formularübermittlung, ein Skript oder durch Eingabe der URL in die Adressleiste aufgerufen.
      </td>
    </tr>
    <tr>
      <td><code>1</code></td>
      <td><code>TYPE_RELOAD</code></td>
      <td>
        Die Seite wurde durch Klicken auf die Schaltfläche "Neu laden" oder über die Methode [`Location.reload()`](/de/docs/Web/API/Location/reload) aufgerufen.
      </td>
    </tr>
    <tr>
      <td><code>2</code></td>
      <td><code>TYPE_BACK_FORWARD</code></td>
      <td>Die Seite wurde durch Navigation in den Verlauf aufgerufen.</td>
    </tr>
    <tr>
      <td><code>255</code></td>
      <td><code>TYPE_RESERVED</code></td>
      <td>Auf jede andere Weise.</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Historisch gesehen testeten Entwickler für einen `type` von `"TYPE_BACK_FORWARD"`, um einen Hinweis auf die Trefferquote des Back/Forward-Cache ({{Glossary("bfcache", "bfcache")}}) zu erhalten. Dies lieferte jedoch keine Gründe für die Blockierung des bfcache oder andere Daten. Die Eigenschaft [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons) sollte verwendet werden, um den bfcache zukünftig zu überwachen. Siehe [Gründe für die Blockierung des bfcache überwachen](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) für weitere Informationen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`PerformanceNavigation`](/de/docs/Web/API/PerformanceNavigation)-Schnittstelle, zu der sie gehört.
