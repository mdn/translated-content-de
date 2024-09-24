---
title: "SpeechRecognitionResult: item()-Methode"
short-title: item()
slug: Web/API/SpeechRecognitionResult/item
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Speech API")}}

Der **`item`**-Getter der
{{domxref("SpeechRecognitionResult")}}-Schnittstelle ist ein Standard-Getter, der es erlaubt,
{{domxref("SpeechRecognitionAlternative")}}-Objekte innerhalb des Ergebnisses über
Array-Syntax zuzugreifen.

## Syntax

```js-nolint
item(index)
```

### Parameter

- `index`
  - : Index des abzurufenden Elements.

### Rückgabewert

Ein {{domxref("SpeechRecognitionAlternative")}}-Objekt.

## Beispiele

Dieser Code stammt aus unserem [Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js)-Beispiel.

```js
recognition.onresult = (event) => {
  // Die SpeechRecognitionEvent-Eigenschaft results gibt ein SpeechRecognitionResultList-Objekt zurück.
  // Das SpeechRecognitionResultList-Objekt enthält SpeechRecognitionResult-Objekte.
  // Es hat einen Getter, damit darauf wie auf ein Array zugegriffen werden kann.
  // Das erste [0] gibt das SpeechRecognitionResult an Position 0 zurück.
  // Jedes SpeechRecognitionResult-Objekt enthält SpeechRecognitionAlternative-Objekte
  // die individuelle Ergebnisse enthalten.
  // Diese haben auch Getter, sodass sie wie Arrays zugänglich sind.
  // Das zweite [0] gibt die SpeechRecognitionAlternative an Position 0 zurück.
  // Anschließend geben wir die transcript-Eigenschaft des SpeechRecognitionAlternative-Objekts zurück
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
