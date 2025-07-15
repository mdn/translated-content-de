---
title: Web Audio `playbackRate` erklärt
slug: Web/Media/Guides/Audio_and_video_delivery/WebAudio_playbackRate_explained
l10n:
  sourceCommit: a318c45b5f0b4b8448d9c6b857206552e0e82980
---

Die [`playbackRate`](/de/docs/Web/API/HTMLMediaElement/playbackRate)-Eigenschaft der {{ htmlelement("audio") }} und {{ htmlelement("video") }} Elemente ermöglicht es uns, die Geschwindigkeit oder Rate zu ändern, mit der ein Stück Web-Audio oder Video abgespielt wird. Dieser Artikel erklärt `playbackRate` im Detail.

## Grundlagen von `playbackRate`

Lassen Sie uns mit einem kurzen Beispiel zur Verwendung von `playbackRate` beginnen:

```js
const audio = document.createElement("audio");
audio.setAttribute("src", "audio-file.mp3");
audio.playbackRate = 0.5;
```

Hier erstellen wir ein {{ htmlelement("audio") }} Element und setzen dessen `src` auf eine Datei unserer Wahl. Als Nächstes setzen wir `playbackRate` auf 0.5, was die halbe normale Geschwindigkeit darstellt (die `playbackRate` ist ein Multiplikator, der auf die Originalrate angewendet wird).

## Ein vollständiges Beispiel

Als erstes erstellen wir ein {{ htmlelement("video") }} Element und richten Video- und Wiedergabegeschwindigkeitssteuerungen in HTML ein:

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

Und etwas JavaScript dazu:

```js
const v = document.getElementById("myVideo");
const p = document.getElementById("pbr");
const c = document.getElementById("currentPbr");

p.addEventListener(
  "input",
  () => {
    c.textContent = p.value;
    v.playbackRate = p.value;
  },
  false,
);
```

Schließlich hören wir auf das `input`-Ereignis, das auf dem {{ htmlelement("input") }} Element ausgelöst wird, damit wir auf die Änderung der Wiedergabegeschwindigkeit reagieren können.

{{EmbedLiveSample("ein vollständiges Beispiel", "", 400)}}

## `defaultPlaybackRate` und `ratechange`

Zusätzlich zu `playbackRate` haben wir auch eine `defaultPlaybackRate`-Eigenschaft zur Verfügung, die es uns ermöglicht, die Standard-Wiedergabegeschwindigkeit festzulegen: die Geschwindigkeit, auf die das Medium zurückgesetzt wird; zum Beispiel, wenn wir die Quelle des Videos ändern oder (in einigen Browsern) wenn ein `ended`-Ereignis generiert wird.

Also erlaubt uns `defaultPlaybackRate`, die Wiedergabegeschwindigkeit _vor_ dem Abspielen des Mediums einzustellen, während `playbackRate` es uns ermöglicht, sie während der Medienwiedergabe zu ändern.

Es gibt auch ein Ereignis namens `ratechange`, das jedes Mal ausgelöst wird, wenn sich `playbackRate` ändert.

### Hinweise

- Die meisten Browser stoppen die Audiowiedergabe außerhalb der `playbackRate`-Grenzen von 0.5 und 4, wodurch das Video stumm weiterläuft. Für die meisten Anwendungen wird empfohlen, den Bereich auf zwischen 0.5 und 4 zu begrenzen.
- Die Tonhöhe der Audio-Spur ändert sich nicht, wenn `playBackRate` geändert wird.
- Negative Werte, die anzeigen, dass das Medium rückwärts abgespielt werden soll, werden von den meisten Browsern derzeit nicht unterstützt.

## Siehe auch

- [Hyperaudio's Playback Rate Test](https://hyperaud.io/lab/pbr-test/)
- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement): Schnittstelle, die die [`playbackRate`](/de/docs/Web/API/HTMLMediaElement/playbackRate)-Eigenschaft definiert.
