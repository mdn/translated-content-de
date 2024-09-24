---
title: "MIDIPort: statechange Ereignis"
short-title: statechange
slug: Web/API/MIDIPort/statechange_event
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Das **`statechange`**-Ereignis des {{domxref("MIDIPort")}}-Interfaces wird ausgelöst, wenn ein Port von offen zu geschlossen wechselt oder umgekehrt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("statechange", (event) => {});

onstatechange = (event) => {};
```

## Ereignistyp

Ein {{domxref("MIDIConnectionEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("MIDIConnectionEvent")}}

## Ereigniseigenschaften

- {{domxref("MIDIConnectionEvent.port")}} {{ReadOnlyInline}}
  - : Gibt eine Referenz zu einer {{domxref("MIDIPort")}}-Instanz für einen Port zurück, der verbunden oder getrennt wurde.

## Beispiel

Im folgenden Beispiel wird der aktuelle {{domxref("MIDIPort.state")}} jedes Mal protokolliert, wenn er sich ändert.

```js
port.onstatechange = (event) => {
  console.log(port.state);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
