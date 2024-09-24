---
title: Bereich
slug: Web/API/Range
l10n:
  sourceCommit: 2937558d5ed1e03d7f60b2de71dd9c17f490166e
---

{{APIRef("DOM")}}

Die **`Range`**-Schnittstelle repräsentiert ein Fragment eines Dokuments, das Knoten und Teile von Textknoten enthalten kann.

Ein Bereich kann mit der Methode {{ domxref("Document.createRange()") }} erstellt werden. Bereichsobjekte können auch mit der Methode {{ domxref("Selection/getRangeAt", "getRangeAt()") }} des {{ domxref("Selection") }}-Objekts oder der Methode {{domxref("Document/caretRangeFromPoint", "caretRangeFromPoint()")}} des {{domxref("Document")}}-Objekts abgerufen werden.

Es gibt auch den {{domxref("Range.Range()", "Range()")}}-Konstruktor.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Es gibt keine geerbten Eigenschaften._

- {{domxref("Range.collapsed")}} {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob die Start- und Endpunkte des Bereichs an derselben Position liegen.
- {{domxref("Range.commonAncestorContainer")}} {{ReadOnlyInline}}
  - : Gibt den tiefsten {{ domxref("Node") }} zurück, der die `startContainer`- und `endContainer`-Knoten enthält.
- {{domxref("Range.endContainer")}} {{ReadOnlyInline}}
  - : Gibt den {{ domxref("Node") }} zurück, in dem der `Range` endet.
- {{domxref("Range.endOffset")}} {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die angibt, wo im `endContainer` der `Range` endet.
- {{domxref("Range.startContainer")}} {{ReadOnlyInline}}
  - : Gibt den {{ domxref("Node") }} zurück, in dem der `Range` beginnt.
- {{domxref("Range.startOffset")}} {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die angibt, wo im `startContainer` der `Range` beginnt.

## Konstruktor

- {{ domxref("Range.Range()", "Range()") }}
  - : Gibt ein `Range`-Objekt mit dem globalen {{domxref("Document")}} als Start und Ende zurück.

## Instanzmethoden

_Es gibt keine geerbten Methoden._

- {{ domxref("Range.collapse()")}}
  - : Kollabiert den `Range` zu einem seiner Grenzpunkte.
- {{ domxref("Range.compareBoundaryPoints()")}}
  - : Vergleicht die Grenzpunkte des `Range` mit einem anderen `Range`.
- {{ domxref("Range.compareNode()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt eine Konstante zurück, die angibt, ob der {{domxref("Node")}} vor, nach, innerhalb oder umgebend den Bereich ist.
- {{ domxref("Range.comparePoint()")}}
  - : Gibt -1, 0 oder 1 zurück, um anzuzeigen, ob der Punkt vor, innerhalb oder nach dem `Range` auftritt.
- {{ domxref("Range.cloneContents()")}}
  - : Gibt ein {{ domxref("DocumentFragment") }} zurück, das die Knoten eines `Range` kopiert.
- {{ domxref("Range.cloneRange()")}}
  - : Gibt ein `Range`-Objekt mit identischen Grenzpunkten zum geklonten `Range` zurück.
- {{ domxref("Range.createContextualFragment()")}}
  - : Gibt ein {{ domxref("DocumentFragment") }} zurück, das aus einem gegebenen Code-String erstellt wurde.
- {{ domxref("Range.deleteContents()")}}
  - : Entfernt den Inhalt eines `Range` aus dem {{ domxref("Document") }}.
- {{ domxref("Range.detach()")}}
  - : Macht nichts. Aus Kompatibilitätsgründen beibehalten.
- {{ domxref("Range.extractContents()")}}
  - : Verschiebt Inhalte eines `Range` aus dem Dokumentbaum in ein {{ domxref("DocumentFragment") }}.
- {{ domxref("Range.getBoundingClientRect()") }}
  - : Gibt ein {{ domxref("DOMRect") }}-Objekt zurück, das die gesamten Inhalte des `Range` umschließt; dies wäre die Vereinigung aller von {{ domxref("range.getClientRects()") }} zurückgegebenen Rechtecke.
- {{ domxref("Range.getClientRects()") }}
  - : Gibt eine Liste von {{ domxref("DOMRect") }}-Objekten zurück, die die Ergebnisse von {{ domxref("Element.getClientRects()") }} für alle Elemente im `Range` aggregiert.
- {{ domxref("Range.isPointInRange()")}}
  - : Gibt einen `boolean` zurück, der angibt, ob der gegebene Punkt im `Range` liegt.
- {{ domxref("Range.insertNode()")}}
  - : Fügt einen {{ domxref("Node") }} am Anfang eines `Range` ein.
- {{ domxref("Range.intersectsNode()")}}
  - : Gibt einen `boolean` zurück, der angibt, ob der gegebene Knoten den `Range` schneidet.
- {{ domxref("Range.selectNode()")}}
  - : Setzt den `Range` so, dass er den {{ domxref("Node") }} und seinen Inhalt enthält.
- {{ domxref("Range.selectNodeContents()")}}
  - : Setzt den `Range` so, dass er den Inhalt eines {{ domxref("Node") }} enthält.
- {{ domxref("Range.setEnd()")}}
  - : Setzt die Endposition eines `Range`.
- {{ domxref("Range.setStart()")}}
  - : Setzt die Startposition eines `Range`.
- {{ domxref("Range.setEndAfter()")}}
  - : Setzt die Endposition eines `Range` relativ zu einem anderen {{ domxref("Node") }}.
- {{ domxref("Range.setEndBefore()")}}
  - : Setzt die Endposition eines `Range` relativ zu einem anderen {{ domxref("Node") }}.
- {{ domxref("Range.setStartAfter()")}}
  - : Setzt die Startposition eines `Range` relativ zu einem anderen {{ domxref("Node") }}.
- {{ domxref("Range.setStartBefore()")}}
  - : Setzt die Startposition eines `Range` relativ zu einem anderen {{ domxref("Node") }}.
- {{ domxref("Range.surroundContents()")}}
  - : Verschiebt den Inhalt eines `Range` in einen neuen {{ domxref("Node") }}.
- {{ domxref("Range.toString()")}}
  - : Gibt den Text des `Range` zurück.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Die DOM-Schnittstellenübersicht](/de/docs/Web/API/Document_Object_Model)
