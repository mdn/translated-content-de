---
title: "Permissions-Policy: display-capture"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/display-capture
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der Direktive `display-capture` kontrolliert, ob das Dokument die Berechtigung hat, die [Screen Capture API](/de/docs/Web/API/Screen_Capture_API) zu verwenden, das heißt [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia), um den Inhalt des Bildschirms aufzunehmen.

Wenn `display-capture` in einem Dokument deaktiviert ist, kann das Dokument keine Bildschirmaufnahme über [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) initiieren und es wird eine `NotAllowedError`-Ausnahme ausgelöst.

## Syntax

```http
Permissions-Policy: display-capture=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Allowlist für `display-capture` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
