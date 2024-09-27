---
title: PerformanceNavigation
slug: Web/API/PerformanceNavigation
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

Die veraltete **`PerformanceNavigation`**-Schnittstelle repräsentiert Informationen darüber, wie die Navigation zum aktuellen Dokument durchgeführt wurde.

> [!WARNING]
> Diese Schnittstelle ist im [Navigation Timing Level 2-Spezifikation](https://w3c.github.io/navigation-timing/#obsolete) veraltet.
> Bitte verwenden Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Schnittstelle.

Ein Objekt dieses Typs kann durch Aufrufen des schreibgeschützten Attributs [`Performance.navigation`](/de/docs/Web/API/Performance/navigation) erhalten werden.

## Instanz-Eigenschaften

_Die `PerformanceNavigation`-Schnittstelle erbt keine Eigenschaften._

- [`PerformanceNavigation.type`](/de/docs/Web/API/PerformanceNavigation/type) {{ReadOnlyInline}} {{deprecated_inline}}

  - : Ein `unsigned short`, der anzeigt, wie die Navigation zu dieser Seite ausgeführt wurde. Mögliche Werte sind:

    - `TYPE_NAVIGATE` (0)
      - : Die Seite wurde durch das Folgen eines Links, eines Lesezeichens, einer Formularübermittlung oder eines Skripts oder durch Eingabe der URL in die Adressleiste aufgerufen.
    - `TYPE_RELOAD` (1)
      - : Die Seite wurde durch Klicken auf die Schaltfläche "Neu Laden" oder über die [`Location.reload()`](/de/docs/Web/API/Location/reload)-Methode aufgerufen.
    - `TYPE_BACK_FORWARD` (2)
      - : Die Seite wurde durch Navigation in der Historie aufgerufen.
    - `TYPE_RESERVED` (255)
      - : Jede andere Art und Weise.

- [`PerformanceNavigation.redirectCount`](/de/docs/Web/API/PerformanceNavigation/redirectCount) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Ein `unsigned short`, der die Anzahl der REDIRECTs darstellt, die vor dem Erreichen der Seite durchgeführt wurden.

## Instanz-Methoden

_Die `Performance`-Schnittstelle erbt keine Methoden._

- [`PerformanceNavigation.toJSON()`](/de/docs/Web/API/PerformanceNavigation/toJSON) {{deprecated_inline}}
  - : Ein [Serializer](/de/docs/Glossary/Serialization), der ein JSON-Objekt zurückgibt, das das `PerformanceNavigation`-Objekt darstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`Performance`](/de/docs/Web/API/Performance), die den Zugriff auf ein Objekt dieses Typs ermöglicht.
- [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) (Teil von Navigation Timing Level 2), die diese API abgelöst hat.
