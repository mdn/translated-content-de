---
title: "XMLSerializer: serializeToString()-Methode"
short-title: serializeToString()
slug: Web/API/XMLSerializer/serializeToString
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

{{APIRef("DOM Parsing")}}

Die [`XMLSerializer`](/de/docs/Web/API/XMLSerializer)-Methode **`serializeToString()`** erstellt eine Zeichenkette, die den angegebenen {{Glossary("DOM", "DOM")}}-Baum in {{Glossary("XML", "XML")}}-Form darstellt.

## Syntax

```js-nolint
serializeToString(rootNode)
```

### Parameter

- `rootNode`
  - : Der [`Node`](/de/docs/Web/API/Node), der als Wurzel des DOM-Baums oder Teilbaums verwendet werden soll, für den eine XML-Darstellung erstellt werden soll.

### Rückgabewert

Eine Zeichenkette, die die XML-Darstellung des angegebenen DOM-Baums enthält.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der angegebene `rootNode` kein kompatibler Knotentyp ist. Der Wurzelknoten muss entweder [`Node`](/de/docs/Web/API/Node) oder [`Attr`](/de/docs/Web/API/Attr) sein.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Baum nicht erfolgreich serialisiert werden konnte, wahrscheinlich aufgrund von Problemen mit der Kompatibilität der Inhalte mit der XML-Serialisierung.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine Serialisierung von HTML angefordert wurde, aber aufgrund von nicht wohlgeformten Inhalten nicht erfolgreich sein konnte.

## Hinweise zur Nutzung

### Kompatible Knotentypen

Der angegebene Wurzelknoten—und alle seine Nachkommen—müssen mit dem XML-Serialisierungsalgorithmus kompatibel sein. Der Wurzelknoten selbst muss entweder ein [`Node`](/de/docs/Web/API/Node)- oder [`Attr`](/de/docs/Web/API/Attr)-Objekt sein.

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

### Hinweise zur resultierenden XML

Einige Dinge sind in Bezug auf die von `serializeToString()` generierte XML-Ausgabe zu beachten:

- Für XML-Serialisierungen werden `Element`- und `Attr`-Knoten immer mit ihren [`namespaceURI`](/de/docs/Web/API/Element/namespaceURI) serialisiert. Dies kann bedeuten, dass ein zuvor angegebener [`prefix`](/de/docs/Web/API/Element/prefix) oder der Standard-Namespace möglicherweise entfernt oder geändert wird.
- Die resultierende XML-Darstellung ist mit dem HTML-Parser kompatibel.
- Elemente im HTML-Namespace, die keine Kindknoten haben (und damit leere Tags darstellen), werden mit Anfangs- und End-Tags serialisiert (`"<someelement></someelement>"`) anstelle des leeren Tag-Formats (`"<someelement/>"`).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Parsing und Serialisierung von XML](/de/docs/Web/XML/Guides/Parsing_and_serializing_XML)
- Serialisierung in HTML: [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) und [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML)
- Parsing von HTML oder XML, um einen DOM-Baum zu erstellen: [`DOMParser`](/de/docs/Web/API/DOMParser)
