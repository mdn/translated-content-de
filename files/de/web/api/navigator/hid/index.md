---
title: "Navigator: hid-Eigenschaft"
short-title: hid
slug: Web/API/Navigator/hid
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("WebHID API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`Navigator.hid`**-Eigenschaft ist eine schreibgeschützte Eigenschaft, die ein [`HID`](/de/docs/Web/API/HID)-Objekt zurückgibt. Dieses Objekt bietet Methoden zum Zugriff auf HID-Geräteverbindungen sowie auf Ereignisse, die ausgelöst werden, wenn der Benutzeragent eine Verbindung zu einem Gerät herstellt oder trennt.

Wenn eine definierte [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) die Nutzung von WebHID blockiert, wird die `Navigator.hid`-Eigenschaft nicht verfügbar sein.

## Wert

Ein [`HID`](/de/docs/Web/API/HID)-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebHID API](/de/docs/Web/API/WebHID_API)
