---
title: "Permissions-Policy: screen-wake-lock-Direktive"
short-title: screen-wake-lock
slug: Web/HTTP/Reference/Headers/Permissions-Policy/screen-wake-lock
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP {{HTTPHeader("Permissions-Policy")}}-Header mit der **`screen-wake-lock`**-Direktive steuert, ob das aktuelle Dokument die [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API) verwenden darf, um anzuzeigen, dass das Gerät den Bildschirm nicht dimmen oder ausschalten soll.

Insbesondere wenn eine definierte Richtlinie die Nutzung dieses Features blockiert, werden Aufrufe von [`WakeLock.request()`](/de/docs/Web/API/WakeLock/request) ein {{jsxref("Promise")}} zurückgeben, das mit einer [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `NotAllowedError` abgelehnt wird.

## Syntax

```http
Permissions-Policy: screen-wake-lock=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung des Features erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-`allowlist` für `screen-wake-lock` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API)
- {{HTTPHeader('Permissions-Policy')}}-Header
- [Berechtigungsrichtlinien](/de/docs/Web/HTTP/Guides/Permissions_Policy)
