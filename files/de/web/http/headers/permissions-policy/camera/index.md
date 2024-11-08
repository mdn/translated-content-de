---
title: "Permissions-Policy: camera"
slug: Web/HTTP/Headers/Permissions-Policy/camera
l10n:
  sourceCommit: 7cd4706990ab95794415aee05ba0a9662e742a17
---

{{HTTPSidebar}}{{SeeCompatTable}}

Die HTTP-Direktive {{HTTPHeader("Permissions-Policy")}} `camera` kontrolliert, ob das aktuelle Dokument Videoeingabegeräte verwenden darf.

Insbesondere, wenn eine definierte Richtlinie die Verwendung dieser Funktion blockiert, geben Aufrufe von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) ein abgelehntes {{jsxref("Promise")}} mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) zurück.

## Syntax

```http
Permissions-Policy: camera=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis erteilt wird, die Funktion zu nutzen. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Whitelist für `camera` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
