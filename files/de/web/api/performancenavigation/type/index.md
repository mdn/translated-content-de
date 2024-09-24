---
title: "PerformanceNavigation: type-Eigenschaft"
short-title: type
slug: Web/API/PerformanceNavigation/type
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

Die veraltete
**`PerformanceNavigation.type`**
Schreibgeschützte Eigenschaft gibt ein `unsigned short` zurück, das eine Konstante enthält, die beschreibt, wie die Navigation zu dieser Seite durchgeführt wurde.

> [!WARNING]
> Diese Eigenschaftsschnittstelle ist im [Navigation Timing Level 2-Spezifikation](https://w3c.github.io/navigation-timing/#obsolete) veraltet.
> Bitte verwenden Sie stattdessen die {{domxref("PerformanceNavigationTiming")}}-Schnittstelle.

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
        Die Seite wurde durch Anklicken eines Links, eines Lesezeichens, einer Formularübermittlung, eines Skripts oder durch Eingeben der URL in die Adressleiste aufgerufen.
      </td>
    </tr>
    <tr>
      <td><code>1</code></td>
      <td><code>TYPE_RELOAD</code></td>
      <td>
        Die Seite wurde durch Klicken auf die Schaltfläche "Neu laden" oder über die {{domxref("Location.reload()")}}-Methode aufgerufen.
      </td>
    </tr>
    <tr>
      <td><code>2</code></td>
      <td><code>TYPE_BACK_FORWARD</code></td>
      <td>Die Seite wurde durch Navigieren in den Verlauf aufgerufen.</td>
    </tr>
    <tr>
      <td><code>255</code></td>
      <td><code>TYPE_RESERVED</code></td>
      <td>In jeder anderen Weise.</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Historisch haben Entwickler einen `type` von "`TYPE_BACK_FORWARD`" getestet, um einen Hinweis auf die Trefferquote des Back-/Forward-Caches ({{glossary("bfcache")}}) zu erhalten. Dies lieferte jedoch keine Gründe für das Blockieren des bfcache oder andere Daten. Die Eigenschaft {{domxref("PerformanceNavigationTiming.notRestoredReasons")}} sollte verwendet werden, um den bfcache zukünftig zu überwachen. Weitere Informationen finden Sie unter [Überwachung von bfcache-Blockierungsgründen](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons).

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- Die {{domxref("PerformanceNavigation")}}-Schnittstelle, zu der es gehört.
