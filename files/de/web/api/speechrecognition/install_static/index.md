---
title: "SpeechRecognition: install() statische Methode"
short-title: install()
slug: Web/API/SpeechRecognition/install_static
l10n:
  sourceCommit: 6f9cf70a2fc871d273ddeeb73170c76b17f20b59
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

Die **`install()`** statische Methode der [Web Speech API](/de/docs/Web/API/Web_Speech_API) installiert die erforderlichen Sprachpakete für die [On-Device-Spracherkennung](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition) in den angegebenen Sprachen und der Qualitätsstufe.

Um zu überprüfen, ob die Sprachpakete bereits verfügbar sind, verwenden Sie die Methode [`SpeechRecognition.available()`](/de/docs/Web/API/SpeechRecognition/available_static).

Der Zugriff auf die `install()` Methode wird durch die {{httpheader("Permissions-Policy/on-device-speech-recognition", "on-device-speech-recognition")}} {{httpheader("Permissions-Policy")}} Direktive gesteuert. Insbesondere, wenn eine definierte Richtlinie die Verwendung blockiert, schlägt jeder Versuch, die Methode aufzurufen, fehl.

## Syntax

```js-nolint
install(options)
```

### Parameter

- `options`
  - : Ein Objekt, das Optionen für die Installation angibt. Mögliche Eigenschaften umfassen:
    - `langs`
      - : Ein Array von einem oder mehreren Strings, die {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tags")}} enthalten, wobei jeder String eine Sprache darstellt, für die Sie das Sprachpaket installieren möchten.
    - `quality` {{optional_inline}}
      - : Ein enumerierter Wert, der den ungefähren Anwendungsfall Ihrer Spracherkennungs-App angibt und daher die erforderliche Komplexität des Sprachpakets und des Spracherkennungsdienstes bestimmt. Mögliche Werte sind:
        - `command`
          - : Stufe 1: Kurze isolierte Sätze mit begrenztem Vokabular und einem einzigen Sprecher. Anwendungsfälle umfassen Sprachbefehle für Apps. Dies ist der Standardwert.
        - `dictation`
          - : Stufe 2: Fortlaufende Sprache mit moderatem Hintergrundgeräusch und einem einzigen Hauptsprecher. Anwendungsfälle umfassen das Diktieren von langformigen Texteingaben wie SMS-Nachrichten, E-Mail-Inhalten oder zu übersetzenden Zeichenfolgen.
        - `conversation`
          - : Stufe 3: Fortlaufende Sprache mit komplexem Vokabular, hoher Hintergrundgeräuschtoleranz und mehreren Hauptsprechern. Anwendungsfälle umfassen das Transkribieren von Besprechungen und kontinuierliche Live-Untertitelung.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem booleschen Wert auflöst, der angibt, ob das Sprachpaket erfolgreich installiert wurde. Die Bedingungen, die zu jedem Rückgabewert führen, sind wie folgt:

- `true`
  - : Alle Installationsversuche für die angeforderten Sprachen waren erfolgreich oder die Sprachen waren bereits installiert.
- `false`
  - : Eine oder mehrere der angeforderten Sprachen werden nicht unterstützt, ein unterstütztes Sprachpaket konnte nicht installiert werden oder ein leeres Array wurde für die Eigenschaft `langs` übergeben.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das aktuelle Dokument ist nicht vollständig aktiv.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Einer oder mehrere der in `langs` angegebenen Strings ist kein gültiger BCP 47 Sprach-Tag.

## Beispiele

### Verfügbarkeit auf dem Gerät prüfen und Sprachpakete installieren

Damit die On-Device-Spracherkennung funktioniert, muss der Browser ein Sprachpaket für die Sprache installiert haben, die Sie erkennen möchten. Wenn Sie die Methode `start()` ausführen, nachdem Sie `processLocally = true` angegeben haben, aber das richtige Sprachpaket nicht installiert ist, schlägt der Funktionsaufruf mit einem [`language-not-supported`](/de/docs/Web/API/SpeechRecognitionErrorEvent/error#language-not-supported) Fehler fehl.

Um das richtige Sprachpaket zu installieren, stellen Sie sicher, dass Sie diese zwei Schritte befolgen:

1. Überprüfen Sie, ob das Sprachpaket auf dem Computer des Benutzers verfügbar ist, indem Sie die Methode [`SpeechRecognition.available()`](/de/docs/Web/API/SpeechRecognition/available_static) verwenden.
2. Installieren Sie das Sprachpaket, wenn es nicht verfügbar ist, mit der Methode `install()`.

Diese Schritte werden mit dem folgenden Codeausschnitt behandelt:

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

Zuerst führen wir die Methode `available()` aus, wobei wir eine Sprache (`langs: ["en-US"]`) angeben, um die Verfügbarkeit zu prüfen, und `processLocally: true`. Wir testen drei verschiedene Möglichkeiten des Rückgabewerts:

- Wenn der resultierende Wert `unavailable` ist, bedeutet das, dass kein geeignetes Sprachpaket zum Herunterladen verfügbar ist. Wir geben auch eine entsprechende Nachricht an die Ausgabe aus.
- Wenn der resultierende Wert `available` ist, bedeutet das, dass das Sprachpaket lokal verfügbar ist, sodass die Erkennung beginnen kann. In diesem Fall führen wir `start()` aus und protokollieren eine Nachricht in die Konsole, wenn die App bereit ist, Sprache zu empfangen.
- Wenn der Wert etwas anderes ist (`downloadable` oder `downloading`), drucken wir eine Diagnosemeldung aus, um den Benutzer darüber zu informieren, dass ein Sprachpaket-Download gestartet wird, und führen dann die Methode `install()` aus, um den Download zu handhaben.

Die Methode `install()` funktioniert ähnlich wie die Methode `available()`, mit der Ausnahme, dass ihr Options-Objekt nur das `langs` Array übernimmt. Bei der Ausführung startet sie den Download des `en-US` Sprachpakets und gibt ein {{jsxref("Promise")}} zurück, das mit einem booleschen Wert auflöst, der angibt, ob die angegebenen Sprachpakete erfolgreich heruntergeladen und installiert wurden (`true`) oder nicht (`false`).

Dieser Code ist aus unserem [On-Device-Speech-Farbwechsler](https://github.com/mdn/dom-examples/tree/main/web-speech-api/on-device-speech-color-changer) ([Demo live ausführen](https://mdn.github.io/dom-examples/web-speech-api/on-device-speech-color-changer/)) entnommen. Sehen Sie [Using the Web Speech API](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API) für eine vollständige Erklärung.

### Überprüfen der Modellfähigkeiten auf dem Gerät

Der folgende Codeausschnitt ist eine Modifikation des vorherigen Beispiels, in dem wir die Methode [`available()`](/de/docs/Web/API/SpeechRecognition/available) mit der `quality` Option auf `dictation` setzen, um zu überprüfen, ob die On-Device-Erkennung diese Qualitätsstufe unterstützt. Wenn das zurückgegebene Ergebnis `unavailable` ist, setzen wir die [`processLocally`](/de/docs/Web/API/SpeechRecognition/processLocally) Eigenschaft des `SpeechRecognition` Objekts auf `false` (angenommen, sie war zuvor auf `true` gesetzt) um die API zu zwingen, einen Cloud-Erkennungsdienst zu verwenden, und beginnen dann den Erkennungsdienst mit `start()`.

Wenn das Ergebnis `available` ist, können wir fortfahren, also rufen wir einfach [`start()`](/de/docs/Web/API/SpeechRecognition/start) auf, um die On-Device-Erkennung zu starten. Wenn das Ergebnis ein anderer Wert ist, führen wir die Methode `install()` mit der `quality` Option auf `dictation` gesetzt aus, um die erforderlichen Sprachpakete zu installieren.

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
- [`SpeechRecognition.available()`](/de/docs/Web/API/SpeechRecognition/available_static)
