---
title: "Berechtigungsrichtlinie: Kamera"
slug: Web/HTTP/Headers/Permissions-Policy/camera
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Die HTTP-{{HTTPHeader("Permissions-Policy")}}-Headerdirektive `camera` steuert, ob dem aktuellen Dokument die Verwendung von Videoeingabegeräten erlaubt ist.

Insbesondere wird, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, ein Aufruf von {{domxref("MediaDevices.getUserMedia()")}} ein {{jsxref("Promise")}} zurückgeben, der mit einem `NotAllowedError` {{domxref("DOMException")}} abgelehnt wird.

## Syntax

```http
Permissions-Policy: camera=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Whitelist für `camera` ist `self`.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy)
