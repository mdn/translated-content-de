---
title: Web Audio-Wiedergabegeschwindigkeit erklärt
slug: Web/Media/Audio_and_video_delivery/WebAudio_playbackRate_explained
l10n:
  sourceCommit: 1d306a49f1584c1117bdf14d9b64bb0769d81c07
---

{{QuickLinksWithSubPages("/de/docs/Web/Media")}}

Die Eigenschaft {{domxref("HTMLMediaElement.playbackRate", "playbackRate")}} der {{ htmlelement("audio") }} und {{ htmlelement("video") }}-Elemente ermöglicht es uns, die Geschwindigkeit oder Rate zu ändern, mit der ein Stück Web-Audio oder -Video abgespielt wird. Dieser Artikel erklärt `playbackRate` im Detail.

## Grundlagen der playbackRate

Lassen Sie uns mit einem kurzen Beispiel der Nutzung von `playbackRate` beginnen:

```js
const audio = document.createElement("audio");
audio.setAttribute("src", "audiofile.mp3");
audio.playbackRate = 0.5;
```

Hier erstellen wir ein {{ htmlelement("audio") }}-Element und setzen dessen `src`-Attribut auf eine Datei unserer Wahl. Anschließend setzen wir `playbackRate` auf 0.5, was der halben normalen Geschwindigkeit entspricht (die `playbackRate` ist ein Multiplikator, der auf die ursprüngliche Rate angewendet wird).

## Ein vollständiges Beispiel

Erstellen wir zunächst ein {{ htmlelement("video") }}-Element und richten Video- und Wiedergabegeschwindigkeits-Steuerelemente in HTML ein:

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
  <p>Wiedergabegeschwindigkeit <span id="currentPbr">1</span></p>
</form>
```

Und wenden ein wenig JavaScript darauf an:

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

Schließlich hören wir auf das `input`-Ereignis, das auf dem {{ htmlelement("input") }}-Element ausgelöst wird, was uns ermöglicht, auf die Änderung der Wiedergabegeschwindigkeitssteuerung zu reagieren.

> **Note:** [Versuchen Sie dieses Beispiel live](https://jsbin.com/UGIxoJis/1/edit), und probieren Sie die Anpassung der Wiedergabegeschwindigkeitssteuerung aus, um den Effekt zu sehen.

## defaultPlaybackRate und ratechange

Zusätzlich zu `playbackRate` haben wir auch eine `defaultPlaybackRate`-Eigenschaft zur Verfügung, die es uns ermöglicht, die Standardwiedergabegeschwindigkeit festzulegen: die Wiedergabegeschwindigkeit, auf die die Medien zurückgesetzt werden; beispielsweise, wenn wir die Quelle des Videos ändern oder (in einigen Browsern) wenn ein `ended`-Ereignis erzeugt wird.

`defaultPlaybackRate` ermöglicht es uns also, die Wiedergabegeschwindigkeit _vor_ dem Abspielen der Medien festzulegen, während `playbackRate` es uns ermöglicht, sie während der Medienwiedergabe zu ändern.

Es gibt auch ein verfügbares Ereignis namens `ratechange`, das jedes Mal ausgelöst wird, wenn sich die `playbackRate` ändert.

### Hinweise

- Die meisten Browser stellen das Abspielen von Audio außerhalb der `playbackRate`-Grenzen von 0.5 und 4 ein, während das Video stumm weiterläuft. Für die meisten Anwendungen wird empfohlen, den Bereich auf zwischen 0.5 und 4 zu beschränken.
- Die Tonhöhe der Audiospur ändert sich nicht, wenn `playbackRate` verändert wird.
- Negative Werte, die anzeigen, dass das Medium rückwärts abgespielt werden soll, werden derzeit von den meisten Browsern nicht unterstützt.

## Siehe auch

- [Hyperaudio's Playback Rate Test](https://hyperaud.io/lab/pbr-test/)
- {{domxref("HTMLMediaElement")}}: Schnittstelle, die die {{domxref("HTMLMediaElement.playbackRate", "playbackrate")}}-Eigenschaft definiert.
