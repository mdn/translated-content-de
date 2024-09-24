---
title: "Navigator: hid-Eigenschaft"
short-title: hid
slug: Web/API/Navigator/hid
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebHID API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte Eigenschaft **`Navigator.hid`** gibt ein {{domxref("HID")}}-Objekt zurück, das Methoden zum Verbinden mit HID-Geräten, zum Auflisten angeschlossener HID-Geräte und Ereignishandler für verbundene HID-Geräte bereitstellt.

Wenn eine definierte [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) die Nutzung von WebHID blockiert, wird die `Navigator.hid`-Eigenschaft nicht verfügbar sein.

## Wert

Ein {{domxref("HID")}}-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebHID API](/de/docs/Web/API/WebHID_API)
