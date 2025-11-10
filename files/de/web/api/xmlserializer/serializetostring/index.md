---
title: "XMLSerializer: serializeToString() Methode"
short-title: serializeToString()
slug: Web/API/XMLSerializer/serializeToString
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("HTML DOM")}}

Die Methode **`serializeToString()`** des [`XMLSerializer`](/de/docs/Web/API/XMLSerializer) konstruiert eine Zeichenkette, die den angegebenen {{Glossary("DOM", "DOM")}}-Baum in {{Glossary("XML", "XML")}}-Form darstellt.

## Syntax

```js-nolint
serializeToString(rootNode)
```

### Parameter

- `rootNode`
  - : Der [`Node`](/de/docs/Web/API/Node), der als Wurzel des DOM-Baums oder Teilbaums verwendet wird, für den eine XML-Darstellung erstellt werden soll.

### Rückgabewert

Eine Zeichenkette, die die XML-Darstellung des angegebenen DOM-Baums enthält.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der angegebene `rootNode` kein kompatibler Knotentyp ist. Der Wurzelknoten muss entweder ein [`Node`](/de/docs/Web/API/Node) oder ein [`Attr`](/de/docs/Web/API/Attr) sein.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Baum nicht erfolgreich serialisiert werden konnte, wahrscheinlich aufgrund von Problemen mit der Kompatibilität des Inhalts mit der XML-Serialisierung.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine Serialisierung von HTML angefordert wurde, aber aufgrund des nicht wohlgeformten Inhalts nicht erfolgreich war.

## Anwendungshinweise

### Kompatible Knotentypen

Der angegebene Wurzelknoten und alle seine Nachkommen müssen mit dem XML-Serialisierungsalgorithmus kompatibel sein. Der Wurzelknoten selbst muss entweder ein [`Node`](/de/docs/Web/API/Node) oder ein [`Attr`](/de/docs/Web/API/Attr)-Objekt sein.

Die folgenden Typen sind zusätzlich zu `Node` und `Attr` als Nachkommen des Wurzelknotens zulässig:

- [`DocumentType`](/de/docs/Web/API/DocumentType)
- [`Document`](/de/docs/Web/API/Document)
- [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)
- [`Element`](/de/docs/Web/API/Element)
- [`Comment`](/de/docs/Web/API/Comment)
- [`Text`](/de/docs/Web/API/Text)
- [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction)
- [`Attr`](/de/docs/Web/API/Attr)

Wenn ein anderer Typ angetroffen wird, wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.

### Anmerkungen zum resultierenden XML

Es gibt einige Dinge, die bezüglich der von `serializeToString()` erzeugten XML-Ausgabe beachtet werden sollten:

- Für XML-Serialisierungen werden `Element`- und `Attr`-Knoten immer mit ihrem [`namespaceURI`](/de/docs/Web/API/Element/namespaceURI) intakt serialisiert. Dies kann bedeuten, dass ein zuvor angegebener [`prefix`](/de/docs/Web/API/Element/prefix) oder Standard-Namensraum möglicherweise entfernt oder geändert wird.
- Das resultierende XML ist mit dem HTML-Parser kompatibel.
- Elemente im HTML-Namensraum, die keine Knoten enthalten (und damit leere Tags darstellen), werden mit sowohl Anfangs- als auch End-Tags (`"<someelement></someelement>"`) anstelle des leeren-Element-Tags (`"<someelement/>"`) serialisiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Parsen und Serialisieren von XML](/de/docs/Web/XML/Guides/Parsing_and_serializing_XML)
- Serialisieren nach HTML: [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) und [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML)
- Parsen von HTML oder XML zum Erstellen eines DOM-Baums: [`DOMParser`](/de/docs/Web/API/DOMParser)
