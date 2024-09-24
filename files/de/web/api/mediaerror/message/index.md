---
title: "MediaError: message-Eigenschaft"
short-title: message
slug: Web/API/MediaError/message
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`MediaError.message`** gibt einen
für Menschen lesbaren String zurück, der spezifische diagnostische Details
zu dem vom `MediaError` Objekt beschriebenen Fehler bietet, oder einen leeren String (`""`), falls keine diagnostischen Informationen ermittelt oder bereitgestellt werden können.

## Wert

Ein String, der eine detaillierte, spezifische Erklärung dessen bietet, was
schiefgelaufen ist und möglicherweise wie es behoben werden könnte. Dies ist _keine_ generische Beschreibung des Wertes der {{domxref("MediaError.code")}}-Eigenschaft, sondern geht tiefer auf die
Einzelheiten dieses besonderen Fehlers und dessen Umstände ein. Wenn keine spezifischen Details verfügbar sind, ist dieser String leer.

## Beispiele

Dieses Beispiel erstellt ein {{HTMLElement("audio")}}-Element, richtet einen Fehlerbehandler
ein und ermöglicht es dem Benutzer, durch Klicken auf Schaltflächen zu entscheiden, ob eine gültige Audiodatei oder eine fehlende Datei der [`src`](/de/docs/Web/HTML/Element/audio#src)-Eigenschaft des Elements zugewiesen wird. Der Fehlerhandler gibt eine Nachricht auf dem Bildschirm aus, die den Fehler beschreibt, einschließlich des `code` und der `message`.

Nur die relevanten Teile des Codes werden angezeigt; Sie können [den vollständigen Quellcode hier einsehen](https://github.com/mdn/dom-examples/tree/main/media/mediaerror).

Das Beispiel erstellt ein {{HTMLElement("audio")}}-Element und ermöglicht es dem Benutzer, entweder
eine gültige Musikdatei diesem zuzuweisen oder einen Link zu einer Datei, die nicht existiert. Dadurch können wir das Verhalten des {{domxref("HTMLMediaElement/error_event", "error")}}-Ereignisbehandlers sehen, den wir dem `<audio>`-Element selbst hinzufügen.

Der Fehlerhandler sieht so aus:

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

Dieser ruft das {{domxref("MediaError")}}-Objekt ab, das den Fehler beschreibt, aus der
{{domxref("HTMLMediaElement.error", "error")}}-Eigenschaft des
{{domxref("HTMLAudioElement")}}, das den Audioplayer darstellt. Das
Attribut {{domxref("MediaError.code", "code")}} des Fehlers wird überprüft, um eine generische Fehlermeldung zu ermitteln. Falls `message` nicht leer ist, wird diese angefügt, um
zusätzliche Details bereitzustellen. Anschließend wird der resultierende Text im Log ausgegeben.

### Ergebnis

Sie können dieses Beispiel unten ausprobieren und [sehen das Beispiel in Aktion außerhalb dieser Seite hier](https://mdn.github.io/dom-examples/media/mediaerror/).

{{ EmbedGHLiveSample('dom-examples/media/mediaerror', 650, 200) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("MediaError")}}: Schnittstelle zur Definition der `MediaError.message`-Eigenschaft
- {{HTMLElement("audio")}}, {{HTMLElement("video")}}
