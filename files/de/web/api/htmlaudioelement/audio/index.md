---
title: "HTMLAudioElement: Audio() Konstruktor"
short-title: Audio()
slug: Web/API/HTMLAudioElement/Audio
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("HTML DOM")}}

Der **`Audio()`**-Konstruktor erstellt und gibt ein neues [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement) zurück, das entweder an ein Dokument angehängt werden kann, damit der Benutzer damit interagieren und/oder es anhören kann, oder das im Offscreen-Bereich verwendet werden kann, um Audio zu verwalten und abzuspielen.

## Syntax

```js-nolint
new Audio()
new Audio(url)
```

### Parameter

- `url` {{optional_inline}}
  - : Ein optionaler String, der die URL einer Audiodatei enthält, die mit dem neuen Audioelement verknüpft werden soll.

### Rückgabewert

Ein neues [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)-Objekt, das für die Wiedergabe der Audiodatei, die durch `url` angegeben ist, konfiguriert ist. Die `preload`-Eigenschaft des neuen Objekts ist auf `auto` gesetzt, und seine `src`-Eigenschaft ist auf die angegebene URL oder `null`, wenn keine URL angegeben wurde. Wenn eine URL angegeben wird, beginnt der Browser _asynchron_ mit dem Laden der Medienressource, bevor das neue Objekt zurückgegeben wird.

## Nutzungshinweise

Sie können auch andere Methoden zur Erstellung von Elementen verwenden, wie die [`createElement()`](/de/docs/Web/API/Document/createElement)-Methode des [`document`](/de/docs/Web/API/Document)-Objekts, um ein neues [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement) zu erstellen.

### Bestimmung, wann die Wiedergabe beginnen kann

Es gibt drei Möglichkeiten, um festzustellen, wann genügend Audiodateien geladen sind, um die Wiedergabe zu starten:

- Überprüfen Sie den Wert der [`readyState`](/de/docs/Web/API/HTMLMediaElement/readyState)-Eigenschaft. Wenn es `HTMLMediaElement.HAVE_FUTURE_DATA` ist, sind genügend Daten verfügbar, um die Wiedergabe zu starten und mindestens für kurze Zeit abzuspielen. Wenn es `HTMLMediaElement.HAVE_ENOUGH_DATA` ist, sind genügend Daten verfügbar, dass bei der aktuellen Downloadrate das Audio bis zum Ende ohne Unterbrechung abgespielt werden sollte.
- Hören Sie auf das [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)-Ereignis. Es wird an das `<audio>`-Element gesendet, wenn genügend Audio verfügbar ist, um die Wiedergabe zu starten, obwohl Unterbrechungen auftreten können.
- Hören Sie auf das [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)-Ereignis. Es wird gesendet, wenn geschätzt wird, dass das Audio ohne Unterbrechung bis zum Ende abgespielt werden kann.

Der ereignisbasierte Ansatz ist am besten:

```js
myAudioElement.addEventListener("canplaythrough", (event) => {
  /* the audio is now playable; play it if permissions allow */
  myAudioElement.play();
});
```

### Speicherverbrauch und Verwaltung

Wenn alle Verweise auf ein mit dem `Audio()`-Konstruktor erstelltes Audioelement gelöscht werden, wird das Element selbst nicht aus dem Speicher durch den Garbage-Collection-Mechanismus der JavaScript-Laufzeit entfernt, wenn die Wiedergabe derzeit läuft. Stattdessen wird das Audio weiterhin abgespielt, und das Objekt bleibt im Speicher, bis die Wiedergabe endet. Zu diesem Zeitpunkt wird das Objekt der Garbage Collection unterzogen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web-Medientechnologien](/de/docs/Web/Media)
- HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("audio")}}.
