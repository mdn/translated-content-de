---
title: "SpeechRecognitionResultList: item()-Methode"
short-title: item()
slug: Web/API/SpeechRecognitionResultList/item
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{APIRef("Web Speech API")}}

Der **`item`**-Getter des [`SpeechRecognitionResultList`](/de/docs/Web/API/SpeechRecognitionResultList)-Interfaces ist ein Standard-Getter — er ermöglicht den Zugriff auf [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult)-Objekte in der Liste über die Array-Syntax.

## Syntax

```js-nolint
item(index)
```

### Parameter

- `index`
  - : Der Index des Elements, das abgerufen werden soll.

### Rückgabewert

Ein [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult)-Objekt.

## Beispiele

Dieser Code stammt aus unserem [Sprachgesteuerten Farbumschalter](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js)-Beispiel.

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
