---
title: Web Bluetooth API
slug: Web/API/Web_Bluetooth_API
l10n:
  sourceCommit: ffa6f5871f50856c60983a125cef7de267be7aeb
---

{{DefaultAPISidebar("Bluetooth API")}}{{SeeCompatTable}}

Die Web Bluetooth API ermöglicht die Verbindung und Interaktion mit Bluetooth Low Energy-Peripheriegeräten.

> [!NOTE]
> Diese API ist _nicht verfügbar_ in [Web Workers](/de/docs/Web/API/Web_Workers_API) (nicht über [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) zugänglich).

## Schnittstellen

- [`Bluetooth`](/de/docs/Web/API/Bluetooth)
  - : Bietet Methoden zum Abfragen der Bluetooth-Verfügbarkeit und zum Anfordern des Zugriffs auf Geräte.
- [`BluetoothCharacteristicProperties`](/de/docs/Web/API/BluetoothCharacteristicProperties)
  - : Stellt Eigenschaften einer bestimmten `BluetoothRemoteGATTCharacteristic` bereit.
- [`BluetoothDevice`](/de/docs/Web/API/BluetoothDevice)
  - : Repräsentiert ein Bluetooth-Gerät innerhalb einer bestimmten Skript-Ausführungsumgebung.
- [`BluetoothRemoteGATTCharacteristic`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic)
  - : Repräsentiert eine GATT-Charakteristik, ein grundlegendes Datenelement, das weitere Informationen über einen Dienst eines Peripheriegeräts liefert.
- [`BluetoothRemoteGATTDescriptor`](/de/docs/Web/API/BluetoothRemoteGATTDescriptor)
  - : Repräsentiert einen GATT-Deskriptor, der weitere Informationen über den Wert einer Charakteristik liefert.
- [`BluetoothRemoteGATTServer`](/de/docs/Web/API/BluetoothRemoteGATTServer)
  - : Repräsentiert einen GATT-Server auf einem entfernten Gerät.
- [`BluetoothRemoteGATTService`](/de/docs/Web/API/BluetoothRemoteGATTService)
  - : Repräsentiert einen Dienst, der von einem GATT-Server bereitgestellt wird, einschließlich eines Geräts, einer Liste referenzierter Dienste und einer Liste der Charakteristika dieses Dienstes.

## Erweiterungen zu anderen Schnittstellen

Die Bluetooth API erweitert die folgenden APIs und fügt die aufgeführten Funktionen hinzu.

### Navigator

- [`Navigator.bluetooth`](/de/docs/Web/API/Navigator/bluetooth)
  - : Gibt ein [`Bluetooth`](/de/docs/Web/API/Bluetooth)-Objekt für das aktuelle Dokument zurück und bietet Zugriff auf die Funktionalität der Web Bluetooth API.

## Sicherheitsüberlegungen

Die Web Bluetooth API kann nur in einem sicheren Kontext verwendet werden.

Der Zugriff auf die API wird durch die [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)-Direktive {{HTTPHeader("Permissions-Policy/bluetooth","bluetooth")}} kontrolliert.
Die Standard-Zugriffsliste für die `bluetooth`-Richtlinie ist `self`, was die Bluetooth-Nutzung in gleichherkunftsverschachtelten Frames ermöglicht, jedoch standardmäßig den Zugriff von Drittinhalten verhindert.
Der ursprungsübergreifende Zugriff wird durch die Angabe der erlaubten Ursprünge sowohl im `Permissions-Policy: bluetooth`-HTTP-Header als auch im gewünschten `<iframe>` ermöglicht.

Um die Funktion nutzen zu können, muss der Benutzer zuerst ausdrücklich die Erlaubnis erteilen (er wird nicht um Zugriff gebeten, wenn dies aus anderen Gründen nicht erlaubt ist, z.B. wenn es durch eine Permissions Policy blockiert wird).
Die Berechtigungsaufforderung wird angezeigt, wenn [`Bluetooth.requestDevice()`](/de/docs/Web/API/Bluetooth/requestDevice) aufgerufen wird, um den Zugriff auf ein neues Bluetooth-Gerät zu beantragen, für das keine Berechtigung erteilt wurde (das besitzende globale Objekt muss ebenfalls eine {{Glossary("transient_activation", "transiente Aktivierung")}} haben).
Sie können [`Bluetooth.getDevices()`](/de/docs/Web/API/Bluetooth/getDevices) verwenden, um alle Geräte abzurufen, für die der Website zuvor die Berechtigung erteilt wurde.

Die Methode [`navigator.permissions.query()`](/de/docs/Web/API/Permissions/query) der [Permissions API](/de/docs/Web/API/Permissions_API) kann mit der `bluetooth`-Berechtigung verwendet werden, um zu testen, ob eine Website Berechtigung hat, Bluetooth-Geräte zu verwenden.
Der Berechtigungsstatus ist `granted`, `denied` oder `prompt` (erfordert die Bestätigung einer Aufforderung durch den Benutzer):

```js
const btPermission = await navigator.permissions.query({ name: "bluetooth" });
if (btPermission.state !== "denied") {
  // Do something
}
```

<!-- Der unten stehende Abschnitt ist spezifikationsgerecht, wurde aber zum Zeitpunkt der Erstellung noch nicht implementiert: https://github.com/WebBluetoothCG/web-bluetooth/issues/620#issuecomment-1986689299.
-->
<!--
Sie können auch `query()` verwenden, um direkt Geräte abzurufen, für die der Website zuvor die Berechtigung erteilt wurde.
Zum Beispiel gibt der folgende Code (modifiziert aus dem Beispiel in der Spezifikation) das letzte verwendete Bluetooth-Gerät zurück, für das der Benutzer die Erlaubnis erteilt hat:

```js
const btPermission = await navigator.permissions.query({
  name: "bluetooth",
  deviceId: sessionStorage.lastDevice,
});
if (result.devices.length === 1) {
  return result.devices[0];
} else {
  throw new DOMException("Lost permission", "NotFoundError");
}
```

Beachten Sie, dass die Optionen, die an `query()` für die `bluetooth`-Berechtigung übergeben werden können, die gleichen sind wie die Optionen, die als Argumente an [`Bluetooth.requestDevice()`](/de/docs/Web/API/Bluetooth/requestDevice) übergeben werden können.
Das zurückgegebene {{jsxref("Promise")}} löst sich in ein `BluetoothPermissionResult` auf, ein erweitertes [`PermissionStatus`](/de/docs/Web/API/PermissionStatus)-Objekt, das ein Array von erlaubten Geräten in seiner `devices`-Eigenschaft zurückgibt.
-->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
