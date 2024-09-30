---
title: "HTMLAudioElement: Audio() Konstruktor"
short-title: Audio()
slug: Web/API/HTMLAudioElement/Audio
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("HTML DOM")}}

Der **`Audio()`**-Konstruktor erstellt und gibt ein neues [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement) zurück, das entweder einem Dokument hinzugefügt werden kann, damit der Benutzer interagieren und/oder es anhören kann, oder es kann im Hintergrund verwendet werden, um Audio zu verwalten und abzuspielen.

## Syntax

```js-nolint
new Audio()
new Audio(url)
```

### Parameter

- `url` {{optional_inline}}
  - : Ein optionaler String, der die URL einer Audiodatei enthält, die mit dem neuen Audio-Element verknüpft werden soll.

### Rückgabewert

Ein neues [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement) Objekt, das so konfiguriert ist, dass es für die Wiedergabe der Audiodatei, die durch `url` angegeben wird, verwendet werden kann. Die neue Objekt-Eigenschaft [`preload`](/de/docs/Web/API/HTMLMediaElement/preload) ist auf `auto` gesetzt und die `src` Eigenschaft ist auf die angegebene URL oder auf `null` gesetzt, wenn keine URL angegeben wurde. Wenn eine URL angegeben ist, beginnt der Browser, die Medienressource _asynchron_ zu laden, bevor das neue Objekt zurückgegeben wird.

## Verwendungshinweise

Es können auch andere Methoden zur Elementerstellung verwendet werden, wie die Methode [`createElement()`](/de/docs/Web/API/Document/createElement) des [`document`](/de/docs/Web/API/Document)-Objekts, um ein neues [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement) zu erstellen.

### Bestimmen, wann die Wiedergabe beginnen kann

Es gibt drei Möglichkeiten, um festzustellen, wann genug der Audiodatei geladen ist, um die Wiedergabe zu ermöglichen:

- Überprüfen Sie den Wert der [`readyState`](/de/docs/Web/API/HTMLMediaElement/readyState)-Eigenschaft. Wenn es `HTMLMediaElement.HAVE_FUTURE_DATA` ist, sind genügend Daten verfügbar, um die Wiedergabe zu beginnen und zumindest für kurze Zeit abzuspielen. Wenn es `HTMLMediaElement.HAVE_ENOUGH_DATA` ist, sind genügend Daten vorhanden, sodass Sie bei der aktuellen Downloadrate die Audiodatei ohne Unterbrechung bis zum Ende abspielen können.
- Lauschen Sie auf das [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)-Ereignis. Es wird an das `<audio>`-Element gesendet, wenn genügend Audio verfügbar ist, um die Wiedergabe zu beginnen, obwohl Unterbrechungen auftreten können.
- Lauschen Sie auf das [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)-Ereignis. Es wird gesendet, wenn geschätzt wird, dass das Audio bis zum Ende ohne Unterbrechung abgespielt werden kann.

Der ereignisbasierte Ansatz ist der beste:

```js
myAudioElement.addEventListener("canplaythrough", (event) => {
  /* the audio is now playable; play it if permissions allow */
  myAudioElement.play();
});
```

### Speicherverbrauch und Verwaltung

Wenn alle Verweise auf ein mit dem `Audio()`-Konstruktor erstelltes Audioelement gelöscht werden, wird das Element nicht vom Speichermanagement des JavaScript-Laufzeitsystems entfernt, wenn die Wiedergabe gerade läuft. Stattdessen spielt das Audio weiter und das Objekt bleibt im Speicher bis die Wiedergabe endet. Zu diesem Zeitpunkt wird das Objekt für die Speicherbereinigung zugänglich.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web-Medientechnologien](/de/docs/Web/Media)
- HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("audio")}}.
