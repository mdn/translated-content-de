---
title: "SpeechRecognitionPhrase: SpeechRecognitionPhrase() Konstruktor"
short-title: SpeechRecognitionPhrase()
slug: Web/API/SpeechRecognitionPhrase/SpeechRecognitionPhrase
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{APIRef("Web Speech API")}}

Der **`SpeechRecognitionPhrase()`** Konstruktor erstellt ein neues [`SpeechRecognitionPhrase`](/de/docs/Web/API/SpeechRecognitionPhrase) Objekt.

Ein Array von `SpeechRecognitionPhrase` Objekten wird über die [`SpeechRecognition.phrases`](/de/docs/Web/API/SpeechRecognition/phrases) Eigenschaft in die Spracherkennungsmotor für [kontextuelle Beeinflussung](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#contextual_biasing_in_speech_recognition) übergeben.

## Syntax

```js-nolint
new SpeechRecognitionPhrase(phrase)
new SpeechRecognitionPhrase(boost, phrase)
```

### Parameter

- `boost` {{optional_inline}}
  - : Eine Gleitkommazahl zwischen `0.0` und `10.0` (einschließlich), die das Gewicht angibt, das Sie auf die `phrase` anwenden möchten. Dieser Wert ist ungefähr gleich dem natürlichen Logarithmus der Häufigkeit, mit der die Website glaubt, dass dieser Satz erscheinen wird im Vergleich zu dem, was das Spracherkennungsmodell kennt. Höhere Werte erhöhen die Wahrscheinlichkeit, dass die `phrase` erkannt wird. Ein Wert von `0.0` bedeutet, dass die Phrase überhaupt nicht verstärkt wird, während ein Wert von `10.0` bedeutet, dass die Phrase extrem wahrscheinlich erscheint. Wenn nicht angegeben, ist der Standardwert von `boost` `1.0`.
    > [!NOTE]
    > Ein hoher Wert wie `9.0` oder `10.0` könnte den Erkennungsmotor dazu bringen, fälschlicherweise andere Sätze als die angegebene Phrase zu erkennen. Daher sollten solche Werte selten beim Erstellen von `SpeechRecognitionPhrase` Objekten verwendet werden.
- `phrase`
  - : Ein String, der ein Wort oder einen Satz enthält, den Sie verstärken möchten.

### Rückgabewert

Ein neues [`SpeechRecognitionPhrase`](/de/docs/Web/API/SpeechRecognitionPhrase) Objekt.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der angegebene `boost` Wert ist kleiner als `0.0` oder größer als `10.0`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)
- [`SpeechRecognition.phrases`](/de/docs/Web/API/SpeechRecognition/phrases)
