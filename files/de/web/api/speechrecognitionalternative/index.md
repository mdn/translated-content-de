---
title: SpeechRecognitionAlternative
slug: Web/API/SpeechRecognitionAlternative
l10n:
  sourceCommit: 25871546e715779a39a2d962820a35e44b6a6df1
---

{{APIRef("Web Speech API")}}

Die Schnittstelle **`SpeechRecognitionAlternative`** der [Web Speech API](/de/docs/Web/API/Web_Speech_API) stellt eine mögliche Übereinstimmung mit dem Gesagten dar, wie es vom Spracherkennungsdienst erkannt wurde.
Ein [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult) enthält eine oder mehrere Alternativen, geordnet von der höchsten bis zur niedrigsten Konfidenz.

## Instanzeigenschaften

- [`SpeechRecognitionAlternative.transcript`](/de/docs/Web/API/SpeechRecognitionAlternative/transcript) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der die Transkription der erkannten Sprache enthält.
- [`SpeechRecognitionAlternative.confidence`](/de/docs/Web/API/SpeechRecognitionAlternative/confidence) {{ReadOnlyInline}}
  - : Gibt eine numerische Schätzung zwischen 0 und 1 dafür zurück, wie sicher das Spracherkennungssystem ist, dass die Erkennung korrekt ist.

## Beispiele

Dieser Code stammt aus unserem Beispiel
[Sprachgesteuerter Farbwechsler](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js).

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
