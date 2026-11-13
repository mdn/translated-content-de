---
title: "Window: frames-Eigenschaft"
short-title: frames
slug: Web/API/Window/frames
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`frames`** der [`Window`](/de/docs/Web/API/Window)-Schnittstelle gibt das Fenster selbst zurück. Es handelt sich dabei um ein arrayähnliches Objekt, das die direkten Unter-Frames des aktuellen Fensters auflistet.

## Wert

Eine Liste von Frame-Objekten. Sie ähnelt einem Array, da sie eine `length`-Eigenschaft besitzt und über die `[i]`-Notation auf ihre Einträge zugegriffen werden kann.

- `frames === window` ergibt `true`.
- Jeder Eintrag im Pseudo-Array `window.frames` ist das [`Window`](/de/docs/Web/API/Window)-Objekt, das dem Inhalt des jeweiligen {{HTMLElement("frame")}} oder {{HTMLElement("iframe")}} entspricht, nicht das DOM-Element `frame` oder `iframe` selbst. `window.frames[0]` ist beispielsweise dasselbe wie `document.getElementsByTagName("iframe")[0].contentWindow`.
- Weitere Einzelheiten zum Rückgabewert finden Sie in diesem [Thread auf mozilla.dev.platform](https://groups.google.com/g/mozilla.dev.platform/c/VijG80aFnU8).

## Beispiele

```js
const frames = window.frames; // or const frames = window.parent.frames;
for (let i = 0; i < frames.length; i++) {
  // do something with each subframe as frames[i]
  frames[i].document.body.style.background = "red";
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
