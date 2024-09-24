---
title: "MIDIPort: type-Eigenschaft"
short-title: type
slug: Web/API/MIDIPort/type
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Die schreibgeschützte **`type`**-Eigenschaft des {{domxref("MIDIPort")}}-Interfaces gibt den Typ des Ports zurück, der angibt, ob es sich um einen Eingabe- oder Ausgabemidiport handelt.

## Wert

Ein String, der den Typ des Ports enthält, einer von:

- `"input"`
  - : Der `MIDIPort` ist ein Eingabeport.
- `"output"`
  - : Der `MIDIPort` ist ein Ausgabeport.

## Beispiele

Das folgende Beispiel durchläuft alle Eingabeports und gibt den `type` jedes Ports in der Konsole aus.

```js
for (const entry of midiAccess.inputs) {
  const input = entry[1];
  console.log(input.type); // sollte immer "input" sein
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
