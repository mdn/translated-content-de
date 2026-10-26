---
title: "MIDIInput: midimessage-Ereignis"
short-title: midimessage
slug: Web/API/MIDIInput/midimessage_event
l10n:
  sourceCommit: 60898650ee472d10cc15cb91c982fede0d0c5e34
---

{{APIRef("Web MIDI API")}}{{securecontext_header}}

Das `midimessage`-Ereignis der [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) wird ausgelöst, wenn der diesem [`MIDIInput`](/de/docs/Web/API/MIDIInput) entsprechende MIDI-Port den Empfang einer oder mehrerer MIDI-Nachrichten abgeschlossen hat. Eine Instanz von [`MIDIMessageEvent`](/de/docs/Web/API/MIDIMessageEvent), die die empfangene Nachricht enthält, wird an den Event-Handler übergeben.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("midimessage", (event) => { })
```

Alternativ können Sie die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onmidimessage = (event) => { }
```

## Ereignistyp

Ein [`MIDIMessageEvent`](/de/docs/Web/API/MIDIMessageEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MIDIMessageEvent")}}

## Beispiele

Im folgenden Beispiel wird auf allen Eingabeports auf `midimessage`-Ereignisse gewartet. Wenn eine Nachricht empfangen wird, wird die Eigenschaft [`MIDIMessageEvent.data`](/de/docs/Web/API/MIDIMessageEvent/data) in der Konsole ausgegeben.

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
