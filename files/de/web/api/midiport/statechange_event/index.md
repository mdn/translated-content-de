---
title: "MIDIPort: statechange Ereignis"
short-title: statechange
slug: Web/API/MIDIPort/statechange_event
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Das **`statechange`** Ereignis der [`MIDIPort`](/de/docs/Web/API/MIDIPort) Schnittstelle wird ausgelöst, wenn sich ein Port von geöffnet zu geschlossen oder von geschlossen zu geöffnet ändert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("statechange", (event) => {});

onstatechange = (event) => {};
```

## Ereignistyp

Ein [`MIDIConnectionEvent`](/de/docs/Web/API/MIDIConnectionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MIDIConnectionEvent")}}

## Ereigniseigenschaften

- [`MIDIConnectionEvent.port`](/de/docs/Web/API/MIDIConnectionEvent/port) {{ReadOnlyInline}}
  - : Gibt eine Referenz zu einer [`MIDIPort`](/de/docs/Web/API/MIDIPort) Instanz für einen Port zurück, der verbunden oder getrennt wurde.

## Beispiel

Im folgenden Beispiel wird der aktuelle [`MIDIPort.state`](/de/docs/Web/API/MIDIPort/state) jedes Mal protokolliert, wenn er sich ändert.

```js
port.onstatechange = (event) => {
  console.log(port.state);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
