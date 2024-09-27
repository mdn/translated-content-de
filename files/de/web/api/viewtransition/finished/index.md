---
title: "ViewTransition: finished-Eigenschaft"
short-title: finished
slug: Web/API/ViewTransition/finished
l10n:
  sourceCommit: 722311032dbf520bf6aeba3d1f432aca38779ffd
---

{{APIRef("View Transitions API")}}

Die schreibgeschützte **`finished`**-Eigenschaft der [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Schnittstelle ist ein {{jsxref("Promise")}}, das erfüllt wird, sobald die Übergangsanimation abgeschlossen ist und die neue Seitenansicht für den Benutzer sichtbar und interaktiv ist.

`finished` wird nur im Fall eines Übergangs innerhalb desselben Dokuments (SPA) abgelehnt, wenn der an [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) übergebene Callback eine Ausnahme auslöst oder ein Promise zurückgibt, das abgelehnt wird. Dies würde darauf hinweisen, dass der neue Zustand der Seite nicht erstellt wurde.

Wenn eine Übergangsanimation nicht gestartet oder während des Übergangs mit [`ViewTransition.skipTransition()`](/de/docs/Web/API/ViewTransition/skipTransition) übersprungen wird, wird der Endzustand dennoch erreicht, daher wird `finished` weiterhin erfüllt.

## Wert

Ein Promise.

## Beispiele

### Unterschiedliche Übergänge für unterschiedliche Navigationen

Manchmal erfordern bestimmte Navigationen speziell angepasste Übergänge. Zum Beispiel könnte eine "Zurück"-Navigation einen anderen Übergang als eine "Vorwärts"-Navigation wünschen. Der beste Weg, solche Fälle zu handhaben, besteht darin, einen Klassennamen auf dem `<html>`-Element zu setzen, den Übergang zu handhaben — die korrekte Animation mit einem angepassten Selektor anzuwenden — und dann den Klassennamen zu entfernen, sobald der Übergang abgeschlossen ist.

```js
async function handleTransition() {
  if (isBackNavigation) {
    document.documentElement.classList.add("back-transition");
  }

  const transition = document.startViewTransition(() =>
    updateTheDOMSomehow(data),
  );

  try {
    await transition.finished;
  } finally {
    document.documentElement.classList.remove("back-transition");
  }
}
```

> **Note:** `isBackNavigation` ist keine eingebaute Funktion; es ist eine theoretische Funktion, die mithilfe der [Navigation API](/de/docs/Web/API/Navigation_API) oder ähnlich implementiert werden könnte.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Sanfte und einfache Übergänge mit der View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
