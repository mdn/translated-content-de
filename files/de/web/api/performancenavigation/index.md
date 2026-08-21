---
title: PerformanceNavigation
slug: Web/API/PerformanceNavigation
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Performance API")}}

Das veraltete **`PerformanceNavigation`**-Interface stellt Informationen darüber dar, wie die Navigation zum aktuellen Dokument durchgeführt wurde.

> [!WARNING]
> Dieses Interface ist in der [Navigation Timing Level 2 Spezifikation](https://w3c.github.io/navigation-timing/#obsolete) veraltet.
> Bitte verwenden Sie stattdessen das [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Interface.

Ein Objekt dieses Typs kann durch Aufrufen des schreibgeschützten Attributs [`Performance.navigation`](/de/docs/Web/API/Performance/navigation) erhalten werden.

## Instanz-Eigenschaften

_Das `PerformanceNavigation`-Interface erbt keine Eigenschaften._

- [`PerformanceNavigation.type`](/de/docs/Web/API/PerformanceNavigation/type) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Ein `unsigned short`, der angibt, wie die Navigation zu dieser Seite durchgeführt wurde. Mögliche Werte sind:
    - `TYPE_NAVIGATE` (0)
      - : Die Seite wurde durch das Folgen eines Links, eines Lesezeichens, das Absenden eines Formulars oder eines Scripts aufgerufen oder durch Eingabe der URL in der Adressleiste.
    - `TYPE_RELOAD` (1)
      - : Die Seite wurde durch Klicken auf die Schaltfläche „Neu laden“ oder über die Methode [`Location.reload()`](/de/docs/Web/API/Location/reload) aufgerufen.
    - `TYPE_BACK_FORWARD` (2)
      - : Die Seite wurde durch Navigieren in den Verlauf aufgerufen.
    - `TYPE_RESERVED` (255)
      - : Jede andere Methode.

- [`PerformanceNavigation.redirectCount`](/de/docs/Web/API/PerformanceNavigation/redirectCount) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Ein `unsigned short`, der die Anzahl der Weiterleitungen darstellt, die vor dem Erreichen der Seite durchgeführt wurden.

## Instanz-Methoden

_Das `Performance`-Interface erbt keine Methoden._

- [`PerformanceNavigation.toJSON()`](/de/docs/Web/API/PerformanceNavigation/toJSON) {{deprecated_inline}}
  - : Ein {{Glossary("Serialization", "Serializer")}}, der ein JSON-Objekt zurückgibt, das das `PerformanceNavigation`-Objekt darstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`Performance`](/de/docs/Web/API/Performance), die den Zugriff auf ein Objekt dieses Typs ermöglicht.
- [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) (Teil der Navigation Timing Level 2), die diese API abgelöst hat.
