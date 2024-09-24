---
title: RTCDTMFToneChangeEvent
slug: Web/API/RTCDTMFToneChangeEvent
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebRTC")}}

Die **`RTCDTMFToneChangeEvent`**-Schnittstelle repräsentiert Ereignisse, die gesendet werden, um anzuzeigen, dass {{Glossary("DTMF")}}-Töne begonnen haben oder aufgehört haben zu spielen. Diese Schnittstelle wird vom [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event)-Ereignis verwendet.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Neben den Eigenschaften von {{domxref("Event")}} bietet diese Schnittstelle Folgendes:_

- {{domxref("RTCDTMFToneChangeEvent.tone")}} {{ReadOnlyInline}}
  - : Ein String, der den Ton angibt, der zu spielen begonnen hat, oder ein leerer String (`""`), wenn der vorherige Ton aufgehört hat zu spielen.

## Konstruktoren

- {{domxref("RTCDTMFToneChangeEvent.RTCDTMFToneChangeEvent()", "RTCDTMFToneChangeEvent()")}}
  - : Gibt ein neues `RTCDTMFToneChangeEvent` zurück. Es nimmt zwei Parameter, der erste ist ein String, der den Typ des Ereignisses repräsentiert (immer `"tonechange"`); der zweite ist ein Wörterbuch, das den Anfangszustand der Eigenschaften des Ereignisses enthält.

## Instanz-Methoden

_Unterstützt die in {{domxref("Event")}} definierten Methoden. Es gibt keine zusätzlichen Methoden._

## Beispiele

Dieses Snippet ist lose abgeleitet von dem vollständigen, funktionierenden Beispiel, das Sie im Abschnitt [Wenn ein Ton das Abspielen beendet hat](/de/docs/Web/API/WebRTC_API/Using_DTMF#when_a_tone_finishes_playing) finden. Es fügt jeden Ton zu einem Anzeigefeld hinzu, sobald er gespielt wird, und aktiviert, nachdem alle Töne gesendet wurden, eine zuvor deaktivierte "Senden"-Schaltfläche wieder, sodass die nächste DMTF-Zeichenfolge eingegeben werden kann.

```js
dtmfSender.addEventListener(
  "change",
  (event) => {
    if (event.tone !== "") {
      dialStringBox.innerText += event.tone;
    } else {
      sendDTMFButton.disabled = false;
    }
  },
  false,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- Üblicher Zielort: {{domxref("RTCDTMFSender")}}.
