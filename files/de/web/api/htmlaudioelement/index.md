---
title: HTMLAudioElement
slug: Web/API/HTMLAudioElement
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{APIRef("HTML DOM")}}

Das **`HTMLAudioElement`**-Interface bietet Zugriff auf die Eigenschaften von {{HTMLElement("audio")}}-Elementen sowie Methoden zu deren Manipulation.

Dieses Element basiert auf dem [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Interface und erbt dessen Eigenschaften und Methoden.

{{InheritanceDiagram}}

## Konstruktor

- [`Audio()`](/de/docs/Web/API/HTMLAudioElement/Audio)
  - : Erstellt und gibt ein neues `HTMLAudioElement`-Objekt zurück und beginnt optional mit dem Laden einer Audiodatei, wenn die Datei-URL angegeben wird.

## Instanz-Eigenschaften

_Keine spezifischen Eigenschaften; erbt Eigenschaften von seinem übergeordneten [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und von [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Instanz-Methoden

_Erbt Methoden von seinem übergeordneten [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und von [`HTMLElement`](/de/docs/Web/API/HTMLElement). Es bietet keine eigenen Methoden an._

## Beispiele

### Grundlegende Nutzung

Sie können ein `HTMLAudioElement` vollständig mit JavaScript unter Verwendung des [`Audio()`](/de/docs/Web/API/HTMLAudioElement/Audio)-Konstruktors erstellen:

```js
const audioElement = new Audio("car_horn.wav");
```

dann können Sie die Methode `play()` auf dem Element aufrufen

```js
audioElement.play();
```

> [!NOTE]
> Ein häufiger Stolperstein ist der Versuch, ein Audioelement sofort beim Laden der Seite abzuspielen. Die standardmäßige Autoplay-Richtlinie moderner Browser blockiert dies. Schauen Sie sich die Best Practices und Lösungen für [Firefox](https://hacks.mozilla.org/2019/02/firefox-66-to-block-automatically-playing-audible-video-and-audio/) und [Chrome](https://developer.chrome.com/blog/autoplay/) an.

Einige der am häufigsten verwendeten Eigenschaften des Audioelements sind [`src`](/de/docs/Web/API/HTMLMediaElement/src), [`currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime), [`duration`](/de/docs/Web/API/HTMLMediaElement/duration), [`paused`](/de/docs/Web/API/HTMLMediaElement/paused), [`muted`](/de/docs/Web/API/HTMLMediaElement/muted) und [`volume`](/de/docs/Web/API/HTMLMediaElement/volume). Dieses Snippet kopiert die Dauer der Audiodatei in eine Variable:

```js
const audioElement = new Audio("car_horn.wav");
audioElement.addEventListener("loadeddata", () => {
  let duration = audioElement.duration;
  // The duration variable now holds the duration (in seconds) of the audio clip
});
```

## Ereignisse

_Erbt Methoden von seinem übergeordneten [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und von seinem Vorfahren [`HTMLElement`](/de/docs/Web/API/HTMLElement)._ Sie können Ereignisse mithilfe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) anhören oder einen Ereignis-Listener der `oneventname`-Eigenschaft dieses Interfaces zuweisen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Webmedia-Technologien](/de/docs/Web/Media)
- [Audio- und Videowiedergabe](/de/docs/Web/Media/Guides/Audio_and_video_delivery)
- HTML-Element, das dieses Interface implementiert: {{HTMLElement("audio")}}.
