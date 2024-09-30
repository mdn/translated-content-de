---
title: Media Queries programmatisch testen
slug: Web/CSS/CSS_media_queries/Testing_media_queries
l10n:
  sourceCommit: f7daf15512ea736498837b68bcc36d82d6a323f4
---

{{CSSRef}}

Das [DOM](/de/docs/Glossary/DOM) bietet Funktionen, mit denen die Ergebnisse einer [Media Query](/de/docs/Glossary/media_query) programmatisch getestet werden können, über das [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Interface und dessen Methoden und Eigenschaften. Sobald Sie ein `MediaQueryList`-Objekt erstellt haben, können Sie das Ergebnis der [Abfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) überprüfen oder Benachrichtigungen erhalten, wenn sich das Ergebnis ändert.

## Erstellen einer Media Query Liste

Bevor Sie die Ergebnisse einer Media Query auswerten können, müssen Sie das [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Objekt erstellen, das die Abfrage darstellt. Dazu verwenden Sie die Methode [`window.matchMedia`](/de/docs/Web/API/Window/matchMedia).

Zum Beispiel, um eine Abfrageliste einzurichten, die bestimmt, ob sich das Gerät im Hoch- oder Querformat befindet:

```js
const mediaQueryList = window.matchMedia("(orientation: portrait)");
```

## Überprüfung des Abfrageergebnisses

Sobald Sie Ihre Media Query Liste erstellt haben, können Sie das Ergebnis der Abfrage überprüfen, indem Sie den Wert der [`matches`](/de/docs/Web/API/MediaQueryList/matches)-Eigenschaft betrachten:

```js
if (mediaQueryList.matches) {
  /* The viewport is currently in portrait orientation */
} else {
  /* The viewport is not currently in portrait orientation, therefore landscape */
}
```

## Empfangen von Abfragen-Benachrichtigungen

Wenn Sie laufend über Änderungen am ausgewerteten Ergebnis der Abfrage informiert werden müssen, ist es effizienter, einen [Listener](/de/docs/Web/API/EventTarget/addEventListener) zu registrieren, als das Ergebnis der Abfrage permanent abzufragen. Dazu rufen Sie die Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf dem [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Objekt auf und übergeben eine Callback-Funktion, die aufgerufen wird, wenn sich der Status der Medienabfrage ändert (z.B. wenn der Medientest von `true` zu `false` wechselt):

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

Dieser Code erstellt die Media Query Liste zur Orientierungstestung und fügt ihr einen Event Listener hinzu. Nachdem der Listener definiert ist, rufen wir ihn auch direkt auf. So kann unser Listener Anpassungen basierend auf der aktuellen Geräteorientierung durchführen; andernfalls könnte unser Code annehmen, dass das Gerät im Hochformat startet, selbst wenn es tatsächlich im Querformat ist.

Die Funktion `handleOrientationChange()` würde das Ergebnis der Abfrage betrachten und das tun, was bei einer Änderung der Orientierung erforderlich ist:

```js
function handleOrientationChange(evt) {
  if (evt.matches) {
    /* The viewport is currently in portrait orientation */
  } else {
    /* The viewport is currently in landscape orientation */
  }
}
```

Oben definieren wir den Parameter als `evt` — ein Event-Objekt vom Typ [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent), das auch die Eigenschaften [`media`](/de/docs/Web/API/MediaQueryListEvent/media) und [`matches`](/de/docs/Web/API/MediaQueryListEvent/matches) enthält, sodass Sie diese Funktionen der `MediaQueryList` abfragen können, indem Sie direkt darauf zugreifen oder auf das Event-Objekt zugreifen.

## Beenden von Abfragen-Benachrichtigungen

Um keine Benachrichtigungen mehr über Änderungen am Wert Ihrer Media Query zu erhalten, rufen Sie [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) auf dem `MediaQueryList`-Objekt auf und übergeben den Namen der zuvor definierten Callback-Funktion:

```js
mediaQueryList.removeEventListener("change", handleOrientationChange);
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [CSS Medienabfragen](/de/docs/Web/CSS/CSS_media_queries)-Modul
- [CSS Objektmodell](/de/docs/Web/API/CSS_Object_Model)-Modul
- [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)
- [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent)
