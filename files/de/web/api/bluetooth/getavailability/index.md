---
title: "Bluetooth: getAvailability()-Methode"
short-title: getAvailability()
slug: Web/API/Bluetooth/getAvailability
l10n:
  sourceCommit: 502e8c3f0be95c6f42afe6a72113b029b290b9e8
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`getAvailability()`**-Methode der [`Bluetooth`](/de/docs/Web/API/Bluetooth)-Schnittstelle gibt _im Allgemeinen_ `true` zurück, wenn der User-Agent Bluetooth unterstützen kann (weil das Gerät einen Bluetooth-Adapter hat), und `false` andernfalls.

Das Wort "im Allgemeinen" wird verwendet, weil die Methode immer `false` zurückgibt, wenn die Erlaubnis zur Nutzung der Web Bluetooth API durch die Berechtigung [`Permissions-Policy: bluetooth`](/de/docs/Web/HTTP/Headers/Permissions-Policy/bluetooth) verweigert wird.
Darüber hinaus kann ein Benutzer seinen Browser so konfigurieren, dass `false` zurückgegeben wird, selbst wenn der Browser tatsächlich einen funktionsfähigen Bluetooth-Adapter hat, und umgekehrt. Dieser Konfigurationswert wird ignoriert, wenn der Zugang durch die Berechtigung blockiert wird.

Selbst wenn `getAvailability()` `true` zurückgibt und das Gerät tatsächlich einen Bluetooth-Adapter hat, bedeutet dies nicht unbedingt, dass ein Aufruf von [`navigator.bluetooth.requestDevice()`](/de/docs/Web/API/Bluetooth/requestDevice) mit einem [`BluetoothDevice`](/de/docs/Web/API/BluetoothDevice) beantwortet wird.
Der Bluetooth-Adapter könnte nicht eingeschaltet sein, und ein Benutzer könnte die Erlaubnis zur Verwendung der API verweigern, wenn er dazu aufgefordert wird.

## Syntax

```js-nolint
getAvailability()
```

### Parameter

Keine.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einem {{JSxRef("Boolean")}} aufgelöst wird.

Das {{JSxRef("Promise")}} wird mit dem Wert `false` aufgelöst, wenn der Zugriff durch [`Permissions-Policy: bluetooth`](/de/docs/Web/HTTP/Headers/Permissions-Policy/bluetooth) verweigert wird, wenn der Benutzer den Browser so konfiguriert hat, dass immer `false` zurückgegeben wird, oder wenn das Gerät keinen Bluetooth-Adapter hat.
Andernfalls wird es mit `true` aufgelöst.

### Ausnahmen

Keine.

## Beispiele

Der folgende Ausschnitt druckt eine Nachricht in der Konsole aus, die angibt, ob Bluetooth vom Gerät unterstützt wird oder nicht:

```js
navigator.bluetooth.getAvailability().then((available) => {
  if (available) {
    console.log("This device supports Bluetooth!");
  } else {
    console.log("Doh! Bluetooth is not supported");
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
