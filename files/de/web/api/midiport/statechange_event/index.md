---
title: "MIDIPort: statechange-Ereignis"
short-title: statechange
slug: Web/API/MIDIPort/statechange_event
l10n:
  sourceCommit: 60898650ee472d10cc15cb91c982fede0d0c5e34
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Das **`statechange`**-Ereignis der [`MIDIPort`](/de/docs/Web/API/MIDIPort)-Schnittstelle wird ausgelöst, wenn ein Port von offen zu geschlossen oder von geschlossen zu offen wechselt.

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

Im folgenden Beispiel wird der aktuelle Wert von [`MIDIPort.state`](/de/docs/Web/API/MIDIPort/state) bei jeder Änderung protokolliert.

```js
port.onstatechange = (event) => {
  console.log(port.state);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
