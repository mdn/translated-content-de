---
title: "SpeechRecognitionPhrase: SpeechRecognitionPhrase() Konstruktor"
short-title: SpeechRecognitionPhrase()
slug: Web/API/SpeechRecognitionPhrase/SpeechRecognitionPhrase
l10n:
  sourceCommit: 4e4a4d32225264f565b63d6055fcac604d391edb
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

Der **`SpeechRecognitionPhrase()`** Konstruktor erstellt ein neues [`SpeechRecognitionPhrase`](/de/docs/Web/API/SpeechRecognitionPhrase)-Objekt.

Ein Array von `SpeechRecognitionPhrase`-Objekten wird über die [`SpeechRecognition.phrases`](/de/docs/Web/API/SpeechRecognition/phrases)-Eigenschaft für das [kontextuelle Beeinflussung](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#contextual_biasing_in_speech_recognition) in die Spracherkennungs-Engine eingefügt.

## Syntax

```js-nolint
new SpeechRecognitionPhrase(phrase)
new SpeechRecognitionPhrase(phrase, boost)
```

### Parameter

- `phrase`
  - : Ein String, der ein Wort oder eine Phrase enthält, die bevorzugt werden soll.
- `boost` {{optional_inline}}
  - : Eine Gleitkommazahl zwischen `0.0` und `10.0` (einschließlich), die das Gewicht darstellt, das Sie auf die `phrase` anwenden möchten. Dieser Wert ist ungefähr gleich dem natürlichen Logarithmus der Anzahl, wie viel wahrscheinlicher die Website denkt, dass diese Phrase erscheint, als das, was das Spracherkennungsmodell weiß. Höhere Werte machen es wahrscheinlicher, dass die `phrase` erkannt wird. Ein Wert von `0.0` bedeutet, dass die Phrase überhaupt nicht bevorzugt wird, während ein Wert von `10.0` bedeutet, dass die Phrase extrem wahrscheinlich erscheint. Wenn nicht angegeben, ist der Standardwert für `boost` `1.0`.
    > [!NOTE]
    > Ein hoher Wert wie `9.0` oder `10.0` könnte dazu führen, dass die Erkennungs-Engine irrtümlich andere Phrasen als die angegebene Phrase erkennt. Daher sollten solche Werte selten verwendet werden, wenn `SpeechRecognitionPhrase`-Objekte erstellt werden.

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
