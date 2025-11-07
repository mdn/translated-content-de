---
title: Medienabfragen programmatisch testen
short-title: Testing
slug: Web/CSS/Guides/Media_queries/Testing
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das {{Glossary("DOM", "DOM")}} bietet Funktionen, die es ermöglichen, die Ergebnisse einer {{Glossary("media_query", "Medienabfrage")}} programmatisch über das Interface [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) und dessen Methoden und Eigenschaften zu testen. Sobald Sie ein `MediaQueryList`-Objekt erstellt haben, können Sie das Ergebnis der [Abfrage](/de/docs/Web/CSS/Guides/Media_queries/Using) überprüfen oder Benachrichtigungen erhalten, wenn sich das Ergebnis ändert.

## Eine Medienabfrageliste erstellen

Bevor Sie die Ergebnisse einer Medienabfrage auswerten können, müssen Sie das [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Objekt erstellen, das die Abfrage repräsentiert. Verwenden Sie dazu die Methode [`window.matchMedia`](/de/docs/Web/API/Window/matchMedia).

Zum Beispiel, um eine Abfrageliste einzurichten, die bestimmt, ob sich das Gerät im Quer- oder Hochformat [Orientierung](/de/docs/Web/CSS/Reference/At-rules/@media/orientation) befindet:

```js
const mediaQueryList = window.matchMedia("(orientation: portrait)");
```

## Das Ergebnis einer Abfrage überprüfen

Sobald Sie Ihre Medienabfrageliste erstellt haben, können Sie das Ergebnis der Abfrage überprüfen, indem Sie den Wert ihrer [`matches`](/de/docs/Web/API/MediaQueryList/matches)-Eigenschaft betrachten:

```js
if (mediaQueryList.matches) {
  /* The viewport is currently in portrait orientation */
} else {
  /* The viewport is not currently in portrait orientation, therefore landscape */
}
```

## Empfang von Abfragebenachrichtigungen

Wenn Sie über Änderungen des ausgewerteten Ergebnisses der Abfrage fortlaufend informiert werden müssen, ist es effizienter, einen [Listener](/de/docs/Web/API/EventTarget/addEventListener) zu registrieren als das Ergebnis der Abfrage abzufragen. Um dies zu tun, rufen Sie die Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf dem [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Objekt mit einer Callback-Funktion auf, die aufgerufen wird, wenn sich der Status der Medienabfrage ändert (z. B. von `true` zu `false`):

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

Dieser Code erstellt die Orientierungs-Test-Medienabfrageliste und fügt einen Event-Listener hinzu. Nachdem der Listener definiert wurde, rufen wir den Listener auch direkt auf. Damit passt unser Listener die Aktionen basierend auf der aktuellen Geräteorientierung an; andernfalls könnte unser Code annehmen, dass sich das Gerät beim Start im Hochformat befindet, obwohl es tatsächlich im Querformat ist.

Die Funktion `handleOrientationChange()` würde das Ergebnis der Abfrage betrachten und alles Notwendige bei einer Orientierungsänderung behandeln:

```js
function handleOrientationChange(evt) {
  if (evt.matches) {
    /* The viewport is currently in portrait orientation */
  } else {
    /* The viewport is currently in landscape orientation */
  }
}
```

Oben definieren wir den Parameter als `evt` — ein Ereignisobjekt vom Typ [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent), das auch die Eigenschaften [`media`](/de/docs/Web/API/MediaQueryListEvent/media) und [`matches`](/de/docs/Web/API/MediaQueryListEvent/matches) einschließt, sodass Sie diese Merkmale der `MediaQueryList` direkt darauf zugreifen oder auf das Ereignisobjekt zugreifen können.

## Beenden von Abfragebenachrichtigungen

Um keine weiteren Benachrichtigungen über Änderungen des Wertes Ihrer Medienabfrage zu erhalten, rufen Sie [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) auf der `MediaQueryList` auf und geben Sie den Namen der zuvor definierten Callback-Funktion an:

```js
mediaQueryList.removeEventListener("change", handleOrientationChange);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Medienabfragen](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [CSS Medienabfragen](/de/docs/Web/CSS/Guides/Media_queries) Modul
- [CSS Objektmodell](/de/docs/Web/API/CSS_Object_Model) Modul
- [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)
- [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent)
