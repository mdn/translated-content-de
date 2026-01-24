---
title: Range
slug: Web/API/Range
l10n:
  sourceCommit: f314991b236fce81b712a6df59e4643de0f98449
---

{{APIRef("DOM")}}

Die **`Range`**-Schnittstelle repräsentiert ein Fragment eines Dokuments, das Knoten und Teile von Textknoten enthalten kann.

Ein `Range`-Objekt kann mit der Methode [`Document.createRange()`](/de/docs/Web/API/Document/createRange) erstellt werden. `Range`-Objekte können auch durch die Methode [`getRangeAt()`](/de/docs/Web/API/Selection/getRangeAt) des [`Selection`](/de/docs/Web/API/Selection)-Objekts oder die Methode [`caretRangeFromPoint()`](/de/docs/Web/API/Document/caretRangeFromPoint) des [`Document`](/de/docs/Web/API/Document)-Objekts abgerufen werden.

Es gibt auch den [`Range()`](/de/docs/Web/API/Range/Range)-Konstruktor.

{{InheritanceDiagram}}

## Konstruktor

- [`Range()`](/de/docs/Web/API/Range/Range)
  - : Gibt ein `Range`-Objekt mit dem globalen [`Document`](/de/docs/Web/API/Document) als Start- und Endpunkt zurück.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von der übergeordneten Schnittstelle, [`AbstractRange`](/de/docs/Web/API/AbstractRange)._

- [`Range.commonAncestorContainer`](/de/docs/Web/API/Range/commonAncestorContainer) {{ReadOnlyInline}}
  - : Gibt den tiefsten [`Node`](/de/docs/Web/API/Node) zurück, der die Knoten `startContainer` und `endContainer` enthält.

## Instanz-Methoden

_Es gibt keine vererbten Methoden._

- [`Range.collapse()`](/de/docs/Web/API/Range/collapse)
  - : Kollabiert das `Range` zu einem seiner Grenzpunkte.
- [`Range.compareBoundaryPoints()`](/de/docs/Web/API/Range/compareBoundaryPoints)
  - : Vergleicht die Grenzpunkte des `Range` mit einem anderen `Range`.
- [`Range.compareNode()`](/de/docs/Web/API/Range/compareNode) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt eine Konstante zurück, die angibt, ob der [`Node`](/de/docs/Web/API/Node) vor, nach, innerhalb oder um das `Range` herum liegt.
- [`Range.comparePoint()`](/de/docs/Web/API/Range/comparePoint)
  - : Gibt -1, 0 oder 1 zurück, um anzuzeigen, ob der Punkt vor, innerhalb oder nach dem `Range` liegt.
- [`Range.cloneContents()`](/de/docs/Web/API/Range/cloneContents)
  - : Gibt ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zurück, das die Knoten eines `Range` kopiert.
- [`Range.cloneRange()`](/de/docs/Web/API/Range/cloneRange)
  - : Gibt ein `Range`-Objekt mit identischen Grenzpunkten wie das geklonte `Range` zurück.
- [`Range.createContextualFragment()`](/de/docs/Web/API/Range/createContextualFragment)
  - : Gibt ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zurück, das aus einem angegebenen Code-String erstellt wurde.
- [`Range.deleteContents()`](/de/docs/Web/API/Range/deleteContents)
  - : Entfernt die Inhalte eines `Range` aus dem [`Document`](/de/docs/Web/API/Document).
- [`Range.detach()`](/de/docs/Web/API/Range/detach)
  - : Tut nichts. Beibehalten für Kompatibilität.
- [`Range.extractContents()`](/de/docs/Web/API/Range/extractContents)
  - : Verschiebt die Inhalte eines `Range` aus dem Dokumentbaum in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment).
- [`Range.getBoundingClientRect()`](/de/docs/Web/API/Range/getBoundingClientRect)
  - : Gibt ein [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekt zurück, das die gesamten Inhalte des `Range` umfasst; dies wäre die Vereinigung aller Rechtecke, die von [`range.getClientRects()`](/de/docs/Web/API/Range/getClientRects) zurückgegeben werden.
- [`Range.getClientRects()`](/de/docs/Web/API/Range/getClientRects)
  - : Gibt eine Liste von [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekten zurück, die die Ergebnisse von [`Element.getClientRects()`](/de/docs/Web/API/Element/getClientRects) für alle Elemente im `Range` zusammenfasst.
- [`Range.isPointInRange()`](/de/docs/Web/API/Range/isPointInRange)
  - : Gibt ein `boolean` zurück, das angibt, ob der angegebene Punkt im `Range` liegt.
- [`Range.insertNode()`](/de/docs/Web/API/Range/insertNode)
  - : Fügt einen [`Node`](/de/docs/Web/API/Node) am Anfang eines `Range` ein.
- [`Range.intersectsNode()`](/de/docs/Web/API/Range/intersectsNode)
  - : Gibt ein `boolean` zurück, das angibt, ob der angegebene Knoten das `Range` schneidet.
- [`Range.selectNode()`](/de/docs/Web/API/Range/selectNode)
  - : Legt das `Range` fest, um den [`Node`](/de/docs/Web/API/Node) und seine Inhalte zu enthalten.
- [`Range.selectNodeContents()`](/de/docs/Web/API/Range/selectNodeContents)
  - : Legt das `Range` fest, um die Inhalte eines [`Node`](/de/docs/Web/API/Node) zu enthalten.
- [`Range.setEnd()`](/de/docs/Web/API/Range/setEnd)
  - : Legt die Endposition eines `Range` fest.
- [`Range.setStart()`](/de/docs/Web/API/Range/setStart)
  - : Legt die Startposition eines `Range` fest.
- [`Range.setEndAfter()`](/de/docs/Web/API/Range/setEndAfter)
  - : Legt die Endposition eines `Range` relativ zu einem anderen [`Node`](/de/docs/Web/API/Node) fest.
- [`Range.setEndBefore()`](/de/docs/Web/API/Range/setEndBefore)
  - : Legt die Endposition eines `Range` relativ zu einem anderen [`Node`](/de/docs/Web/API/Node) fest.
- [`Range.setStartAfter()`](/de/docs/Web/API/Range/setStartAfter)
  - : Legt die Startposition eines `Range` relativ zu einem anderen [`Node`](/de/docs/Web/API/Node) fest.
- [`Range.setStartBefore()`](/de/docs/Web/API/Range/setStartBefore)
  - : Legt die Startposition eines `Range` relativ zu einem anderen [`Node`](/de/docs/Web/API/Node) fest.
- [`Range.surroundContents()`](/de/docs/Web/API/Range/surroundContents)
  - : Verschiebt Inhalte eines `Range` in einen neuen [`Node`](/de/docs/Web/API/Node).
- [`Range.toString()`](/de/docs/Web/API/Range/toString)
  - : Gibt den Text des `Range` zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Der DOM-Schnittstellenindex](/de/docs/Web/API/Document_Object_Model)
