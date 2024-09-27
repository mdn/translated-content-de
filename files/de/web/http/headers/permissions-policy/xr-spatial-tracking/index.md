---
title: "Permissions-Policy: xr-spatial-tracking"
slug: Web/HTTP/Headers/Permissions-Policy/xr-spatial-tracking
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}{{SeeCompatTable}}

Die HTTP-{{HTTPHeader("Permissions-Policy")}}-Headerdirektive `xr-spatial-tracking` steuert, ob das aktuelle Dokument die [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) verwenden darf.

Konkret, wenn eine definierte Richtlinie die Nutzung dieses Features blockiert:

- Rückgaben von [`navigator.xr.isSessionSupported()`](/de/docs/Web/API/XRSystem/isSessionSupported) und [`navigator.xr.requestSession()`](/de/docs/Web/API/XRSystem/requestSession) rufen ein {{jsxref("Promise")}} auf, das mit einer [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `SecurityError` abgelehnt wird.

- [`devicechange`](/de/docs/Web/API/XRSystem/devicechange_event)-Ereignisse werden nicht auf dem [`navigator.xr`](/de/docs/Web/API/Navigator/xr)-Objekt ausgelöst.

## Syntax

```http
Permissions-Policy: xr-spatial-tracking=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung des Features erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Whitelist für `xr-spatial-tracking` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- [`navigator.xr.requestSession()`](/de/docs/Web/API/XRSystem/requestSession), und [`navigator.xr.isSessionSupported()`](/de/docs/Web/API/XRSystem/isSessionSupported) und [`devicechange`](/de/docs/Web/API/XRSystem/devicechange_event)-Ereignis auf [`navigator.xr`](/de/docs/Web/API/Navigator/xr)
- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
