---
title: Web Audio `playbackRate` erklärt
slug: Web/Media/Audio_and_video_delivery/WebAudio_playbackRate_explained
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{QuickLinksWithSubPages("/de/docs/Web/Media")}}

Die [`playbackRate`](/de/docs/Web/API/HTMLMediaElement/playbackRate) Eigenschaft der {{ htmlelement("audio") }} und {{ htmlelement("video") }} Elemente ermöglicht es uns, die Geschwindigkeit oder das Tempo, mit dem ein Webaudio- oder Videostück abgespielt wird, zu ändern. Dieser Artikel erklärt `playbackRate` im Detail.

## Grundlagen von `playbackRate`

Lassen Sie uns mit einem kurzen Beispiel zur Verwendung von `playbackRate` beginnen:

```js
const audio = document.createElement("audio");
audio.setAttribute("src", "audio-file.mp3");
audio.playbackRate = 0.5;
```

Hier erstellen wir ein {{ htmlelement("audio") }} Element und setzen sein `src` auf eine Datei unserer Wahl. Anschließend setzen wir die `playbackRate` auf 0.5, was die Hälfte der normalen Geschwindigkeit darstellt (der `playbackRate` ist ein Multiplikator, der auf die ursprüngliche Geschwindigkeit angewendet wird).

## Ein vollständiges Beispiel

Lassen Sie uns zunächst ein {{ htmlelement("video") }} Element erstellen und Steuerungen für Video und Abspielgeschwindigkeit in HTML einrichten:

```html
<video id="myVideo" controls>
  <source
    src="http://jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v"
    type="video/mp4" />
  <source
    src="http://jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm"
    type="video/webm" />
</video>

<form>
  <input id="pbr" type="range" value="1" min="0.5" max="4" step="0.1" />
  <p>Playback Rate <span id="currentPbr">1</span></p>
</form>
```

Und dann etwas JavaScript darauf anwenden:

```js
window.onload = () => {
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
};
```

Schließlich lauschen wir auf das `input` Ereignis, das auf dem {{ htmlelement("input") }} Element ausgelöst wird, sodass wir auf die Änderung der Steuerung der Wiedergabegeschwindigkeit reagieren können.

> **Note:** [Probieren Sie dieses Beispiel live aus](https://jsbin.com/UGIxoJis/1/edit) und versuchen Sie, die Steuerung der Wiedergabegeschwindigkeit anzupassen, um den Effekt zu sehen.

## `defaultPlaybackRate` und `ratechange`

Zusätzlich zu `playbackRate` steht uns auch die `defaultPlaybackRate` Eigenschaft zur Verfügung, die es uns ermöglicht, die Standardwiedergabegeschwindigkeit festzulegen: die Wiedergabegeschwindigkeit, auf die das Medium zurückgesetzt wird, wenn zum Beispiel die Quelle des Videos geändert wird oder (in einigen Browsern) wenn ein `ended` Ereignis generiert wird.

`defaultPlaybackRate` ermöglicht es uns also, die Wiedergabegeschwindigkeit _vor_ der Wiedergabe des Mediums einzustellen, während `playbackRate` es uns erlaubt, sie während der Wiedergabe des Mediums zu ändern.

Es gibt auch ein Ereignis namens `ratechange`, das jedes Mal ausgelöst wird, wenn sich die `playbackRate` ändert.

### Anmerkungen

- Die meisten Browser stoppen das Abspielen von Audio außerhalb der `playbackRate` Grenzen von 0.5 und 4 und lassen das Video stumm weiterlaufen. Für die meisten Anwendungen wird empfohlen, den Bereich auf zwischen 0.5 und 4 zu begrenzen.
- Die Tonhöhe des Audiospuren ändert sich nicht, wenn `playbackRate` angepasst wird.
- Negative Werte, die anzeigen, dass das Medium rückwärts abgespielt werden soll, werden von den meisten Browsern derzeit nicht unterstützt.

## Siehe auch

- [Hyperaudio's Playback Rate Test](https://hyperaud.io/lab/pbr-test/)
- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement): Schnittstelle, die die [`playbackRate`](/de/docs/Web/API/HTMLMediaElement/playbackRate) Eigenschaft definiert.
