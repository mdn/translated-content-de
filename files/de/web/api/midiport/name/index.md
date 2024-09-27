---
title: "MIDIPort: name-Eigenschaft"
short-title: name
slug: Web/API/MIDIPort/name
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Die schreibgeschützte **`name`**-Eigenschaft der [`MIDIPort`](/de/docs/Web/API/MIDIPort)-Schnittstelle gibt den Systemnamen des Ports zurück.

## Wert

Ein String, der den Systemnamen des Ports enthält.

## Beispiele

Das folgende Beispiel durchläuft alle Eingangsports und gibt den Namen jedes einzelnen in der Konsole aus.

```js
for (const entry of midiAccess.inputs) {
  const input = entry[1];
  console.log(input.name);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
