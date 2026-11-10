---
title: HTMLAudioElement
slug: Web/API/HTMLAudioElement
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("HTML DOM")}}

Die **`HTMLAudioElement`**-Schnittstelle bietet Zugriff auf die Eigenschaften von {{HTMLElement("audio")}}-Elementen sowie Methoden, um sie zu bearbeiten.

Diese Schnittstelle basiert auf der Schnittstelle [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und erbt deren Eigenschaften und Methoden.

{{InheritanceDiagram}}

## Konstruktor

- [`Audio()`](/de/docs/Web/API/HTMLAudioElement/Audio)
  - : Erstellt ein neues `HTMLAudioElement`-Objekt und gibt es zurück. Wenn eine Datei-URL angegeben wird, beginnt optional das Laden der Audiodatei.

## Instanzeigenschaften

_Keine eigenen Eigenschaften; erbt Eigenschaften von der übergeordneten Schnittstelle [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und von [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Instanzmethoden

_Erbt Methoden von der übergeordneten Schnittstelle [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und von [`HTMLElement`](/de/docs/Web/API/HTMLElement). Die Schnittstelle bietet keine eigenen Methoden._

## Ereignisse

_Erbt Methoden von der übergeordneten Schnittstelle [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und von der Vorfahrenschnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement)._ Sie können Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) überwachen oder der Eigenschaft `oneventname` dieser Schnittstelle einen Event-Listener zuweisen.

## Beispiele

### Grundlegende Verwendung

Sie können ein `HTMLAudioElement` vollständig mit JavaScript erstellen, indem Sie den Konstruktor [`Audio()`](/de/docs/Web/API/HTMLAudioElement/Audio) verwenden:

```js
const audioElement = new Audio("car_horn.wav");
```

Anschließend können Sie die Methode `play()` für das Element aufrufen:

```js
audioElement.play();
```

> [!NOTE]
> Eine häufige Fehlerquelle ist der Versuch, ein Audioelement unmittelbar beim Laden der Seite abzuspielen. Die standardmäßigen Autoplay-Richtlinien moderner Browser verhindern dies. Empfehlungen und mögliche Lösungen finden Sie in den Artikeln zu [Firefox](https://hacks.mozilla.org/2019/02/firefox-66-to-block-automatically-playing-audible-video-and-audio/) und [Chrome](https://developer.chrome.com/blog/autoplay/).

Zu den häufig verwendeten Eigenschaften des Audioelements gehören [`src`](/de/docs/Web/API/HTMLMediaElement/src), [`currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime), [`duration`](/de/docs/Web/API/HTMLMediaElement/duration), [`paused`](/de/docs/Web/API/HTMLMediaElement/paused), [`muted`](/de/docs/Web/API/HTMLMediaElement/muted) und [`volume`](/de/docs/Web/API/HTMLMediaElement/volume). Der folgende Codeausschnitt speichert die Dauer der Audiodatei in einer Variablen:

```js
const audioElement = new Audio("car_horn.wav");
audioElement.addEventListener("loadeddata", () => {
  let duration = audioElement.duration;
  // The duration variable now holds the duration (in seconds) of the audio clip
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web-Medientechnologien](/de/docs/Web/Media)
- [Bereitstellung von Audio und Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery)
- HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("audio")}}.
