---
title: "Permissions-Policy: serial"
slug: Web/HTTP/Headers/Permissions-Policy/serial
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} enthält die Direktive `serial`, die steuert, ob das aktuelle Dokument die Verwendung der [Web Serial API](/de/docs/Web/API/Web_Serial_API) erlauben kann, um mit seriellen Geräten zu kommunizieren, entweder direkt über einen seriellen Port oder über USB- oder Bluetooth-Geräte, die einen seriellen Port emulieren.

Insbesondere in Fällen, in denen eine definierte Richtlinie die Nutzung dieser Funktion blockiert, werden Aufrufe von [`Serial.requestPort()`](/de/docs/Web/API/Serial/requestPort) und [`Serial.getPorts()`](/de/docs/Web/API/Serial/getPorts) ein {{jsxref("Promise")}} zurückgeben, das mit einem [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `SecurityError` abgelehnt wird.

## Syntax

```http
Permissions-Policy: serial=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung der Funktion erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-`allowlist` für `serial` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Berechtigungsrichtlinie (Permissions Policy)](/de/docs/Web/HTTP/Permissions_Policy)
