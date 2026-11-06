---
title: "SpeechRecognition: statische Methode install()"
short-title: install()
slug: Web/API/SpeechRecognition/install_static
l10n:
  sourceCommit: 076ee5b53d5e933e7fc2fd5eff68304f9691148e
---

{{APIRef("Web Speech API")}}

Die statische Methode **`install()`** der [Web Speech API](/de/docs/Web/API/Web_Speech_API) installiert die erforderlichen Sprachpakete für die [Spracherkennung auf dem Gerät](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition) in den angegebenen Sprachen und mit der angegebenen Qualitätsstufe.

Um zu prüfen, ob die Sprachpakete bereits verfügbar sind, verwenden Sie die Methode [`SpeechRecognition.available()`](/de/docs/Web/API/SpeechRecognition/available_static).

Der Zugriff auf die Methode `install()` wird durch die {{httpheader("Permissions-Policy/on-device-speech-recognition", "on-device-speech-recognition")}}-Direktive der {{httpheader("Permissions-Policy")}} gesteuert. Wenn eine festgelegte Richtlinie die Verwendung blockiert, schlagen alle Aufrufe der Methode fehl.

## Syntax

```js-nolint
install(options)
```

### Parameter

- `options`
  - : Ein Objekt, das Optionen für die Installation angibt. Mögliche Eigenschaften sind:
    - `langs`
      - : Ein Array aus einer oder mehreren Zeichenfolgen mit {{Glossary("BCP_47_language_tag", "BCP-47-Sprachtags")}}. Jeder Tag steht für eine Sprache, für die Sie das Sprachpaket installieren möchten.
    - `quality` {{optional_inline}}
      - : Ein Aufzählungswert, der den ungefähren Anwendungsfall Ihrer Spracherkennungsanwendung und damit den erforderlichen Komplexitätsgrad des Sprachpakets und des Spracherkennungsdienstes angibt. Mögliche Werte sind:
        - `command`
          - : Stufe 1: Kurze, einzeln gesprochene Äußerungen mit begrenztem Wortschatz und einer sprechenden Person. Zu den Anwendungsfällen gehören Sprachbefehle für Anwendungen. Dies ist der Standardwert.
        - `dictation`
          - : Stufe 2: Fortlaufende Sprache mit mäßigen Hintergrundgeräuschen und einer hauptsächlich sprechenden Person. Zu den Anwendungsfällen gehört das Diktieren längerer Texteingaben, etwa von SMS-Nachrichten, E-Mail-Texten oder zu übersetzenden Zeichenfolgen.
        - `conversation`
          - : Stufe 3: Fortlaufende Sprache mit komplexem Wortschatz, hoher Toleranz gegenüber Hintergrundgeräuschen und mehreren hauptsächlich sprechenden Personen. Zu den Anwendungsfällen gehören das Transkribieren von Besprechungen und die fortlaufende Live-Untertitelung.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem booleschen Wert erfüllt wird, der angibt, ob das Sprachpaket erfolgreich installiert wurde. Die Bedingungen für die jeweiligen Rückgabewerte sind:

- `true`
  - : Alle Installationsversuche für die angeforderten Sprachen waren erfolgreich, oder die Sprachen waren bereits installiert.
- `false`
  - : Eine oder mehrere der angeforderten Sprachen werden nicht unterstützt, die Installation eines unterstützten Sprachpakets ist fehlgeschlagen oder für die Eigenschaft `langs` wurde ein leeres Array übergeben.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das aktuelle Dokument ist nicht vollständig aktiv.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Eine oder mehrere der in `langs` angegebenen Zeichenfolgen sind keine gültigen BCP-47-Sprachtags.

## Beispiele

### Verfügbarkeit auf dem Gerät prüfen und Sprachpakete installieren

Damit die Spracherkennung auf dem Gerät funktioniert, muss im Browser ein Sprachpaket für die Sprache installiert sein, die Sie erkennen möchten. Wenn Sie die Methode `start()` aufrufen, nachdem Sie `processLocally = true` festgelegt haben, aber das richtige Sprachpaket nicht installiert ist, schlägt der Aufruf mit einem [`language-not-supported`](/de/docs/Web/API/SpeechRecognitionErrorEvent/error#language-not-supported)-Fehler fehl.

Um das richtige Sprachpaket zu installieren, führen Sie diese beiden Schritte aus:

1. Prüfen Sie mit der Methode [`SpeechRecognition.available()`](/de/docs/Web/API/SpeechRecognition/available_static), ob das Sprachpaket auf dem Computer der nutzenden Person verfügbar ist.
2. Installieren Sie das Sprachpaket mit der Methode `install()`, falls es nicht verfügbar ist.

Das folgende Codebeispiel führt diese Schritte aus:

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

Zuerst führen wir die Methode `available()` aus und geben mit `langs: ["en-US"]` eine Sprache an, deren Verfügbarkeit geprüft werden soll, sowie `processLocally: true`. Wir prüfen drei mögliche Rückgabewerte:

- Ist der Rückgabewert `unavailable`, steht kein geeignetes Sprachpaket zum Herunterladen bereit. Wir geben außerdem eine entsprechende Meldung aus.
- Ist der Rückgabewert `available`, ist das Sprachpaket lokal verfügbar und die Erkennung kann beginnen. In diesem Fall rufen wir `start()` auf und geben eine Meldung in der Konsole aus, sobald die Anwendung Sprache empfangen kann.
- Ist der Rückgabewert ein anderer Wert (`downloadable` oder `downloading`), geben wir eine Diagnosemeldung aus, die über den Beginn des Downloads eines Sprachpakets informiert. Anschließend rufen wir die Methode `install()` auf, um den Download durchzuführen.

Die Methode `install()` funktioniert ähnlich wie die Methode `available()`, allerdings enthält ihr Optionsobjekt nur das Array `langs`. Bei ihrem Aufruf beginnt der Download des Sprachpakets für `en-US`. Sie gibt ein {{jsxref("Promise")}} zurück, das mit einem booleschen Wert erfüllt wird: `true`, wenn die angegebenen Sprachpakete erfolgreich heruntergeladen und installiert wurden, andernfalls `false`.

Dieser Code ist ein Auszug aus unserem [Farbwechsler mit Spracherkennung auf dem Gerät](https://github.com/mdn/dom-examples/tree/main/web-speech-api/on-device-speech-color-changer) ([Demo live ausprobieren](https://mdn.github.io/dom-examples/web-speech-api/on-device-speech-color-changer/)). Eine vollständige Erklärung finden Sie unter [Die Web Speech API verwenden](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API).

### Fähigkeiten des Modells auf dem Gerät prüfen

Das folgende Codebeispiel ist eine Abwandlung des vorherigen Beispiels. Darin rufen wir die Methode [`available()`](/de/docs/Web/API/SpeechRecognition/available) mit der Option `quality` auf, die auf `dictation` gesetzt ist. So prüfen wir, ob die Spracherkennung auf dem Gerät diese Qualitätsstufe unterstützt. Ist der zurückgegebene Wert `unavailable`, setzen wir die Eigenschaft [`processLocally`](/de/docs/Web/API/SpeechRecognition/processLocally) des `SpeechRecognition`-Objekts auf `false` (sofern sie zuvor auf `true` gesetzt war), um die API zur Nutzung eines cloudbasierten Erkennungsdienstes zu veranlassen. Anschließend starten wir den Erkennungsdienst mit `start()`.

Ist der Rückgabewert `available`, können wir direkt [`start()`](/de/docs/Web/API/SpeechRecognition/start) aufrufen, um die Spracherkennung auf dem Gerät zu starten. Bei jedem anderen Rückgabewert rufen wir die Methode `install()` mit der auf `dictation` gesetzten Option `quality` auf, um die erforderlichen Sprachpakete zu installieren.

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
- [Die Web Speech API verwenden](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)
- [`SpeechRecognition.processLocally`](/de/docs/Web/API/SpeechRecognition/processLocally)
- [`SpeechRecognition.available()`](/de/docs/Web/API/SpeechRecognition/available_static)
