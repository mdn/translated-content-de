---
title: "Permissions-Policy: `serial` Direktive"
short-title: serial
slug: Web/HTTP/Reference/Headers/Permissions-Policy/serial
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

Der HTTP-{{HTTPHeader("Permissions-Policy")}}-Header `serial`-Direktive steuert, ob das aktuelle Dokument die [Web Serial API](/de/docs/Web/API/Web_Serial_API) verwenden darf, um mit seriellen Geräten zu kommunizieren, die entweder direkt über einen seriellen Port oder über USB- oder Bluetooth-Geräte, die einen seriellen Port emulieren, verbunden sind.

Insbesondere, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, werden die Aufrufe [`Serial.requestPort()`](/de/docs/Web/API/Serial/requestPort) und [`Serial.getPorts()`](/de/docs/Web/API/Serial/getPorts) ein {{jsxref("Promise")}} zurückgeben, das mit einer [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `SecurityError` abgelehnt wird.

## Syntax

```http
Permissions-Policy: serial=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung erteilt wird, diese Funktion zu verwenden. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Berechtigungsliste für `serial` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
