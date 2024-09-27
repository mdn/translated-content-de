---
title: "TouchList: Länge-Eigenschaft"
short-title: length
slug: Web/API/TouchList/length
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("Touch Events") }}

Die schreibgeschützte **`length`**-Eigenschaft gibt die Anzahl der Elemente (Berührungspunkte) in einer gegebenen [`TouchList`](/de/docs/Web/API/TouchList) an.

## Wert

Die Anzahl der Berührungspunkte in `touchList`.

## Beispiele

Dieses Codebeispiel veranschaulicht die Verwendung der [`TouchList`](/de/docs/Web/API/TouchList)-Schnittstelle, der `item`-Methode und der `length`-Eigenschaft.

```js
const target = document.getElementById("target");

target.addEventListener(
  "touchstart",
  (ev) => {
    // If this touchstart event started on element target,
    // set touch to the first item in the targetTouches list;
    // otherwise set touch to the first item in the touches list
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
