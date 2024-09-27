---
title: RTCDTMFToneChangeEvent
slug: Web/API/RTCDTMFToneChangeEvent
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebRTC")}}

Die **`RTCDTMFToneChangeEvent`**-Schnittstelle repräsentiert Ereignisse, die anzeigen, dass [DTMF](/de/docs/Glossary/DTMF)-Töne begonnen haben oder fertig gespielt wurden. Diese Schnittstelle wird vom [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event)-Ereignis verwendet.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Neben den Eigenschaften von [`Event`](/de/docs/Web/API/Event) bietet diese Schnittstelle folgende:_

- [`RTCDTMFToneChangeEvent.tone`](/de/docs/Web/API/RTCDTMFToneChangeEvent/tone) {{ReadOnlyInline}}
  - : Ein String, der den Ton angibt, der begonnen hat zu spielen, oder ein leerer String (`""`), wenn der vorherige Ton beendet wurde.

## Konstruktoren

- [`RTCDTMFToneChangeEvent()`](/de/docs/Web/API/RTCDTMFToneChangeEvent/RTCDTMFToneChangeEvent)
  - : Gibt ein neues `RTCDTMFToneChangeEvent` zurück. Es nimmt zwei Parameter: der erste ist ein String, der den Typ des Ereignisses darstellt (immer `"tonechange"`); der zweite ist ein Dictionary, das den anfänglichen Zustand der Eigenschaften des Ereignisses enthält.

## Instanz-Methoden

_Unterstützt die in [`Event`](/de/docs/Web/API/Event) definierten Methoden. Es gibt keine zusätzlichen Methoden._

## Beispiele

Dieses Snippet ist locker von dem vollständigen, funktionierenden Beispiel abgeleitet, das Sie im Abschnitt [Wenn ein Ton fertig gespielt ist](/de/docs/Web/API/WebRTC_API/Using_DTMF#when_a_tone_finishes_playing) finden. Es fügt jeden Ton zu einer Anzeige hinzu, während er gespielt wird, und sobald alle Töne gesendet wurden, wird eine zuvor deaktivierte "Senden"-Taste wieder aktiviert, sodass der nächste DMTF-String eingegeben werden kann.

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
- Sein üblicher Ziel: [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender).
