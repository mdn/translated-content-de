---
title: NamedNodeMap
slug: Web/API/NamedNodeMap
l10n:
  sourceCommit: f542ed344953b3312fc92150bba11536667e288a
---

{{APIRef("DOM")}}

Das **`NamedNodeMap`**-Interface repräsentiert eine Sammlung von [`Attr`](/de/docs/Web/API/Attr)-Objekten. Objekte innerhalb eines `NamedNodeMap` sind nicht in einer bestimmten Reihenfolge angeordnet, im Gegensatz zu [`NodeList`](/de/docs/Web/API/NodeList), obwohl sie wie in einem Array über einen Index zugänglich sind.

Ein `NamedNodeMap`-Objekt ist _live_ und wird daher automatisch aktualisiert, wenn Änderungen an seinen Inhalten intern oder an anderer Stelle vorgenommen werden.

> [!NOTE]
> Obwohl es `NamedNodeMap` genannt wird, befasst sich dieses Interface nicht mit [`Node`](/de/docs/Web/API/Node)-Objekten, sondern mit [`Attr`](/de/docs/Web/API/Attr)-Objekten, die eine spezialisierte Klasse von [`Node`](/de/docs/Web/API/Node)-Objekten darstellen.

## Instanz-Eigenschaften

_Dieses Interface erbt keine Eigenschaften._

- [`NamedNodeMap.length`](/de/docs/Web/API/NamedNodeMap/length) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Objekte in der Map zurück.

## Instanz-Methoden

_Dieses Interface erbt keine Methoden._

- [`NamedNodeMap.getNamedItem()`](/de/docs/Web/API/NamedNodeMap/getNamedItem)
  - : Gibt ein [`Attr`](/de/docs/Web/API/Attr) zurück, das dem angegebenen Namen entspricht.
- [`NamedNodeMap.setNamedItem()`](/de/docs/Web/API/NamedNodeMap/setNamedItem)
  - : Ersetzt oder fügt das in der Map durch den angegebenen Namen identifizierte [`Attr`](/de/docs/Web/API/Attr) hinzu.
- [`NamedNodeMap.removeNamedItem()`](/de/docs/Web/API/NamedNodeMap/removeNamedItem)
  - : Entfernt das durch den angegebenen Map identifizierte [`Attr`](/de/docs/Web/API/Attr).
- [`NamedNodeMap.item()`](/de/docs/Web/API/NamedNodeMap/item)
  - : Gibt das [`Attr`](/de/docs/Web/API/Attr) am angegebenen Index zurück, oder `null`, wenn der Index höher oder gleich der Anzahl der Knoten ist.
- [`NamedNodeMap.getNamedItemNS()`](/de/docs/Web/API/NamedNodeMap/getNamedItemNS)
  - : Gibt ein [`Attr`](/de/docs/Web/API/Attr) zurück, das durch einen Namensraum und einen zugehörigen lokalen Namen identifiziert wird.
- [`NamedNodeMap.setNamedItemNS()`](/de/docs/Web/API/NamedNodeMap/setNamedItemNS)
  - : Ersetzt oder fügt das in der Map durch den angegebenen Namensraum und den zugehörigen lokalen Namen identifizierte [`Attr`](/de/docs/Web/API/Attr) hinzu.
- [`NamedNodeMap.removeNamedItemNS()`](/de/docs/Web/API/NamedNodeMap/removeNamedItemNS)
  - : Entfernt das [`Attr`](/de/docs/Web/API/Attr), das durch den angegebenen Namensraum und den zugehörigen lokalen Namen identifiziert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.attributes`](/de/docs/Web/API/Element/attributes)
