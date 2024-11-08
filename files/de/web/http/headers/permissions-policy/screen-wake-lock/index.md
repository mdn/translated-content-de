---
title: "Permissions-Policy: screen-wake-lock"
slug: Web/HTTP/Headers/Permissions-Policy/screen-wake-lock
l10n:
  sourceCommit: 7cd4706990ab95794415aee05ba0a9662e742a17
---

{{HTTPSidebar}}{{SeeCompatTable}}

Die HTTP-Anweisung **`screen-wake-lock`** im {{HTTPHeader("Permissions-Policy")}}-Header steuert, ob das aktuelle Dokument die [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API) verwenden darf, um anzuzeigen, dass das Gerät den Bildschirm nicht dimmen oder ausschalten soll.

Insbesondere wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, werden Aufrufe von [`WakeLock.request()`](/de/docs/Web/API/WakeLock/request) ein {{jsxref("Promise")}} zurückgeben, das mit einem [`DOMException`](/de/docs/Web/API/DOMException) des Typs `NotAllowedError` abgelehnt wird.

## Syntax

```http
Permissions-Policy: screen-wake-lock=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung der Funktion erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Whitelist für `screen-wake-lock` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API)
- {{HTTPHeader('Permissions-Policy')}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
