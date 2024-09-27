---
title: NamedNodeMap
slug: Web/API/NamedNodeMap
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("DOM")}}

Das **`NamedNodeMap`**-Interface repräsentiert eine Sammlung von [`Attr`](/de/docs/Web/API/Attr)-Objekten. Objekte innerhalb eines `NamedNodeMap` sind im Gegensatz zu [`NodeList`](/de/docs/Web/API/NodeList) in keiner bestimmten Reihenfolge angeordnet, obwohl sie ähnlich wie in einem Array über einen Index zugänglich sind.

Ein `NamedNodeMap`-Objekt ist _dynamisch_ und wird daher automatisch aktualisiert, wenn Änderungen an seinen Inhalten intern oder anderswo vorgenommen werden.

> [!NOTE]
> Obwohl `NamedNodeMap` genannt, befasst sich dieses Interface nicht mit [`Node`](/de/docs/Web/API/Node)-Objekten, sondern mit [`Attr`](/de/docs/Web/API/Attr)-Objekten, die eine spezialisierte Klasse von [`Node`](/de/docs/Web/API/Node)-Objekten sind.

## Instanzeigenschaften

_Dieses Interface erbt keine Eigenschaft._

- [`NamedNodeMap.length`](/de/docs/Web/API/NamedNodeMap/length) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Objekte in der Map zurück.

## Instanzmethoden

_Dieses Interface erbt keine Methode._

- [`NamedNodeMap.getNamedItem()`](/de/docs/Web/API/NamedNodeMap/getNamedItem)
  - : Gibt ein [`Attr`](/de/docs/Web/API/Attr) zurück, das dem angegebenen Namen entspricht.
- [`NamedNodeMap.setNamedItem()`](/de/docs/Web/API/NamedNodeMap/setNamedItem)
  - : Ersetzt oder fügt das in der Map identifizierte [`Attr`](/de/docs/Web/API/Attr) durch den angegebenen Namen hinzu.
- [`NamedNodeMap.removeNamedItem()`](/de/docs/Web/API/NamedNodeMap/removeNamedItem)
  - : Entfernt das durch die Map identifizierte [`Attr`](/de/docs/Web/API/Attr).
- [`NamedNodeMap.item()`](/de/docs/Web/API/NamedNodeMap/item)
  - : Gibt das [`Attr`](/de/docs/Web/API/Attr) am angegebenen Index zurück oder `null`, wenn der Index größer oder gleich der Anzahl der Knoten ist.
- [`NamedNodeMap.getNamedItemNS()`](/de/docs/Web/API/NamedNodeMap/getNamedItemNS)
  - : Gibt ein durch einen Namensraum und den zugehörigen lokalen Namen identifiziertes [`Attr`](/de/docs/Web/API/Attr) zurück.
- [`NamedNodeMap.setNamedItemNS()`](/de/docs/Web/API/NamedNodeMap/setNamedItemNS)
  - : Ersetzt oder fügt das in der Map durch den angegebenen Namensraum und den zugehörigen lokalen Namen identifizierte [`Attr`](/de/docs/Web/API/Attr) hinzu.
- [`NamedNodeMap.removeNamedItemNS()`](/de/docs/Web/API/NamedNodeMap/removeNamedItemNS)
  - : Entfernt das durch den angegebenen Namensraum und den zugehörigen lokalen Namen identifizierte [`Attr`](/de/docs/Web/API/Attr).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.attributes`](/de/docs/Web/API/Element/attributes)
