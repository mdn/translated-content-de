---
title: "WorkerNavigator: hid-Eigenschaft"
short-title: hid
slug: Web/API/WorkerNavigator/hid
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("WebHID API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`WorkerNavigator.hid`**-Eigenschaft ist schreibgeschützt und gibt ein [`HID`](/de/docs/Web/API/HID)-Objekt zurück, das Methoden für den Zugriff auf HID-Geräteverbindungen und Ereignisse bereitstellt, die ausgelöst werden, wenn der Benutzeragent eine Verbindung zu einem Gerät herstellt oder die Verbindung zu einem Gerät trennt.

Wenn eine definierte [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) die Nutzung von WebHID blockiert, steht die `WorkerNavigator.hid`-Eigenschaft nicht zur Verfügung.

## Wert

Ein [`HID`](/de/docs/Web/API/HID)-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebHID API](/de/docs/Web/API/WebHID_API)
