---
title: "Permissions-Policy: midi"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/midi
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der Direktive `midi` steuert, ob das aktuelle Dokument die [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) verwenden darf.

Genauer gesagt, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, werden Aufrufe von [`Navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess) ein {{jsxref("Promise")}} zurückgeben, das mit einem [`DOMException`](/de/docs/Web/API/DOMException) des Typs `SecurityError` abgelehnt wird.

## Syntax

```http
Permissions-Policy: midi=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, denen die Erlaubnis erteilt wird, die Funktion zu nutzen. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standardzugriffsliste für `midi` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
