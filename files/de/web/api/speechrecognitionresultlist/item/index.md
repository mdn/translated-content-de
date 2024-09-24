---
title: "SpeechRecognitionResultList: item()-Methode"
short-title: item()
slug: Web/API/SpeechRecognitionResultList/item
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Speech API")}}

Der **`item`** Getter des {{domxref("SpeechRecognitionResultList")}}-Interfaces ist ein Standard-Getter — er ermöglicht den Zugriff auf {{domxref("SpeechRecognitionResult")}}-Objekte in der Liste über Array-Syntax.

## Syntax

```js-nolint
item(index)
```

### Parameter

- `index`
  - : Index des abzurufenden Elements.

### Rückgabewert

Ein {{domxref("SpeechRecognitionResult")}}-Objekt.

## Beispiele

Dieser Code stammt aus unserem [Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js)-Beispiel.

```js
recognition.onresult = (event) => {
  // Die SpeechRecognitionEvent-Ergebnis-Eigenschaft gibt ein SpeechRecognitionResultList-Objekt zurück
  // Das SpeechRecognitionResultList-Objekt enthält SpeechRecognitionResult-Objekte.
  // Es hat einen Getter, sodass es wie ein Array verwendet werden kann
  // Das erste [0] gibt das SpeechRecognitionResult an Position 0 zurück.
  // Jedes SpeechRecognitionResult-Objekt enthält SpeechRecognitionAlternative-Objekte
  // die einzelne Ergebnisse enthalten.
  // Diese haben ebenfalls Getter, sodass sie wie Arrays verwendet werden können.
  // Das zweite [0] gibt das SpeechRecognitionAlternative an Position 0 zurück.
  // Wir geben dann die transcript-Eigenschaft des SpeechRecognitionAlternative-Objekts zurück
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Ergebnis erhalten: ${color}.`;
  bg.style.backgroundColor = color;
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
