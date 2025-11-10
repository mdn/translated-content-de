---
title: "SpeechRecognition: processLocally-Eigenschaft"
short-title: processLocally
slug: Web/API/SpeechRecognition/processLocally
l10n:
  sourceCommit: 11478c4adedc859a4fe3e3c4004fcfd96ebc1eba
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

Die **`processLocally`**-Eigenschaft des [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)-Interfaces gibt an, ob die Spracherkennung lokal auf dem Gerät des Benutzers durchgeführt werden muss.

Weitere Informationen finden Sie unter [Spracherkennung auf dem Gerät](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition).

## Wert

Ein boolescher Wert.

- Wenn auf `true` gesetzt, muss die Spracherkennung, die über das `SpeechRecognition`-Objekt durchgeführt wird, lokal durchgeführt werden.
- Wenn auf `false` gesetzt (Standard), kann der Benutzeragent wählen, ob die Verarbeitung lokal oder remote durchgeführt wird.

## Beispiele

### Grundlegende Verwendung

Der folgende Code erstellt eine neue `SpeechRecognition`-Objektinstanz mit dem [`SpeechRecognition()`](/de/docs/Web/API/SpeechRecognition/SpeechRecognition)-Konstruktor und gibt dann an, dass die lokale Verarbeitung verwendet werden soll, indem `processLocally` auf `true` gesetzt wird:

```js
const recognition = new SpeechRecognition();
recognition.processLocally = true;
```

Dieser Codeausschnitt stammt aus unserem [on-device speech color changer](https://github.com/mdn/dom-examples/tree/main/web-speech-api/on-device-speech-color-changer) ([Demo live ausführen](https://mdn.github.io/dom-examples/web-speech-api/on-device-speech-color-changer/)). Eine vollständige Erklärung finden Sie unter [Using the Web Speech API](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
