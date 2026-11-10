---
title: RTCDTMFToneChangeEvent
slug: Web/API/RTCDTMFToneChangeEvent
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("WebRTC")}}

Die **`RTCDTMFToneChangeEvent`**-Schnittstelle repräsentiert Ereignisse, die anzeigen, dass die Wiedergabe von {{Glossary("DTMF", "DTMF")}}-Tönen begonnen hat oder beendet wurde. Diese Schnittstelle wird vom [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event)-Ereignis verwendet.

{{InheritanceDiagram}}

## Konstruktoren

- [`RTCDTMFToneChangeEvent()`](/de/docs/Web/API/RTCDTMFToneChangeEvent/RTCDTMFToneChangeEvent)
  - : Gibt ein neues `RTCDTMFToneChangeEvent` zurück. Der Konstruktor nimmt zwei Parameter entgegen: Der erste ist ein String, der den Ereignistyp angibt (immer `"tonechange"`); der zweite ist ein Dictionary mit dem Anfangszustand der Ereigniseigenschaften.

## Instanzeigenschaften

_Zusätzlich zu den Eigenschaften von [`Event`](/de/docs/Web/API/Event) bietet diese Schnittstelle Folgendes:_

- [`RTCDTMFToneChangeEvent.tone`](/de/docs/Web/API/RTCDTMFToneChangeEvent/tone) {{ReadOnlyInline}}
  - : Ein String, der den Ton angibt, dessen Wiedergabe begonnen hat, oder ein leerer String (`""`), wenn die Wiedergabe des vorherigen Tons beendet wurde.

## Instanzmethoden

_Unterstützt die in [`Event`](/de/docs/Web/API/Event) definierten Methoden. Es gibt keine zusätzlichen Methoden._

## Beispiele

Dieser Codeausschnitt basiert auf dem vollständigen, funktionsfähigen Beispiel im Abschnitt [Wenn die Wiedergabe eines Tons endet](/de/docs/Web/API/WebRTC_API/Using_DTMF#when_a_tone_finishes_playing). Er fügt jeden Ton bei seiner Wiedergabe einem Anzeigefeld hinzu. Sobald alle Töne gesendet wurden, aktiviert er eine zuvor deaktivierte „Senden“-Schaltfläche wieder, sodass die nächste DTMF-Zeichenfolge eingegeben werden kann.

```js
dtmfSender.addEventListener("change", (event) => {
  if (event.tone !== "") {
    dialStringBox.innerText += event.tone;
  } else {
    sendDTMFButton.disabled = false;
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- Das übliche Ziel: [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender).
