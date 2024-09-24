---
title: Document Object Model (DOM)
slug: Web/API/Document_Object_Model
l10n:
  sourceCommit: df2a728b3b3911a396a4b47d363e4a335a5c8065
---

{{DefaultAPISidebar("DOM")}}

Das **Document Object Model** (**DOM**) verbindet Webseiten mit Skripten oder Programmiersprachen, indem es die Struktur eines Dokuments—wie das HTML, das eine Webseite darstellt—im Speicher repräsentiert. In der Regel bezieht es sich auf JavaScript, auch wenn die Modellierung von HTML-, SVG- oder XML-Dokumenten als Objekte nicht Teil der Kernsprache JavaScript ist.

Das DOM stellt ein Dokument mit einem logischen Baum dar. Jeder Zweig des Baums endet in einem Knoten, und jeder Knoten enthält Objekte. DOM-Methoden ermöglichen den programmatischen Zugriff auf den Baum. Mit ihnen können Sie die Struktur, den Stil oder den Inhalt des Dokuments ändern.

Knoten können auch Ereignis-Handler an sich gebunden haben. Sobald ein Ereignis ausgelöst wird, werden die Ereignis-Handler ausgeführt.

Um mehr darüber zu erfahren, was das DOM ist und wie es Dokumente repräsentiert, lesen Sie unseren Artikel [Einführung in das DOM](/de/docs/Web/API/Document_Object_Model/Introduction).

## DOM-Schnittstellen

- {{DOMxRef("AbortController")}}
- {{DOMxRef("AbortSignal")}}
- {{DOMxRef("AbstractRange")}}
- {{DOMxRef("Attr")}}
- {{DOMxRef("CDATASection")}}
- {{DOMxRef("CharacterData")}}
- {{DOMxRef("Comment")}}
- {{DOMxRef("CustomEvent")}}
- {{DOMxRef("Document")}}
- {{DOMxRef("DocumentFragment")}}
- {{DOMxRef("DocumentType")}}
- {{DOMxRef("DOMError")}} {{Deprecated_Inline}}
- {{DOMxRef("DOMException")}}
- {{DOMxRef("DOMImplementation")}}
- {{DOMxRef("DOMParser")}}
- {{DOMxRef("DOMPoint")}}
- {{DOMxRef("DOMPointReadOnly")}}
- {{DOMxRef("DOMRect")}}
- {{DOMxRef("DOMTokenList")}}
- {{DOMxRef("Element")}}
- {{DOMxRef("Event")}}
- {{DOMxRef("EventTarget")}}
- {{DOMxRef("HTMLCollection")}}
- {{DOMxRef("MutationObserver")}}
- {{DOMxRef("MutationRecord")}}
- {{DOMxRef("NamedNodeMap")}}
- {{DOMxRef("Node")}}
- {{DOMxRef("NodeIterator")}}
- {{DOMxRef("NodeList")}}
- {{DOMxRef("ProcessingInstruction")}}
- {{DOMxRef("Range")}}
- {{DOMxRef("StaticRange")}}
- {{DOMxRef("Text")}}
- {{DOMxRef("TextDecoder")}}
- {{DOMxRef("TextEncoder")}}
- {{DOMxRef("TimeRanges")}}
- {{DOMxRef("TreeWalker")}}
- {{DOMxRef("XMLDocument")}}

### Veraltete DOM-Schnittstellen

Das Document Object Model wurde stark vereinfacht. Um dies zu erreichen, wurden die folgenden Schnittstellen in den verschiedenen DOM Level 3 oder früheren Spezifikationen entfernt. Sie stehen Web-Entwicklern nicht mehr zur Verfügung.

- `DOMConfiguration`
- `DOMErrorHandler`
- `DOMImplementationList`
- `DOMImplementationRegistry`
- `DOMImplementationSource`
- `DOMLocator`
- `DOMObject`
- `DOMSettableTokenList`
- `DOMUserData`
- `ElementTraversal`
- `Entity`
- `EntityReference`
- `NameList`
- `Notation`
- `TypeInfo`
- `UserDataHandler`

## HTML DOM

Ein Dokument, das HTML enthält, wird mithilfe der {{DOMxRef("Document")}}-Schnittstelle beschrieben, die durch die HTML-Spezifikation erweitert wird, um verschiedene HTML-spezifische Funktionen einzuschließen. Insbesondere wird die {{domxref("Element")}}-Schnittstelle erweitert, um {{domxref("HTMLElement")}} und verschiedene Unterklassen zu werden, die jeweils ein oder mehrere eng verwandte Elemente darstellen.

Die HTML DOM API bietet Zugriff auf verschiedene Browserfunktionen wie Tabs und Fenster, CSS-Stile und Stylesheets, den Browserverlauf usw. Diese Schnittstellen werden ausführlicher in der [HTML DOM API](/de/docs/Web/API/HTML_DOM_API)-Dokumentation besprochen.

## SVG DOM

Ähnlich wird ein Dokument, das SVG enthält, ebenfalls mithilfe der {{DOMxRef("Document")}}-Schnittstelle beschrieben, die durch die SVG-Spezifikation erweitert wird, um verschiedene SVG-spezifische Funktionen einzuschließen. Insbesondere wird die {{domxref("Element")}}-Schnittstelle erweitert, um {{domxref("SVGElement")}} und verschiedene Unterklassen zu werden, die jeweils ein Element oder eine Gruppe eng verwandter Elemente darstellen. Diese Schnittstellen werden ausführlicher in der [SVG API](/de/docs/Web/API/SVG_API)-Dokumentation besprochen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [DOM-Beispiele](/de/docs/Web/API/Document_Object_Model/Examples)
- [CSS Object Model (CSSOM)](/de/docs/Web/API/CSS_Object_Model)
