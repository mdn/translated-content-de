---
title: "CharacterData: before()-Methode"
short-title: before()
slug: Web/API/CharacterData/before
l10n:
  sourceCommit: 8374946642c18a9cc4bf510de767011124e832a2
---

{{APIRef("DOM")}}

Die **`before()`**-Methode der {{domxref("CharacterData")}}-Schnittstelle
fügt eine Reihe von {{domxref("Node")}}-Objekten und Zeichenfolgen in die Kindliste des Elternteils von `CharacterData` ein, direkt vor dem `CharacterData`-Knoten.

Zeichenfolgen werden als {{domxref("Text")}}-Knoten eingefügt; die Zeichenfolge wird als Argument an den {{domxref("Text/Text", "Text()")}}-Konstruktor übergeben.

## Syntax

```js-nolint
before(...nodes)
```

### Parameter

- `nodes`
  - : Eine Reihe von {{domxref("Node")}}-Objekten oder Zeichenfolgen, die eingefügt werden sollen.

### Ausnahmen

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Wird ausgelöst, wenn die neuen Knoten an der angegebenen Stelle in der Hierarchie nicht eingefügt werden können, d.h. wenn eine der folgenden Bedingungen erfüllt ist:
    - Wenn das Einfügen eines der hinzugefügten Knoten zu einem Zyklus führen würde, d.h. wenn einer von ihnen ein Vorfahre dieses {{domxref("CharacterData")}}-Knotens ist.
    - Wenn einer der hinzugefügten Knoten kein {{domxref("DocumentFragment")}}, kein {{domxref("DocumentType")}}, kein {{domxref("Element")}} oder keine {{domxref("CharacterData")}} ist.
    - Wenn dieser {{domxref("CharacterData")}}-Knoten tatsächlich ein {{domxref("Text")}}-Knoten ist und sein Elternteil ein {{domxref("Document")}} ist.
    - Wenn das Elternteil dieses {{domxref("CharacterData")}}-Knotens ein {{domxref("Document")}} ist und einer der einzufügenden Knoten ein {{domxref("DocumentFragment")}} mit mehr als einem {{domxref("Element")}}-Kindknoten ist oder ein {{domxref("Text")}}-Kindknoten hat.

## Beispiele

Die `before()`-Methode erlaubt es Ihnen, neue Knoten vor einem
`CharacterData`-Knoten einzufügen, ohne die aktuellen Knotendaten zu ändern.

```js
const h1TextNode = document.querySelector("h1").firstChild;
h1TextNode.before("h1# ");

h1TextNode.parentElement.childNodes;
// NodeList [#text "h1# ", #text "CharacterData.before()"]

h1TextNode.data;
// "CharacterData.before()"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("CharacterData.appendData()")}}
- {{domxref("CharacterData.after()")}}
- {{domxref("DocumentType.before()")}}
- {{domxref("Element.before()")}}
- {{domxref("Element.append()")}}
- {{domxref("Node.appendChild()")}}
- {{domxref("Element.insertAdjacentElement()")}}
