---
title: "Navigation: transition-Eigenschaft"
short-title: transition
slug: Web/API/Navigation/transition
l10n:
  sourceCommit: 0496643fbc14a6bad2bf46c94ab27c541f6928ff
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`transition`** schreibgeschützte Eigenschaft des [`Navigation`](/de/docs/Web/API/Navigation) Interfaces gibt ein [`NavigationTransition`](/de/docs/Web/API/NavigationTransition) Objekt zurück, das den Status einer laufenden Navigation darstellt, die zur Nachverfolgung verwendet werden kann.

## Wert

Ein [`NavigationTransition`](/de/docs/Web/API/NavigationTransition) Objekt oder `null`, wenn derzeit keine Navigation im Gange ist.

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

- [Moderne client-seitige Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
