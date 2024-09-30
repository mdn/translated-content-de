---
title: Range
slug: Web/API/Range
l10n:
  sourceCommit: 2937558d5ed1e03d7f60b2de71dd9c17f490166e
---

{{APIRef("DOM")}}

Die **`Range`**-Schnittstelle repräsentiert ein Fragment eines Dokuments, das Knoten und Teile von Textknoten enthalten kann.

Ein `Range` kann mit der Methode [`Document.createRange()`](/de/docs/Web/API/Document/createRange) erstellt werden. `Range`-Objekte können auch mit der Methode [`getRangeAt()`](/de/docs/Web/API/Selection/getRangeAt) des [`Selection`](/de/docs/Web/API/Selection)-Objekts oder der Methode [`caretRangeFromPoint()`](/de/docs/Web/API/Document/caretRangeFromPoint) des [`Document`](/de/docs/Web/API/Document)-Objekts abgerufen werden.

Es steht auch der [`Range()`](/de/docs/Web/API/Range/Range)-Konstruktor zur Verfügung.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Es gibt keine geerbten Eigenschaften._

- [`Range.collapsed`](/de/docs/Web/API/Range/collapsed) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob die Start- und Endpunkte des `Range` an derselben Position liegen.
- [`Range.commonAncestorContainer`](/de/docs/Web/API/Range/commonAncestorContainer) {{ReadOnlyInline}}
  - : Gibt den tiefsten [`Node`](/de/docs/Web/API/Node) zurück, der die `startContainer`- und `endContainer`-Knoten enthält.
- [`Range.endContainer`](/de/docs/Web/API/Range/endContainer) {{ReadOnlyInline}}
  - : Gibt den [`Node`](/de/docs/Web/API/Node) zurück, in dem der `Range` endet.
- [`Range.endOffset`](/de/docs/Web/API/Range/endOffset) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die angibt, wo im `endContainer` der `Range` endet.
- [`Range.startContainer`](/de/docs/Web/API/Range/startContainer) {{ReadOnlyInline}}
  - : Gibt den [`Node`](/de/docs/Web/API/Node) zurück, in dem der `Range` beginnt.
- [`Range.startOffset`](/de/docs/Web/API/Range/startOffset) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die angibt, wo im `startContainer` der `Range` beginnt.

## Konstruktor

- [`Range()`](/de/docs/Web/API/Range/Range)
  - : Gibt ein `Range`-Objekt mit dem globalen [`Document`](/de/docs/Web/API/Document) als Anfang und Ende zurück.

## Instanz-Methoden

_Es gibt keine geerbten Methoden._

- [`Range.collapse()`](/de/docs/Web/API/Range/collapse)
  - : Faltet den `Range` auf einen seiner Begrenzungspunkte zusammen.
- [`Range.compareBoundaryPoints()`](/de/docs/Web/API/Range/compareBoundaryPoints)
  - : Vergleicht die Begrenzungspunkte des `Range` mit einem anderen `Range`.
- [`Range.compareNode()`](/de/docs/Web/API/Range/compareNode) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt eine Konstante zurück, die angibt, ob der [`Node`](/de/docs/Web/API/Node) vor, nach, innerhalb oder um den `Range` herum liegt.
- [`Range.comparePoint()`](/de/docs/Web/API/Range/comparePoint)
  - : Gibt -1, 0 oder 1 zurück, um anzuzeigen, ob der Punkt vor, innerhalb oder nach dem `Range` liegt.
- [`Range.cloneContents()`](/de/docs/Web/API/Range/cloneContents)
  - : Gibt ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zurück, das die Knoten eines `Range` kopiert.
- [`Range.cloneRange()`](/de/docs/Web/API/Range/cloneRange)
  - : Gibt ein `Range`-Objekt mit Begrenzungspunkten zurück, die mit dem geklonten `Range` identisch sind.
- [`Range.createContextualFragment()`](/de/docs/Web/API/Range/createContextualFragment)
  - : Gibt ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zurück, das aus einer gegebenen Zeichenkette von Code erstellt wurde.
- [`Range.deleteContents()`](/de/docs/Web/API/Range/deleteContents)
  - : Entfernt den Inhalt eines `Range` aus dem [`Document`](/de/docs/Web/API/Document).
- [`Range.detach()`](/de/docs/Web/API/Range/detach)
  - : Macht nichts. Beibehalten für Kompatibilität.
- [`Range.extractContents()`](/de/docs/Web/API/Range/extractContents)
  - : Verschiebt Inhalte eines `Range` aus dem Dokumentbaum in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment).
- [`Range.getBoundingClientRect()`](/de/docs/Web/API/Range/getBoundingClientRect)
  - : Gibt ein [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekt zurück, das den gesamten Inhalt des `Range` umschließt; dies wäre die Vereinigung aller Rechtecke, die von [`range.getClientRects()`](/de/docs/Web/API/Range/getClientRects) zurückgegeben werden.
- [`Range.getClientRects()`](/de/docs/Web/API/Range/getClientRects)
  - : Gibt eine Liste von [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekten zurück, die die Ergebnisse von [`Element.getClientRects()`](/de/docs/Web/API/Element/getClientRects) für alle Elemente im `Range` aggregiert.
- [`Range.isPointInRange()`](/de/docs/Web/API/Range/isPointInRange)
  - : Gibt einen `boolean` zurück, der angibt, ob der gegebene Punkt im `Range` liegt.
- [`Range.insertNode()`](/de/docs/Web/API/Range/insertNode)
  - : Fügt einen [`Node`](/de/docs/Web/API/Node) am Anfang eines `Range` ein.
- [`Range.intersectsNode()`](/de/docs/Web/API/Range/intersectsNode)
  - : Gibt einen `boolean` zurück, der angibt, ob der gegebene Knoten den `Range` schneidet.
- [`Range.selectNode()`](/de/docs/Web/API/Range/selectNode)
  - : Setzt den `Range`, um den [`Node`](/de/docs/Web/API/Node) und dessen Inhalt zu enthalten.
- [`Range.selectNodeContents()`](/de/docs/Web/API/Range/selectNodeContents)
  - : Setzt den `Range`, um den Inhalt eines [`Node`](/de/docs/Web/API/Node) zu enthalten.
- [`Range.setEnd()`](/de/docs/Web/API/Range/setEnd)
  - : Setzt die Endposition eines `Range`.
- [`Range.setStart()`](/de/docs/Web/API/Range/setStart)
  - : Setzt die Startposition eines `Range`.
- [`Range.setEndAfter()`](/de/docs/Web/API/Range/setEndAfter)
  - : Setzt die Endposition eines `Range` relativ zu einem anderen [`Node`](/de/docs/Web/API/Node).
- [`Range.setEndBefore()`](/de/docs/Web/API/Range/setEndBefore)
  - : Setzt die Endposition eines `Range` relativ zu einem anderen [`Node`](/de/docs/Web/API/Node).
- [`Range.setStartAfter()`](/de/docs/Web/API/Range/setStartAfter)
  - : Setzt die Startposition eines `Range` relativ zu einem anderen [`Node`](/de/docs/Web/API/Node).
- [`Range.setStartBefore()`](/de/docs/Web/API/Range/setStartBefore)
  - : Setzt die Startposition eines `Range` relativ zu einem anderen [`Node`](/de/docs/Web/API/Node).
- [`Range.surroundContents()`](/de/docs/Web/API/Range/surroundContents)
  - : Verschiebt den Inhalt eines `Range` in einen neuen [`Node`](/de/docs/Web/API/Node).
- [`Range.toString()`](/de/docs/Web/API/Range/toString)
  - : Gibt den Text des `Range` zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Das DOM-Schnittstellenindex](/de/docs/Web/API/Document_Object_Model)
