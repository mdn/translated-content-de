---
title: "SpeechRecognition: `install()` statische Methode"
short-title: install()
slug: Web/API/SpeechRecognition/install_static
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{APIRef("Web Speech API")}}

Die **`install()`** statische Methode der [Web Speech API](/de/docs/Web/API/Web_Speech_API) installiert die erforderlichen Sprachpakete für die [geräteinterne Spracherkennung](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition) in den angegebenen Sprachen.

Um zu überprüfen, ob die Sprachpakete bereits verfügbar sind, verwenden Sie die [`SpeechRecognition.available()`](/de/docs/Web/API/SpeechRecognition/available_static) Methode.

Der Zugriff auf die `install()` Methode wird durch die {{httpheader("Permissions-Policy/on-device-speech-recognition", "on-device-speech-recognition")}} {{httpheader("Permissions-Policy")}} Direktive gesteuert. Insbesondere wenn eine definierte Richtlinie die Verwendung blockiert, schlagen alle Versuche, die Methode aufzurufen, fehl.

## Syntax

```js-nolint
install(options)
```

### Parameter

- `options`
  - : Ein Objekt, das Optionen für die Installation angibt. Mögliche Eigenschaften umfassen:
    - `langs`
      - : Ein Array von einem oder mehreren Strings, die {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tags")}} enthalten; jedes repräsentiert eine Sprache, für die Sie das Sprachpaket installieren möchten.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem boolean Wert aufgelöst wird, der angibt, ob das Sprachpaket erfolgreich installiert wurde. Die Bedingungen, die zu jedem Rückgabewert führen, sind wie folgt:

- `true`
  - : Alle Installationsversuche für die angeforderten Sprachen waren erfolgreich oder die Sprachen waren bereits installiert.
- `false`
  - : Eine oder mehrere der angeforderten Sprachen werden nicht unterstützt, ein unterstütztes Sprachpaket konnte nicht installiert werden oder ein leeres Array wurde für die `langs` Eigenschaft übergeben.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das aktuelle Dokument ist nicht vollständig aktiv.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Einer oder mehrere der in `langs` angegebenen Strings sind kein gültiges BCP 47 Sprach-Tag.

## Beispiele

### Überprüfen der geräteinternen Verfügbarkeit und Installation von Sprachpaketen

Damit die geräteinterne Spracherkennung funktioniert, muss der Browser ein Sprachpaket für die Sprache installiert haben, die Sie erkennen möchten. Wenn Sie die Methode `start()` ausführen, nachdem Sie `processLocally = true` angegeben haben, aber das richtige Sprachpaket nicht installiert ist, schlägt der Funktionsaufruf mit einem [`language-not-supported`](/de/docs/Web/API/SpeechRecognitionErrorEvent/error#language-not-supported) Fehler fehl.

Um das richtige Sprachpaket zu installieren, stellen Sie sicher, dass Sie die folgenden zwei Schritte befolgen:

1. Überprüfen Sie, ob das Sprachpaket auf dem Computer des Nutzers verfügbar ist, indem Sie die [`SpeechRecognition.available()`](/de/docs/Web/API/SpeechRecognition/available_static) Methode verwenden.
2. Installieren Sie das Sprachpaket, wenn es nicht verfügbar ist, indem Sie die `install()` Methode verwenden.

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

Zunächst führen wir die `available()` Methode aus und geben eine Sprache (`langs: ["en-US"]`) an, um die Verfügbarkeit zu überprüfen, sowie `processLocally: true`. Wir testen drei verschiedene Möglichkeiten des Rückgabewerts:

- Wenn der resultierende Wert `unavailable` ist, bedeutet das, dass kein geeignetes Sprachpaket zum Download verfügbar ist. Wir geben auch eine entsprechende Nachricht in die Ausgabe aus.
- Wenn der resultierende Wert `available` ist, bedeutet das, dass das Sprachpaket lokal verfügbar ist, sodass die Erkennung beginnen kann. In diesem Fall führen wir `start()` aus und protokollieren eine Nachricht in die Konsole, wenn die App bereit ist, Sprache zu empfangen.
- Wenn der Wert etwas anderes ist (`downloadable` oder `downloading`), geben wir eine Diagnosemeldung aus, um den Nutzer darüber zu informieren, dass ein Sprachpaket-Download beginnt, und führen dann die `install()` Methode aus, um den Download zu handhaben.

Die `install()` Methode arbeitet auf ähnliche Weise wie die `available()` Methode, außer dass ihr Optionsobjekt nur das `langs` Array übernimmt. Wenn sie ausgeführt wird, startet sie den Download des `en-US` Sprachpakets und gibt ein {{jsxref("Promise")}} zurück, das mit einem boolean aufgelöst wird, der angibt, ob die angegebenen Sprachpakete erfolgreich heruntergeladen und installiert wurden (`true`) oder nicht (`false`).

Dieser Code stammt aus unserem [On-Device Speech Color Changer](https://github.com/mdn/dom-examples/tree/main/web-speech-api/on-device-speech-color-changer) ([Demo live ausführen](https://mdn.github.io/dom-examples/web-speech-api/on-device-speech-color-changer/)). Siehe [Using the Web Speech API](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API) für eine vollständige Erklärung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
- [Using the Web Speech API](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)
- [`SpeechRecognition.processLocally`](/de/docs/Web/API/SpeechRecognition/processLocally)
- [`SpeechRecognition.available()`](/de/docs/Web/API/SpeechRecognition/available_static)
