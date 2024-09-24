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

Ein Doppelter (double). `1.0` ist "normale Geschwindigkeit", Werte unter `1.0` lassen das Medium langsamer als normal abspielen, höhere Werte lassen es schneller abspielen.

### Ausnahmen

- `NotSupportedError` {{domxref("DOMException")}}
  - : Ausgelöst, wenn der angegebene Wert nicht unterstützt wird.

## Beispiele

```js
const obj = document.createElement("video");
console.log(obj.defaultPlaybackRate); // 1
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("HTMLMediaElement")}}: Schnittstelle, die verwendet wird, um die Eigenschaft `HTMLMediaElement.defaultPlaybackRate` zu definieren
