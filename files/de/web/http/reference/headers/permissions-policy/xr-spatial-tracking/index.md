---
title: "Permissions-Policy: xr-spatial-tracking Direktive"
short-title: xr-spatial-tracking
slug: Web/HTTP/Reference/Headers/Permissions-Policy/xr-spatial-tracking
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der Direktive `xr-spatial-tracking` steuert, ob dem aktuellen Dokument die Verwendung der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) gestattet ist.

Insbesondere, wenn eine definierte Richtlinie die Nutzung dieses Features blockiert:

- Die Aufrufe von [`navigator.xr.isSessionSupported()`](/de/docs/Web/API/XRSystem/isSessionSupported) und [`navigator.xr.requestSession()`](/de/docs/Web/API/XRSystem/requestSession) geben ein {{jsxref("Promise")}} zurück, das mit einem [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `SecurityError` abgelehnt wird.

- [`devicechange`](/de/docs/Web/API/XRSystem/devicechange_event) Ereignisse werden nicht am [`navigator.xr`](/de/docs/Web/API/Navigator/xr) Objekt ausgelöst.

## Syntax

```http
Permissions-Policy: xr-spatial-tracking=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung des Features erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Positivliste für `xr-spatial-tracking` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- [`navigator.xr.requestSession()`](/de/docs/Web/API/XRSystem/requestSession), und [`navigator.xr.isSessionSupported()`](/de/docs/Web/API/XRSystem/isSessionSupported) sowie das [`devicechange`](/de/docs/Web/API/XRSystem/devicechange_event) Ereignis auf [`navigator.xr`](/de/docs/Web/API/Navigator/xr)
- {{HTTPHeader("Permissions-Policy")}} Header
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
