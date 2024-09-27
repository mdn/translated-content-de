---
title: "Dokument: createAttributeNS() Methode"
short-title: createAttributeNS()
slug: Web/API/Document/createAttributeNS
l10n:
  sourceCommit: 7b3dbcfc0bda53b65eee9b025362c9b2c34cfe95
---

{{ ApiRef("DOM") }}

Die **`Document.createAttributeNS()`**-Methode erstellt ein neues Attributknoten
mit dem angegebenen Namensraum-URI und qualifiziertem Namen und gibt diesen zurück.
Das erstellte Objekt ist ein Knoten, der das
[`Attr`](/de/docs/Web/API/Attr)-Interface implementiert. Das DOM erzwingt nicht, welche Art von Attributen auf diese Weise einem bestimmten Element hinzugefügt werden können.

## Syntax

```js-nolint
createAttributeNS(namespaceURI, qualifiedName)
```

### Parameter

- `namespaceURI`
  - : Ein String, der den [Namensraum-URI](https://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/glossary.html#dt-namespaceURI) angibt, der dem Attribut zugeordnet werden soll.
    Die [`namespaceURI`](/de/docs/Web/API/Attr/namespaceURI)-Eigenschaft des erstellten Attributs wird mit dem Wert von `namespaceURI` initialisiert.
    Siehe [Gültige Namensraum-URIs](#wichtige_namensraum-uris).
- `qualifiedName`
  - : Ein String, der den Namen des zu erstellenden Attributs angibt.
    Die [`name`](/de/docs/Web/API/Attr/name)-Eigenschaft des erstellten Attributs wird mit dem Wert von `qualifiedName` initialisiert.

### Rückgabewert

Der neue [`Attr`](/de/docs/Web/API/Attr)-Knoten.

### Ausnahmen

- `NamespaceError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Wert von [`namespaceURI`](#namespaceuri) kein gültiger [Namensraum-URI](https://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/glossary.html#dt-namespaceURI) ist.
- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Wert von [`qualifiedName`](#qualifiedname) kein gültiger [XML-Name](https://www.w3.org/TR/REC-xml/#dt-name) ist; zum Beispiel, wenn er mit einer Zahl, einem Bindestrich oder einem Punkt beginnt oder Zeichen enthält, die keine alphanumerischen Zeichen, Unterstriche, Bindestriche oder Punkte sind.

## Wichtige Namensraum-URIs

- [HTML](/de/docs/Web/HTML)
  - : `http://www.w3.org/1999/xhtml`
- [SVG](/de/docs/Web/SVG)
  - : `http://www.w3.org/2000/svg`
- [MathML](/de/docs/Web/MathML)
  - : `http://www.w3.org/1998/Math/MathML`

## Beispiele

```js
const node = document.getElementById("svg");
const a = document.createAttributeNS("http://www.w3.org/2000/svg", "viewBox");
a.value = "0 0 100 100";
node.setAttributeNode(a);
console.log(node.getAttribute("viewBox")); // "0 0 100 100"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.createAttribute()`](/de/docs/Web/API/Document/createAttribute)
- [`Document.createElementNS()`](/de/docs/Web/API/Document/createElementNS)
- [`Element.setAttributeNS()`](/de/docs/Web/API/Element/setAttributeNS)
- [`Element.setAttributeNode()`](/de/docs/Web/API/Element/setAttributeNode)
- [`Element.setAttributeNodeNS()`](/de/docs/Web/API/Element/setAttributeNodeNS)
