---
title: PerformanceNavigation
slug: Web/API/PerformanceNavigation
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

Das veraltete **`PerformanceNavigation`**-Interface stellt Informationen darüber dar, wie die Navigation zum aktuellen Dokument erfolgte.

> [!WARNING]
> Dieses Interface ist im [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete) als veraltet eingestuft.
> Bitte verwenden Sie stattdessen das [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) Interface.

Ein Objekt dieses Typs kann durch Aufruf des schreibgeschützten Attributs [`Performance.navigation`](/de/docs/Web/API/Performance/navigation) erhalten werden.

## Instanz-Eigenschaften

_Das `PerformanceNavigation`-Interface erbt keine Eigenschaften._

- [`PerformanceNavigation.type`](/de/docs/Web/API/PerformanceNavigation/type) {{ReadOnlyInline}} {{deprecated_inline}}

  - : Ein `unsigned short`, der angibt, wie die Navigation zu dieser Seite erfolgt ist. Mögliche Werte sind:

    - `TYPE_NAVIGATE` (0)
      - : Die Seite wurde durch das Folgen eines Links, eines Lesezeichens, durch das Absenden eines Formulars oder eines Skripts oder durch Eingabe der URL in die Adressleiste aufgerufen.
    - `TYPE_RELOAD` (1)
      - : Die Seite wurde durch Klicken auf die Schaltfläche Neu laden oder über die Methode [`Location.reload()`](/de/docs/Web/API/Location/reload) aufgerufen.
    - `TYPE_BACK_FORWARD` (2)
      - : Die Seite wurde durch Navigation in der Historie aufgerufen.
    - `TYPE_RESERVED` (255)
      - : Jede andere Weise.

- [`PerformanceNavigation.redirectCount`](/de/docs/Web/API/PerformanceNavigation/redirectCount) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Ein `unsigned short`, der die Anzahl der REDIRECTs darstellt, die vor dem Erreichen der Seite durchgeführt wurden.

## Instanz-Methoden

_Das `Performance`-Interface erbt keine Methoden._

- [`PerformanceNavigation.toJSON()`](/de/docs/Web/API/PerformanceNavigation/toJSON) {{deprecated_inline}}
  - : Ein {{Glossary("Serialization", "Serializer")}}, der ein JSON-Objekt zurückgibt, das das `PerformanceNavigation`-Objekt repräsentiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`Performance`](/de/docs/Web/API/Performance), das den Zugriff auf ein Objekt dieses Typs ermöglicht.
- [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) (Teil der Navigation Timing Level 2), das diese API abgelöst hat.
