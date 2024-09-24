---
title: "WorkerNavigator: userAgentData-Eigenschaft"
short-title: userAgentData
slug: Web/API/WorkerNavigator/userAgentData
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("User-Agent Client Hints API")}}{{SeeCompatTable}}{{securecontext_header}}{{AvailableInWorkers("worker")}}

Die schreibgeschützte Eigenschaft **`userAgentData`** des {{domxref("WorkerNavigator")}}-Interfaces gibt ein {{domxref("NavigatorUAData")}}-Objekt zurück, welches verwendet werden kann, um auf die {{domxref("User-Agent Client Hints API", "", "", "nocode")}} zuzugreifen.

## Wert

Ein {{domxref("NavigatorUAData")}}-Objekt.

## Beispiele

Das folgende Beispiel gibt den Wert von {{domxref("NavigatorUAData.brands")}} in der Konsole aus.

```js
console.log(navigator.userAgentData.brands);
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Verbesserung des Datenschutzes und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints)
