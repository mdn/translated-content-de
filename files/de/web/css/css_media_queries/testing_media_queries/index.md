---
title: Medienabfragen programmatisch testen
slug: Web/CSS/CSS_media_queries/Testing_media_queries
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das {{Glossary("DOM", "DOM")}} bietet Funktionen, mit denen die Ergebnisse einer {{Glossary("media_query", "Medienabfrage")}} programmatisch über das [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Interface und dessen Methoden und Eigenschaften getestet werden können. Sobald Sie ein `MediaQueryList`-Objekt erstellt haben, können Sie das Ergebnis der [Abfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) überprüfen oder Benachrichtigungen erhalten, wenn sich das Ergebnis ändert.

## Erstellen einer Medienabfrageliste

Bevor Sie die Ergebnisse einer Medienabfrage auswerten können, müssen Sie das [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Objekt erstellen, das die Abfrage darstellt. Verwenden Sie dazu die Methode [`window.matchMedia`](/de/docs/Web/API/Window/matchMedia).

Zum Beispiel, um eine Abfrageliste einzurichten, die bestimmt, ob sich das Gerät im Quer- oder Hochformat [Orientierung](/de/docs/Web/CSS/@media/orientation) befindet:

```js
const mediaQueryList = window.matchMedia("(orientation: portrait)");
```

## Überprüfen des Ergebnisses einer Abfrage

Sobald Sie Ihre Medienabfrageliste erstellt haben, können Sie das Ergebnis der Abfrage überprüfen, indem Sie den Wert ihrer [`matches`](/de/docs/Web/API/MediaQueryList/matches)-Eigenschaft betrachten:

```js
if (mediaQueryList.matches) {
  /* The viewport is currently in portrait orientation */
} else {
  /* The viewport is not currently in portrait orientation, therefore landscape */
}
```

## Erhalten von Abfragebenachrichtigungen

Wenn Sie fortlaufend über Änderungen am ausgewerteten Ergebnis der Abfrage informiert sein müssen, ist es effizienter, einen [Listener](/de/docs/Web/API/EventTarget/addEventListener) zu registrieren, als das Abfrageergebnis abzufragen. Rufen Sie dazu die Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf dem [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Objekt auf und übergeben Sie eine Callback-Funktion, die aufgerufen wird, wenn sich der Status der Medienabfrage ändert (z. B. wenn der Medienabfragetest von `true` zu `false` wechselt):

```js
// Create the query list.
const mediaQueryList = window.matchMedia("(orientation: portrait)");

// Define a callback function for the event listener.
function handleOrientationChange(mql) {
  // …
}

// Run the orientation change handler once.
handleOrientationChange(mediaQueryList);

// Add the callback function as a listener to the query list.
mediaQueryList.addEventListener("change", handleOrientationChange);
```

Dieser Code erstellt die Medienabfrageliste zum Testen der Orientierung und fügt ihr einen Ereignislistener hinzu. Nachdem der Listener definiert wurde, wird dieser auch direkt aufgerufen. Dadurch passt unser Listener die Einstellungen basierend auf der aktuellen Geräteorientierung an; andernfalls könnte unser Code annehmen, dass sich das Gerät im Hochformat befindet, auch wenn es tatsächlich im Querformat ist.

Die Funktion `handleOrientationChange()` würde das Ergebnis der Abfrage betrachten und alles Notwendige bei einer Orientierungänderung ausführen:

```js
function handleOrientationChange(evt) {
  if (evt.matches) {
    /* The viewport is currently in portrait orientation */
  } else {
    /* The viewport is currently in landscape orientation */
  }
}
```

Oben definieren wir den Parameter als `evt` — ein Ereignisobjekt des Typs [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent), das auch die Eigenschaften [`media`](/de/docs/Web/API/MediaQueryListEvent/media) und [`matches`](/de/docs/Web/API/MediaQueryListEvent/matches) umfasst, sodass Sie diese Merkmale der `MediaQueryList` abfragen können, indem Sie direkt darauf zugreifen oder auf das Ereignisobjekt zugreifen.

## Beenden von Abfragebenachrichtigungen

Um keine Benachrichtigungen mehr über Änderungen des Werts Ihrer Medienabfrage zu erhalten, rufen Sie [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) auf der `MediaQueryList` auf und übergeben Sie den Namen der zuvor definierten Callback-Funktion:

```js
mediaQueryList.removeEventListener("change", handleOrientationChange);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- Modul [CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries)
- Modul [CSS-Objektmodell](/de/docs/Web/API/CSS_Object_Model)
- [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)
- [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent)
