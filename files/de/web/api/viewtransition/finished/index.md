---
title: "ViewTransition: finished-Eigenschaft"
short-title: finished
slug: Web/API/ViewTransition/finished
l10n:
  sourceCommit: 722311032dbf520bf6aeba3d1f432aca38779ffd
---

{{APIRef("View Transitions API")}}

Die schreibgeschützte Eigenschaft **`finished`** des [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Interfaces ist ein {{jsxref("Promise")}}, das erfüllt wird, sobald die Übergangsanimation abgeschlossen ist und die neue Seitenansicht für den Benutzer sichtbar und interaktiv ist.

`finished` wird nur im Fall eines Übergangs im selben Dokument (SPA) abgelehnt, wenn der Callback, der an [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) übergeben wird, einen Fehler wirft oder ein Promise zurückgibt, das abgelehnt wird. Dies würde darauf hinweisen, dass der neue Zustand der Seite nicht erstellt wurde.

Wenn eine Übergangsanimation nicht startet oder während des Übergangs mit [`ViewTransition.skipTransition()`](/de/docs/Web/API/ViewTransition/skipTransition) übersprungen wird, wird der Endzustand trotzdem erreicht, und `finished` wird erfüllt.

## Wert

Ein Promise.

## Beispiele

### Unterschiedliche Übergänge für verschiedene Navigationsarten

Manchmal erfordern bestimmte Navigationsarten speziell zugeschnittene Übergänge. Beispielsweise kann eine "Zurück"-Navigation einen anderen Übergang als eine "Vorwärts"-Navigation wünschen. Der beste Weg, solche Fälle zu handhaben, besteht darin, einen Klassennamen auf das `<html>`-Element zu setzen, den Übergang durchzuführen — die richtige Animation mit einem zugeschnittenen Selektor anzuwenden — und dann den Klassennamen zu entfernen, sobald der Übergang abgeschlossen ist.

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

> **Note:** `isBackNavigation` ist keine eingebaute Funktion; es handelt sich um eine theoretische Funktion, die mithilfe der [Navigation API](/de/docs/Web/API/Navigation_API) oder einer ähnlichen implementiert werden könnte.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Smooth and simple transitions with the View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
