---
title: "MIDIPort: id-Eigenschaft"
short-title: id
slug: Web/API/MIDIPort/id
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Die **`id`**-Eigenschaft der {{domxref("MIDIPort")}}-Schnittstelle gibt die eindeutige ID des Ports zurück und ist schreibgeschützt.

## Wert

Ein String, der eine ID für den Port enthält.

## Beispiele

Das folgende Beispiel durchläuft alle Eingabeports und gibt die ID jedes einzelnen in der Konsole aus.

```js
for (const entry of midiAccess.inputs) {
  const input = entry[1];
  console.log(input.id);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
