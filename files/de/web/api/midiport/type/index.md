---
title: "MIDIPort: type-Eigenschaft"
short-title: type
slug: Web/API/MIDIPort/type
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Die schreibgeschützte **`type`**-Eigenschaft des [`MIDIPort`](/de/docs/Web/API/MIDIPort)-Interfaces gibt den Typ des Ports zurück und zeigt an, ob es sich um einen Eingabe- oder Ausgabe-MIDI-Port handelt.

## Wert

Ein String, der den Typ des Ports enthält, einer der folgenden:

- `"input"`
  - : Der `MIDIPort` ist ein Eingabe-Port.
- `"output"`
  - : Der `MIDIPort` ist ein Ausgabe-Port.

## Beispiele

Das folgende Beispiel durchläuft alle Eingabe-Ports und gibt den `type` jedes Ports in der Konsole aus.

```js
for (const entry of midiAccess.inputs) {
  const input = entry[1];
  console.log(input.type); // should always be input
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
