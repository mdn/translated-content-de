---
title: "TouchList: Methode item()"
short-title: item()
slug: Web/API/TouchList/item
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("Touch Events") }}

Die **`item()`**-Methode gibt das {{ domxref("Touch") }}
Objekt am angegebenen Index in der {{ domxref("TouchList") }} zurück.

## Syntax

```js-nolint
item(index)
```

### Parameter

- `index`
  - : Der Index des abzurufenden {{ domxref("Touch") }} Objekts. Der Index ist eine Zahl im Bereich von 0 bis eins weniger als die Länge der {{ domxref("TouchList") }}.

### Rückgabewert

- `touchPoint`
  - : Das angeforderte {{ domxref("Touch") }} Objekt aus der {{ domxref("TouchList") }}.
    Gibt `null` zurück, wenn der Index nicht kleiner als die Länge der Liste ist.

## Beispiele

Dieses Codebeispiel veranschaulicht die Verwendung der Methode `item` der {{domxref("TouchList")}}
Schnittstelle und der
{{domxref("TouchList.length","length")}} Eigenschaft.

```js
const target = document.getElementById("target");

target.addEventListener(
  "touchstart",
  (ev) => {
    // Wenn dieses touchstart-Ereignis auf dem Element target begonnen hat,
    // setzen Sie touch auf das erste Element in der targetTouches-Liste;
    // andernfalls setzen Sie touch auf das erste Element in der touches-Liste
    const touch =
      ev.targetTouches.length >= 1
        ? ev.targetTouches.item(0)
        : ev.touches.item(0);
  },
  false,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
