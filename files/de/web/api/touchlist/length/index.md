---
title: "TouchList: length-Eigenschaft"
short-title: length
slug: Web/API/TouchList/length
l10n:
  sourceCommit: f71683f74da0078d9371c4d0c1ff9d3898fc7b59
---

{{ APIRef("Touch Events") }}

Die schreibgeschützte **`length`**-Eigenschaft gibt die Anzahl der
Elemente (Berührungspunkte) in einer gegebenen [`TouchList`](/de/docs/Web/API/TouchList) an.

## Wert

Die Anzahl der Berührungspunkte in `touchList`.

## Beispiele

Dieses Codebeispiel veranschaulicht die Verwendung der [`TouchList`](/de/docs/Web/API/TouchList)-Schnittstelle,
der [`item`](/de/docs/Web/API/TouchList/item)-Methode und der
`length`-Eigenschaft.

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
