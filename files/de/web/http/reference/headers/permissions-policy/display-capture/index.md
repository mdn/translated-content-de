---
title: "Permissions-Policy: display-capture Richtlinie"
short-title: display-capture
slug: Web/HTTP/Reference/Headers/Permissions-Policy/display-capture
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

Der HTTP {{HTTPHeader("Permissions-Policy")}} Header `display-capture` Richtlinie steuert, ob das Dokument berechtigt ist, die [Screen Capture API](/de/docs/Web/API/Screen_Capture_API) zu verwenden, d.h. [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia), um den Bildschirminhalt aufzunehmen.

Wenn `display-capture` in einem Dokument deaktiviert ist, kann das Dokument die Bildschirmaufnahme über [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) nicht initiieren und wird eine `NotAllowedError` Ausnahme auslösen.

## Syntax

```http
Permissions-Policy: display-capture=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die standardmäßige Allowlist für `display-capture` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
