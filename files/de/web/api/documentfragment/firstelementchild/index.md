---
title: "DocumentFragment: firstElementChild-Eigenschaft"
short-title: firstElementChild
slug: Web/API/DocumentFragment/firstElementChild
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ APIRef("DOM") }}

Die schreibgeschützte Eigenschaft **`DocumentFragment.firstElementChild`** gibt das erste Kindelement des Dokumentfragments als {{domxref("Element")}} zurück, oder `null`, wenn keine Kindelemente vorhanden sind.

## Wert

Ein {{domxref("Element")}}, das das erste Kindelement des Objekts ist, oder `null`, wenn keine vorhanden sind.

## Beispiele

```js
let fragment = new DocumentFragment();
fragment.firstElementChild; // null

let paragraph = document.createElement("p");
fragment.appendChild(paragraph);

fragment.firstElementChild; // <p>
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("Element.firstElementChild")}}
