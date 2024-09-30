---
title: NamedNodeMap
slug: Web/API/NamedNodeMap
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("DOM")}}

Das **`NamedNodeMap`** Interface repräsentiert eine Sammlung von [`Attr`](/de/docs/Web/API/Attr)-Objekten. Objekte innerhalb eines `NamedNodeMap` sind nicht in einer bestimmten Reihenfolge, im Gegensatz zu [`NodeList`](/de/docs/Web/API/NodeList), obwohl sie wie in einem Array über einen Index aufgerufen werden können.

Ein `NamedNodeMap`-Objekt ist _live_ und wird daher automatisch aktualisiert, wenn Änderungen an seinem Inhalt intern oder an anderer Stelle vorgenommen werden.

> [!NOTE]
> Obwohl als `NamedNodeMap` bezeichnet, befasst sich dieses Interface nicht mit [`Node`](/de/docs/Web/API/Node)-Objekten, sondern mit [`Attr`](/de/docs/Web/API/Attr)-Objekten, die eine spezialisierte Klasse von [`Node`](/de/docs/Web/API/Node)-Objekten sind.

## Instanz-Eigenschaften

_Dieses Interface erbt keine Eigenschaft._

- [`NamedNodeMap.length`](/de/docs/Web/API/NamedNodeMap/length) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Objekte in der Map zurück.

## Instanz-Methoden

_Dieses Interface erbt keine Methode._

- [`NamedNodeMap.getNamedItem()`](/de/docs/Web/API/NamedNodeMap/getNamedItem)
  - : Gibt ein [`Attr`](/de/docs/Web/API/Attr) zurück, das dem gegebenen Namen entspricht.
- [`NamedNodeMap.setNamedItem()`](/de/docs/Web/API/NamedNodeMap/setNamedItem)
  - : Ersetzt oder fügt das in der Map durch den gegebenen Namen identifizierte [`Attr`](/de/docs/Web/API/Attr) hinzu.
- [`NamedNodeMap.removeNamedItem()`](/de/docs/Web/API/NamedNodeMap/removeNamedItem)
  - : Entfernt das durch die gegebene Map identifizierte [`Attr`](/de/docs/Web/API/Attr).
- [`NamedNodeMap.item()`](/de/docs/Web/API/NamedNodeMap/item)
  - : Gibt das [`Attr`](/de/docs/Web/API/Attr) an dem gegebenen Index zurück oder `null`, wenn der Index höher oder gleich der Anzahl der Knoten ist.
- [`NamedNodeMap.getNamedItemNS()`](/de/docs/Web/API/NamedNodeMap/getNamedItemNS)
  - : Gibt ein [`Attr`](/de/docs/Web/API/Attr) zurück, das durch einen Namensraum und einen zugehörigen lokalen Namen identifiziert wird.
- [`NamedNodeMap.setNamedItemNS()`](/de/docs/Web/API/NamedNodeMap/setNamedItemNS)
  - : Ersetzt oder fügt das in der Map durch den gegebenen Namensraum und den zugehörigen lokalen Namen identifizierte [`Attr`](/de/docs/Web/API/Attr) hinzu.
- [`NamedNodeMap.removeNamedItemNS()`](/de/docs/Web/API/NamedNodeMap/removeNamedItemNS)
  - : Entfernt das durch den gegebenen Namensraum und den zugehörigen lokalen Namen identifizierte [`Attr`](/de/docs/Web/API/Attr).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.attributes`](/de/docs/Web/API/Element/attributes)
