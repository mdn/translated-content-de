---
title: Web-Audio-playbackRate erklärt
slug: Web/Media/Guides/Audio_and_video_delivery/WebAudio_playbackRate_explained
l10n:
  sourceCommit: 6036cd414b2214f85901158bdf3e3a96123d4553
---

Die [`playbackRate`](/de/docs/Web/API/HTMLMediaElement/playbackRate)-Eigenschaft der {{ htmlelement("audio") }}- und {{ htmlelement("video") }}-Elemente ermöglicht es uns, die Geschwindigkeit oder Rate zu ändern, mit der ein Stück Web-Audio oder Video abgespielt wird. Dieser Artikel erklärt `playbackRate` im Detail.

## Grundlagen der playbackRate

Lassen Sie uns mit einem kurzen Beispiel zur Nutzung von `playbackRate` beginnen:

```js
const audio = document.createElement("audio");
audio.setAttribute("src", "audio-file.mp3");
audio.playbackRate = 0.5;
```

Hier erstellen wir ein {{ htmlelement("audio") }}-Element und setzen dessen `src` auf eine Datei unserer Wahl. Als nächstes setzen wir `playbackRate` auf 0.5, was der halben normalen Geschwindigkeit entspricht (die `playbackRate` ist ein Multiplikator, der auf die Originalrate angewendet wird).

## Ein vollständiges Beispiel

Lassen Sie uns zuerst ein {{ htmlelement("video") }}-Element erstellen und Videound Wiedergabegeschwindigkeitssteuerungen in HTML einrichten:

```html
<video id="myVideo" controls loop>
  <source src="/shared-assets/videos/flower.mp4" type="video/mp4" />
  <source src="/shared-assets/videos/flower.webm" type="video/webm" />
</video>

<form>
  <input id="pbr" type="range" value="1" min="0.5" max="4" step="0.1" />
  <p>Playback Rate <span id="currentPbr">1</span></p>
</form>
```

Ein wenig grundlegendes CSS:

```css
form {
  font-family: monospace;
}

video {
  width: 500px;
  aspect-ratio: 16 / 9;
}
```

Und wenden etwas JavaScript darauf an:

```js
const v = document.getElementById("myVideo");
const p = document.getElementById("pbr");
const c = document.getElementById("currentPbr");

p.addEventListener("input", () => {
  c.textContent = p.value;
  v.playbackRate = p.value;
});
```

Schließlich hören wir auf das `input`-Ereignis, das beim {{ htmlelement("input") }}-Element ausgelöst wird, wodurch wir auf die Änderung der Wiedergabegeschwindigkeitssteuerung reagieren können.

{{EmbedLiveSample("ein vollständiges Beispiel", "", 400)}}

## defaultPlaybackRate und ratechange

Zusätzlich zu `playbackRate` haben wir auch eine `defaultPlaybackRate`-Eigenschaft verfügbar, die es uns ermöglicht, die Standardwiedergaberate festzulegen: die Wiedergaberate, auf die das Medium zurückgesetzt wird; zum Beispiel, wenn wir die Quelle des Videos ändern oder (in einigen Browsern) wenn ein `ended`-Ereignis erzeugt wird.

`defaultPlaybackRate` erlaubt es uns also, die Wiedergaberate _vor_ dem Abspielen des Mediums festzulegen, während `playbackRate` es uns ermöglicht, sie während der Medienwiedergabe zu ändern.

Es gibt auch ein verfügbares Ereignis namens `ratechange`, das jedes Mal ausgelöst wird, wenn sich die `playbackRate` ändert.

### Hinweise

- Die meisten Browser stoppen die Audiowiedergabe außerhalb der `playbackRate`-Grenzen von 0.5 und 4, wodurch das Video stumm abgespielt wird. Für die meisten Anwendungen wird empfohlen, den Bereich auf zwischen 0.5 und 4 zu begrenzen.
- Die Tonhöhe der Audiospur ändert sich nicht, wenn `playBackRate` verändert wird.
- Negative Werte, die anzeigen, dass das Medium rückwärts spielen soll, werden derzeit von den meisten Browsern nicht unterstützt.

## Siehe auch

- [Hyperaudio's Playback Rate Test](https://hyperaud.io/lab/pbr-test/)
- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement): Schnittstelle, die die [`playbackRate`](/de/docs/Web/API/HTMLMediaElement/playbackRate)-Eigenschaft definiert.
