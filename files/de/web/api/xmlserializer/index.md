---
title: XMLSerializer
slug: Web/API/XMLSerializer
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("HTML DOM")}}

Das `XMLSerializer` Interface stellt die [`serializeToString()`](/de/docs/Web/API/XMLSerializer/serializeToString) Methode zur Verfügung, um eine XML-Zeichenfolge zu erstellen, die einen {{Glossary("DOM", "DOM")}} Baum darstellt.

> [!NOTE]
> Die resultierende XML-Zeichenfolge ist nicht garantiert gut geformtes XML.

## Konstruktor

- [`XMLSerializer()`](/de/docs/Web/API/XMLSerializer/XMLSerializer)
  - : Erstellt ein neues `XMLSerializer` Objekt.

## Instanzmethoden

- [`serializeToString()`](/de/docs/Web/API/XMLSerializer/serializeToString)
  - : Gibt den serialisierten Unterbaum einer Zeichenfolge zurück.

## Beispiele

### Serialisieren von XML in eine Zeichenfolge

Dieses Beispiel serialisiert einfach ein gesamtes Dokument in eine Zeichenfolge, die XML enthält.

```js
const s = new XMLSerializer();
const str = s.serializeToString(document);
saveXML(str);
```

Dies beinhaltet das Erstellen eines neuen `XMLSerializer` Objekts und anschließend das Übergeben des zu serialisierenden [`Document`](/de/docs/Web/API/Document) an [`serializeToString()`](/de/docs/Web/API/XMLSerializer/serializeToString), was das XML-Äquivalent des Dokuments zurückgibt. `saveXML()` repräsentiert eine Funktion, die dann die serialisierte Zeichenfolge speichert.

### Einfügen von Nodes in ein DOM basierend auf XML

Dieses Beispiel verwendet die [`Element.insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML) Methode, um einen neuen DOM [`Node`](/de/docs/Web/API/Node) in den Body des [`Document`](/de/docs/Web/API/Document) einzufügen, basierend auf XML, das durch Serialisieren eines [`Element`](/de/docs/Web/API/Element) Objekts erstellt wurde.

> [!NOTE]
> In der realen Welt sollten Sie stattdessen normalerweise die [`importNode()`](/de/docs/Web/API/Document/importNode) Methode aufrufen, um den neuen Knoten in das DOM zu importieren und dann eine der folgenden Methoden verwenden, um den Knoten dem DOM-Baum hinzuzufügen:
>
> - Die [`Element.append()`](/de/docs/Web/API/Element/append)/[`Element.prepend()`](/de/docs/Web/API/Element/prepend) und [`Document.append()`](/de/docs/Web/API/Document/append)/[`Document.prepend()`](/de/docs/Web/API/Document/prepend) Methoden.
> - Die [`Element.replaceWith`](/de/docs/Web/API/Element/replaceWith) Methode (um einen bestehenden Knoten durch den neuen zu ersetzen).
> - Die [`Element.insertAdjacentElement()`](/de/docs/Web/API/Element/insertAdjacentElement) Methode.

Da `insertAdjacentHTML()` eine Zeichenfolge und keinen `Node` als zweiten Parameter akzeptiert, wird `XMLSerializer` verwendet, um den Knoten zuerst in eine Zeichenfolge zu konvertieren.

```js
const inp = document.createElement("input");
const XMLS = new XMLSerializer();
const inp_xmls = XMLS.serializeToString(inp); // First convert DOM node into a string

// Insert the newly created node into the document's body
document.body.insertAdjacentHTML("afterbegin", inp_xmls);
```

Der Code erstellt ein neues {{HTMLElement("input")}} Element durch Aufruf von [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und serialisiert es dann mit [`serializeToString()`](/de/docs/Web/API/XMLSerializer/serializeToString) in XML.

Sobald dies erledigt ist, wird `insertAdjacentHTML()` verwendet, um das `<input>` Element in das DOM einzufügen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Analysieren und Serialisieren von XML](/de/docs/Web/XML/Guides/Parsing_and_serializing_XML)
- [`DOMParser`](/de/docs/Web/API/DOMParser)
