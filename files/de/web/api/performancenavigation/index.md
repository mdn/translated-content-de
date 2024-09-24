---
title: PerformanceNavigation
slug: Web/API/PerformanceNavigation
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

Das veraltete **`PerformanceNavigation`**-Interface repräsentiert Informationen darüber, wie die Navigation zum aktuellen Dokument durchgeführt wurde.

> [!WARNING]
> Dieses Interface ist im [Navigation Timing Level 2 Standard](https://w3c.github.io/navigation-timing/#obsolete) veraltet.
> Bitte verwenden Sie stattdessen das {{domxref("PerformanceNavigationTiming")}} Interface.

Ein Objekt dieses Typs kann durch Aufruf des {{domxref("Performance.navigation")}} schreibgeschützten Attributs erhalten werden.

## Instanzeigenschaften

_Das `PerformanceNavigation` Interface erbt keine Eigenschaften._

- {{domxref("PerformanceNavigation.type")}} {{ReadOnlyInline}} {{deprecated_inline}}

  - : Ein `unsigned short`, das angibt, wie die Navigation zu dieser Seite erfolgte. Mögliche Werte sind:

    - `TYPE_NAVIGATE` (0)
      - : Die Seite wurde durch das Folgen eines Links, eines Lesezeichens, das Absenden eines Formulars, ein Skript oder durch Eingabe der URL in die Adressleiste aufgerufen.
    - `TYPE_RELOAD` (1)
      - : Die Seite wurde durch Klicken auf die Schaltfläche "Aktualisieren" oder über die {{domxref("Location.reload()")}} Methode aufgerufen.
    - `TYPE_BACK_FORWARD` (2)
      - : Die Seite wurde durch Navigation in der Chronik aufgerufen.
    - `TYPE_RESERVED` (255)
      - : In anderer Weise.

- {{domxref("PerformanceNavigation.redirectCount")}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Ein `unsigned short`, der die Anzahl der UMLEITUNGEN darstellt, die durchgeführt wurden, bevor die Seite erreicht wurde.

## Instanzmethoden

_Das `Performance` Interface erbt keine Methoden._

- {{domxref("PerformanceNavigation.toJSON()")}} {{deprecated_inline}}
  - : Ein {{Glossary("Serialization","Serializer")}}, der ein JSON-Objekt zurückgibt, das das `PerformanceNavigation`-Objekt repräsentiert.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- Das {{domxref("Performance")}}, das den Zugriff auf ein Objekt dieses Typs ermöglicht.
- {{domxref("PerformanceNavigationTiming")}} (Teil von Navigation Timing Level 2), das diese API abgelöst hat.
