---
title: "Bluetooth: getAvailability()-Methode"
short-title: getAvailability()
slug: Web/API/Bluetooth/getAvailability
l10n:
  sourceCommit: 502e8c3f0be95c6f42afe6a72113b029b290b9e8
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`getAvailability()`**-Methode des [`Bluetooth`](/de/docs/Web/API/Bluetooth)-Interfaces gibt _nominal_ `true` zurück, wenn der User-Agent Bluetooth unterstützen kann (weil das Gerät über einen Bluetooth-Adapter verfügt), und andernfalls `false`.

Das Wort „nominal“ wird verwendet, weil, wenn die Erlaubnis zur Verwendung der Web Bluetooth API durch die [`Permissions-Policy: bluetooth`](/de/docs/Web/HTTP/Headers/Permissions-Policy/bluetooth)-Berechtigung verweigert wird, die Methode immer `false` zurückgeben wird.
Zusätzlich kann ein Benutzer seinen Browser so konfigurieren, dass er `false` aus einem `getAvailability()`-Aufruf zurückgibt, selbst wenn der Browser über einen funktionierenden Bluetooth-Adapter verfügt, und umgekehrt. Dieser Einstellungswert wird ignoriert, wenn der Zugriff durch die Berechtigung blockiert wird.

Selbst wenn `getAvailability()` `true` zurückgibt und das Gerät tatsächlich einen Bluetooth-Adapter hat, bedeutet das nicht unbedingt, dass der Aufruf von [`navigator.bluetooth.requestDevice()`](/de/docs/Web/API/Bluetooth/requestDevice) auf ein [`BluetoothDevice`](/de/docs/Web/API/BluetoothDevice) aufgelöst wird.
Der Bluetooth-Adapter könnte nicht eingeschaltet sein, und ein Benutzer könnte die Erlaubnis zur Verwendung der API verweigern, wenn er dazu aufgefordert wird.

## Syntax

```js-nolint
getAvailability()
```

### Parameter

Keine.

### Rückgabewert

Ein {{JSxRef("Promise")}}, der mit einem {{JSxRef("Boolean")}} aufgelöst wird.

Der {{JSxRef("Promise")}} wird mit einem Wert von `false` aufgelöst, wenn der Zugriff durch [`Permissions-Policy: bluetooth`](/de/docs/Web/HTTP/Headers/Permissions-Policy/bluetooth) verweigert wird, wenn der Benutzer den Browser so konfiguriert hat, dass er immer mit `false` aufgelöst wird, oder wenn das Gerät keinen Bluetooth-Adapter hat.
Andernfalls wird er mit `true` aufgelöst.

### Ausnahmen

Keine.

## Beispiele

Das folgende Snippet gibt eine Meldung in der Konsole aus, die angibt, ob Bluetooth von dem Gerät unterstützt wird oder nicht:

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
