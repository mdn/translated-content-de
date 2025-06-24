---
title: "ViewTransition: finished-Eigenschaft"
short-title: finished
slug: Web/API/ViewTransition/finished
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("View Transition API")}}

Die schreibgeschützte Eigenschaft **`finished`** der [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Schnittstelle ist ein {{jsxref("Promise")}}, das erfüllt wird, sobald die Übergangsanimation abgeschlossen ist und die neue Seitenansicht für den Benutzer sichtbar und interaktiv ist.

`finished` wird nur im Falle eines Transitionen im selben Dokument (SPA) abgelehnt, wenn der an [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) übergebene Callback eine Ausnahme auslöst oder ein Promise zurückgibt, das abgelehnt wird. Dies würde darauf hindeuten, dass der neue Zustand der Seite nicht erstellt wurde.

Wenn eine Übergangsanimation beim Übergang fehlschlägt oder übersprungen wird, indem [`ViewTransition.skipTransition()`](/de/docs/Web/API/ViewTransition/skipTransition) verwendet wird, wird der Endzustand dennoch erreicht, daher wird `finished` dennoch erfüllt.

## Wert

Ein Promise.

## Beispiele

### Unterschiedliche Übergänge für unterschiedliche Navigationen

Manchmal erfordern bestimmte Navigationen speziell angepasste Übergänge, zum Beispiel könnte eine "Zurück"-Navigation einen anderen Übergang wünschen als eine "Vorwärts"-Navigation. Der beste Weg, solche Fälle zu handhaben, besteht darin, einen Klassennamen auf dem `<html>`-Element zu setzen, den Übergang zu behandeln — wobei die korrekte Animation mit einem maßgeschneiderten Selektor angewendet wird — und dann den Klassennamen zu entfernen, sobald der Übergang abgeschlossen ist.

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

> [!NOTE] > `isBackNavigation` ist keine eingebaute Funktion; es handelt sich um eine theoretische Funktion, die mit der [Navigation API](/de/docs/Web/API/Navigation_API) oder ähnlich implementiert werden könnte.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Sanfte Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
