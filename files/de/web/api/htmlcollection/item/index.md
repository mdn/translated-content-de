---
title: "HTMLCollection: item()-Methode"
short-title: item()
slug: Web/API/HTMLCollection/item
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("HTML DOM")}}

Die Methode `item()` der [`HTMLCollection`](/de/docs/Web/API/HTMLCollection)
gibt das Element zurück, das sich an dem angegebenen Offset in der Sammlung befindet.

> [!NOTE]
> Da der Inhalt einer `HTMLCollection` live ist, können Änderungen am zugrunde liegenden DOM die Position einzelner Elemente in der Sammlung ändern. Daher bleibt der Indexwert für ein gegebenes Element nicht notwendigerweise konstant.

## Syntax

```js-nolint
item(index)
```

### Parameter

- `index`
  - : Die Position des zurückzugebenden [`Element`](/de/docs/Web/API/Element). Elemente erscheinen in einer
    `HTMLCollection` in der gleichen Reihenfolge, in der sie im Dokumentenquellcode erscheinen.

### Rückgabewert

Das [`Element`](/de/docs/Web/API/Element) an dem angegebenen Index oder `null`, wenn
`index` kleiner als null oder größer oder gleich der Längeneigenschaft ist.

## Verwendungshinweise

Die `item()`-Methode gibt ein nummeriertes Element aus einer
`HTMLCollection` zurück. In JavaScript ist es einfacher, die
`HTMLCollection` als Array zu behandeln und sie mit Array-Notation zu indizieren. Siehe das
[Beispiel](#beispiele) unten.

## Beispiele

```js
const images = document.images; // This is an HTMLCollection
const img0 = images.item(0); // You can use the item() method this way
const img1 = images[1]; // But this notation is easier and more common
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`NodeList.item()`](/de/docs/Web/API/NodeList/item)
