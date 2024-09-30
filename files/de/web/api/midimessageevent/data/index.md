---
title: "MIDIMessageEvent: data-Eigenschaft"
short-title: data
slug: Web/API/MIDIMessageEvent/data
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Die schreibgeschützte **`data`**-Eigenschaft der [`MIDIMessageEvent`](/de/docs/Web/API/MIDIMessageEvent)-Schnittstelle gibt die MIDI-Datenbytes einer einzelnen MIDI-Nachricht zurück.

## Wert

Ein {{jsxref("Uint8Array")}}.

## Beispiele

Im folgenden Beispiel werden [`midimessage`](/de/docs/Web/API/MIDIInput/midimessage_event)-Ereignisse an allen Eingangsports überwacht. Wenn eine Nachricht empfangen wird, wird der Wert von `data` in der Konsole ausgegeben.

```js
inputs.forEach((input) => {
  input.onmidimessage = (message) => {
    console.log(message.data);
  };
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
