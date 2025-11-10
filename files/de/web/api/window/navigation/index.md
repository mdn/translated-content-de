---
title: "Window: navigation-Eigenschaft"
short-title: navigation
slug: Web/API/Window/navigation
l10n:
  sourceCommit: 0496643fbc14a6bad2bf46c94ab27c541f6928ff
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`navigation`**-Schreibgeschützter Eigenschaft des [`Window`](/de/docs/Web/API/Window)-Interfaces gibt das mit dem aktuellen `window` assoziierte [`Navigation`](/de/docs/Web/API/Navigation)-Objekt zurück.

Dies ist der Einstiegspunkt für die [Navigation API](/de/docs/Web/API/Navigation_API).

## Wert

Eine Instanz des [`Navigation`](/de/docs/Web/API/Navigation)-Objekts.

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
- [Navigation API Live-Demo](https://mdn.github.io/dom-examples/navigation-api/) ([Demo-Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/navigation-api))
