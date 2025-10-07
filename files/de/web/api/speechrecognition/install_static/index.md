---
title: "SpeechRecognition: install() statische Methode"
short-title: install()
slug: Web/API/SpeechRecognition/install_static
l10n:
  sourceCommit: 3cbd2b2b2eb0be9425949c20ca5d398645f7c0e9
---

{{APIRef("Web Speech API")}}

Die **`install()`** statische Methode der [Web Speech API](/de/docs/Web/API/Web_Speech_API) installiert die erforderlichen Sprachpakete für die [geräteseitige Spracherkennung](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition) in den angegebenen Sprachen.

Um zu überprüfen, ob die Sprachpakete bereits verfügbar sind, verwenden Sie die [`SpeechRecognition.available()`](/de/docs/Web/API/SpeechRecognition/available_static) Methode.

Der Zugriff auf die `install()` Methode wird durch die {{httpheader("Permissions-Policy/on-device-speech-recognition", "on-device-speech-recognition")}} {{httpheader("Permissions-Policy")}} Direktive kontrolliert. Insbesondere dort, wo eine definierte Richtlinie die Nutzung blockiert, wird jeder Versuch, die Methode aufzurufen, fehlschlagen.

## Syntax

```js-nolint
install(options)
```

### Parameter

- `options`
  - : Ein Objekt, das Optionen für die Installation angibt. Mögliche Eigenschaften sind:
    - `langs`
      - : Ein Array von einem oder mehreren Zeichenfolgen, die {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tags")}} enthalten, von denen jedes eine Sprache repräsentiert, für die Sie das Sprachpaket installieren möchten.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), der mit einem booleschen Wert aufgelöst wird, der angibt, ob das Sprachpaket erfolgreich installiert wurde. Die Bedingungen, die zu jedem Rückgabewert führen, sind wie folgt:

- `true`
  - : Alle Installationsversuche für die angeforderten Sprachen waren erfolgreich oder die Sprachen waren bereits installiert.
- `false`
  - : Eine oder mehrere der angeforderten Sprachen werden nicht unterstützt, ein unterstütztes Sprachpaket konnte nicht installiert werden oder ein leeres Array wurde für die `langs` Eigenschaft übergeben.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das aktuelle Dokument ist nicht vollständig aktiv.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Eine oder mehrere der in `langs` angegebenen Zeichenfolgen sind keine gültigen BCP 47 Sprach-Tags.

## Beispiele

### Überprüfung der geräteseitigen Verfügbarkeit und Installation von Sprachpaketen

Damit die geräteseitige Spracherkennung funktioniert, muss der Browser ein Sprachpaket für die Sprache installiert haben, die Sie erkennen möchten. Wenn Sie die `start()` Methode ausführen, nachdem Sie `processLocally = true` angegeben haben, aber das richtige Sprachpaket nicht installiert ist, schlägt der Funktionsaufruf mit einem [`language-not-supported`](/de/docs/Web/API/SpeechRecognitionErrorEvent/error#language-not-supported) Fehler fehl.

Um das richtige Sprachpaket zu installieren, befolgen Sie diese zwei Schritte:

1. Überprüfen Sie, ob das Sprachpaket auf dem Computer des Nutzers verfügbar ist, mit der [`SpeechRecognition.available()`](/de/docs/Web/API/SpeechRecognition/available_static) Methode.
2. Installieren Sie das Sprachpaket, wenn es nicht verfügbar ist, mit der `install()` Methode.

Diese Schritte werden mit dem folgenden Code-Snippet durchgeführt:

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

Zuerst führen wir die `available()` Methode aus und geben eine Sprache an (`langs: ["en-US"]`), für die die Verfügbarkeit überprüft werden soll, und `processLocally: true`. Wir testen drei verschiedene Möglichkeiten des Rückgabewertes:

- Wenn der resultierende Wert `unavailable` ist, bedeutet dies, dass kein geeignetes Sprachpaket zum Herunterladen verfügbar ist. Wir geben auch eine entsprechende Nachricht an die Ausgabe aus.
- Wenn der resultierende Wert `available` ist, bedeutet dies, dass das Sprachpaket lokal verfügbar ist, sodass die Erkennung beginnen kann. In diesem Fall führen wir `start()` aus und loggen eine Nachricht in die Konsole, wenn die App bereit ist, Sprache zu empfangen.
- Wenn der Wert etwas anderes ist (`downloadable` oder `downloading`), geben wir eine Diagnose-Nachricht aus, um den Nutzer darüber zu informieren, dass ein Download des Sprachpakets beginnt, und führen dann die `install()` Methode aus, um den Download zu verarbeiten.

Die `install()` Methode funktioniert ähnlich wie die `available()` Methode, außer dass ihr Optionsobjekt nur das `langs` Array akzeptiert. Wenn sie ausgeführt wird, startet sie den Download des `en-US` Sprachpakets und gibt ein {{jsxref("Promise")}} zurück, das mit einem booleschen Wert aufgelöst wird, der angibt, ob die angegebenen Sprachpakete erfolgreich heruntergeladen und installiert wurden (`true`) oder nicht (`false`).

Dieser Code ist aus unserem [geräteseitigen Sprachfarbwechsler](https://github.com/mdn/dom-examples/tree/main/web-speech-api/on-device-speech-color-changer) ([führen Sie die Demo live aus](https://mdn.github.io/dom-examples/web-speech-api/on-device-speech-color-changer/)). Siehe [Verwendung der Web Speech API](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API) für eine vollständige Erklärung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
- [Verwendung der Web Speech API](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)
- [`SpeechRecognition.processLocally`](/de/docs/Web/API/SpeechRecognition/processLocally)
- [`SpeechRecognition.available()`](/de/docs/Web/API/SpeechRecognition/available_static)
