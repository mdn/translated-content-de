---
title: Medientypen programmatisch testen
slug: Web/CSS/CSS_media_queries/Testing_media_queries
l10n:
  sourceCommit: f7daf15512ea736498837b68bcc36d82d6a323f4
---

{{CSSRef}}

Das [DOM](/de/docs/Glossary/DOM) stellt Funktionen zur Verfügung, die das Ergebnis einer [Media Query](/de/docs/Glossary/media_query) programmatisch testen können, über das [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Interface und dessen Methoden und Eigenschaften. Sobald Sie ein `MediaQueryList`-Objekt erstellt haben, können Sie das Ergebnis der [Abfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) überprüfen oder Benachrichtigungen erhalten, wenn sich das Ergebnis ändert.

## Erstellen einer Media Query-Liste

Bevor Sie die Ergebnisse einer Media Query auswerten können, müssen Sie das [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Objekt erstellen, das die Abfrage darstellt. Nutzen Sie dafür die Methode [`window.matchMedia`](/de/docs/Web/API/Window/matchMedia).

Zum Beispiel, um eine Abfrageliste zu erstellen, die bestimmt, ob das Gerät im Landschafts- oder Hochformat [orientiert](/de/docs/Web/CSS/@media/orientation) ist:

```js
const mediaQueryList = window.matchMedia("(orientation: portrait)");
```

## Überprüfen des Abfrageergebnisses

Sobald Sie Ihre Media Query-Liste erstellt haben, können Sie das Ergebnis der Abfrage überprüfen, indem Sie den Wert der [`matches`](/de/docs/Web/API/MediaQueryList/matches)-Eigenschaft betrachten:

```js
if (mediaQueryList.matches) {
  /* The viewport is currently in portrait orientation */
} else {
  /* The viewport is not currently in portrait orientation, therefore landscape */
}
```

## Empfang von Abfragebenachrichtigungen

Wenn Sie laufend über Änderungen des ausgewerteten Abfrageergebnisses informiert werden müssen, ist es effizienter, einen [Listener](/de/docs/Web/API/EventTarget/addEventListener) zu registrieren, als das Ergebnis der Abfrage abzufragen. Rufen Sie dazu die Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf dem [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Objekt auf und übergeben Sie eine Callback-Funktion, die bei Änderung des Status der Media Query (z.B. der Wechsel von `true` zu `false`) aufgerufen wird:

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

Dieser Code erstellt die Abfrageliste zum Testen der Orientierung und fügt dieser einen Event-Listener hinzu. Nachdem der Listener definiert wurde, rufen wir diesen auch direkt auf. Dies führt dazu, dass unser Listener Anpassungen basierend auf der aktuellen Geräteausrichtung vornimmt; andernfalls könnte unser Code davon ausgehen, dass das Gerät im Hochformat gestartet wird, auch wenn es tatsächlich im Querformat ist.

Die Funktion `handleOrientationChange()` würde das Ergebnis der Abfrage betrachten und das tun, was wir bei einer Orientierungsänderung benötigen:

```js
function handleOrientationChange(evt) {
  if (evt.matches) {
    /* The viewport is currently in portrait orientation */
  } else {
    /* The viewport is currently in landscape orientation */
  }
}
```

Oben wird der Parameter als `evt` definiert — ein Ereignisobjekt vom Typ [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent), das auch die Eigenschaften [`media`](/de/docs/Web/API/MediaQueryListEvent/media) und [`matches`](/de/docs/Web/API/MediaQueryListEvent/matches) beinhaltet, sodass Sie diese Funktionen des `MediaQueryList` direkt oder über das Ereignisobjekt abfragen können.

## Beenden von Abfragebenachrichtigungen

Um keine Benachrichtigungen mehr über Änderungen am Wert Ihrer Media Query zu erhalten, rufen Sie [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) auf der `MediaQueryList` auf und übergeben Sie den Namen der zuvor definierten Callback-Funktion:

```js
mediaQueryList.removeEventListener("change", handleOrientationChange);
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [CSS media queries](/de/docs/Web/CSS/CSS_media_queries) Modul
- [CSS Objektmodell](/de/docs/Web/API/CSS_Object_Model) Modul
- [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)
- [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent)
