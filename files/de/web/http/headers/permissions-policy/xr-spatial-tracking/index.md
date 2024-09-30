---
title: "Permissions-Policy: xr-spatial-tracking"
slug: Web/HTTP/Headers/Permissions-Policy/xr-spatial-tracking
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-{{HTTPHeader("Permissions-Policy")}}-Header `xr-spatial-tracking`-Direktive steuert, ob das aktuelle Dokument die [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) verwenden darf.

Konkret, wenn eine definierte Richtlinie die Nutzung dieses Features blockiert:

- Die Aufrufe von [`navigator.xr.isSessionSupported()`](/de/docs/Web/API/XRSystem/isSessionSupported) und [`navigator.xr.requestSession()`](/de/docs/Web/API/XRSystem/requestSession) werden ein {{jsxref("Promise")}} zurückgeben, das mit einem [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `SecurityError` abgelehnt wird.

- [`devicechange`](/de/docs/Web/API/XRSystem/devicechange_event)-Events werden auf dem [`navigator.xr`](/de/docs/Web/API/Navigator/xr)-Objekt nicht ausgelöst.

## Syntax

```http
Permissions-Policy: xr-spatial-tracking=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung des Features erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-allowlist für `xr-spatial-tracking` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- [`navigator.xr.requestSession()`](/de/docs/Web/API/XRSystem/requestSession) und [`navigator.xr.isSessionSupported()`](/de/docs/Web/API/XRSystem/isSessionSupported) und [`devicechange`](/de/docs/Web/API/XRSystem/devicechange_event) Event auf [`navigator.xr`](/de/docs/Web/API/Navigator/xr)
- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
