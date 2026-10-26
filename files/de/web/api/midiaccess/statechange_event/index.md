---
title: "MIDIAccess: statechange-Ereignis"
short-title: statechange
slug: Web/API/MIDIAccess/statechange_event
l10n:
  sourceCommit: 60898650ee472d10cc15cb91c982fede0d0c5e34
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Das **`statechange`**-Ereignis der [`MIDIAccess`](/de/docs/Web/API/MIDIAccess)-Schnittstelle wird ausgelöst, wenn ein neuer MIDI-Port hinzugefügt wird oder ein vorhandener Port seinen Zustand ändert.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("statechange", (event) => { })
```

Alternativ können Sie die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onstatechange = (event) => { }
```

## Ereignistyp

Ein [`MIDIConnectionEvent`](/de/docs/Web/API/MIDIConnectionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MIDIConnectionEvent")}}

## Beispiel

Die Methode [`Navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess) gibt ein Promise zurück, das mit einem [`MIDIAccess`](/de/docs/Web/API/MIDIAccess)-Objekt erfüllt wird. Wenn ein Port seinen Zustand ändert, werden Informationen über diesen Port in der Konsole ausgegeben.

```js
navigator.requestMIDIAccess().then((access) => {
  access.onstatechange = (event) => {
    console.log(event.port.name, event.port.manufacturer, event.port.state);
  };
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
