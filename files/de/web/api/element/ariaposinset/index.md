---
title: "Element: ariaPosInSet-Eigenschaft"
short-title: ariaPosInSet
slug: Web/API/Element/ariaPosInSet
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

Die **`ariaPosInSet`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle spiegelt den Wert des [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset)-Attributs wider, welches die Nummer oder Position eines Elements innerhalb der aktuellen Gruppe von Listenelementen oder Baumelementen definiert.

## Wert

Ein String, der eine ganze Zahl enthält.

## Beispiele

In diesem Beispiel wird das `aria-posinset`-Attribut des Elements mit der ID `article2` auf "2" gesetzt. Mit `ariaPosInSet` aktualisieren wir den Wert auf "3".

```html
<article id="article1" aria-posinset="1">…</article>
<article id="article2" aria-posinset="2">…</article>
```

```js
let el = document.getElementById("article2");
console.log(el.ariaPosInSet); // "2"
el.ariaPosInSet = "3";
console.log(el.ariaPosInSet); // "3"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
