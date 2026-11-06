---
title: "SpeechRecognitionPhrase: Konstruktor SpeechRecognitionPhrase()"
short-title: SpeechRecognitionPhrase()
slug: Web/API/SpeechRecognitionPhrase/SpeechRecognitionPhrase
l10n:
  sourceCommit: 076ee5b53d5e933e7fc2fd5eff68304f9691148e
---

{{APIRef("Web Speech API")}}

Der Konstruktor **`SpeechRecognitionPhrase()`** erstellt ein neues [`SpeechRecognitionPhrase`](/de/docs/Web/API/SpeechRecognitionPhrase)-Objekt.

Ein Array von `SpeechRecognitionPhrase`-Objekten wird über die Eigenschaft [`SpeechRecognition.phrases`](/de/docs/Web/API/SpeechRecognition/phrases) an die Spracherkennungs-Engine übergeben, um eine [kontextabhängige Gewichtung](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#contextual_biasing_in_speech_recognition) zu ermöglichen.

## Syntax

```js-nolint
new SpeechRecognitionPhrase(phrase)
new SpeechRecognitionPhrase(phrase, boost)
```

### Parameter

- `phrase`
  - : Ein String mit einem Wort oder einer Wortgruppe, deren Erkennung Sie begünstigen möchten.
- `boost` {{optional_inline}}
  - : Eine Gleitkommazahl zwischen `0.0` und `10.0` (einschließlich), die angibt, wie stark `phrase` gewichtet werden soll. Der Wert entspricht ungefähr dem natürlichen Logarithmus des Faktors, um den die Wortgruppe nach Einschätzung der Website wahrscheinlicher vorkommt, als das Spracherkennungsmodell annimmt. Höhere Werte erhöhen die Wahrscheinlichkeit, dass `phrase` erkannt wird. Bei `0.0` wird die Erkennung der Wortgruppe nicht begünstigt; bei `10.0` wird angenommen, dass sie mit extrem hoher Wahrscheinlichkeit vorkommt. Wenn Sie keinen Wert angeben, ist der Standardwert für `boost` `1.0`.
    > [!NOTE]
    > Ein hoher Wert wie `9.0` oder `10.0` kann dazu führen, dass die Erkennungs-Engine andere Wortgruppen fälschlicherweise als die angegebene Wortgruppe erkennt. Verwenden Sie solche Werte daher beim Erstellen von `SpeechRecognitionPhrase`-Objekten nur selten.

### Rückgabewert

Ein neues [`SpeechRecognitionPhrase`](/de/docs/Web/API/SpeechRecognitionPhrase)-Objekt.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der angegebene Wert für `boost` ist kleiner als `0.0` oder größer als `10.0`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)
- [`SpeechRecognition.phrases`](/de/docs/Web/API/SpeechRecognition/phrases)
