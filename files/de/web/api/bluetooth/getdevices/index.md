---
title: "Bluetooth: getDevices() Methode"
short-title: getDevices()
slug: Web/API/Bluetooth/getDevices
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`getDevices()`**-Methode der [`Bluetooth`](/de/docs/Web/API/Bluetooth)-Schnittstelle gibt ein Array zurück, das die Bluetooth-Geräte enthält, auf die dieser Ursprung zugreifen darf – einschließlich solcher, die sich außerhalb der Reichweite befinden und ausgeschaltet sind.

## Syntax

```js-nolint
getDevices()
```

### Parameter

Keine.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einem Array von [`BluetoothDevice`](/de/docs/Web/API/BluetoothDevice)-Objekten aufgelöst wird.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn diese Operation in diesem Kontext aufgrund von [Sicherheitsbedenken](/de/docs/Web/API/Web_Bluetooth_API#security_considerations) nicht erlaubt ist, wie z.B. bei Aufruf, wenn der Zugriff auf das aktuelle Dokument durch die [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)-Direktive blockiert wird {{HTTPHeader("Permissions-Policy/bluetooth","bluetooth")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
