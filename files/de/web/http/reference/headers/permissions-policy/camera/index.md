---
title: "Permissions-Policy: camera"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/camera
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{SeeCompatTable}}

Die HTTP {{HTTPHeader("Permissions-Policy")}} Header-Direktive
`camera` steuert, ob das aktuelle Dokument die Verwendung von Videoeingabegeräten erlaubt.

Insbesondere, wenn eine definierte Richtlinie die Nutzung dieses Features blockiert, werden Anrufe an [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) ein {{jsxref("Promise")}} zurückgeben, das mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt wird.

## Syntax

```http
Permissions-Policy: camera=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung des Features gewährt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standardliste der Zulässigen für `camera` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
