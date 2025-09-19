---
title: RTCDTMFToneChangeEvent
slug: Web/API/RTCDTMFToneChangeEvent
l10n:
  sourceCommit: f71683f74da0078d9371c4d0c1ff9d3898fc7b59
---

{{APIRef("WebRTC")}}

Das **`RTCDTMFToneChangeEvent`**-Interface repräsentiert Ereignisse, die anzeigen, dass {{Glossary("DTMF", "DTMF")}}-Töne begonnen haben zu spielen oder das Abspielen beendet haben. Dieses Interface wird vom [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event)-Ereignis verwendet.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Neben den Eigenschaften von [`Event`](/de/docs/Web/API/Event) bietet dieses Interface folgende:_

- [`RTCDTMFToneChangeEvent.tone`](/de/docs/Web/API/RTCDTMFToneChangeEvent/tone) {{ReadOnlyInline}}
  - : Ein String, der den Ton angibt, der zu spielen begonnen hat, oder ein leerer String (`""`), wenn der vorherige Ton das Abspielen beendet hat.

## Konstruktoren

- [`RTCDTMFToneChangeEvent()`](/de/docs/Web/API/RTCDTMFToneChangeEvent/RTCDTMFToneChangeEvent)
  - : Gibt ein neues `RTCDTMFToneChangeEvent` zurück. Es nimmt zwei Parameter: der erste ist ein String, der den Typ des Ereignisses repräsentiert (immer `"tonechange"`); der zweite ist ein Wörterbuch, das den Anfangszustand der Eigenschaften des Ereignisses enthält.

## Instanz-Methoden

_Unterstützt die im [`Event`](/de/docs/Web/API/Event) definierten Methoden. Es gibt keine zusätzlichen Methoden._

## Beispiele

Dieses Snippet ist lose abgeleitet von dem vollständigen, funktionierenden Beispiel, das Sie im Abschnitt über [Wenn ein Ton das Abspielen beendet](/de/docs/Web/API/WebRTC_API/Using_DTMF#when_a_tone_finishes_playing) finden. Es fügt jeden Ton zu einer Anzeige hinzu, während er gespielt wird, und, sobald alle Töne gesendet wurden, wird ein zuvor deaktivierter "Senden"-Button wieder aktiviert, damit die nächste DTMF-Zeichenkette eingegeben werden kann.

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
- Üblicher Ziel: [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender).
