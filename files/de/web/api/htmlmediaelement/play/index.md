---
title: "HTMLMediaElement: play() Methode"
short-title: play()
slug: Web/API/HTMLMediaElement/play
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}

Die Methode **`play()`** des {{domxref("HTMLMediaElement")}} versucht, die Wiedergabe des Mediums zu starten. Sie gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn die Wiedergabe erfolgreich gestartet wurde.

Ein Fehler beim Start der Wiedergabe aus irgendeinem Grund, wie zum Beispiel Berechtigungsprobleme, führt dazu, dass das Promise abgelehnt wird.

## Syntax

```js-nolint
play()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird, wenn die Wiedergabe gestartet wurde, oder abgelehnt wird, wenn aus irgendeinem Grund die Wiedergabe nicht gestartet werden kann.

> [!NOTE]
> Browser, die vor 2019 veröffentlicht wurden, geben möglicherweise keinen Wert von `play()` zurück.

### Ausnahmen

Der **Ablehnungshandler** des Promises wird mit einem {{domxref("DOMException")}}-Objekt aufgerufen, das als einziger Eingabeparameter übergeben wird (im Gegensatz zu einer herkömmlichen Ausnahme, die ausgelöst wird). Mögliche Fehler sind:

- `NotAllowedError` {{domxref("DOMException")}}
  - : Wird bereitgestellt, wenn der User-Agent (Browser) oder das Betriebssystem die Wiedergabe des Mediums im aktuellen Kontext oder bei der aktuellen Situation nicht zulässt. Der Browser kann verlangen, dass der Benutzer die Medienwiedergabe explizit durch Klicken auf eine „Play“-Schaltfläche startet, zum Beispiel aufgrund einer [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy).
- `NotSupportedError` {{domxref("DOMException")}}
  - : Wird bereitgestellt, wenn die Medienquelle (die möglicherweise als {{domxref("MediaStream")}}, {{domxref("MediaSource")}}, {{domxref("Blob")}} oder {{domxref("File")}}, zum Beispiel) angegeben wird, kein unterstütztes Medienformat darstellt.

Andere Ausnahmen können je nach den Implementierungsdetails des Browsers und des Mediaplayers gemeldet werden.

## Hinweise zur Verwendung

Obwohl der Begriff "Autoplay" üblicherweise als Beziehen auf Seiten verstanden wird, die sofort Medien abspielen, wenn sie geladen werden, gelten die Autoplay-Richtlinien der Webbrowser auch für jegliche skriptinitiierte Wiedergabe von Medien, einschließlich Aufrufen von `play()`.

Wenn der {{Glossary("user agent")}} so konfiguriert ist, dass keine automatische oder skriptinitiierte Wiedergabe von Medien zulässig ist, führt ein Aufruf von `play()` dazu, dass das zurückgegebene Promise sofort mit einem `NotAllowedError` abgelehnt wird. Websites sollten vorbereitet sein, mit dieser Situation umzugehen. Beispielsweise sollte eine Site keine Benutzeroberfläche präsentieren, die davon ausgeht, dass die Wiedergabe automatisch begonnen hat, sondern stattdessen ihre Benutzeroberfläche basierend darauf aktualisieren, ob das zurückgegebene Promise erfüllt oder abgelehnt wird. Siehe das [Beispiel](#beispiele) unten für weitere Informationen.

> [!NOTE]
> Die `play()` Methode kann dazu führen, dass der Benutzer aufgefordert wird, die Erlaubnis zur Wiedergabe des Mediums zu erteilen, was zu einer möglichen Verzögerung führt, bevor das zurückgegebene Promise aufgelöst wird. Stellen Sie sicher, dass Ihr Code nicht mit einer sofortigen Antwort rechnet.

Für noch ausführlichere Informationen zu Autoplay und Autoplay-Blockierung siehe unseren Artikel [Autoplay-Leitfaden für Medien- und Web-Audio-APIs](/de/docs/Web/Media/Autoplay_guide).

## Beispiele

Dieses Beispiel zeigt, wie bestätigt wird, dass die Wiedergabe begonnen hat und wie blockierte automatische Wiedergabe elegant gehandhabt wird:

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

In diesem Beispiel wird die Wiedergabe des Videos durch die `async`-Funktion [`playVideo()`](/de/docs/Web/JavaScript/Reference/Statements/async_function) ein- und ausgeschaltet. Sie versucht, das Video abzuspielen, und bei Erfolg wird der Klassenname des `playButton`-Elements auf `"playing"` gesetzt. Wenn die Wiedergabe nicht gestartet werden kann, wird die Klasse des `playButton`-Elements gelöscht, um das Standardaussehen wiederherzustellen. Dies stellt sicher, dass die Wiedergabetaste dem tatsächlichen Stand der Wiedergabe entspricht, indem die Auflösung oder Ablehnung des von `play()` zurückgegebenen {{jsxref("Promise")}} überwacht wird.

Wenn dieses Beispiel ausgeführt wird, werden zunächst Referenzen zum {{HTMLElement("video")}}-Element sowie zum {{HTMLElement("button")}} gesammelt, das verwendet wird, um die Wiedergabe ein- und auszuschalten. Dann wird ein Ereignishandler für das {{domxref("Element/click_event", "click")}}-Ereignis auf der Wiedergabe-Umschalttaste eingerichtet und versucht automatisch, die Wiedergabe durch einen Aufruf von `playVideo()` zu starten.

Sie können [dieses Beispiel in Echtzeit auf Glitch ausprobieren oder remixieren](https://media-play-promise.glitch.me/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web-Medientechnologien](/de/docs/Web/Media)
- Lernen: [Video- und Audioinhalte](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [Autoplay-Leitfaden für Medien- und Web-Audio-APIs](/de/docs/Web/Media/Autoplay_guide)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
