---
title: "SpeechRecognition: install() statische Methode"
short-title: install()
slug: Web/API/SpeechRecognition/install_static
l10n:
  sourceCommit: d85bb94bd88736df60c9847ea5c815f6166f3bf5
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

Die **`install()`** statische Methode der [Web Speech API](/de/docs/Web/API/Web_Speech_API) installiert die erforderlichen Sprachpakete für die [lokale Spracherkennung](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition) in den angegebenen Sprachen.

Um zu überprüfen, ob die Sprachpakete bereits verfügbar sind, verwenden Sie die [`SpeechRecognition.available()`](/de/docs/Web/API/SpeechRecognition/available_static) Methode.

Der Zugriff auf die `install()` Methode wird durch die {{httpheader("Permissions-Policy/on-device-speech-recognition", "on-device-speech-recognition")}} {{httpheader("Permissions-Policy")}} Direktive gesteuert. Insbesondere wenn eine definierte Richtlinie die Nutzung blockiert, schlagen jegliche Versuche, die Methode aufzurufen, fehl.

## Syntax

```js-nolint
install(options)
```

### Parameter

- `options`
  - : Ein Objekt, das Optionen für die Installation spezifiziert. Mögliche Eigenschaften umfassen:
    - `langs`
      - : Ein Array mit einer oder mehreren Zeichenfolgen, die {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tags")}} enthalten. Jedes repräsentiert eine Sprache, für die Sie das Sprachpaket installieren möchten.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem boolean Wert aufgelöst wird, der angibt, ob das Sprachpaket erfolgreich installiert wurde. Die Bedingungen, die zu jedem Rückgabewert führen, sind wie folgt:

- `true`
  - : Alle Installationsversuche für die angeforderten Sprachen waren erfolgreich oder die Sprachen waren bereits installiert.
- `false`
  - : Eine oder mehrere der angeforderten Sprachen werden nicht unterstützt, ein unterstütztes Sprachpaket konnte nicht installiert werden oder ein leeres Array wurde für die `langs` Eigenschaft übergeben.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das aktuelle Dokument ist nicht vollständig aktiv.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Eine oder mehrere der in `langs` angegebenen Zeichenfolgen ist kein gültiges BCP 47 Sprach-Tag.

## Beispiele

### Prüfung der lokalen Verfügbarkeit und Installation von Sprachpaketen

Damit die lokale Spracherkennung funktioniert, muss der Browser ein Sprachpaket für die Sprache installiert haben, die Sie erkennen möchten. Wenn Sie die `start()` Methode aufrufen, nachdem Sie `processLocally = true` angegeben haben, aber das richtige Sprachpaket nicht installiert ist, schlägt der Funktionsaufruf mit einem [`language-not-supported`](/de/docs/Web/API/SpeechRecognitionErrorEvent/error#language-not-supported) Fehler fehl.

Um das richtige Sprachpaket zu installieren, folgen Sie diesen zwei Schritten:

1. Überprüfen Sie, ob das Sprachpaket auf dem Computer des Benutzers verfügbar ist, indem Sie die [`SpeechRecognition.available()`](/de/docs/Web/API/SpeechRecognition/available_static) Methode verwenden.
2. Installieren Sie das Sprachpaket, wenn es nicht verfügbar ist, mit der `install()` Methode.

Diese Schritte werden im folgenden Code-Snippet behandelt:

```js
startBtn.addEventListener("click", () => {
  // check availability of target language
  SpeechRecognition.available({ langs: ["en-US"], processLocally: true }).then(
    (result) => {
      if (result === "unavailable") {
        diagnostic.textContent = `en-US not available to download at this time. Sorry!`;
      } else if (result === "available") {
        recognition.start();
        console.log("Ready to receive a color command.");
      } else {
        diagnostic.textContent = `en-US language pack downloading`;
        SpeechRecognition.install({
          langs: ["en-US"],
          processLocally: true,
        }).then((result) => {
          if (result) {
            diagnostic.textContent = `en-US language pack downloaded. Try again.`;
          } else {
            diagnostic.textContent = `en-US language pack failed to download. Try again later.`;
          }
        });
      }
    },
  );
});
```

Zuerst führen wir die `available()` Methode aus, die für eine Sprache (`langs: ["en-US"]`) die Verfügbarkeit prüft und `processLocally: true` angibt. Wir testen drei verschiedene Möglichkeiten des Rückgabewerts:

- Ist der zurückgegebene Wert `unavailable`, bedeutet das, dass kein geeignetes Sprachpaket zum Herunterladen verfügbar ist. Wir geben auch eine entsprechende Nachricht aus.
- Ist der zurückgegebene Wert `available`, bedeutet das, dass das Sprachpaket lokal verfügbar ist, sodass die Erkennung beginnen kann. In diesem Fall führen wir `start()` aus und protokollieren eine Nachricht in die Konsole, wenn die App bereit ist, Sprache zu empfangen.
- Ist der Wert etwas anderes (`downloadable` oder `downloading`), geben wir eine Diagnosemeldung aus, um den Benutzer zu informieren, dass ein Sprachpaket-Download startet, und führen dann die `install()` Methode aus, um den Download zu bearbeiten.

Die `install()` Methode funktioniert ähnlich wie die `available()` Methode, außer dass ihr Optionsobjekt nur das `langs` Array enthält. Beim Ausführen startet sie den Download des `en-US` Sprachpakets und gibt ein {{jsxref("Promise")}} zurück, das mit einem boolean aufgelöst wird, der angibt, ob die angegebenen Sprachpakete erfolgreich heruntergeladen und installiert wurden (`true`) oder nicht (`false`).

Dieser Code stammt aus unserem [Farbumschalter für lokale Spracherkennung](https://github.com/mdn/dom-examples/tree/main/web-speech-api/on-device-speech-color-changer) ([führen Sie die Demo live aus](https://mdn.github.io/dom-examples/web-speech-api/on-device-speech-color-changer/)). Siehe [Verwendung der Web Speech API](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API) für eine vollständige Erklärung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
- [Verwendung der Web Speech API](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)
- [`SpeechRecognition.processLocally`](/de/docs/Web/API/SpeechRecognition/processLocally)
- [`SpeechRecognition.available()`](/de/docs/Web/API/SpeechRecognition/available_static)
