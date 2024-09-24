---
title: "Permissions-Policy: idle-detection"
slug: Web/HTTP/Headers/Permissions-Policy/idle-detection
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}{{SeeCompatTable}}

Die HTTP {{HTTPHeader("Permissions-Policy")}} Header-Direktive `idle-detection` steuert, ob das aktuelle Dokument die {{domxref("Idle Detection API", "Idle Detection API", "", "nocode")}} verwenden darf, um zu erkennen, wann Benutzer mit ihren Geräten interagieren, beispielsweise um den "verfügbar"/"abwesend" Status in Chat-Anwendungen zu melden.

Insbesondere wenn eine definierte Richtlinie die Verwendung dieses Features blockiert, werden {{domxref("IdleDetector.start()")}} Aufrufe ein {{jsxref("Promise")}} zurückgeben, das mit einer {{domxref("DOMException")}} des Typs `NotAllowedError` ablehnt.

## Syntax

```http
Permissions-Policy: idle-detection=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung des Features erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standardliste für `idle-detection` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Berechtigungsrichtlinie (Permissions Policy)](/de/docs/Web/HTTP/Permissions_Policy)
