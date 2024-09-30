---
title: "XMLSerializer: serializeToString()-Methode"
short-title: serializeToString()
slug: Web/API/XMLSerializer/serializeToString
l10n:
  sourceCommit: fe468a9966c87cac081d3986b3332d0a51c4e2ee
---

{{APIRef("DOM Parsing")}}

Die [`XMLSerializer`](/de/docs/Web/API/XMLSerializer)-Methode **`serializeToString()`** erstellt einen String, der den angegebenen [DOM](/de/docs/Glossary/DOM)-Baum in [XML](/de/docs/Glossary/XML)-Form darstellt.

## Syntax

```js-nolint
serializeToString(rootNode)
```

### Parameter

- `rootNode`
  - : Der [`Node`](/de/docs/Web/API/Node), der als Wurzel des DOM-Baums oder Teilbaums verwendet werden soll, für den eine XML-Darstellung erstellt werden soll.

### Rückgabewert

Ein String, der die XML-Darstellung des angegebenen DOM-Baums enthält.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der angegebene `rootNode` kein kompatibler Knotentyp ist. Der Wurzelknoten muss entweder [`Node`](/de/docs/Web/API/Node) oder [`Attr`](/de/docs/Web/API/Attr) sein.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Baum nicht erfolgreich serialisiert werden konnte, wahrscheinlich aufgrund von Problemen mit der Kompatibilität des Inhalts mit der XML-Serialisierung.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine Serialisierung von HTML angefordert wurde, aber nicht gelingen konnte, weil der Inhalt nicht wohlgeformt ist.

## Anwendungshinweise

### Kompatible Knotentypen

Der angegebene Wurzelknoten—und alle seine Nachkommen—müssen mit dem XML-Serialisierungsalgorithmus kompatibel sein. Der Wurzelknoten selbst muss entweder ein [`Node`](/de/docs/Web/API/Node) oder ein [`Attr`](/de/docs/Web/API/Attr)-Objekt sein.

Die folgenden Typen sind auch als Nachkommen des Wurzelknotens zulässig, zusätzlich zu `Node` und `Attr`:

- [`DocumentType`](/de/docs/Web/API/DocumentType)
- [`Document`](/de/docs/Web/API/Document)
- [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)
- [`Element`](/de/docs/Web/API/Element)
- [`Comment`](/de/docs/Web/API/Comment)
- [`Text`](/de/docs/Web/API/Text)
- [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction)
- [`Attr`](/de/docs/Web/API/Attr)

Wenn ein anderer Typ angetroffen wird, wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.

### Hinweise zum resultierenden XML

Es gibt einige Punkte, die bezüglich des von `serializeToString()` ausgegebenen XML beachtenswert sind:

- Für XML-Serialisierungen werden `Element`- und `Attr`-Knoten immer mit ihrem [`namespaceURI`](/de/docs/Web/API/Element/namespaceURI) serialisiert. Dies kann bedeuten, dass ein zuvor angegebener [`prefix`](/de/docs/Web/API/Element/prefix) oder Standard-Namensraum entfernt oder geändert wird.
- Das resultierende XML ist mit dem HTML-Parser kompatibel.
- Elemente im HTML-Namensraum, die keine Kindknoten haben (damit leere Tags darstellen), werden mit sowohl Anfangs- als auch End-Tags (`"<someelement></someelement>"`) serialisiert, anstelle des leeren Elemente-Tags (`"<someelement/>"`).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Parsen und Serialisieren von XML](/de/docs/Web/XML/Parsing_and_serializing_XML)
- Serialisierung zu HTML: [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) und
  [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML)
- Parsen von HTML oder XML zur Erstellung eines DOM-Baums: [`DOMParser`](/de/docs/Web/API/DOMParser)
