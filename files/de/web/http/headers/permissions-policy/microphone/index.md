---
title: "Permissions-Policy: microphone"
slug: Web/HTTP/Headers/Permissions-Policy/microphone
l10n:
  sourceCommit: 7cd4706990ab95794415aee05ba0a9662e742a17
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der Direktive `microphone` steuert, ob das aktuelle Dokument Audiogeräte verwenden darf.

Insbesondere wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, werden Aufrufe von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) ein {{jsxref("Promise")}} zurückgeben, das mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt wird.

## Syntax

```http
Permissions-Policy: microphone=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung der Funktion gewährt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Whitelist für `microphone` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
