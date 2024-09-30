---
title: Document Object Model (DOM)
slug: Web/API/Document_Object_Model
l10n:
  sourceCommit: df2a728b3b3911a396a4b47d363e4a335a5c8065
---

{{DefaultAPISidebar("DOM")}}

Das **Document Object Model** (**DOM**) verbindet Webseiten mit Skripten oder Programmiersprachen, indem es die Struktur eines Dokuments—wie das HTML, das eine Webseite darstellt—in der Speicherung repräsentiert. Gewöhnlich bezieht es sich auf JavaScript, auch wenn die Modellierung von HTML-, SVG- oder XML-Dokumenten als Objekte nicht Teil der Kernsprache von JavaScript ist.

Das DOM repräsentiert ein Dokument mit einem logischen Baum. Jeder Zweig des Baums endet in einem Knoten, und jeder Knoten enthält Objekte. DOM-Methoden ermöglichen den programmatischen Zugriff auf den Baum. Mit ihnen können Sie die Struktur, den Stil oder den Inhalt des Dokuments ändern.

Knoten können auch Ereignishandler angehängt haben. Sobald ein Ereignis ausgelöst wird, werden die Ereignishandler ausgeführt.

Um mehr darüber zu erfahren, was das DOM ist und wie es Dokumente repräsentiert, lesen Sie unseren Artikel [Einführung in das DOM](/de/docs/Web/API/Document_Object_Model/Introduction).

## DOM-Schnittstellen

- [`AbortController`](/de/docs/Web/API/AbortController)
- [`AbortSignal`](/de/docs/Web/API/AbortSignal)
- [`AbstractRange`](/de/docs/Web/API/AbstractRange)
- [`Attr`](/de/docs/Web/API/Attr)
- [`CDATASection`](/de/docs/Web/API/CDATASection)
- [`CharacterData`](/de/docs/Web/API/CharacterData)
- [`Comment`](/de/docs/Web/API/Comment)
- [`CustomEvent`](/de/docs/Web/API/CustomEvent)
- [`Document`](/de/docs/Web/API/Document)
- [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)
- [`DocumentType`](/de/docs/Web/API/DocumentType)
- [`DOMError`](/de/docs/Web/API/DOMError) {{Deprecated_Inline}}
- [`DOMException`](/de/docs/Web/API/DOMException)
- [`DOMImplementation`](/de/docs/Web/API/DOMImplementation)
- [`DOMParser`](/de/docs/Web/API/DOMParser)
- [`DOMPoint`](/de/docs/Web/API/DOMPoint)
- [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly)
- [`DOMRect`](/de/docs/Web/API/DOMRect)
- [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)
- [`Element`](/de/docs/Web/API/Element)
- [`Event`](/de/docs/Web/API/Event)
- [`EventTarget`](/de/docs/Web/API/EventTarget)
- [`HTMLCollection`](/de/docs/Web/API/HTMLCollection)
- [`MutationObserver`](/de/docs/Web/API/MutationObserver)
- [`MutationRecord`](/de/docs/Web/API/MutationRecord)
- [`NamedNodeMap`](/de/docs/Web/API/NamedNodeMap)
- [`Node`](/de/docs/Web/API/Node)
- [`NodeIterator`](/de/docs/Web/API/NodeIterator)
- [`NodeList`](/de/docs/Web/API/NodeList)
- [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction)
- [`Range`](/de/docs/Web/API/Range)
- [`StaticRange`](/de/docs/Web/API/StaticRange)
- [`Text`](/de/docs/Web/API/Text)
- [`TextDecoder`](/de/docs/Web/API/TextDecoder)
- [`TextEncoder`](/de/docs/Web/API/TextEncoder)
- [`TimeRanges`](/de/docs/Web/API/TimeRanges)
- [`TreeWalker`](/de/docs/Web/API/TreeWalker)
- [`XMLDocument`](/de/docs/Web/API/XMLDocument)

### Veraltete DOM-Schnittstellen

Das Document Object Model wurde stark vereinfacht. Um dies zu erreichen, wurden die folgenden Schnittstellen in den verschiedenen DOM Level 3 oder früheren Spezifikationen entfernt. Sie stehen Webentwicklern nicht mehr zur Verfügung.

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

Ein Dokument, das HTML enthält, wird mithilfe der [`Document`](/de/docs/Web/API/Document)-Schnittstelle beschrieben, die durch die HTML-Spezifikation erweitert wird, um verschiedene HTML-spezifische Funktionen einzuschließen. Insbesondere wird die [`Element`](/de/docs/Web/API/Element)-Schnittstelle erweitert, um zu [`HTMLElement`](/de/docs/Web/API/HTMLElement) und verschiedenen Unterklassen zu werden, die jeweils eines oder eine Familie von eng verwandten Elementen darstellen.

Die HTML DOM API bietet Zugriff auf verschiedene Browserfunktionen wie Tabs und Fenster, CSS-Stile und Stylesheets, den Browserverlauf usw. Diese Schnittstellen werden ausführlicher in der [HTML DOM API](/de/docs/Web/API/HTML_DOM_API) Dokumentation diskutiert.

## SVG DOM

Ähnlich wird ein Dokument, das SVG enthält, auch mithilfe der [`Document`](/de/docs/Web/API/Document)-Schnittstelle beschrieben, die durch die SVG-Spezifikation erweitert wird, um verschiedene SVG-spezifische Funktionen einzuschließen. Insbesondere wird die [`Element`](/de/docs/Web/API/Element)-Schnittstelle erweitert, um zu [`SVGElement`](/de/docs/Web/API/SVGElement) und verschiedenen Unterklassen zu werden, die jeweils ein Element oder eine Familie von eng verwandten Elementen darstellen. Diese Schnittstellen werden ausführlicher in der [SVG API](/de/docs/Web/API/SVG_API) Dokumentation diskutiert.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [DOM-Beispiele](/de/docs/Web/API/Document_Object_Model/Examples)
- [CSS Object Model (CSSOM)](/de/docs/Web/API/CSS_Object_Model)
