---
title: "SpeechRecognition: `install()` statische Methode"
short-title: install()
slug: Web/API/SpeechRecognition/install_static
l10n:
  sourceCommit: fe2f6d4bc116bb285b4d697c5da988bcf7a7dee8
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

Die **`install()`** statische Methode der [Web Speech API](/de/docs/Web/API/Web_Speech_API) installiert die erforderlichen Sprachpakete für die [sprachgesteuerte Erkennung auf dem Gerät](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition) in den angegebenen Sprachen.

Um zu prüfen, ob die Sprachpakete bereits verfügbar sind, verwenden Sie die Methode [`SpeechRecognition.available()`](/de/docs/Web/API/SpeechRecognition/available_static).

Der Zugriff auf die `install()` Methode wird durch die {{httpheader("Permissions-Policy/on-device-speech-recognition", "on-device-speech-recognition")}} {{httpheader("Permissions-Policy")}} Direktive gesteuert. Insbesondere, wenn eine definierte Richtlinie die Nutzung blockiert, schlagen alle Versuche, die Methode aufzurufen, fehl.

## Syntax

```js-nolint
install(options)
```

### Parameter

- `options`
  - : Ein Objekt, das Optionen für die Installation angibt. Mögliche Eigenschaften sind:
    - `langs`
      - : Ein Array mit einem oder mehreren Zeichenfolgen, die {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tags")}} enthalten, wobei jede Zeichenfolge eine Sprache darstellt, für die Sie das Sprachpaket installieren möchten.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem boolean-Wert auflöst, der angibt, ob das Sprachpaket erfolgreich installiert wurde. Die Bedingungen, die zu jedem Rückgabewert führen, sind wie folgt:

- `true`
  - : Alle Installationsversuche für die angeforderten Sprachen waren erfolgreich oder die Sprachen waren bereits installiert.
- `false`
  - : Eine oder mehrere der angeforderten Sprachen werden nicht unterstützt, ein unterstütztes Sprachpaket konnte nicht installiert werden oder ein leeres Array wurde für die `langs` Eigenschaft übergeben.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das aktuelle Dokument ist nicht vollständig aktiv.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Eine oder mehrere der in `langs` angegebenen Zeichenfolgen sind kein gültiges BCP 47 Sprach-Tag.

## Beispiele

### Überprüfung der Verfügbarkeit auf dem Gerät und Installation von Sprachpaketen

Damit die sprachgesteuerte Erkennung auf dem Gerät funktioniert, muss der Browser ein Sprachpaket für die zu erkennende Sprache installiert haben. Wenn Sie die `start()` Methode nach Festlegung von `processLocally = true` ausführen, aber das richtige Sprachpaket nicht installiert ist, schlägt der Funktionsaufruf mit einem Fehler [`language-not-supported`](/de/docs/Web/API/SpeechRecognitionErrorEvent/error#language-not-supported) fehl.

Um das richtige Sprachpaket zu installieren, befolgen Sie diese zwei Schritte:

1. Überprüfen Sie mit der Methode [`SpeechRecognition.available()`](/de/docs/Web/API/SpeechRecognition/available_static), ob das Sprachpaket auf dem Computer des Benutzers verfügbar ist.
2. Installieren Sie das Sprachpaket, wenn es nicht verfügbar ist, mit der `install()` Methode.

Diese Schritte werden mit folgendem Code-Snippet behandelt:

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

Zunächst führen wir die `available()` Methode aus, wobei wir eine Sprache (`langs: ["en-US"]`) angeben, um die Verfügbarkeit zu prüfen, und `processLocally: true`. Wir testen auf drei verschiedene Möglichkeiten des Rückgabewerts:

- Wenn der resultierende Wert `unavailable` ist, bedeutet dies, dass kein geeignetes Sprachpaket zum Herunterladen verfügbar ist. Wir drucken auch eine entsprechende Nachricht in die Ausgabe.
- Wenn der resultierende Wert `available` ist, bedeutet dies, dass das Sprachpaket lokal verfügbar ist, sodass die Erkennung beginnen kann. In diesem Fall führen wir `start()` aus und loggen eine Nachricht in die Konsole, wenn die App bereit ist, Sprache zu empfangen.
- Wenn der Wert etwas anderes ist (`downloadable` oder `downloading`), drucken wir eine Diagnosemeldung, um den Benutzer darüber zu informieren, dass der Download eines Sprachpakets gestartet wird, und führen dann die `install()` Methode aus, um den Download zu handhaben.

Die `install()` Methode funktioniert ähnlich wie die `available()` Methode, außer dass ihr Optionsobjekt nur das `langs` Array enthält. Bei Ausführung beginnt sie mit dem Herunterladen des `en-US` Sprachpakets und gibt ein {{jsxref("Promise")}} zurück, das mit einem boolean auflöst, der angibt, ob die angegebenen Sprachpakete erfolgreich heruntergeladen und installiert wurden (`true`) oder nicht (`false`).

Dieser Code stammt aus unserem [sprachgesteuerten Farbwechsler auf dem Gerät](https://github.com/mdn/dom-examples/tree/main/web-speech-api/on-device-speech-color-changer) ([Demo live ausführen](https://mdn.github.io/dom-examples/web-speech-api/on-device-speech-color-changer/)). Sehen Sie sich [Using the Web Speech API](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API) für eine vollständige Erklärung an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
- [Using the Web Speech API](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)
- [`SpeechRecognition.processLocally`](/de/docs/Web/API/SpeechRecognition/processLocally)
- [`SpeechRecognition.available()`](/de/docs/Web/API/SpeechRecognition/available_static)
