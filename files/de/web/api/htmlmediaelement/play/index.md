---
title: "HTMLMediaElement: play() Methode"
short-title: play()
slug: Web/API/HTMLMediaElement/play
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{APIRef("HTML DOM")}}

Die **`play()`**-Methode des [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) versucht, die Wiedergabe des Mediums zu starten. Sie gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn die Wiedergabe erfolgreich gestartet wurde.

Wenn die Wiedergabe aus irgendeinem Grund, wie zum Beispiel aus Berechtigungsgründen, nicht gestartet werden kann, wird das Versprechen abgelehnt.

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

Der **Ablehnungshandler** des Versprechens wird mit einem [`DOMException`](/de/docs/Web/API/DOMException)-Objekt aufgerufen, das als einziges Eingangsparameter übergeben wird (im Gegensatz zu einer herkömmlichen Ausnahme, die geworfen wird). Mögliche Fehler sind:

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird bereitgestellt, wenn der Benutzeragent (Browser) oder das Betriebssystem die Wiedergabe von Medien in dem aktuellen Kontext oder der aktuellen Situation nicht erlaubt. Der Browser kann zum Beispiel verlangen, dass der Benutzer die Medienwiedergabe explizit startet, indem er auf eine "Abspielen"-Schaltfläche klickt, möglicherweise wegen einer [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy).
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird bereitgestellt, wenn die Medienquelle (die möglicherweise als [`MediaStream`](/de/docs/Web/API/MediaStream), [`MediaSource`](/de/docs/Web/API/MediaSource), [`Blob`](/de/docs/Web/API/Blob) oder [`File`](/de/docs/Web/API/File) angegeben ist) kein unterstütztes Medienformat darstellt.

Andere Ausnahmen können gemeldet werden, je nach Implementierungsdetails des Browsers, der Implementierung des Mediaplayers und so weiter.

## Nutzungshinweise

Obwohl der Begriff "autoplay" normalerweise als das automatische Abspielen von Medien beim Laden der Seite verstanden wird, gelten die Autoplay-Richtlinien von Webbrowsern auch für jede skriptinitiierte Wiedergabe von Medien, einschließlich Aufrufen von `play()`.

Wenn der {{Glossary("user_agent", "user agent")}} so konfiguriert ist, dass er keine automatische oder skriptinitiierte Wiedergabe von Medien zulässt, führt ein Aufruf von `play()` dazu, dass das zurückgegebene Versprechen sofort mit einem `NotAllowedError` abgelehnt wird. Websites sollten auf diese Situation vorbereitet sein. Beispielsweise sollte eine Website keine Benutzeroberfläche darstellen, die davon ausgeht, dass die Wiedergabe automatisch begonnen hat, sondern stattdessen die Benutzeroberfläche basierend darauf aktualisieren, ob das zurückgegebene Versprechen erfüllt oder abgelehnt wird. Siehe das [Beispiel](#beispiele) unten für weitere Informationen.

> [!NOTE]
> Die `play()`-Methode kann dazu führen, dass der Benutzer um Erlaubnis gebeten wird, das Medium abzuspielen, was zu einer möglichen Verzögerung führen kann, bevor das zurückgegebene Versprechen aufgelöst wird. Stellen Sie sicher, dass Ihr Code keine sofortige Reaktion erwartet.

Für noch detailliertere Informationen über Autoplay und das Blockieren von Autoplay, lesen Sie unseren Artikel [Autoplay-Leitfaden für Medien- und Web-Audio-APIs](/de/docs/Web/Media/Guides/Autoplay).

## Beispiele

Dieses Beispiel zeigt, wie bestätigt werden kann, dass die Wiedergabe begonnen hat und wie blockierte automatische Wiedergabe problemlos behandelt werden kann:

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

In diesem Beispiel wird die Wiedergabe von Video durch die [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function) `playVideo()`-Funktion ein- und ausgeschaltet. Es versucht, das Video abzuspielen, und wenn dies erfolgreich ist, wird der Klassenname des `playButton`-Elements auf `"playing"` gesetzt. Wenn die Wiedergabe nicht startet, wird die Klasse des `playButton`-Elements gelöscht, wodurch das ursprüngliche Aussehen wiederhergestellt wird. Dies stellt sicher, dass der Abspielknopf den tatsächlichen Wiedergabestatus widerspiegelt, indem auf die Erfüllung oder Ablehnung des von `play()` zurückgegebenen {{jsxref("Promise")}} geachtet wird.

Wenn dieses Beispiel ausgeführt wird, beginnt es mit dem Sammeln von Referenzen auf das {{HTMLElement("video")}}-Element sowie auf das {{HTMLElement("button")}}, das zur Umschaltung der Wiedergabe verwendet wird. Es richtet dann einen Ereignishandler für das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis auf der Abspieltoggle-Taste ein und versucht, die Wiedergabe automatisch zu starten, indem `playVideo()` aufgerufen wird.

Sie können [dieses Beispiel in Echtzeit auf Glitch ausprobieren oder remixen](https://media-play-promise.glitch.me/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Webmedientechnologien](/de/docs/Web/Media)
- Lernen: [HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Autoplay-Leitfaden für Medien- und Web-Audio-APIs](/de/docs/Web/Media/Guides/Autoplay)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
