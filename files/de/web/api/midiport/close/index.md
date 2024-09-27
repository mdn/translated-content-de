---
title: "MIDIPort: close()-Methode"
short-title: close()
slug: Web/API/MIDIPort/close
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Die **`close()`**-Methode der [`MIDIPort`](/de/docs/Web/API/MIDIPort)-Schnittstelle macht den Zugriff auf das an diesen `MIDIPort` angeschlossene MIDI-Gerät unzugänglich.

Wenn der Port erfolgreich geschlossen wird, wird ein neues [`MIDIConnectionEvent`](/de/docs/Web/API/MIDIConnectionEvent) für die `MIDIPort`-`[`statechange`](/de/docs/Web/API/MIDIPort/statechange_event)`- und `MIDIAccess`-`[`statechange`](/de/docs/Web/API/MIDIAccess/statechange_event)`-Ereignisse in die Warteschlange gestellt, und die [`MIDIPort.connection`](/de/docs/Web/API/MIDIPort/connection)-Eigenschaft wird auf `"closed"` geändert.

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Gibt ein {{jsxref("Promise")}} zurück, das sich auflöst, sobald der Port geschlossen wurde.

## Beispiele

Das folgende Beispiel zeigt einen Ausgangsport, der geschlossen wird.

```js
let output = midiAccess.outputs.get(portID);
output.close(); // closes the port
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
