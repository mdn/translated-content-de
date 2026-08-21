---
title: "PerformanceNavigation: type-Eigenschaft"
short-title: type
slug: Web/API/PerformanceNavigation/type
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Performance API")}}

Die veraltete, schreibgeschützte **`PerformanceNavigation.type`**-Eigenschaft gibt ein `unsigned short` zurück, das eine Konstante enthält, die beschreibt, wie die Navigation zu dieser Seite erfolgt ist.

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist im [Navigation Timing Level 2 Specification](https://w3c.github.io/navigation-timing/#obsolete) veraltet.
> Bitte verwenden Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Schnittstelle.

## Wert

Ein `unsigned short`.

Mögliche Werte sind:

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Wert</th>
      <th scope="col">Konstanter Name</th>
      <th scope="col">Bedeutung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>0</code></td>
      <td><code>TYPE_NAVIGATE</code></td>
      <td>
        Die Seite wurde über einen Link, ein Lesezeichen, ein Formular,
        ein Skript oder durch das Eintippen der URL in die Adressleiste aufgerufen.
      </td>
    </tr>
    <tr>
      <td><code>1</code></td>
      <td><code>TYPE_RELOAD</code></td>
      <td>
        Die Seite wurde durch Klicken auf die Schaltfläche „Neu laden“
        oder über die [`Location.reload()`](/de/docs/Web/API/Location/reload)-Methode aufgerufen.
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
      <td>Auf jede andere Weise.</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Historisch gesehen testeten Entwickler auf einen `type` von `"TYPE_BACK_FORWARD"`, um einen Hinweis auf die Back/Forward-Cache ({{Glossary("bfcache", "bfcache")}})-Trefferquote zu erhalten. Dies lieferte jedoch keine Gründe für die Blockierung von bfcache oder andere Daten. Die [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons)-Eigenschaft sollte zukünftig zur Überwachung des bfcache verwendet werden. Siehe [Überwachung von bfcache-Blockierungsgründen](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) für weitere Informationen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`PerformanceNavigation`](/de/docs/Web/API/PerformanceNavigation)-Schnittstelle, zu der sie gehört.
