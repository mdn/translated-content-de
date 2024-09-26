---
title: "NamedNodeMap: item()-Methode"
short-title: item()
slug: Web/API/NamedNodeMap/item
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("DOM")}}

Die **`item()`**-Methode der {{domxref("NamedNodeMap")}}-Schnittstelle
gibt das Element in der Map zurück, das dem Index entspricht.

> [!NOTE]
> Diese Methode wird auch aufgerufen, wenn Sie die `[]`-Operator-Syntax verwenden.
> Also ist `myMap[i]` gleichbedeutend mit `myMap.item(i)`, wobei `i` eine Zahl ist.

## Syntax

```js-nolint
item(index)
[index]
```

### Parameter

- `index`
  - : Eine Zahl, die den Index des Elements darstellt, das Sie zurückgeben möchten.

### Rückgabewert

Ein {{domxref("Attr")}} oder `null`, wenn die Zahl größer oder gleich der `length` der
Map ist.

## Beispiel

```html
<pre zero="test" one="test" two="test"></pre>
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

## Kompatibilität der Browser

{{Compat}}