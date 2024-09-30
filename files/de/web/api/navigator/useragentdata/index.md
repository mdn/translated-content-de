---
title: "Navigator: userAgentData-Eigenschaft"
short-title: userAgentData
slug: Web/API/Navigator/userAgentData
l10n:
  sourceCommit: 8ccdd482e4723b5393278bba686adc24d1769d0f
---

{{securecontext_header}}{{APIRef("User-Agent Client Hints API")}}{{SeeCompatTable}}

Die **`userAgentData`** schreibgeschützte Eigenschaft der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle gibt ein [`NavigatorUAData`](/de/docs/Web/API/NavigatorUAData)-Objekt zurück, das verwendet werden kann, um auf die [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API) zuzugreifen.

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

- [Verbesserung des Datenschutzes und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints)
