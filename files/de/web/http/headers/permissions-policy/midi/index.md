---
title: "Permissions-Policy: midi"
slug: Web/HTTP/Headers/Permissions-Policy/midi
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-{{HTTPHeader("Permissions-Policy")}}-Header `midi`-Direktive steuert, ob das aktuelle Dokument die [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) verwenden darf.

Insbesondere, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, werden Aufrufe von {{domxref("Navigator.requestMIDIAccess()")}} ein {{jsxref("Promise")}} zurückgeben, das mit einem {{domxref("DOMException")}} vom Typ `SecurityError` abgelehnt wird.

## Syntax

```http
Permissions-Policy: midi=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung der Funktion erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Allowlist für `midi` ist `self`.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
