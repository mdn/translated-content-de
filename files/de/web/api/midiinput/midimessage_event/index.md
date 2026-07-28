---
title: "MIDIInput: midimessage Ereignis"
short-title: midimessage
slug: Web/API/MIDIInput/midimessage_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Web MIDI API")}}{{securecontext_header}}

Das `midimessage` Ereignis der [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) wird ausgelöst, wenn der dem [`MIDIInput`](/de/docs/Web/API/MIDIInput) entsprechende MIDI-Port eine oder mehrere MIDI-Nachrichten vollständig empfangen hat. Eine Instanz von [`MIDIMessageEvent`](/de/docs/Web/API/MIDIMessageEvent), die die empfangene Nachricht enthält, wird an den Ereignishandler übergeben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("midimessage", (event) => { })

onmidimessage = (event) => { }
```

## Ereignistyp

Ein [`MIDIMessageEvent`](/de/docs/Web/API/MIDIMessageEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MIDIMessageEvent")}}

## Beispiele

Im folgenden Beispiel wird auf `midimessage` Ereignisse auf allen Eingangsports gehört. Wenn eine Nachricht empfangen wird, wird die Eigenschaft [`MIDIMessageEvent.data`](/de/docs/Web/API/MIDIMessageEvent/data) in der Konsole ausgegeben.

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
