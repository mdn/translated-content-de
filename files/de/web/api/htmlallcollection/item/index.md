---
title: "HTMLAllCollection: item()-Methode"
short-title: item()
slug: Web/API/HTMLAllCollection/item
l10n:
  sourceCommit: 5b9e4bb67e5cb4bb2b780e7338a6560463e5a1a7
---

{{APIRef("HTML DOM")}}

Die **`item()`**-Methode der [`HTMLAllCollection`](/de/docs/Web/API/HTMLAllCollection)-Schnittstelle gibt das Element zurück, das sich an der angegebenen Position in der Sammlung befindet, oder das Element mit dem angegebenen Wert für sein `id`- oder `name`-Attribut.

## Syntax

```js-nolint
item(nameOrIndex)
```

### Parameter

- `nameOrIndex`
  - : Wenn dieser Parameter eine Ganzzahl ist oder ein String, der in eine Ganzzahl umgewandelt werden kann, dann repräsentiert er die Position des zurückzugebenden [`Element`](/de/docs/Web/API/Element). Elemente erscheinen in einer `HTMLAllCollection` in der gleichen Reihenfolge, in der sie im Dokumentenquelle erscheinen. Wenn der Parameter ein String ist, der nicht in eine Ganzzahl umgewandelt werden kann, wird er als `name` oder `id` des zurückzugebenden Elements interpretiert.

### Rückgabewert

Wenn `nameOrIndex` einen Index darstellt, gibt `item()` das [`Element`](/de/docs/Web/API/Element) am angegebenen Index oder `null` zurück, wenn `nameOrIndex` kleiner als null oder größer oder gleich der length-Eigenschaft ist. Wenn `nameOrIndex` einen Namen darstellt, gibt `item()` denselben Wert zurück wie [`namedItem()`](/de/docs/Web/API/HTMLAllCollection/namedItem).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCollection.item()`](/de/docs/Web/API/HTMLCollection/item)
