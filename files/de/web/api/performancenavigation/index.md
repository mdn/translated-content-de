---
title: PerformanceNavigation
slug: Web/API/PerformanceNavigation
l10n:
  sourceCommit: e1dc7af1b7a1743dc84e2584ecfce309a461c479
---

{{APIRef("Performance API")}}

Das veraltete **`PerformanceNavigation`**-Interface repräsentiert Informationen darüber, wie die Navigation zum aktuellen Dokument durchgeführt wurde.

> [!WARNING]
> Dieses Interface ist im [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete) als veraltet markiert.
> Bitte verwenden Sie stattdessen das [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Interface.

Ein Objekt dieses Typs kann durch Aufruf des schreibgeschützten Attributs [`Performance.navigation`](/de/docs/Web/API/Performance/navigation) erlangt werden.

## Instanz-Eigenschaften

_Das `PerformanceNavigation`-Interface erbt keine Eigenschaften._

- [`PerformanceNavigation.type`](/de/docs/Web/API/PerformanceNavigation/type) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Ein `unsigned short`, der angibt, wie die Navigation zu dieser Seite durchgeführt wurde. Mögliche Werte sind:
    - `TYPE_NAVIGATE` (0)
      - : Die Seite wurde durch das Folgen eines Links, eines Lesezeichens, einer Formularübermittlung oder eines Skripts oder durch die Eingabe der URL in der Adressleiste aufgerufen.
    - `TYPE_RELOAD` (1)
      - : Die Seite wurde durch Klick auf die Schaltfläche "Neu laden" oder über die Methode [`Location.reload()`](/de/docs/Web/API/Location/reload) aufgerufen.
    - `TYPE_BACK_FORWARD` (2)
      - : Die Seite wurde durch Navigation in der Historie aufgerufen.
    - `TYPE_RESERVED` (255)
      - : Jede andere Methode.

- [`PerformanceNavigation.redirectCount`](/de/docs/Web/API/PerformanceNavigation/redirectCount) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Ein `unsigned short`, der die Anzahl der REDIRECTs darstellt, die vor dem Erreichen der Seite durchgeführt wurden.

## Instanz-Methoden

_Das `PerformanceNavigation`-Interface erbt keine Methoden._

- [`PerformanceNavigation.toJSON()`](/de/docs/Web/API/PerformanceNavigation/toJSON) {{deprecated_inline}}
  - : Ein {{Glossary("Serialization", "Serializer")}}, der ein JSON-Objekt zurückgibt, das das `PerformanceNavigation`-Objekt repräsentiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Der [`Performance`](/de/docs/Web/API/Performance), der den Zugriff auf ein Objekt dieses Typs ermöglicht.
- [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) (Teil von Navigation Timing Level 2), der diese API abgelöst hat.
