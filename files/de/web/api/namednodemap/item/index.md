---
title: "NamedNodeMap: item()-Methode"
short-title: item()
slug: Web/API/NamedNodeMap/item
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{APIRef("DOM")}}

Die **`item()`**-Methode der [`NamedNodeMap`](/de/docs/Web/API/NamedNodeMap)-Schnittstelle
gibt das Element in der Map zurück, das dem Index entspricht.

> [!NOTE]
> Diese Methode wird auch aufgerufen, wenn Sie die Operator-`[]`-Syntax verwenden.
> So ist `myMap[i]` gleichbedeutend mit `myMap.item(i)`, wobei `i` eine Zahl ist.

## Syntax

```js-nolint
item(index)
[index]
```

### Parameter

- `index`
  - : Eine Zahl, die den Index des Elements darstellt, das Sie zurückgeben möchten.

### Rückgabewert

Ein [`Attr`](/de/docs/Web/API/Attr) oder `null`, wenn die Zahl größer oder gleich der `length` der Map ist.

## Beispiel

```html
<pre class="foo" id="bar" contenteditable></pre>
```

```js
const pre = document.querySelector("pre");
const attrMap = pre.attributes;

pre.textContent = `The attribute map contains:
0: ${attrMap.item(0).name}
1: ${attrMap[1].name}
2: ${attrMap.item(2).name}`;
```

{{EmbedLiveSample("Example", "100%", 120)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
