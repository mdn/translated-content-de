---
title: "HTMLCollection: Methode item()"
short-title: item()
slug: Web/API/HTMLCollection/item
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("HTML DOM")}}

Die Methode `item()` der {{domxref("HTMLCollection")}}
gibt das Element zurück, das an dem spezifizierten Offset in der Sammlung liegt.

> [!NOTE]
> Da der Inhalt einer `HTMLCollection` live ist, können und werden Änderungen am zugrunde liegenden DOM dazu führen, dass sich die Position einzelner Elemente in der Sammlung ändert. Daher bleibt der Indexwert für ein bestimmtes Element nicht unbedingt konstant.

## Syntax

```js-nolint
item(index)
```

### Parameter

- `index`
  - : Die Position des zurückzugebenden {{domxref("Element")}}. Elemente erscheinen in einer
    `HTMLCollection` in der gleichen Reihenfolge, in der sie im Dokumentquelltext erscheinen.

### Rückgabewert

Das {{domxref("Element")}} am angegebenen Index oder `null`, wenn
`index` kleiner als null oder größer oder gleich der Eigenschaft Länge ist.

## Anwendungsnotizen

Die Methode `item()` gibt ein nummeriertes Element aus einer
`HTMLCollection` zurück. In JavaScript ist es einfacher, die
`HTMLCollection` als Array zu behandeln und sie über die Array-Notation zu indizieren. Siehe das
[Beispiel](#beispiele) unten.

## Beispiele

```js
const images = document.images; // Dies ist eine HTMLCollection
const img0 = images.item(0); // Sie können die Methode item() auf diese Weise verwenden
const img1 = images[1]; // Aber diese Notation ist einfacher und häufiger
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("NodeList.item()")}}
