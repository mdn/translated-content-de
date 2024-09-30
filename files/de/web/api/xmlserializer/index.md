---
title: XMLSerializer
slug: Web/API/XMLSerializer
l10n:
  sourceCommit: 6bf0c1b34748426927b018ad4a969c2ff5ae1812
---

{{APIRef("XMLSerializer")}}

Das `XMLSerializer`-Interface stellt die Methode [`serializeToString()`](/de/docs/Web/API/XMLSerializer/serializeToString) bereit, um eine XML-Zeichenkette zu erstellen, die einen [DOM](/de/docs/Glossary/DOM)-Baum darstellt.

> [!NOTE]
> Die resultierende XML-Zeichenkette ist nicht garantiert als gut geformtes XML.

## Konstruktor

- [`XMLSerializer()`](/de/docs/Web/API/XMLSerializer/XMLSerializer)
  - : Erstellt ein neues `XMLSerializer`-Objekt.

## Instanzmethoden

- [`serializeToString()`](/de/docs/Web/API/XMLSerializer/serializeToString)
  - : Gibt den serialisierten Teilbaum einer Zeichenkette zurück.

## Beispiele

### Serialisieren von XML in eine Zeichenkette

Dieses Beispiel serialisiert ein gesamtes Dokument in eine Zeichenkette, die XML enthält.

```js
const s = new XMLSerializer();
const str = s.serializeToString(document);
saveXML(str);
```

Dies umfasst das Erstellen eines neuen `XMLSerializer`-Objekts und das Übergeben des [`Document`](/de/docs/Web/API/Document), das mit [`serializeToString()`](/de/docs/Web/API/XMLSerializer/serializeToString) serialisiert wird. Dies gibt das XML-Äquivalent des Dokuments zurück. `saveXML()` repräsentiert eine Funktion, die dann die serialisierte Zeichenkette speichert.

### Einfügen von Knoten in ein DOM basierend auf XML

Dieses Beispiel verwendet die Methode [`Element.insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML), um einen neuen DOM-[`Node`](/de/docs/Web/API/Node) in den Body des [`Document`](/de/docs/Web/API/Document) einzufügen, basierend auf XML, das durch Serialisieren eines [`Element`](/de/docs/Web/API/Element)-Objekts erstellt wurde.

> [!NOTE]
> In der realen Welt sollten Sie normalerweise stattdessen die Methode [`importNode()`](/de/docs/Web/API/Document/importNode) aufrufen, um den neuen Knoten in das DOM zu importieren, und dann eine der folgenden Methoden verwenden, um den Knoten zum DOM-Baum hinzuzufügen:
>
> - Die Methoden [`Element.append()`](/de/docs/Web/API/Element/append)/[`Element.prepend()`](/de/docs/Web/API/Element/prepend) und [`Document.append()`](/de/docs/Web/API/Document/append)/[`Document.prepend()`](/de/docs/Web/API/Document/prepend).
> - Die Methode [`Element.replaceWith`](/de/docs/Web/API/Element/replaceWith) (um einen vorhandenen Knoten durch den neuen zu ersetzen)
> - Die Methode [`Element.insertAdjacentElement()`](/de/docs/Web/API/Element/insertAdjacentElement).

Da `insertAdjacentHTML()` eine Zeichenkette und nicht einen `Node` als zweiten Parameter akzeptiert, wird `XMLSerializer` verwendet, um den Knoten zuerst in eine Zeichenkette zu konvertieren.

```js
const inp = document.createElement("input");
const XMLS = new XMLSerializer();
const inp_xmls = XMLS.serializeToString(inp); // First convert DOM node into a string

// Insert the newly created node into the document's body
document.body.insertAdjacentHTML("afterbegin", inp_xmls);
```

Der Code erstellt ein neues {{HTMLElement("input")}}-Element durch Aufruf von [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und serialisiert es dann in XML mithilfe von [`serializeToString()`](/de/docs/Web/API/XMLSerializer/serializeToString).

Sobald dies geschehen ist, wird `insertAdjacentHTML()` verwendet, um das `<input>`-Element in das DOM einzufügen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Parsen und Serialisieren von XML](/de/docs/Web/XML/Parsing_and_serializing_XML)
- [`DOMParser`](/de/docs/Web/API/DOMParser)
