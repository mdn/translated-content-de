---
title: "MIDIPort: statechange-Ereignis"
short-title: statechange
slug: Web/API/MIDIPort/statechange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Das **`statechange`**-Ereignis des [`MIDIPort`](/de/docs/Web/API/MIDIPort)-Interfaces wird ausgelöst, wenn ein Port den Zustand von geöffnet auf geschlossen oder von geschlossen auf geöffnet ändert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("statechange", (event) => { })

onstatechange = (event) => { }
```

## Ereignistyp

Ein [`MIDIConnectionEvent`](/de/docs/Web/API/MIDIConnectionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MIDIConnectionEvent")}}

## Ereigniseigenschaften

- [`MIDIConnectionEvent.port`](/de/docs/Web/API/MIDIConnectionEvent/port) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf eine [`MIDIPort`](/de/docs/Web/API/MIDIPort)-Instanz für einen Port zurück, der verbunden oder getrennt wurde.

## Beispiel

Im folgenden Beispiel wird der aktuelle Zustand [`MIDIPort.state`](/de/docs/Web/API/MIDIPort/state) jedes Mal protokolliert, wenn er sich ändert.

```js
port.onstatechange = (event) => {
  console.log(port.state);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
