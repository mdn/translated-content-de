---
title: "Permissions-Policy: microphone"
slug: Web/HTTP/Headers/Permissions-Policy/microphone
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der HTTP-{{HTTPHeader("Permissions-Policy")}}-Header `microphone`-Direktive steuert, ob das aktuelle Dokument Audioeingabegeräte verwenden darf.

Konkret, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, werden Aufrufe von {{domxref("MediaDevices.getUserMedia()")}} ein {{jsxref("Promise")}} zurückgeben, das mit einem `NotAllowedError`-{{domxref("DOMException")}} abgelehnt wird.

## Syntax

```http
Permissions-Policy: microphone=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung erteilt wird, die Funktion zu verwenden. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die standardmäßige Erlaubnisliste für `microphone` ist `self`.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy)
