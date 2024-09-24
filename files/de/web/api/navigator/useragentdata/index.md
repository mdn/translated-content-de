---
title: "Navigator: userAgentData-Eigenschaft"
short-title: userAgentData
slug: Web/API/Navigator/userAgentData
l10n:
  sourceCommit: 8ccdd482e4723b5393278bba686adc24d1769d0f
---

{{securecontext_header}}{{APIRef("User-Agent Client Hints API")}}{{SeeCompatTable}}

Die **`userAgentData`** schreibgeschützte Eigenschaft des {{domxref("Navigator")}} Schnittstelle liefert ein {{domxref("NavigatorUAData")}} Objekt, das für den Zugriff auf die {{domxref("User-Agent Client Hints API", "", "", "nocode")}} verwendet werden kann.

## Wert

Ein {{domxref("NavigatorUAData")}} Objekt.

## Beispiele

Das folgende Beispiel gibt den Wert von {{domxref("NavigatorUAData.brands")}} in der Konsole aus.

```js
console.log(navigator.userAgentData.brands);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verbesserung der Privatsphäre der Nutzer und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints)
