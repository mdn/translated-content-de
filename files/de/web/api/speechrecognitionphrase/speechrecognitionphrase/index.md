---
title: "SpeechRecognitionPhrase: SpeechRecognitionPhrase() Konstruktor"
short-title: SpeechRecognitionPhrase()
slug: Web/API/SpeechRecognitionPhrase/SpeechRecognitionPhrase
l10n:
  sourceCommit: 11478c4adedc859a4fe3e3c4004fcfd96ebc1eba
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

Der **`SpeechRecognitionPhrase()`**-Konstruktor erstellt ein neues [`SpeechRecognitionPhrase`](/de/docs/Web/API/SpeechRecognitionPhrase)-Objekt.

Ein Array von `SpeechRecognitionPhrase`-Objekten wird über die Eigenschaft [`SpeechRecognition.phrases`](/de/docs/Web/API/SpeechRecognition/phrases) in die Spracherkennungsmotor für das [kontextuelle Biasing](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#contextual_biasing_in_speech_recognition) übergeben.

## Syntax

```js-nolint
new SpeechRecognitionPhrase(phrase)
new SpeechRecognitionPhrase(boost, phrase)
```

### Parameter

- `boost` {{optional_inline}}
  - : Eine Gleitkommazahl zwischen `0.0` und `10.0` (einschließlich), die das Gewicht repräsentiert, das Sie auf die `phrase` anwenden möchten. Dieser Wert entspricht ungefähr dem natürlichen Logarithmus der Anzahl, wie viel wahrscheinlicher die Website denkt, dass diese Phrase erscheint, im Vergleich zu dem, was das Spracherkennungsmodell weiß. Höhere Werte machen die `phrase` wahrscheinlicher erkennbar. Ein Wert von `0.0` bedeutet, dass die Phrase überhaupt nicht verstärkt wird, während ein Wert von `10.0` bedeutet, dass die Phrase sehr wahrscheinlich erscheinen wird. Wenn nicht angegeben, beträgt der Standardwert für `boost` `1.0`.
    > [!NOTE]
    > Ein hoher Wert wie `9.0` oder `10.0` könnte dazu führen, dass die Erkennungsengine fälschlicherweise andere Phrasen als die angegebene Phrase erkennt. Daher sollten solche Werte selten verwendet werden, wenn `SpeechRecognitionPhrase`-Objekte erstellt werden.
- `phrase`
  - : Ein String, der ein Wort oder eine Phrase enthält, die verstärkt werden soll.

### Rückgabewert

Ein neues [`SpeechRecognitionPhrase`](/de/docs/Web/API/SpeechRecognitionPhrase)-Objekt.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der angegebene `boost`-Wert ist kleiner als `0.0` oder größer als `10.0`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)
- [`SpeechRecognition.phrases`](/de/docs/Web/API/SpeechRecognition/phrases)
