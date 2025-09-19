---
title: "TouchList: item() Methode"
short-title: item()
slug: Web/API/TouchList/item
l10n:
  sourceCommit: f71683f74da0078d9371c4d0c1ff9d3898fc7b59
---

{{ APIRef("Touch Events") }}

Die **`item()`** Methode gibt das [`Touch`](/de/docs/Web/API/Touch)-Objekt am angegebenen Index in der [`TouchList`](/de/docs/Web/API/TouchList) zurück.

## Syntax

```js-nolint
item(index)
```

### Parameter

- `index`
  - : Der Index des abzurufenden [`Touch`](/de/docs/Web/API/Touch)-Objekts. Der Index ist eine Zahl im Bereich von 0 bis eins weniger als die Länge der [`TouchList`](/de/docs/Web/API/TouchList).

### Rückgabewert

- `touchPoint`
  - : Das angeforderte [`Touch`](/de/docs/Web/API/Touch)-Objekt aus der [`TouchList`](/de/docs/Web/API/TouchList).
    Gibt `null` zurück, wenn der Index nicht kleiner als die Länge der Liste ist.

## Beispiele

Dieses Codebeispiel veranschaulicht die Verwendung der [`TouchList`](/de/docs/Web/API/TouchList)-Schnittstelle der `item`-Methode und der [`length`](/de/docs/Web/API/TouchList/length)-Eigenschaft.

```js
const target = document.getElementById("target");

target.addEventListener("touchstart", (ev) => {
  // If this touchstart event started on element target,
  // set touch to the first item in the targetTouches list;
  // otherwise set touch to the first item in the touches list
  const touch =
    ev.targetTouches.length >= 1
      ? ev.targetTouches.item(0)
      : ev.touches.item(0);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
