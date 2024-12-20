---
title: "ViewTransition: finished-Eigenschaft"
short-title: finished
slug: Web/API/ViewTransition/finished
l10n:
  sourceCommit: 3a95c239db50c88fdde48daacb6c279006a422b9
---

{{APIRef("View Transition API")}}

Die schreibgeschützte **`finished`**-Eigenschaft der [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Schnittstelle ist ein {{jsxref("Promise")}}, das erfüllt wird, sobald die Übergangsanimation abgeschlossen ist und die neue Seitenansicht für den Benutzer sichtbar und interaktiv ist.

`finished` wird nur im Fall einer Transition im selben Dokument (SPA) abgelehnt, wenn der an [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) übergebene Callback eine Ausnahme auslöst oder ein `Promise` zurückgibt, das abgelehnt wird. Dies würde darauf hinweisen, dass der neue Zustand der Seite nicht erstellt wurde.

Wenn eine Übergangsanimation nicht startet oder während des Übergangs mit [`ViewTransition.skipTransition()`](/de/docs/Web/API/ViewTransition/skipTransition) übersprungen wird, wird der Endzustand dennoch erreicht, daher wird `finished` trotzdem erfüllt.

## Wert

Ein Promise.

## Beispiele

### Unterschiedliche Übergänge für unterschiedliche Navigationen

Manchmal erfordern bestimmte Navigationen spezielle, angepasste Übergänge. Beispielsweise kann eine "Zurück"-Navigation einen anderen Übergang benötigen als eine "Vorwärts"-Navigation. Der beste Weg, solche Fälle zu handhaben, besteht darin, einen Klassennamen auf dem `<html>`-Element festzulegen, den Übergang zu bearbeiten — die korrekte Animation mit einem angepassten Selektor anzuwenden — und dann den Klassennamen zu entfernen, sobald der Übergang abgeschlossen ist.

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

> **Hinweis:** `isBackNavigation` ist keine eingebaute Funktion; es ist eine theoretische Funktion, die mit der [Navigation API](/de/docs/Web/API/Navigation_API) oder Ähnlichem implementiert werden könnte.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Sanfte Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
