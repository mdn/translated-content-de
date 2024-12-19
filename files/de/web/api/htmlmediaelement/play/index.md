---
title: "HTMLMediaElement: play()-Methode"
short-title: play()
slug: Web/API/HTMLMediaElement/play
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

Die **`play()`**-Methode des [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) versucht, die Wiedergabe des Mediums zu starten. Sie gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn die Wiedergabe erfolgreich gestartet wurde.

Wenn die Wiedergabe aus irgendeinem Grund, wie z.B. Berechtigungsprobleme, nicht gestartet werden kann, wird das Promise abgelehnt.

## Syntax

```js-nolint
play()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird, wenn die Wiedergabe gestartet wurde, oder abgelehnt wird, falls die Wiedergabe aus irgendeinem Grund nicht gestartet werden kann.

> [!NOTE]
> Browser, die vor 2019 veröffentlicht wurden, geben möglicherweise keinen Wert von `play()` zurück.

### Ausnahmen

Der **Rejection-Handler** des Promises wird mit einem [`DOMException`](/de/docs/Web/API/DOMException)-Objekt aufgerufen, das als einziger Eingabeparameter übergeben wird (im Gegensatz zu einer herkömmlichen Ausnahme, die ausgelöst wird). Mögliche Fehler sind:

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird angegeben, wenn der User Agent (Browser) oder das Betriebssystem die Wiedergabe des Mediums im aktuellen Kontext oder in der aktuellen Situation nicht zulässt. Der Browser kann verlangen, dass der Benutzer die Medienwiedergabe explizit durch Klicken auf eine „Wiedergabe“-Schaltfläche startet, beispielsweise aufgrund einer [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy).
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird angegeben, wenn die Medienquelle (die als [`MediaStream`](/de/docs/Web/API/MediaStream), [`MediaSource`](/de/docs/Web/API/MediaSource), [`Blob`](/de/docs/Web/API/Blob) oder [`File`](/de/docs/Web/API/File) angegeben sein kann) kein unterstütztes Medienformat darstellt.

Weitere Ausnahmen können gemeldet werden, abhängig von den Implementierungsdetails des Browsers, der Medienwiedergabeimplementierung und so weiter.

## Verwendungshinweise

Obwohl der Begriff "Autoplay" normalerweise mit Seiten verbunden ist, die bei Ladevorgang sofort mit der Wiedergabe von Medien beginnen, gelten die Autoplay-Richtlinien der Webbrowser auch für jegliche skriptinitiierte Wiedergabe von Medien, einschließlich Aufrufen von `play()`.

Wenn der {{Glossary("user_agent", "User Agent")}} so konfiguriert ist, dass er keine automatische oder skriptinitiierte Wiedergabe von Medien zulässt, führt ein Aufruf von `play()` dazu, dass das zurückgegebene Promise sofort mit einem `NotAllowedError` abgelehnt wird. Websites sollten auf diese Situation vorbereitet sein. Beispielsweise sollte eine Website keine Benutzeroberfläche präsentieren, die annimmt, dass die Wiedergabe automatisch begonnen hat, sondern stattdessen die Benutzeroberfläche basierend darauf aktualisieren, ob das zurückgegebene Promise erfüllt oder abgelehnt wurde. Siehe das untenstehende [Beispiel](#beispiele) für weitere Informationen.

> [!NOTE]
> Die `play()`-Methode kann dazu führen, dass der Benutzer um Erlaubnis gebeten wird, das Medium abzuspielen, was zu einer möglichen Verzögerung führen kann, bevor das zurückgegebene Promise aufgelöst wird. Stellen Sie sicher, dass Ihr Code keine sofortige Antwort erwartet.

Weitere ausführliche Informationen zum Thema Autoplay und Blockierung von Autoplay finden Sie in unserem Artikel [Autoplay-Leitfaden für Medien- und Web-Audio-APIs](/de/docs/Web/Media/Autoplay_guide).

## Beispiele

Dieses Beispiel zeigt, wie bestätigt werden kann, dass die Wiedergabe gestartet wurde, und wie blockierte automatische Wiedergabe elegant verarbeitet werden kann:

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

In diesem Beispiel wird die Wiedergabe eines Videos durch die [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)-Funktion `playVideo()` ein- und ausgeschaltet. Sie versucht, das Video abzuspielen, und wenn dies erfolgreich ist, wird der Klassenname des `playButton`-Elements auf `"playing"` gesetzt. Wenn die Wiedergabe nicht gestartet werden kann, wird die Klasse des `playButton`-Elements gelöscht, wodurch sein Standardaussehen wiederhergestellt wird. Dies stellt sicher, dass die Wiedergabetaste dem tatsächlichen Zustand der Wiedergabe entspricht, indem sie auf die Auflösung oder Ablehnung des durch `play()` zurückgegebenen {{jsxref("Promise")}} achtet.

Wenn dieses Beispiel ausgeführt wird, beginnt es damit, Referenzen auf das {{HTMLElement("video")}}-Element sowie auf das {{HTMLElement("button")}}, das verwendet wird, um die Wiedergabe ein- und auszuschalten, zu sammeln. Es wird dann ein Ereignishandler für das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis auf den Wiedergabeumschaltknopf eingerichtet und versucht, die Wiedergabe automatisch durch einen Aufruf von `playVideo()` zu starten.

Sie können [dieses Beispiel in Echtzeit auf Glitch ausprobieren oder remixen](https://media-play-promise.glitch.me/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Webmedientechnologien](/de/docs/Web/Media)
- Lernen: [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Autoplay-Leitfaden für Medien und Web-Audio-APIs](/de/docs/Web/Media/Autoplay_guide)
- [Verwendung der Web-Audio-API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
