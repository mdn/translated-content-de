---
title: "MIDIPort: state-Eigenschaft"
short-title: state
slug: Web/API/MIDIPort/state
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Die schreibgeschützte **`state`**-Eigenschaft der {{domxref("MIDIPort")}}-Schnittstelle gibt den Zustand des Ports zurück.

## Wert

Ein String, der den Zustand des Ports enthält, einer von:

- `"disconnected"`
  - : Das Gerät, das diesen `MIDIPort` darstellt, ist vom System getrennt.
- `"connected"`
  - : Das Gerät, das diesen `MIDIPort` darstellt, ist derzeit verbunden.

## Beispiele

Das folgende Beispiel durchläuft alle Eingangsports und gibt den Zustand jedes einzelnen in der Konsole aus.

```js
for (const entry of midiAccess.inputs) {
  const input = entry[1];
  console.log(input.state);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
