---
title: Web Audio playbackRate erklärt
slug: Web/Media/Audio_and_video_delivery/WebAudio_playbackRate_explained
l10n:
  sourceCommit: 1d306a49f1584c1117bdf14d9b64bb0769d81c07
---

{{QuickLinksWithSubPages("/de/docs/Web/Media")}}

Die [`playbackRate`](/de/docs/Web/API/HTMLMediaElement/playbackRate) Eigenschaft der {{ htmlelement("audio") }} und {{ htmlelement("video") }} Elemente ermöglicht es uns, die Geschwindigkeit oder Rate zu ändern, mit der ein Stück Web-Audio oder Video abgespielt wird. Dieser Artikel erklärt `playbackRate` im Detail.

## Grundlagen von playbackRate

Beginnen wir mit einem kurzen Beispiel für die Verwendung von `playbackRate`:

```js
const audio = document.createElement("audio");
audio.setAttribute("src", "audiofile.mp3");
audio.playbackRate = 0.5;
```

Hier erstellen wir ein {{ htmlelement("audio") }}-Element und setzen seinen `src` auf eine Datei unserer Wahl. Anschließend setzen wir `playbackRate` auf 0.5, was die halbe normale Geschwindigkeit darstellt (die `playbackRate` ist ein Multiplikator, der auf die ursprüngliche Rate angewendet wird).

## Ein vollständiges Beispiel

Lassen Sie uns zuerst ein {{ htmlelement("video") }}-Element erstellen und Video- sowie Geschwindigkeitsregler in HTML einrichten:

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

Und fügen Sie etwas JavaScript hinzu:

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

Schließlich lauschen wir auf das `input`-Ereignis, das auf dem {{ htmlelement("input") }}-Element ausgelöst wird, damit wir reagieren können, wenn der Geschwindigkeitsregler verändert wird.

> **Note:** [Probieren Sie dieses Beispiel live aus](https://jsbin.com/UGIxoJis/1/edit) und versuchen Sie, den Geschwindigkeitsregler anzupassen, um den Effekt zu sehen.

## defaultPlaybackRate und ratechange

Zusätzlich zu `playbackRate` haben wir auch eine Eigenschaft `defaultPlaybackRate`, die es uns ermöglicht, die Standardwiedergabegeschwindigkeit festzulegen: die Wiedergabegeschwindigkeit, auf die das Medium zurückgesetzt wird, wenn wir beispielsweise die Quelle des Videos ändern oder (in einigen Browsern) wenn ein `ended` Ereignis erzeugt wird.

`defaultPlaybackRate` ermöglicht es uns also, die Wiedergabegeschwindigkeit _vor_ dem Abspielen des Mediums festzulegen, während `playbackRate` es uns erlaubt, sie während der Medienwiedergabe zu ändern.

Es gibt auch ein Ereignis namens `ratechange`, das jedes Mal ausgelöst wird, wenn sich die `playbackRate` verändert.

### Hinweise

- Die meisten Browser stoppen die Wiedergabe von Audio außerhalb der `playbackRate`-Grenzen von 0.5 und 4, lassen das Video aber stumm weiterlaufen. Für die meisten Anwendungen wird empfohlen, den Bereich auf zwischen 0.5 und 4 zu begrenzen.
- Die Tonhöhe der Audiospur ändert sich nicht, wenn `playBackRate` verändert wird.
- Negative Werte, die angeben, dass das Medium rückwärts abgespielt werden soll, werden derzeit von den meisten Browsern nicht unterstützt.

## Siehe auch

- [Playback Rate Test von Hyperaudio](https://hyperaud.io/lab/pbr-test/)
- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement): Schnittstelle, die die [`playbackrate`](/de/docs/Web/API/HTMLMediaElement/playbackRate) Eigenschaft definiert.
