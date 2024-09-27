---
title: "MIDIOutput: send()-Methode"
short-title: send()
slug: Web/API/MIDIOutput/send
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Die **`send()`**-Methode der [`MIDIOutput`](/de/docs/Web/API/MIDIOutput)-Schnittstelle stellt Nachrichten für den entsprechenden MIDI-Port in die Warteschlange. Die Nachricht kann sofort gesendet werden oder mit einem optionalen Zeitstempel, um das Senden zu verzögern.

## Syntax

```js-nolint
send(data)
send(data, timestamp)
```

### Parameter

- `data`
  - : Eine Sequenz von einem oder mehreren [gültigen MIDI-Nachrichten](https://midi.org/about-midi-part-3midi-messages). Jeder Eintrag repräsentiert ein einzelnes Byte Daten.
- `timestamp` {{optional_inline}}
  - : Ein [`DOMHighResTimestamp`](/de/docs/Web/API/DOMHighResTimestamp) mit der Zeit in Millisekunden, wann die Nachricht gesendet werden soll (relativ zu [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin)).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `data` keine gültige Sequenz ist oder keine gültige MIDI-Nachricht enthält.
- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `data` eine exklusive Systemnachricht ist und der [`MIDIAccess`](/de/docs/Web/API/MIDIAccess) keinen exklusiven Zugriff ermöglicht hat.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Port getrennt ist.

## Beispiele

Im folgenden Beispiel wird ein mittlerer C-Ton sofort gesendet, gefolgt von einer Note-Off-Nachricht eine Sekunde später.

```js
function sendMiddleC(midiAccess, portID) {
  const noteOnMessage = [0x90, 60, 0x7f]; // note on middle C, full velocity
  const output = midiAccess.outputs.get(portID);
  output.send(noteOnMessage); //omitting the timestamp means send immediately.
  output.send([0x80, 60, 0x40], window.performance.now() + 1000.0); // timestamp = now + 1000ms.
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
