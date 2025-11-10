---
title: "MediaError: message-Eigenschaft"
short-title: message
slug: Web/API/MediaError/message
l10n:
  sourceCommit: 97428527b15058e50f47a311da4eea78f7eac45f
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`MediaError.message`** gibt einen menschenlesbaren String zurück, der spezifische diagnostische Details im Zusammenhang mit dem im `MediaError`-Objekt beschriebenen Fehler bietet, oder einen leeren String (`""`), wenn keine diagnostischen Informationen ermittelt oder bereitgestellt werden können.

## Wert

Ein String, der eine detaillierte, spezifische Erklärung dessen bietet, was schiefgelaufen ist und möglicherweise wie es behoben werden könnte. Dies ist _keine_ generische Beschreibung des Wertes der [`MediaError.code`](/de/docs/Web/API/MediaError/code)-Eigenschaft, sondern geht näher auf die Einzelheiten dieses bestimmten Fehlers und seine Umstände ein. Wenn keine spezifischen Details verfügbar sind, ist dieser String leer.

## Beispiele

### Protokollieren von MediaError-Nachrichten

Dieses Beispiel erstellt ein {{HTMLElement("audio")}}-Element, richtet einen Fehlerbehandler dafür ein und lässt den Benutzer Schaltflächen anklicken, um zu wählen, ob eine gültige Audiodatei oder eine fehlende Datei der [`src`](/de/docs/Web/HTML/Reference/Elements/audio#src)-Eigenschaft des Elements zugewiesen werden soll. Der Fehlerbehandler gibt Protokollzeilen in einem Kasten auf dem Bildschirm aus, die den Fehler beschreiben, einschließlich des `code`, der `message` und eines Hinweises, der für Besucher nützlicher sein könnte als die diagnostische `message`:

```html
<audio controls id="audio"></audio>
<div>
  <button id="valid-button">Valid file</button>
  <button id="invalid-button">Missing file</button>
  <button id="svg-button">Wrong format</button>
</div>
<pre id="log">Logs:</pre>
```

```css hidden
pre {
  white-space: wrap;
  border: 1px solid grey;
}
```

Das Beispiel erstellt ein {{HTMLElement("audio")}}-Element und lässt den Benutzer eine entweder gültige Musikdatei oder einen Link zu einer Datei, die nicht existiert, zuweisen. Dies ermöglicht es uns, das Verhalten des [`error`](/de/docs/Web/API/HTMLMediaElement/error_event)-Ereignisbehandlers zu sehen, der von einem Ereignisbehandler empfangen wird, den wir dem `<audio>`-Element selbst hinzufügen.

Zuerst erhält er das [`MediaError`](/de/docs/Web/API/MediaError)-Objekt, das den Fehler beschreibt, aus der [`error`](/de/docs/Web/API/HTMLMediaElement/error)-Eigenschaft des [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement), das den Audioplayer darstellt. Der numerische [`code`](/de/docs/Web/API/MediaError/code) des Fehlers wird gegen `MediaError`-Konstanten überprüft, die zunächst undefiniert sind. Wenn `err.code` einer der Konstanten entspricht, erstellt er einen generischen Hinweis mit der `MediaError.message`, die zur Protokollzeile hinzugefügt wird, um detailliertere diagnostische Informationen für Entwickler bereitzustellen. Der resultierende Text wird dem `<pre>`-Element hinzugefügt:

```js
const audioElement = document.getElementById("audio");
const validButton = document.getElementById("valid-button");
const invalidButton = document.getElementById("invalid-button");
const svgButton = document.getElementById("svg-button");

const logMessage = (logLine) => {
  const now = new Date();
  const timestamp = now.toLocaleTimeString();
  document.getElementById("log").innerText += `\n[${timestamp}] ${logLine}`;
};

validButton.addEventListener("click", () => {
  audioElement.src = "https://mdn.github.io/shared-assets/audio/guitar.mp3";
});

svgButton.addEventListener("click", () => {
  audioElement.src =
    "https://mdn.github.io/shared-assets/images/examples/dino.svg";
});

invalidButton.addEventListener("click", () => {
  audioElement.src = "no-file-here.mp3";
});

audioElement.onerror = () => {
  const err = audioElement.error;
  let userHint = "";

  switch (err.code) {
    case MediaError.MEDIA_ERR_ABORTED:
      userHint = "Canceled audio playback.";
      break;
    case MediaError.MEDIA_ERR_NETWORK:
      userHint = "A network error occurred while fetching the audio.";
      break;
    case MediaError.MEDIA_ERR_DECODE:
      userHint = "An error occurred while decoding the audio.";
      break;
    case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
      userHint = "Audio is missing or is an unsupported format.";
      break;
    default:
      userHint += "An unknown error occurred.";
      break;
  }

  const message = err.message || "no message available";

  logMessage(`Error code ${err.code} (${err.message}), ${userHint}`);
};
```

Klicken Sie auf die Schaltfläche "Gültige Datei", um die Wiedergabe wie erwartet zu starten, auf die Schaltfläche "Fehlende Datei", um zu versuchen, eine fehlende Ressource zu laden, und auf die Schaltfläche "Falsches Format", um zu versuchen, eine SVG-Datei als Quelle für das Audioelement festzulegen. Der Vergleich der Protokollausgabe für die beiden Fehlerfälle veranschaulicht den Unterschied zwischen dem `code` und der `message` eines `MediaError`:

{{embedlivesample("logging_mediaerror_messages", , "300")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaError`](/de/docs/Web/API/MediaError): Schnittstelle, die verwendet wird, um die `MediaError.message`-Eigenschaft zu definieren
- {{HTMLElement("audio")}}, {{HTMLElement("video")}}
