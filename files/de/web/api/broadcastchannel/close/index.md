---
title: "BroadcastChannel: close()-Methode"
short-title: close()
slug: Web/API/BroadcastChannel/close
l10n:
  sourceCommit: 50a45d52fd9f45f1ca30b546af5920d0ccda82dc
---

{{APIRef("BroadCastChannel API")}} {{AvailableInWorkers}}

Die **`close()`**-Methode der {{domxref("BroadcastChannel")}}-Schnittstelle beendet die Verbindung zum
zugrunde liegenden Kanal, sodass das Objekt vom Garbage Collector entfernt werden kann.
Dies ist ein notwendiger Schritt,
da es keine andere Möglichkeit für einen Browser gibt zu wissen,
dass dieser Kanal nicht mehr benötigt wird.

## Syntax

```js-nolint
close()
```

## Beispiele

```js
// Verbindung zu einem Kanal herstellen
const bc = new BroadcastChannel("test_channel");

// Weitere Operationen (wie postMessage, …)

// Wenn fertig, die Verbindung zum Kanal trennen
bc.close();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("BroadcastChannel")}}, die Schnittstelle, zu der es gehört.
