---
title: Bluetooth
slug: Web/API/Bluetooth
l10n:
  sourceCommit: e676701495a168168e0868311e4c4e7274fb6ed4
---

{{APIRef("Bluetooth API")}}{{securecontext_header}}{{SeeCompatTable}}

Das **`Bluetooth`**-Interface der [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) bietet Methoden, um die Verfügbarkeit von Bluetooth abzufragen und den Zugriff auf Geräte anzufordern.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Instanzmethoden

- [`Bluetooth.getAvailability()`](/de/docs/Web/API/Bluetooth/getAvailability) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das auf einen booleschen Wert auflöst, der anzeigt, ob der User-Agent Bluetooth unterstützen kann. Einige User-Agents erlauben es dem Benutzer, eine Option zu konfigurieren, die den Wert bestimmt, welcher von dieser Methode zurückgegeben wird.
- [`Bluetooth.getDevices()`](/de/docs/Web/API/Bluetooth/getDevices) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das auf ein Array von [`BluetoothDevice`](/de/docs/Web/API/BluetoothDevice)s auflöst, auf die dieser Ursprung zugreifen darf. Die Berechtigung wird durch vorherige Aufrufe von [`Bluetooth.requestDevice()`](/de/docs/Web/API/Bluetooth/requestDevice) erhalten.
- [`Bluetooth.requestDevice()`](/de/docs/Web/API/Bluetooth/requestDevice) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das auf ein [`BluetoothDevice`](/de/docs/Web/API/BluetoothDevice)-Objekt auflöst, das den angegebenen Optionen entspricht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
