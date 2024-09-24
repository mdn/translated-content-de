---
title: "SpeechRecognitionEvent: results-Eigenschaft"
short-title: results
slug: Web/API/SpeechRecognitionEvent/results
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Speech API")}}

Die schreibgeschützte **`results`**-Eigenschaft der {{domxref("SpeechRecognitionEvent")}}-Schnittstelle gibt ein {{domxref("SpeechRecognitionResultList")}}-Objekt zurück, das alle Spracherkennungsergebnisse für die aktuelle Sitzung darstellt.

Konkret enthält dieses Objekt alle endgültigen Ergebnisse, gefolgt von der derzeit besten Hypothese für alle Zwischenergebnisse. Wenn nachfolgende {{domxref("SpeechRecognition.result_event", "result")}}-Ereignisse ausgelöst werden, können Zwischenergebnisse durch ein neueres Zwischenergebnis oder durch ein endgültiges Ergebnis überschrieben werden – sie können sogar entfernt werden, wenn sie sich am Ende des "results"-Arrays befinden und die Länge des Arrays abnimmt. Endgültige Ergebnisse werden hingegen nicht überschrieben oder entfernt.

## Wert

Ein {{domxref("SpeechRecognitionResultList")}}-Objekt.

## Beispiele

Dieser Code ist aus unserem [Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js)-Beispiel entnommen.

```js
recognition.onresult = (event) => {
  // Die SpeechRecognitionEvent results Eigenschaft gibt ein SpeechRecognitionResultList Objekt zurück
  // Das SpeechRecognitionResultList Objekt enthält SpeechRecognitionResult Objekte.
  // Es hat einen Getter, sodass es wie ein Array abgerufen werden kann
  // Das erste [0] gibt das SpeechRecognitionResult an Position 0 zurück.
  // Jedes SpeechRecognitionResult Objekt enthält SpeechRecognitionAlternative Objekte, die einzelne Ergebnisse enthalten.
  // Diese haben ebenfalls Getter, sodass sie wie Arrays abgerufen werden können.
  // Das zweite [0] gibt das SpeechRecognitionAlternative an Position 0 zurück.
  // Wir geben dann die transcript Eigenschaft des SpeechRecognitionAlternative Objekts zurück
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
