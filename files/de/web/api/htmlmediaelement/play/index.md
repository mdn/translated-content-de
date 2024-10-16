---
title: "HTMLMediaElement: play()-Methode"
short-title: play()
slug: Web/API/HTMLMediaElement/play
l10n:
  sourceCommit: d47348199a379f68bea876a403eb510628ec4ccb
---

{{APIRef("HTML DOM")}}

Die Methode **`play()`** des [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) versucht, die Wiedergabe der Medien zu starten. Sie gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn die Wiedergabe erfolgreich gestartet wurde.

Wenn es aus irgendeinem Grund nicht möglich ist, die Wiedergabe zu starten, z. B. aufgrund von Berechtigungsproblemen, wird das Promise zurückgewiesen.

## Syntax

```js-nolint
play()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird, wenn die Wiedergabe gestartet wurde, oder zurückgewiesen wird, wenn die Wiedergabe aus irgendeinem Grund nicht gestartet werden kann.

> [!NOTE]
> Browser, die vor 2019 veröffentlicht wurden, geben möglicherweise keinen Wert aus `play()` zurück.

### Ausnahmen

Der **Rejektions-Handler** des Promises wird mit einem [`DOMException`](/de/docs/Web/API/DOMException)-Objekt aufgerufen, das als einziger Eingabeparameter übergeben wird (im Gegensatz zu einer traditionellen Ausnahme, die geworfen wird). Mögliche Fehler sind:

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wenn der User Agent (Browser) oder das Betriebssystem die Wiedergabe von Medien im aktuellen Kontext oder in der aktuellen Situation nicht zulässt. Der Browser kann erfordern, dass der Benutzer die Medienwiedergabe explizit durch Klicken auf eine "Play"-Schaltfläche startet, z. B. aufgrund einer [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy).
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wenn die Medienquelle (die z. B. als [`MediaStream`](/de/docs/Web/API/MediaStream), [`MediaSource`](/de/docs/Web/API/MediaSource), [`Blob`](/de/docs/Web/API/Blob) oder [`File`](/de/docs/Web/API/File) angegeben sein kann) kein unterstütztes Medienformat darstellt.

Weitere Ausnahmen können je nach Detailimplementierung des Browsers, der Medienplayer-Implementierung usw. gemeldet werden.

## Anwendungshinweise

Obwohl der Begriff "Autoplay" normalerweise als bezogen auf Seiten gedacht wird, die sofort nach dem Laden Medien abspielen, gelten die Autoplay-Richtlinien von Webbrowsern auch für alle skriptgesteuerten Medienwiedergaben, einschließlich Aufrufen von `play()`.

Wenn der {{Glossary("user_agent", "User Agent")}} so konfiguriert ist, dass er automatische oder skriptgesteuerte Medienwiedergaben nicht zulässt, führt das Aufrufen von `play()` dazu, dass das zurückgegebene Promise sofort mit einem `NotAllowedError` abgelehnt wird. Websites sollten darauf vorbereitet sein, diese Bedingungen zu handhaben. Beispielsweise sollte eine Seite keine Benutzeroberfläche präsentieren, die davon ausgeht, dass die Wiedergabe automatisch gestartet wurde, sondern sollte stattdessen ihre UI basierend darauf aktualisieren, ob das zurückgegebene Promise erfüllt oder abgelehnt wurde. Siehe das [Beispiel](#beispiele) unten für weitere Informationen.

> [!NOTE]
> Die `play()`-Methode kann dazu führen, dass der Benutzer aufgefordert wird, die Erlaubnis zur Wiedergabe der Medien zu erteilen, was zu einer möglichen Verzögerung führen kann, bevor das zurückgegebene Promise aufgelöst wird. Stellen Sie sicher, dass Ihr Code keine sofortige Antwort erwartet.

Für noch detailliertere Informationen über Autoplay und Autoplay-Blockierung, lesen Sie unseren Artikel [Autoplay-Leitfaden für Medien und Web Audio APIs](/de/docs/Web/Media/Autoplay_guide).

## Beispiele

Dieses Beispiel zeigt, wie bestätigt wird, dass die Wiedergabe begonnen hat und wie blockierte automatische Wiedergabe elegant gehandhabt wird:

```js
let videoElem = document.getElementById("video");
let playButton = document.getElementById("play-button");

playButton.addEventListener("click", handlePlayButton, false);
playVideo();

async function playVideo() {
  try {
    await videoElem.play();
    playButton.classList.add("playing");
  } catch (err) {
    playButton.classList.remove("playing");
  }
}

function handlePlayButton() {
  if (videoElem.paused) {
    playVideo();
  } else {
    videoElem.pause();
    playButton.classList.remove("playing");
  }
}
```

In diesem Beispiel wird die Wiedergabe des Videos durch die [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function) `playVideo()`-Funktion ein- und ausgeschaltet. Sie versucht, das Video abzuspielen, und wenn dies erfolgreich ist, wird der Klassenname des `playButton`-Elements auf `"playing"` gesetzt. Wenn die Wiedergabe fehlschlägt, wird die Klasse des `playButton`-Elements gelöscht, um sein Standardaussehen wiederherzustellen. Dies stellt sicher, dass die Wiedergabeschaltfläche dem tatsächlichen Wiedergabestatus entspricht, indem die Auflösung oder Zurückweisung des von `play()` zurückgegebenen {{jsxref("Promise")}} beobachtet wird.

Wenn dieses Beispiel ausgeführt wird, beginnt es damit, Referenzen zu dem {{HTMLElement("video")}}-Element sowie zu dem {{HTMLElement("button")}} zu sammeln, das zum Umschalten der Wiedergabe verwendet wird. Anschließend wird ein Ereignishandler für das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis auf der Wiedergabeumschaltfläche eingerichtet und versucht, die Wiedergabe automatisch durch Aufrufen von `playVideo()` zu starten.

Sie können [dieses Beispiel in Echtzeit auf Glitch ausprobieren oder remixen](https://media-play-promise.glitch.me/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Webmedientechnologien](/de/docs/Web/Media)
- Lernen: [Video- und Audioinhalte](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [Autoplay-Leitfaden für Medien und Web Audio APIs](/de/docs/Web/Media/Autoplay_guide)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
