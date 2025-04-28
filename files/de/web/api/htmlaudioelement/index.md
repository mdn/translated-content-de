---
title: HTMLAudioElement
slug: Web/API/HTMLAudioElement
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{APIRef("HTML DOM")}}

Das **`HTMLAudioElement`**-Interface bietet Zugriff auf die Eigenschaften von {{HTMLElement("audio")}}-Elementen sowie Methoden zu deren Manipulation.

Dieses Element basiert auf dem [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Interface und erbt von diesem Eigenschaften und Methoden.

{{InheritanceDiagram}}

## Konstruktor

- [`Audio()`](/de/docs/Web/API/HTMLAudioElement/Audio)
  - : Erstellt und gibt ein neues `HTMLAudioElement`-Objekt zurück. Optional kann der Ladevorgang einer Audio-Datei in das Objekt gestartet werden, wenn die Dateiadresse angegeben ist.

## Instanz-Eigenschaften

_Keine spezifischen Eigenschaften; erbt Eigenschaften von seinem Elterninterface [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und vom [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Instanz-Methoden

_Erbt Methoden von seinem Elterninterface [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und vom [`HTMLElement`](/de/docs/Web/API/HTMLElement). Es bietet keine eigenen Methoden an._

## Beispiele

### Grundlegende Verwendung

Sie können ein `HTMLAudioElement` vollständig mit JavaScript unter Verwendung des [`Audio()`](/de/docs/Web/API/HTMLAudioElement/Audio)-Konstruktors erstellen:

```js
const audioElement = new Audio("car_horn.wav");
```

dann können Sie die `play()`-Methode auf dem Element aufrufen

```js
audioElement.play();
```

> [!NOTE]
> Ein häufiger Fehler ist der Versuch, ein Audio-Element direkt beim Laden der Seite abzuspielen. Die Standard-Autoplay-Richtlinie moderner Browser wird dies blockieren. Weitere Informationen finden Sie bei [Firefox](https://hacks.mozilla.org/2019/02/firefox-66-to-block-automatically-playing-audible-video-and-audio/) und [Chrome](https://developer.chrome.com/blog/autoplay/) für bewährte Verfahren und Umgehungen.

Einige der am häufigsten verwendeten Eigenschaften des Audio-Elements sind [`src`](/de/docs/Web/API/HTMLMediaElement/src), [`currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime), [`duration`](/de/docs/Web/API/HTMLMediaElement/duration), [`paused`](/de/docs/Web/API/HTMLMediaElement/paused), [`muted`](/de/docs/Web/API/HTMLMediaElement/muted) und [`volume`](/de/docs/Web/API/HTMLMediaElement/volume). Dieses Snippet kopiert die Dauer der Audiodatei in eine Variable:

```js
const audioElement = new Audio("car_horn.wav");
audioElement.addEventListener("loadeddata", () => {
  let duration = audioElement.duration;
  // The duration variable now holds the duration (in seconds) of the audio clip
});
```

## Events

_Erbt Methoden von seinem Elterninterface [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und von seinem Vorfahren [`HTMLElement`](/de/docs/Web/API/HTMLElement)._ Sie können Events mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) überwachen oder einen Event-Listener an die `oneventname`-Eigenschaft dieses Interfaces zuweisen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web-Medientechnologien](/de/docs/Web/Media)
- [Audio- und Video-Bereitstellung](/de/docs/Web/Media/Guides/Audio_and_video_delivery)
- HTML-Element, das dieses Interface implementiert: {{HTMLElement("audio")}}.
