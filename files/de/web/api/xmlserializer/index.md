---
title: XMLSerializer
slug: Web/API/XMLSerializer
l10n:
  sourceCommit: 6bf0c1b34748426927b018ad4a969c2ff5ae1812
---

{{APIRef("XMLSerializer")}}

Das `XMLSerializer`-Interface bietet die Methode {{domxref("XMLSerializer.serializeToString", "serializeToString()")}} zum Erstellen eines XML-Strings, der einen {{Glossary("DOM")}}-Baum darstellt.

> [!NOTE]
> Der resultierende XML-String ist nicht garantiert wohlgeformtes XML.

## Konstruktor

- {{domxref("XMLSerializer.XMLSerializer", "XMLSerializer()")}}
  - : Erstellt ein neues `XMLSerializer`-Objekt.

## Instanzmethoden

- {{domxref("XMLSerializer.serializeToString", "serializeToString()")}}
  - : Gibt den serialisierten Teilbaum eines Strings zurück.

## Beispiele

### XML in einen String serialisieren

Dieses Beispiel serialisiert einfach ein gesamtes Dokument in einen String, der XML enthält.

```js
const s = new XMLSerializer();
const str = s.serializeToString(document);
saveXML(str);
```

Dies beinhaltet das Erstellen eines neuen `XMLSerializer`-Objekts, anschließend wird das {{domxref("Document")}}, das serialisiert werden soll, an {{domxref("XMLSerializer.serializeToString", "serializeToString()")}} übergeben, welches das XML-Äquivalent des Dokuments zurückgibt. `saveXML()` repräsentiert eine Funktion, die den serialisierten String dann speichern würde.

### Einfügen von Knoten in einen DOM basierend auf XML

Dieses Beispiel verwendet die Methode {{domxref("Element.insertAdjacentHTML()")}}, um einen neuen DOM-{{domxref("Node")}} in den Body des {{domxref("Document")}} einzufügen, basierend auf XML, das durch die Serialisierung eines {{domxref("Element")}}-Objekts erstellt wurde.

> [!NOTE]
> In der Praxis sollten Sie stattdessen normalerweise die Methode {{domxref("Document.importNode", "importNode()")}} aufrufen, um den neuen Knoten in den DOM zu importieren, und dann eine der folgenden Methoden aufrufen, um den Knoten zum DOM-Baum hinzuzufügen:
>
> - Die Methoden {{domxref("Element.append()")}}/{{domxref("Element.prepend()")}} und {{domxref("Document.append()")}}/{{domxref("Document.prepend()")}}.
> - Die Methode {{domxref("Element.replaceWith")}} (um einen vorhandenen Knoten durch den neuen zu ersetzen)
> - Die Methode {{domxref("Element.insertAdjacentElement()")}},

Da `insertAdjacentHTML()` einen String und keinen `Node` als zweiten Parameter akzeptiert, wird `XMLSerializer` verwendet, um den Knoten zuerst in einen String zu konvertieren.

```js
const inp = document.createElement("input");
const XMLS = new XMLSerializer();
const inp_xmls = XMLS.serializeToString(inp); // Zuerst den DOM-Knoten in einen String umwandeln

// Fügen Sie den neu erstellten Knoten in den Body des Dokuments ein
document.body.insertAdjacentHTML("afterbegin", inp_xmls);
```

Der Code erstellt ein neues {{HTMLElement("input")}}-Element durch Aufruf von {{domxref("Document.createElement()")}}, und serialisiert es dann mithilfe von {{domxref("XMLSerializer.serializeToString", "serializeToString()")}} in XML.

Sobald dies erledigt ist, wird `insertAdjacentHTML()` verwendet, um das `<input>`-Element in den DOM einzufügen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [XML parsen und serialisieren](/de/docs/Web/XML/Parsing_and_serializing_XML)
- {{domxref("DOMParser")}}
