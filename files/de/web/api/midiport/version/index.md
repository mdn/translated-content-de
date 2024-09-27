---
title: "MIDIPort: version Eigenschaft"
short-title: version
slug: Web/API/MIDIPort/version
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Die schreibgeschützte Eigenschaft **`version`** des [`MIDIPort`](/de/docs/Web/API/MIDIPort)-Interfaces gibt die Version des Ports zurück.

## Wert

Ein String, der die Version des Ports enthält.

## Beispiele

Das folgende Beispiel durchläuft alle Eingabe-Ports und gibt die Version jedes einzelnen in der Konsole aus.

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
