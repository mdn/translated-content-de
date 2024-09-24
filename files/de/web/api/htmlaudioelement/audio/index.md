---
title: "HTMLAudioElement: Audio() Konstruktor"
short-title: Audio()
slug: Web/API/HTMLAudioElement/Audio
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("HTML DOM")}}

Der **`Audio()`** Konstruktor erstellt und gibt ein neues {{domxref("HTMLAudioElement")}} zurück, das entweder einem Dokument zugeordnet werden kann, damit Benutzer damit interagieren und/oder es anhören können, oder das außerhalb des Bildschirms verwendet werden kann, um Audio zu verwalten und abzuspielen.

## Syntax

```js-nolint
new Audio()
new Audio(url)
```

### Parameter

- `url` {{optional_inline}}
  - : Ein optionaler String, der die URL einer Audiodatei enthält, die mit dem neuen Audio-Element verknüpft werden soll.

### Rückgabewert

Ein neues {{domxref("HTMLAudioElement")}} Objekt, das so konfiguriert ist, dass es zur Wiedergabe des Audios aus der durch `url` angegebenen Datei verwendet werden kann. Die `preload`-Eigenschaft des neuen Objekts wird auf `auto` gesetzt und seine `src`-Eigenschaft wird auf die angegebene URL oder `null` gesetzt, wenn keine URL angegeben ist. Wenn eine URL angegeben ist, beginnt der Browser mit dem _asynchronen_ Laden der Mediendatei, bevor das neue Objekt zurückgegeben wird.

## Verwendungshinweise

Sie können auch andere Methoden zur Elementerstellung verwenden, wie die {{domxref("document")}}-Objektmethode {{domxref("Document.createElement", "createElement()")}}, um ein neues {{domxref("HTMLAudioElement")}} zu konstruieren.

### Bestimmen, wann die Wiedergabe beginnen kann

Es gibt drei Möglichkeiten, um zu erkennen, wann genügend von der Audiodatei geladen wurde, um die Wiedergabe zu starten:

- Überprüfen Sie den Wert der {{domxref("HTMLMediaElement.readyState", "readyState")}}-Eigenschaft. Wenn sie `HTMLMediaElement.HAVE_FUTURE_DATA` ist, sind genügend Daten verfügbar, um die Wiedergabe zu starten und mindestens für kurze Zeit abzuspielen. Wenn sie `HTMLMediaElement.HAVE_ENOUGH_DATA` ist, sind genügend Daten verfügbar, sodass Sie bei der aktuellen Downloadrate die Audiodatei bis zum Ende ohne Unterbrechung abspielen können.
- Lauschen Sie auf das {{domxref("HTMLMediaElement.canplay_event", "canplay")}}-Ereignis. Es wird an das `<audio>`-Element gesendet, wenn genügend Audio verfügbar ist, um die Wiedergabe zu starten, obwohl Unterbrechungen auftreten können.
- Lauschen Sie auf das {{domxref("HTMLMediaElement.canplaythrough_event", "canplaythrough")}}-Ereignis. Es wird gesendet, wenn geschätzt wird, dass das Audio bis zum Ende ohne Unterbrechung abgespielt werden kann.

Der ereignisbasierte Ansatz ist am besten:

```js
myAudioElement.addEventListener("canplaythrough", (event) => {
  /* das Audio ist jetzt abspielbar; spielen Sie es ab, wenn Berechtigungen es erlauben */
  myAudioElement.play();
});
```

### Speicherverbrauch und -verwaltung

Wenn alle Referenzen auf ein mit dem `Audio()`-Konstruktor erstelltes Audio-Element gelöscht werden, wird das Element selbst nicht durch den Garbage-Collector-Mechanismus der JavaScript-Laufzeit aus dem Speicher entfernt, falls die Wiedergabe derzeit im Gange ist. Stattdessen wird das Audio weiter abgespielt und das Objekt bleibt im Speicher, bis die Wiedergabe endet. Zu diesem Zeitpunkt wird das Objekt dann dem Garbage Collection-Prozess unterzogen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web-Medientechnologien](/de/docs/Web/Media)
- HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("audio")}}.
