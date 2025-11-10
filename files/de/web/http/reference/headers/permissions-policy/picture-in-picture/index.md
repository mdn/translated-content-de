---
title: "Permissions-Policy: picture-in-picture-Direktive"
short-title: picture-in-picture
slug: Web/HTTP/Reference/Headers/Permissions-Policy/picture-in-picture
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} `picture-in-picture` steuert, ob das aktuelle Dokument ein Video im [Picture-in-Picture](/de/docs/Web/API/Picture-in-Picture_API)-Modus abspielen darf.

Speziell, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, werden Aufrufe von [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture) eine [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `SecurityError` werfen.

## Syntax

```http
Permissions-Policy: picture-in-picture=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt ist. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standardberechtigungsliste für `picture-in-picture` ist `*`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
