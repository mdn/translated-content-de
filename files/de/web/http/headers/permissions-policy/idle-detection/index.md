---
title: "Permissions-Policy: idle-detection"
slug: Web/HTTP/Headers/Permissions-Policy/idle-detection
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}{{SeeCompatTable}}

Die HTTP `{{HTTPHeader("Permissions-Policy")}}`-Header-Direktive `idle-detection` steuert, ob das aktuelle Dokument die Verwendung der [Idle Detection API](/de/docs/Web/API/Idle_Detection_API) erlaubt ist, um zu erkennen, wann Benutzer mit ihren Geräten interagieren, um beispielsweise den "verfügbar"/"abwesend"-Status in Chat-Anwendungen zu melden.

Insbesondere wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, werden Aufrufe von [`IdleDetector.start()`](/de/docs/Web/API/IdleDetector/start) ein {{jsxref("Promise")}} zurückgeben, das mit einem [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `NotAllowedError` zurückgewiesen wird.

## Syntax

```http
Permissions-Policy: idle-detection=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung der Funktion erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-`allowlist` für `idle-detection` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
