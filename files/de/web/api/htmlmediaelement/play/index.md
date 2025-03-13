---
title: "HTMLMediaElement: `play()`-Methode"
short-title: play()
slug: Web/API/HTMLMediaElement/play
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("HTML DOM")}}

Die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)
**`play()`**-Methode versucht, die Wiedergabe der Medien zu starten.
Sie gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn die Wiedergabe erfolgreich gestartet wurde.

Wenn die Wiedergabe aus irgendeinem Grund, wie z. B. Berechtigungsproblemen, nicht gestartet werden kann, wird das Promise abgelehnt.

## Syntax

```js-nolint
play()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird, wenn die Wiedergabe gestartet wurde, oder abgelehnt wird, falls aus irgendeinem Grund die Wiedergabe nicht gestartet werden kann.

> [!NOTE]
> Browser, die vor 2019 veröffentlicht wurden, geben möglicherweise keinen Wert von
> `play()` zurück.

### Ausnahmen

Der **Ablehnungs-Handler** des Promises wird mit einem [`DOMException`](/de/docs/Web/API/DOMException)-Objekt aufgerufen, das als einziger Eingabeparameter übergeben wird (im Gegensatz zu einer traditionellen Ausnahme, die ausgelöst wird). Mögliche Fehler sind:

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird bereitgestellt, wenn der Benutzeragent (Browser) oder das Betriebssystem das Abspielen von Medien im aktuellen Kontext oder in der aktuellen Situation nicht zulässt. Der Browser kann verlangen, dass der Benutzer die Medienwiedergabe explizit durch Klicken auf eine "Play"-Schaltfläche startet, beispielsweise aufgrund einer [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy).
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird bereitgestellt, wenn die Medienquelle (die möglicherweise als [`MediaStream`](/de/docs/Web/API/MediaStream), [`MediaSource`](/de/docs/Web/API/MediaSource), [`Blob`](/de/docs/Web/API/Blob) oder [`File`](/de/docs/Web/API/File) angegeben ist) kein unterstütztes Medienformat darstellt.

Weitere Ausnahmen können gemeldet werden, abhängig von den Browser-Implementierungsdetails, der Medienplayer-Implementierung und so weiter.

## Anwendungshinweise

Obwohl der Begriff "Autoplay" normalerweise auf Seiten bezogen wird, die zu Ladenbeginn direkt mit der Medienwiedergabe beginnen, gelten die Autoplay-Richtlinien der Webbrowser auch für jede skriptinitiierte Wiedergabe von Medien, einschließlich Aufrufen von `play()`.

Wenn der {{Glossary("user_agent", "Benutzeragent")}} so konfiguriert ist, dass automatische oder skriptinitiierte Medienwiedergabe nicht erlaubt ist, führt der Aufruf von `play()` dazu, dass das zurückgegebene Promise sofort mit einem `NotAllowedError` abgelehnt wird. Webseiten sollten auf diese Situation vorbereitet sein. Beispielsweise sollte eine Seite keine Benutzeroberfläche darstellen, die davon ausgeht, dass die Wiedergabe automatisch begonnen hat, sondern stattdessen die Benutzeroberfläche basierend darauf aktualisieren, ob das zurückgegebene Promise erfüllt oder abgelehnt wird. Weitere Informationen finden Sie im [Beispiel](#beispiele) unten.

> [!NOTE]
> Die `play()`-Methode kann dazu führen, dass der Benutzer um Erlaubnis gefragt wird, die Medien wiederzugeben, was zu einer möglichen Verzögerung führt, bevor das zurückgegebene Promise aufgelöst wird. Stellen Sie sicher, dass Ihr Code keine sofortige Antwort erwartet.

Für noch tiefere Informationen über Autoplay und die Blockierung von Autoplay, lesen Sie unseren Artikel [Autoplay Leitfaden für Medien und Web-Audio-APIs](/de/docs/Web/Media/Guides/Autoplay).

## Beispiele

Dieses Beispiel zeigt, wie man bestätigt, dass die Wiedergabe begonnen hat und wie man blockierte automatische Wiedergabe elegant handhabt:

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

In diesem Beispiel wird die Wiedergabe des Videos mit der asynchronen [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)
Funktion `playVideo()` ein- und ausgeschaltet. Es versucht, das Video abzuspielen, und setzt bei Erfolg den Klassennamen des `playButton`-Elements auf `"playing"`. Falls die Wiedergabe nicht gestartet werden kann, wird die Klasse des `playButton`-Elements gelöscht, wodurch sein Standardaussehen wiederhergestellt wird. Dies stellt sicher, dass die Wiedergabeschaltfläche den tatsächlichen Wiedergabestatus widerspiegelt, indem die Erfüllung oder Ablehnung des von `play()` zurückgegebenen {{jsxref("Promise")}} beobachtet wird.

Wenn dieses Beispiel ausgeführt wird, beginnt es damit, Referenzen zu dem {{HTMLElement("video")}}-Element sowie zu dem {{HTMLElement("button")}} zu sammeln, das zum Umschalten der Wiedergabe verwendet wird. Anschließend wird ein Ereignishandler für das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis auf der Wiedergabe-Umschaltfläche eingerichtet und es wird versucht, die Wiedergabe automatisch durch Aufruf von `playVideo()` zu starten.

Sie können [dieses Beispiel in Echtzeit auf Glitch ausprobieren oder remixen](https://media-play-promise.glitch.me/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web-Medientechnologien](/de/docs/Web/Media)
- Lernen: [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Autoplay Leitfaden für Medien und Web Audio APIs](/de/docs/Web/Media/Guides/Autoplay)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
