---
title: "DocumentFragment: lastElementChild-Eigenschaft"
short-title: lastElementChild
slug: Web/API/DocumentFragment/lastElementChild
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ APIRef("DOM") }}

Die schreibgeschützte Eigenschaft **`DocumentFragment.lastElementChild`** gibt das letzte Kind[`Element`](/de/docs/Web/API/Element) des Dokument-Fragments zurück oder `null`, wenn keine Kindelemente vorhanden sind.

## Wert

Ein [`Element`](/de/docs/Web/API/Element), das das letzte Kindelement des Objekts ist, oder `null`, wenn keine vorhanden sind.

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

- [`Element.lastElementChild`](/de/docs/Web/API/Element/lastElementChild)
