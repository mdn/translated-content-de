---
title: "Bluetooth: getAvailability()-Methode"
short-title: getAvailability()
slug: Web/API/Bluetooth/getAvailability
l10n:
  sourceCommit: 502e8c3f0be95c6f42afe6a72113b029b290b9e8
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`getAvailability()`**-Methode des {{DOMxRef("Bluetooth")}}-Interfaces gibt _nominell_ `true` zurück, wenn der User-Agent Bluetooth unterstützen kann (weil das Gerät über einen Bluetooth-Adapter verfügt), und `false` andernfalls.

Das Wort „nominell“ wird verwendet, weil, wenn die Erlaubnis zur Nutzung der Web-Bluetooth-API durch die [`Permissions-Policy: bluetooth`](/de/docs/Web/HTTP/Headers/Permissions-Policy/bluetooth) Berechtigung verweigert wird, die Methode immer `false` zurückgibt.
Darüber hinaus kann ein Benutzer seinen Browser so konfigurieren, dass er `false` bei einem `getAvailability()`-Aufruf zurückgibt, selbst wenn der Browser über einen funktionsfähigen Bluetooth-Adapter verfügt, und umgekehrt. Dieser Einstellungswert wird ignoriert, wenn der Zugriff durch die Berechtigung blockiert wird.

Selbst wenn `getAvailability()` `true` zurückgibt und das Gerät tatsächlich einen Bluetooth-Adapter hat, bedeutet dies nicht unbedingt, dass ein Aufruf von {{DOMxRef("Bluetooth.requestDevice","navigator.bluetooth.requestDevice()")}} mit einem {{DOMxRef("BluetoothDevice")}} aufgelöst wird.
Der Bluetooth-Adapter könnte nicht eingeschaltet sein, und ein Benutzer könnte die Erlaubnis zur Nutzung der API verweigern, wenn er dazu aufgefordert wird.

## Syntax

```js-nolint
getAvailability()
```

### Parameter

Keine.

### Rückgabewert

Ein {{JSxRef("Promise")}}, der sich mit einem {{JSxRef("Boolean")}} auflöst.

Das {{JSxRef("Promise")}} wird mit einem Wert von `false` aufgelöst, wenn der Zugriff durch [`Permissions-Policy: bluetooth`](/de/docs/Web/HTTP/Headers/Permissions-Policy/bluetooth) verweigert wird, wenn der Benutzer den Browser so konfiguriert hat, dass er immer mit `false` auflöst, oder wenn das Gerät keinen Bluetooth-Adapter hat.
Andernfalls wird es sich mit `true` auflösen.

### Ausnahmen

Keine.

## Beispiele

Das folgende Snippet gibt eine Nachricht in der Konsole aus, die angibt, ob Bluetooth vom Gerät unterstützt wird oder nicht:

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
