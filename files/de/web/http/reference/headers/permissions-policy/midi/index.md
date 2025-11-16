---
title: "Permissions-Policy: midi-Direktive"
short-title: midi
slug: Web/HTTP/Reference/Headers/Permissions-Policy/midi
l10n:
  sourceCommit: 76159b9e242063203699dd5e07e5eebfd65def3d
---

{{SeeCompatTable}}

Der HTTP-{{HTTPHeader("Permissions-Policy")}}-Header mit der `midi`-Direktive steuert, ob das aktuelle Dokument die [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) verwenden darf.

Insbesondere wenn eine definierte Richtlinie die Verwendung dieses Features blockiert, wird der Aufruf von [`Navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess) ein {{jsxref("Promise")}} zurückgeben, das mit einem [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `NotAllowedError` abgelehnt wird.

## Syntax

```http
Permissions-Policy: midi=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung des Features erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Whitelist für `midi` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
