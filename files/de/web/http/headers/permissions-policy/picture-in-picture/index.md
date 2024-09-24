---
title: "Permissions-Policy: picture-in-picture"
slug: Web/HTTP/Headers/Permissions-Policy/picture-in-picture
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der Direktive `picture-in-picture` kontrolliert, ob das aktuelle Dokument erlaubt ist, ein Video im {{domxref("Picture-in-Picture API", "Bild-im-Bild", "", "nocode")}}-Modus abzuspielen.

Konkret gilt, dass wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, Aufrufe von {{domxref("HTMLVideoElement.requestPictureInPicture()")}} einen {{domxref("DOMException")}} vom Typ `SecurityError` auslösen werden.

## Syntax

```http
Permissions-Policy: picture-in-picture=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung der Funktion erteilt wird. Siehe [„Permissions-Policy“ > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Whitelist für `picture-in-picture` ist `*`.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy)
