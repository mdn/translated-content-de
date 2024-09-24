---
title: "MIDIPort: open() Methode"
short-title: open()
slug: Web/API/MIDIPort/open
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Die **`open()`** Methode der {{domxref("MIDIPort")}}-Schnittstelle macht das MIDI-Gerät, das mit diesem `MIDIPort` verbunden ist, explizit verfügbar.

Wenn der Port erfolgreich geöffnet wird, wird ein neuer {{domxref("MIDIConnectionEvent")}} in die `MIDIPort`-{{domxref("MIDIPort.statechange_event", "statechange")}}- und `MIDIAccess`-{{domxref("MIDIAccess.statechange_event", "statechange")}}-Ereignisse eingereiht, und die {{domxref("MIDIPort.connection")}}-Eigenschaft wird auf `"open"` gesetzt.

Wenn der Port bereits geöffnet ist, wenn diese Methode aufgerufen wird, wird das Promise erfolgreich aufgelöst.

## Syntax

```js-nolint
open()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird, sobald der Zugriff auf den Port erfolgreich erlangt wurde.

### Ausnahmen

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Das Promise wird mit diesem Fehler abgelehnt, wenn der Port nicht verfügbar ist und nicht geöffnet werden kann.

## Beispiele

Das folgende Beispiel zeigt, wie ein Ausgangsport geöffnet wird.

```js
const output = midiAccess.outputs.get(portID);
output.open(); // öffnet den Port
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
