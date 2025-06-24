---
title: Web-Audio-Wiedergabegeschwindigkeit (playbackRate) erklärt
slug: Web/Media/Guides/Audio_and_video_delivery/WebAudio_playbackRate_explained
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

Die [`playbackRate`](/de/docs/Web/API/HTMLMediaElement/playbackRate)-Eigenschaft der {{ htmlelement("audio") }}- und {{ htmlelement("video") }}-Elemente ermöglicht es uns, die Geschwindigkeit oder Rate, mit der ein Web-Audio- oder Video-Element abgespielt wird, zu ändern. Dieser Artikel erklärt `playbackRate` im Detail.

## Grundlagen der playbackRate

Beginnen wir mit einem kurzen Beispiel zur Nutzung von `playbackRate`:

```js
const audio = document.createElement("audio");
audio.setAttribute("src", "audio-file.mp3");
audio.playbackRate = 0.5;
```

Hier erstellen wir ein {{ htmlelement("audio") }}-Element und setzen dessen `src` auf eine Datei unserer Wahl. Danach setzen wir `playbackRate` auf 0.5, was die halbe normale Geschwindigkeit darstellt (die `playbackRate` ist ein Multiplikator, der auf die Originalrate angewendet wird).

## Ein vollständiges Beispiel

Lassen Sie uns zunächst ein {{ htmlelement("video") }}-Element erstellen und Video- sowie Wiedergabegeschwindigkeitssteuerungen im HTML einrichten:

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

Und wenden Sie etwas JavaScript darauf an:

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

Schließlich hören wir auf das `input`-Ereignis, das auf dem {{ htmlelement("input") }}-Element ausgelöst wird, wodurch wir auf die Änderung der Wiedergabegeschwindigkeitssteuerung reagieren können.

> [!NOTE] > [Probieren Sie dieses Beispiel live aus](https://jsbin.com/UGIxoJis/1/edit) und versuchen Sie, die Wiedergabegeschwindigkeitssteuerung anzupassen, um den Effekt zu sehen.

## defaultPlaybackRate und ratechange

Zusätzlich zu `playbackRate` haben wir auch eine `defaultPlaybackRate`-Eigenschaft, die es uns ermöglicht, die Standardwiedergabegeschwindigkeit festzulegen: die Wiedergabegeschwindigkeit, auf die sich das Medium zurücksetzt; beispielsweise, wenn wir die Quelle des Videos ändern oder (in einigen Browsern), wenn ein `ended`-Ereignis generiert wird.

`defaultPlaybackRate` ermöglicht es uns, die Wiedergabegeschwindigkeit _vor_ dem Abspielen des Mediums festzulegen, während `playbackRate` uns ermöglicht, sie während der Medienwiedergabe zu ändern.

Es gibt auch ein Ereignis namens `ratechange`, das jedes Mal ausgelöst wird, wenn sich `playbackRate` ändert.

### Hinweise

- Die meisten Browser stoppen die Audiowiedergabe außerhalb der `playbackRate`-Grenzen von 0.5 und 4, und das Video läuft stumm weiter. Für die meisten Anwendungen wird empfohlen, den Bereich auf 0.5 bis 4 zu begrenzen.
- Die Tonhöhe der Audiospur ändert sich nicht, wenn `playbackRate` geändert wird.
- Negative Werte, die anzeigen, dass das Medium rückwärts abgespielt werden soll, werden derzeit von den meisten Browsern nicht unterstützt.

## Siehe auch

- [Hyperaudios Wiedergaberaten-Test](https://hyperaud.io/lab/pbr-test/)
- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement): Schnittstelle, die die [`playbackRate`](/de/docs/Web/API/HTMLMediaElement/playbackRate)-Eigenschaft definiert.
