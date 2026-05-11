---
title: "SpeechRecognition: Statische Methode available()"
short-title: available()
slug: Web/API/SpeechRecognition/available_static
l10n:
  sourceCommit: d85bb94bd88736df60c9847ea5c815f6166f3bf5
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

Die **`available()`** statische Methode der [Web Speech API](/de/docs/Web/API/Web_Speech_API) überprüft, ob die angegebenen Sprachen für die Spracherkennung verfügbar sind.

Um ein Sprachpaket für die lokale Spracherkennung zu installieren, verwenden Sie die Methode [`SpeechRecognition.install()`](/de/docs/Web/API/SpeechRecognition/install_static).

Der Zugriff auf die `available()`-Methode wird durch die {{httpheader("Permissions-Policy/on-device-speech-recognition", "on-device-speech-recognition")}} {{httpheader("Permissions-Policy")}} kontrolliert. Insbesondere dort, wo eine definierte Richtlinie die Nutzung blockiert, werden alle Versuche, die Methode aufzurufen, fehlschlagen.

## Syntax

```js-nolint
available(options)
```

### Parameter

- `options`
  - : Ein Objekt, das Optionen für die Verfügbarkeitsprüfung angibt. Mögliche Eigenschaften umfassen:
    - `langs`
      - : Ein Array mit einem oder mehreren Strings, die {{Glossary("BCP_47_language_tag", "BCP 47-Sprachtags")}} enthalten, wobei jeder Eintrag eine zu prüfende Sprache repräsentiert. Das Übergeben eines leeren `langs`-Arrays wird keinen Fehler verursachen, aber der Rückgabewert wird immer auf `unavailable` aufgelöst.
    - `processLocally` {{optional_inline}}
      - : Ein Boolescher Wert, der angibt, ob nur die Verfügbarkeit der Sprachen für [lokale Spracherkennung](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition) (`true`) oder sowohl für die lokale _als auch_ die Remote-Spracherkennung (`false`) geprüft werden soll. Der Standardwert ist `false`.
        > [!NOTE]
        > Es ist nicht möglich, `available()` zu verwenden, um zu garantieren, dass ein Remote-Dienst die angegebenen Sprachen unterstützt. Ein Wert von `false` bedeutet, dass entweder ein lokaler _oder_ ein Remote-Spracherkennungsdienst sie unterstützt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich mit einem enumerierten Wert auflöst, der die Verfügbarkeit der angegebenen Sprachen für die Spracherkennung angibt.

Mögliche Werte umfassen:

- `available`
  - : Zeigt an, dass der Support für alle angegebenen Sprachen verfügbar ist.
    - Wenn `processLocally` auf `true` gesetzt ist, bedeutet `available`, dass die Spracherkennung für diese Sprachen auf dem Gerät verfügbar ist (die erforderlichen Sprachpakete wurden heruntergeladen und auf dem Computer des Benutzers installiert).
    - Wenn `processLocally` auf `false` gesetzt ist, bedeutet `available`, dass die Spracherkennung entweder auf dem Gerät oder remote für diese Sprachen verfügbar ist.
- `downloading`
  - : Zeigt an, dass der Support für die angegebenen Sprachen auf dem Gerät verfügbar ist und das relevante Sprachpaket für mindestens eine Sprache gerade heruntergeladen wird. Nur relevant, wenn `processLocally` `true` ist.
- `downloadable`
  - : Zeigt an, dass der Support für die angegebenen Sprachen auf dem Gerät verfügbar ist, aber das relevante Sprachpaket für mindestens eine Sprache noch nicht heruntergeladen wurde. Nur relevant, wenn `processLocally` `true` ist.
- `unavailable`
  - : Zeigt an, dass der Support für mindestens eine der angegebenen Sprachen nicht verfügbar ist.
    - Wenn `processLocally` auf `true` gesetzt ist, bedeutet `unavailable`, dass die lokale Spracherkennung für mindestens eine der angegebenen Sprachen nicht verfügbar ist.
    - Wenn `processLocally` auf `false` gesetzt ist, bedeutet `unavailable`, dass die Spracherkennung für mindestens eine der angegebenen Sprachen entweder lokal oder remote nicht verfügbar ist.

#### Endgültiger Rückgabewert für mehrere Sprachen mit unterschiedlichen Status

Es wird nur ein Statuswert zurückgegeben, auch wenn im `langs`-Array mehrere Sprachen angegeben sind. Wenn verschiedene angegebene Sprachen unterschiedliche Verfügbarkeitsstatus haben, ist der endgültige Rückgabewert der "am weitesten entfernte" Status von `available` für jede der Sprachen, in der Reihenfolge, die in den folgenden Listen gezeigt wird:

Wenn `processLocally` `false` ist:

- Wenn alle Sprachen `available` sind, dann geben Sie `available` zurück.
- Andernfalls geben Sie `unavailable` zurück.

Wenn `processLocally` `true` ist:

- Wenn alle Sprachen `available` sind, geben Sie `available` zurück.
- Wenn mindestens eine Sprache `downloading` ist, geben Sie `downloading` zurück.
- Wenn mindestens eine Sprache `downloadable` ist, geben Sie `downloadable` zurück.
- Wenn mindestens eine Sprache `unavailable` ist, geben Sie `unavailable` zurück.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das aktuelle Dokument ist nicht vollständig aktiv.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Einer oder mehrere der in `langs` angegebenen Strings sind kein gültiges BCP 47-Sprachtag.

## Beispiele

### Überprüfung der lokalen Verfügbarkeit und Installation von Sprachpaketen

Damit die lokale Spracherkennung funktioniert, muss im Browser ein Sprachpaket für die Sprache installiert sein, die Sie erkennen möchten. Wenn Sie die `start()`-Methode aufrufen, nachdem Sie `processLocally = true` angegeben haben, aber das richtige Sprachpaket nicht installiert ist, schlägt der Funktionsaufruf mit einem [`language-not-supported`](/de/docs/Web/API/SpeechRecognitionErrorEvent/error#language-not-supported) Fehler fehl.

Um das richtige Sprachpaket zu installieren, stellen Sie sicher, dass Sie folgende zwei Schritte befolgen:

1. Überprüfen Sie mit der `available()`-Methode, ob das Sprachpaket auf dem Computer des Benutzers verfügbar ist.
2. Installieren Sie das Sprachpaket, wenn es nicht verfügbar ist, mithilfe der Methode [`SpeechRecognition.install()`](/de/docs/Web/API/SpeechRecognition/install_static).

Diese Schritte werden mit dem folgenden Code-Snippet abgewickelt:

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

Wir führen zuerst die `available()`-Methode aus und geben eine Sprache an (`langs: ["en-US"]`), um die Verfügbarkeit zu prüfen, und `processLocally: true`. Wir testen drei Möglichkeiten des Rückgabewerts:

- Wenn der resultierende Wert `unavailable` ist, bedeutet dies, dass kein geeignetes Sprachpaket zum Herunterladen verfügbar ist. Wir geben auch eine entsprechende Nachricht aus.
- Wenn der resultierende Wert `available` ist, bedeutet dies, dass das Sprachpaket lokal verfügbar ist, sodass die Erkennung beginnen kann. In diesem Fall führen wir `start()` aus und geben eine Nachricht in die Konsole aus, wenn die App bereit ist, Sprache zu empfangen.
- Wenn der Wert etwas anderes ist (`downloadable` oder `downloading`), geben wir eine Diagnosemeldung aus, um den Benutzer darüber zu informieren, dass ein Sprachpaket-Download beginnt, und führen dann die Methode `install()` aus, um den Download zu bearbeiten.

Die `install()`-Methode funktioniert ähnlich wie die `available()`-Methode, außer dass ihr Optionsobjekt nur das `langs`-Array verwendet. Bei der Ausführung wird das `en-US`-Sprachpaket heruntergeladen und ein {{jsxref("Promise")}} zurückgegeben, das sich mit einem Booleschen Wert auflöst, der angibt, ob die angegebenen Sprachpakete erfolgreich heruntergeladen und installiert wurden (`true`) oder nicht (`false`).

Dieser Code ist ein Auszug aus unserem [on-device speech color changer](https://github.com/mdn/dom-examples/tree/main/web-speech-api/on-device-speech-color-changer) ([Demo live ausführen](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer/)). Siehe [Verwendung der Web Speech API](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API) für eine vollständige Erklärung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
- [Verwendung der Web Speech API](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)
- [`SpeechRecognition.processLocally`](/de/docs/Web/API/SpeechRecognition/processLocally)
- [`SpeechRecognition.install()`](/de/docs/Web/API/SpeechRecognition/install_static)
