---
title: "Element: ariaPosInSet-Eigenschaft"
short-title: ariaPosInSet
slug: Web/API/Element/ariaPosInSet
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("DOM")}}

Die **`ariaPosInSet`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces spiegelt den Wert des [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset)-Attributs wider. Dieses Attribut definiert die Nummer oder Position eines Elements in der aktuellen Menge von Listeneinträgen oder Baumknoten.

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
