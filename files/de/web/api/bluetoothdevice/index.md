---
title: BluetoothGerät
slug: Web/API/BluetoothDevice
l10n:
  sourceCommit: f33c6e8a7204272b90d8f005f3d8c743333d7dbf
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das BluetoothGerät-Interface der [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) repräsentiert ein Bluetooth-Gerät innerhalb einer bestimmten Skriptausführungsumgebung.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- {{DOMxRef("BluetoothDevice.id")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein String, der ein Gerät eindeutig identifiziert.
- {{DOMxRef("BluetoothDevice.name")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein String, der einen lesbaren Namen für das Gerät bereitstellt.
- {{DOMxRef("BluetoothDevice.gatt")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine Referenz auf den {{DOMxRef("BluetoothRemoteGATTServer")}} des Geräts.

## Instanz-Methoden

- {{DOMxRef("BluetoothDevice.watchAdvertisements()")}} {{Experimental_Inline}}
  - : Ein {{jsxref("Promise")}}, das sich zu `undefined` auflöst oder mit einem Fehler abgelehnt wird, wenn Anzeigen aus irgendeinem Grund nicht gezeigt werden können.
- {{DOMxRef("BluetoothDevice.forget()")}} {{Experimental_Inline}}
  - : Bietet der Seite eine Möglichkeit, den Zugriff auf ein Gerät zu widerrufen, für das der Benutzer Zugriff gewährt hat.

## Ereignisse

Hören Sie auf diese Ereignisse mittels {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder indem Sie einen Ereignis-Listener der `oneventname` Eigenschaft dieses Interfaces zuweisen.

- {{DOMxRef("BluetoothDevice/gattserverdisconnected_event", "gattserverdisconnected")}} {{experimental_inline}}
  - : Wird auf einem Gerät ausgelöst, wenn eine aktive GATT-Verbindung verloren geht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
