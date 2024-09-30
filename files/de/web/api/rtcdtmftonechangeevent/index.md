---
title: RTCDTMFToneChangeEvent
slug: Web/API/RTCDTMFToneChangeEvent
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebRTC")}}

Die **`RTCDTMFToneChangeEvent`**-Schnittstelle repräsentiert Ereignisse, die darauf hinweisen, dass [DTMF](/de/docs/Glossary/DTMF)-Töne begonnen haben zu spielen oder fertig sind. Diese Schnittstelle wird vom [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event)-Ereignis verwendet.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Zusätzlich zu den Eigenschaften von [`Event`](/de/docs/Web/API/Event) bietet diese Schnittstelle Folgendes:_

- [`RTCDTMFToneChangeEvent.tone`](/de/docs/Web/API/RTCDTMFToneChangeEvent/tone) {{ReadOnlyInline}}
  - : Ein String, der den Ton angibt, der begonnen hat zu spielen, oder ein leerer String (`""`), wenn der vorherige Ton fertig gespielt ist.

## Konstruktoren

- [`RTCDTMFToneChangeEvent()`](/de/docs/Web/API/RTCDTMFToneChangeEvent/RTCDTMFToneChangeEvent)
  - : Gibt ein neues `RTCDTMFToneChangeEvent` zurück. Es nimmt zwei Parameter, der erste ist ein String, der den Typ des Ereignisses repräsentiert (immer `"tonechange"`); der zweite ist ein Wörterbuch, das den Anfangszustand der Eigenschaften des Ereignisses enthält.

## Instanz-Methoden

_Unterstützt die in [`Event`](/de/docs/Web/API/Event) definierten Methoden. Es gibt keine zusätzlichen Methoden._

## Beispiele

Dieses Codebeispiel ist locker abgeleitet von dem vollständigen, funktionierenden Beispiel, das Sie im Abschnitt [Wenn ein Ton fertig gespielt ist](/de/docs/Web/API/WebRTC_API/Using_DTMF#when_a_tone_finishes_playing) finden. Es fügt jeden Ton einem Anzeigefeld hinzu, während er gespielt wird, und sobald alle Töne gesendet wurden, wird ein zuvor deaktivierter "Senden"-Button wieder aktiviert, der die Eingabe der nächsten DMTF-Zeichenfolge ermöglicht.

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
- Üblicher Zielort: [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender).
