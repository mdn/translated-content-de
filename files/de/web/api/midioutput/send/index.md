---
title: "MIDIOutput: send()-Methode"
short-title: send()
slug: Web/API/MIDIOutput/send
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Die **`send()`**-Methode der {{domxref("MIDIOutput")}}-Schnittstelle reiht Nachrichten für den entsprechenden MIDI-Port in die Warteschlange ein. Die Nachricht kann sofort gesendet werden oder mit einem optionalen Zeitstempel, um das Senden zu verzögern.

## Syntax

```js-nolint
send(data)
send(data, timestamp)
```

### Parameter

- `data`
  - : Eine Sequenz von einem oder mehreren [gültigen MIDI-Nachrichten](https://midi.org/about-midi-part-3midi-messages). Jeder Eintrag repräsentiert ein einzelnes Datenbyte.
- `timestamp` {{optional_inline}}
  - : Ein {{domxref("DOMHighResTimestamp")}} mit der Zeit in Millisekunden, wann die Nachricht gesendet werden soll (relativ zu {{domxref("Performance.timeOrigin")}}).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `data` keine gültige Sequenz ist oder keine gültige MIDI-Nachricht enthält.
- `InvalidAccessError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn `data` eine systemexklusive Nachricht ist und der {{domxref("MIDIAccess")}} keinen exklusiven Zugriff ermöglicht hat.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Port getrennt ist.

## Beispiele

Im folgenden Beispiel wird eine mittlere C-Note sofort gesendet, gefolgt von einer Noten-Aus-Nachricht eine Sekunde später.

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
