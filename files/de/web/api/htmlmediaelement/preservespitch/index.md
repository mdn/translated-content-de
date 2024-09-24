---
title: "HTMLMediaElement: preservesPitch-Eigenschaft"
short-title: preservesPitch
slug: Web/API/HTMLMediaElement/preservesPitch
l10n:
  sourceCommit: c3be131cfd2c33822cb36b21cb4fca78980a6b4e
---

{{APIRef("HTML DOM")}}

Die **`HTMLMediaElement.preservesPitch`**-Eigenschaft bestimmt, ob der Browser die Tonhöhe des Audios anpassen soll, um Änderungen der Wiedergabegeschwindigkeit auszugleichen, die durch das Setzen von {{domxref("HTMLMediaElement.playbackRate")}} vorgenommen werden.

## Wert

Ein boolescher Wert, der standardmäßig auf `true` gesetzt ist.

## Beispiele

### Einstellen der preservesPitch-Eigenschaft

In diesem Beispiel haben wir ein {{HTMLElement("audio")}}-Element, ein Range-Steuerelement, das die Wiedergabegeschwindigkeit anpasst, und ein Kontrollkästchen, das `preservesPitch` setzt.

Versuchen Sie, das Audio abzuspielen, dann die Wiedergabegeschwindigkeit anzupassen und anschließend das Kontrollkästchen ein- und auszuschalten.

```html
<audio
  controls
  src="https://mdn.github.io/webaudio-examples/audio-basics/outfoxing.mp3"></audio>

<div>
  <label for="rate">Wiedergabegeschwindigkeit anpassen:</label>
  <input id="rate" type="range" min="0.25" max="3" step="0.05" value="1" />
</div>

<div>
  <label for="pitch">Tonhöhe beibehalten:</label>
  <input type="checkbox" id="pitch" name="pitch" checked />
</div>
```

```css hidden
div {
  margin: 0.5rem 0;
}
```

```js
const audio = document.querySelector("audio");
document.getElementById("rate").addEventListener("change", (e) => {
  audio.playbackRate = e.target.value;
});
document.getElementById("pitch").addEventListener("change", (e) => {
  audio.preservesPitch = e.target.checked;
});
```

{{EmbedLiveSample("Setting the preservesPitch property")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLMediaElement.playbackRate")}}
- [Web Audio playbackRate erklärt](/de/docs/Web/Media/Audio_and_video_delivery/WebAudio_playbackRate_explained)
