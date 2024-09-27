---
title: "Window: matchMedia()-Methode"
short-title: matchMedia()
slug: Web/API/Window/matchMedia
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef}}

Die **`matchMedia()`**-Methode des [`Window`](/de/docs/Web/API/Window)-Interfaces gibt ein neues [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Objekt zurück, das dann verwendet werden kann, um festzustellen, ob das [`document`](/de/docs/Web/API/Document) der [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)-Zeichenfolge entspricht. Außerdem kann damit das Dokument überwacht werden, um zu erkennen, wann es mit dieser Media Query übereinstimmt (oder nicht mehr übereinstimmt).

## Syntax

```js-nolint
matchMedia(mediaQueryString)
```

### Parameter

- `mediaQueryString`
  - : Eine Zeichenfolge, die die Media Query angibt, die in ein [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) geparst werden soll.

### Rückgabewert

Ein neues [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Objekt für die Media Query. Verwenden Sie die Eigenschaften und Ereignisse dieses Objekts, um Übereinstimmungen zu erkennen und Änderungen dieser Übereinstimmungen im Laufe der Zeit zu überwachen.

## Nutzungshinweise

Sie können die zurückgegebene Media Query sowohl für sofortige als auch für ereignisgesteuerte Prüfungen verwenden, um festzustellen, ob das Dokument der Media Query entspricht.

Um eine einmalige, sofortige Prüfung durchzuführen, ob das Dokument der Media Query entspricht, betrachten Sie den Wert der [`matches`](/de/docs/Web/API/MediaQueryList/matches)-Eigenschaft, die `true` ist, wenn das Dokument die Anforderungen der Media Query erfüllt.

Wenn Sie ständig darüber informiert werden müssen, ob das Dokument der Media Query entspricht oder nicht, können Sie stattdessen das [`change`](/de/docs/Web/API/MediaQueryList/change_event)-Ereignis überwachen, das an das Objekt gesendet wird. Im Artikel über [`Window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio) gibt es [ein gutes Beispiel dafür](/de/docs/Web/API/Window/devicePixelRatio#monitoring_screen_resolution_or_zoom_level_changes).

## Beispiele

Dieses Beispiel führt die Media Query `(max-width: 600px)` aus und zeigt den Wert der `matches`-Eigenschaft des resultierenden `MediaQueryList` in einem {{HTMLElement("span")}} an; dementsprechend wird die Ausgabe "true" sein, wenn der Ansichtsbereich 600 Pixel oder schmaler ist, und "false", wenn das Fenster breiter ist.

### JavaScript

```js
let mql = window.matchMedia("(max-width: 600px)");

document.querySelector(".mq-value").innerText = mql.matches;
```

Der JavaScript-Code übergibt die zu prüfende Media Query an `matchMedia()`, um sie zu kompilieren, und setzt dann den [`innerText`](/de/docs/Web/API/HTMLElement/innerText) des `<span>` auf den Wert der [`matches`](/de/docs/Web/API/MediaQueryList/matches)-Eigenschaft des Ergebnisses, sodass angezeigt wird, ob das Dokument der Media Query zu dem Zeitpunkt entspricht, zu dem die Seite geladen wurde.

### HTML

```html
<span class="mq-value"></span>
```

Ein einfaches `<span>`, um die Ausgabe zu empfangen.

```css hidden
.mq-value {
  font:
    18px arial,
    sans-serif;
  font-weight: bold;
  color: #88f;
  padding: 0.4em;
  border: 1px solid #dde;
}
```

### Ergebnis

{{EmbedLiveSample("Examples", "100%", "60")}}

Für zusätzliche Codebeispiele siehe [Testing media queries programmatically](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Using media queries from code](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)
