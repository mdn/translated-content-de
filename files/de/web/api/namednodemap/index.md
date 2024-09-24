---
title: NamedNodeMap
slug: Web/API/NamedNodeMap
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("DOM")}}

Die **`NamedNodeMap`**-Schnittstelle repräsentiert eine Sammlung von {{domxref("Attr")}}-Objekten. Objekte innerhalb einer `NamedNodeMap` sind in keiner bestimmten Reihenfolge vorhanden, im Gegensatz zu {{domxref("NodeList")}}, obwohl sie wie in einem Array über einen Index zugänglich sind.

Ein `NamedNodeMap`-Objekt ist _live_ und wird daher automatisch aktualisiert, wenn Änderungen an seinem Inhalt intern oder anderswo vorgenommen werden.

> [!NOTE]
> Obwohl sie `NamedNodeMap` genannt wird, befasst sich diese Schnittstelle nicht mit {{domxref("Node")}}-Objekten, sondern mit {{domxref("Attr")}}-Objekten, die eine spezialisierte Klasse von {{domxref("Node")}}-Objekten sind.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt keine Eigenschaften._

- {{domxref("NamedNodeMap.length")}} {{ReadOnlyInline}}
  - : Gibt die Anzahl der Objekte in der Map zurück.

## Instanz-Methoden

_Diese Schnittstelle erbt keine Methoden._

- {{domxref("NamedNodeMap.getNamedItem()")}}
  - : Gibt ein {{domxref("Attr")}} zurück, das dem angegebenen Namen entspricht.
- {{domxref("NamedNodeMap.setNamedItem()")}}
  - : Ersetzt oder fügt das im Map identifizierte {{domxref("Attr")}} mit dem angegebenen Namen hinzu.
- {{domxref("NamedNodeMap.removeNamedItem()")}}
  - : Entfernt das {{domxref("Attr")}}, das durch die gegebene Map identifiziert wird.
- {{domxref("NamedNodeMap.item()")}}
  - : Gibt das {{domxref("Attr")}} am angegebenen Index oder `null` zurück, wenn der Index höher oder gleich der Anzahl der Knoten ist.
- {{domxref("NamedNodeMap.getNamedItemNS()")}}
  - : Gibt ein {{domxref("Attr")}} zurück, das durch einen Namespace und den zugehörigen lokalen Namen identifiziert wird.
- {{domxref("NamedNodeMap.setNamedItemNS()")}}
  - : Ersetzt oder fügt das in der Map identifizierte {{domxref("Attr")}} mit dem angegebenen Namespace und dem zugehörigen lokalen Namen hinzu.
- {{domxref("NamedNodeMap.removeNamedItemNS()")}}
  - : Entfernt das {{domxref("Attr")}}, das durch den angegebenen Namespace und den zugehörigen lokalen Namen identifiziert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Element.attributes")}}
