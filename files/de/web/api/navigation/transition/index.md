---
title: "Navigation: transition-Eigenschaft"
short-title: transition
slug: Web/API/Navigation/transition
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`transition`** des [`Navigation`](/de/docs/Web/API/Navigation)-Interfaces gibt ein [`NavigationTransition`](/de/docs/Web/API/NavigationTransition)-Objekt zurück, das den Status einer laufenden Navigation darstellt, der zur Nachverfolgung verwendet werden kann.

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

- [Moderne client-seitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Erläuterung zur Navigation API](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
