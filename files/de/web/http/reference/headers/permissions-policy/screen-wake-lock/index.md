---
title: "Permissions-Policy: screen-wake-lock"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/screen-wake-lock
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{SeeCompatTable}}

Die HTTP-{{HTTPHeader("Permissions-Policy")}}-Direktive **`screen-wake-lock`** steuert, ob das aktuelle Dokument die Verwendung der [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API) erlauben darf, um anzuzeigen, dass das Gerät den Bildschirm nicht dimmen oder ausschalten soll.

Konkret wird bei einer definierten Richtlinie, die die Verwendung dieser Funktion blockiert, ein Aufruf von [`WakeLock.request()`](/de/docs/Web/API/WakeLock/request) ein {{jsxref("Promise")}} zurückgeben, das mit einem [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `NotAllowedError` abgelehnt wird.

## Syntax

```http
Permissions-Policy: screen-wake-lock=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-allowlist für `screen-wake-lock` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API)
- {{HTTPHeader('Permissions-Policy')}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
