---
title: "SpeechRecognition: Statische Methode available()"
short-title: available()
slug: Web/API/SpeechRecognition/available_static
l10n:
  sourceCommit: 076ee5b53d5e933e7fc2fd5eff68304f9691148e
---

{{APIRef("Web Speech API")}}

Die statische Methode **`available()`** der [Web Speech API](/de/docs/Web/API/Web_Speech_API) prüft, ob die angegebenen Sprachen für die Spracherkennung auf der gewünschten Qualitätsstufe verfügbar sind.

Um ein Sprachpaket für die Spracherkennung lokal zu installieren, verwenden Sie die Methode [`SpeechRecognition.install()`](/de/docs/Web/API/SpeechRecognition/install_static).

Der Zugriff auf die Methode `available()` wird durch die {{httpheader("Permissions-Policy/on-device-speech-recognition", "on-device-speech-recognition")}} {{httpheader("Permissions-Policy")}} gesteuert. Wenn eine festgelegte Richtlinie die Verwendung untersagt, schlagen Aufrufe der Methode fehl.

## Syntax

```js-nolint
available(options)
```

### Parameter

- `options`
  - : Ein Objekt mit Optionen für die Verfügbarkeitsprüfung. Mögliche Eigenschaften sind:
    - `langs`
      - : Ein Array aus einer oder mehreren Zeichenfolgen mit {{Glossary("BCP_47_language_tag", "BCP-47-Sprachtags")}}. Jede Zeichenfolge steht für eine Sprache, deren Verfügbarkeit geprüft werden soll. Ein leeres `langs`-Array verursacht keinen Fehler, der Rückgabewert wird jedoch immer zu `unavailable` aufgelöst.
    - `quality` {{optional_inline}}
      - : Ein Aufzählungswert, der den ungefähren Anwendungsfall Ihrer Spracherkennungs-App und damit die erforderliche Komplexität des Sprachpakets und des Spracherkennungsdienstes angibt. Mögliche Werte sind:
        - `command`
          - : Stufe 1: Kurze, isolierte Äußerungen mit begrenztem Wortschatz und einer sprechenden Person. Ein Anwendungsfall sind Sprachbefehle für Apps. Dies ist der Standardwert.
        - `dictation`
          - : Stufe 2: Fortlaufende Sprache bei mäßigen Hintergrundgeräuschen und einer hauptsächlich sprechenden Person. Anwendungsfälle sind das Diktieren längerer Texteingaben wie SMS-Nachrichten, E-Mail-Texten oder Zeichenfolgen zur Übersetzung.
        - `conversation`
          - : Stufe 3: Fortlaufende Sprache mit komplexem Wortschatz, hoher Toleranz gegenüber Hintergrundgeräuschen und mehreren hauptsächlich sprechenden Personen. Anwendungsfälle sind die Transkription von Besprechungen und die fortlaufende Live-Untertitelung.
    - `processLocally` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die Verfügbarkeit der Sprachen nur für die [Spracherkennung auf dem Gerät](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition) (`true`) oder für die Spracherkennung auf dem Gerät _oder_ über einen entfernten Dienst (`false`) geprüft werden soll. Der Standardwert ist `false`.
        > [!NOTE]
        > Mit `available()` lässt sich nicht garantieren, dass ein entfernter Dienst die angegebenen Sprachen unterstützt. Ein Wert von `false` bedeutet, dass entweder ein Spracherkennungsdienst auf dem Gerät _oder_ ein entfernter Spracherkennungsdienst sie unterstützt.

### Rückgabewert

Eine {{jsxref("Promise")}}, die mit einem Aufzählungswert aufgelöst wird, der die Verfügbarkeit der angegebenen Sprachen für die Spracherkennung angibt.

Mögliche Werte sind:

- `available`
  - : Gibt an, dass alle angegebenen Sprachen auf der gewählten `quality`-Stufe unterstützt werden.
    - Wenn `processLocally` auf `true` gesetzt ist, bedeutet `available`, dass die Spracherkennung für diese Sprachen auf dem Gerät verfügbar ist (die erforderlichen Sprachpakete wurden heruntergeladen und auf dem Computer der nutzenden Person installiert).
    - Wenn `processLocally` auf `false` gesetzt ist, bedeutet `available`, dass die Spracherkennung für diese Sprachen entweder auf dem Gerät oder über einen entfernten Dienst verfügbar ist.
- `downloading`
  - : Gibt an, dass alle angegebenen Sprachen auf der gewählten `quality`-Stufe für die Verarbeitung auf dem Gerät unterstützt werden und das entsprechende Sprachpaket für mindestens eine Sprache gerade heruntergeladen wird. Nur relevant, wenn `processLocally` auf `true` gesetzt ist.
- `downloadable`
  - : Gibt an, dass die angegebenen Sprachen auf der gewählten `quality`-Stufe auf dem Gerät unterstützt werden, das entsprechende Sprachpaket für mindestens eine Sprache jedoch noch nicht heruntergeladen wurde. Nur relevant, wenn `processLocally` auf `true` gesetzt ist.
- `unavailable`
  - : Gibt an, dass mindestens eine der angegebenen Sprachen auf der gewählten `quality`-Stufe nicht unterstützt wird.
    - Wenn `processLocally` auf `true` gesetzt ist, bedeutet `unavailable`, dass die Spracherkennung auf dem Gerät für mindestens eine der angegebenen Sprachen nicht verfügbar ist.
    - Wenn `processLocally` auf `false` gesetzt ist, bedeutet `unavailable`, dass die Spracherkennung für mindestens eine der angegebenen Sprachen weder auf dem Gerät noch über einen entfernten Dienst verfügbar ist.

#### Endgültiger Rückgabewert bei mehreren Sprachen mit unterschiedlichem Status

Auch wenn im `langs`-Array mehrere Sprachen angegeben sind, wird nur ein Statuswert zurückgegeben. Wenn die angegebenen Sprachen unterschiedliche Verfügbarkeitsstatus haben, ist der endgültige Rückgabewert der Status, der für eine der Sprachen am weitesten von `available` entfernt ist – entsprechend der Reihenfolge in den folgenden Listen:

Wenn `processLocally` auf `false` gesetzt ist:

- Wenn alle Sprachen `available` sind, wird `available` zurückgegeben.
- Andernfalls wird `unavailable` zurückgegeben.

Wenn `processLocally` auf `true` gesetzt ist:

- Wenn alle Sprachen `available` sind, wird `available` zurückgegeben.
- Wenn mindestens eine Sprache `downloading` ist, wird `downloading` zurückgegeben.
- Wenn mindestens eine Sprache `downloadable` ist, wird `downloadable` zurückgegeben.
- Wenn mindestens eine Sprache `unavailable` ist, wird `unavailable` zurückgegeben.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das aktuelle Dokument ist nicht vollständig aktiv.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Mindestens eine der in `langs` angegebenen Zeichenfolgen ist kein gültiger BCP-47-Sprachtag.

## Beispiele

### Verfügbarkeit auf dem Gerät prüfen und Sprachpakete installieren

Damit die Spracherkennung auf dem Gerät funktioniert, muss im Browser ein Sprachpaket für die Sprache installiert sein, die Sie erkennen möchten. Wenn Sie nach dem Festlegen von `processLocally = true` die Methode `start()` ausführen, ohne dass das passende Sprachpaket installiert ist, schlägt der Methodenaufruf mit einem [`language-not-supported`](/de/docs/Web/API/SpeechRecognitionErrorEvent/error#language-not-supported)-Fehler fehl.

Gehen Sie in zwei Schritten vor, um das passende Sprachpaket zu installieren:

1. Prüfen Sie mit der Methode `available()`, ob das Sprachpaket auf dem Computer der nutzenden Person verfügbar ist.
2. Installieren Sie das Sprachpaket mit der Methode [`SpeechRecognition.install()`](/de/docs/Web/API/SpeechRecognition/install_static), falls es nicht verfügbar ist.

Der folgende Codeausschnitt führt diese Schritte aus:

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

Zuerst führen wir die Methode `available()` aus und geben mit `langs: ["en-US"]` eine Sprache an, deren Verfügbarkeit geprüft werden soll. Außerdem setzen wir `processLocally: true`. Wir prüfen drei mögliche Rückgabewerte:

- Wenn der Rückgabewert `unavailable` ist, steht kein geeignetes Sprachpaket zum Herunterladen bereit. Außerdem geben wir eine entsprechende Meldung aus.
- Wenn der Rückgabewert `available` ist, ist das Sprachpaket lokal verfügbar und die Erkennung kann beginnen. In diesem Fall führen wir `start()` aus und protokollieren eine Meldung in der Konsole, sobald die App bereit ist, Spracheingaben zu empfangen.
- Wenn der Rückgabewert ein anderer ist (`downloadable` oder `downloading`), geben wir eine Statusmeldung aus, die über den Beginn des Downloads eines Sprachpakets informiert. Anschließend führen wir die Methode `install()` aus, um den Download abzuwickeln.

Die Methode `install()` startet den Download des Sprachpakets `en-US` und gibt eine {{jsxref("Promise")}} zurück. Diese wird mit einem booleschen Wert aufgelöst, der angibt, ob die angegebenen Sprachpakete erfolgreich heruntergeladen und installiert wurden (`true`) oder nicht (`false`).

Dieser Code ist ein Auszug aus unserem [Farbwechsler mit Spracherkennung auf dem Gerät](https://github.com/mdn/dom-examples/tree/main/web-speech-api/on-device-speech-color-changer) ([Live-Demo ausführen](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer/)). Eine ausführliche Erklärung finden Sie unter [Verwendung der Web Speech API](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API).

### Fähigkeiten des Modells auf dem Gerät prüfen

Der folgende Codeausschnitt ist eine Abwandlung des vorherigen Beispiels. Wir rufen die Methode `available()` mit der auf `dictation` gesetzten Option `quality` auf, um zu prüfen, ob die Spracherkennung auf dem Gerät diese Qualitätsstufe unterstützt. Wenn der Rückgabewert `unavailable` ist, setzen wir die Eigenschaft [`processLocally`](/de/docs/Web/API/SpeechRecognition/processLocally) des `SpeechRecognition`-Objekts auf `false` (unter der Annahme, dass sie zuvor auf `true` gesetzt war). Dadurch zwingen wir die API, einen cloudbasierten Spracherkennungsdienst zu verwenden. Anschließend starten wir den Erkennungsdienst mit `start()`.

Wenn der Rückgabewert `available` ist, können wir direkt [`start()`](/de/docs/Web/API/SpeechRecognition/start) aufrufen, um die Spracherkennung auf dem Gerät zu starten. Bei jedem anderen Rückgabewert führen wir die Methode [`install()`](/de/docs/Web/API/SpeechRecognition/install) mit der auf `dictation` gesetzten Option `quality` aus, um die erforderlichen Sprachpakete zu installieren.

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
- [Verwendung der Web Speech API](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)
- [`SpeechRecognition.processLocally`](/de/docs/Web/API/SpeechRecognition/processLocally)
- [`SpeechRecognition.install()`](/de/docs/Web/API/SpeechRecognition/install_static)
