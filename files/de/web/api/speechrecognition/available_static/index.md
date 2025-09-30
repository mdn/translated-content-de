---
title: "SpeechRecognition: `available()` statische Methode"
short-title: available()
slug: Web/API/SpeechRecognition/available_static
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{APIRef("Web Speech API")}}

Die **`available()`** statische Methode der [Web Speech API](/de/docs/Web/API/Web_Speech_API) prüft, ob die angegebenen Sprachen für die Spracherkennung verfügbar sind.

Um ein Sprachpaket für die lokale Spracherkennung zu installieren, verwenden Sie die Methode [`SpeechRecognition.install()`](/de/docs/Web/API/SpeechRecognition/install_static).

Der Zugriff auf die `available()`-Methode wird durch die {{httpheader("Permissions-Policy/on-device-speech-recognition", "on-device-speech-recognition")}} {{httpheader("Permissions-Policy")}} gesteuert. Insbesondere, wenn eine definierte Richtlinie die Nutzung blockiert, schlägt jeder Versuch, die Methode aufzurufen, fehl.

## Syntax

```js-nolint
available(options)
```

### Parameter

- `options`
  - : Ein Objekt, das Optionen für die Verfügbarkeitsprüfung spezifiziert. Mögliche Eigenschaften sind:
    - `langs`
      - : Ein Array von einem oder mehreren Strings, die {{Glossary("BCP_47_language_tag", "BCP 47-Sprachtags")}} enthalten, jeweils eine Sprache darstellend, um die Verfügbarkeit zu prüfen. Wenn ein leeres `langs`-Array übergeben wird, wird kein Fehler ausgelöst, aber der Rückgabewert wird immer zu `unavailable` aufgelöst.
    - `processLocally` {{optional_inline}}
      - : Ein boolean, der angibt, ob die Verfügbarkeit der Sprachen nur für [on-device speech recognition](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition) (`true`) oder für on-device _oder_ remote speech recognition (`false`) überprüft werden soll. Der Standardwert ist `false`.

        > [!NOTE]
        > Es ist nicht möglich, `available()` zu verwenden, um zu garantieren, dass ein Remote-Dienst die angegebenen Sprachen unterstützt. Ein Wert von `false` bedeutet, dass entweder ein on-device _oder_ ein Remote-Spracherkennungsdienst diese unterstützt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem enumerierten Wert aufgelöst wird, der die Verfügbarkeit der angegebenen Sprachen für die Spracherkennung angibt.

Mögliche Werte sind:

- `available`
  - : Gibt an, dass die Unterstützung für alle angegebenen Sprachen verfügbar ist.
    - Wenn `processLocally` auf `true` gesetzt ist, bedeutet `available`, dass die Spracherkennung für diese Sprachen on-device verfügbar ist (die erforderlichen Sprachpakete wurden heruntergeladen und auf dem Computer des Benutzers installiert).
    - Wenn `processLocally` auf `false` gesetzt ist, bedeutet `available`, dass die Spracherkennung für diese Sprachen entweder on-device oder remote verfügbar ist.
- `downloading`
  - : Gibt an, dass die Unterstützung für die angegebenen Sprachen on-device verfügbar ist und das relevante Sprachpaket für mindestens eine Sprache gerade heruntergeladen wird. Nur relevant, wenn `processLocally` `true` ist.
- `downloadable`
  - : Gibt an, dass die Unterstützung für die angegebenen Sprachen on-device verfügbar ist, aber das relevante Sprachpaket für mindestens eine Sprache noch nicht heruntergeladen wurde. Nur relevant, wenn `processLocally` `true` ist.
- `unavailable`
  - : Gibt an, dass die Unterstützung für mindestens eine der angegebenen Sprachen nicht verfügbar ist.
    - Wenn `processLocally` auf `true` gesetzt ist, bedeutet `unavailable`, dass die on-device Spracherkennung für mindestens eine der angegebenen Sprachen nicht verfügbar ist.
    - Wenn `processLocally` auf `false` gesetzt ist, bedeutet `unavailable`, dass die Spracherkennung für mindestens eine der angegebenen Sprachen entweder on-device oder remote nicht verfügbar ist.

#### Endgültiger Rückgabewert für mehrere Sprachen mit unterschiedlichen Status

Es wird nur ein Statuswert zurückgegeben, selbst wenn mehrere Sprachen im `langs`-Array angegeben sind. Wenn verschiedene angegebene Sprachen unterschiedliche Verfügbarkeitsstatus haben, ist der endgültige Rückgabewert der am weitesten von `available` entfernte Status für eine der Sprachen, in der Reihenfolge, wie sie in den folgenden Listen gezeigt wird:

Wenn `processLocally` `false` ist:

- Wenn alle Sprachen `available` sind, dann `available` zurückgeben.
- Andernfalls `unavailable` zurückgeben.

Wenn `processLocally` `true` ist:

- Wenn alle Sprachen `available` sind, `available` zurückgeben.
- Wenn mindestens eine Sprache `downloading` ist, `downloading` zurückgeben.
- Wenn mindestens eine Sprache `downloadable` ist, `downloadable` zurückgeben.
- Wenn mindestens eine Sprache `unavailable` ist, `unavailable` zurückgeben.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das aktuelle Dokument ist nicht vollständig aktiv.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Einer oder mehrere der in `langs` angegebenen Strings sind kein gültiger BCP 47-Sprachtag.

## Beispiele

### Überprüfung der on-device Verfügbarkeit und Installation von Sprachpaketen

Damit die on-device Spracherkennung funktioniert, muss der Browser ein Sprachpaket für die Sprache installiert haben, die Sie erkennen möchten. Wenn Sie die `start()`-Methode ausführen, nachdem Sie `processLocally = true` angegeben haben, aber das richtige Sprachpaket nicht installiert ist, schlägt der Funktionsaufruf mit einem [`language-not-supported`](/de/docs/Web/API/SpeechRecognitionErrorEvent/error#language-not-supported) Fehler fehl.

Um das richtige Sprachpaket zu installieren, stellen Sie sicher, dass Sie diese beiden Schritte ausführen:

1. Überprüfen Sie, ob das Sprachpaket auf dem Computer des Benutzers verfügbar ist, indem Sie die `available()`-Methode verwenden.
2. Installieren Sie das Sprachpaket, wenn es nicht verfügbar ist, indem Sie die [`SpeechRecognition.install()`](/de/docs/Web/API/SpeechRecognition/install_static) Methode verwenden.

Diese Schritte werden im folgenden Codebeispiel behandelt:

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

Wir führen zuerst die `available()`-Methode aus, indem wir eine Sprache (`langs: ["en-US"]`) angeben, für die die Verfügbarkeit geprüft werden soll, und `processLocally: true`. Wir testen auf drei verschiedene Möglichkeiten des Rückgabewerts:

- Wenn der resultierende Wert `unavailable` ist, bedeutet dies, dass kein geeignetes Sprachpaket zum Herunterladen verfügbar ist. Wir drucken auch eine entsprechende Nachricht in die Ausgabe.
- Wenn der resultierende Wert `available` ist, bedeutet dies, dass das Sprachpaket lokal verfügbar ist, sodass die Erkennung beginnen kann. In diesem Fall führen wir `start()` aus und protokollieren eine Nachricht in die Konsole, wenn die App bereit ist, Sprache zu empfangen.
- Wenn der Wert etwas anderes ist (`downloadable` oder `downloading`), drucken wir eine Diagnosemeldung aus, um den Benutzer darüber zu informieren, dass ein Sprachpaket-Download startet, und führen dann die `install()`-Methode aus, um den Download zu verarbeiten.

Die `install()`-Methode funktioniert ähnlich wie die `available()`-Methode, mit dem Unterschied, dass das Optionsobjekt nur das `langs`-Array akzeptiert. Wenn ausgeführt, startet es den Download des `en-US` Sprachpakets und gibt ein {{jsxref("Promise")}} zurück, das zu einem boolean aufgelöst wird, der angibt, ob die angegebenen Sprachpakete erfolgreich heruntergeladen und installiert wurden (`true`) oder nicht (`false`).

Dieser Code stammt aus unserem [on-device speech color changer](https://github.com/mdn/dom-examples/tree/main/web-speech-api/on-device-speech-color-changer) ([Demo live ausführen](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer/)). Siehe [Using the Web Speech API](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API) für eine vollständige Erklärung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
- [Using the Web Speech API](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)
- [`SpeechRecognition.processLocally`](/de/docs/Web/API/SpeechRecognition/processLocally)
- [`SpeechRecognition.install()`](/de/docs/Web/API/SpeechRecognition/install_static)
