---
title: "MIDIPort: statechange Ereignis"
short-title: statechange
slug: Web/API/MIDIPort/statechange_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Das **`statechange`** Ereignis der [`MIDIPort`](/de/docs/Web/API/MIDIPort)-Schnittstelle wird ausgelöst, wenn ein Port von offen zu geschlossen oder von geschlossen zu offen wechselt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("statechange", (event) => { })

onstatechange = (event) => { }
```

## Ereignistyp

Ein [`MIDIConnectionEvent`](/de/docs/Web/API/MIDIConnectionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MIDIConnectionEvent")}}

## Beispiel

Im folgenden Beispiel wird der aktuelle Zustand von [`MIDIPort.state`](/de/docs/Web/API/MIDIPort/state) jedes Mal protokolliert, wenn er sich ändert.

```js
port.onstatechange = (event) => {
  console.log(port.state);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
