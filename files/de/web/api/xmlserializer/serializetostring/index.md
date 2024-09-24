---
title: "XMLSerializer: serializeToString() Methode"
short-title: serializeToString()
slug: Web/API/XMLSerializer/serializeToString
l10n:
  sourceCommit: fe468a9966c87cac081d3986b3332d0a51c4e2ee
---

{{APIRef("DOM Parsing")}}

Die {{domxref("XMLSerializer")}} Methode
**`serializeToString()`** erstellt einen String, der den angegebenen {{Glossary("DOM")}}-Baum in {{Glossary("XML")}}-Form darstellt.

## Syntax

```js-nolint
serializeToString(rootNode)
```

### Parameter

- `rootNode`
  - : Der {{domxref("Node")}}, der als Wurzel des DOM-Baums oder Teilbaums verwendet werden soll, für den eine XML-Darstellung erzeugt werden soll.

### Rückgabewert

Ein String, der die XML-Darstellung des angegebenen DOM-Baums enthält.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der angegebene `rootNode` kein kompatibler Knotentyp ist. Der Wurzelknoten muss entweder {{domxref("Node")}} oder {{domxref("Attr")}} sein.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Baum nicht erfolgreich serialisiert werden konnte, wahrscheinlich aufgrund von Problemen mit der Kompatibilität des Inhalts mit der XML-Serialisierung.
- `SyntaxError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn eine HTML-Serialisierung angefordert wurde, die jedoch aufgrund von nicht wohlgeformtem Inhalt nicht gelingen konnte.

## Hinweise zur Verwendung

### Kompatible Knotentypen

Der angegebene Wurzelknoten und alle seine Nachkommen müssen mit dem XML-Serialisierungsalgorithmus kompatibel sein. Der Wurzelknoten selbst muss entweder ein {{domxref("Node")}} oder ein {{domxref("Attr")}}-Objekt sein.

Die folgenden Typen sind ebenfalls als Nachkommen des Wurzelknotens erlaubt, zusätzlich zu `Node` und `Attr`:

- {{domxref("DocumentType")}}
- {{domxref("Document")}}
- {{domxref("DocumentFragment")}}
- {{domxref("Element")}}
- {{domxref("Comment")}}
- {{domxref("Text")}}
- {{domxref("ProcessingInstruction")}}
- {{domxref("Attr")}}

Wenn ein anderer Typ gefunden wird, wird eine {{jsxref("TypeError")}} Ausnahme ausgelöst.

### Hinweise zum resultierenden XML

Es gibt einige Dinge, die man über das von `serializeToString()` ausgegebene XML beachten sollte:

- Für XML-Serialisierungen werden `Element`- und `Attr`-Knoten immer mit ihrem {{domxref("Element.namespaceURI", "namespaceURI")}} serialisiert. Dies kann bedeuten, dass ein zuvor spezifizierter {{domxref("Element.prefix", "Prefix")}} oder Standardsnamespace fallen gelassen oder geändert wird.
- Das resultierende XML ist mit dem HTML-Parser kompatibel.
- Elemente im HTML-Namespace, die keine Kindknoten haben (und damit leere Tags darstellen), werden mit sowohl Anfangs- als auch Endtags serialisiert (`"<someelement></someelement>"`) anstatt das leerelement-Tag (`"<someelement/>"`) zu verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [XML parsen und serialisieren](/de/docs/Web/XML/Parsing_and_serializing_XML)
- Serialisieren zu HTML: {{domxref("Element.innerHTML")}} und {{domxref("Element.outerHTML")}}
- HTML oder XML parsen, um einen DOM-Baum zu erstellen: {{domxref("DOMParser")}}
