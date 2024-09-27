---
title: "MediaError: message-Eigenschaft"
short-title: message
slug: Web/API/MediaError/message
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`MediaError.message`** gibt einen
lesbaren String zurück, der spezifische diagnostische Details
zum durch das `MediaError`-Objekt beschriebenen Fehler bietet,
oder einen leeren String (`""`), wenn keine diagnostischen Informationen ermittelt oder bereitgestellt werden können.

## Wert

Ein String, der eine detaillierte, spezifische Erklärung dessen bietet, was schiefgelaufen ist und möglicherweise wie es behoben werden könnte. Dies ist _nicht_ eine generische Beschreibung des Werts der [`MediaError.code`](/de/docs/Web/API/MediaError/code)-Eigenschaft, sondern geht stattdessen tiefer auf die spezifischen Details dieses speziellen Fehlers und seiner Umstände ein. Wenn keine spezifischen Details verfügbar sind, ist dieser String leer.

## Beispiele

Dieses Beispiel erstellt ein {{HTMLElement("audio")}}-Element, richtet einen Fehlerbehandler dafür ein und lässt den Benutzer Buttons klicken, um zu wählen, ob eine gültige Audiodatei oder eine fehlende Datei dem `src`-Attribut des Elements zugewiesen werden soll. Der Fehlerbehandler gibt eine Nachricht auf einer Box auf dem Bildschirm aus, die den Fehler beschreibt, einschließlich des `code` und der `message`.

Nur die relevanten Teile des Codes werden angezeigt; Sie können [den vollständigen Quellcode hier einsehen](https://github.com/mdn/dom-examples/tree/main/media/mediaerror).

Das Beispiel erstellt ein {{HTMLElement("audio")}}-Element und lässt den Benutzer entweder
eine gültige Musikdatei zuweisen oder einen Link zu einer Datei, die nicht existiert. Dies ermöglicht es, das Verhalten des [`error`](/de/docs/Web/API/HTMLMediaElement/error_event)-Ereignisbehandlers zu betrachten, der von einem Ereignisbehandler empfangen wird, den wir dem `<audio>`-Element selbst hinzufügen.

Der Fehlerbehandler sieht wie folgt aus:

```js
audioElement.onerror = () => {
  let s = "";
  const err = audioElement.error;

  switch (err.code) {
    case MediaError.MEDIA_ERR_ABORTED:
      s += "The user canceled the audio.";
      break;
    case MediaError.MEDIA_ERR_NETWORK:
      s += "A network error occurred while fetching the audio.";
      break;
    case MediaError.MEDIA_ERR_DECODE:
      s += "An error occurred while decoding the audio.";
      break;
    case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
      s +=
        "The audio is missing or is in a format not supported by your browser.";
      break;
    default:
      s += "An unknown error occurred.";
      break;
  }

  const message = err.message;

  if (message?.length > 0) {
    s += ` ${message}`;
  }

  displayErrorMessage(`<strong>Error ${err.code}:</strong> ${s}<br>`);
};
```

Dies erhält das [`MediaError`](/de/docs/Web/API/MediaError)-Objekt, das den Fehler aus der
[`error`](/de/docs/Web/API/HTMLMediaElement/error)-Eigenschaft auf dem
[`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement) repräsentiert. Das `code`-Attribut des Fehlers wird überprüft, um eine generische Fehlermeldung auszugeben, und wenn `message` nicht leer ist, wird es angehängt, um zusätzliche Details bereitzustellen. Dann wird der resultierende Text im Log ausgegeben.

### Ergebnis

Sie können dieses Beispiel unten ausprobieren und [das Beispiel in Aktion außerhalb dieser Seite hier sehen](https://mdn.github.io/dom-examples/media/mediaerror/).

{{ EmbedGHLiveSample('dom-examples/media/mediaerror', 650, 200) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaError`](/de/docs/Web/API/MediaError): Schnittstelle zur Definition der `MediaError.message`-Eigenschaft
- {{HTMLElement("audio")}}, {{HTMLElement("video")}}
