---
title: "HID: disconnect Ereignis"
short-title: disconnect
slug: Web/API/HID/disconnect_event
l10n:
  sourceCommit: b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

Das **`disconnect`** Ereignis der {{domxref("HID")}}-Schnittstelle wird ausgelöst, wenn der Benutzeragent ein HID-Gerät trennt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder legen Sie eine Ereignis-Handler-Eigenschaft fest.

```js
addEventListener("disconnect", (event) => {});

ondisconnect = (event) => {};
```

## Ereignistyp

Ein {{domxref("HIDConnectionEvent")}}. Wird von {{domxref("Event")}} geerbt.

{{InheritanceDiagram("HIDConnectionEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften sind auch die Eigenschaften der übergeordneten Schnittstelle {{domxref("Event")}} verfügbar._

- {{domxref("HIDConnectionEvent.device", "device")}} {{ReadOnlyInline}}
  - : Das {{domxref("HIDDevice")}}, für das das Ereignis ausgelöst wird.

## Beispiele

Im folgenden Beispiel wird ein Ereignislistener registriert, um auf die Trennung eines Geräts zu hören. Der Name des Geräts wird dann mit Hilfe von {{domxref("HIDDevice.productName")}} in die Konsole geschrieben.

```js
navigator.hid.addEventListener("disconnect", ({ device }) => {
  console.log(`HID disconnected: ${device.productName}`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
