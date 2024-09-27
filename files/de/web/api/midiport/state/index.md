---
title: "MIDIPort: state-Eigenschaft"
short-title: state
slug: Web/API/MIDIPort/state
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Die **`state`**-Eigenschaft des [`MIDIPort`](/de/docs/Web/API/MIDIPort)-Interfaces ist schreibgeschützt und gibt den Status des Ports zurück.

## Wert

Ein String, der den Status des Ports enthält, einer von:

- `"disconnected"`
  - : Das Gerät, das dieser `MIDIPort` repräsentiert, ist vom System getrennt.
- `"connected"`
  - : Das Gerät, das dieser `MIDIPort` repräsentiert, ist derzeit verbunden.

## Beispiele

Das folgende Beispiel durchläuft alle Eingangsports und gibt den Status jedes einzelnen auf der Konsole aus.

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
