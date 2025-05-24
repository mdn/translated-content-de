---
title: "MediaError: message-Eigenschaft"
short-title: message
slug: Web/API/MediaError/message
l10n:
  sourceCommit: 58cc81b21f777d745877ec1430df8ba2852ff411
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`MediaError.message`** gibt einen
menschlich lesbaren String zurück, der spezifische Diagnoseinformationen in Bezug auf den vom `MediaError`-Objekt beschriebenen Fehler bietet, oder einen leeren String (`""`), wenn keine Diagnoseinformationen bestimmt oder bereitgestellt werden können.

## Wert

Ein String, der eine detaillierte, spezifische Erklärung bietet, was schiefgelaufen ist und möglicherweise, wie es behoben werden könnte. Dies ist _nicht_ eine generische Beschreibung des Werts der [`MediaError.code`](/de/docs/Web/API/MediaError/code) Eigenschaft, sondern geht stattdessen tiefer in die Einzelheiten dieses speziellen Fehlers und seiner Umstände ein. Wenn keine spezifischen Details verfügbar sind, ist dieser String leer.

## Beispiele

Dieses Beispiel erstellt ein {{HTMLElement("audio")}}-Element, richtet einen Fehlerbehandler dafür ein und lässt den Benutzer Schaltflächen anklicken, um zu wählen, ob der `src`-Attribut des Elements eine gültige Audiodatei oder eine fehlende Datei zugewiesen werden soll. Der Fehlerbehandler gibt eine Nachricht auf einem Bildschirm aus, die den Fehler beschreibt, einschließlich sowohl des Codes als auch der Nachricht.

Es werden nur die relevanten Teile des Codes angezeigt; Sie können [den vollständigen Quellcode hier sehen](https://github.com/mdn/dom-examples/tree/main/media/mediaerror).

Das Beispiel erstellt ein {{HTMLElement("audio")}}-Element und lässt den Benutzer entweder eine gültige Musikdatei oder einen Link zu einer nicht existierenden Datei zuweisen. Dies ermöglicht es uns, das Verhalten des [`error`](/de/docs/Web/API/HTMLMediaElement/error_event)-Ereignishandlers zu sehen, das wir dem `<audio>`-Element selbst hinzufügen.

Der Fehlerbehandler sieht so aus:

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

Dies erhält das [`MediaError`](/de/docs/Web/API/MediaError)-Objekt, das den Fehler beschreibt, aus der [`error`](/de/docs/Web/API/HTMLMediaElement/error)-Eigenschaft auf dem [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement), das den Audioplayer darstellt. Das `code`-Attribut des Fehlers wird überprüft, um eine generische Fehlermeldung anzuzeigen, und falls `message` nicht leer ist, wird diese zur Bereitstellung zusätzlicher Details angefügt. Dann wird der resultierende Text im Protokoll ausgegeben.

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
