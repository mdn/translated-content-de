---
title: "CharacterData: Methode after()"
short-title: after()
slug: Web/API/CharacterData/after
l10n:
  sourceCommit: 83abbf83add0cd101b13f747bf52da0ff4b51bf8
---

{{APIRef("DOM")}}

Die Methode **`after()`** der Schnittstelle [`CharacterData`](/de/docs/Web/API/CharacterData) fügt eine Reihe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen in die Liste der Kindknoten des Elternknotens von `CharacterData` ein, unmittelbar nach `CharacterData`. Zeichenfolgen werden als entsprechende [`Text`](/de/docs/Web/API/Text)-Knoten eingefügt. Wenn [`parentNode`](/de/docs/Web/API/Node/parentNode) `null` ist, geschieht nichts.

## Syntax

```js-nolint
after(param1)
after(param1, param2)
after(param1, param2, /* …, */ paramN)
```

### Parameter

- `param1`, …, `paramN`
  - : Eine Reihe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen, die eingefügt werden sollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die neuen Knoten nicht an der angegebenen Stelle in der Hierarchie eingefügt werden können, das heißt, wenn eine der folgenden Bedingungen erfüllt ist:
    - Das Einfügen eines der hinzuzufügenden Knoten würde einen Zyklus erzeugen, das heißt, einer dieser Knoten ist ein Vorfahr dieses [`CharacterData`](/de/docs/Web/API/CharacterData)-Knotens.
    - Einer der hinzuzufügenden Knoten ist weder ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) noch ein [`DocumentType`](/de/docs/Web/API/DocumentType), ein [`Element`](/de/docs/Web/API/Element) oder ein [`CharacterData`](/de/docs/Web/API/CharacterData).
    - Dieser [`CharacterData`](/de/docs/Web/API/CharacterData)-Knoten ist ein [`Text`](/de/docs/Web/API/Text)-Knoten und sein Elternknoten ist ein [`Document`](/de/docs/Web/API/Document).
    - Der Elternknoten dieses [`CharacterData`](/de/docs/Web/API/CharacterData)-Knotens ist ein [`Document`](/de/docs/Web/API/Document), und einer der einzufügenden Knoten ist ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) mit mehr als einem [`Element`](/de/docs/Web/API/Element)-Kindknoten oder mit einem [`Text`](/de/docs/Web/API/Text)-Kindknoten.

## Beispiele

Mit der Methode `after()` können Sie neue Knoten nach einem `CharacterData`-Knoten einfügen.

```js
const h1TextNode = document.querySelector("h1").firstChild;
h1TextNode.after(" #h1");

h1TextNode.parentElement.childNodes;
// NodeList [#text "CharacterData.after()", #text " #h1"]

h1TextNode.data;
// "CharacterData.after()"
```

> [!NOTE]
> Wenn Sie stattdessen Text an den aktuellen Knoten anhängen möchten, können Sie mit der Methode [`appendData()`](/de/docs/Web/API/CharacterData/appendData) Daten an den aktuellen Knoten anhängen.

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
