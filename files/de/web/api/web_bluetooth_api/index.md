---
title: Web-Bluetooth-API
slug: Web/API/Web_Bluetooth_API
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{DefaultAPISidebar("Bluetooth API")}}{{SeeCompatTable}}

Die Web-Bluetooth-API bietet die Möglichkeit, sich mit Bluetooth Low Energy-Peripheriegeräten zu verbinden und mit ihnen zu interagieren.

> [!NOTE]
> Diese API ist _nicht verfügbar_ in [Web Workers](/de/docs/Web/API/Web_Workers_API) (nicht über {{domxref("WorkerNavigator")}} bereitgestellt).

## Schnittstellen

- {{DOMxRef("Bluetooth")}}
  - : Bietet Methoden, um die Verfügbarkeit von Bluetooth abzufragen und den Zugriff auf Geräte anzufordern.
- {{DOMxRef("BluetoothCharacteristicProperties")}}
  - : Bietet Eigenschaften einer bestimmten `BluetoothRemoteGATTCharacteristic`.
- {{DOMxRef("BluetoothDevice")}}
  - : Repräsentiert ein Bluetooth-Gerät innerhalb einer bestimmten Skriptausführungsumgebung.
- {{DOMxRef("BluetoothRemoteGATTCharacteristic")}}
  - : Repräsentiert eine GATT-Charakteristik, ein grundlegendes Datenelement, das weitere Informationen über den Dienst eines Peripheriegeräts bietet.
- {{DOMxRef("BluetoothRemoteGATTDescriptor")}}
  - : Repräsentiert einen GATT-Descriptor, der weitere Informationen über den Wert einer Charakteristik liefert.
- {{DOMxRef("BluetoothRemoteGATTServer")}}
  - : Repräsentiert einen GATT-Server auf einem entfernten Gerät.
- {{DOMxRef("BluetoothRemoteGATTService")}}
  - : Repräsentiert einen Dienst, der von einem GATT-Server bereitgestellt wird, einschließlich eines Geräts, einer Liste referenzierter Dienste und einer Liste der Charakteristiken dieses Dienstes.

## Erweiterungen zu anderen Schnittstellen

Die Bluetooth-API erweitert die folgenden APIs und fügt die aufgelisteten Funktionen hinzu.

### Navigator

- {{domxref("Navigator.bluetooth")}}
  - : Gibt ein {{domxref("Bluetooth")}}-Objekt für das aktuelle Dokument zurück und bietet Zugriff auf die Funktionalität der Web-Bluetooth-API.

## Sicherheitsüberlegungen

Die Web-Bluetooth-API kann nur in einem sicheren Kontext verwendet werden.

Der Zugriff auf die API wird durch die [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)-Direktive {{HTTPHeader("Permissions-Policy/bluetooth","bluetooth")}} gesteuert.
Die Standard-Zulassungsliste für die `bluetooth`-Richtlinie ist `self`, was die Bluetooth-Nutzung in gleichherkunftssächtigen eingebetteten Frames ermöglicht, aber standardmäßig den Zugriff durch Drittanbieterinhalte verhindert.
Der Zugriff über Ursprungsgrenzen hinweg wird ermöglicht, indem die erlaubten Ursprünge sowohl im HTTP-Header `Permissions-Policy: bluetooth` als auch im gewünschten `<iframe>` angegeben werden.

Um die Funktion nutzen zu können, muss der Benutzer zunächst ausdrücklich die Erlaubnis erteilen (es wird nicht nach Erlaubnis gefragt, wenn dies aus anderen Gründen, wie z. B. einer von einer Permissions Policy blockierten Anfrage, nicht zulässig ist).
Die Erlaubnisabfrage wird angezeigt, wenn {{domxref("Bluetooth.requestDevice()")}} aufgerufen wird, um den Zugriff auf ein neues Bluetooth-Gerät anzufordern, für das keine Erlaubnis erteilt ist (das verantwortliche globale Objekt muss ebenfalls {{glossary("transient activation")}} haben).
Sie können {{domxref("Bluetooth.getDevices()")}} verwenden, um alle Geräte abzurufen, die der Website zuvor die Erlaubnis erteilt haben.

Die [Permissions API](/de/docs/Web/API/Permissions_API) {{domxref("Permissions/query","navigator.permissions.query()")}}-Methode kann mit der `bluetooth`-Erlaubnis verwendet werden, um zu testen, ob eine Website die Erlaubnis hat, Bluetooth-Geräte zu verwenden.
Der Erlaubnisstatus kann `granted`, `denied` oder `prompt` (erfordert eine Benutzerbestätigung eines Hinweises) sein:

```js
const btPermission = await navigator.permissions.query({ name: "bluetooth" });
if (btPermission.state !== "denied") {
  // Do something
}
```

<!-- Der folgende Abschnitt ist spezifikationsgemäß korrekt, aber zum Zeitpunkt der Erstellung nicht implementiert: https://github.com/WebBluetoothCG/web-bluetooth/issues/620#issuecomment-1986689299.
-->
<!--
Sie können auch `query()` verwenden, um direkt die Geräte abzurufen, für die der Website zuvor die Erlaubnis erteilt wurde.
Zum Beispiel gibt der folgende Code (modifiziert aus dem Beispiel in der Spezifikation) das letzte Bluetooth-Gerät zurück, das verwendet wurde und für das der Benutzer die Erlaubnis erteilt hat:

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

Beachten Sie, dass die Optionen, die an `query()` für die `bluetooth`-Erlaubnis übergeben werden können, dieselben sind wie die Optionen, die als Argumente an {{DOMxRef("Bluetooth.requestDevice()")}} übergeben werden können.
Das zurückgegebene {{jsxref("Promise")}} wird auf ein `BluetoothPermissionResult` aufgelöst, ein erweitertes {{domxref("PermissionStatus")}}-Objekt, das ein Array der erlaubten Geräte in seiner `devices`-Eigenschaft zurückgibt.
-->

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
