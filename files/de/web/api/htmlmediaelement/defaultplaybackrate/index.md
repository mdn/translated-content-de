---
title: "HTMLMediaElement: Eigenschaft defaultPlaybackRate"
short-title: defaultPlaybackRate
slug: Web/API/HTMLMediaElement/defaultPlaybackRate
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

Die **`HTMLMediaElement.defaultPlaybackRate`**-Eigenschaft gibt die standardmäßige Wiedergabegeschwindigkeit für das Medium an.

## Wert

Ein Double. `1.0` entspricht der "normalen Geschwindigkeit", Werte unter `1.0` verlangsamen die Wiedergabe, höhere Werte beschleunigen sie.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn der angegebene Wert nicht unterstützt wird.

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

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement): Schnittstelle, die verwendet wird, um die Eigenschaft `HTMLMediaElement.defaultPlaybackRate` zu definieren
