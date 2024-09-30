---
title: "Navigator: requestMIDIAccess()-Methode"
short-title: requestMIDIAccess()
slug: Web/API/Navigator/requestMIDIAccess
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("Web MIDI API")}}{{SecureContext_Header}}

Die **`requestMIDIAccess()`**-Methode des [`Navigator`](/de/docs/Web/API/Navigator)-Interfaces gibt ein {{jsxref('Promise')}} zurück, das eine Anforderung für den Zugriff auf MIDI-Geräte auf dem System eines Benutzers darstellt.
Diese Methode ist Teil der [Web MIDI API](/de/docs/Web/API/Web_MIDI_API), die Zugriff auf, Auflistung von und Manipulation von MIDI-Geräten ermöglicht.

Diese Methode kann den Benutzer um Zugriff auf die auf seinem System verfügbaren MIDI-Geräte bitten oder eine zuvor festgelegte Präferenz verwenden, um den Zugriff zu gewähren oder zu verweigern.
Wenn die Erlaubnis erteilt wird, wird das {{jsxref('Promise')}} aufgelöst und ein [`MIDIAccess`](/de/docs/Web/API/MIDIAccess)-Objekt zurückgegeben.

## Syntax

```js-nolint
requestMIDIAccess()
requestMIDIAccess(MIDIOptions)
```

### Parameter

- `MIDIOptions` {{optional_inline}}
  - : Ein {{jsxref('Object')}}, das Optionen darstellt, die in die Methode übergeben werden. Diese Optionen sind:
    - `sysex`
      - : Ein {{jsxref('Boolean')}}-Wert, der, wenn auf `true` gesetzt, die Möglichkeit ermöglicht, Systemausschlussnachrichten (sysex) zu senden und zu empfangen. Der Standardwert ist `false`.
    - `software`
      - : Ein {{jsxref('Boolean')}}-Wert, der, wenn auf `true` gesetzt, dem System ermöglicht, installierte Software-Synthesizer zu nutzen. Der Standardwert ist `false`.

### Rückgabewert

Ein {{jsxref('Promise')}} das mit einem [`MIDIAccess`](/de/docs/Web/API/MIDIAccess)-Objekt aufgelöst wird.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Dokument oder die Seite aufgrund der Benutzernavigation geschlossen wird.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das zugrunde liegende System Fehler verursacht.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das System die Funktion oder Optionen nicht unterstützt.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Benutzer oder das System der Anwendung nicht erlaubt, ein [MIDIAccess](/de/docs/Web/API/MIDIAccess)-Objekt mit den angeforderten Optionen zu erstellen, oder wenn das Dokument die Funktion nicht verwenden darf (zum Beispiel aufgrund einer [Permission Policy](/de/docs/Web/HTTP/Permissions_Policy), oder weil der Benutzer eine Berechtigungsanfrage zuvor abgelehnt hat).

## Sicherheitsanforderungen

Der Zugriff auf die API unterliegt folgenden Einschränkungen:

- Die Methode muss in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) aufgerufen werden.
- Der Zugriff kann durch die HTTP-[Permission Policy](/de/docs/Web/HTTP/Permissions_Policy) [`midi`](/de/docs/Web/HTTP/Headers/Permissions-Policy/midi) beschränkt werden.
- Der Benutzer muss der Nutzung der API ausdrücklich zustimmen, entweder über einen benutzerspezifischen Mechanismus oder, wenn zuvor die Erlaubnis erteilt wurde.
  Beachten Sie, dass, wenn der Zugriff durch eine Berechtigungsrichtlinie verweigert wird, dies nicht durch eine Benutzererlaubnis gewährt werden kann.

Der Berechtigungsstatus kann mit der [Permissions API](/de/docs/Web/API/Permissions_API)-Methode [`navigator.permissions.query()`](/de/docs/Web/API/Permissions/query) abgefragt werden, wobei ein Berechtigungsdeskriptor mit der `midi`-Berechtigung und (optional) `sysex`-Eigenschaft übergeben wird:

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

Im folgenden Beispiel gibt die Methode `Navigator.requestMIDIAccess()` das [`MIDIAccess`](/de/docs/Web/API/MIDIAccess)-Objekt zurück, welches Zugriff auf Informationen über die Ein- und Ausgabemidianschlüsse bietet.

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
