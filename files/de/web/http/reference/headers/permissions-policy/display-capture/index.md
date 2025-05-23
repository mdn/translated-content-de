---
title: "Permissions-Policy: display-capture directive"
short-title: display-capture
slug: Web/HTTP/Reference/Headers/Permissions-Policy/display-capture
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der Direktive `display-capture` steuert, ob das Dokument die [Screen Capture API](/de/docs/Web/API/Screen_Capture_API) verwenden darf, also [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia), um den Inhalt des Bildschirms aufzunehmen.

Wenn `display-capture` in einem Dokument deaktiviert ist, kann das Dokument keine Bildschirmaufnahme über [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) initiieren und wird eine `NotAllowedError`-Ausnahme auslösen.

## Syntax

```http
Permissions-Policy: display-capture=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung der Funktion erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Whitelist für `display-capture` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
