---
title: "Range: createContextualFragment() Methode"
short-title: createContextualFragment()
slug: Web/API/Range/createContextualFragment
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

Die **`Range.createContextualFragment()`** Methode gibt ein
[`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zurück, indem der HTML-Fragment-Parsing-Algorithmus oder der
XML-Fragment-Parsing-Algorithmus mit dem Anfang des Ranges (dem _Elternteil_ des
ausgewählten Knotens) als Kontextknoten aufgerufen wird. Der HTML-Fragment-Parsing-Algorithmus wird verwendet, wenn der
Bereich zu einem `Document` gehört, dessen HTMLness-Bit gesetzt ist. Im HTML-Fall, wenn
der Kontextknoten `html` wäre, wird aus historischen Gründen der Fragment-Parsing-Algorithmus mit `body` als Kontext stattdessen aufgerufen.

## Syntax

```js-nolint
createContextualFragment(tagString)
```

### Parameter

- `tagString`
  - : Text, der Text und Tags enthält, die in ein Dokumentfragment umgewandelt werden sollen.

### Rückgabewert

Ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) Objekt.

## Beispiele

```js
const tagString = "<div>I am a div node</div>";
const range = document.createRange();

// Make the parent of the first div in the document become the context node
range.selectNode(document.getElementsByTagName("div").item(0));
const documentFragment = range.createContextualFragment(tagString);
document.body.appendChild(documentFragment);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Das DOM Schnittstellen-Index](/de/docs/Web/API/Document_Object_Model)
