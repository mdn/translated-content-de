---
title: "DocumentFragment: firstElementChild Eigenschaft"
short-title: firstElementChild
slug: Web/API/DocumentFragment/firstElementChild
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ APIRef("DOM") }}

Die schreibgeschützte **`DocumentFragment.firstElementChild`**-Eigenschaft gibt das erste Kind-`Element` des Dokumentfragments zurück oder `null`, wenn keine Kind-Elemente vorhanden sind.

## Wert

Ein [`Element`](/de/docs/Web/API/Element), das das erste Kind-`Element` des Objekts ist, oder `null`, wenn keine vorhanden sind.

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

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.firstElementChild`](/de/docs/Web/API/Element/firstElementChild)
