---
title: "Navigator: userAgentData-Eigenschaft"
short-title: userAgentData
slug: Web/API/Navigator/userAgentData
l10n:
  sourceCommit: d8fbe1ea30dcc8fd707048a804f5070a729b57a7
---

{{securecontext_header}}{{APIRef("User-Agent Client Hints API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`userAgentData`** des [`Navigator`](/de/docs/Web/API/Navigator)-Interfaces gibt ein [`NavigatorUAData`](/de/docs/Web/API/NavigatorUAData)-Objekt zurück, das verwendet werden kann, um auf die [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API) zuzugreifen.

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

- [HTTP-Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints)
- [Verbesserung der Benutzerprivatsphäre und Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints)
