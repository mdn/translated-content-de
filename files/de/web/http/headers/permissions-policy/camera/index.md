---
title: "Permissions-Policy: camera"
slug: Web/HTTP/Headers/Permissions-Policy/camera
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der HTTP-{{HTTPHeader("Permissions-Policy")}}-Header
Die `camera`-Direktive steuert, ob das aktuelle Dokument berechtigt ist, Videoeingabegeräte zu verwenden.

Speziell, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, werden Aufrufe von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) ein {{jsxref("Promise")}} zurückgeben, das mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) fehlschlägt.

## Syntax

```http
Permissions-Policy: camera=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Allowlist für `camera` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
