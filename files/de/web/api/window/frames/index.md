---
title: "Window: frames-Eigenschaft"
short-title: frames
slug: Web/API/Window/frames
l10n:
  sourceCommit: fff34aeef99745d594b618950330cb8333e9bfc6
---

{{APIRef("DOM")}}

Gibt das Fenster selbst zurück, das ein array-ähnliches Objekt ist und die direkten Unter-Frames des aktuellen Fensters auflistet.

## Wert

Eine Liste von Frame-Objekten. Es ist ähnlich wie ein Array, da es eine `length`-Eigenschaft hat und seine Elemente mit der `[i]`-Notation aufgerufen werden können.

- `frames === window` ergibt true.
- Jedes Element im `window.frames` Pseudo-Array repräsentiert das [`Window`](/de/docs/Web/API/Window)
  Objekt, das dem Inhalt des angegebenen {{HTMLElement("frame")}} oder {{HTMLElement("iframe")}} entspricht, nicht das `frame` oder `iframe` DOM-Element (d.h. `window.frames[0]` ist dasselbe wie `document.getElementsByTagName("iframe")[0].contentWindow`).
- Für weitere Details über den zurückgegebenen Wert lesen Sie diesen [Thread auf mozilla.dev.platform](https://groups.google.com/g/mozilla.dev.platform/c/VijG80aFnU8).

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
