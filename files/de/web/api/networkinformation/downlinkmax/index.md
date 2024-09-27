---
title: "NetworkInformation: downlinkMax-Eigenschaft"
short-title: downlinkMax
slug: Web/API/NetworkInformation/downlinkMax
l10n:
  sourceCommit: 5671055d63552c5a4dc22ce7f6bea408afa1521a
---

{{APIRef("Network Information API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

Die **`downlinkMax`**-Eigenschaft des [`NetworkInformation`](/de/docs/Web/API/NetworkInformation)-Interfaces gibt die maximale Downlink-Geschwindigkeit, in Megabit pro Sekunde (Mbps), der zugrunde liegenden Verbindungstechnologie zurück.

## Wert

Eine Zahl, die die maximale Downlink-Geschwindigkeit, in Megabit pro Sekunde (Mb/s), der zugrunde liegenden Verbindungstechnologie darstellt.

## Beispiele

Das folgende Beispiel überwacht die Verbindung mit dem `change`-Event und protokolliert Änderungen, sobald sie auftreten.

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
