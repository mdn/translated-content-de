---
title: "Document: createAttributeNS() Methode"
short-title: createAttributeNS()
slug: Web/API/Document/createAttributeNS
l10n:
  sourceCommit: 5c0d26f70b80e5511496f49cb5dc0405de98c562
---

{{ ApiRef("DOM") }}

Die **`Document.createAttributeNS()`**-Methode erstellt ein neues Attributknoten
mit der angegebenen Namespace-URI und dem qualifizierten Namen und gibt es zurück.
Das erstellte Objekt ist ein Knoten, der die
[`Attr`](/de/docs/Web/API/Attr)-Schnittstelle implementiert. Das DOM erzwingt nicht, welche Art von Attributen
auf diese Weise einem bestimmten Element hinzugefügt werden können.

## Syntax

```js-nolint
createAttributeNS(namespaceURI, qualifiedName)
```

### Parameter

- `namespaceURI`
  - : Ein String, der die [`namespaceURI`](/de/docs/Web/API/Attr/namespaceURI) angibt, die dem Attribut zugeordnet werden soll. Einige wichtige Namespace-URIs sind:
    - [HTML](/de/docs/Web/HTML)
      - : `http://www.w3.org/1999/xhtml`
    - [SVG](/de/docs/Web/SVG)
      - : `http://www.w3.org/2000/svg`
    - [MathML](/de/docs/Web/MathML)
      - : `http://www.w3.org/1998/Math/MathML`
- `qualifiedName`
  - : Ein String, der den Namen des zu erstellenden Attributs spezifiziert.
    Die [`name`](/de/docs/Web/API/Attr/name)-Eigenschaft des erstellten Attributs wird mit dem Wert von `qualifiedName` initialisiert.

### Rückgabewert

Der neue [`Attr`](/de/docs/Web/API/Attr)-Knoten.

### Ausnahmen

- `NamespaceError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Wert von [`namespaceURI`](#namespaceuri) keine gültige Namespace-URI ist.
- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Wert von [`qualifiedName`](#qualifiedname) kein gültiger [XML-Name](https://www.w3.org/TR/REC-xml/#dt-name) ist; zum Beispiel, wenn er mit einer Zahl, einem Bindestrich oder einem Punkt beginnt oder Zeichen enthält, die nicht alphanumerisch, Unterstriche, Bindestriche oder Punkte sind.

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
