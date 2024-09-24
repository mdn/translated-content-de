---
title: "MIDIPort: close()-Methode"
short-title: close()
slug: Web/API/MIDIPort/close
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Die **`close()`**-Methode des {{domxref("MIDIPort")}}-Interfaces macht den Zugriff auf das mit diesem `MIDIPort` verbundene MIDI-Gerät unzugänglich.

Wenn der Port erfolgreich geschlossen wurde, wird ein neues {{domxref("MIDIConnectionEvent")}} zum `MIDIPort` {{domxref("MIDIPort.statechange_event", "statechange")}} und `MIDIAccess` {{domxref("MIDIAccess.statechange_event", "statechange")}} Ereignissen in die Warteschlange gestellt, und die {{domxref("MIDIPort.connection")}}-Eigenschaft wird auf `"closed"` geändert.

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald der Port geschlossen ist.

## Beispiele

Das folgende Beispiel zeigt, wie ein Ausgabekanal geschlossen wird.

```js
let output = midiAccess.outputs.get(portID);
output.close(); // schließt den Port
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}
