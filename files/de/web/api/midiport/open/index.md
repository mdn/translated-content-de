---
title: "MIDIPort: open()-Methode"
short-title: open()
slug: Web/API/MIDIPort/open
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Die **`open()`**-Methode der [`MIDIPort`](/de/docs/Web/API/MIDIPort)-Schnittstelle macht das mit diesem `MIDIPort` verbundene MIDI-Gerät explizit verfügbar.

Wenn der Port erfolgreich geöffnet wird, wird ein neues [`MIDIConnectionEvent`](/de/docs/Web/API/MIDIConnectionEvent) zu den `MIDIPort`- und `MIDIAccess`-[`statechange`](/de/docs/Web/API/MIDIPort/statechange_event) Ereignissen hinzugefügt, und die [`MIDIPort.connection`](/de/docs/Web/API/MIDIPort/connection)-Eigenschaft wird auf `"open"` gesetzt.

Wenn der Port bereits geöffnet ist, wenn diese Methode aufgerufen wird, wird das Promise erfolgreich aufgelöst.

## Syntax

```js-nolint
open()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird, sobald der Zugriff auf den Port erfolgreich gewährt wurde.

### Ausnahmen

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das Promise wird mit diesem Fehler abgelehnt, wenn der Port nicht verfügbar ist und nicht geöffnet werden kann.

## Beispiele

Das folgende Beispiel zeigt, wie ein Ausgangsport geöffnet wird.

```js
const output = midiAccess.outputs.get(portID);
output.open(); // opens the port
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
