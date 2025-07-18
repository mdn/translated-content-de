---
title: "MediaError: message-Eigenschaft"
short-title: message
slug: Web/API/MediaError/message
l10n:
  sourceCommit: 14121dd74b6f0157537e31b17f548c9e727d2c13
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`MediaError.message`** gibt einen lesbaren String zurück, der spezifische Diagnoseinformationen zu dem im `MediaError` Objekt beschriebenen Fehler bietet, oder einen leeren String (`""`), wenn keine Diagnoseinformationen ermittelt oder bereitgestellt werden können.

## Wert

Ein String, der eine detaillierte, spezifische Erklärung darüber liefert, was schiefgelaufen ist und möglicherweise, wie es behoben werden kann. Dies ist _keine_ generische Beschreibung des Werts der [`MediaError.code`](/de/docs/Web/API/MediaError/code)-Eigenschaft, sondern geht tiefer auf die Besonderheiten dieses speziellen Fehlers und seine Umstände ein.
Wenn keine spezifischen Details verfügbar sind, ist dieser String leer.

## Beispiele

Dieses Beispiel erstellt ein {{HTMLElement("audio")}}-Element, definiert einen Fehlermanager dafür und ermöglicht dem Benutzer, über Schaltflächen zu wählen, ob er eine gültige Audiodatei oder eine fehlende Datei dem [`src`](/de/docs/Web/HTML/Reference/Elements/audio#src)-Attribut des Elements zuweist.
Der Fehlermanager gibt eine Nachricht in einem Kasten auf dem Bildschirm aus, die den Fehler beschreibt und sowohl den `code` als auch die `message` enthält.

```html
<audio controls id="audio"></audio>
<div>
  <button id="valid-button">Valid File</button>
  <button id="invalid-button">Missing File</button>
</div>
<pre id="log"></pre>
```

Das Beispiel erstellt ein {{HTMLElement("audio")}}-Element und ermöglicht es dem Benutzer, entweder eine gültige Musikdatei zuzuweisen oder einen Link zu einer Datei, die nicht existiert.
So können wir das Verhalten des [`error`](/de/docs/Web/API/HTMLMediaElement/error_event)-Ereignishandlers beobachten, der von einem Ereignishandler empfangen wird, den wir dem `<audio>`-Element selbst hinzufügen.

Der Fehlermanager sieht folgendermaßen aus:

```js
const audioElement = document.getElementById("audio");
const validButton = document.getElementById("valid-button");
const invalidButton = document.getElementById("invalid-button");

const logMessage = (msg) => {
  const now = new Date();
  const timestamp = now.toLocaleTimeString();
  document.getElementById("log").innerText += `[${timestamp}] ${msg}\n`;
};

validButton.addEventListener("click", () => {
  audioElement.src = "https://mdn.github.io/shared-assets/audio/guitar.mp3";
});

invalidButton.addEventListener("click", () => {
  audioElement.src = "no-file-here.mp3";
});

audioElement.onerror = () => {
  let message = "";
  let err = audioElement.error;

  switch (err.code) {
    case MediaError.MEDIA_ERR_ABORTED:
      message += "The user canceled the audio.";
      break;
    case MediaError.MEDIA_ERR_NETWORK:
      message += "A network error occurred while fetching the audio.";
      break;
    case MediaError.MEDIA_ERR_DECODE:
      message += "An error occurred while decoding the audio.";
      break;
    case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
      message +=
        "The audio is missing or is in a format not supported by your browser.";
      break;
    default:
      message += "An unknown error occurred.";
      break;
  }

  logMessage(`Error ${err.code}: ${message}`);
};
```

Dies erhält das [`MediaError`](/de/docs/Web/API/MediaError)-Objekt, das den Fehler beschreibt, von der [`error`](/de/docs/Web/API/HTMLMediaElement/error)-Eigenschaft des [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement), das den Audioplayer repräsentiert.
Das `code`-Attribut des Fehlers wird überprüft, um eine generische Fehlermeldung anzuzeigen, und, falls `message` nicht leer ist, wird es hinzugefügt, um zusätzliche Details bereitzustellen.
Der resultierende Text wird dann im Log ausgegeben.

{{embedlivesample("", , '300')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaError`](/de/docs/Web/API/MediaError): Schnittstelle zur Definition der `MediaError.message`-Eigenschaft
- {{HTMLElement("audio")}}, {{HTMLElement("video")}}
