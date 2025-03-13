---
title: Web Bluetooth API
slug: Web/API/Web_Bluetooth_API
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{DefaultAPISidebar("Bluetooth API")}}{{SeeCompatTable}}

Die Web Bluetooth API bietet die Möglichkeit, eine Verbindung zu Bluetooth Low Energy-Peripheriegeräten herzustellen und mit ihnen zu interagieren.

> [!NOTE]
> Diese API ist _nicht verfügbar_ in [Web Workers](/de/docs/Web/API/Web_Workers_API) (nicht zugänglich über [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)).

## Schnittstellen

- [`Bluetooth`](/de/docs/Web/API/Bluetooth)
  - : Bietet Methoden zum Abfragen der Bluetooth-Verfügbarkeit und zum Anfordern des Zugriffs auf Geräte.
- [`BluetoothCharacteristicProperties`](/de/docs/Web/API/BluetoothCharacteristicProperties)
  - : Bietet Eigenschaften eines bestimmten `BluetoothRemoteGATTCharacteristic`.
- [`BluetoothDevice`](/de/docs/Web/API/BluetoothDevice)
  - : Repräsentiert ein Bluetooth-Gerät innerhalb einer bestimmten Skriptausführungsumgebung.
- [`BluetoothRemoteGATTCharacteristic`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic)
  - : Repräsentiert ein GATT-Charakteristikum, das ein grundlegendes Datenelement darstellt und weitere Informationen über einen Dienst eines Peripheriegeräts bietet.
- [`BluetoothRemoteGATTDescriptor`](/de/docs/Web/API/BluetoothRemoteGATTDescriptor)
  - : Repräsentiert einen GATT-Deskriptor, der weitere Informationen über den Wert eines Charakteristikums bietet.
- [`BluetoothRemoteGATTServer`](/de/docs/Web/API/BluetoothRemoteGATTServer)
  - : Repräsentiert einen GATT-Server auf einem externen Gerät.
- [`BluetoothRemoteGATTService`](/de/docs/Web/API/BluetoothRemoteGATTService)
  - : Repräsentiert einen Dienst, der von einem GATT-Server bereitgestellt wird, einschließlich eines Geräts, einer Liste von referenzierten Diensten und einer Liste der Charakteristika dieses Dienstes.

## Erweiterungen zu anderen Schnittstellen

Die Bluetooth API erweitert die folgenden APIs und fügt die aufgelisteten Funktionen hinzu.

### Navigator

- [`Navigator.bluetooth`](/de/docs/Web/API/Navigator/bluetooth)
  - : Gibt ein [`Bluetooth`](/de/docs/Web/API/Bluetooth)-Objekt für das aktuelle Dokument zurück, das Zugriff auf die Funktionen der Web Bluetooth API bietet.

## Sicherheitsüberlegungen

Die Web Bluetooth API kann nur in einem sicheren Kontext verwendet werden.

Der Zugriff auf die API wird von der [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)-Direktive {{HTTPHeader("Permissions-Policy/bluetooth","bluetooth")}} kontrolliert.
Die Standard-Zugriffsliste für die `bluetooth`-Richtlinie ist `self`, was die Bluetooth-Nutzung in Same-Origin eingebetteten Frames ermöglicht, den Zugriff durch Drittanbieter-Inhalte jedoch standardmäßig verhindert.
Cross-Origin-Zugriff wird ermöglicht, indem die erlaubten Ursprünge sowohl im `Permissions-Policy: bluetooth` HTTP-Header als auch im gewünschten `<iframe>` angegeben werden.

Um die Funktion nutzen zu können, muss der Benutzer zuerst eine ausdrückliche Erlaubnis erteilen (es erscheint keine Aufforderung zur Genehmigung, wenn der Zugriff aus anderen Gründen, wie etwa durch eine Permissions Policy blockiert, nicht erlaubt ist).
Die Berechtigungsaufforderung wird angezeigt, wenn [`Bluetooth.requestDevice()`](/de/docs/Web/API/Bluetooth/requestDevice) aufgerufen wird, um Zugriff auf ein neues Bluetooth-Gerät anzufordern, für das keine Erlaubnis erteilt wurde (das zugehörige globale Objekt muss auch {{Glossary("transient_activation", "transiente Aktivierung")}} haben).
Sie können [`Bluetooth.getDevices()`](/de/docs/Web/API/Bluetooth/getDevices) verwenden, um alle Geräte abzurufen, für die der Site zuvor eine Erlaubnis erteilt wurde.

Die [Permissions API](/de/docs/Web/API/Permissions_API) Methode [`navigator.permissions.query()`](/de/docs/Web/API/Permissions/query) kann mit der `bluetooth`-Berechtigung verwendet werden, um zu testen, ob eine Site die Berechtigung zur Verwendung von Bluetooth-Geräten hat.
Der Berechtigungsstatus wird `granted`, `denied` oder `prompt` (erfordert Benutzerbestätigung einer Aufforderung) sein:

```js
const btPermission = await navigator.permissions.query({ name: "bluetooth" });
if (btPermission.state !== "denied") {
  // Do something
}
```

<!-- Der nachfolgende Abschnitt ist spezifikationsgemäß korrekt, aber zum Zeitpunkt des Schreibens nicht implementiert: https://github.com/WebBluetoothCG/web-bluetooth/issues/620#issuecomment-1986689299.
-->
<!--
Sie können auch `query()` verwenden, um direkt Geräte abzurufen, für die der Site zuvor eine Erlaubnis erteilt wurde.
Zum Beispiel gibt der folgende Code (modifiziert aus dem Beispiel in der Spezifikation) das letzte verwendete Bluetooth-Gerät zurück, für das der Benutzer die Erlaubnis erteilt hat:

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

Beachten Sie, dass die Optionen, die an `query()` für die `bluetooth`-Berechtigung übergeben werden können, dieselben sind wie die Optionen, die als Argumente an [`Bluetooth.requestDevice()`](/de/docs/Web/API/Bluetooth/requestDevice) übergeben werden können.
Das zurückgegebene {{jsxref("Promise")}} wird zu einem `BluetoothPermissionResult` aufgelöst, ein erweitertes [`PermissionStatus`](/de/docs/Web/API/PermissionStatus)-Objekt, das in seiner `devices`-Eigenschaft ein Array der erlaubten Geräte zurückgibt.
-->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
