---
title: "Navigator: Methode requestMIDIAccess()"
short-title: requestMIDIAccess()
slug: Web/API/Navigator/requestMIDIAccess
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("Web MIDI API")}}{{SecureContext_Header}}

Die Methode **`requestMIDIAccess()`** des {{domxref('Navigator')}}-Interfaces gibt ein {{jsxref('Promise')}} zurück, das eine Anfrage für den Zugriff auf MIDI-Geräte im System eines Benutzers darstellt. Diese Methode ist Teil der [Web MIDI API](/de/docs/Web/API/Web_MIDI_API), die eine Möglichkeit bietet, auf MIDI-Geräte zuzugreifen, sie aufzulisten und zu manipulieren.

Diese Methode kann den Benutzer um Zugriff auf die im System verfügbaren MIDI-Geräte bitten oder eine zuvor festgelegte Präferenz verwenden, um den Zugriff zu gewähren oder zu verweigern. Wenn die Erlaubnis erteilt wird, löst sich das {{jsxref('Promise')}} auf und ein [`MIDIAccess`](/de/docs/Web/API/MIDIAccess)-Objekt wird zurückgegeben.

## Syntax

```js-nolint
requestMIDIAccess()
requestMIDIAccess(MIDIOptions)
```

### Parameter

- `MIDIOptions` {{optional_inline}}
  - : Ein {{jsxref('Object')}}, das Optionen zur Übermittlung an die Methode repräsentiert. Diese Optionen sind:
    - `sysex`
      - : Ein {{jsxref('Boolean')}}-Wert, der, wenn auf `true` gesetzt, die Möglichkeit bietet, System-Exclusive (sysex) Nachrichten zu senden und zu empfangen. Der Standardwert ist `false`.
    - `software`
      - : Ein {{jsxref('Boolean')}}-Wert, der, wenn auf `true` gesetzt, dem System erlaubt, installierte Software-Synthesizer zu nutzen. Der Standardwert ist `false`.

### Rückgabewert

Ein {{jsxref('Promise')}}, das mit einem [`MIDIAccess`](/de/docs/Web/API/MIDIAccess)-Objekt aufgelöst wird.

### Ausnahmen

- `AbortError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das Dokument oder die Seite aufgrund von Benutzernavigation geschlossen wird.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das zugrunde liegende System Fehler meldet.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das Feature oder die Optionen vom System nicht unterstützt werden.
- `SecurityError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Benutzer oder das System der Anwendung die Erstellung eines [MIDIAccess](/de/docs/Web/API/MIDIAccess)-Objekts mit den angeforderten Optionen verweigert oder wenn das Dokument nicht berechtigt ist, das Feature zu verwenden (z. B. aufgrund einer [Permission Policy](/de/docs/Web/HTTP/Permissions_Policy) oder weil der Benutzer zuvor eine Berechtigungsanfrage abgelehnt hat).

## Sicherheitsanforderungen

Der Zugriff auf die API unterliegt den folgenden Einschränkungen:

- Die Methode muss in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) aufgerufen werden.
- Der Zugriff kann durch die [`midi`](/de/docs/Web/HTTP/Headers/Permissions-Policy/midi) HTTP [Permission Policy](/de/docs/Web/HTTP/Permissions_Policy) beschränkt sein.
- Der Benutzer muss der Nutzung der API ausdrücklich durch einen benutzerspezifischen Mechanismus zustimmen oder zuvor die Erlaubnis erteilt haben. Beachten Sie, dass, wenn der Zugriff durch eine Berechtigungsrichtlinie verweigert wird, dies nicht durch eine Benutzerberechtigung gewährt werden kann.

Der Berechtigungsstatus kann mit der [Permissions API](/de/docs/Web/API/Permissions_API)-Methode [`navigator.permissions.query()`](/de/docs/Web/API/Permissions/query) abgefragt werden, mit der ein Berechtigungsdeskriptor mit der Erlaubnis `midi` und der (optional) `sysex`-Eigenschaft übergeben wird:

```js
navigator.permissions.query({ name: "midi", sysex: true }).then((result) => {
  if (result.state === "granted") {
    // Zugriff gewährt.
  } else if (result.state === "prompt") {
    // Die Verwendung der API wird um Erlaubnis fragen
  }
  // Berechtigung wurde durch Benutzeraufforderung oder Berechtigungsrichtlinie verweigert
});
```

## Beispiele

### MIDI-Zugriff anfordern

Im folgenden Beispiel gibt die `Navigator.requestMIDIAccess()`-Methode das {{domxref("MIDIAccess")}}-Objekt zurück, das Zugriff auf Informationen zu den Ein- und Ausgabemidiports gibt.

```js
navigator.requestMIDIAccess().then((access) => {
  // Listen der verfügbaren MIDI-Controller erhalten
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
