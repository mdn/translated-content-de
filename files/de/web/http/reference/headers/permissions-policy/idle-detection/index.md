---
title: "Permissions-Policy: idle-detection"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/idle-detection
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{SeeCompatTable}}

Die HTTP {{HTTPHeader("Permissions-Policy")}}-Header-Direktive `idle-detection` steuert, ob das aktuelle Dokument die [Idle Detection API](/de/docs/Web/API/Idle_Detection_API) verwenden darf, um zu erkennen, wann Benutzer mit ihren Geräten interagieren, beispielsweise um den Status "verfügbar"/"abwesend" in Chat-Anwendungen zu melden.

Speziell dort, wo eine definierte Richtlinie die Nutzung dieser Funktion blockiert, werden Aufrufe von [`IdleDetector.start()`](/de/docs/Web/API/IdleDetector/start) ein {{jsxref("Promise")}} zurückgeben, das mit einer [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `NotAllowedError` ablehnt.

## Syntax

```http
Permissions-Policy: idle-detection=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis erteilt wird, die Funktion zu nutzen. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standardrichtlinie für `idle-detection` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
