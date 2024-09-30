---
title: "Permissions-Policy: midi"
slug: Web/HTTP/Headers/Permissions-Policy/midi
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}{{SeeCompatTable}}

Die HTTP-Headerdirektive {{HTTPHeader("Permissions-Policy")}} `midi` steuert, ob das aktuelle Dokument die Verwendung der [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) erlaubt.

Insbesondere, wenn eine definierte Richtlinie die Verwendung dieser Funktion blockiert, werden Aufrufe von [`Navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess) ein {{jsxref("Promise")}} zurückgeben, das mit einem [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `SecurityError` abgelehnt wird.

## Syntax

```http
Permissions-Policy: midi=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung dieser Funktion erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-`allowlist` für `midi` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
