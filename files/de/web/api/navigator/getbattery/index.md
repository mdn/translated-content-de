---
title: "Navigator: getBattery() Methode"
short-title: getBattery()
slug: Web/API/Navigator/getBattery
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{ApiRef("Battery API")}}{{securecontext_header}}

Die **`getBattery()`** Methode liefert Informationen über den Akku des Systems. Sie gibt ein Versprechen zurück, das mit einem {{domxref("BatteryManager")}}-Objekt erfüllt wird, welches einige Eigenschaften bereitstellt, um den Batteriestatus abzufragen. Außerdem können einige Ereignisse gehandhabt werden, um den Batteriezustand zu überwachen. Dies implementiert die {{domxref("Battery Status API", "", "", "nocode")}}; siehe diese Dokumentation für zusätzliche Details, eine Anleitung zur Nutzung der API und Beispielcode.

Seit Chrome 103 wird die `Navigator.getBattery()` Methode der {{domxref("Battery Status API", "", "", "nocode")}} nur im sicheren Kontext bereitgestellt.

> [!NOTE]
> Der Zugriff auf diese Funktion kann durch die {{HTTPHeader("Permissions-Policy")}} Direktive {{HTTPHeader("Permissions-Policy/battery", "battery")}} gesteuert werden.

## Syntax

```js-nolint
getBattery()
```

### Parameter

Keine.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einem {{DOMxRef("BatteryManager")}}-Objekt erfüllt wird, das Sie verwenden können, um Informationen über den Batteriezustand zu erhalten.

### Ausnahmen

- `NotAllowedError` {{domxref("DOMException")}}

  - : Die Nutzung dieser Funktion wurde durch eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) blockiert.

- `SecurityError` {{domxref("DOMException")}}
  - : Der Benutzeragent stellt keine Batterieinformationen für unsichere Kontexte bereit und diese Methode wurde aus einem unsicheren Kontext aufgerufen.

## Beispiele

Dieses Beispiel ruft den aktuellen Ladezustand der Batterie ab und erstellt einen Handler für das {{domxref("BatteryManager/chargingchange_event", "chargingchange")}}-Ereignis, sodass der Ladezustand immer dann aufgezeichnet wird, wenn er sich ändert.

```js
let batteryIsCharging = false;

navigator.getBattery().then((battery) => {
  batteryIsCharging = battery.charging;

  battery.addEventListener("chargingchange", () => {
    batteryIsCharging = battery.charging;
  });
});
```

Für weitere Beispiele und Details siehe {{domxref("Battery Status API", "", "", "nocode")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Battery Status API", "", "", "nocode")}}
- {{HTTPHeader("Permissions-Policy")}} {{HTTPHeader("Permissions-Policy/battery", "battery")}} Direktive
