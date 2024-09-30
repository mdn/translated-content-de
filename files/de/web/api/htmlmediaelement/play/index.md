---
title: "HTMLMediaElement: play()-Methode"
short-title: play()
slug: Web/API/HTMLMediaElement/play
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}

Die **`play()`**-Methode des [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) versucht, die Wiedergabe der Medien zu starten. Sie gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn die Wiedergabe erfolgreich gestartet wurde.

Ein Fehler beim Starten der Wiedergabe, zum Beispiel aufgrund von Berechtigungsproblemen, führt dazu, dass das Versprechen abgelehnt wird.

## Syntax

```js-nolint
play()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird, wenn die Wiedergabe gestartet wurde, oder abgelehnt wird, wenn die Wiedergabe aus irgendeinem Grund nicht gestartet werden kann.

> [!NOTE]
> Browser-Versionen, die vor 2019 veröffentlicht wurden, geben möglicherweise keinen Rückgabewert von `play()` zurück.

### Ausnahmen

Der **Ablehnungshandler** des Versprechens wird mit einem [`DOMException`](/de/docs/Web/API/DOMException)-Objekt aufgerufen, das als einziger Eingabeparameter übergeben wird (im Gegensatz zum traditionellen Werfen einer Ausnahme). Mögliche Fehler sind:

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird bereitgestellt, wenn der Benutzeragent (Browser) oder das Betriebssystem die Wiedergabe von Medien im aktuellen Kontext oder in der aktuellen Situation nicht zulässt. Der Browser kann verlangen, dass der Benutzer die Medienwiedergabe explizit durch Klicken auf eine Schaltfläche "Wiedergabe" startet, zum Beispiel aufgrund einer [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy).
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird bereitgestellt, wenn die Medienquelle (die z.B. als [`MediaStream`](/de/docs/Web/API/MediaStream), [`MediaSource`](/de/docs/Web/API/MediaSource), [`Blob`](/de/docs/Web/API/Blob) oder [`File`](/de/docs/Web/API/File) angegeben sein kann) kein unterstütztes Medienformat darstellt.

Andere Ausnahmen können gemeldet werden, abhängig von den Implementierungsdetails des Browsers, der Implementierung des Mediaplayers usw.

## Hinweise zur Verwendung

Obwohl der Begriff "Autoplay" normalerweise für Seiten gilt, die unmittelbar beim Laden Medien abspielen, gelten die Autoplay-Richtlinien der Webbrowser auch für jede skriptinitiierte Wiedergabe von Medien, einschließlich Aufrufen von `play()`.

Wenn der [Benutzeragent](/de/docs/Glossary/user_agent) so konfiguriert ist, dass automatische oder skriptinitiierte Wiedergabe von Medien nicht erlaubt ist, führt der Aufruf von `play()` dazu, dass das zurückgegebene Versprechen sofort mit einem `NotAllowedError` abgelehnt wird. Websites sollten darauf vorbereitet sein, diese Situation zu handhaben. Ein Beispiel: Eine Website sollte keine Benutzeroberfläche anzeigen, die davon ausgeht, dass die Wiedergabe automatisch begonnen hat, sondern stattdessen ihre Benutzeroberfläche aktualisieren, je nachdem, ob das zurückgegebene Versprechen erfüllt oder abgelehnt wird. Weitere Informationen finden Sie im [Beispiel](#beispiele) unten.

> [!NOTE]
> Die `play()`-Methode kann dazu führen, dass der Benutzer um Erlaubnis gebeten wird, das Medium abzuspielen, was zu einer möglichen Verzögerung führt, bevor das zurückgegebene Versprechen gelöst wird. Stellen Sie sicher, dass Ihr Code nicht von einer sofortigen Antwort ausgeht.

Für noch detailliertere Informationen über Autoplay und das Blockieren von Autoplay siehe unseren Artikel [Autoplay-Leitfaden für Medien und Web Audio APIs](/de/docs/Web/Media/Autoplay_guide).

## Beispiele

Dieses Beispiel zeigt, wie Sie bestätigen können, dass die Wiedergabe begonnen hat und wie Sie blockierte automatische Wiedergabe elegant behandeln können:

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

In diesem Beispiel wird die Videowiedergabe durch die [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function) `playVideo()`-Funktion ein- und ausgeschaltet. Es versucht, das Video abzuspielen, und setzt bei Erfolg den Klassennamen des `playButton`-Elements auf `"playing"`. Wenn die Wiedergabe nicht starten kann, wird die Klasse des `playButton`-Elements gelöscht, um das standardmäßige Erscheinungsbild wiederherzustellen. Dies stellt sicher, dass die Wiedergabeschaltfläche den tatsächlichen Wiedergabestatus widerspiegelt, indem die Auflösung oder Ablehnung des von `play()` zurückgegebenen {{jsxref("Promise")}} beobachtet wird.

Wenn dieses Beispiel ausgeführt wird, beginnt es mit dem Sammeln von Referenzen auf das {{HTMLElement("video")}}-Element sowie auf das {{HTMLElement("button")}}, das zum Umschalten der Wiedergabe verwendet wird. Es richtet dann einen Ereignishandler für das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis auf der Wiedergabetaste ein und versucht, die Wiedergabe automatisch zu starten, indem es `playVideo()` aufruft.

Sie können dieses Beispiel [in Echtzeit auf Glitch ausprobieren oder remixieren](https://media-play-promise.glitch.me/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web-Medientechnologien](/de/docs/Web/Media)
- Lernen: [Video- und Audioinhalte](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [Autoplay-Leitfaden für Medien und Web Audio APIs](/de/docs/Web/Media/Autoplay_guide)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
