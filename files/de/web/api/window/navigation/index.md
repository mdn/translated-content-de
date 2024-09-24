---
title: "Window: navigation-Eigenschaft"
short-title: navigation
slug: Web/API/Window/navigation
l10n:
  sourceCommit: 38d151f66619ac3c8f527b9e4dd402b9a3cf32dd
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte **`navigation`**-Eigenschaft der {{domxref("Window")}}-Schnittstelle gibt das mit dem aktuellen `window` assoziierte {{domxref("Navigation")}}-Objekt zurück.

Dies ist der Einstiegspunkt für die {{domxref("Navigation API", "", "", "nocode")}}.

## Wert

Eine Instanz des {{domxref("Navigation")}}-Objekts.

## Beispiele

```js
let currentNavEntries = window.navigation.entries();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne clientseitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erläuterung](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Live-Demo der Navigation API](https://gigantic-honored-octagon.glitch.me/)
