---
title: "Permissions-Policy: idle-detection"
slug: Web/HTTP/Headers/Permissions-Policy/idle-detection
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}{{SeeCompatTable}}

Das HTTP {{HTTPHeader("Permissions-Policy")}}-Header `idle-detection`-Direktive steuert, ob das aktuelle Dokument die [Idle Detection API](/de/docs/Web/API/Idle_Detection_API) verwenden darf, um zu erkennen, wann Benutzer mit ihren Geräten interagieren, beispielsweise um "verfügbar"/"abwesend"-Status in Chat-Anwendungen zu melden.

Insbesondere, wenn eine definierte Richtlinie die Nutzung dieses Features blockiert, werden Aufrufe von [`IdleDetector.start()`](/de/docs/Web/API/IdleDetector/start) ein {{jsxref("Promise")}} zurückgeben, das mit einer [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `NotAllowedError` abgelehnt wird.

## Syntax

```http
Permissions-Policy: idle-detection=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung des Features erteilt wurde. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standardliste der erlaubten Ursprünge für `idle-detection` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
