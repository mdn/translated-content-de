---
title: "HTMLMediaElement: play() Methode"
short-title: play()
slug: Web/API/HTMLMediaElement/play
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{APIRef("HTML DOM")}}

Die **`play()`**-Methode des [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) versucht die Wiedergabe der Medien zu starten. Sie gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn die Wiedergabe erfolgreich gestartet wurde.

Wenn die Wiedergabe aus irgendeinem Grund, wie z. B. Berechtigungsproblemen, nicht gestartet werden kann, wird das Versprechen zurückgewiesen.

## Syntax

```js-nolint
play()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird, wenn die Wiedergabe begonnen hat, oder zurückgewiesen wird, wenn die Wiedergabe aus irgendeinem Grund nicht gestartet werden kann.

> [!NOTE]
> Browser, die vor 2019 veröffentlicht wurden, geben möglicherweise keinen Wert von `play()` zurück.

### Ausnahmen

Der **Rejection-Handler** des Versprechens wird mit einem [`DOMException`](/de/docs/Web/API/DOMException)-Objekt aufgerufen, das als einziger Eingabeparameter übergeben wird (im Gegensatz zu einer traditionellen Ausnahme, die ausgelöst wird). Mögliche Fehler sind:

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird bereitgestellt, wenn der Benutzeragent (Browser) oder das Betriebssystem die Wiedergabe von Medien im aktuellen Kontext oder in der aktuellen Situation nicht zulassen. Der Browser kann beispielsweise verlangen, dass der Benutzer die Medienwiedergabe ausdrücklich durch Klicken auf eine "Wiedergabe"-Schaltfläche startet, etwa aufgrund einer [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy).
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird bereitgestellt, wenn die Medienquelle (die möglicherweise als [`MediaStream`](/de/docs/Web/API/MediaStream), [`MediaSource`](/de/docs/Web/API/MediaSource), [`Blob`](/de/docs/Web/API/Blob) oder [`File`](/de/docs/Web/API/File) angegeben ist) kein unterstütztes Medienformat darstellt.

Andere Ausnahmen können gemeldet werden, abhängig von den Implementierungsdetails des Browsers, der Medienwiedergabefunktion und so weiter.

## Verwendungshinweise

Obwohl der Begriff "Autoplay" normalerweise als Bezugnahme auf Seiten, die unmittelbar beim Laden mit der Wiedergabe von Medien beginnen, verstanden wird, gelten die Autoplay-Richtlinien der Webbrowser auch für die von Skripten initiierte Wiedergabe von Medien, einschließlich der Aufrufe von `play()`.

Wenn der {{Glossary("user_agent", "Benutzeragent")}} so konfiguriert ist, dass er keine automatische oder von Skripten initiierte Wiedergabe von Medien zulässt, führt ein Aufruf von `play()` dazu, dass das zurückgegebene Versprechen sofort mit einem `NotAllowedError` zurückgewiesen wird. Websites sollten auf diese Situation vorbereitet sein. Beispielsweise sollte eine Website keine Benutzeroberfläche anzeigen, die davon ausgeht, dass die Wiedergabe automatisch begonnen hat, sondern stattdessen ihre Benutzeroberfläche basierend darauf aktualisieren, ob das zurückgegebene Versprechen erfüllt oder zurückgewiesen wird. Weitere Informationen finden Sie im [Beispiel](#beispiele) unten.

> [!NOTE]
> Die `play()`-Methode kann dazu führen, dass der Benutzer aufgefordert wird, die Erlaubnis zur Wiedergabe der Medien zu erteilen, was zu einer möglichen Verzögerung führt, bevor das zurückgegebene Versprechen aufgelöst wird. Stellen Sie sicher, dass Ihr Code nicht von einer sofortigen Antwort ausgeht.

Für noch detailliertere Informationen über Autoplay und Autoplay-Blockierung lesen Sie unseren Artikel [Autoplay-Leitfaden für Media- und Web-Audio-APIs](/de/docs/Web/Media/Guides/Autoplay).

## Beispiele

### Bestätigung der Wiedergabe und Umgang mit Zuständen

Dieses Beispiel zeigt, wie Sie bestätigen können, dass die Wiedergabe begonnen hat, und wie Sie blockierte automatische Wiedergabe elegant handhaben.

Wenn dieses Beispiel ausgeführt wird, beginnt es damit, Referenzen zum {{HTMLElement("video")}}-Element sowie zur {{HTMLElement("button")}}-Schaltfläche zu sammeln, die zum Umschalten der Wiedergabe verwendet wird. Anschließend wird ein Ereignishandler für das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis auf der Umschalttaste eingerichtet und versucht automatisch mit der Wiedergabe zu beginnen, indem die [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function) `playVideo()`-Funktion aufgerufen wird.

Eine Hilfsfunktion `toggleButton()` lässt uns definieren, was im Code passieren soll, wenn wir ihr einen booleschen Wert übergeben, der den Wiedergabestatus darstellt (z. B. `toggleButton(true)`). Wenn die Wiedergabe erfolgreich ist, ändern sich der Text der Schaltfläche und ihr [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) zu "Pause". Wenn die Wiedergabe fehlschlägt, zeigen die Schaltfläche und das `aria-label` "Play" an. Dies stellt sicher, dass die `playButton` mit dem Wiedergabestatus übereinstimmt, indem auf die Auflösung oder Zurückweisung des von `play()` zurückgegebenen {{jsxref("Promise")}} geachtet wird:

```html live-sample___handling-states
<div class="video-box">
  <video
    id="video"
    width="480"
    loop
    src="/shared-assets/videos/flower.mp4"></video>
  <button type="button" id="play-button" aria-label="Play"></button>
</div>
```

```js live-sample___handling-states
let videoElem = document.getElementById("video");
let playButton = document.getElementById("play-button");

playButton.addEventListener("click", handlePlayButton);
playVideo();

function toggleButton(playing) {
  if (playing) {
    playButton.textContent = "Pause";
    playButton.setAttribute("aria-label", "Pause");
  } else {
    playButton.textContent = "Play";
    playButton.setAttribute("aria-label", "Play");
  }
}

async function playVideo() {
  try {
    await videoElem.play();
    toggleButton(true);
  } catch (err) {
    toggleButton(false);
  }
}

function handlePlayButton() {
  if (videoElem.paused) {
    playVideo();
  } else {
    videoElem.pause();
    toggleButton(false);
  }
}
```

```css hidden live-sample___handling-states
.video-box {
  position: relative;
}

#video {
  border: 2px solid black;
}

#play-button {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 8px 12px;
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
}
```

{{embedlivesample("handling-states", , "300")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Technologien für Webmedien](/de/docs/Web/Media)
- Lernen: [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Autoplay-Leitfaden für Media- und Web-Audio-APIs](/de/docs/Web/Media/Guides/Autoplay)
- [Verwendung der Web-Audio-API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
