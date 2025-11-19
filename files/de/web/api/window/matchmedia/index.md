---
title: "Window: matchMedia() Methode"
short-title: matchMedia()
slug: Web/API/Window/matchMedia
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef}}

Die **`matchMedia()`** Methode des [`Window`](/de/docs/Web/API/Window) Interfaces
gibt ein neues [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) Objekt zurück, das verwendet werden kann, um festzustellen, ob das [`document`](/de/docs/Web/API/Document) die [Media Query](/de/docs/Web/CSS/Guides/Media_queries/Using) Zeichenkette erfüllt, sowie um das Dokument zu überwachen, um zu erkennen, wann diese Media Query erfüllt wird (oder nicht mehr erfüllt wird).

## Syntax

```js-nolint
matchMedia(mediaQueryString)
```

### Parameter

- `mediaQueryString`
  - : Eine Zeichenkette, die die Media Query angibt, die in ein [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) geparst werden soll.

    Wie in CSS muss jede [Medienfunktion](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) innerhalb von Klammern in dem Ausdruck eingeschlossen werden. Zum Beispiel: `matchMedia("(width <= 600px)")` oder `matchMedia("(orientation: landscape)")` funktionieren, während `matchMedia("width < 600px")` oder `matchMedia("orientation: landscape")` nicht funktionieren. Schlüsselwörter für Medientypen (`all`, `print`, `screen`) und logische Operatoren (`and`, `or`, `not`, `only`) müssen nicht in Klammern eingeschlossen werden.

### Rückgabewert

Ein neues [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) Objekt für die Media Query. Verwenden Sie die Eigenschaften und Ereignisse dieses Objekts, um Übereinstimmungen zu erkennen und Änderungen dieser Übereinstimmungen im Laufe der Zeit zu überwachen.

## Verwendungshinweise

Sie können die zurückgegebene Media Query verwenden, um sowohl sofortige als auch ereignisgesteuerte Überprüfungen durchzuführen, um zu sehen, ob das Dokument die Media Query erfüllt.

Um eine einmalige, sofortige Überprüfung durchzuführen, ob das Dokument die Media Query erfüllt, betrachten Sie den Wert der [`matches`](/de/docs/Web/API/MediaQueryList/matches) Eigenschaft, die `true` ist, wenn das Dokument die Anforderungen der Media Query erfüllt.

Wenn Sie fortlaufend informiert werden möchten, ob das Dokument die Media Query erfüllt, können Sie stattdessen das [`change`](/de/docs/Web/API/MediaQueryList/change_event) Ereignis beobachten, das an das Objekt gesendet wird. Es gibt [ein gutes Beispiel dafür](/de/docs/Web/API/Window/devicePixelRatio#monitoring_screen_resolution_or_zoom_level_changes) im Artikel über [`Window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio).

## Beispiele

Dieses Beispiel führt die Media Query `(width <= 600px)` aus und zeigt den Wert der `matches` Eigenschaft des resultierenden `MediaQueryList` in einem {{HTMLElement("span")}} an; als Ergebnis wird die Ausgabe "true" sein, wenn der Viewport weniger als oder genau 600 Pixel breit ist und "false" sein, wenn das Fenster breiter ist.

### JavaScript

```js
let mql = window.matchMedia("(width <= 600px)");

document.querySelector(".mq-value").innerText = mql.matches;
```

Der JavaScript-Code übergibt die Media Query, die abgeglichen werden soll, an `matchMedia()`, um sie zu kompilieren, und setzt dann den [`innerText`](/de/docs/Web/API/HTMLElement/innerText) des `<span>` auf den Wert der [`matches`](/de/docs/Web/API/MediaQueryList/matches) Eigenschaft der Ergebnisse, um anzuzeigen, ob das Dokument die Media Query erfüllt, zu dem Zeitpunkt, an dem die Seite geladen wurde.

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

Sehen Sie [Testing media queries programmatically](/de/docs/Web/CSS/Guides/Media_queries/Testing) für zusätzliche Codebeispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [Verwendung von Media Queries im Code](/de/docs/Web/CSS/Guides/Media_queries/Testing)
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)
