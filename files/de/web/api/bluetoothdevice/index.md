---
title: BluetoothDevice
slug: Web/API/BluetoothDevice
l10n:
  sourceCommit: f33c6e8a7204272b90d8f005f3d8c743333d7dbf
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die Schnittstelle `BluetoothDevice` der [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) repräsentiert ein Bluetooth-Gerät innerhalb einer bestimmten Skript-Ausführungsumgebung.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`BluetoothDevice.id`](/de/docs/Web/API/BluetoothDevice/id) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein String, der ein Gerät eindeutig identifiziert.
- [`BluetoothDevice.name`](/de/docs/Web/API/BluetoothDevice/name) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein String, der einen menschenlesbaren Namen für das Gerät bereitstellt.
- [`BluetoothDevice.gatt`](/de/docs/Web/API/BluetoothDevice/gatt) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein Verweis auf den [`BluetoothRemoteGATTServer`](/de/docs/Web/API/BluetoothRemoteGATTServer) des Geräts.

## Instanzmethoden

- [`BluetoothDevice.watchAdvertisements()`](/de/docs/Web/API/BluetoothDevice/watchAdvertisements) {{Experimental_Inline}}
  - : Ein {{jsxref("Promise")}}, das mit `undefined` aufgelöst wird oder abgelehnt wird, wenn Werbung aus irgendeinem Grund nicht angezeigt werden kann.
- [`BluetoothDevice.forget()`](/de/docs/Web/API/BluetoothDevice/forget) {{Experimental_Inline}}
  - : Bietet der Seite eine Möglichkeit, den Zugriff auf ein Gerät, für das der Benutzer den Zugriff gewährt hat, zu widerrufen.

## Ereignisse

Hören Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuweisung eines Ereignis-Listeners zur `oneventname` Eigenschaft dieser Schnittstelle.

- [`gattserverdisconnected`](/de/docs/Web/API/BluetoothDevice/gattserverdisconnected_event) {{experimental_inline}}
  - : Wird ausgelöst, wenn eine aktive GATT-Verbindung auf einem Gerät verloren geht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
