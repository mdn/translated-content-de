---
title: Web Bluetooth API
slug: Web/API/Web_Bluetooth_API
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{DefaultAPISidebar("Bluetooth API")}}{{SeeCompatTable}}

Das Web Bluetooth API bietet die Möglichkeit, mit Bluetooth Low Energy-Peripheriegeräten zu verbinden und zu interagieren.

> [!NOTE]
> Dieses API ist _nicht verfügbar_ in [Web Workers](/de/docs/Web/API/Web_Workers_API) (nicht über [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) exponiert).

## Schnittstellen

- [`Bluetooth`](/de/docs/Web/API/Bluetooth)
  - : Bietet Methoden zum Abfragen der Bluetooth-Verfügbarkeit und zum Anfordern des Zugriffs auf Geräte.
- [`BluetoothCharacteristicProperties`](/de/docs/Web/API/BluetoothCharacteristicProperties)
  - : Bietet Eigenschaften einer bestimmten `BluetoothRemoteGATTCharacteristic`.
- [`BluetoothDevice`](/de/docs/Web/API/BluetoothDevice)
  - : Repräsentiert ein Bluetooth-Gerät innerhalb einer bestimmten Skriptausführungsumgebung.
- [`BluetoothRemoteGATTCharacteristic`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic)
  - : Repräsentiert eine GATT-Charakteristik, die ein grundlegendes Datenelement darstellt und weitere Informationen über einen Dienst eines Peripheriegeräts bietet.
- [`BluetoothRemoteGATTDescriptor`](/de/docs/Web/API/BluetoothRemoteGATTDescriptor)
  - : Repräsentiert einen GATT-Descriptor, der weitere Informationen über den Wert einer Charakteristik bietet.
- [`BluetoothRemoteGATTServer`](/de/docs/Web/API/BluetoothRemoteGATTServer)
  - : Repräsentiert einen GATT-Server auf einem entfernten Gerät.
- [`BluetoothRemoteGATTService`](/de/docs/Web/API/BluetoothRemoteGATTService)
  - : Repräsentiert einen Dienst, der von einem GATT-Server bereitgestellt wird, einschließlich eines Geräts, einer Liste referenzierter Dienste und einer Liste der Charakteristiken dieses Dienstes.

## Erweiterungen zu anderen Schnittstellen

Das Bluetooth API erweitert die folgenden APIs und fügt die genannten Funktionen hinzu.

### Navigator

- [`Navigator.bluetooth`](/de/docs/Web/API/Navigator/bluetooth)
  - : Gibt ein [`Bluetooth`](/de/docs/Web/API/Bluetooth)-Objekt für das aktuelle Dokument zurück und bietet Zugriff auf die Funktionen des Web Bluetooth API.

## Sicherheitserwägungen

Das Web Bluetooth API kann nur in einem sicheren Kontext verwendet werden.

Der Zugriff auf das API wird durch die [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) Direktive {{HTTPHeader("Permissions-Policy/bluetooth","bluetooth")}} gesteuert.
Die Standard-Whitelist für die `bluetooth`-Richtlinie ist `self`, was die Bluetooth-Nutzung in gleichen Ursprungsrahmen ermöglicht, aber den Zugriff durch Drittinhalte standardmäßig verhindert.
Der Zugriff über verschiedene Ursprünge hinweg wird aktiviert, indem die erlaubten Ursprünge sowohl im `Permissions-Policy: bluetooth` HTTP-Header als auch im gewünschten `<iframe>` spezifiziert werden.

Um die Funktion zu nutzen, muss der Benutzer zunächst ausdrücklich die Erlaubnis erteilen (es wird nicht um Zugriff gebeten, wenn dieser aus anderen Gründen nicht erlaubt ist, wie z.B. wenn er durch eine Permissions Policy blockiert wird).
Die Erlaubniseingabeaufforderung wird angezeigt, wenn [`Bluetooth.requestDevice()`](/de/docs/Web/API/Bluetooth/requestDevice) aufgerufen wird, um Zugriff auf ein neues Bluetooth-Gerät zu beantragen, für das die Erlaubnis nicht erteilt wurde (die besitzende globale Umgebung muss auch eine [flüchtige Aktivierung](/de/docs/Glossary/transient_activation) aufweisen).
Sie können [`Bluetooth.getDevices()`](/de/docs/Web/API/Bluetooth/getDevices) verwenden, um alle Geräte abzurufen, für die zuvor die Erlaubnis für die Website erteilt wurde.

Die [Permissions API](/de/docs/Web/API/Permissions_API) [`navigator.permissions.query()`](/de/docs/Web/API/Permissions/query)-Methode kann mit der `bluetooth`-Erlaubnis verwendet werden, um zu testen, ob eine Website die Erlaubnis hat, Bluetooth-Geräte zu nutzen.
Der Erlaubniszustand wird `granted`, `denied` oder `prompt` sein (erfordert die Anerkennung eines Eingabeaufforderungsbenutzers):

```js
const btPermission = await navigator.permissions.query({ name: "bluetooth" });
if (btPermission.state !== "denied") {
  // Do something
}
```

<!-- Der untenstehende Abschnitt ist spezifikationsgemäß korrekt, aber zum Zeitpunkt des Schreibens nicht implementiert: https://github.com/WebBluetoothCG/web-bluetooth/issues/620#issuecomment-1986689299.
-->
<!--
Sie können auch `query()` verwenden, um direkt Geräte abzurufen, für die zuvor die Erlaubnis für die Website erteilt wurde.
Zum Beispiel gibt der folgende Code (modifiziert aus dem Beispiel in der Spezifikation) das zuletzt benutzte Bluetooth-Gerät zurück, für das der Benutzer die Erlaubnis erteilt hat:

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

Beachten Sie, dass die Optionen, die an `query()` für die `bluetooth`-Erlaubnis übergeben werden können, die gleichen sind wie die Optionen, die als Argumente an [`Bluetooth.requestDevice()`](/de/docs/Web/API/Bluetooth/requestDevice) übergeben werden können.
Das zurückgegebene {{jsxref("Promise")}} löst sich in ein `BluetoothPermissionResult` auf, ein erweitertes [`PermissionStatus`](/de/docs/Web/API/PermissionStatus)-Objekt, das ein Array der erlaubten Geräte in seiner `devices`-Eigenschaft zurückgibt.
-->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
