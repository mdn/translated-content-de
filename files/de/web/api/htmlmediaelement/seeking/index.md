---
title: "HTMLMediaElement: seeking-Eigenschaft"
short-title: seeking
slug: Web/API/HTMLMediaElement/seeking
l10n:
  sourceCommit: 2e84c228bf55def31fcd3ac3a0227b5faed99657
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`seeking`**-Eigenschaft des [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Interfaces ist ein Boolean-Wert, der angibt, ob die Ressource, das {{htmlelement("audio")}} oder {{htmlelement("video")}}, gerade dabei ist, zu einer neuen Position zu springen.

## Wert

Ein boolean-Wert.

## Beispiele

```js
const el = document.querySelector("video");
console.log(el.seeking); // true or false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)-Ereignis
- [`seeked`](/de/docs/Web/API/HTMLMediaElement/seeked_event)-Ereignis
- [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)
- [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)
