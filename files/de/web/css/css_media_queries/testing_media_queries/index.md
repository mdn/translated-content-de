---
title: Testen von Media Queries programmatisch
slug: Web/CSS/CSS_media_queries/Testing_media_queries
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Das {{Glossary("DOM", "DOM")}} bietet Funktionen, mit denen die Ergebnisse einer {{Glossary("media_query", "Media Query")}} programmatisch über das [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Interface und dessen Methoden und Eigenschaften getestet werden können. Sobald Sie ein `MediaQueryList`-Objekt erstellt haben, können Sie das Ergebnis der [Abfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) überprüfen oder Benachrichtigungen erhalten, wenn sich das Ergebnis ändert.

## Erstellen einer Media Query-Liste

Bevor Sie die Ergebnisse einer Media Query auswerten können, müssen Sie das [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Objekt erstellen, das die Abfrage darstellt. Verwenden Sie dazu die Methode [`window.matchMedia`](/de/docs/Web/API/Window/matchMedia).

Zum Beispiel, um eine Abfrageliste einzurichten, die bestimmt, ob sich das Gerät in einer Quer- oder Hochformat-[Ausrichtung](/de/docs/Web/CSS/Reference/At-rules/@media/orientation) befindet:

```js
const mediaQueryList = window.matchMedia("(orientation: portrait)");
```

## Überprüfung des Ergebnisses einer Abfrage

Sobald Sie Ihre Media Query-Liste erstellt haben, können Sie das Ergebnis der Abfrage überprüfen, indem Sie den Wert der Eigenschaft [`matches`](/de/docs/Web/API/MediaQueryList/matches) betrachten:

```js
if (mediaQueryList.matches) {
  /* The viewport is currently in portrait orientation */
} else {
  /* The viewport is not currently in portrait orientation, therefore landscape */
}
```

## Empfangen von Abfragebenachrichtigungen

Wenn Sie fortlaufend über Änderungen des ausgewerteten Ergebnisses der Abfrage informiert werden müssen, ist es effizienter, einen [Listener](/de/docs/Web/API/EventTarget/addEventListener) zu registrieren, als das Abfrageergebnis abzufragen. Dazu rufen Sie die Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) am [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Objekt auf, mit einer Callback-Funktion, die aufgerufen wird, wenn sich der Status der Media Query ändert (z. B. geht der Test der Media Query von `true` zu `false` über):

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

Dieser Code erstellt die Abfrageliste zur Ausrichtungstestung und fügt einen Ereignis-Listener hinzu. Nachdem der Listener definiert wurde, rufen wir ihn auch direkt auf. Dadurch wird unser Listener Anpassungen basierend auf der aktuellen Ausrichtung des Geräts vornehmen; ansonsten könnte unser Code annehmen, dass sich das Gerät beim Start im Hochformat befindet, selbst wenn es sich tatsächlich im Querformat befindet.

Die `handleOrientationChange()`-Funktion würde das Ergebnis der Abfrage betrachten und das behandeln, was wir bei einer Änderung der Ausrichtung tun müssen:

```js
function handleOrientationChange(evt) {
  if (evt.matches) {
    /* The viewport is currently in portrait orientation */
  } else {
    /* The viewport is currently in landscape orientation */
  }
}
```

Oben definieren wir den Parameter als `evt` — ein Ereignisobjekt vom Typ [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent), das auch die Eigenschaften [`media`](/de/docs/Web/API/MediaQueryListEvent/media) und [`matches`](/de/docs/Web/API/MediaQueryListEvent/matches) enthält, sodass Sie diese Merkmale der `MediaQueryList` direkt abfragen oder auf das Ereignisobjekt zugreifen können.

## Beenden von Abfragebenachrichtigungen

Um keine Benachrichtigungen mehr über Änderungen am Wert Ihrer Media Query zu erhalten, rufen Sie [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) auf der `MediaQueryList` auf und übergeben Sie den Namen der zuvor definierten Callback-Funktion:

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
- [CSS-Objektmodell](/de/docs/Web/API/CSS_Object_Model) Modul
- [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)
- [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent)
