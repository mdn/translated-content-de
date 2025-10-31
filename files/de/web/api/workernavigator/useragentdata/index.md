---
title: "WorkerNavigator: userAgentData Eigenschaft"
short-title: userAgentData
slug: Web/API/WorkerNavigator/userAgentData
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("User-Agent Client Hints API")}}{{SeeCompatTable}}{{securecontext_header}}{{AvailableInWorkers("worker")}}

Die **`userAgentData`** schreibgeschützte Eigenschaft des [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)-Interfaces gibt ein [`NavigatorUAData`](/de/docs/Web/API/NavigatorUAData)-Objekt zurück, das verwendet werden kann, um auf die [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API) zuzugreifen.

## Wert

Ein [`NavigatorUAData`](/de/docs/Web/API/NavigatorUAData)-Objekt.

## Beispiele

Das folgende Beispiel gibt den Wert von [`NavigatorUAData.brands`](/de/docs/Web/API/NavigatorUAData/brands) in der Konsole aus.

```js
console.log(navigator.userAgentData.brands);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verbesserung der Privatsphäre der Nutzer und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints)
