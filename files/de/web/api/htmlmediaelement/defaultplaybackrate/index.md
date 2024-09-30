---
title: "HTMLMediaElement: Eigenschaft defaultPlaybackRate"
short-title: defaultPlaybackRate
slug: Web/API/HTMLMediaElement/defaultPlaybackRate
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

Die **`HTMLMediaElement.defaultPlaybackRate`**-Eigenschaft gibt die Standardwiedergabegeschwindigkeit für die Medien an.

## Wert

Ein Double. `1.0` ist "normale Geschwindigkeit", Werte kleiner als `1.0` lassen das Medium langsamer als normal abspielen, höhere Werte beschleunigen die Wiedergabe.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene Wert nicht unterstützt wird.

## Beispiele

```js
const obj = document.createElement("video");
console.log(obj.defaultPlaybackRate); // 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement): Schnittstelle zur Definition der Eigenschaft `HTMLMediaElement.defaultPlaybackRate`
