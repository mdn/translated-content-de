---
title: "Bluetooth: getAvailability() Methode"
short-title: getAvailability()
slug: Web/API/Bluetooth/getAvailability
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`getAvailability()`**-Methode der [`Bluetooth`](/de/docs/Web/API/Bluetooth)-Schnittstelle gibt _nominal_ `true` zurück, wenn der Benutzeragent Bluetooth unterstützen kann (weil das Gerät einen Bluetooth-Adapter hat), und `false` andernfalls.

Das Wort "nominal" wird verwendet, weil, wenn die Berechtigung zur Verwendung der Web Bluetooth API durch die Berechtigung [`Permissions-Policy: bluetooth`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/bluetooth) verweigert wird, die Methode immer `false` zurückgibt.
Darüber hinaus kann ein Benutzer seinen Browser so konfigurieren, dass er `false` von einem `getAvailability()`-Aufruf zurückgibt, selbst wenn der Browser einen funktionsfähigen Bluetooth-Adapter hat, und umgekehrt. Dieser Einstellungswert wird ignoriert, wenn der Zugriff durch die Berechtigung blockiert wird.

Auch wenn `getAvailability()` `true` zurückgibt und das Gerät tatsächlich einen Bluetooth-Adapter hat, bedeutet dies nicht unbedingt, dass ein Aufruf von [`navigator.bluetooth.requestDevice()`](/de/docs/Web/API/Bluetooth/requestDevice) mit einem [`BluetoothDevice`](/de/docs/Web/API/BluetoothDevice) aufgelöst wird.
Der Bluetooth-Adapter ist möglicherweise nicht eingeschaltet, und ein Benutzer könnte die Erlaubnis zur Verwendung der API verweigern, wenn er dazu aufgefordert wird.

## Syntax

```js-nolint
getAvailability()
```

### Parameter

Keine.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einem {{JSxRef("Boolean")}} aufgelöst wird.

Das {{JSxRef("Promise")}} wird mit einem Wert von `false` aufgelöst, wenn der Zugriff durch [`Permissions-Policy: bluetooth`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/bluetooth) verweigert wird, wenn der Benutzer den Browser so konfiguriert hat, dass er immer mit `false` aufgelöst wird, oder wenn das Gerät keinen Bluetooth-Adapter hat.
Andernfalls wird es mit `true` aufgelöst.

### Ausnahmen

Keine.

## Beispiele

Der folgende Code-Schnipsel gibt eine Meldung in der Konsole aus, die angibt, ob Bluetooth vom Gerät unterstützt wird oder nicht:

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
