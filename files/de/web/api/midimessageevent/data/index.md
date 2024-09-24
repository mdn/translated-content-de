---
title: "MIDIMessageEvent: data Eigenschaft"
short-title: data
slug: Web/API/MIDIMessageEvent/data
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Die schreibgeschützte Eigenschaft **`data`** des {{domxref("MIDIMessageEvent")}}-Interfaces gibt die MIDI-Daten-Bytes einer einzelnen MIDI-Nachricht zurück.

## Wert

Ein {{jsxref("Uint8Array")}}.

## Beispiele

Im folgenden Beispiel wird auf alle Eingabeports für {{domxref("MIDIInput.midimessage_event", "midimessage")}}-Ereignisse gehört. Wenn eine Nachricht empfangen wird, wird der Wert von `data` in die Konsole ausgegeben.

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
