---
title: BluetoothDevice
slug: Web/API/BluetoothDevice
l10n:
  sourceCommit: f33c6e8a7204272b90d8f005f3d8c743333d7dbf
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das `BluetoothDevice` Interface der [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) repräsentiert ein Bluetooth-Gerät innerhalb einer speziellen Skript-Ausführungsumgebung.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`BluetoothDevice.id`](/de/docs/Web/API/BluetoothDevice/id) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine Zeichenkette, die ein Gerät eindeutig identifiziert.
- [`BluetoothDevice.name`](/de/docs/Web/API/BluetoothDevice/name) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine Zeichenkette, die einen lesbaren Namen für das Gerät bereitstellt.
- [`BluetoothDevice.gatt`](/de/docs/Web/API/BluetoothDevice/gatt) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein Verweis auf den [`BluetoothRemoteGATTServer`](/de/docs/Web/API/BluetoothRemoteGATTServer) des Geräts.

## Instanzmethoden

- [`BluetoothDevice.watchAdvertisements()`](/de/docs/Web/API/BluetoothDevice/watchAdvertisements) {{Experimental_Inline}}
  - : Ein {{jsxref("Promise")}}, das auf `undefined` aufgelöst wird oder mit einem Fehler zurückgewiesen wird, falls Anzeigen aus irgendeinem Grund nicht angezeigt werden können.
- [`BluetoothDevice.forget()`](/de/docs/Web/API/BluetoothDevice/forget) {{Experimental_Inline}}
  - : Bietet eine Möglichkeit für die Seite, den Zugriff auf ein Gerät zu widerrufen, zu dem der Benutzer Zugriff gewährt hat.

## Ereignisse

Hören Sie auf diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuweisen eines Ereignis-Listeners zur `oneventname`-Eigenschaft dieses Interfaces.

- [`gattserverdisconnected`](/de/docs/Web/API/BluetoothDevice/gattserverdisconnected_event) {{experimental_inline}}
  - : Wird auf einem Gerät ausgelöst, wenn eine aktive GATT-Verbindung verloren geht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
