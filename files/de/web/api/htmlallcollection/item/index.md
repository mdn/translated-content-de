---
title: "HTMLAllCollection: item()-Methode"
short-title: item()
slug: Web/API/HTMLAllCollection/item
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("HTML DOM")}}

Die **`item()`**-Methode der [`HTMLAllCollection`](/de/docs/Web/API/HTMLAllCollection)-Schnittstelle gibt das Element zurück, das sich an der angegebenen Position in der Sammlung befindet, oder das Element mit dem angegebenen Wert für sein `id`- oder `name`-Attribut.

## Syntax

```js-nolint
item(nameOrIndex)
```

### Parameter

- `nameOrIndex`
  - : Wenn dieser Parameter eine ganze Zahl ist oder ein String, der in eine ganze Zahl umgewandelt werden kann, dann repräsentiert er die Position des zurückzugebenden [`Element`](/de/docs/Web/API/Element). Elemente erscheinen in einer `HTMLAllCollection` in der gleichen Reihenfolge, in der sie im Quelltext des Dokuments erscheinen. Wenn der Parameter ein String ist, der nicht in eine ganze Zahl umgewandelt werden kann, wird er als `name` oder `id` des zurückzugebenden Elements interpretiert.

### Rückgabewert

Wenn `nameOrIndex` einen Index darstellt, gibt `item()` das [`Element`](/de/docs/Web/API/Element) an dem angegebenen Index zurück, oder `null`, wenn `nameOrIndex` kleiner als null oder größer oder gleich der Länge-Eigenschaft ist. Wenn `nameOrIndex` einen Namen repräsentiert, gibt `item()` den gleichen Wert zurück wie [`namedItem()`](/de/docs/Web/API/HTMLAllCollection/namedItem).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCollection.item()`](/de/docs/Web/API/HTMLCollection/item)
