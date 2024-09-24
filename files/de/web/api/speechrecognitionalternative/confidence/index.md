---
title: "SpeechRecognitionAlternative: Eigenschaft confidence"
short-title: confidence
slug: Web/API/SpeechRecognitionAlternative/confidence
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Web Speech API")}}

Die **`confidence`**-Schreibgeschützte Eigenschaft der
{{domxref("SpeechRecognitionResult")}}-Schnittstelle gibt eine numerische Schätzung zurück, wie sicher das Spracherkennungssystem ist, dass die Erkennung korrekt ist.

> [!NOTE]
> Mozillas Implementierung von `confidence` wird noch
> bearbeitet – im Moment scheint sie immer 1 zurückzugeben.

## Wert

Eine Zahl zwischen 0 und 1.

## Beispiele

Dieser Code ist ein Auszug aus unserem
[Beispiel: Sprachgesteuerte Farbumschaltung](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js).

```js
recognition.onresult = (event) => {
  // Die results-Eigenschaft des SpeechRecognitionEvent gibt ein SpeechRecognitionResultList-Objekt zurück
  // Das SpeechRecognitionResultList-Objekt enthält SpeechRecognitionResult-Objekte.
  // Es verfügt über einen Getter, sodass es wie ein Array angesprochen werden kann
  // Das erste [0] gibt das SpeechRecognitionResult an Position 0 zurück.
  // Jedes SpeechRecognitionResult-Objekt enthält SpeechRecognitionAlternative-Objekte,
  // die individuelle Ergebnisse enthalten.
  // Auch diese verfügen über Getter, sodass sie wie Arrays angesprochen werden können.
  // Das zweite [0] gibt die SpeechRecognitionAlternative an Position 0 zurück.
  // Wir geben dann die transcript-Eigenschaft des SpeechRecognitionAlternative-Objekts zurück
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}.`;
  bg.style.backgroundColor = color;
  console.log(`Confidence: ${event.results[0][0].confidence}`);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
