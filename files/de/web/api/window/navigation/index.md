---
title: "Window: navigation-Eigenschaft"
short-title: navigation
slug: Web/API/Window/navigation
l10n:
  sourceCommit: 38d151f66619ac3c8f527b9e4dd402b9a3cf32dd
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte **`navigation`**-Eigenschaft des [`Window`](/de/docs/Web/API/Window)-Interfaces gibt das mit dem aktuellen `window` verknüpfte [`Navigation`](/de/docs/Web/API/Navigation)-Objekt zurück.

Dies ist der Einstiegspunkt für die [Navigation API](/de/docs/Web/API/Navigation_API).

## Wert

Eine Instanz eines [`Navigation`](/de/docs/Web/API/Navigation)-Objekts.

## Beispiele

```js
let currentNavEntries = window.navigation.entries();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Modernes client-seitiges Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
