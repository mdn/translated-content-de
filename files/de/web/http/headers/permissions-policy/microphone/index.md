---
title: "Permissions-Policy: microphone"
slug: Web/HTTP/Headers/Permissions-Policy/microphone
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} `microphone`-Direktive steuert, ob das aktuelle Dokument berechtigt ist, Audioeingabegeräte zu verwenden.

Insbesondere, wenn eine definierte Richtlinie die Nutzung dieses Features blockiert, werden Aufrufe von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) ein {{jsxref("Promise")}} zurückgeben, das mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) abgelehnt wird.

## Syntax

```http
Permissions-Policy: microphone=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis erteilt wird, die Funktion zu nutzen. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die standardmäßige Erlaubnisliste für `microphone` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
