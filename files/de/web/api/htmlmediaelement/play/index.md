---
title: "HTMLMediaElement: play() Methode"
short-title: play()
slug: Web/API/HTMLMediaElement/play
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}

Die **`play()`**-Methode von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) versucht die Wiedergabe des Mediums zu starten. Sie gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn die Wiedergabe erfolgreich gestartet wurde.

Das Nichtstarten der Wiedergabe aus irgendeinem Grund, wie zum Beispiel Berechtigungsproblemen, führt dazu, dass das Promise abgelehnt wird.

## Syntax

```js-nolint
play()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird, wenn die Wiedergabe gestartet wurde, oder abgelehnt wird, wenn die Wiedergabe aus irgendeinem Grund nicht gestartet werden kann.

> [!NOTE]
> Browser, die vor 2019 veröffentlicht wurden, geben möglicherweise keinen Wert von
> `play()` zurück.

### Ausnahmen

Der **Ablehnungs-Handler** des Promises wird mit einem [`DOMException`](/de/docs/Web/API/DOMException)-Objekt aufgerufen, das als einziger Eingabeparameter übergeben wird (im Gegensatz zu einer traditionellen Ausnahme, die geworfen wird). Mögliche Fehler sind:

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird bereitgestellt, wenn der User-Agent (Browser) oder das Betriebssystem die Wiedergabe von Medien im aktuellen Kontext oder in der aktuellen Situation nicht zulässt. Der Browser kann vom Benutzer verlangen, die Medienwiedergabe explizit durch Klicken auf eine "Play"-Schaltfläche zu starten, zum Beispiel aufgrund einer [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy).
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird bereitgestellt, wenn die Medienquelle (die z.B. als [`MediaStream`](/de/docs/Web/API/MediaStream), [`MediaSource`](/de/docs/Web/API/MediaSource), [`Blob`](/de/docs/Web/API/Blob) oder [`File`](/de/docs/Web/API/File) angegeben sein kann) kein unterstütztes Medienformat darstellt.

Andere Ausnahmen können gemeldet werden, abhängig von den Implementierungsdetails des Browsers, der Implementierung des Mediaplayers und so weiter.

## Anmerkungen zur Verwendung

Obwohl der Begriff "Autoplay" normalerweise als Bezeichnung für Seiten verstanden wird, die beim Laden sofort mit der Medienwiedergabe beginnen, gelten die Autoplay-Richtlinien von Webbrowsern auch für alle skriptgesteuerten Medienwiedergaben, einschließlich Aufrufen von `play()`.

Wenn der [User-Agent](/de/docs/Glossary/user_agent) so konfiguriert ist, dass er keine automatische oder skriptgesteuerte Medienwiedergabe zulässt, wird bei einem `play()`-Aufruf das zurückgegebene Promise sofort mit einem `NotAllowedError` abgelehnt. Websites sollten darauf vorbereitet sein, mit dieser Situation umzugehen. Beispielsweise sollte eine Website keine Benutzeroberfläche präsentieren, die davon ausgeht, dass die Wiedergabe automatisch begonnen hat, sondern stattdessen ihre Benutzeroberfläche basierend darauf aktualisieren, ob das zurückgegebene Promise erfüllt oder abgelehnt wird. Siehe das [Beispiel](#beispiele) unten für weitere Informationen.

> [!NOTE]
> Die `play()`-Methode kann dazu führen, dass der Benutzer aufgefordert wird, die Erlaubnis zur Medienwiedergabe zu erteilen, was zu einer möglichen Verzögerung führen kann, bevor das zurückgegebene Promise aufgelöst wird. Stellen Sie sicher, dass Ihr Code nicht sofort eine Antwort erwartet.

Für noch detailliertere Informationen zu Autoplay und Autoplay-Blockierung lesen Sie unseren Artikel [Autoplay-Leitfaden für Medien und Web Audio APIs](/de/docs/Web/Media/Autoplay_guide).

## Beispiele

Dieses Beispiel zeigt, wie man bestätigt, dass die Wiedergabe begonnen hat und wie man gesperrte automatische Wiedergabe elegant behandelt:

```js
let videoElem = document.getElementById("video");
let playButton = document.getElementById("playbutton");

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

In diesem Beispiel wird die Wiedergabe des Videos durch die [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function) `playVideo()`-Funktion ein- und ausgeschaltet. Sie versucht, das Video abzuspielen und setzt bei Erfolg den Klassennamen des `playButton`-Elements auf `"playing"`. Wenn die Wiedergabe nicht startet, wird die Klasse des `playButton`-Elements gelöscht, um ihr Standardaussehen wiederherzustellen. Dies stellt sicher, dass die Abspieltaste den tatsächlichen Wiedergabestatus widerspiegelt, indem sie auf das Auflösen oder Ablehnen des von `play()` zurückgegebenen {{jsxref("Promise")}} wartet.

Wenn dieses Beispiel ausgeführt wird, werden zunächst Referenzen auf das {{HTMLElement("video")}}-Element sowie die {{HTMLElement("button")}}, die das Ein- und Ausschalten der Wiedergabe ermöglicht, gesammelt. Danach wird ein Ereignishandler für das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis auf die Abspiel-Umkehrschaltfläche eingerichtet und versucht, die Wiedergabe automatisch durch einen Aufruf von `playVideo()` zu starten.

Sie können [dieses Beispiel in Echtzeit auf Glitch ausprobieren oder remixieren](https://media-play-promise.glitch.me/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web-Medientechnologien](/de/docs/Web/Media)
- Lernen: [Video- und Audio-Inhalte](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [Autoplay-Leitfaden für Medien und Web Audio APIs](/de/docs/Web/Media/Autoplay_guide)
- [Die Web Audio API verwenden](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
