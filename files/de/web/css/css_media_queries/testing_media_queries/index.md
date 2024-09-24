---
title: Medienabfragen programmatisch testen
slug: Web/CSS/CSS_media_queries/Testing_media_queries
l10n:
  sourceCommit: f7daf15512ea736498837b68bcc36d82d6a323f4
---

{{CSSRef}}

Das {{Glossary("DOM")}} bietet Funktionen, mit denen die Ergebnisse einer {{Glossary("media query", "Medienabfrage")}} programmatisch getestet werden können, über die {{domxref("MediaQueryList")}}-Schnittstelle und deren Methoden und Eigenschaften. Sobald Sie ein `MediaQueryList`-Objekt erstellt haben, können Sie das Ergebnis der [Abfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) überprüfen oder Benachrichtigungen erhalten, wenn sich das Ergebnis ändert.

## Erstellen einer Medienabfrageliste

Bevor Sie die Ergebnisse einer Medienabfrage auswerten können, müssen Sie das {{domxref("MediaQueryList")}}-Objekt erstellen, das die Abfrage darstellt. Verwenden Sie dazu die Methode {{domxref("window.matchMedia")}}.

Zum Beispiel, um eine Abfrageliste einzurichten, die bestimmt, ob sich das Gerät in [Hoch- oder Querformat](/de/docs/Web/CSS/@media/orientation) befindet:

```js
const mediaQueryList = window.matchMedia("(orientation: portrait)");
```

## Überprüfen des Ergebnisses einer Abfrage

Sobald Sie Ihre Medienabfrageliste erstellt haben, können Sie das Ergebnis der Abfrage überprüfen, indem Sie den Wert ihrer [`matches`](/de/docs/Web/API/MediaQueryList/matches)-Eigenschaft betrachten:

```js
if (mediaQueryList.matches) {
  /* Der Viewport befindet sich derzeit im Hochformat */
} else {
  /* Der Viewport befindet sich derzeit nicht im Hochformat, also im Querformat */
}
```

## Erhalten von Abfrage-Benachrichtigungen

Wenn Sie Änderungen am ausgewerteten Ergebnis der Abfrage fortlaufend überwachen müssen, ist es effizienter, einen [Listener](/de/docs/Web/API/EventTarget/addEventListener) zu registrieren, als das Abfrageergebnis abzufragen. Um dies zu tun, rufen Sie die Methode {{domxref("EventTarget.addEventListener", "addEventListener()")}} auf dem {{domxref("MediaQueryList")}}-Objekt auf und übergeben Sie eine Callback-Funktion, die aufgerufen wird, wenn sich der Status der Medienabfrage ändert (z.B. wenn der Test der Medienabfrage von `true` auf `false` umschlägt):

```js
// Erstellen der Abfrageliste.
const mediaQueryList = window.matchMedia("(orientation: portrait)");

// Definieren einer Callback-Funktion für den Event-Listener.
function handleOrientationChange(mql) {
  // …
}

// Ausführen des Orientierungswechsel-Handlers einmal.
handleOrientationChange(mediaQueryList);

// Fügen Sie die Callback-Funktion als Listener zur Abfrageliste hinzu.
mediaQueryList.addEventListener("change", handleOrientationChange);
```

Dieser Code erstellt die auf Orientierung testende Medienabfrageliste und fügt ihr einen Ereignis-Listener hinzu. Nach der Definition des Listeners rufen wir den Listener auch direkt auf. Dies lässt unseren Listener Anpassungen basierend auf der aktuellen Geräteausrichtung vornehmen; andernfalls könnte unser Code annehmen, dass sich das Gerät im Hochformat befindet, obwohl es tatsächlich im Querformat ist.

Die Funktion `handleOrientationChange()` würde das Ergebnis der Abfrage untersuchen und das machen, was wir bei einer Änderung der Ausrichtung tun müssen:

```js
function handleOrientationChange(evt) {
  if (evt.matches) {
    /* Der Viewport befindet sich derzeit im Hochformat */
  } else {
    /* Der Viewport befindet sich derzeit im Querformat */
  }
}
```

Oben definieren wir den Parameter als `evt` - ein Ereignisobjekt vom Typ {{domxref("MediaQueryListEvent")}}, das auch die Eigenschaften {{domxref("MediaQueryListEvent.media","media")}} und {{domxref("MediaQueryListEvent.matches","matches")}} enthält, so dass Sie diese Merkmale der `MediaQueryList` abfragen können, indem Sie direkt darauf zugreifen oder auf das Ereignisobjekt zugreifen.

## Beenden von Abfrage-Benachrichtigungen

Um keine Benachrichtigungen über Änderungen des Werts Ihrer Medienabfrage mehr zu erhalten, rufen Sie {{domxref("EventTarget.removeEventListener", "removeEventListener()")}} auf dem `MediaQueryList` auf und übergeben Sie ihm den Namen der zuvor definierten Callback-Funktion:

```js
mediaQueryList.removeEventListener("change", handleOrientationChange);
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) Modul
- [CSS-Objektmodell](/de/docs/Web/API/CSS_Object_Model) Modul
- {{domxref("window.matchMedia()")}}
- {{domxref("MediaQueryList")}}
- {{domxref("MediaQueryListEvent")}}
