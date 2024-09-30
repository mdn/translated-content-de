---
title: Web Bluetooth API
slug: Web/API/Web_Bluetooth_API
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{DefaultAPISidebar("Bluetooth API")}}{{SeeCompatTable}}

Die Web Bluetooth API bietet die Möglichkeit, mit Bluetooth Low Energy Peripheriegeräten zu verbinden und zu interagieren.

> [!NOTE]
> Diese API ist _nicht verfügbar_ in [Web Workers](/de/docs/Web/API/Web_Workers_API) (nicht über [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) verfügbar).

## Schnittstellen

- [`Bluetooth`](/de/docs/Web/API/Bluetooth)
  - : Bietet Methoden zur Abfrage der Bluetooth-Verfügbarkeit und zur Anforderung des Zugriffs auf Geräte.
- [`BluetoothCharacteristicProperties`](/de/docs/Web/API/BluetoothCharacteristicProperties)
  - : Bietet Eigenschaften einer bestimmten `BluetoothRemoteGATTCharacteristic`.
- [`BluetoothDevice`](/de/docs/Web/API/BluetoothDevice)
  - : Stellt ein Bluetooth-Gerät innerhalb einer bestimmten Skriptausführungsumgebung dar.
- [`BluetoothRemoteGATTCharacteristic`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic)
  - : Stellt eine GATT-Charakteristik dar, die ein grundlegendes Datenelement ist, das weitere Informationen über einen Dienst eines Peripheriegeräts bereitstellt.
- [`BluetoothRemoteGATTDescriptor`](/de/docs/Web/API/BluetoothRemoteGATTDescriptor)
  - : Stellt einen GATT-Deskriptor dar, der weitere Informationen über den Wert einer Charakteristik liefert.
- [`BluetoothRemoteGATTServer`](/de/docs/Web/API/BluetoothRemoteGATTServer)
  - : Stellt einen GATT-Server auf einem entfernten Gerät dar.
- [`BluetoothRemoteGATTService`](/de/docs/Web/API/BluetoothRemoteGATTService)
  - : Stellt einen Dienst dar, der von einem GATT-Server bereitgestellt wird, einschließlich eines Geräts, einer Liste von referenzierten Diensten und einer Liste der Eigenschaften dieses Dienstes.

## Erweiterungen zu anderen Schnittstellen

Die Bluetooth API erweitert die folgenden APIs und fügt die aufgeführten Funktionen hinzu.

### Navigator

- [`Navigator.bluetooth`](/de/docs/Web/API/Navigator/bluetooth)
  - : Gibt ein [`Bluetooth`](/de/docs/Web/API/Bluetooth)-Objekt für das aktuelle Dokument zurück und bietet Zugriff auf die Funktionalitäten der Web Bluetooth API.

## Sicherheitsüberlegungen

Die Web Bluetooth API kann nur in einem sicheren Kontext verwendet werden.

Der Zugriff auf die API wird durch die [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) Direktive {{HTTPHeader("Permissions-Policy/bluetooth","bluetooth")}} gesteuert.
Die Standard-Zulassungsliste für die `bluetooth` Richtlinie ist `self`, was die Bluetooth-Verwendung in gleich-herkunft Embedded Frames ermöglicht, den Zugriff von Drittanbieterinhalten jedoch standardmäßig verhindert.
Der Zugriff über ursprüngliche Grenzen hinweg wird aktiviert, indem die zulässigen Ursprünge sowohl in der `Permissions-Policy: bluetooth` HTTP-Header als auch im gewünschten `<iframe>` angegeben werden.

Um die Funktion nutzen zu können, muss der Benutzer zunächst eine explizite Genehmigung erteilen (es wird keine Zugriffsanfrage angezeigt, wenn sie aus anderen Gründen, wie z.B. durch eine Permissions Policy blockiert, nicht erlaubt ist).
Die Genehmigungsaufforderung wird angezeigt, wenn [`Bluetooth.requestDevice()`](/de/docs/Web/API/Bluetooth/requestDevice) aufgerufen wird, um den Zugriff auf ein neues Bluetooth-Gerät anzufordern, für das keine Genehmigung erteilt wurde (das besitzende globale Objekt muss außerdem eine [transient activation](/de/docs/Glossary/transient_activation) haben).
Sie können [`Bluetooth.getDevices()`](/de/docs/Web/API/Bluetooth/getDevices) verwenden, um alle Geräte abzurufen, für die der Website zuvor eine Genehmigung erteilt wurde.

Die [Permissions API](/de/docs/Web/API/Permissions_API) Methode [`navigator.permissions.query()`](/de/docs/Web/API/Permissions/query) kann mit der `bluetooth` Berechtigung verwendet werden, um zu testen, ob eine Website die Erlaubnis hat, Bluetooth-Geräte zu verwenden.
Der Berechtigungsstatus wird `granted` (erlaubt), `denied` (abgelehnt) oder `prompt` (erfordert die Anerkennung einer Aufforderung durch den Benutzer) sein:

```js
const btPermission = await navigator.permissions.query({ name: "bluetooth" });
if (btPermission.state !== "denied") {
  // Do something
}
```

<!-- The section below is specification correct, but not implemented at time of writing: https://github.com/WebBluetoothCG/web-bluetooth/issues/620#issuecomment-1986689299.
-->
<!--
You can also use `query()` to directly retrieve devices that have previously been granted permission for the site.
For example, the following code (modified from the example in the specification) returns the last Bluetooth device that was used, and for which the user granted permission:

```js
const btPermission = await navigator.permissions.query({
  name: "bluetooth",
  deviceId: sessionStorage.lastDevice,
});
if (result.devices.length == 1) {
  return result.devices[0];
} else {
  throw new DOMException("Lost permission", "NotFoundError");
}
```

Note that the options that can be passed to `query()` for the `bluetooth` permission are the same as the options that can be passed as arguments to [`Bluetooth.requestDevice()`](/de/docs/Web/API/Bluetooth/requestDevice).
The returned {{jsxref("Promise")}} resolves to a `BluetoothPermissionResult`, an extended [`PermissionStatus`](/de/docs/Web/API/PermissionStatus) object that returns an array of permitted devices in its `devices` property.
-->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
