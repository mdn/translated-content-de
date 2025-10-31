---
title: "NetworkInformation: downlinkMax-Eigenschaft"
short-title: downlinkMax
slug: Web/API/NetworkInformation/downlinkMax
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("Network Information API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

Die schreibgeschützte **`downlinkMax`**-Eigenschaft des [`NetworkInformation`](/de/docs/Web/API/NetworkInformation)-Interfaces gibt die maximale Downlink-Geschwindigkeit, in Megabit pro Sekunde (Mbps), für die zugrunde liegende Verbindungstechnologie zurück.

## Wert

Eine Zahl, die die maximale Downlink-Geschwindigkeit, in Megabit pro Sekunde (Mb/s), für die zugrunde liegende Verbindungstechnologie darstellt.

## Beispiele

Das folgende Beispiel überwacht die Verbindung mit dem `change`-Ereignis und protokolliert Änderungen, sobald sie auftreten.

```js
function logConnectionType() {
  let connectionType = "not supported";
  let downlinkMax = "not supported";

  if ("connection" in navigator) {
    connectionType = navigator.connection.effectiveType;

    if ("downlinkMax" in navigator.connection) {
      downlinkMax = navigator.connection.downlinkMax;
    }
  }

  console.log(
    `Current connection type: ${connectionType} (downlink max: ${downlinkMax})`,
  );
}

logConnectionType();
navigator.connection.addEventListener("change", logConnectionType);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
