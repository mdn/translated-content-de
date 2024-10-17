---
title: "WorkerNavigator: hid-Eigenschaft"
short-title: hid
slug: Web/API/WorkerNavigator/hid
l10n:
  sourceCommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{APIRef("WebHID API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`WorkerNavigator.hid`**-Eigenschaft ist eine schreibgeschützte Eigenschaft, die ein [`HID`](/de/docs/Web/API/HID)-Objekt zurückgibt. Dieses Objekt bietet Methoden zum Zugriff auf Verbindungen von HID-Geräten sowie Ereignisse, die ausgelöst werden, wenn der Benutzeragent eine Verbindung zu einem Gerät herstellt oder trennt.

Wenn eine definierte [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) die Nutzung von WebHID blockiert, wird die `WorkerNavigator.hid`-Eigenschaft nicht verfügbar sein.

## Wert

Ein [`HID`](/de/docs/Web/API/HID)-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebHID API](/de/docs/Web/API/WebHID_API)
