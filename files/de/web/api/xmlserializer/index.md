---
title: XMLSerializer
slug: Web/API/XMLSerializer
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

{{APIRef("XMLSerializer")}}

Das `XMLSerializer`-Interface stellt die [`serializeToString()`](/de/docs/Web/API/XMLSerializer/serializeToString)-Methode zur Verfügung, um eine XML-Zeichenfolge zu erstellen, die einen {{Glossary("DOM", "DOM")}}-Baum repräsentiert.

> [!NOTE]
> Die resultierende XML-Zeichenfolge ist nicht garantiert wohlgeformtes XML.

## Konstruktor

- [`XMLSerializer()`](/de/docs/Web/API/XMLSerializer/XMLSerializer)
  - : Erstellt ein neues `XMLSerializer`-Objekt.

## Instanzmethoden

- [`serializeToString()`](/de/docs/Web/API/XMLSerializer/serializeToString)
  - : Gibt die serialisierte Teilstruktur als eine Zeichenfolge zurück.

## Beispiele

### Serialisieren von XML in eine Zeichenfolge

Dieses Beispiel serialisiert ein gesamtes Dokument in eine Zeichenfolge, die XML enthält.

```js
const s = new XMLSerializer();
const str = s.serializeToString(document);
saveXML(str);
```

Dies beinhaltet die Erstellung eines neuen `XMLSerializer`-Objekts und das Übergaben des zu serialisierenden [`Document`](/de/docs/Web/API/Document) an die [`serializeToString()`](/de/docs/Web/API/XMLSerializer/serializeToString)-Methode, die das XML-Äquivalent des Dokuments zurückgibt. `saveXML()` repräsentiert eine Funktion, die die serialisierte Zeichenfolge speichert.

### Einfügen von Knoten in einen DOM basierend auf XML

Dieses Beispiel verwendet die Methode [`Element.insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML), um einen neuen DOM-[`Node`](/de/docs/Web/API/Node) in den Body des [`Document`](/de/docs/Web/API/Document) einzufügen, basierend auf XML, das durch Serialisieren eines [`Element`](/de/docs/Web/API/Element)-Objekts erstellt wurde.

> [!NOTE]
> In der Praxis sollten Sie stattdessen in der Regel die [`importNode()`](/de/docs/Web/API/Document/importNode)-Methode aufrufen, um den neuen Knoten in den DOM zu importieren, und dann eine der folgenden Methoden aufrufen, um den Knoten dem DOM-Baum hinzuzufügen:
>
> - Die Methoden [`Element.append()`](/de/docs/Web/API/Element/append)/[`Element.prepend()`](/de/docs/Web/API/Element/prepend) und [`Document.append()`](/de/docs/Web/API/Document/append)/[`Document.prepend()`](/de/docs/Web/API/Document/prepend).
> - Die Methode [`Element.replaceWith`](/de/docs/Web/API/Element/replaceWith) (um einen bestehenden Knoten durch den neuen zu ersetzen).
> - Die Methode [`Element.insertAdjacentElement()`](/de/docs/Web/API/Element/insertAdjacentElement).

Da `insertAdjacentHTML()` eine Zeichenfolge und keinen `Node` als zweiten Parameter akzeptiert, wird `XMLSerializer` verwendet, um den Knoten zuerst in eine Zeichenfolge zu konvertieren.

```js
const inp = document.createElement("input");
const XMLS = new XMLSerializer();
const inp_xmls = XMLS.serializeToString(inp); // First convert DOM node into a string

// Insert the newly created node into the document's body
document.body.insertAdjacentHTML("afterbegin", inp_xmls);
```

Der Code erstellt ein neues {{HTMLElement("input")}}-Element durch den Aufruf von [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und serialisiert es anschließend mit [`serializeToString()`](/de/docs/Web/API/XMLSerializer/serializeToString) in XML.

Sobald dies erfolgt ist, wird `insertAdjacentHTML()` verwendet, um das `<input>`-Element in den DOM einzufügen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Analysieren und Serialisieren von XML](/de/docs/Web/XML/Guides/Parsing_and_serializing_XML)
- [`DOMParser`](/de/docs/Web/API/DOMParser)
