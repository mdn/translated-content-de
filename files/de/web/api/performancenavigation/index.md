---
title: PerformanceNavigation
slug: Web/API/PerformanceNavigation
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

Das veraltete **`PerformanceNavigation`**-Interface stellt Informationen darüber dar, wie die Navigation zum aktuellen Dokument durchgeführt wurde.

> [!WARNING]
> Dieses Interface ist im [Navigation Timing Level 2 Specification](https://w3c.github.io/navigation-timing/#obsolete) veraltet.
> Bitte verwenden Sie stattdessen das [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Interface.

Ein Objekt dieses Typs kann durch Aufruf des schreibgeschützten Attributs [`Performance.navigation`](/de/docs/Web/API/Performance/navigation) abgerufen werden.

## Instanzeigenschaften

_Das `PerformanceNavigation`-Interface erbt keine Eigenschaften._

- [`PerformanceNavigation.type`](/de/docs/Web/API/PerformanceNavigation/type) {{ReadOnlyInline}} {{deprecated_inline}}

  - : Ein `unsigned short`, der anzeigt, wie die Navigation zu dieser Seite durchgeführt wurde. Mögliche Werte sind:
    - `TYPE_NAVIGATE` (0)
      - : Die Seite wurde durch das Folgen eines Links, eines Lesezeichens, einer Formularübermittlung oder eines Skripts, oder durch Eingabe der URL in die Adressleiste aufgerufen.
    - `TYPE_RELOAD` (1)
      - : Die Seite wurde durch Klicken auf die Aktualisieren-Schaltfläche oder über die Methode [`Location.reload()`](/de/docs/Web/API/Location/reload) aufgerufen.
    - `TYPE_BACK_FORWARD` (2)
      - : Die Seite wurde durch die Navigation in der Historie aufgerufen.
    - `TYPE_RESERVED` (255)
      - : Jede andere Art.

- [`PerformanceNavigation.redirectCount`](/de/docs/Web/API/PerformanceNavigation/redirectCount) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Ein `unsigned short`, der die Anzahl der REDIRECTs darstellt, die vor dem Erreichen der Seite durchgeführt wurden.

## Instanzmethoden

_Das `Performance`-Interface erbt keine Methoden._

- [`PerformanceNavigation.toJSON()`](/de/docs/Web/API/PerformanceNavigation/toJSON) {{deprecated_inline}}
  - : Ein {{Glossary("Serialization", "Serializer")}}, der ein JSON-Objekt zurückgibt, das das `PerformanceNavigation`-Objekt repräsentiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Der [`Performance`](/de/docs/Web/API/Performance), der den Zugriff auf ein Objekt dieses Typs ermöglicht.
- [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) (Teil von Navigation Timing Level 2), der dieses API abgelöst hat.
