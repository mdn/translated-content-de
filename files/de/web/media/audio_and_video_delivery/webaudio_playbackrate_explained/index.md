---
title: Web Audio playbackRate erklärt
slug: Web/Media/Audio_and_video_delivery/WebAudio_playbackRate_explained
l10n:
  sourceCommit: 1d306a49f1584c1117bdf14d9b64bb0769d81c07
---

{{QuickLinksWithSubPages("/de/docs/Web/Media")}}

Die [`playbackRate`](/de/docs/Web/API/HTMLMediaElement/playbackRate) Eigenschaft der {{ htmlelement("audio") }} und {{ htmlelement("video") }} Elemente erlaubt es uns, die Geschwindigkeit oder das Tempo zu ändern, mit dem ein Webaudio- oder Videostück abgespielt wird. Dieser Artikel erklärt `playbackRate` im Detail.

## Grundlagen von playbackRate

Beginnen wir mit einem kurzen Beispiel zur Verwendung von `playbackRate`:

```js
const audio = document.createElement("audio");
audio.setAttribute("src", "audiofile.mp3");
audio.playbackRate = 0.5;
```

Hier erzeugen wir ein {{ htmlelement("audio") }} Element und setzen dessen `src` auf eine Datei unserer Wahl. Als nächstes setzen wir `playbackRate` auf 0,5, was der halben normalen Geschwindigkeit entspricht (der `playbackRate` ist ein Multiplikator, der auf die ursprüngliche Rate angewendet wird).

## Ein vollständiges Beispiel

Lassen Sie uns zuerst ein {{ htmlelement("video") }} Element erstellen und Video- und Wiedergabegeschwindigkeitssteuerungen in HTML einrichten:

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

Und einige JavaScript darauf anwenden:

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

Schließlich horchen wir auf das `input` Ereignis, das auf dem {{ htmlelement("input") }} Element ausgelöst wird, damit wir auf die Änderung der Wiedergabegeschwindigkeitssteuerung reagieren können.

> **Note:** [Probieren Sie dieses Beispiel live aus](https://jsbin.com/UGIxoJis/1/edit) und versuchen Sie, die Wiedergabegeschwindigkeit zu ändern, um den Effekt zu sehen.

## defaultPlaybackRate und ratechange

Zusätzlich zu `playbackRate` haben wir auch eine `defaultPlaybackRate` Eigenschaft zur Verfügung, die es uns ermöglicht, die Standard-Wiedergabegeschwindigkeit festzulegen: die Wiedergabegeschwindigkeit, auf die das Medium zurückgesetzt wird; beispielsweise wenn wir die Quelle des Videos ändern oder (in einigen Browsern) wenn ein `ended` Ereignis generiert wird.

Die `defaultPlaybackRate` ermöglicht es uns also, die Wiedergabegeschwindigkeit _vor_ dem Abspielen des Mediums festzulegen, während `playbackRate` es uns erlaubt, sie während der Wiedergabe des Mediums zu ändern.

Es gibt auch ein Ereignis namens `ratechange`, das jedes Mal ausgelöst wird, wenn sich die `playbackRate` ändert.

### Hinweise

- Die meisten Browser stoppen die Audiowiedergabe außerhalb der `playbackRate` Grenzen von 0,5 und 4, wodurch das Video stumm weiterläuft. Für die meisten Anwendungen wird empfohlen, den Bereich auf zwischen 0,5 und 4 zu begrenzen.
- Die Tonhöhe der Tonspur ändert sich nicht, wenn `playbackRate` verändert wird.
- Negative Werte, die anzeigen, dass das Medium rückwärts abgespielt werden soll, werden von den meisten Browsern derzeit nicht unterstützt.

## Siehe auch

- [Hyperaudio's Playback Rate Test](https://hyperaud.io/lab/pbr-test/)
- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement): Schnittstelle, die die [`playbackrate`](/de/docs/Web/API/HTMLMediaElement/playbackRate) Eigenschaft definiert.
