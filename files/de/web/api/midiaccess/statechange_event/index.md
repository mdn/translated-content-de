---
title: "MIDIAccess: statechange Ereignis"
short-title: statechange
slug: Web/API/MIDIAccess/statechange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Das **`statechange`** Ereignis der [`MIDIAccess`](/de/docs/Web/API/MIDIAccess) Schnittstelle wird ausgelöst, wenn ein neuer MIDI-Port hinzugefügt wird oder sich der Status eines bestehenden Ports ändert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("statechange", (event) => { })

onstatechange = (event) => { }
```

## Ereignistyp

Ein [`MIDIConnectionEvent`](/de/docs/Web/API/MIDIConnectionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MIDIConnectionEvent")}}

## Ereigniseigenschaften

- [`MIDIConnectionEvent.port`](/de/docs/Web/API/MIDIConnectionEvent/port) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf eine [`MIDIPort`](/de/docs/Web/API/MIDIPort) Instanz für einen Port zurück, der verbunden oder getrennt wurde.

## Beispiel

Die Methode [`Navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess) gibt ein Promise zurück, das mit einem [`MIDIAccess`](/de/docs/Web/API/MIDIAccess) Objekt aufgelöst wird. Wenn sich der Status eines Ports ändert, werden Informationen über diesen Port in die Konsole ausgegeben.

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
