---
title: "MediaError: Eigenschaft message"
short-title: message
slug: Web/API/MediaError/message
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`MediaError.message`** gibt eine
für Menschen verständliche Zeichenkette zurück, die spezifische
diagnostische Details im Zusammenhang mit dem vom `MediaError`-Objekt beschriebenen Fehler bietet,
oder einen leeren String (`""`), wenn keine diagnostischen Informationen ermittelt oder
bereitgestellt werden können.

## Wert

Eine Zeichenkette, die eine detaillierte, spezifische Erklärung darüber gibt, was schiefgelaufen ist
und möglicherweise wie es behoben werden kann. Dies ist _keine_ allgemeine Beschreibung des Wertes der [`MediaError.code`](/de/docs/Web/API/MediaError/code) Eigenschaft, sondern geht tiefer ins Detail
dieses speziellen Fehlers und seiner Umstände. Wenn keine spezifischen Details verfügbar sind,
ist diese Zeichenkette leer.

## Beispiele

Dieses Beispiel erstellt ein {{HTMLElement("audio")}}-Element, richtet einen Fehler-Handler
dafür ein und lässt den Benutzer Schaltflächen anklicken, um zu wählen, ob eine gültige Audiodatei
oder eine fehlende Datei dem [`src`](/de/docs/Web/HTML/Reference/Elements/audio#src)-Attribut des Elements zugewiesen werden soll. Der Fehler-Handler
gibt eine Nachricht in einem Feld auf dem Bildschirm aus, die den Fehler beschreibt, einschließlich sowohl des
`code` als auch der `message`.

Es werden nur die relevanten Teile des Codes angezeigt; Sie können den [vollständigen Quellcode hier sehen](https://github.com/mdn/dom-examples/tree/main/media/mediaerror).

Das Beispiel erstellt ein {{HTMLElement("audio")}}-Element und lässt den Benutzer entweder
eine gültige Musikdatei oder einen Link zu einer nicht existierenden Datei zuweisen. Dadurch können wir das
Verhalten des [`error`](/de/docs/Web/API/HTMLMediaElement/error_event)-Ereignis-Handlers beobachten, welches von einem Event-Handler
entgegengenommen wird, den wir dem `<audio>`-Element selbst hinzufügen.

Der Fehler-Handler sieht folgendermaßen aus:

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

Dies erhält das [`MediaError`](/de/docs/Web/API/MediaError)-Objekt, das den Fehler beschreibt, von der
[`error`](/de/docs/Web/API/HTMLMediaElement/error)-Eigenschaft des
[`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement), das den Audio-Player repräsentiert. Die `code`-Attribut des Fehlers
wird geprüft, um eine allgemeine Fehlermeldung anzuzeigen, und, falls `message` nicht leer ist, wird es angehängt, um
zusätzliche Details zu liefern. Dann wird der resultierende Text ins Log ausgegeben.

### Ergebnis

Sie können dieses Beispiel unten ausprobieren und [das Beispiel außerhalb dieser Seite in Aktion sehen](https://mdn.github.io/dom-examples/media/mediaerror/).

{{ EmbedGHLiveSample('dom-examples/media/mediaerror', 650, 200) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaError`](/de/docs/Web/API/MediaError): Schnittstelle zur Definition der `MediaError.message`-Eigenschaft
- {{HTMLElement("audio")}}, {{HTMLElement("video")}}
