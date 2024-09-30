---
title: Bluetooth
slug: Web/API/Bluetooth
l10n:
  sourceCommit: e676701495a168168e0868311e4c4e7274fb6ed4
---

{{APIRef("Bluetooth API")}}{{securecontext_header}}{{SeeCompatTable}}

Das **`Bluetooth`**-Interface der [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) stellt Methoden zur Verfügung, um die Verfügbarkeit von Bluetooth zu überprüfen und den Zugriff auf Geräte anzufordern.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Instanz-Methoden

- [`Bluetooth.getAvailability()`](/de/docs/Web/API/Bluetooth/getAvailability) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das auf einen booleschen Wert aufgelöst wird, der anzeigt, ob der User-Agent Bluetooth unterstützen kann. Einige User-Agents lassen den Benutzer eine Option konfigurieren, die angibt, welcher Wert von dieser Methode zurückgegeben wird.
- [`Bluetooth.getDevices()`](/de/docs/Web/API/Bluetooth/getDevices) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das auf ein Array von [`BluetoothDevice`](/de/docs/Web/API/BluetoothDevice)s aufgelöst wird, auf die dieser Ursprung zugreifen darf. Die Berechtigung wird durch vorherige Aufrufe von [`Bluetooth.requestDevice()`](/de/docs/Web/API/Bluetooth/requestDevice) erlangt.
- [`Bluetooth.requestDevice()`](/de/docs/Web/API/Bluetooth/requestDevice) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das auf ein [`BluetoothDevice`](/de/docs/Web/API/BluetoothDevice)-Objekt aufgelöst wird, das den angegebenen Optionen entspricht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
