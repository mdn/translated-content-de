---
title: "MIDIPort: close() Methode"
short-title: close()
slug: Web/API/MIDIPort/close
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Die **`close()`**-Methode des [`MIDIPort`](/de/docs/Web/API/MIDIPort)-Interfaces macht den Zugriff auf das mit diesem `MIDIPort` verbundene MIDI-Gerät nicht mehr verfügbar.

Wenn der Port erfolgreich geschlossen wird, wird ein neues [`MIDIConnectionEvent`](/de/docs/Web/API/MIDIConnectionEvent) in die `MIDIPort`-[`statechange`](/de/docs/Web/API/MIDIPort/statechange_event)- und `MIDIAccess`-[`statechange`](/de/docs/Web/API/MIDIAccess/statechange_event) Ereignisse eingereiht, und die [`MIDIPort.connection`](/de/docs/Web/API/MIDIPort/connection)-Eigenschaft wird auf `"closed"` geändert.

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald der Port geschlossen wurde.

## Beispiele

Das folgende Beispiel zeigt, wie ein Ausgangsport geschlossen wird.

```js
let output = midiAccess.outputs.get(portID);
output.close(); // closes the port
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
