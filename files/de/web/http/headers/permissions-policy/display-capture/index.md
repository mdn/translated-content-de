---
title: "Permissions-Policy: display-capture"
slug: Web/HTTP/Headers/Permissions-Policy/display-capture
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der HTTP-{{HTTPHeader("Permissions-Policy")}}-Header mit der Direktive `display-capture` kontrolliert, ob das Dokument berechtigt ist, die [Screen Capture API](/de/docs/Web/API/Screen_Capture_API), also {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}}, zu verwenden, um den Bildschirminhalt aufzunehmen.

Wenn `display-capture` in einem Dokument deaktiviert ist, wird das Dokument nicht in der Lage sein, die Bildschirmaufnahme über {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} zu starten und wird eine `NotAllowedError`-Ausnahme auslösen.

## Syntax

```http
Permissions-Policy: display-capture=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standardliste für `display-capture` ist `self`.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Berechtigungsrichtlinie (Permissions Policy)](/de/docs/Web/HTTP/Permissions_Policy)
- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
