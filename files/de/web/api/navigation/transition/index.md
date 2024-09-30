---
title: "Navigation: transition property"
short-title: transition
slug: Web/API/Navigation/transition
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`transition`** der [`Navigation`](/de/docs/Web/API/Navigation)-Schnittstelle gibt ein [`NavigationTransition`](/de/docs/Web/API/NavigationTransition)-Objekt zurück, das den Status einer laufenden Navigation darstellt, welches verwendet werden kann, um diese zu verfolgen.

## Wert

Ein [`NavigationTransition`](/de/docs/Web/API/NavigationTransition)-Objekt oder `null`, wenn derzeit keine Navigation im Gange ist.

## Beispiele

```js
async function handleTransition() {
  if (navigation.transition) {
    showLoadingSpinner();
    await navigation.transition.finished;
    hideLoadingSpinner();
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne clientseitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
