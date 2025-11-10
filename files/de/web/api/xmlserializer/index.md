---
title: XMLSerializer
slug: Web/API/XMLSerializer
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{APIRef("HTML DOM")}}

Das `XMLSerializer`-Interface bietet die Methode [`serializeToString()`](/de/docs/Web/API/XMLSerializer/serializeToString), um einen XML-String zu erstellen, der einen {{Glossary("DOM", "DOM")}}-Baum darstellt.

> [!NOTE]
> Der resultierende XML-String ist nicht garantiert wohlgeformtes XML.

## Konstruktor

- [`XMLSerializer()`](/de/docs/Web/API/XMLSerializer/XMLSerializer)
  - : Erstellt ein neues `XMLSerializer`-Objekt.

## Instanzmethoden

- [`serializeToString()`](/de/docs/Web/API/XMLSerializer/serializeToString)
  - : Gibt den serialisierten Teilbaum eines Strings zurück.

## Beispiele

### Serialisieren von XML in einen String

Dieses Beispiel serialisiert ein gesamtes Dokument in einen XML-enthaltenden String.

```js
const s = new XMLSerializer();
const str = s.serializeToString(document);
saveXML(str);
```

Dies beinhaltet das Erstellen eines neuen `XMLSerializer`-Objekts, dann die Übergabe des zu serialisierenden [`Document`](/de/docs/Web/API/Document) an [`serializeToString()`](/de/docs/Web/API/XMLSerializer/serializeToString), was das XML-Äquivalent des Dokuments zurückgibt. `saveXML()` stellt eine Funktion dar, die den serialisierten String speichert.

### Einfügen von Knoten in ein DOM basierend auf XML

Dieses Beispiel verwendet die Methode [`Element.insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML), um einen neuen DOM-[`Node`](/de/docs/Web/API/Node) in den Body des [`Document`](/de/docs/Web/API/Document) einzufügen, basierend auf XML, das durch Serialisieren eines [`Element`](/de/docs/Web/API/Element)-Objekts erstellt wurde.

> [!NOTE]
> In der Praxis sollten Sie stattdessen normalerweise die Methode [`importNode()`](/de/docs/Web/API/Document/importNode) aufrufen, um den neuen Knoten in das DOM zu importieren, und dann eine der folgenden Methoden aufrufen, um den Knoten zum DOM-Baum hinzuzufügen:
>
> - Die Methoden [`Element.append()`](/de/docs/Web/API/Element/append)/[`Element.prepend()`](/de/docs/Web/API/Element/prepend) und [`Document.append()`](/de/docs/Web/API/Document/append)/[`Document.prepend()`](/de/docs/Web/API/Document/prepend).
> - Die Methode [`Element.replaceWith`](/de/docs/Web/API/Element/replaceWith) (um einen vorhandenen Knoten durch den neuen zu ersetzen)
> - Die Methode [`Element.insertAdjacentElement()`](/de/docs/Web/API/Element/insertAdjacentElement).

Da `insertAdjacentHTML()` einen String und keinen `Node` als seinen zweiten Parameter akzeptiert, wird `XMLSerializer` verwendet, um zuerst den Knoten in einen String zu konvertieren.

```js
const inp = document.createElement("input");
const XMLS = new XMLSerializer();
const inpSerialized = XMLS.serializeToString(inp); // First convert DOM node into a string

// Insert the newly created node into the document's body
document.body.insertAdjacentHTML("afterbegin", inpSerialized);
```

Der Code erstellt ein neues {{HTMLElement("input")}}-Element durch den Aufruf von [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und serialisiert es dann in XML mithilfe von [`serializeToString()`](/de/docs/Web/API/XMLSerializer/serializeToString).

Sobald dies abgeschlossen ist, wird `insertAdjacentHTML()` verwendet, um das `<input>`-Element in das DOM einzufügen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Parsing und Serialisieren von XML](/de/docs/Web/XML/Guides/Parsing_and_serializing_XML)
- [`DOMParser`](/de/docs/Web/API/DOMParser)
