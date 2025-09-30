---
title: "SpeechRecognition: `processLocally` Eigenschaft"
short-title: processLocally
slug: Web/API/SpeechRecognition/processLocally
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{APIRef("Web Speech API")}}

Die **`processLocally`** Eigenschaft des [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)-Interfaces gibt an, ob die Spracherkennung lokal auf dem Gerät des Benutzers durchgeführt werden muss.

Siehe [On-device-Spracherkennung](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition) für weitere Informationen.

## Wert

Ein boolescher Wert.

- Wenn auf `true` gesetzt, muss die Spracherkennung durch das `SpeechRecognition`-Objekt lokal durchgeführt werden.
- Wenn auf `false` gesetzt (der Standardwert), kann der Benutzeragent wählen, ob die Verarbeitung lokal oder remote durchgeführt wird.

## Beispiele

### Grundlegende Verwendung

Der folgende Code erstellt eine neue Instanz des `SpeechRecognition`-Objekts mithilfe des [`SpeechRecognition()`](/de/docs/Web/API/SpeechRecognition/SpeechRecognition)-Konstruktors und legt fest, dass die lokale Verarbeitung verwendet werden soll, indem `processLocally` auf `true` gesetzt wird:

```js
const recognition = new SpeechRecognition();
recognition.processLocally = true;
```

Dieser Code ist ein Auszug aus unserem [on-device Speech Color Changer](https://github.com/mdn/dom-examples/tree/main/web-speech-api/on-device-speech-color-changer) ([Demo live ausführen](https://mdn.github.io/dom-examples/web-speech-api/on-device-speech-color-changer/)). Für eine vollständige Erklärung siehe [Using the Web Speech API](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
