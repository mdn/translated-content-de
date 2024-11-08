---
title: "Permissions-Policy: display-capture"
slug: Web/HTTP/Headers/Permissions-Policy/display-capture
l10n:
  sourceCommit: 7cd4706990ab95794415aee05ba0a9662e742a17
---

{{HTTPSidebar}}{{SeeCompatTable}}

Die HTTP-{{HTTPHeader("Permissions-Policy")}}-Headerdirektive `display-capture` steuert, ob das Dokument die [Screen Capture API](/de/docs/Web/API/Screen_Capture_API) verwenden darf, also [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia), um den Bildschirminhalt zu erfassen.

Wenn `display-capture` in einem Dokument deaktiviert ist, kann das Dokument keine Bildschirmaufnahme über [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) starten und eine `NotAllowedError`-Ausnahme wird ausgelöst.

## Syntax

```http
Permissions-Policy: display-capture=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung des Features erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Zulassungsliste für `display-capture` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy)
- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
