---
title: SpeechRecognitionAlternative
slug: Web/API/SpeechRecognitionAlternative
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{APIRef("Web Speech API")}}

Die **`SpeechRecognitionAlternative`**-Schnittstelle der [Web Speech API](/de/docs/Web/API/Web_Speech_API) repräsentiert ein einzelnes Wort, das vom Spracherkennungsdienst erkannt wurde.

## Instanzeigenschaften

- [`SpeechRecognitionAlternative.transcript`](/de/docs/Web/API/SpeechRecognitionAlternative/transcript) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der das Transkript des erkannten Wortes enthält.
- [`SpeechRecognitionAlternative.confidence`](/de/docs/Web/API/SpeechRecognitionAlternative/confidence) {{ReadOnlyInline}}
  - : Gibt eine numerische Schätzung zwischen 0 und 1 zurück, wie sicher das Spracherkennungssystem ist, dass die Erkennung korrekt ist.

## Beispiele

Dieser Code ist aus unserem
[Sprachfarbwechsler](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js)-Beispiel entnommen.

```js
recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}.`;
  bg.style.backgroundColor = color;
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
