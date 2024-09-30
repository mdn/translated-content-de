---
title: "MIDIPort: connection-Eigenschaft"
short-title: connection
slug: Web/API/MIDIPort/connection
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Die schreibgeschützte Eigenschaft **`connection`** des [`MIDIPort`](/de/docs/Web/API/MIDIPort)-Interfaces gibt den Verbindungsstatus des Ports zurück.

## Wert

Gibt einen String zurück, der den Verbindungsstatus des Ports enthält, einer von:

- `"open"`
  - : Das Gerät, das diesen `MIDIPort` darstellt, wurde geöffnet und ist verfügbar.
- `"closed"`
  - : Das Gerät, das diesen `MIDIPort` darstellt, wurde nicht geöffnet oder wurde geschlossen.
- `"pending"`
  - : Das Gerät, das diesen `MIDIPort` darstellt, wurde geöffnet, ist aber anschließend getrennt worden.

## Beispiele

Das folgende Beispiel durchläuft alle Eingangsports und gibt den Verbindungsstatus jedes einzelnen auf der Konsole aus.

```js
for (const entry of midiAccess.inputs) {
  const input = entry[1];
  console.log(input.connection);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
