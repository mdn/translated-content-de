---
title: "Window: matchMedia()-Methode"
short-title: matchMedia()
slug: Web/API/Window/matchMedia
l10n:
  sourceCommit: bc9f7bec1ab48f29d241e38a9f1598f783f6b60a
---

{{APIRef}}

Die **`matchMedia()`**-Methode der Schnittstelle [`Window`](/de/docs/Web/API/Window) gibt ein neues [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Objekt zurück, das dann verwendet werden kann, um festzustellen, ob das [`document`](/de/docs/Web/API/Document) dem [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)-String entspricht, sowie um das Dokument zu überwachen, um zu erkennen, wann es diesen Media Query erfüllt (oder nicht mehr erfüllt).

## Syntax

```js-nolint
matchMedia(mediaQueryString)
```

### Parameter

- `mediaQueryString`
  - : Ein String, der den zu parsenden Media Query in ein [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) angibt.

    Genau wie in CSS muss jede [Media-Funktion](/de/docs/Web/CSS/@media#media_features) innerhalb des Ausdrucks in Klammern gesetzt werden. Zum Beispiel: `matchMedia("(width <= 600px)")` oder `matchMedia("(orientation: landscape)")` funktionieren, während `matchMedia("width < 600px")` oder `matchMedia("orientation: landscape")` nicht funktionieren. Schlüsselwörter für Medientypen (`all`, `print`, `screen`) und logische Operatoren (`and`, `or`, `not`, `only`) müssen nicht in Klammern gesetzt werden.

### Rückgabewert

Ein neues [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Objekt für den Media Query. Verwenden Sie die Eigenschaften und Ereignisse dieses Objekts, um Übereinstimmungen zu erkennen und Änderungen dieser Übereinstimmungen im Laufe der Zeit zu überwachen.

## Anwendungshinweise

Sie können den zurückgegebenen Media Query verwenden, um sowohl sofortige als auch ereignisgesteuerte Überprüfungen durchzuführen, um festzustellen, ob das Dokument dem Media Query entspricht.

Um eine einmalige, sofortige Überprüfung durchzuführen, ob das Dokument dem Media Query entspricht, achten Sie auf den Wert der [`matches`](/de/docs/Web/API/MediaQueryList/matches)-Eigenschaft, die `true` sein wird, wenn das Dokument die Anforderungen des Media Query erfüllt.

Wenn Sie ständig darüber informiert werden müssen, ob das Dokument dem Media Query entspricht oder nicht, können Sie stattdessen das [`change`](/de/docs/Web/API/MediaQueryList/change_event)-Ereignis überwachen, das an das Objekt übermittelt wird. Es gibt [ein gutes Beispiel dafür](/de/docs/Web/API/Window/devicePixelRatio#monitoring_screen_resolution_or_zoom_level_changes) im Artikel zu [`Window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio).

## Beispiele

Dieses Beispiel führt den Media Query `(width <= 600px)` aus und zeigt den Wert der `matches`-Eigenschaft des resultierenden `MediaQueryList` in einem {{HTMLElement("span")}} an. Das Ergebnis wird daher "true" anzeigen, wenn das Ansichtsfenster kleiner oder gleich 600 Pixel breit ist, und "false", wenn das Fenster breiter ist.

### JavaScript

```js
let mql = window.matchMedia("(width <= 600px)");

document.querySelector(".mq-value").innerText = mql.matches;
```

Der JavaScript-Code übergibt den Media Query, der in `matchMedia()` übereinstimmen soll, um ihn zu kompilieren, und setzt dann die [`innerText`](/de/docs/Web/API/HTMLElement/innerText) des `<span>` auf den Wert der `matches`-Eigenschaft der Ergebnisse, sodass angezeigt wird, ob das Dokument im Moment des Ladens der Seite dem Media Query entspricht.

### HTML

```html
<span class="mq-value"></span>
```

Ein einfaches `<span>` für die Ausgabe.

```css hidden
.mq-value {
  font:
    18px arial,
    sans-serif;
  font-weight: bold;
  color: #8888ff;
  padding: 0.4em;
  border: 1px solid #ddddee;
}
```

### Ergebnis

{{EmbedLiveSample("Examples", "100%", "60")}}

Siehe [Media Queries programmgesteuert testen](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries) für zusätzliche Codebeispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Media Queries im Code verwenden](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)
