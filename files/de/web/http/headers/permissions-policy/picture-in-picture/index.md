---
title: "Permissions-Policy: picture-in-picture"
slug: Web/HTTP/Headers/Permissions-Policy/picture-in-picture
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der HTTP-{{HTTPHeader("Permissions-Policy")}}-Header `picture-in-picture`-Direktive steuert, ob das aktuelle Dokument berechtigt ist, ein Video im {{domxref("Picture-in-Picture API", "Picture-in-Picture", "", "nocode")}}-Modus abzuspielen.

Insbesondere wird bei einer definierten Richtlinie, die die Nutzung dieser Funktion blockiert, ein Aufruf von {{domxref("HTMLVideoElement.requestPictureInPicture()")}} einen {{domxref("DOMException")}} vom Typ `SecurityError` auslösen.

## Syntax

```http
Permissions-Policy: picture-in-picture=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis erteilt wird, die Funktion zu nutzen. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Allowlist für `picture-in-picture` ist `*`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
