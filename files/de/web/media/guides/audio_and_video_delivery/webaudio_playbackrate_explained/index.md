---
title: Web-Audio-Wiedergabegeschwindigkeit erklärt
slug: Web/Media/Guides/Audio_and_video_delivery/WebAudio_playbackRate_explained
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

Die [`playbackRate`](/de/docs/Web/API/HTMLMediaElement/playbackRate)-Eigenschaft der {{ htmlelement("audio") }}- und {{ htmlelement("video") }}-Elemente ermöglicht es uns, die Geschwindigkeit oder Rate zu ändern, mit der ein Stück Web-Audio oder -Video abgespielt wird. Dieser Artikel erklärt `playbackRate` im Detail.

## Grundlagen von playbackRate

Beginnen wir mit einem kurzen Beispiel zur Nutzung von `playbackRate`:

```js
const audio = document.createElement("audio");
audio.setAttribute("src", "audio-file.mp3");
audio.playbackRate = 0.5;
```

Hier erstellen wir ein {{ htmlelement("audio") }}-Element und setzen seine `src` auf eine Datei unserer Wahl. Als nächstes setzen wir `playbackRate` auf 0.5, was die halbe Normalgeschwindigkeit darstellt (der `playbackRate` ist ein Multiplikator, der auf die ursprüngliche Rate angewendet wird).

## Ein vollständiges Beispiel

Zuerst erstellen wir ein {{ htmlelement("video") }}-Element und richten Video- und Wiedergaberatensteuerungen in HTML ein:

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

Und wenden etwas JavaScript darauf an:

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

Schließlich hören wir auf das `input`-Ereignis, das auf dem {{ htmlelement("input") }}-Element ausgelöst wird, sodass wir reagieren können, wenn die Wiedergaberatensteuerung geändert wird.

> **Note:** [Probieren Sie dieses Beispiel live aus](https://jsbin.com/UGIxoJis/1/edit), und versuchen Sie, die Wiedergaberatensteuerung anzupassen, um die Wirkung zu sehen.

## defaultPlaybackRate und ratechange

Zusätzlich zu `playbackRate` haben wir auch die `defaultPlaybackRate`-Eigenschaft, die es uns erlaubt, die Standard-Wiedergaberate einzustellen: die Wiedergaberate, auf die das Medium zurückgesetzt wird; zum Beispiel, wenn wir die Quelle des Videos ändern oder (in einigen Browsern) wenn ein `ended`-Ereignis generiert wird.

`defaultPlaybackRate` ermöglicht es uns also, die Wiedergaberate _vor_ der Wiedergabe des Mediums einzustellen, während `playbackRate` uns erlaubt, sie während der Medienwiedergabe zu ändern.

Es gibt auch ein Ereignis namens `ratechange`, das jedes Mal ausgelöst wird, wenn sich die `playbackRate` ändert.

### Hinweise

- Die meisten Browser stoppen die Audiowiedergabe außerhalb der `playbackRate`-Grenzen von 0.5 und 4, wodurch das Video leise weiterläuft. Für die meisten Anwendungen wird empfohlen, den Bereich auf zwischen 0.5 und 4 zu begrenzen.
- Die Tonhöhe der Audiospur ändert sich nicht, wenn `playBackRate` verändert wird.
- Negative Werte, die anzeigen, dass das Medium rückwärts abgespielt werden sollte, werden derzeit von den meisten Browsern nicht unterstützt.

## Siehe auch

- [Hyperaudio's Playback Rate Test](https://hyperaud.io/lab/pbr-test/)
- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement): Schnittstelle, die die [`playbackRate`](/de/docs/Web/API/HTMLMediaElement/playbackRate)-Eigenschaft definiert.
