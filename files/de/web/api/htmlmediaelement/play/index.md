---
title: "HTMLMediaElement: play()-Methode"
short-title: play()
slug: Web/API/HTMLMediaElement/play
l10n:
  sourceCommit: 487a85381b3079e848f4788e8e07830e3e2cb7e8
---

{{APIRef("HTML DOM")}}

Die **`play()`**-Methode des [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) versucht, die Wiedergabe des Mediums zu starten. Sie gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn die Wiedergabe erfolgreich gestartet wurde.

Wenn aus irgendeinem Grund, wie beispielsweise Berechtigungsprobleme, die Wiedergabe nicht gestartet werden kann, wird das Promise abgelehnt.

## Syntax

```js-nolint
play()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird, wenn die Wiedergabe gestartet wurde oder abgelehnt wird, falls die Wiedergabe aus irgendeinem Grund nicht gestartet werden kann.

> [!NOTE]
> Browser, die vor 2019 veröffentlicht wurden, geben möglicherweise keinen Wert von `play()` zurück.

### Ausnahmen

Der **Rejection-Handler** des Promises wird mit einem [`DOMException`](/de/docs/Web/API/DOMException)-Objekt aufgerufen, das als einziger Eingabeparameter übergeben wird (im Gegensatz zu einer traditionellen Ausnahme, die geworfen wird). Mögliche Fehler sind:

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird bereitgestellt, wenn der User-Agent (Browser) oder das Betriebssystem die Wiedergabe des Mediums im aktuellen Kontext oder in der aktuellen Situation nicht zulässt. Der Browser kann erfordern, dass der Benutzer die Medienwiedergabe ausdrücklich durch Klicken auf eine "Play"-Schaltfläche startet, beispielsweise aufgrund einer [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy).
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird bereitgestellt, wenn die Medienquelle (die beispielsweise als [`MediaStream`](/de/docs/Web/API/MediaStream), [`MediaSource`](/de/docs/Web/API/MediaSource), [`Blob`](/de/docs/Web/API/Blob) oder [`File`](/de/docs/Web/API/File) angegeben werden kann) kein unterstütztes Medienformat darstellt.

Andere Ausnahmen können gemeldet werden, abhängig von den Implementierungsdetails des Browsers, der Implementierung des Mediaplayers und so weiter.

## Hinweise zur Verwendung

Obwohl der Begriff "Autoplay" gewöhnlich als Bezeichner für Seiten verstanden wird, die unmittelbar nach dem Laden des Mediums mit der Wiedergabe beginnen, gelten die Autoplay-Richtlinien der Webbrowser auch für jede skriptinitiierte Wiedergabe von Medien, einschließlich Aufrufen von `play()`.

Wenn der {{Glossary("user_agent", "Benutzeragent")}} so konfiguriert ist, dass er keine automatische oder skriptinitiierte Wiedergabe von Medien erlaubt, wird durch Aufrufen von `play()` das zurückgegebene Promise sofort mit einem `NotAllowedError` abgelehnt. Webseiten sollten darauf vorbereitet sein, mit dieser Situation umzugehen. Beispielsweise sollte eine Seite keine Benutzeroberfläche präsentieren, die davon ausgeht, dass die Wiedergabe automatisch begonnen hat, sondern stattdessen ihre Benutzeroberfläche basierend darauf aktualisieren, ob das zurückgegebene Promise erfüllt oder abgelehnt wurde. Siehe das [Beispiel](#beispiele) unten für weitere Informationen.

> [!NOTE]
> Die `play()`-Methode kann dazu führen, dass der Benutzer um die Erlaubnis zur Wiedergabe des Mediums gebeten wird, was zu einer möglichen Verzögerung führen kann, bevor das zurückgegebene Promise aufgelöst wird. Stellen Sie sicher, dass Ihr Code keine sofortige Antwort erwartet.

Für noch tiefere Einblicke in Autoplay und die Blockierung von Autoplay, siehe unseren Artikel [Autoplay-Leitfaden für Medien- und Web-Audio-APIs](/de/docs/Web/Media/Guides/Autoplay).

## Beispiele

### Bestätigung der Wiedergabe und Handhabung von Zuständen

Dieses Beispiel zeigt, wie man bestätigt, dass die Wiedergabe begonnen hat, und wie man blockierte automatische Wiedergabe elegant behandelt.

Wenn dieses Beispiel ausgeführt wird, beginnt es damit, Referenzen zu dem {{HTMLElement("video")}}-Element sowie zu dem {{HTMLElement("button")}} zu sammeln, das verwendet wird, um die Wiedergabe ein- und auszuschalten. Es richtet dann einen Event-Handler für das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis auf der Umschalttaste ein und versucht, die Wiedergabe automatisch zu starten, indem die [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function) `playVideo()`-Funktion aufgerufen wird.

Eine Hilfsfunktion `toggleButton()` lässt uns definieren, was im Code geschehen soll, wenn wir ihr einen booleschen Wert übergeben, der den Wiedergabestatus darstellt (z.B. `toggleButton(true)`). Wenn die Wiedergabe erfolgreich ist, ändern sich der Schaltflächen-Text und das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) in "Pause". Wenn die Wiedergabe fehlschlägt, zeigt die Schaltfläche und `aria-label` "Play" an. Dies stellt sicher, dass die `playButton` mit dem Wiedergabestatus übereinstimmt, indem es auf die Auflösung oder Ablehnung des von `play()` zurückgegebenen {{jsxref("Promise")}} achtet:

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

playButton.addEventListener("click", handlePlayButton, false);
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

- [Web-Medientechnologien](/de/docs/Web/Media)
- Lernen: [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Autoplay-Leitfaden für Medien- und Web-Audio-APIs](/de/docs/Web/Media/Guides/Autoplay)
- [Verwendung der Web-Audio-API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
