---
title: HTMLAudioElement
slug: Web/API/HTMLAudioElement
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}

Das **`HTMLAudioElement`**-Interface bietet Zugriff auf die Eigenschaften von {{HTMLElement("audio")}}-Elementen sowie auf Methoden, um sie zu manipulieren.

Dieses Element basiert auf und erbt Eigenschaften und Methoden von der {{domxref("HTMLMediaElement")}}-Schnittstelle.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("HTMLAudioElement.Audio", "Audio()")}}
  - : Erstellt und gibt ein neues `HTMLAudioElement`-Objekt zurück und beginnt optional mit dem Laden einer Audiodatei, wenn die Datei-URL angegeben ist.

## Instanzeigenschaften

_Keine spezifischen Eigenschaften; erbt Eigenschaften von seinem Elternteil, {{domxref("HTMLMediaElement")}}, und von {{domxref("HTMLElement")}}._

## Instanzmethoden

_Erbt Methoden von seinem Elternteil, {{domxref("HTMLMediaElement")}}, und von {{domxref("HTMLElement")}}. Es bietet keine eigenen Methoden._

## Beispiele

### Grundlegende Nutzung

Sie können ein `HTMLAudioElement` vollständig mit JavaScript mit dem {{domxref("HTMLAudioElement.Audio", "Audio()")}}-Konstruktor erstellen:

```js
const audioElement = new Audio("car_horn.wav");
```

Dann können Sie die `play()`-Methode auf dem Element aufrufen

```js
audioElement.play();
```

> [!NOTE]
> Ein häufiger Fehler ist der Versuch, ein Audioelement direkt beim Laden der Seite abzuspielen. Die Standard-Autoplay-Richtlinie moderner Browser wird dies blockieren. Informationen zu Best Practices und Lösungen finden Sie unter [Firefox](https://hacks.mozilla.org/2019/02/firefox-66-to-block-automatically-playing-audible-video-and-audio/) und [Chrome](https://developer.chrome.com/blog/autoplay/).

Einige der häufiger genutzten Eigenschaften des Audioelements umfassen {{domxref("HTMLMediaElement.src", "src")}}, {{domxref("HTMLMediaElement.currentTime", "currentTime")}}, {{domxref("HTMLMediaElement.duration", "duration")}}, {{domxref("HTMLMediaElement.paused", "paused")}}, {{domxref("HTMLMediaElement.muted", "muted")}} und {{domxref("HTMLMediaElement.volume", "volume")}}. Dieses Snippet kopiert die Dauer der Audiodatei in eine Variable:

```js
const audioElement = new Audio("car_horn.wav");
audioElement.addEventListener("loadeddata", () => {
  let duration = audioElement.duration;
  // Die Variable duration hält nun die Dauer (in Sekunden) des Audioclips
});
```

## Ereignisse

_Erbt Methoden von seinem Elternteil, {{domxref("HTMLMediaElement")}}, und von seinem Vorfahren {{domxref("HTMLElement")}}._ Hören Sie auf Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener der `oneventname`-Eigenschaft dieses Interfaces zuweisen.

## Spezifikationen

{{Specifications}}

## Browser-Unterstützung

{{Compat}}

## Siehe auch

- [Webmedientechnologien](/de/docs/Web/Media)
- [Verwendung von Audio und Video in HTML](/de/docs/Web/Media/HTML_media)
- HTML-Element, das dieses Interface implementiert: {{HTMLElement("audio")}}.
