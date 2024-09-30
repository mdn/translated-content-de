---
title: "Permissions-Policy: picture-in-picture"
slug: Web/HTTP/Headers/Permissions-Policy/picture-in-picture
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}} {{SeeCompatTable}}

Das HTTP-{{HTTPHeader("Permissions-Policy")}}-Header `picture-in-picture`-Direktive steuert, ob das aktuelle Dokument berechtigt ist, ein Video im [Picture-in-Picture](/de/docs/Web/API/Picture-in-Picture_API)-Modus abzuspielen.

Insbesondere, wenn eine definierte Richtlinie die Nutzung dieses Features blockiert, werden Aufrufe von [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture) einen [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `SecurityError` auslösen.

## Syntax

```http
Permissions-Policy: picture-in-picture=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung des Features erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Allowlist für `picture-in-picture` ist `*`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
