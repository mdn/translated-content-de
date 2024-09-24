---
title: "MIDIInput: midimessage Ereignis"
short-title: midimessage
slug: Web/API/MIDIInput/midimessage_event
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{APIRef("Web MIDI API")}}{{securecontext_header}}

Das `midimessage`-Ereignis der [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) wird ausgelöst, wenn der entsprechende MIDI-Anschluss dieser {{domxref("MIDIInput")}} das Empfangen von einem oder mehreren MIDI-Nachrichten beendet. Eine Instanz von {{domxref("MIDIMessageEvent")}}, die die empfangene Nachricht enthält, wird an den Ereignishandler übergeben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("midimessage", (event) => {});

onmidimessage = (event) => {};
```

## Ereignistyp

Ein {{domxref("MIDIMessageEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("MIDIMessageEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von {{domxref("Event")}}._

- {{domxref("MIDIMessageEvent.data")}}
  - : Ein {{jsxref("Uint8Array")}}, das die Datenbytes einer einzelnen MIDI-Nachricht enthält. Weitere Informationen zu deren Form finden Sie in der [MIDI-Spezifikation](https://midi.org/summary-of-midi-1-0-messages).

## Beispiele

Im folgenden Beispiel wird auf `midimessage`-Ereignisse an allen Eingangsanschlüssen gehört. Wenn eine Nachricht empfangen wird, wird die {{domxref("MIDIMessageEvent.data")}}-Eigenschaft in die Konsole ausgegeben.

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
