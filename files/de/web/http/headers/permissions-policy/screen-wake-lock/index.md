---
title: "Permissions-Policy: screen-wake-lock"
slug: Web/HTTP/Headers/Permissions-Policy/screen-wake-lock
l10n:
  sourceCommit: 05a463a3bc1af6e1b1e0d6a273582d954ae00ed0
---

{{HTTPSidebar}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der Direktive **`screen-wake-lock`** steuert, ob das aktuelle Dokument die [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API) verwenden darf, um anzuzeigen, dass das Gerät den Bildschirm nicht dimmen oder ausschalten sollte.

Konkret bedeutet das, dass wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, Aufrufe von [`WakeLock.request()`](/de/docs/Web/API/WakeLock/request) ein {{jsxref("Promise")}} zurückgeben, das mit einem [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `NotAllowedError` zurückgewiesen wird.

## Syntax

```http
Permissions-Policy: screen-wake-lock=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-`allowlist` für `screen-wake-lock` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API)
- {{HTTPHeader('Permissions-Policy')}} Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
