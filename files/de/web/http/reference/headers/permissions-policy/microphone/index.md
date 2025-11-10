---
title: "Permissions-Policy: Mikrofon-Direktive"
short-title: microphone
slug: Web/HTTP/Reference/Headers/Permissions-Policy/microphone
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der Direktive `microphone` steuert, ob das aktuelle Dokument Berechtigung hat, Audioeingabegeräte zu verwenden.

Insbesondere in Fällen, in denen eine definierte Richtlinie die Nutzung dieser Funktion blockiert, werden Aufrufe von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) ein {{jsxref("Promise")}} zurückgeben, das mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt wird.

## Syntax

```http
Permissions-Policy: microphone=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Zulassungsliste für `microphone` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
