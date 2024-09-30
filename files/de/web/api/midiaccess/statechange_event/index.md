---
title: "MIDIAccess: statechange-Ereignis"
short-title: statechange
slug: Web/API/MIDIAccess/statechange_event
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Das **`statechange`**-Ereignis des [`MIDIAccess`](/de/docs/Web/API/MIDIAccess)-Interfaces wird ausgelöst, wenn ein neuer MIDI-Port hinzugefügt wird oder wenn ein bestehender Port seinen Status ändert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("statechange", (event) => {});

onstatechange = (event) => {};
```

## Ereignistyp

Ein [`MIDIConnectionEvent`](/de/docs/Web/API/MIDIConnectionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MIDIConnectionEvent")}}

## Ereigniseigenschaften

- [`MIDIConnectionEvent.port`](/de/docs/Web/API/MIDIConnectionEvent/port) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf eine [`MIDIPort`](/de/docs/Web/API/MIDIPort)-Instanz für einen Port zurück, der verbunden oder getrennt wurde.

## Beispiel

Die Methode [`Navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess) gibt ein Promise zurück, das mit einem [`MIDIAccess`](/de/docs/Web/API/MIDIAccess)-Objekt aufgelöst wird. Wenn ein Port seinen Status ändert, werden Informationen über diesen Port in der Konsole ausgegeben.

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
