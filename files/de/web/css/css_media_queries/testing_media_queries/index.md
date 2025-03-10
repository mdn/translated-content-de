---
title: Testen von Media Queries programmatisch
slug: Web/CSS/CSS_media_queries/Testing_media_queries
l10n:
  sourceCommit: ad896488bf8fac04fc6fa144c441fdbfd880737c
---

{{CSSRef}}

Das {{Glossary("DOM", "DOM")}} bietet Funktionen, die die Ergebnisse einer {{Glossary("media_query", "Media Query")}} programmatisch testen können, über das [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Interface und dessen Methoden und Eigenschaften. Sobald Sie ein `MediaQueryList`-Objekt erstellt haben, können Sie das Ergebnis der [Abfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) überprüfen oder Benachrichtigungen erhalten, wenn sich das Ergebnis ändert.

## Erstellen einer Media Query-Liste

Bevor Sie die Ergebnisse einer Media Query auswerten können, müssen Sie das [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Objekt erstellen, das die Abfrage repräsentiert. Dazu verwenden Sie die [`window.matchMedia`](/de/docs/Web/API/Window/matchMedia)-Methode.

Zum Beispiel, um eine Abfrageliste einzurichten, die bestimmt, ob das Gerät im Quer- oder Hochformat ist:

```js
const mediaQueryList = window.matchMedia("(orientation: portrait)");
```

## Überprüfen des Ergebnisses einer Abfrage

Sobald Sie Ihre Media Query-Liste erstellt haben, können Sie das Ergebnis der Abfrage überprüfen, indem Sie den Wert ihrer [`matches`](/de/docs/Web/API/MediaQueryList/matches)-Eigenschaft betrachten:

```js
if (mediaQueryList.matches) {
  /* The viewport is currently in portrait orientation */
} else {
  /* The viewport is not currently in portrait orientation, therefore landscape */
}
```

## Empfangen von Abfragebenachrichtigungen

Wenn Sie laufend über Änderungen des ausgewerteten Ergebnisses der Abfrage informiert werden müssen, ist es effizienter, einen [Listener](/de/docs/Web/API/EventTarget/addEventListener) zu registrieren, anstatt das Ergebnis der Abfrage abzufragen. Dafür rufen Sie die [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Methode auf dem [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Objekt auf und übergeben eine Callback-Funktion, die aufgerufen wird, wenn sich der Status der Media Query ändert (z.B. der Media Query-Test geht von `true` zu `false`):

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

Dieser Code erstellt die Media Query-Liste zur Prüfung der Ausrichtung und fügt ihr einen Event-Listener hinzu. Nachdem der Listener definiert wurde, rufen wir ihn auch direkt auf. So passt unser Listener sich der aktuellen Geräteausrichtung an; andernfalls könnte unser Code davon ausgehen, dass sich das Gerät im Hochformat befindet, auch wenn es tatsächlich im Querformat ist.

Die Funktion `handleOrientationChange()` würde das Ergebnis der Abfrage betrachten und alles Notwendige bei einer Änderung der Ausrichtung erledigen:

```js
function handleOrientationChange(evt) {
  if (evt.matches) {
    /* The viewport is currently in portrait orientation */
  } else {
    /* The viewport is currently in landscape orientation */
  }
}
```

Oben definieren wir den Parameter als `evt` — ein Ereignisobjekt vom Typ [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent), das auch die Eigenschaften [`media`](/de/docs/Web/API/MediaQueryListEvent/media) und [`matches`](/de/docs/Web/API/MediaQueryListEvent/matches) enthält. Sie können diese Funktionen der `MediaQueryList` direkt abfragen oder auf das Ereignisobjekt zugreifen.

## Beenden von Abfragebenachrichtigungen

Um keine Benachrichtigungen mehr über Änderungen des Wertes Ihrer Media Query zu erhalten, rufen Sie [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) auf der `MediaQueryList` auf und übergeben den Namen der zuvor definierten Callback-Funktion:

```js
mediaQueryList.removeEventListener("change", handleOrientationChange);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [CSS Media Queries](/de/docs/Web/CSS/CSS_media_queries) Modul
- [CSS Object Model](/de/docs/Web/API/CSS_Object_Model) Modul
- [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)
- [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent)
