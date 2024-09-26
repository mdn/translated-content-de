---
title: "Permissions-Policy: idle-detection"
slug: Web/HTTP/Headers/Permissions-Policy/idle-detection
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}{{SeeCompatTable}}

Die HTTP-{{HTTPHeader("Permissions-Policy")}}-Header-Direktive `idle-detection` steuert, ob das aktuelle Dokument die {{domxref("Idle Detection API", "Idle Detection API", "", "nocode")}} verwenden darf, um zu erkennen, wann Benutzer mit ihren Geräten interagieren, beispielsweise um den "verfügbar"/"abwesend" Status in Chat-Anwendungen zu melden.

Konkret bedeutet dies, dass, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, Aufrufe von {{domxref("IdleDetector.start()")}} ein {{jsxref("Promise")}} zurückgeben, das mit einer {{domxref("DOMException")}} vom Typ `NotAllowedError` abgelehnt wird.

## Syntax

```http
Permissions-Policy: idle-detection=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Berechtigungsliste für `idle-detection` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
