---
title: "SpeechRecognition: available() statische Methode"
short-title: available()
slug: Web/API/SpeechRecognition/available_static
l10n:
  sourceCommit: 6f9cf70a2fc871d273ddeeb73170c76b17f20b59
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

Die **`available()`** statische Methode der [Web Speech API](/de/docs/Web/API/Web_Speech_API) prüft, ob die angegebenen Sprachen für die Spracherkennung auf der vorgegebenen Qualitätsstufe verfügbar sind.

Um ein Sprachpaket für die Spracherkennung lokal zu installieren, verwenden Sie die Methode [`SpeechRecognition.install()`](/de/docs/Web/API/SpeechRecognition/install_static).

Der Zugriff auf die `available()`-Methode wird durch den {{httpheader("Permissions-Policy/on-device-speech-recognition", "on-device-speech-recognition")}} {{httpheader("Permissions-Policy")}} kontrolliert. Insbesondere wenn eine definierte Richtlinie die Nutzung blockiert, wird jeder Versuch, die Methode aufzurufen, fehlschlagen.

## Syntax

```js-nolint
available(options)
```

### Parameter

- `options`
  - : Ein Objekt, das Optionen für die Verfügbarkeitsprüfung angibt. Mögliche Eigenschaften sind:
    - `langs`
      - : Ein Array von einem oder mehreren Strings, die {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tags")}} enthalten, wobei jeder String eine zu prüfende Sprache repräsentiert. Das Übergeben eines leeren `langs`-Arrays führt nicht zu einem Fehler, aber der Rückgabewert wird immer auf `unavailable` (nicht verfügbar) gesetzt.
    - `quality` {{optional_inline}}
      - : Ein enumerierter Wert, der den ungefähren Anwendungsfall Ihrer Spracherkennungs-App angibt und somit die erforderliche Komplexität des Sprachpakets und des Spracherkennungsdienstes bestimmt. Mögliche Werte sind:
        - `command`
          - : Stufe 1: Kurze isolierte Sätze mit begrenztem Vokabular und einem einzelnen Sprecher. Anwendungsfälle umfassen Sprachbefehle für Apps. Dies ist der Standardwert.
        - `dictation`
          - : Stufe 2: Fortlaufende Sprache mit mäßigem Hintergrundgeräusch und einem primären Sprecher. Anwendungsfälle umfassen die Diktierung von längeren Texteingaben wie SMS-Nachrichten, E-Mail-Körper oder Strings zur Übersetzung.
        - `conversation`
          - : Stufe 3: Fortlaufende Sprache mit komplexem Vokabular, hoher Hintergrundgeräuschtoleranz und mehreren primären Sprechern. Anwendungsfälle umfassen das Transkribieren von Meetings und kontinuierliche Live-Untertitelung.
    - `processLocally` {{optional_inline}}
      - : Ein boolean, der angibt, ob die Verfügbarkeit der Sprachen nur für die [on-device Spracherkennung](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition) (`true`) oder sowohl für die on-device _als auch_ für die Remote-Spracherkennung (`false`) geprüft werden soll. Der Standardwert ist `false`.
        > [!NOTE]
        > Es ist nicht möglich, `available()` zu verwenden, um zu garantieren, dass ein Remote-Dienst die angegebenen Sprachen unterstützt. Ein Wert von `false` bedeutet, dass entweder ein on-device- oder ein Remote-Spracherkennungsdienst sie unterstützt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem enumerierten Wert aufgelöst wird, der die Verfügbarkeit der angegebenen Sprachen für die Spracherkennung anzeigt.

Mögliche Werte sind:

- `available`
  - : Zeigt an, dass alle angegebenen Sprachen auf der vorgegebenen `quality`-Stufe unterstützt werden.
    - Wenn `processLocally` auf `true` gesetzt ist, bedeutet `available`, dass die Spracherkennung für diese Sprachen on-device verfügbar ist (die erforderlichen Sprachpakete wurden heruntergeladen und auf dem Computer des Nutzers installiert).
    - Wenn `processLocally` auf `false` gesetzt ist, bedeutet `available`, dass die Spracherkennung für diese Sprachen entweder on-device oder remote verfügbar ist.
- `downloading`
  - : Zeigt an, dass alle angegebenen Sprachen auf der vorgegebenen `quality`-Stufe für die Verarbeitung on-device unterstützt werden und dass das relevante Sprachpaket für mindestens eine Sprache gerade heruntergeladen wird. Nur relevant, wenn `processLocally` `true` ist.
- `downloadable`
  - : Zeigt an, dass die Unterstützung der angegebenen Sprachen on-device auf der angegebenen `quality`-Stufe verfügbar ist, aber das relevante Sprachpaket für mindestens eine Sprache noch nicht heruntergeladen wurde. Nur relevant, wenn `processLocally` `true` ist.
- `unavailable`
  - : Zeigt an, dass mindestens eine der angegebenen Sprachen auf der vorgegebenen `quality`-Stufe nicht unterstützt wird.
    - Wenn `processLocally` auf `true` gesetzt ist, bedeutet `unavailable`, dass die Spracherkennung on-device für mindestens eine der angegebenen Sprachen nicht verfügbar ist.
    - Wenn `processLocally` auf `false` gesetzt ist, bedeutet `unavailable`, dass die Spracherkennung für mindestens eine der angegebenen Sprachen weder on-device noch remote verfügbar ist.

#### Endgültiger Rückgabewert für mehrere Sprachen mit unterschiedlichen Status

Es wird nur ein Statuswert zurückgegeben, auch wenn mehrere Sprachen im `langs`-Array angegeben sind. Wenn verschiedene angegebene Sprachen unterschiedliche Verfügbarkeitsstatus haben, ist der endgültige Rückgabewert der "am weitesten entfernte" Status von `available` für eine der Sprachen, in der Reihenfolge, die in den folgenden Listen gezeigt wird:

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
  - : Einer oder mehrere der in `langs` angegebenen Strings sind kein gültiger BCP 47 Sprach-Tag.

## Beispiele

### Verfügbarkeit von Sprachpaketen on-device prüfen und installieren

Damit die on-device Spracherkennung funktioniert, muss der Browser ein Sprachpaket für die Sprache installiert haben, die Sie erkennen möchten. Wenn Sie die Methode `start()` ausführen, nachdem `processLocally = true` angegeben wurde, das richtige Sprachpaket jedoch nicht installiert ist, schlägt der Funktionsaufruf mit einem [`language-not-supported`](/de/docs/Web/API/SpeechRecognitionErrorEvent/error#language-not-supported) Fehler fehl.

Um sicherzustellen, dass das richtige Sprachpaket installiert ist, befolgen Sie diese zwei Schritte:

1. Überprüfen Sie, ob das Sprachpaket auf dem Computer des Nutzers verfügbar ist, indem Sie die Methode `available()` verwenden.
2. Installieren Sie das Sprachpaket, falls es nicht verfügbar ist, mit der Methode [`SpeechRecognition.install()`](/de/docs/Web/API/SpeechRecognition/install_static).

Diese Schritte werden mithilfe des folgenden Codeausschnitts ausgeführt:

```js
startBtn.addEventListener("click", () => {
  // Check availability of target language
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

Wir führen zuerst die `available()`-Methode aus und geben eine Sprache an (`langs: ["en-US"]`), um die Verfügbarkeit zu prüfen, und `processLocally: true`. Wir testen drei verschiedene Möglichkeiten des Rückgabewertes:

- Wenn der resultierende Wert `unavailable` ist, bedeutet dies, dass kein geeignetes Sprachpaket zum Herunterladen verfügbar ist. Wir geben auch eine entsprechende Nachricht in der Ausgabe aus.
- Wenn der resultierende Wert `available` ist, bedeutet dies, dass das Sprachpaket lokal verfügbar ist, sodass die Erkennung beginnen kann. In diesem Fall führen wir `start()` aus und protokollieren eine Nachricht in der Konsole, wenn die App bereit ist, Sprache zu empfangen.
- Wenn der Wert etwas anderes ist (`downloadable` oder `downloading`), geben wir eine Diagnosenachricht aus, um den Benutzer darüber zu informieren, dass ein Sprachpaket-Download beginnt, und führen dann die `install()`-Methode aus, um den Download zu verarbeiten.

Die `install()`-Methode startet das Herunterladen des `en-US` Sprachpakets und gibt ein {{jsxref("Promise")}} zurück, das mit einem boolean aufgelöst wird, der angibt, ob die angegebenen Sprachpakete erfolgreich heruntergeladen und installiert wurden (`true`) oder nicht (`false`).

Dieser Code ist ein Auszug aus unserem [on-device speech color changer](https://github.com/mdn/dom-examples/tree/main/web-speech-api/on-device-speech-color-changer) ([führe die Demo live aus](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer/)). Siehe [Using the Web Speech API](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API) für eine vollständige Erklärung.

### Überprüfung der Fähigkeiten von on-device Modellen

Der folgende Codeausschnitt ist eine Modifikation des vorherigen Beispiels, bei dem wir die `available()`-Methode mit der `quality`-Option auf `dictation` aufrufen, um zu prüfen, ob on-device Erkennung dieses Qualitätsniveau unterstützt. Wenn das zurückgegebene Ergebnis `unavailable` ist, setzen wir die `SpeechRecognition`-Eigenschaft [`processLocally`](/de/docs/Web/API/SpeechRecognition/processLocally) auf `false` (vorausgesetzt, sie war vorher auf `true` gesetzt), um die API zu zwingen, einen Cloud-Erkennungsdienst zu verwenden und dann den Erkennungsdienst mit `start()` zu starten.

Wenn das Ergebnis `available` ist, können wir fortfahren und lediglich [`start()`](/de/docs/Web/API/SpeechRecognition/start) aufrufen, um die on-device Erkennung zu starten. Wenn das Ergebnis ein anderer Wert ist, führen wir die [`install()`](/de/docs/Web/API/SpeechRecognition/install) Methode mit der `quality`-Option auf `dictation` aus, um die erforderlichen Sprachpakete zu installieren.

```js
startBtn.addEventListener("click", () => {
  // Check availability of on-device target language dictation quality
  SpeechRecognition.available({
    langs: ["en-US"],
    processLocally: true,
    quality: "dictation",
  }).then((result) => {
    if (result === "unavailable") {
      diagnostic.textContent = `On-device recognition for dictation not available, running with cloud recognition`;
      recognition.processLocally = false;
      recognition.start();
    } else if (result === "available") {
      recognition.start();
      console.log("Ready to receive a color command.");
    } else {
      diagnostic.textContent = `en-US language pack downloading`;
      SpeechRecognition.install({
        langs: ["en-US"],
        processLocally: true,
        quality: "dictation",
      }).then((result) => {
        if (result) {
          diagnostic.textContent = `en-US language pack downloaded. Try again.`;
        } else {
          diagnostic.textContent = `en-US language pack failed to download. Try again later.`;
        }
      });
    }
  });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
- [Using the Web Speech API](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)
- [`SpeechRecognition.processLocally`](/de/docs/Web/API/SpeechRecognition/processLocally)
- [`SpeechRecognition.install()`](/de/docs/Web/API/SpeechRecognition/install_static)
