---
title: "MIDIAccess: statechange-Ereignis"
short-title: statechange
slug: Web/API/MIDIAccess/statechange_event
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Das **`statechange`**-Ereignis der {{domxref("MIDIAccess")}}-Schnittstelle wird ausgelöst, wenn ein neuer MIDI-Port hinzugefügt oder ein bestehender Port den Status ändert.

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
  - : Gibt eine Referenz auf eine {{domxref("MIDIPort")}}-Instanz für einen Port zurück, der verbunden oder getrennt wurde.

## Beispiel

Die Methode {{domxref("Navigator.requestMIDIAccess()")}} gibt ein Versprechen zurück, das mit einem {{domxref("MIDIAccess")}}-Objekt aufgelöst wird. Wenn ein Port seinen Zustand ändert, werden Informationen über diesen Port in die Konsole ausgegeben.

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
