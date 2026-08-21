---
title: "Window: frames-Eigenschaft"
short-title: frames
slug: Web/API/Window/frames
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("HTML DOM")}}

Gibt das Fenster selbst zurück, welches ein array-ähnliches Objekt ist, das die direkten Unter-Frames des aktuellen Fensters auflistet.

## Wert

Eine Liste von Frame-Objekten. Es ist einem Array ähnlich, da es eine `length`-Eigenschaft besitzt und seine Elemente mit der `[i]`-Notation angesprochen werden können.

- `frames === window` wird als wahr ausgewertet.
- Jedes Element im `window.frames` Pseudo-Array repräsentiert das entsprechende [`Window`](/de/docs/Web/API/Window) Objekt des angegebenen {{HTMLElement("frame")}}- oder {{HTMLElement("iframe")}}-Inhalts, nicht das `frame` oder `iframe`-DOM-Element (d.h. `window.frames[0]` ist dasselbe wie `document.getElementsByTagName("iframe")[0].contentWindow`).
- Für weitere Details über den zurückgegebenen Wert, beziehen Sie sich auf diesen [Thread auf mozilla.dev.platform](https://groups.google.com/g/mozilla.dev.platform/c/VijG80aFnU8).

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
