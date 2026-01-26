---
title: "Window: navigation-Eigenschaft"
short-title: navigation
slug: Web/API/Window/navigation
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

Die **`navigation`** schreibgeschützte Eigenschaft der [`Window`](/de/docs/Web/API/Window)-Schnittstelle gibt das aktuelle der `window` zugeordnete [`Navigation`](/de/docs/Web/API/Navigation)-Objekt zurück.

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

- [Moderne client-seitige Routenführung: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
- [Navigation API Live-Demo](https://mdn.github.io/dom-examples/navigation-api/) ([Demoquelle ansehen](https://github.com/mdn/dom-examples/tree/main/navigation-api))
