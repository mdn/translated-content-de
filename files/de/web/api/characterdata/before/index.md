---
title: "CharacterData: before()-Methode"
short-title: before()
slug: Web/API/CharacterData/before
l10n:
  sourceCommit: 8374946642c18a9cc4bf510de767011124e832a2
---

{{APIRef("DOM")}}

Die **`before()`**-Methode der [`CharacterData`](/de/docs/Web/API/CharacterData)-Schnittstelle
fügt eine Menge von [`Node`](/de/docs/Web/API/Node)-Objekten und Zeichenfolgen in die Kindliste des Elternelements der `CharacterData` ein, direkt vor dem `CharacterData`-Knoten.

Zeichenfolgen werden als [`Text`](/de/docs/Web/API/Text)-Knoten eingefügt; die Zeichenfolge wird als Argument an den [`Text()`](/de/docs/Web/API/Text/Text)-Konstruktor übergeben.

## Syntax

```js-nolint
before(...nodes)
```

### Parameter

- `nodes`
  - : Eine Menge von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen, die eingefügt werden sollen.

### Ausnahmen

- `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die neuen Knoten nicht an der angegebenen Stelle in der Hierarchie eingefügt werden können, d.h. wenn eine der folgenden Bedingungen erfüllt ist:
    - Wenn das Einfügen eines der hinzugefügten Knoten zu einem Zyklus führen würde, d.h. wenn einer von ihnen ein Vorfahre dieses [`CharacterData`](/de/docs/Web/API/CharacterData)-Knotens ist.
    - Wenn einer der hinzugefügten Knoten kein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), [`DocumentType`](/de/docs/Web/API/DocumentType), [`Element`](/de/docs/Web/API/Element) oder [`CharacterData`](/de/docs/Web/API/CharacterData) ist.
    - Wenn dieser [`CharacterData`](/de/docs/Web/API/CharacterData)-Knoten tatsächlich ein [`Text`](/de/docs/Web/API/Text)-Knoten ist und sein Elternknoten ein [`Document`](/de/docs/Web/API/Document) ist.
    - Wenn das Elternteil dieses [`CharacterData`](/de/docs/Web/API/CharacterData)-Knotens ein [`Document`](/de/docs/Web/API/Document) ist und einer der einzufügenden Knoten ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) mit mehr als einem [`Element`](/de/docs/Web/API/Element)-Kind oder einem [`Text`](/de/docs/Web/API/Text)-Kind enthält.

## Beispiele

Die `before()`-Methode ermöglicht es Ihnen, neue Knoten vor einem `CharacterData`-Knoten einzufügen, wobei die Daten des aktuellen Knotens unverändert bleiben.

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

- [`CharacterData.appendData()`](/de/docs/Web/API/CharacterData/appendData)
- [`CharacterData.after()`](/de/docs/Web/API/CharacterData/after)
- [`DocumentType.before()`](/de/docs/Web/API/DocumentType/before)
- [`Element.before()`](/de/docs/Web/API/Element/before)
- [`Element.append()`](/de/docs/Web/API/Element/append)
- [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild)
- [`Element.insertAdjacentElement()`](/de/docs/Web/API/Element/insertAdjacentElement)
