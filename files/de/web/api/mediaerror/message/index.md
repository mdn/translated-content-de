---
title: "MediaError: message-Eigenschaft"
short-title: message
slug: Web/API/MediaError/message
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`MediaError.message`** gibt einen
menschlich lesbaren String zurück, der spezifische Diagnosedetails im Zusammenhang mit dem durch das `MediaError`-Objekt beschriebenen Fehler bietet oder einen leeren String (`""`), wenn keine Diagnoseinformationen ermittelt oder bereitgestellt werden können.

## Wert

Ein String, der eine detaillierte und spezifische Erklärung dessen bietet, was schiefgelaufen ist und möglicherweise wie das Problem behoben werden könnte. Dies ist _nicht_ eine generische Beschreibung des Werts der [`MediaError.code`](/de/docs/Web/API/MediaError/code)-Eigenschaft, sondern geht tiefer in die spezifischen Details dieses bestimmten Fehlers und seiner Umstände. Wenn keine spezifischen Details verfügbar sind, ist dieser String leer.

## Beispiele

Dieses Beispiel erstellt ein {{HTMLElement("audio")}}-Element, richtet einen Fehlerbehandler dafür ein und ermöglicht es dem Benutzer, Buttons anzuklicken, um zu wählen, ob eine gültige Audiodatei oder eine fehlende Datei dem [`src`](/de/docs/Web/HTML/Element/audio#src)-Attribut des Elements zugewiesen wird. Der Fehlerbehandler gibt eine Nachricht auf einer Box auf dem Bildschirm aus, die den Fehler beschreibt, einschließlich sowohl des `code` als auch der `message`.

Nur die relevanten Teile des Codes werden angezeigt; Sie können [den vollständigen Quellcode hier sehen](https://github.com/mdn/dom-examples/tree/main/media/mediaerror).

Das Beispiel erstellt ein {{HTMLElement("audio")}}-Element und lässt den Benutzer entweder eine gültige Musikdatei oder einen Link zu einer nicht existierenden Datei zuweisen. Dies ermöglicht uns, das Verhalten des [`error`](/de/docs/Web/API/HTMLMediaElement/error_event)-Ereignisbehandlers zu sehen, der von einem Ereignisbehandler empfangen wird, den wir dem `<audio>`-Element selbst hinzufügen.

Der Fehlerbehandler sieht folgendermaßen aus:

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

Er erhält das [`MediaError`](/de/docs/Web/API/MediaError)-Objekt, das den Fehler beschreibt, über die [`error`](/de/docs/Web/API/HTMLMediaElement/error)-Eigenschaft auf dem [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement), das den Audioplayer darstellt. Das Attribut [`code`](/de/docs/Web/API/MediaError/code) des Fehlers wird überprüft, um eine generische Fehlermeldung anzuzeigen und, falls `message` nicht leer ist, wird es angehängt, um zusätzliche Details bereitzustellen. Dann wird der resultierende Text in das Protokoll ausgegeben.

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
