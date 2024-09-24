---
title: "Permissions-Policy: xr-spatial-tracking"
slug: Web/HTTP/Headers/Permissions-Policy/xr-spatial-tracking
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-{{HTTPHeader("Permissions-Policy")}}-Header mit der Direktive `xr-spatial-tracking` steuert, ob das aktuelle Dokument die [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) verwenden darf.

Speziell, wenn eine definierte Richtlinie die Nutzung dieses Features blockiert:

- Anrufe von {{DOMxRef("XRSystem/isSessionSupported","navigator.xr.isSessionSupported()")}} und {{DOMxRef("XRSystem/requestSession","navigator.xr.requestSession()")}} geben ein {{jsxref("Promise")}} zurück, das mit einer {{domxref("DOMException")}} vom Typ `SecurityError` abgelehnt wird.

- {{domxref("XRSystem/devicechange_event", "devicechange")}}-Ereignisse werden auf dem {{DOMxRef("Navigator.xr","navigator.xr")}}-Objekt nicht ausgelöst.

## Syntax

```http
Permissions-Policy: xr-spatial-tracking=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung des Features erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standarderlaubnisliste für `xr-spatial-tracking` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- {{DOMxRef("XRSystem/requestSession","navigator.xr.requestSession()")}}, und {{DOMxRef("XRSystem/isSessionSupported","navigator.xr.isSessionSupported()")}} sowie {{domxref("XRSystem/devicechange_event", "devicechange")}}-Ereignis auf {{DOMxRef("Navigator.xr","navigator.xr")}}
- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
