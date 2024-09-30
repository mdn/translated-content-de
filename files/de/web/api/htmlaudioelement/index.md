---
title: HTMLAudioElement
slug: Web/API/HTMLAudioElement
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}

Die **`HTMLAudioElement`**-Schnittstelle bietet Zugriff auf die Eigenschaften von {{HTMLElement("audio")}}-Elementen sowie Methoden zu ihrer Manipulation.

Dieses Element basiert auf der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Schnittstelle und erbt Eigenschaften und Methoden von dieser.

{{InheritanceDiagram}}

## Konstruktor

- [`Audio()`](/de/docs/Web/API/HTMLAudioElement/Audio)
  - : Erstellt und gibt ein neues `HTMLAudioElement`-Objekt zurück und beginnt optional mit dem Laden einer Audiodatei, wenn die Datei-URL angegeben ist.

## Instanz-Eigenschaften

_Keine spezifischen Eigenschaften; erbt Eigenschaften von seinem Eltern-[`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und von [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Instanz-Methoden

_Erbt Methoden von seinem Eltern-[`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und von [`HTMLElement`](/de/docs/Web/API/HTMLElement). Es bietet keine eigenen Methoden._

## Beispiele

### Grundlegende Verwendung

Sie können ein `HTMLAudioElement` vollständig mit JavaScript unter Verwendung des [`Audio()`](/de/docs/Web/API/HTMLAudioElement/Audio)-Konstruktors erstellen:

```js
const audioElement = new Audio("car_horn.wav");
```

dann können Sie die `play()`-Methode für das Element aufrufen

```js
audioElement.play();
```

> [!NOTE]
> Ein häufiger Stolperstein ist der Versuch, ein Audio-Element sofort beim Laden der Seite abzuspielen. Die standardmäßige Autoplay-Richtlinie moderner Browser verhindert dies. Weitere Informationen und Best Practices finden Sie unter [Firefox](https://hacks.mozilla.org/2019/02/firefox-66-to-block-automatically-playing-audible-video-and-audio/) und [Chrome](https://developer.chrome.com/blog/autoplay/).

Einige der häufig verwendeten Eigenschaften des Audio-Elements sind [`src`](/de/docs/Web/API/HTMLMediaElement/src), [`currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime), [`duration`](/de/docs/Web/API/HTMLMediaElement/duration), [`paused`](/de/docs/Web/API/HTMLMediaElement/paused), [`muted`](/de/docs/Web/API/HTMLMediaElement/muted) und [`volume`](/de/docs/Web/API/HTMLMediaElement/volume). Dieses Snippet kopiert die Dauer der Audiodatei in eine Variable:

```js
const audioElement = new Audio("car_horn.wav");
audioElement.addEventListener("loadeddata", () => {
  let duration = audioElement.duration;
  // The duration variable now holds the duration (in seconds) of the audio clip
});
```

## Ereignisse

_Erbt Methoden von seinem Eltern-[`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und von seinem Vorfahren [`HTMLElement`](/de/docs/Web/API/HTMLElement)._ Hören Sie auf Ereignisse mithilfe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuweisen eines Ereignislisteners zur `oneventname`-Eigenschaft dieser Schnittstelle.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web-Medientechnologien](/de/docs/Web/Media)
- [Verwendung von Audio und Video in HTML](/de/docs/Web/Media/HTML_media)
- HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("audio")}}.
