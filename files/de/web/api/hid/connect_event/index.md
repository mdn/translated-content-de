---
title: "HID: Verbindungsereignis"
short-title: Verbindung
slug: Web/API/HID/connect_event
l10n:
  sourceCommit: b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

Das **`connect`**-Ereignis der {{domxref("HID")}}-Schnittstelle wird ausgelöst, wenn der Benutzeragent eine Verbindung zu einem HID-Gerät herstellt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("connect", (event) => {});

onconnect = (event) => {};
```

## Ereignistyp

Ein {{domxref("HIDConnectionEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("HIDConnectionEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind die Eigenschaften der übergeordneten Schnittstelle, {{domxref("Event")}}, verfügbar._

- {{domxref("HIDConnectionEvent.device", "device")}} {{ReadOnlyInline}}
  - : Das {{domxref("HIDDevice")}}, für das das Ereignis ausgelöst wird.

## Beispiele

Im folgenden Beispiel wird ein Ereignis-Listener registriert, um auf die Verbindung eines Geräts zu hören. Der Name des Geräts wird dann mit {{domxref("HIDDevice.productName")}} in der Konsole ausgegeben.

```js
navigator.hid.addEventListener("connect", ({ device }) => {
  console.log(`HID connected: ${device.productName}`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
