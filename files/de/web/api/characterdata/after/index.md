---
title: "CharacterData: after()-Methode"
short-title: after()
slug: Web/API/CharacterData/after
l10n:
  sourceCommit: 8374946642c18a9cc4bf510de767011124e832a2
---

{{APIRef("DOM")}}

Die **`after()`**-Methode des [`CharacterData`](/de/docs/Web/API/CharacterData)-Interfaces fügt eine Reihe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen in die Kinderliste des Elternteils des Objekts ein, direkt nach dem Objekt selbst.

Zeichenfolgen werden als [`Text`](/de/docs/Web/API/Text)-Knoten eingefügt; die Zeichenfolge wird als Argument an den [`Text()`](/de/docs/Web/API/Text/Text)-Konstruktor übergeben.

## Syntax

```js-nolint
after(...nodes)
```

### Parameter

- `nodes`
  - : Eine Menge von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen, die eingefügt werden sollen.

### Ausnahmen

- `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die neuen Knoten nicht an der angegebenen Stelle in der Hierarchie eingefügt werden können, das heißt, wenn eine der folgenden Bedingungen erfüllt ist:
    - Wenn die Einfügung eines der hinzugefügten Knoten zu einem Zyklus führen würde, das heißt, wenn einer von ihnen ein Vorfahre dieses [`CharacterData`](/de/docs/Web/API/CharacterData)-Knotens ist.
    - Wenn einer der hinzugefügten Knoten kein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), kein [`DocumentType`](/de/docs/Web/API/DocumentType), kein [`Element`](/de/docs/Web/API/Element) oder keine [`CharacterData`](/de/docs/Web/API/CharacterData) ist.
    - Wenn dieser [`CharacterData`](/de/docs/Web/API/CharacterData)-Knoten tatsächlich ein [`Text`](/de/docs/Web/API/Text)-Knoten ist und sein Elternteil ein [`Document`](/de/docs/Web/API/Document) ist.
    - Wenn das Elternteil dieses [`CharacterData`](/de/docs/Web/API/CharacterData)-Knotens ein [`Document`](/de/docs/Web/API/Document) ist und einer der einzufügenden Knoten ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) mit mehr als einem [`Element`](/de/docs/Web/API/Element)-Kind ist, oder das ein [`Text`](/de/docs/Web/API/Text)-Kind hat.

## Beispiele

Die `after()`-Methode ermöglicht es Ihnen, neue Knoten nach einem `CharacterData`-Knoten einzufügen.

```js
const h1TextNode = document.querySelector("h1").firstChild;
h1TextNode.after(" #h1");

h1TextNode.parentElement.childNodes;
// NodeList [#text "CharacterData.after()", #text " #h1"]

h1TextNode.data;
// "CharacterData.after()"
```

> [!NOTE]
> Wenn Sie stattdessen Text an den aktuellen Knoten anhängen möchten, ermöglicht die [`appendData()`](/de/docs/Web/API/CharacterData/appendData)-Methode das Anhängen an die Daten des aktuellen Knotens.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CharacterData.appendData()`](/de/docs/Web/API/CharacterData/appendData)
- [`CharacterData.before()`](/de/docs/Web/API/CharacterData/before)
- [`DocumentType.after()`](/de/docs/Web/API/DocumentType/after)
- [`Element.after()`](/de/docs/Web/API/Element/after)
- [`Element.append()`](/de/docs/Web/API/Element/append)
- [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild)
- [`Element.insertAdjacentElement()`](/de/docs/Web/API/Element/insertAdjacentElement)
