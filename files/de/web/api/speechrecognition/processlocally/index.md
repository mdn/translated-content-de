---
title: "SpeechRecognition: Eigenschaft processLocally"
short-title: processLocally
slug: Web/API/SpeechRecognition/processLocally
l10n:
  sourceCommit: 076ee5b53d5e933e7fc2fd5eff68304f9691148e
---

{{APIRef("Web Speech API")}}

Die Eigenschaft **`processLocally`** der Schnittstelle [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition) legt fest, ob die Spracherkennung lokal auf dem Gerät des Benutzers erfolgen muss.

Weitere Informationen finden Sie unter [Spracherkennung auf dem Gerät](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition).

## Wert

Ein boolescher Wert.

- Wenn der Wert auf `true` gesetzt ist, muss die Spracherkennung über das `SpeechRecognition`-Objekt lokal erfolgen.
- Wenn der Wert auf `false` gesetzt ist (Standardeinstellung), kann der User Agent entscheiden, ob die Verarbeitung lokal oder remote erfolgt.

## Beispiele

### Grundlegende Verwendung

Der folgende Code erstellt mit dem Konstruktor [`SpeechRecognition()`](/de/docs/Web/API/SpeechRecognition/SpeechRecognition) eine neue Instanz des `SpeechRecognition`-Objekts. Anschließend legt er durch Setzen von `processLocally` auf `true` fest, dass die Verarbeitung lokal erfolgen soll:

```js
const recognition = new SpeechRecognition();
recognition.processLocally = true;
```

Dieser Code ist ein Auszug aus unserem Beispiel [Farbwechsel per Spracherkennung auf dem Gerät](https://github.com/mdn/dom-examples/tree/main/web-speech-api/on-device-speech-color-changer) ([Demo direkt ausprobieren](https://mdn.github.io/dom-examples/web-speech-api/on-device-speech-color-changer/)). Eine ausführliche Erklärung finden Sie unter [Verwendung der Web Speech API](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
