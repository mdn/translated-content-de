---
title: "HTMLElement: offsetTop-Eigenschaft"
short-title: offsetTop
slug: Web/API/HTMLElement/offsetTop
l10n:
  sourceCommit: 352f16613106ce1b1980e3f3da37cf153db553ea
---

{{ APIRef("HTML DOM") }}

Die **`HTMLElement.offsetTop`**-Eigenschaft (nur lesbar) gibt die Entfernung von der äußeren Grenze des aktuellen Elements (einschließlich seines Randes) bis zur oberen Innenkante des [`offsetParent`](/de/docs/Web/API/HTMLElement/offsetParent) zurück, dem _nächstgelegenen positionierten_ Vorfahrenelement.

## Wert

Eine Zahl.

## Beispiele

```js
const d = document.getElementById("div1");
const topPos = d.offsetTop;

if (topPos > 10) {
  // object offset is more
  // than 10 pixels from its parent
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
