---
title: "Permissions-Policy: display-capture"
slug: Web/HTTP/Headers/Permissions-Policy/display-capture
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der Direktive `display-capture` steuert, ob das Dokument berechtigt ist, die [Screen Capture API](/de/docs/Web/API/Screen_Capture_API), d.h. [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) zur Erfassung des Bildschirminhalts zu verwenden.

Wenn `display-capture` in einem Dokument deaktiviert ist, kann das Dokument keine Bildschirmaufnahme über [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) starten und wird eine `NotAllowedError`-Ausnahme auslösen.

## Syntax

```http
Permissions-Policy: display-capture=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Allowlist für `display-capture` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
