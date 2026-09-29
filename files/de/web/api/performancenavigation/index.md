---
title: PerformanceNavigation
slug: Web/API/PerformanceNavigation
l10n:
  sourceCommit: 6bb81a788ff71f726e32d16757c99d5c45a7edf9
---

{{APIRef("Performance API")}}

Die veraltete Schnittstelle **`PerformanceNavigation`** enthält Informationen darüber, wie die Navigation zum aktuellen Dokument erfolgt ist.

> [!WARNING]
> Diese Schnittstelle ist in der [Spezifikation Navigation Timing Level 2](https://w3c.github.io/navigation-timing/#obsolete) als veraltet eingestuft.
> Verwenden Sie stattdessen die Schnittstelle [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming).

Ein Objekt dieses Typs kann über das schreibgeschützte Attribut [`Performance.navigation`](/de/docs/Web/API/Performance/navigation) abgerufen werden.

## Instanzeigenschaften

_Die Schnittstelle `PerformanceNavigation` erbt keine Eigenschaften._

- [`PerformanceNavigation.type`](/de/docs/Web/API/PerformanceNavigation/type) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Ein `unsigned short`, der angibt, wie die Navigation zu dieser Seite erfolgt ist. Mögliche Werte sind:
    - `TYPE_NAVIGATE` (0)
      - : Die Seite wurde durch das Folgen eines Links, über ein Lesezeichen, durch das Absenden eines Formulars, über ein Skript oder durch Eingabe der URL in die Adressleiste aufgerufen.
    - `TYPE_RELOAD` (1)
      - : Die Seite wurde durch Klicken auf die Schaltfläche zum Neuladen oder über die Methode [`Location.reload()`](/de/docs/Web/API/Location/reload) aufgerufen.
    - `TYPE_BACK_FORWARD` (2)
      - : Die Seite wurde durch Navigation im Verlauf aufgerufen.
    - `TYPE_RESERVED` (255)
      - : Auf eine andere Weise.

- [`PerformanceNavigation.redirectCount`](/de/docs/Web/API/PerformanceNavigation/redirectCount) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Ein `unsigned short`, der die Anzahl der Weiterleitungen angibt, bevor die Seite erreicht wurde.

## Instanzmethoden

_Die Schnittstelle `PerformanceNavigation` erbt keine Methoden._

- [`PerformanceNavigation.toJSON()`](/de/docs/Web/API/PerformanceNavigation/toJSON) {{deprecated_inline}}
  - : Gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `PerformanceNavigation`-Objekt darstellt. Wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle [`Performance`](/de/docs/Web/API/Performance), die den Zugriff auf ein Objekt dieses Typs ermöglicht.
- [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) (Teil von Navigation Timing Level 2), das diese API ersetzt hat.
