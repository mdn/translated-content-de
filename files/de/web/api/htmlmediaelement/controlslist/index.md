---
title: "HTMLMediaElement: Eigenschaft `controlsList`"
short-title: controlsList
slug: Web/API/HTMLMediaElement/controlsList
l10n:
  sourceCommit: 281a6e50be0858c0200a59aac6b4a3f1b64116dc
---

{{APIRef("HTML DOM")}}

Die **`controlsList`**-Eigenschaft der
[`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Schnittstelle gibt ein DOMTokenList-Objekt zurück, das dem Benutzeragenten hilft, auszuwählen, welche Steuerelemente auf dem Medienelement angezeigt werden sollen, wann immer der Benutzeragent seine eigenen Steuerelemente zeigt. Die DOMTokenList nimmt einen oder mehrere der drei möglichen Werte an: `nodownload`, `nofullscreen` und `noremoteplayback`.

## Wert

Eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList).

Der Wert von `controlsList` kann gesetzt werden, indem ein String übergeben wird, der die [`value`](/de/docs/Web/API/DOMTokenList/value)-Eigenschaft der `DOMTokenList` repräsentiert.

## Beispiele

### Abrufen der `controlsList`-Eigenschaft

Die `controlsList`-Eigenschaft gibt ein [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Objekt zurück, das den aktuell gesetzten Wert enthält.

```js
const video = document.createElement("video");
console.log(video.controlsList.value); // ""

video.controlsList.add("noremoteplayback");
console.log(video.controlsList.value); // "noremoteplayback"
```

### Setzen der `controlsList`-Eigenschaft

Sie können `controlsList` auch ändern, indem Sie es direkt auf einen String mit dem neuen Wert setzen.

```js
const audio = document.createElement("audio");
audio.controlsList = "nodownload";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Chrome HTMLMediaElement controlsList Beispiel](https://googlechrome.github.io/samples/media/controlslist.html)
