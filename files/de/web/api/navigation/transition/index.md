---
title: "Navigation: transition Eigenschaft"
short-title: transition
slug: Web/API/Navigation/transition
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

Die **`transition`** schreibgeschützte Eigenschaft des [`Navigation`](/de/docs/Web/API/Navigation)-Interfaces gibt ein [`NavigationTransition`](/de/docs/Web/API/NavigationTransition) Objekt zurück, das den Status einer laufenden Navigation darstellt, welche zur Verfolgung verwendet werden kann.

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

- [Moderne client-seitige Routenführung: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Erläuterung der Navigation API](https://github.com/WICG/navigation-api/blob/main/README.md)
