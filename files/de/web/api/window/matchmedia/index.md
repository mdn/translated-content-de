---
title: "Window: matchMedia() Methode"
short-title: matchMedia()
slug: Web/API/Window/matchMedia
l10n:
  sourceCommit: 7615562a3689a3e23a2b6b623597f4391740a53e
---

{{APIRef}}

Die **`matchMedia()`** Methode der [`Window`](/de/docs/Web/API/Window) Schnittstelle
gibt ein neues [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) Objekt zurück, das dann verwendet werden kann, um festzustellen, ob
das [`document`](/de/docs/Web/API/Document) der [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) Zeichenfolge entspricht, sowie um das Dokument zu überwachen, um festzustellen, wann es diese Media Query erfüllt (oder nicht mehr erfüllt).

## Syntax

```js-nolint
matchMedia(mediaQueryString)
```

### Parameter

- `mediaQueryString`
  - : Ein String, der die zu analysierende Media Query in eine [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) angibt.

    Genau wie in CSS muss jedes [Medienmerkmal](/de/docs/Web/CSS/@media#media_features) in Klammern innerhalb des Ausdrucks geschrieben werden. Zum Beispiel: `matchMedia("(width <= 600px)")` oder `matchMedia("(orientation: landscape)")` funktionieren, während `matchMedia("width < 600px")` oder `matchMedia("orientation: landscape")` nicht funktionieren. Schlüsselwörter für Medientypen (`all`, `print`, `screen`) und logische Operatoren (`and`, `or`, `not`, `only`) müssen nicht in Klammern geschrieben werden.

### Rückgabewert

Ein neues [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) Objekt für die Media Query. Verwenden Sie die Eigenschaften und Events dieses Objekts, um Übereinstimmungen zu erkennen und um Änderungen an diesen Übereinstimmungen im Laufe der Zeit zu überwachen.

## Hinweise zur Verwendung

Sie können die zurückgegebene Media Query verwenden, um sowohl sofortige als auch ereignisgesteuerte
Prüfungen durchzuführen, um festzustellen, ob das Dokument der Media Query entspricht.

Um eine einmalige, sofortige Prüfung durchzuführen, ob das Dokument der Media Query
entspricht, sehen Sie sich den Wert der [`matches`](/de/docs/Web/API/MediaQueryList/matches)
Eigenschaft an, die `true` ist, wenn das Dokument die Anforderungen der Media Query
erfüllt.

Wenn Sie ständig darüber informiert werden möchten, ob das Dokument der Media Query entspricht
oder nicht, können Sie stattdessen das [`change`](/de/docs/Web/API/MediaQueryList/change_event) Ereignis beobachten, das an das Objekt gesendet wird.
Es gibt [ein gutes Beispiel dafür](/de/docs/Web/API/Window/devicePixelRatio#monitoring_screen_resolution_or_zoom_level_changes)
im Artikel über [`Window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio).

## Beispiele

Dieses Beispiel führt die Media Query `(width <= 600px)` aus und zeigt den
Wert der resultierenden `MediaQueryList`-Eigenschaft `matches` in einem
{{HTMLElement("span")}}; dementsprechend wird die Ausgabe "true" anzeigen, wenn der Viewport
600 Pixel breit oder weniger ist, und "false" anzeigen, wenn das Fenster breiter ist.

### JavaScript

```js
let mql = window.matchMedia("(width <= 600px)");

document.querySelector(".mq-value").innerText = mql.matches;
```

Der JavaScript-Code übergibt die zu analysierende Media Query an `matchMedia()`, um sie zu kompilieren, und setzt dann den [`innerText`](/de/docs/Web/API/HTMLElement/innerText) des `<span>` auf den Wert der `matches`-Eigenschaft der Ergebnisse, sodass angezeigt wird, ob das Dokument der Media Query zum Zeitpunkt des Seitenladevorgangs entspricht oder nicht.

### HTML

```html
<span class="mq-value"></span>
```

Ein einfaches `<span>`, um die Ausgabe zu empfangen.

```css hidden
.mq-value {
  font:
    18px "Arial",
    sans-serif;
  font-weight: bold;
  color: #8888ff;
  padding: 0.4em;
  border: 1px solid #ddddee;
}
```

### Ergebnis

{{EmbedLiveSample("Examples", "100%", "60")}}

Besuchen Sie [Testing media queries programmatically](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries) für zusätzliche Codebeispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Using media queries from code](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)
