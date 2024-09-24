---
title: "MIDIPort: Eigenschaft manufacturer"
short-title: manufacturer
slug: Web/API/MIDIPort/manufacturer
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Die schreibgeschützte Eigenschaft **`manufacturer`** des {{domxref("MIDIPort")}}-Interfaces gibt den Hersteller des Ports zurück.

## Wert

Ein String, der den Hersteller des Ports enthält.

## Beispiele

Im folgenden Beispiel wird durch alle Eingangsports iteriert und der Hersteller jedes Ports in die Konsole ausgegeben.

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
