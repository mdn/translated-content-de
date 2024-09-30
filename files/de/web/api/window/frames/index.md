---
title: "Window: frames-Eigenschaft"
short-title: frames
slug: Web/API/Window/frames
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{APIRef("DOM")}}

Gibt das Fenster selbst zurück, welches ein array-ähnliches Objekt darstellt, das die direkten Unter-Frames des aktuellen Fensters auflistet.

## Wert

Eine Liste von Frame-Objekten. Es ist ähnlich wie ein
Array, da es eine `length` Eigenschaft hat und seine Elemente mit der `[i]` Notation zugänglich sind.

- `frameList === window` ergibt true.
- Jedes Element im `window.frames` Pseudo-Array repräsentiert das [`Window`](/de/docs/Web/API/Window)
  Objekt, das dem Inhalt des betreffenden {{HTMLElement("frame")}} oder
  {{HTMLElement("iframe")}} entspricht, nicht das `frame` oder `iframe` DOM-Element (d.h.,
  `window.frames[0]` ist dasselbe wie
  `document.getElementsByTagName("iframe")[0].contentWindow`).
- Für weitere Details über den zurückgegebenen Wert, siehe diesen [Thread auf mozilla.dev.platform](https://groups.google.com/g/mozilla.dev.platform/c/VijG80aFnU8).

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
