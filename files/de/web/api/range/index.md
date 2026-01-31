---
title: Range
slug: Web/API/Range
l10n:
  sourceCommit: 8ed804166714873a3c7ae11d9d95cfc8f9c379ab
---

{{APIRef("DOM")}}

Die **`Range`**-Schnittstelle repräsentiert ein Fragment eines Dokuments, das Knoten und Teile von Textknoten enthalten kann.

Ein Bereich kann mit der Methode [`Document.createRange()`](/de/docs/Web/API/Document/createRange) erstellt werden. Bereichsobjekte können auch mit der Methode [`getRangeAt()`](/de/docs/Web/API/Selection/getRangeAt) des [`Selection`](/de/docs/Web/API/Selection)-Objekts oder der Methode [`caretRangeFromPoint()`](/de/docs/Web/API/Document/caretRangeFromPoint) des [`Document`](/de/docs/Web/API/Document)-Objekts abgerufen werden.

Es gibt auch den [`Range()`](/de/docs/Web/API/Range/Range)-Konstruktor.

{{InheritanceDiagram}}

## Konstruktor

- [`Range()`](/de/docs/Web/API/Range/Range)
  - : Gibt ein `Range`-Objekt mit dem globalen [`Document`](/de/docs/Web/API/Document) als Anfang und Ende zurück.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seiner Elternschnittstelle, [`AbstractRange`](/de/docs/Web/API/AbstractRange)._

- [`Range.commonAncestorContainer`](/de/docs/Web/API/Range/commonAncestorContainer) {{ReadOnlyInline}}
  - : Gibt den tiefsten [`Node`](/de/docs/Web/API/Node) zurück, der die `startContainer`- und `endContainer`-Knoten enthält.

## Instanz-Methoden

_Es gibt keine geerbten Methoden._

- [`Range.collapse()`](/de/docs/Web/API/Range/collapse)
  - : Reduziert das `Range` auf einen seiner Grenzpunkte.
- [`Range.compareBoundaryPoints()`](/de/docs/Web/API/Range/compareBoundaryPoints)
  - : Vergleicht die Grenzpunkte des `Range` mit einem anderen `Range`.
- [`Range.compareNode()`](/de/docs/Web/API/Range/compareNode) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt eine Konstante zurück, die darstellt, ob der [`Node`](/de/docs/Web/API/Node) vor, nach, innerhalb oder um den Bereich herum liegt.
- [`Range.comparePoint()`](/de/docs/Web/API/Range/comparePoint)
  - : Gibt -1, 0 oder 1 zurück, um anzuzeigen, ob der Punkt vor, innerhalb oder nach dem `Range` auftritt.
- [`Range.cloneContents()`](/de/docs/Web/API/Range/cloneContents)
  - : Gibt ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zurück, das die Knoten eines `Range` kopiert.
- [`Range.cloneRange()`](/de/docs/Web/API/Range/cloneRange)
  - : Gibt ein `Range`-Objekt mit identischen Grenzpunkten wie das geklonte `Range` zurück.
- [`Range.createContextualFragment()`](/de/docs/Web/API/Range/createContextualFragment)
  - : Gibt ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zurück, das aus einem gegebenen String mit Code erstellt wurde.
- [`Range.deleteContents()`](/de/docs/Web/API/Range/deleteContents)
  - : Entfernt den Inhalt eines `Range` aus dem [`Document`](/de/docs/Web/API/Document).
- [`Range.detach()`](/de/docs/Web/API/Range/detach) {{deprecated_inline}}
  - : Macht nichts. Wird zur Kompatibilität beibehalten.
- [`Range.extractContents()`](/de/docs/Web/API/Range/extractContents)
  - : Bewegt den Inhalt eines `Range` aus dem Dokumentbaum in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment).
- [`Range.getBoundingClientRect()`](/de/docs/Web/API/Range/getBoundingClientRect)
  - : Gibt ein [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekt zurück, das den gesamten Inhalt des `Range` umschließt; dies wäre die Vereinigung aller von [`range.getClientRects()`](/de/docs/Web/API/Range/getClientRects) zurückgegebenen Rechtecke.
- [`Range.getClientRects()`](/de/docs/Web/API/Range/getClientRects)
  - : Gibt eine Liste von [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekten zurück, die die Ergebnisse von [`Element.getClientRects()`](/de/docs/Web/API/Element/getClientRects) für alle Elemente im `Range` aggregiert.
- [`Range.isPointInRange()`](/de/docs/Web/API/Range/isPointInRange)
  - : Gibt einen `boolean` zurück, der anzeigt, ob der gegebene Punkt im `Range` liegt.
- [`Range.insertNode()`](/de/docs/Web/API/Range/insertNode)
  - : Fügt einen [`Node`](/de/docs/Web/API/Node) am Anfang eines `Range` ein.
- [`Range.intersectsNode()`](/de/docs/Web/API/Range/intersectsNode)
  - : Gibt einen `boolean` zurück, der anzeigt, ob der gegebene Knoten den `Range` schneidet.
- [`Range.selectNode()`](/de/docs/Web/API/Range/selectNode)
  - : Setzt das `Range`, um den [`Node`](/de/docs/Web/API/Node) und dessen Inhalte einzuschließen.
- [`Range.selectNodeContents()`](/de/docs/Web/API/Range/selectNodeContents)
  - : Setzt das `Range`, um die Inhalte eines [`Node`](/de/docs/Web/API/Node) einzuschließen.
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

- [Das DOM-Schnittstellenverzeichnis](/de/docs/Web/API/Document_Object_Model)
