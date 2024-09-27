---
title: "Window: frames-Eigenschaft"
short-title: frames
slug: Web/API/Window/frames
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{APIRef("DOM")}}

Gibt das Fenster selbst zurück, welches ein arrayähnliches Objekt ist, das die direkten Unterframes des aktuellen Fensters auflistet.

## Wert

Eine Liste von Frame-Objekten. Es ist ähnlich wie ein Array, da es eine `length`-Eigenschaft hat und seine Elemente kann mit der `[i]`-Notation angesprochen werden.

- `frameList === window` ergibt true.
- Jedes Element im `window.frames`-Pseudofeld repräsentiert das [`Window`](/de/docs/Web/API/Window)-Objekt, das dem Inhalt des jeweiligen {{HTMLElement("frame")}}- oder {{HTMLElement("iframe")}}-Elements entspricht, nicht das `frame`- oder `iframe`-DOM-Element (d.h. `window.frames[0]` ist dasselbe wie `document.getElementsByTagName("iframe")[0].contentWindow`).
- Für weitere Details über den zurückgegebenen Wert, lesen Sie diesen [Thread auf mozilla.dev.platform](https://groups.google.com/g/mozilla.dev.platform/c/VijG80aFnU8).

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
