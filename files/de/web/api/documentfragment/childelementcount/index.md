---
title: "DocumentFragment: childElementCount-Eigenschaft"
short-title: childElementCount
slug: Web/API/DocumentFragment/childElementCount
l10n:
  sourceCommit: 72707a3ee6ba5614b6b7b4af524d1b2c153c697e
---

{{ APIRef("DOM") }}

Die **`DocumentFragment.childElementCount`** schreibgeschützte Eigenschaft gibt die Anzahl der Kindelemente eines `DocumentFragment` zurück.

Um die Anzahl der Kinder eines bestimmten Elements zu erhalten, siehe [`Element.childElementCount`](/de/docs/Web/API/Element/childElementCount).

## Wert

Eine Zahl, die die Anzahl der Kinder des Dokumentfragments darstellt.

## Beispiele

```js
let fragment = new DocumentFragment();
fragment.childElementCount; // 0

let paragraph = document.createElement("p");
fragment.appendChild(paragraph);

fragment.childElementCount; // 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.childElementCount`](/de/docs/Web/API/Element/childElementCount)
- [`Document.childElementCount`](/de/docs/Web/API/Document/childElementCount)
