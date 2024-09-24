---
title: "CharacterData: after()-Methode"
short-title: after()
slug: Web/API/CharacterData/after
l10n:
  sourceCommit: 8374946642c18a9cc4bf510de767011124e832a2
---

{{APIRef("DOM")}}

Die **`after()`**-Methode der {{domxref("CharacterData")}}-Schnittstelle fügt eine Menge von {{domxref("Node")}}-Objekten oder Strings in die Kinderliste des Elternobjekts ein, direkt nach dem Objekt selbst.

Strings werden als {{domxref("Text")}}-Knoten eingefügt; der String wird als Argument an den {{domxref("Text/Text", "Text()")}}-Konstruktor übergeben.

## Syntax

```js-nolint
after(...nodes)
```

### Parameter

- `nodes`
  - : Eine Menge von {{domxref("Node")}}-Objekten oder Strings, die eingefügt werden sollen.

### Ausnahmen

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Ausgelöst, wenn die neuen Knoten an der angegebenen Stelle in der Hierarchie nicht eingefügt werden können, d.h., wenn eine der folgenden Bedingungen erfüllt ist:
    - Wenn das Einfügen eines der hinzugefügten Knoten zu einem Zyklus führen würde, d.h., wenn einer von ihnen ein Vorfahre dieses {{domxref("CharacterData")}}-Knotens ist.
    - Wenn einer der hinzugefügten Knoten kein {{domxref("DocumentFragment")}}, kein {{domxref("DocumentType")}}, kein {{domxref("Element")}} oder keine {{domxref("CharacterData")}} ist.
    - Wenn dieser {{domxref("CharacterData")}}-Knoten tatsächlich ein {{domxref("Text")}}-Knoten ist und sein Elternknoten ein {{domxref("Document")}} ist.
    - Wenn der Elternknoten dieses {{domxref("CharacterData")}}-Knotens ein {{domxref("Document")}} ist und einer der einzufügenden Knoten ein {{domxref("DocumentFragment")}} mit mehr als einem {{domxref("Element")}}-Kind oder einem {{domxref("Text")}}-Kind ist.

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
> Wenn Sie stattdessen Text an den aktuellen Knoten anhängen möchten,
> ermöglicht Ihnen die [`appendData()`](/de/docs/Web/API/CharacterData/appendData)-Methode, die Daten des aktuellen Knotens zu erweitern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("CharacterData.appendData()")}}
- {{domxref("CharacterData.before()")}}
- {{domxref("DocumentType.after()")}}
- {{domxref("Element.after()")}}
- {{domxref("Element.append()")}}
- {{domxref("Node.appendChild()")}}
- {{domxref("Element.insertAdjacentElement()")}}
