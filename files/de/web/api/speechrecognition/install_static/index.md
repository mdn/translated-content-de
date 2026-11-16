---
title: "SpeechRecognition: Statische Methode install()"
short-title: install()
slug: Web/API/SpeechRecognition/install_static
l10n:
  sourceCommit: 25871546e715779a39a2d962820a35e44b6a6df1
---

{{APIRef("Web Speech API")}}

Die statische Methode **`install()`** der Schnittstelle [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition) installiert die Sprachpakete, die für die [Spracherkennung auf dem Gerät](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition) in den angegebenen Sprachen und auf der angegebenen Qualitätsstufe benötigt werden.
Ein Sprachpaket enthält die Daten, die ein Browser benötigt, um Sprache in einer bestimmten Sprache zu erkennen.
Nach der Installation kann die Erkennung in dieser Sprache auf dem Gerät der nutzenden Person ausgeführt werden. Audiodaten müssen dann nicht an einen entfernten Dienst gesendet werden.

Mit der Methode [`SpeechRecognition.available()`](/de/docs/Web/API/SpeechRecognition/available_static) können Sie prüfen, ob die Sprachpakete bereits installiert sind. Setzen Sie dazu `processLocally` auf `true`.

Der Zugriff auf die Methode `install()` wird durch die {{httpheader("Permissions-Policy/on-device-speech-recognition", "on-device-speech-recognition")}}-Direktive von {{httpheader("Permissions-Policy")}} gesteuert.
Wenn eine Richtlinie den Zugriff blockiert, wird das von `install()` zurückgegebene Promise mit einer [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `NotAllowedError` zurückgewiesen.

## Syntax

```js-nolint
install(options)
```

### Parameter

- `options`
  - : Ein Objekt mit Optionen für die Installation. Mögliche Eigenschaften sind:
    - `langs`
      - : Ein Array aus mindestens einem String mit einem {{Glossary("BCP_47_language_tag", "BCP-47-Sprachtag")}}. Jeder String steht für eine Sprache, deren Sprachpaket Sie installieren möchten.
    - `quality` {{optional_inline}}
      - : Ein Aufzählungswert, der den ungefähren Anwendungsfall Ihrer Spracherkennungs-App angibt.
        `install()` installiert Sprachpakete, die mindestens diese Qualitätsstufe unterstützen.
        Mögliche Werte sind:
        - `command`
          - : Stufe 1: Kurze, einzeln gesprochene Äußerungen mit begrenztem Wortschatz und einer sprechenden Person. Ein Anwendungsfall sind Sprachbefehle für Apps. Dies ist der Standardwert.
        - `dictation`
          - : Stufe 2: Fortlaufende Sprache bei mäßigen Hintergrundgeräuschen und mit einer hauptsächlich sprechenden Person. Anwendungsfälle sind das Diktieren längerer Texteingaben wie SMS-Nachrichten, E-Mail-Texten oder zu übersetzenden Texten.
        - `conversation`
          - : Stufe 3: Fortlaufende Sprache mit komplexem Wortschatz, starken Hintergrundgeräuschen und mehreren hauptsächlich sprechenden Personen. Anwendungsfälle sind das Transkribieren von Besprechungen und die fortlaufende Live-Untertitelung.
    - `processLocally` {{optional_inline}}
      - : Ein boolescher Wert.
        `install()` installiert immer Sprachpakete für die [Spracherkennung auf dem Gerät](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition). Diese Option hat daher keine Wirkung.
        Sie können `install()` also dasselbe Optionsobjekt übergeben wie [`available()`](/de/docs/Web/API/SpeechRecognition/available_static).
        Browserspezifische Unterschiede finden Sie unter [Browser-Kompatibilität](#browser-kompatibilität).

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem booleschen Wert erfüllt wird. Dieser gibt an, ob die Sprachpakete erfolgreich installiert wurden.
Das Promise wird mit einem der folgenden Werte erfüllt:

- `true`
  - : Alle Installationsversuche für die angeforderten Sprachen waren erfolgreich, oder die Sprachen waren bereits installiert.
- `false`
  - : Eine oder mehrere der angeforderten Sprachen werden nicht unterstützt, die Installation des Sprachpakets für eine unterstützte Sprache ist fehlgeschlagen, der Browser hat den Download eines Sprachpakets abgelehnt (beispielsweise weil die nutzende Person eine Berechtigungsanfrage abgelehnt hat) oder das Array `langs` war leer.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das aktuelle Dokument ist nicht vollständig aktiv.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Einer der folgenden Fälle liegt vor:
    - Der Aufruf würde den Download eines Sprachpakets starten, aber die Seite verfügt nicht über eine {{Glossary("transient_activation", "vorübergehende Aktivierung")}}.
    - Die Verwendung von `install()` wird durch die {{httpheader("Permissions-Policy/on-device-speech-recognition", "on-device-speech-recognition")}}-Direktive von {{httpheader("Permissions-Policy")}} blockiert.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Mindestens einer der in `langs` angegebenen Strings ist kein gültiger BCP-47-Sprachtag.

## Beispiele

### Verfügbarkeit der Spracherkennung auf dem Gerät prüfen und Sprachpakete installieren

Damit die Spracherkennung auf dem Gerät funktioniert, muss im Browser ein Sprachpaket für die Sprache installiert sein, die Sie erkennen möchten.
Wenn Sie `start()` aufrufen, nachdem Sie `processLocally` auf `true` gesetzt haben, das passende Sprachpaket aber nicht installiert ist, schlägt die Erkennung fehl. Dabei wird ein [`error`](/de/docs/Web/API/SpeechRecognition/error_event)-Ereignis mit dem Fehlercode [`service-not-allowed`](/de/docs/Web/API/SpeechRecognitionErrorEvent/error#service-not-allowed) ausgelöst.

Gehen Sie in zwei Schritten vor, um das passende Sprachpaket zu installieren:

1. Prüfen Sie mit der Methode [`SpeechRecognition.available()`](/de/docs/Web/API/SpeechRecognition/available_static), ob das Sprachpaket auf dem Gerät der nutzenden Person installiert ist.
2. Wenn es nicht installiert ist, installieren Sie es mit der Methode `install()`.

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

Zuerst rufen wir die Methode `available()` auf. Dabei geben wir mit `langs: ["en-US"]` eine Sprache an, deren Verfügbarkeit geprüft werden soll, und setzen `processLocally: true`. Wir prüfen drei mögliche Rückgabewerte:

- Ist der Wert `unavailable`, steht kein geeignetes Sprachpaket zum Download bereit. Wir geben außerdem eine entsprechende Meldung aus.
- Ist der Wert `available`, ist das Sprachpaket lokal verfügbar und die Erkennung kann beginnen. In diesem Fall rufen wir `start()` auf und geben eine Meldung in der Konsole aus, sobald die App Sprache empfangen kann.
- Hat der Wert einen anderen Inhalt (`downloadable` oder `downloading`), geben wir eine Diagnosemeldung aus, um die nutzende Person darüber zu informieren, dass ein Sprachpaket heruntergeladen wird. Anschließend rufen wir die Methode `install()` auf, um den Download durchzuführen.

Danach rufen wir die Methode `install()` mit denselben Optionen auf.
Sie beginnt mit dem Download des Sprachpakets für `en-US` und gibt ein {{jsxref("Promise")}} zurück. Dieses wird mit `true` erfüllt, wenn die Sprachpakete erfolgreich heruntergeladen und installiert wurden, andernfalls mit `false`.

Dieser Code stammt aus unserem Beispiel zum [Ändern von Farben per Spracherkennung auf dem Gerät](https://github.com/mdn/dom-examples/tree/main/web-speech-api/on-device-speech-color-changer) ([Demo öffnen](https://mdn.github.io/dom-examples/web-speech-api/on-device-speech-color-changer/)). Eine ausführliche Erklärung finden Sie unter [Verwendung der Web Speech API](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API).

### Ein Sprachpaket für eine bestimmte Qualitätsstufe installieren

Der folgende Codeausschnitt verändert das vorherige Beispiel.
Er ruft [`available()`](/de/docs/Web/API/SpeechRecognition/available_static) mit der Option `quality` und dem Wert `dictation` auf, um zu prüfen, ob die Spracherkennung auf dem Gerät diese Qualitätsstufe unterstützt.
Ist das Ergebnis `unavailable`, setzen wir die Eigenschaft [`processLocally`](/de/docs/Web/API/SpeechRecognition/processLocally) des `SpeechRecognition`-Objekts auf `false` (unter der Annahme, dass sie zuvor `true` war) und rufen dann `start()` auf. Dadurch kann der Browser einen entfernten Erkennungsdienst verwenden, falls einer verfügbar ist.

Ist das Ergebnis `available`, rufen wir [`start()`](/de/docs/Web/API/SpeechRecognition/start) auf, um die Spracherkennung auf dem Gerät zu starten.
Bei jedem anderen Ergebnis rufen wir `install()` mit der Option `quality` und dem Wert `dictation` auf, um die benötigten Sprachpakete zu installieren.

```js
startBtn.addEventListener("click", () => {
  // Check availability of on-device target language dictation quality
  SpeechRecognition.available({
    langs: ["en-US"],
    processLocally: true,
    quality: "dictation",
  }).then((result) => {
    if (result === "unavailable") {
      diagnostic.textContent = `On-device recognition for dictation not available. Falling back to any available recognition service.`;
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

- [`SpeechRecognition.available()`](/de/docs/Web/API/SpeechRecognition/available_static)
- [`SpeechRecognition.processLocally`](/de/docs/Web/API/SpeechRecognition/processLocally)
- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
- [Verwendung der Web Speech API](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)
