---
title: "ViewTransition: finished-Eigenschaft"
short-title: finished
slug: Web/API/ViewTransition/finished
l10n:
  sourceCommit: 722311032dbf520bf6aeba3d1f432aca38779ffd
---

{{APIRef("View Transitions API")}}

Die **`finished`** schreibgeschützte Eigenschaft der {{domxref("ViewTransition")}}-Schnittstelle ist ein {{jsxref("Promise")}}, das erfüllt wird, sobald die Übergangsanimation abgeschlossen ist und die neue Seitenansicht für den Benutzer sichtbar und interaktiv ist.

`finished` wird nur im Falle eines gleichen Dokuments (SPA) Übergangs abgelehnt, wenn der an {{domxref("Document.startViewTransition()", "document.startViewTransition()")}} übergebene Rückruf eine Ausnahme auslöst oder ein versprochenes Ergebnis zurückgibt, das abgelehnt wird. Dies würde darauf hinweisen, dass der neue Zustand der Seite nicht erstellt wurde.

Wenn eine Übergangsanimation zu starten fehlschlägt oder während des Übergangs unter Verwendung von {{domxref("ViewTransition.skipTransition()")}} übersprungen wird, wird der Endzustand dennoch erreicht, daher wird `finished` dennoch erfüllt.

## Wert

Ein Promise.

## Beispiele

### Unterschiedliche Übergänge für unterschiedliche Navigationen

Manchmal erfordern bestimmte Navigationen speziell zugeschnittene Übergänge. Beispielsweise kann eine „Zurück“-Navigation einen anderen Übergang als eine „Vorwärts“-Navigation erfordern. Der beste Weg, solche Fälle zu handhaben, besteht darin, einen Klassennamen auf dem `<html>`-Element zu setzen, den Übergang zu handhaben – die korrekte Animation unter Verwendung eines maßgeschneiderten Selektors anzuwenden – und dann den Klassennamen zu entfernen, nachdem der Übergang abgeschlossen ist.

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

> **Note:** `isBackNavigation` ist keine eingebaute Funktionalität; es ist eine theoretische Funktion, die mit der [Navigation API](/de/docs/Web/API/Navigation_API) oder ähnlich implementiert werden könnte.

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- [Smooth and simple transitions with the View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
