---
title: Bluetooth
slug: Web/API/Bluetooth
l10n:
  sourceCommit: e676701495a168168e0868311e4c4e7274fb6ed4
---

{{APIRef("Bluetooth API")}}{{securecontext_header}}{{SeeCompatTable}}

Das **`Bluetooth`**-Interface der [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) bietet Methoden zum Abfragen der Bluetooth-Verfügbarkeit und zum Anfordern des Zugriffs auf Geräte.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil {{domxref("EventTarget")}}._

## Instanz-Methoden

- {{domxref("Bluetooth.getAvailability","Bluetooth.getAvailability()")}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das auf einen booleschen Wert auflöst, der angibt, ob der Benutzer-Agent Bluetooth unterstützen kann. Einige Benutzer-Agenten erlauben dem Benutzer, eine Option zu konfigurieren, die bestimmt, welcher Wert von dieser Methode zurückgegeben wird.
- {{domxref("Bluetooth.getDevices","Bluetooth.getDevices()")}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das auf ein Array von {{domxref("BluetoothDevice")}}s auflöst, auf die dieser Ursprungsort zugreifen darf. Die Berechtigung wird durch vorherige Aufrufe von {{domxref("Bluetooth.requestDevice","Bluetooth.requestDevice()")}} eingeholt.
- {{domxref("Bluetooth.requestDevice","Bluetooth.requestDevice()")}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das auf ein {{domxref("BluetoothDevice")}}-Objekt auflöst, das den angegebenen Optionen entspricht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
