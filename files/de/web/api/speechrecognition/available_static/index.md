---
title: "SpeechRecognition: Statische Methode available()"
short-title: available()
slug: Web/API/SpeechRecognition/available_static
l10n:
  sourceCommit: 25871546e715779a39a2d962820a35e44b6a6df1
---

{{APIRef("Web Speech API")}}

Die statische Methode **`available()`** der Schnittstelle [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition) prüft, ob die angegebenen Sprachen für die Spracherkennung in der gewünschten Qualitätsstufe verfügbar sind.

Um die für die [Spracherkennung auf dem Gerät](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition) erforderlichen Sprachpakete zu installieren, verwenden Sie die Methode [`SpeechRecognition.install()`](/de/docs/Web/API/SpeechRecognition/install_static). Ein Sprachpaket enthält die Daten, die ein Browser benötigt, um Sprache in einer bestimmten Sprache zu erkennen.

Der Zugriff auf die Methode `available()` wird durch die {{httpheader("Permissions-Policy/on-device-speech-recognition", "on-device-speech-recognition")}}-Direktive der {{httpheader("Permissions-Policy")}} gesteuert. Wenn eine Richtlinie den Zugriff blockiert, wird das von `available()` zurückgegebene Promise mit `unavailable` erfüllt.

## Syntax

```js-nolint
available(options)
```

### Parameter

- `options`
  - : Ein Objekt mit Optionen für die Verfügbarkeitsprüfung. Mögliche Eigenschaften sind:
    - `langs`
      - : Ein Array aus einer oder mehreren Zeichenfolgen mit {{Glossary("BCP_47_language_tag", "BCP-47-Sprachtags")}}, die jeweils eine Sprache angeben, deren Verfügbarkeit geprüft werden soll.
        Wenn `langs` ein leeres Array ist, wird das Promise mit `unavailable` erfüllt.
        Browserspezifische Unterschiede finden Sie unter [Browser-Kompatibilität](#browser-kompatibilität).
    - `quality` {{optional_inline}}
      - : Ein Aufzählungswert, der den ungefähren Anwendungsfall Ihrer Spracherkennungs-App und damit die erforderliche Komplexität des Sprachpakets und des Spracherkennungsdienstes angibt. Mögliche Werte sind:
        - `command`
          - : Stufe 1: Kurze, isolierte Äußerungen mit begrenztem Wortschatz und einer einzelnen sprechenden Person. Zu den Anwendungsfällen gehören Sprachbefehle für Apps. Dies ist der Standardwert.
        - `dictation`
          - : Stufe 2: Fortlaufende Sprache bei mäßigen Hintergrundgeräuschen und mit einer einzelnen hauptsächlich sprechenden Person. Zu den Anwendungsfällen gehört das Diktieren längerer Texteingaben wie SMS-Nachrichten, E-Mail-Texten oder Zeichenfolgen für die Übersetzung.
        - `conversation`
          - : Stufe 3: Fortlaufende Sprache mit komplexem Wortschatz, starken Hintergrundgeräuschen und mehreren hauptsächlich sprechenden Personen. Zu den Anwendungsfällen gehören die Transkription von Besprechungen und die fortlaufende Live-Untertitelung.
    - `processLocally` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die Verfügbarkeit der Sprachen nur für die [Spracherkennung auf dem Gerät](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition) (`true`) oder für die Spracherkennung auf dem Gerät _oder_ über einen entfernten Dienst (`false`) geprüft werden soll. Der Standardwert ist `false`.
        > [!NOTE]
        > Mit `available()` lässt sich nicht sicherstellen, dass ein entfernter Dienst die angegebenen Sprachen unterstützt. Ein Wert von `false` bedeutet, dass entweder ein Spracherkennungsdienst auf dem Gerät _oder_ ein entfernter Dienst sie unterstützt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Aufzählungswert erfüllt wird, der die Verfügbarkeit der angegebenen Sprachen für die Spracherkennung angibt.

Mögliche Werte sind:

- `available`
  - : Gibt an, dass alle angegebenen Sprachen in der gewünschten `quality`-Stufe unterstützt werden.
    - Wenn `processLocally` auf `true` gesetzt ist, bedeutet `available`, dass die Spracherkennung für diese Sprachen auf dem Gerät verfügbar ist. Die erforderlichen Sprachpakete wurden heruntergeladen und auf dem Gerät der nutzenden Person installiert.
    - Wenn `processLocally` auf `false` gesetzt ist, bedeutet `available`, dass die Spracherkennung für diese Sprachen entweder auf dem Gerät oder über einen entfernten Dienst verfügbar ist.
- `downloading`
  - : Gibt an, dass alle angegebenen Sprachen in der gewünschten `quality`-Stufe für die Verarbeitung auf dem Gerät unterstützt werden und das entsprechende Sprachpaket für mindestens eine Sprache gerade heruntergeladen wird. Nur relevant, wenn `processLocally` den Wert `true` hat.
- `downloadable`
  - : Gibt an, dass die angegebenen Sprachen in der gewünschten `quality`-Stufe auf dem Gerät unterstützt werden, das entsprechende Sprachpaket für mindestens eine Sprache aber noch nicht heruntergeladen wurde oder die Website dafür noch nicht [`install()`](/de/docs/Web/API/SpeechRecognition/install_static) aufgerufen hat (siehe folgenden Hinweis).
    Nur relevant, wenn `processLocally` den Wert `true` hat.
- `unavailable`
  - : Gibt an, dass mindestens eine der angegebenen Sprachen in der gewünschten `quality`-Stufe nicht unterstützt wird.
    - Wenn `processLocally` auf `true` gesetzt ist, bedeutet `unavailable`, dass die Spracherkennung auf dem Gerät für mindestens eine der angegebenen Sprachen nicht verfügbar ist.
    - Wenn `processLocally` auf `false` gesetzt ist, bedeutet `unavailable`, dass die Spracherkennung für mindestens eine der angegebenen Sprachen weder auf dem Gerät noch über einen entfernten Dienst verfügbar ist.

> [!NOTE]
> Zum Schutz der Privatsphäre verbergen Browser, ob sich ein Sprachpaket bereits auf dem Gerät der nutzenden Person befindet, bis die Website für diese Sprache [`install()`](/de/docs/Web/API/SpeechRecognition/install_static) aufgerufen hat.
> Bis dahin gibt `available()` statt `available` oder `downloading` den Wert `downloadable` zurück, selbst wenn das Sprachpaket bereits installiert ist oder heruntergeladen wird.
> Wird `install()` für ein bereits installiertes Sprachpaket aufgerufen, wird es nicht erneut heruntergeladen. Spätere Aufrufe von `available()` geben dann den tatsächlichen Status zurück.

#### Endgültiger Rückgabewert bei mehreren Sprachen mit unterschiedlichem Status

Auch wenn im Array `langs` mehrere Sprachen angegeben sind, wird nur ein Statuswert zurückgegeben.
Wenn die angegebenen Sprachen unterschiedliche Verfügbarkeitsstatus haben, wird derjenige Status zurückgegeben, der am weitesten von `available` entfernt ist.
Die folgenden Listen zeigen, wie der endgültige Status bestimmt wird. Die Regeln werden jeweils der Reihe nach geprüft:

Wenn `processLocally` den Wert `false` hat:

- Wenn alle Sprachen `available` sind, wird `available` zurückgegeben.
- Andernfalls wird `unavailable` zurückgegeben.

Wenn `processLocally` den Wert `true` hat:

- Wenn mindestens eine Sprache `unavailable` ist, wird `unavailable` zurückgegeben.
- Andernfalls wird `downloadable` zurückgegeben, wenn mindestens eine Sprache `downloadable` ist.
- Andernfalls wird `downloading` zurückgegeben, wenn mindestens eine Sprache `downloading` ist.
- Andernfalls wird `available` zurückgegeben.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das aktuelle Dokument ist nicht vollständig aktiv.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Mindestens eine der in `langs` angegebenen Zeichenfolgen ist kein gültiger BCP-47-Sprachtag.

## Beispiele

### Verfügbarkeit auf dem Gerät prüfen und Sprachpakete installieren

Damit die Spracherkennung auf dem Gerät funktioniert, muss im Browser ein Sprachpaket für die Sprache installiert sein, die Sie erkennen möchten.
Wenn Sie `start()` aufrufen, nachdem Sie `processLocally` auf `true` gesetzt haben, aber das passende Sprachpaket nicht installiert ist, schlägt die Erkennung fehl. Dabei wird ein [`error`](/de/docs/Web/API/SpeechRecognition/error_event)-Ereignis mit dem Fehlercode [`service-not-allowed`](/de/docs/Web/API/SpeechRecognitionErrorEvent/error#service-not-allowed) ausgelöst.

So installieren Sie das passende Sprachpaket:

1. Prüfen Sie mit der Methode `available()`, ob das Sprachpaket auf dem Gerät der nutzenden Person installiert ist.
2. Falls es nicht installiert ist, installieren Sie es mit der Methode [`SpeechRecognition.install()`](/de/docs/Web/API/SpeechRecognition/install_static).

Diese Schritte werden mit dem folgenden Codeausschnitt ausgeführt:

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

- Wenn der Wert `unavailable` ist, steht kein geeignetes Sprachpaket zum Herunterladen bereit. Außerdem geben wir eine entsprechende Meldung aus.
- Wenn der Wert `available` ist, ist das Sprachpaket lokal verfügbar und die Erkennung kann beginnen. In diesem Fall rufen wir `start()` auf und protokollieren eine Meldung in der Konsole, sobald die App Spracheingaben empfangen kann.
- Wenn der Wert weder `unavailable` noch `available` ist (`downloadable` oder `downloading`), geben wir eine Diagnosemeldung aus, um die nutzende Person darüber zu informieren, dass ein Sprachpaket heruntergeladen wird. Anschließend rufen wir die Methode `install()` auf, um den Download durchzuführen.

Die Methode `install()` beginnt mit dem Herunterladen des Sprachpakets für `en-US` und gibt ein {{jsxref("Promise")}} zurück. Dieses wird mit einem booleschen Wert erfüllt, der angibt, ob die angegebenen Sprachpakete erfolgreich heruntergeladen und installiert wurden (`true`) oder nicht (`false`).

Dieser Code stammt aus unserem Beispiel zur [Farbänderung per Spracherkennung auf dem Gerät](https://github.com/mdn/dom-examples/tree/main/web-speech-api/on-device-speech-color-changer) ([Demo direkt ausprobieren](https://mdn.github.io/dom-examples/web-speech-api/on-device-speech-color-changer/)). Eine vollständige Erläuterung finden Sie unter [Die Web Speech API verwenden](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API).

### Fähigkeiten des Modells auf dem Gerät prüfen

Der folgende Codeausschnitt verändert das vorherige Beispiel.
Er ruft `available()` mit der Option `quality` auf, die auf `dictation` gesetzt ist, um zu prüfen, ob die Spracherkennung auf dem Gerät diese Qualitätsstufe unterstützt.
Wenn das Ergebnis `unavailable` ist, setzen wir die Eigenschaft [`processLocally`](/de/docs/Web/API/SpeechRecognition/processLocally) des `SpeechRecognition`-Objekts auf `false` (unter der Annahme, dass sie zuvor `true` war). Dadurch kann der Browser einen entfernten Erkennungsdienst verwenden, sofern einer verfügbar ist. Anschließend rufen wir `start()` auf.

Wenn das Ergebnis `available` ist, rufen wir [`start()`](/de/docs/Web/API/SpeechRecognition/start) auf, um die Erkennung auf dem Gerät zu starten.
Bei jedem anderen Ergebnis rufen wir [`install()`](/de/docs/Web/API/SpeechRecognition/install_static) mit der auf `dictation` gesetzten Option `quality` auf, um die erforderlichen Sprachpakete zu installieren.

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

- [`SpeechRecognition.install()`](/de/docs/Web/API/SpeechRecognition/install_static)
- [`SpeechRecognition.processLocally`](/de/docs/Web/API/SpeechRecognition/processLocally)
- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
- [Die Web Speech API verwenden](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)
