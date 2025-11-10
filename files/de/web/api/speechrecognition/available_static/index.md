---
title: "SpeechRecognition: `available()` statische Methode"
short-title: available()
slug: Web/API/SpeechRecognition/available_static
l10n:
  sourceCommit: fe2f6d4bc116bb285b4d697c5da988bcf7a7dee8
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

Die **`available()`** statische Methode der [Web Speech API](/de/docs/Web/API/Web_Speech_API) prüft, ob die angegebenen Sprachen für die Spracherkennung verfügbar sind.

Um ein Sprachpaket für die Spracherkennung lokal zu installieren, verwenden Sie die [`SpeechRecognition.install()`](/de/docs/Web/API/SpeechRecognition/install_static) Methode.

Der Zugriff auf die `available()` Methode wird durch die {{httpheader("Permissions-Policy/on-device-speech-recognition", "on-device-speech-recognition")}} {{httpheader("Permissions-Policy")}} gesteuert. Speziell, wenn eine definierte Richtlinie die Nutzung blockiert, werden alle Versuche, die Methode aufzurufen, fehlschlagen.

## Syntax

```js-nolint
available(options)
```

### Parameter

- `options`
  - : Ein Objekt, das Optionen für die Verfügbarkeitsprüfung spezifiziert. Mögliche Eigenschaften umfassen:
    - `langs`
      - : Ein Array von einem oder mehreren Zeichenfolgen, die {{Glossary("BCP_47_language_tag", "BCP 47-Sprachtags")}} enthalten, von denen jede eine Sprache darstellt, die auf Verfügbarkeit geprüft werden soll. Das Übergeben eines leeren `langs` Arrays löst keinen Fehler aus, aber der Rückgabewert wird immer auf `unavailable` aufgelöst.
    - `processLocally` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die Verfügbarkeit der Sprachen nur für [on-device speech recognition](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition) (`true`) oder sowohl für on-device _als auch_ für remote Spracherkennung (`false`) geprüft werden soll. Der Standardwert ist `false`.
        > [!NOTE]
        > Es ist nicht möglich, `available()` zu verwenden, um zu garantieren, dass ein Remote-Dienst die angegebenen Sprachen unterstützt. Ein Wert von `false` bedeutet, dass entweder ein on-device _oder_ ein Remote-Spracherkennungsdienst diese unterstützt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem enumerierten Wert aufgelöst wird, der die Verfügbarkeit der angegebenen Sprachen für die Spracherkennung angibt.

Mögliche Werte umfassen:

- `available`
  - : Bedeutet, dass die Unterstützung für alle angegebenen Sprachen verfügbar ist.
    - Wenn `processLocally` auf `true` gesetzt ist, bedeutet `available`, dass die Spracherkennung für diese Sprachen on-device verfügbar ist (die erforderlichen Sprachpakete wurden auf dem Computer des Nutzers heruntergeladen und installiert).
    - Wenn `processLocally` auf `false` gesetzt ist, bedeutet `available`, dass die Spracherkennung für diese Sprachen entweder on-device oder remote verfügbar ist.
- `downloading`
  - : Bedeutet, dass die Unterstützung für die angegebenen Sprachen on-device verfügbar ist und das relevante Sprachpaket für mindestens eine Sprache gerade heruntergeladen wird. Nur relevant, wenn `processLocally` `true` ist.
- `downloadable`
  - : Bedeutet, dass die Unterstützung für die angegebenen Sprachen on-device verfügbar ist, aber das relevante Sprachpaket für mindestens eine Sprache noch nicht heruntergeladen wurde. Nur relevant, wenn `processLocally` `true` ist.
- `unavailable`
  - : Bedeutet, dass die Unterstützung für mindestens eine der angegebenen Sprachen nicht verfügbar ist.
    - Wenn `processLocally` auf `true` gesetzt ist, bedeutet `unavailable`, dass die on-device Spracherkennung für mindestens eine der angegebenen Sprachen nicht verfügbar ist.
    - Wenn `processLocally` auf `false` gesetzt ist, bedeutet `unavailable`, dass die Spracherkennung für mindestens eine der angegebenen Sprachen weder on-device noch remote verfügbar ist.

#### Endgültiger Rückgabewert für mehrere Sprachen mit unterschiedlichen Status

Es wird nur ein Statuswert zurückgegeben, auch wenn mehrere Sprachen im `langs` Array angegeben sind. Wenn verschiedene angegebene Sprachen unterschiedliche Verfügbarkeitsstatus haben, ist der endgültige Rückgabewert der Status, der am weitesten von `available` entfernt ist, für eine der Sprachen, in der Reihenfolge, die in den folgenden Listen gezeigt wird:

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
  - : Eine oder mehrere der in `langs` angegebenen Zeichenfolgen sind kein gültiges BCP 47-Sprachtag.

## Beispiele

### Überprüfung der Verfügbarkeit on-device und Installation von Sprachpaketen

Damit die on-device Spracherkennung funktioniert, muss der Browser ein Sprachpaket für die Sprache installiert haben, die Sie erkennen möchten. Wenn Sie die `start()` Methode ausführen, nachdem Sie `processLocally = true` angegeben haben, aber das richtige Sprachpaket nicht installiert ist, schlägt der Funktionsaufruf mit einem [`language-not-supported`](/de/docs/Web/API/SpeechRecognitionErrorEvent/error#language-not-supported) Fehler fehl.

Um das richtige Sprachpaket zu installieren, stellen Sie sicher, dass Sie diese zwei Schritte befolgen:

1. Überprüfen Sie, ob das Sprachpaket auf dem Computer des Nutzers verfügbar ist, indem Sie die `available()` Methode verwenden.
2. Installieren Sie das Sprachpaket, wenn es nicht verfügbar ist, indem Sie die [`SpeechRecognition.install()`](/de/docs/Web/API/SpeechRecognition/install_static) Methode verwenden.

Diese Schritte werden mit folgendem Codeausschnitt behandelt:

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

Wir führen zuerst die `available()` Methode aus und geben eine Sprache an (`langs: ["en-US"]`), um deren Verfügbarkeit zu prüfen, und `processLocally: true`. Wir testen auf drei verschiedene Möglichkeiten des Rückgabewertes:

- Wenn der resultierende Wert `unavailable` ist, bedeutet das, dass kein geeignetes Sprachpaket zum Download verfügbar ist. Wir geben auch eine entsprechende Nachricht zur Ausgabe aus.
- Wenn der resultierende Wert `available` ist, bedeutet das, dass das Sprachpaket lokal verfügbar ist, sodass die Erkennung beginnen kann. In diesem Fall führen wir `start()` aus und protokollieren eine Nachricht an die Konsole, wenn die App bereit ist, Sprache zu empfangen.
- Wenn der Wert etwas anderes ist (`downloadable` oder `downloading`), geben wir eine Diagnosemeldung aus, um den Nutzer zu informieren, dass ein Sprachpaket-Download startet, und führen dann die `install()` Methode aus, um den Download zu handhaben.

Die `install()` Methode funktioniert ähnlich wie die `available()` Methode, außer dass ihr Optionsobjekt nur das `langs` Array berücksichtigt. Beim Ausführen startet es den Download des `en-US` Sprachpakets und gibt ein {{jsxref("Promise")}} zurück, das mit einem booleschen Wert aufgelöst wird, der angibt, ob die angegebenen Sprachpakete erfolgreich heruntergeladen und installiert wurden (`true`) oder nicht (`false`).

Dieser Code stammt aus unserem [on-device speech color changer](https://github.com/mdn/dom-examples/tree/main/web-speech-api/on-device-speech-color-changer) ([dem Live-Demo ausführen](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer/)). Siehe [Using the Web Speech API](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API) für eine vollständige Erklärung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
- [Using the Web Speech API](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)
- [`SpeechRecognition.processLocally`](/de/docs/Web/API/SpeechRecognition/processLocally)
- [`SpeechRecognition.install()`](/de/docs/Web/API/SpeechRecognition/install_static)
