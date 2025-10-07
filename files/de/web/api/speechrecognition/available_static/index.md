---
title: "SpeechRecognition: `available()`-Methode"
short-title: available()
slug: Web/API/SpeechRecognition/available_static
l10n:
  sourceCommit: 3cbd2b2b2eb0be9425949c20ca5d398645f7c0e9
---

{{APIRef("Web Speech API")}}

Die **`available()`**-Methode der [Web Speech API](/de-DE/docs/Web/API/Web_Speech_API) prüft, ob die angegebenen Sprachen für die Spracherkennung verfügbar sind.

Um ein Sprachpaket für die Spracherkennung lokal zu installieren, verwenden Sie die Methode [`SpeechRecognition.install()`](/de-DE/docs/Web/API/SpeechRecognition/install_static).

Der Zugriff auf die `available()`-Methode wird durch die {{httpheader("Permissions-Policy/on-device-speech-recognition", "on-device-speech-recognition")}} {{httpheader("Permissions-Policy")}} kontrolliert. Insbesondere wenn eine definierte Richtlinie die Nutzung blockiert, schlagen alle Versuche, die Methode aufzurufen, fehl.

## Syntax

```js-nolint
available(options)
```

### Parameter

- `options`
  - : Ein Objekt, das Optionen für die Verfügbarkeitsüberprüfung angibt. Mögliche Eigenschaften sind:
    - `langs`
      - : Ein Array von einem oder mehreren Strings, die {{Glossary("BCP_47_language_tag", "BCP 47-Sprachtags")}} enthalten, wobei jeder String eine Sprache repräsentiert, deren Verfügbarkeit überprüft werden soll. Ein leeres `langs`-Array zu übergeben führt nicht zu einem Fehler, aber der Rückgabewert wird immer `unavailable` sein.
    - `processLocally` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die Verfügbarkeit der Sprachen nur für [on-device speech recognition](/de-DE/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition) (`true`) oder sowohl für on-device als auch für remote Spracherkennung (`false`) überprüft werden soll. Der Standardwert ist `false`.
        > [!NOTE]
        > Es ist nicht möglich, `available()` zu verwenden, um zu garantieren, dass ein Remote-Dienst die angegebenen Sprachen unterstützt. Ein Wert von `false` bedeutet, dass entweder ein On-Device- oder ein Remote-Spracherkennungsdienst sie unterstützt.

### Rückgabewert

Ein [`Promise`](/de-DE/docs/Web/API/Promise), der mit einem enumerierten Wert aufgelöst wird, der die Verfügbarkeit der angegebenen Sprachen für die Spracherkennung angibt.

Mögliche Werte sind:

- `available`
  - : Gibt an, dass die Unterstützung für alle angegebenen Sprachen verfügbar ist.
    - Wenn `processLocally` auf `true` gesetzt ist, bedeutet `available`, dass die Spracherkennung für diese Sprachen auf dem Gerät verfügbar ist (die erforderlichen Sprachpakete wurden heruntergeladen und auf dem Computer des Benutzers installiert).
    - Wenn `processLocally` auf `false` gesetzt ist, bedeutet `available`, dass die Spracherkennung für diese Sprachen entweder auf dem Gerät oder remote verfügbar ist.
- `downloading`
  - : Gibt an, dass die Unterstützung für die angegebenen Sprachen auf dem Gerät verfügbar ist, und dass das relevante Sprachpaket für mindestens eine Sprache gerade heruntergeladen wird. Nur relevant, wenn `processLocally` `true` ist.
- `downloadable`
  - : Gibt an, dass die Unterstützung für die angegebenen Sprachen auf dem Gerät verfügbar ist, aber das relevante Sprachpaket für mindestens eine Sprache noch nicht heruntergeladen wurde. Nur relevant, wenn `processLocally` `true` ist.
- `unavailable`
  - : Gibt an, dass die Unterstützung für mindestens eine der angegebenen Sprachen nicht verfügbar ist.
    - Wenn `processLocally` auf `true` gesetzt ist, bedeutet `unavailable`, dass die On-Device-Spracherkennung für mindestens eine der angegebenen Sprachen nicht verfügbar ist.
    - Wenn `processLocally` auf `false` gesetzt ist, bedeutet `unavailable`, dass die Spracherkennung für mindestens eine der angegebenen Sprachen weder auf dem Gerät noch remote verfügbar ist.

#### Endgültiger Rückgabewert für mehrere Sprachen mit unterschiedlichen Status

Es wird nur ein Statuswert zurückgegeben, selbst wenn mehrere Sprachen im `langs`-Array angegeben sind. Wenn verschiedene Sprachen unterschiedliche Verfügbarkeitsstatus haben, ist der endgültige Rückgabewert der "am weitesten entfernte" Status von `available` für eine der Sprachen, in der Reihenfolge, die in den folgenden Listen angegeben ist:

Wenn `processLocally` `false` ist:

- Wenn alle Sprachen `available` sind, dann `available` zurückgeben.
- Andernfalls `unavailable` zurückgeben.

Wenn `processLocally` `true` ist:

- Wenn alle Sprachen `available` sind, `available` zurückgeben.
- Wenn mindestens eine Sprache `downloading` ist, `downloading` zurückgeben.
- Wenn mindestens eine Sprache `downloadable` ist, `downloadable` zurückgeben.
- Wenn mindestens eine Sprache `unavailable` ist, `unavailable` zurückgeben.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de-DE/docs/Web/API/DOMException)
  - : Das aktuelle Dokument ist nicht vollständig aktiv.
- `SyntaxError` [`DOMException`](/de-DE/docs/Web/API/DOMException)
  - : Einer oder mehrere der in `langs` angegebenen Strings ist kein gültiges BCP 47-Sprachtag.

## Beispiele

### Überprüfung der On-Device-Verfügbarkeit und Installation von Sprachpaketen

Damit die On-Device-Spracherkennung funktioniert, muss der Browser ein Sprachpaket für die Sprache installiert haben, die Sie erkennen möchten. Wenn Sie die `start()`-Methode ausführen, nachdem Sie `processLocally = true` angegeben haben, aber das richtige Sprachpaket nicht installiert ist, schlägt der Funktionsaufruf mit einem [`language-not-supported`](/de-DE/docs/Web/API/SpeechRecognitionErrorEvent/error#language-not-supported)-Fehler fehl.

Um sicherzustellen, dass das korrekte Sprachpaket installiert ist, befolgen Sie diese zwei Schritte:

1. Überprüfen Sie, ob das Sprachpaket auf dem Computer des Benutzers mit der `available()`-Methode verfügbar ist.
2. Installieren Sie das Sprachpaket, falls es nicht verfügbar ist, mit der Methode [`SpeechRecognition.install()`](/de-DE/docs/Web/API/SpeechRecognition/install_static).

Diese Schritte werden mit dem folgenden Code-Snippet behandelt:

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

Wir führen zuerst die `available()`-Methode aus und geben eine Sprache (`langs: ["en-US"]`) zur Prüfung der Verfügbarkeit an und `processLocally: true`. Wir testen auf drei verschiedene Möglichkeiten des Rückgabewertes:

- Wenn der resultierende Wert `unavailable` ist, bedeutet das, dass kein geeignetes Sprachpaket zum Herunterladen verfügbar ist. Wir geben auch eine entsprechende Meldung an die Ausgabe aus.
- Wenn der resultierende Wert `available` ist, bedeutet das, dass das Sprachpaket lokal verfügbar ist, sodass die Erkennung beginnen kann. In diesem Fall führen wir `start()` aus und loggen eine Meldung in die Konsole, wenn die App bereit ist, Sprache zu empfangen.
- Wenn der Wert etwas anderes ist (`downloadable` oder `downloading`), geben wir eine Diagnosemeldung aus, um den Benutzer darüber zu informieren, dass ein Sprachpaket-Download beginnt, und führen dann die `install()`-Methode aus, um den Download abzuwickeln.

Die `install()`-Methode funktioniert ähnlich wie die `available()`-Methode, außer dass ihr Optionsobjekt nur das `langs`-Array akzeptiert. Bei der Ausführung beginnt sie mit dem Download des `en-US` Sprachpakets und gibt ein {{jsxref("Promise")}} zurück, das mit einem booleschen Wert aufgelöst wird, der angibt, ob die angegebenen Sprachpakete erfolgreich heruntergeladen und installiert wurden (`true`) oder nicht (`false`).

Dieser Code ist aus unserem [on-device speech color changer](https://github.com/mdn/dom-examples/tree/main/web-speech-api/on-device-speech-color-changer) ([Demo live ausprobieren](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer/)). Sehen Sie [Using the Web Speech API](/de-DE/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API) für eine vollständige Erklärung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de-DE/docs/Web/API/Web_Speech_API)
- [Using the Web Speech API](/de-DE/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)
- [`SpeechRecognition.processLocally`](/de-DE/docs/Web/API/SpeechRecognition/processLocally)
- [`SpeechRecognition.install()`](/de-DE/docs/Web/API/SpeechRecognition/install_static)
