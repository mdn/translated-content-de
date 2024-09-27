---
title: XMLSerializer
slug: Web/API/XMLSerializer
l10n:
  sourceCommit: 6bf0c1b34748426927b018ad4a969c2ff5ae1812
---

{{APIRef("XMLSerializer")}}

Das `XMLSerializer`-Interface stellt die [`serializeToString()`](/de/docs/Web/API/XMLSerializer/serializeToString)-Methode zur Verfügung, um einen XML-String zu erstellen, der einen [DOM](/de/docs/Glossary/DOM)-Baum darstellt.

> [!NOTE]
> Der resultierende XML-String muss nicht zwingend wohlgeformtes XML sein.

## Konstruktor

- [`XMLSerializer()`](/de/docs/Web/API/XMLSerializer/XMLSerializer)
  - : Erstellt ein neues `XMLSerializer`-Objekt.

## Instanzmethoden

- [`serializeToString()`](/de/docs/Web/API/XMLSerializer/serializeToString)
  - : Gibt den serialisierten Teilbaum als String zurück.

## Beispiele

### Serialisierung von XML in einen String

Dieses Beispiel serialisiert ein ganzes Dokument in einen String, der XML enthält.

```js
const s = new XMLSerializer();
const str = s.serializeToString(document);
saveXML(str);
```

Dies beinhaltet das Erstellen eines neuen `XMLSerializer`-Objekts und anschließend das Übergeben des zu serialisierenden [`Document`](/de/docs/Web/API/Document) an [`serializeToString()`](/de/docs/Web/API/XMLSerializer/serializeToString), welches das XML-Äquivalent des Dokuments zurückgibt. `saveXML()` repräsentiert eine Funktion, die dann den serialisierten String speichert.

### Einfügen von Knoten in ein DOM basierend auf XML

Dieses Beispiel verwendet die [`Element.insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML)-Methode, um ein neues DOM-[`Node`](/de/docs/Web/API/Node) in den Body des [`Document`](/de/docs/Web/API/Document) einzufügen, basierend auf XML, das durch Serialisieren eines [`Element`](/de/docs/Web/API/Element)-Objekts erstellt wurde.

> [!NOTE]
> In der Praxis sollten Sie normalerweise stattdessen die [`importNode()`](/de/docs/Web/API/Document/importNode)-Methode aufrufen, um den neuen Knoten in das DOM zu importieren, und dann eine der folgenden Methoden aufrufen, um den Knoten zum DOM-Baum hinzuzufügen:
>
> - Die [`Element.append()`](/de/docs/Web/API/Element/append)/[`Element.prepend()`](/de/docs/Web/API/Element/prepend) und [`Document.append()`](/de/docs/Web/API/Document/append)/[`Document.prepend()`](/de/docs/Web/API/Document/prepend)-Methoden.
> - Die [`Element.replaceWith`](/de/docs/Web/API/Element/replaceWith)-Methode (um einen vorhandenen Knoten durch den neuen zu ersetzen).
> - Die [`Element.insertAdjacentElement()`](/de/docs/Web/API/Element/insertAdjacentElement)-Methode.

Da `insertAdjacentHTML()` einen String und keinen `Node` als seinen zweiten Parameter akzeptiert, wird `XMLSerializer` zuerst verwendet, um den Knoten in einen String zu konvertieren.

```js
const inp = document.createElement("input");
const XMLS = new XMLSerializer();
const inp_xmls = XMLS.serializeToString(inp); // First convert DOM node into a string

// Insert the newly created node into the document's body
document.body.insertAdjacentHTML("afterbegin", inp_xmls);
```

Der Code erstellt ein neues {{HTMLElement("input")}}-Element, indem er [`Document.createElement()`](/de/docs/Web/API/Document/createElement) aufruft, und serialisiert es dann mit [`serializeToString()`](/de/docs/Web/API/XMLSerializer/serializeToString) in XML.

Sobald dies geschehen ist, wird `insertAdjacentHTML()` verwendet, um das `<input>`-Element in das DOM einzufügen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Parsing und Serialisierung von XML](/de/docs/Web/XML/Parsing_and_serializing_XML)
- [`DOMParser`](/de/docs/Web/API/DOMParser)
