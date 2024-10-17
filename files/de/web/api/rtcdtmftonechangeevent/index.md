---
title: RTCDTMFToneChangeEvent
slug: Web/API/RTCDTMFToneChangeEvent
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{APIRef("WebRTC")}}

Die **`RTCDTMFToneChangeEvent`**-Schnittstelle repräsentiert Ereignisse, die gesendet werden, um anzuzeigen, dass {{Glossary("DTMF", "DTMF")}}-Töne angefangen oder aufgehört haben zu spielen. Diese Schnittstelle wird vom [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event)-Ereignis verwendet.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Zusätzlich zu den Eigenschaften von [`Event`](/de/docs/Web/API/Event) bietet diese Schnittstelle Folgendes:_

- [`RTCDTMFToneChangeEvent.tone`](/de/docs/Web/API/RTCDTMFToneChangeEvent/tone) {{ReadOnlyInline}}
  - : Ein String, der den Ton angibt, der zu spielen begonnen hat, oder ein leerer String (`""`), wenn der vorherige Ton aufgehört hat zu spielen.

## Konstruktoren

- [`RTCDTMFToneChangeEvent()`](/de/docs/Web/API/RTCDTMFToneChangeEvent/RTCDTMFToneChangeEvent)
  - : Gibt ein neues `RTCDTMFToneChangeEvent` zurück. Es nimmt zwei Parameter an, der erste ist ein String, der den Typ des Ereignisses darstellt (immer `"tonechange"`); der zweite ist ein Wörterbuch, das den Anfangszustand der Eigenschaften des Ereignisses enthält.

## Instanz-Methoden

_Unterstützt die in [`Event`](/de/docs/Web/API/Event) definierten Methoden. Es gibt keine zusätzlichen Methoden._

## Beispiele

Dieser Code-Ausschnitt ist lose entnommen aus dem vollständigen, funktionierenden Beispiel, das Sie im Abschnitt über [Wenn ein Ton zu spielen aufhört](/de/docs/Web/API/WebRTC_API/Using_DTMF#when_a_tone_finishes_playing) finden. Es fügt jeden Ton einer Anzeigebox hinzu, während er gespielt wird, und sobald alle Töne gesendet wurden, wird ein zuvor deaktivierter "Senden"-Button wieder aktiviert, sodass die nächste DTMF-Zeichenkette eingegeben werden kann.

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
- Das übliche Ziel: [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender).
