---
title: "Bluetooth: getDevices()-Methode"
short-title: getDevices()
slug: Web/API/Bluetooth/getDevices
l10n:
  sourceCommit: 502e8c3f0be95c6f42afe6a72113b029b290b9e8
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`getDevices()`**-Methode der [`Bluetooth`](/de/docs/Web/API/Bluetooth)-Schnittstelle gibt ein Array zurück, das die Bluetooth-Geräte enthält, auf die dieser Ursprung zugreifen darf — einschließlich derjenigen, die außerhalb der Reichweite sind und ausgeschaltet sind.

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
  - : Wird ausgelöst, wenn dieser Vorgang in diesem Kontext aufgrund von [Sicherheitsbedenken](/de/docs/Web/API/Web_Bluetooth_API#security_considerations) nicht erlaubt ist, zum Beispiel, wenn der Zugriff auf das aktuelle Dokument durch die [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)-Direktive blockiert ist {{HTTPHeader("Permissions-Policy/bluetooth","bluetooth")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
