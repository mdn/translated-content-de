---
title: "Permissions-Policy: serial"
slug: Web/HTTP/Headers/Permissions-Policy/serial
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}{{SeeCompatTable}}

Die HTTP-{{HTTPHeader("Permissions-Policy")}}-Headerdirektive `serial` steuert, ob das aktuelle Dokument die {{domxref("Web Serial API", "Web Serial API", "", "nocode")}} verwenden darf, um mit seriellen Geräten zu kommunizieren, die entweder direkt über einen seriellen Port oder über USB- oder Bluetooth-Geräte, die einen seriellen Port emulieren, verbunden sind.

Insbesondere, wenn eine definierte Richtlinie die Nutzung dieses Features blockiert, werden Aufrufe von {{domxref("Serial.requestPort()")}} und {{domxref("Serial.getPorts()")}} ein {{jsxref("Promise")}} zurückgeben, das mit einem {{domxref("DOMException")}} vom Typ `SecurityError` abgelehnt wird.

## Syntax

```http
Permissions-Policy: serial=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung des Features erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für mehr Details.

## Standardrichtlinie

Die Standard-Erlaubnisliste für `serial` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
