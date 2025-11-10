---
title: "Permissions-Policy: captured-surface-control-Direktive"
short-title: captured-surface-control
slug: Web/HTTP/Reference/Headers/Permissions-Policy/captured-surface-control
l10n:
  sourceCommit: b67c2be9feee1463ea5a27e5c7b3e0062162354f
---

{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der Direktive `captured-surface-control` steuert, ob das Dokument berechtigt ist, die [Captured Surface Control API](/de/docs/Web/API/Screen_Capture_API/Captured_Surface_Control) zu verwenden. Insbesondere werden die Methoden [`forwardWheel()`](/de/docs/Web/API/CaptureController/forwardWheel), [`increaseZoomLevel()`](/de/docs/Web/API/CaptureController/increaseZoomLevel), [`decreaseZoomLevel()`](/de/docs/Web/API/CaptureController/decreaseZoomLevel) und [`resetZoomLevel()`](/de/docs/Web/API/CaptureController/resetZoomLevel) durch diese Direktive gesteuert.

Das von den Hauptmethoden der API zurückgegebene Versprechen wird mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) abgelehnt, wenn die Erlaubnis nicht gegeben ist.

## Syntax

```http
Permissions-Policy: captured-surface-control=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung des Features erteilt wurde. Weitere Informationen finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Allowlist für `captured-surface-control` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Captured Surface Control API](/de/docs/Web/API/Screen_Capture_API/Captured_Surface_Control)
