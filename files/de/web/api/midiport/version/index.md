---
title: "MIDIPort: version-Eigenschaft"
short-title: version
slug: Web/API/MIDIPort/version
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Die **`version`**-Eigenschaft der {{domxref("MIDIPort")}}-Schnittstelle ist eine schreibgeschützte Eigenschaft, die die Version des Ports zurückgibt.

## Wert

Ein String, der die Version des Ports enthält.

## Beispiele

Das folgende Beispiel durchläuft alle Eingangsports und gibt die Version jedes Ports in der Konsole aus.

```js
for (const entry of midiAccess.inputs) {
  const input = entry[1];
  console.log(input.version);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
