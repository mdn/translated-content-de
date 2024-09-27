---
title: "MIDIMessageEvent: data-Eigenschaft"
short-title: data
slug: Web/API/MIDIMessageEvent/data
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Die schreibgeschützte **`data`**-Eigenschaft des [`MIDIMessageEvent`](/de/docs/Web/API/MIDIMessageEvent)-Interfaces gibt die MIDI-Datenbytes einer einzelnen MIDI-Nachricht zurück.

## Wert

Ein {{jsxref("Uint8Array")}}.

## Beispiele

Im folgenden Beispiel wird auf [`midimessage`](/de/docs/Web/API/MIDIInput/midimessage_event)-Ereignisse auf allen Eingangsports gehört. Wenn eine Nachricht empfangen wird, wird der Wert von `data` in die Konsole ausgegeben.

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
