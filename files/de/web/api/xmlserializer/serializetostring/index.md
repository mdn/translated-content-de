---
title: "XMLSerializer: serializeToString() Methode"
short-title: serializeToString()
slug: Web/API/XMLSerializer/serializeToString
l10n:
  sourceCommit: fe468a9966c87cac081d3986b3332d0a51c4e2ee
---

{{APIRef("DOM Parsing")}}

Die Methode **`serializeToString()`** des [`XMLSerializer`](/de/docs/Web/API/XMLSerializer) konstruiert einen String, der den angegebenen [DOM](/de/docs/Glossary/DOM)-Baum in [XML](/de/docs/Glossary/XML)-Form darstellt.

## Syntax

```js-nolint
serializeToString(rootNode)
```

### Parameter

- `rootNode`
  - : Der [`Node`](/de/docs/Web/API/Node), der als Wurzel des DOM-Baums oder Teilbaums verwendet wird, für den eine XML-Darstellung erstellt werden soll.

### Rückgabewert

Ein String, der die XML-Darstellung des angegebenen DOM-Baums enthält.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der angegebene `rootNode` kein kompatibler Knotentyp ist. Der Wurzelknoten muss entweder ein [`Node`](/de/docs/Web/API/Node) oder [`Attr`](/de/docs/Web/API/Attr) sein.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Baum nicht erfolgreich serialisiert werden konnte, wahrscheinlich aufgrund von Kompatibilitätsproblemen des Inhalts mit der XML-Serialisierung.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine HTML-Serialisierung angefordert wurde, aber nicht erfolgreich war, da der Inhalt nicht wohlgeformt ist.

## Verwendungshinweise

### Kompatible Knotentypen

Der angegebene Wurzelknoten – und alle seine Nachkommen – müssen mit dem XML-Serialisierungsalgorithmus kompatibel sein. Der Wurzelknoten selbst muss entweder ein [`Node`](/de/docs/Web/API/Node) oder ein [`Attr`](/de/docs/Web/API/Attr)-Objekt sein.

Die folgenden Typen sind zusätzlich zu `Node` und `Attr` als Nachkommen des Wurzelknotens erlaubt:

- [`DocumentType`](/de/docs/Web/API/DocumentType)
- [`Document`](/de/docs/Web/API/Document)
- [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)
- [`Element`](/de/docs/Web/API/Element)
- [`Comment`](/de/docs/Web/API/Comment)
- [`Text`](/de/docs/Web/API/Text)
- [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction)
- [`Attr`](/de/docs/Web/API/Attr)

Wenn ein anderer Typ angetroffen wird, wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.

### Hinweise zu dem resultierenden XML

Es gibt einige Dinge, die es zu beachten gilt hinsichtlich des von `serializeToString()` ausgegebenen XML:

- Für XML-Serialisierungen werden `Element`- und `Attr`-Knoten immer mit ihrem [`namespaceURI`](/de/docs/Web/API/Element/namespaceURI) intakt serialisiert. Dies kann bedeuten, dass ein zuvor spezifiziertes [`prefix`](/de/docs/Web/API/Element/prefix) oder Standard-Namespace gegebenenfalls entfernt oder geändert wird.
- Das resultierende XML ist mit dem HTML-Parser kompatibel.
- Elemente im HTML-Namespace, die keine Kindknoten haben (und somit leere Tags darstellen), werden mit Anfangs- und End-Tags (`"<someelement></someelement>"`) statt mit einem Leer-Element-Tag (`"<someelement/>"`) serialisiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [XML analysieren und serialisieren](/de/docs/Web/XML/Parsing_and_serializing_XML)
- Serialisieren zu HTML: [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) und
  [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML)
- HTML oder XML parsen, um einen DOM-Baum zu erstellen: [`DOMParser`](/de/docs/Web/API/DOMParser)
