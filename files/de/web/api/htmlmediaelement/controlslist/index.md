---
title: "HTMLMediaElement: controlsList-Eigenschaft"
short-title: controlsList
slug: Web/API/HTMLMediaElement/controlsList
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`controlsList`** der Schnittstelle [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) gibt eine DOMTokenList zurück. Sie hilft dem User Agent bei der Auswahl der Steuerelemente, die auf dem Medienelement angezeigt werden, wenn der User Agent eigene Steuerelemente anzeigt. Die DOMTokenList enthält einen oder mehrere von drei möglichen Werten: `nodownload`, `nofullscreen` und `noremoteplayback`.

## Wert

Eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList).

Der Wert von `controlsList` kann gesetzt werden, indem eine Zeichenfolge übergeben wird, die die Eigenschaft [`value`](/de/docs/Web/API/DOMTokenList/value) der `DOMTokenList` repräsentiert.

## Beispiele

### Die controlsList-Eigenschaft abrufen

Die Eigenschaft `controlsList` gibt ein [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Objekt zurück, das den aktuell gesetzten Wert enthält.

```js
const video = document.createElement("video");
console.log(video.controlsList.value); // ""

video.controlsList.add("noremoteplayback");
console.log(video.controlsList.value); // "noremoteplayback"
```

### Die controlsList-Eigenschaft setzen

Sie können `controlsList` auch ändern, indem Sie der Eigenschaft direkt eine Zeichenfolge mit dem neuen Wert zuweisen.

```js
const audio = document.createElement("audio");
audio.controlsList = "nodownload";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Chrome-Beispiel für HTMLMediaElement controlsList](https://googlechrome.github.io/samples/media/controlslist.html)
