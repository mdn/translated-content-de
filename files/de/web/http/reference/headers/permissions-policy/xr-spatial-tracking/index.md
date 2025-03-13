---
title: "Permissions-Policy: xr-spatial-tracking"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/xr-spatial-tracking
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} `xr-spatial-tracking`-Direktive steuert, ob das aktuelle Dokument die [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) verwenden darf.

Insbesondere, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert:

- Die Aufrufe von [`navigator.xr.isSessionSupported()`](/de/docs/Web/API/XRSystem/isSessionSupported) und [`navigator.xr.requestSession()`](/de/docs/Web/API/XRSystem/requestSession) geben ein {{jsxref("Promise")}} zurück, das mit einem [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `SecurityError` abgelehnt wird.

- [`devicechange`](/de/docs/Web/API/XRSystem/devicechange_event)-Ereignisse werden nicht am [`navigator.xr`](/de/docs/Web/API/Navigator/xr)-Objekt ausgelöst.

## Syntax

```http
Permissions-Policy: xr-spatial-tracking=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis erteilt wird, das Feature zu nutzen. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standardzulassungsliste für `xr-spatial-tracking` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- [`navigator.xr.requestSession()`](/de/docs/Web/API/XRSystem/requestSession), und [`navigator.xr.isSessionSupported()`](/de/docs/Web/API/XRSystem/isSessionSupported) und [`devicechange`](/de/docs/Web/API/XRSystem/devicechange_event)-Ereignis auf [`navigator.xr`](/de/docs/Web/API/Navigator/xr)
- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
