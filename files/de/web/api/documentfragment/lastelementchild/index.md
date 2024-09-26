---
title: "DocumentFragment: lastElementChild-Eigenschaft"
short-title: lastElementChild
slug: Web/API/DocumentFragment/lastElementChild
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ APIRef("DOM") }}

Die schreibgeschützte Eigenschaft **`DocumentFragment.lastElementChild`** gibt das letzte Kind-{{domxref("Element")}} des Dokumentfragments zurück oder `null`, wenn es keine Kind-Elemente gibt.

## Wert

Ein {{domxref("Element")}}, das das letzte Kind-`Element` des Objekts ist, oder `null`, wenn es keine gibt.

## Beispiele

```js
let fragment = new DocumentFragment();
fragment.lastElementChild; // null

let paragraph = document.createElement("p");
fragment.appendChild(paragraph);

fragment.lastElementChild; // <p>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Element.lastElementChild")}}