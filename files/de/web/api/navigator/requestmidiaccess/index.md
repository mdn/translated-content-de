---
title: "Navigator: requestMIDIAccess() Methode"
short-title: requestMIDIAccess()
slug: Web/API/Navigator/requestMIDIAccess
l10n:
  sourceCommit: 76159b9e242063203699dd5e07e5eebfd65def3d
---

{{APIRef("Web MIDI API")}}{{SecureContext_Header}}

Die **`requestMIDIAccess()`** Methode der [`Navigator`](/de/docs/Web/API/Navigator) Schnittstelle gibt ein {{jsxref('Promise')}} zurück, das eine Anfrage für den Zugriff auf MIDI-Geräte auf dem System eines Benutzers darstellt.
Diese Methode ist Teil der [Web MIDI API](/de/docs/Web/API/Web_MIDI_API), die eine Möglichkeit bietet, auf MIDI-Geräte zuzugreifen, diese aufzulisten und zu manipulieren.

Diese Methode kann den Benutzer um Zugriff auf die verfügbaren MIDI-Geräte seines Systems bitten oder eine zuvor festgelegte Präferenz verwenden, um den Zugriff zu gewähren oder zu verweigern.
Wenn die Erlaubnis erteilt wird, wird das {{jsxref('Promise')}} aufgelöst und ein [`MIDIAccess`](/de/docs/Web/API/MIDIAccess) Objekt wird zurückgegeben.

## Syntax

```js-nolint
requestMIDIAccess()
requestMIDIAccess(MIDIOptions)
```

### Parameter

- `MIDIOptions` {{optional_inline}}
  - : Ein {{jsxref('Object')}} mit Optionen, die in die Methode übergeben werden können. Diese Optionen sind:
    - `sysex`
      - : Ein {{jsxref('Boolean')}} Wert, der, wenn er auf `true` gesetzt ist, die Möglichkeit bietet, System-Exklusiv-Nachrichten (sysex) zu senden und zu empfangen. Der Standardwert ist `false`.
    - `software`
      - : Ein {{jsxref('Boolean')}} Wert, der, wenn er auf `true` gesetzt ist, dem System erlaubt, installierte Software-Synthesizer zu nutzen. Der Standardwert ist `false`.

### Rückgabewert

Ein {{jsxref('Promise')}}, das mit einem [`MIDIAccess`](/de/docs/Web/API/MIDIAccess) Objekt aufgelöst wird.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Dokument oder die Seite aufgrund der Navigation des Benutzers geschlossen wird.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das zugrunde liegende System irgendwelche Fehler meldet.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Feature oder die Optionen vom System nicht unterstützt werden.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Benutzer oder das System der Anwendung verweigert, ein [MIDIAccess](/de/docs/Web/API/MIDIAccess) Objekt mit den angeforderten Optionen zu erstellen, oder wenn das Dokument das Feature nicht verwenden darf (zum Beispiel wegen einer [Permission Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) oder weil der Benutzer zuvor eine Berechtigungsanfrage abgelehnt hat).

## Sicherheitsanforderungen

Der Zugriff auf die API unterliegt den folgenden Einschränkungen:

- Die Methode muss in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) aufgerufen werden.
- Der Zugriff kann durch die [`midi`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/midi) HTTP [Permission Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesteuert werden.
- Der Benutzer muss ausdrücklich die Erlaubnis zur Nutzung der API über einen benutzerspezifischen Mechanismus erteilen oder zuvor die Erlaubnis erteilt haben.
  Beachten Sie, dass, wenn der Zugriff durch eine Berechtigungspolitik verweigert wird, diese nicht durch eine Benutzerberechtigung gewährt werden kann.

Der Berechtigungsstatus kann mittels der [Permissions API](/de/docs/Web/API/Permissions_API) Methode [`navigator.permissions.query()`](/de/docs/Web/API/Permissions/query) abgefragt werden, indem ein Berechtigungsdeskriptor mit der `midi` Berechtigung und (optionaler) `sysex` Eigenschaft übergeben wird:

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

### MIDI-Zugriff anfordern

Im folgenden Beispiel gibt die `Navigator.requestMIDIAccess()` Methode das [`MIDIAccess`](/de/docs/Web/API/MIDIAccess) Objekt zurück, das Zugriff auf Informationen über die Eingangs- und Ausgangs-MIDI-Anschlüsse bietet.

```js
navigator.requestMIDIAccess().then((access) => {
  // Get lists of available MIDI controllers
  const inputs = access.inputs.values();
  const outputs = access.outputs.values();
  // …
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web MIDI API](/de/docs/Web/API/Web_MIDI_API)
- [Einführung in Web MIDI](https://code.tutsplus.com/introduction-to-web-midi--cms-25220t)
