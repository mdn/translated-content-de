---
title: "MIDIInput: midimessage Ereignis"
short-title: midimessage
slug: Web/API/MIDIInput/midimessage_event
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{APIRef("Web MIDI API")}}{{securecontext_header}}

Das `midimessage`-Ereignis der [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) wird ausgelöst, wenn der entsprechende MIDI-Port dieses [`MIDIInput`](/de/docs/Web/API/MIDIInput) mit dem Empfang von einem oder mehreren MIDI-Nachrichten fertig ist. Eine Instanz von [`MIDIMessageEvent`](/de/docs/Web/API/MIDIMessageEvent), die die empfangene Nachricht enthält, wird an den Ereignishandler übergeben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Event-Handler-Eigenschaft.

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

Im folgenden Beispiel wird auf allen Eingangsports auf `midimessage`-Ereignisse gehört. Wenn eine Nachricht empfangen wird, wird die [`MIDIMessageEvent.data`](/de/docs/Web/API/MIDIMessageEvent/data)-Eigenschaft in der Konsole ausgegeben.

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
