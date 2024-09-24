---
title: "TouchList: length-Eigenschaft"
short-title: length
slug: Web/API/TouchList/length
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("Touch Events") }}

Die **`length`**-Eigenschaft, die nur lesbar ist, gibt die Anzahl der
Elemente (Berührungspunkte) in einer gegebenen {{domxref("TouchList")}} an.

## Wert

Die Anzahl der Berührungspunkte in `touchList`.

## Beispiele

Dieses Codebeispiel zeigt die Nutzung der {{domxref("TouchList")}}-Schnittstelle,
der Methode {{domxref("TouchList.item()","item")}} und der
`length`-Eigenschaft.

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

## Kompatibilität der Browser

{{Compat}}
