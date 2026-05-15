---
title: Web MIDI API
slug: Web/API/Web_MIDI_API
l10n:
  sourceCommit: e81cf36acffe197d01b1ad282c3582ebd7b0b54d
---

{{DefaultAPISidebar("Web MIDI API")}}{{SecureContext_Header}}

Die Web MIDI API verbindet sich mit und interagiert mit Musical Instrument Digital Interface (MIDI) Geräten.

Die Schnittstellen befassen sich mit den praktischen Aspekten des Sendens und Empfangens von MIDI-Nachrichten. Daher kann die API für musikalische und nicht-musikalische Verwendungen mit jedem MIDI-Gerät genutzt werden, das mit Ihrem Computer verbunden ist.

## Schnittstellen

- [`MIDIInputMap`](/de/docs/Web/API/MIDIInputMap)
  - : Stellt alle verfügbaren MIDI-Eingangsports dar.
- [`MIDIOutputMap`](/de/docs/Web/API/MIDIOutputMap)
  - : Stellt alle verfügbaren MIDI-Ausgangsports dar.
- [`MIDIAccess`](/de/docs/Web/API/MIDIAccess)
  - : Bietet die Methoden, um Ein- und Ausgabegeräte aufzulisten und auf ein einzelnes Gerät zuzugreifen.
- [`MIDIPort`](/de/docs/Web/API/MIDIPort)
  - : Stellt einen individuellen MIDI-Port dar.
- [`MIDIInput`](/de/docs/Web/API/MIDIInput)
  - : Bietet eine Methode zur Bearbeitung von MIDI-Nachrichten von einem Eingangsport.
- [`MIDIOutput`](/de/docs/Web/API/MIDIOutput)
  - : Wartet Nachrichten an den verbundenen MIDI-Port ein. Nachrichten können sofort oder nach einer spezifizierten Verzögerung gesendet werden.
- [`MIDIMessageEvent`](/de/docs/Web/API/MIDIMessageEvent)
  - : Das Ereignis, das an das `MIDIInput` [`midimessage`](/de/docs/Web/API/MIDIInput/midimessage_event) Ereignis übergeben wird.
- [`MIDIConnectionEvent`](/de/docs/Web/API/MIDIConnectionEvent)
  - : Das Ereignis, das an die `MIDIAccess` [`statechange`](/de/docs/Web/API/MIDIAccess/statechange_event) und `MIDIPort` [`statechange`](/de/docs/Web/API/MIDIPort/statechange_event) Ereignisse übergeben wird, wenn ein Port verfügbar oder nicht verfügbar wird.

## Sicherheitsanforderungen

Der Zugriff auf die API wird unter Verwendung der Methode [`navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess) angefordert.

- Die Methode muss in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) aufgerufen werden.
- Der Zugriff kann durch die HTTP-[Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) [`midi`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/midi) gesteuert werden.
- Der Benutzer muss explizit die Erlaubnis erteilen, die API durch einen browserspezifischen Mechanismus zu nutzen, oder bereits zuvor die Erlaubnis erteilt haben.
  Beachten Sie, dass, wenn der Zugriff durch eine Berechtigungsrichtlinie verweigert wird, er nicht durch eine Benutzergenehmigung erteilt werden kann.

Der Berechtigungsstatus kann mit der [Permissions API](/de/docs/Web/API/Permissions_API) Methode [`navigator.permissions.query()`](/de/docs/Web/API/Permissions/query) abgefragt werden, indem ein Berechtigungsdeskriptor mit der `midi` Berechtigung und (optional) `sysex` Eigenschaft übergeben wird:

```js
navigator.permissions.query({ name: "midi", sysex: true }).then((result) => {
  if (result.state === "granted") {
    // Access granted.
  } else if (result.state === "prompt") {
    // Using API will prompt for permission
  }
  // Permission was denied by user prompt or permission policy
});
```

## Beispiele

### Zugriff auf den MIDI-Port

Die Methode [`navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess) gibt ein Promise zurück, das in ein [`MIDIAccess`](/de/docs/Web/API/MIDIAccess) Objekt aufgelöst wird, welches dann verwendet werden kann, um auf ein MIDI-Gerät zuzugreifen. Die Methode muss in einem sicheren Kontext aufgerufen werden.

```js
let midi = null; // global MIDIAccess object
function onMIDISuccess(midiAccess) {
  console.log("MIDI ready!");
  midi = midiAccess; // store in the global (in real usage, would probably keep in an object instance)
}

function onMIDIFailure(msg) {
  console.error(`Failed to get MIDI access - ${msg}`);
}

navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);
```

### Auflisten von Eingaben und Ausgaben

In diesem Beispiel wird die Liste der Eingangs- und Ausgangsports abgerufen und in die Konsole ausgegeben.

```js
function listInputsAndOutputs(midiAccess) {
  for (const entry of midiAccess.inputs) {
    const input = entry[1];
    console.log(
      `Input port [type:'${input.type}']` +
        ` id:'${input.id}'` +
        ` manufacturer:'${input.manufacturer}'` +
        ` name:'${input.name}'` +
        ` version:'${input.version}'`,
    );
  }

  for (const entry of midiAccess.outputs) {
    const output = entry[1];
    console.log(
      `Output port [type:'${output.type}'] id:'${output.id}' manufacturer:'${output.manufacturer}' name:'${output.name}' version:'${output.version}'`,
    );
  }
}
```

### Umgang mit MIDI-Eingaben

Dieses Beispiel gibt alle eingehenden MIDI-Nachrichten in die Konsole aus.

```js
function onMIDIMessage(event) {
  let str = `MIDI message received at timestamp ${event.timeStamp}[${event.data.length} bytes]: `;
  for (const character of event.data) {
    str += `0x${character.toString(16)} `;
  }
  console.log(str);
}

function startLoggingMIDIInput(midiAccess) {
  midiAccess.inputs.forEach((entry) => {
    entry.onmidimessage = onMIDIMessage;
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Einführung in Web MIDI](https://code.tutsplus.com/introduction-to-web-midi--cms-25220t)
- [Musikmachen im Browser](https://keithmcmillen.com/blog/making-music-in-the-browser-web-midi-api/)
