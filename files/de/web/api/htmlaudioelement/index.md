---
title: HTMLAudioElement
slug: Web/API/HTMLAudioElement
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}

Das **`HTMLAudioElement`**-Interface ermöglicht den Zugriff auf die Eigenschaften von {{HTMLElement("audio")}} Elementen sowie deren Manipulation durch Methoden.

Dieses Element basiert auf dem [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Interface und erbt dessen Eigenschaften und Methoden.

{{InheritanceDiagram}}

## Konstruktor

- [`Audio()`](/de/docs/Web/API/HTMLAudioElement/Audio)
  - : Erstellt und gibt ein neues `HTMLAudioElement`-Objekt zurück, wobei optional der Ladevorgang einer Audiodatei gestartet wird, wenn die Datei-URL angegeben ist.

## Instanzeigenschaften

_Keine spezifischen Eigenschaften; erbt Eigenschaften von seinem Elternteil, dem [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), sowie von [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Instanzmethoden

_Erbt Methoden von seinem Elternteil, dem [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), sowie von [`HTMLElement`](/de/docs/Web/API/HTMLElement). Bietet keine eigenen Methoden._

## Beispiele

### Grundlegende Verwendung

Sie können ein `HTMLAudioElement` vollständig mit JavaScript unter Verwendung des [`Audio()`](/de/docs/Web/API/HTMLAudioElement/Audio)-Konstruktors erstellen:

```js
const audioElement = new Audio("car_horn.wav");
```

Dann können Sie die `play()`-Methode für das Element aufrufen

```js
audioElement.play();
```

> [!NOTE]
> Ein häufiger Fehler ist, zu versuchen, ein Audioelement direkt beim Laden der Seite abzuspielen. Die Standardrichtlinie für Autoplay moderner Browser blockiert dies. Weitere Informationen zu Best Practices und Lösungen finden Sie unter [Firefox](https://hacks.mozilla.org/2019/02/firefox-66-to-block-automatically-playing-audible-video-and-audio/) und [Chrome](https://developer.chrome.com/blog/autoplay/).

Einige der am häufigsten verwendeten Eigenschaften des Audioelements sind [`src`](/de/docs/Web/API/HTMLMediaElement/src), [`currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime), [`duration`](/de/docs/Web/API/HTMLMediaElement/duration), [`paused`](/de/docs/Web/API/HTMLMediaElement/paused), [`muted`](/de/docs/Web/API/HTMLMediaElement/muted) und [`volume`](/de/docs/Web/API/HTMLMediaElement/volume). Dieses Snippet kopiert die Dauer der Audiodatei in eine Variable:

```js
const audioElement = new Audio("car_horn.wav");
audioElement.addEventListener("loadeddata", () => {
  let duration = audioElement.duration;
  // The duration variable now holds the duration (in seconds) of the audio clip
});
```

## Ereignisse

_Erbt Methoden von seinem Elternteil, dem [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), sowie von seinem Vorfahr, dem [`HTMLElement`](/de/docs/Web/API/HTMLElement)._ Verwenden Sie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um Ereignisse zu hören, oder weisen Sie dieser Schnittstelle einen Ereignis-Listener zu, indem Sie die `oneventname`-Eigenschaft verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Webmedientechnologien](/de/docs/Web/Media)
- [Verwendung von Audio und Video in HTML](/de/docs/Web/Media/HTML_media)
- HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("audio")}}.
