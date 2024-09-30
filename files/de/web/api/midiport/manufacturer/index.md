---
title: "MIDIPort: Eigenschaft manufacturer"
short-title: manufacturer
slug: Web/API/MIDIPort/manufacturer
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Die **`manufacturer`** schreibgeschützte Eigenschaft des [`MIDIPort`](/de/docs/Web/API/MIDIPort)-Interfaces gibt den Hersteller des Ports zurück.

## Wert

Ein String, der den Hersteller des Ports enthält.

## Beispiele

Das folgende Beispiel durchläuft alle Eingangsports und gibt den Hersteller jedes Ports in der Konsole aus.

```js
for (const entry of midiAccess.inputs) {
  const input = entry[1];
  console.log(input.manufacturer);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
