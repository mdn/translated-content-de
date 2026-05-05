---
title: "NavigationTransition: committed-Eigenschaft"
short-title: committed
slug: Web/API/NavigationTransition/committed
l10n:
  sourceCommit: e37e6f1ca594cd444b243be19637171790bbb656
---

{{APIRef("Navigation API")}}

Die schreibgeschützte **`committed`**-Eigenschaft der [`NavigationTransition`](/de/docs/Web/API/NavigationTransition)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) aktualisiert ist und die neue URL im Browser angezeigt wird, was die Navigation als festgelegt markiert. Dies geschieht, nachdem alle [Precommit-Handler](/de/docs/Web/API/NavigateEvent/intercept#handling_precommit_actions_with_precommithandler) für die Navigation erfüllt wurden.

Das `committed`-Promise wird abgelehnt, wenn ein Precommit-Handler abgelehnt wird.

## Wert

Ein {{jsxref("Promise")}}, das auf `undefined` auflöst.

## Beispiele

```js
async function lockInNavigation() {
  await navigation.transition.committed;
  // Navigation has committed successfully
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne Client-seitige Routenführung: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Explainer](https://github.com/WICG/navigation-api/blob/main/README.md)
