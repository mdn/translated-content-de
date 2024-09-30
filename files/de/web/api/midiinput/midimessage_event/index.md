---
title: "MIDIInput: midimessage-Ereignis"
short-title: midimessage
slug: Web/API/MIDIInput/midimessage_event
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{APIRef("Web MIDI API")}}{{securecontext_header}}

Das `midimessage`-Ereignis der [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) wird ausgelöst, wenn der MIDI-Port, der diesem [`MIDIInput`](/de/docs/Web/API/MIDIInput) entspricht, das Empfangen von einem oder mehreren MIDI-Nachrichten beendet. Eine Instanz von [`MIDIMessageEvent`](/de/docs/Web/API/MIDIMessageEvent), die die empfangene Nachricht enthält, wird an den Ereignis-Handler übergeben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("midimessage", (event) => {});

onmidimessage = (event) => {};
```

## Ereignistyp

Ein [`MIDIMessageEvent`](/de/docs/Web/API/MIDIMessageEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MIDIMessageEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von [`Event`](/de/docs/Web/API/Event)._

- [`MIDIMessageEvent.data`](/de/docs/Web/API/MIDIMessageEvent/data)
  - : Ein {{jsxref("Uint8Array")}}, das die Datenbytes einer einzelnen MIDI-Nachricht enthält. Weitere Informationen zur Form finden Sie in der [MIDI-Spezifikation](https://midi.org/summary-of-midi-1-0-messages).

## Beispiele

Im folgenden Beispiel wird auf allen Eingangsports nach `midimessage`-Ereignissen gelauscht. Wenn eine Nachricht empfangen wird, wird die Eigenschaft [`MIDIMessageEvent.data`](/de/docs/Web/API/MIDIMessageEvent/data) in der Konsole ausgegeben.

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
