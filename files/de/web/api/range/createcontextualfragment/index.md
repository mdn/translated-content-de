---
title: "Range: Methode createContextualFragment()"
short-title: createContextualFragment()
slug: Web/API/Range/createContextualFragment
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

Die **`Range.createContextualFragment()`**-Methode gibt ein
{{domxref("DocumentFragment")}} zurück, indem sie den HTML-Fragment-Parsings-Algorithmus oder den
XML-Fragment-Parsings-Algorithmus mit dem Anfang des Bereichs (dem _Elternteil_ des
ausgewählten Knotens) als Kontextknoten aufruft. Der HTML-Fragment-Parsings-Algorithmus wird verwendet, wenn
der Bereich zu einem `Document` gehört, dessen HTML-Bit gesetzt ist. Im HTML-Fall, wenn
der Kontextknoten `html` wäre, wird aus historischen Gründen der Fragmentparsing-Algorithmus stattdessen mit `body` als Kontext aufgerufen.

## Syntax

```js-nolint
createContextualFragment(tagString)
```

### Parameter

- `tagString`
  - : Text, der Text und Tags enthält, die in ein DocumentFragment umgewandelt werden sollen.

### Rückgabewert

Ein {{domxref("DocumentFragment")}}-Objekt.

## Beispiele

```js
const tagString = "<div>I am a div node</div>";
const range = document.createRange();

// Machen Sie das Elternteil des ersten div im Dokument zum Kontextknoten
range.selectNode(document.getElementsByTagName("div").item(0));
const documentFragment = range.createContextualFragment(tagString);
document.body.appendChild(documentFragment);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Das DOM-Schnittstellenindex](/de/docs/Web/API/Document_Object_Model)
