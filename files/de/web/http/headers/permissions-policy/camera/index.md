---
title: "Permissions-Policy: camera"
slug: Web/HTTP/Headers/Permissions-Policy/camera
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der HTTP-{{HTTPHeader("Permissions-Policy")}}-Header
`camera`-Direktive steuert, ob das aktuelle Dokument berechtigt ist,
Videoeingabegeräte zu verwenden.

Insbesondere, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, werden {{domxref("MediaDevices.getUserMedia()")}}-Aufrufe ein {{jsxref("Promise")}} zurückgeben, das mit einem `NotAllowedError`-{{domxref("DOMException")}} abgelehnt wird.

## Syntax

```http
Permissions-Policy: camera=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, denen die Berechtigung zur Nutzung der Funktion erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Allowlist für `camera` ist `self`.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
