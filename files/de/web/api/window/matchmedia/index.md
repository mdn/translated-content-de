---
title: "Window: matchMedia() Methode"
short-title: matchMedia()
slug: Web/API/Window/matchMedia
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef}}

Die **`matchMedia()`** Methode des [`Window`](/de/docs/Web/API/Window)-Interfaces gibt ein neues [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Objekt zurück, das verwendet werden kann, um festzustellen, ob das [`document`](/de/docs/Web/API/Document) die [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) Zeichenkette erfüllt, sowie um das Dokument zu überwachen, um festzustellen, wann es diese Media Query erfüllt (oder nicht mehr erfüllt).

## Syntax

```js-nolint
matchMedia(mediaQueryString)
```

### Parameter

- `mediaQueryString`

  - : Eine Zeichenkette, die die Media Query spezifiziert, die in eine [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) geparst werden soll.

    Genau wie in CSS muss jedes [Media Feature](/de/docs/Web/CSS/@media#media_features) innerhalb des Ausdrucks in Klammern gesetzt werden. Zum Beispiel: `matchMedia("(max-width: 600px)")` funktioniert, während `matchMedia("max-width: 600px")` nicht funktioniert. Schlüsselwörter für Medientypen (`all`, `print`, `screen`) und logische Operatoren (`and`, `or`, `not`, `only`) müssen nicht in Klammern gesetzt werden.

### Rückgabewert

Ein neues [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Objekt für die Media Query. Verwenden Sie die Eigenschaften und Ereignisse dieses Objekts, um Übereinstimmungen zu erkennen und um Änderungen dieser Übereinstimmungen über die Zeit zu überwachen.

## Hinweise zur Verwendung

Sie können die zurückgegebene Media Query sowohl für sofortige als auch für ereignisgesteuerte Überprüfungen verwenden, um zu sehen, ob das Dokument die Media Query erfüllt.

Um eine einmalige, sofortige Überprüfung durchzuführen, ob das Dokument die Media Query erfüllt, betrachten Sie den Wert der [`matches`](/de/docs/Web/API/MediaQueryList/matches)-Eigenschaft, die `true` ist, wenn das Dokument die Anforderungen der Media Query erfüllt.

Wenn Sie kontinuierlich darüber informiert sein möchten, ob das Dokument die Media Query erfüllt oder nicht, können Sie stattdessen das [`change`](/de/docs/Web/API/MediaQueryList/change_event)-Ereignis beobachten, das dem Objekt zugestellt wird. Es gibt [ein gutes Beispiel dafür](/de/docs/Web/API/Window/devicePixelRatio#monitoring_screen_resolution_or_zoom_level_changes) im Artikel über [`Window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio).

## Beispiele

Dieses Beispiel führt die Media Query `(max-width: 600px)` aus und zeigt den Wert der `matches`-Eigenschaft der resultierenden `MediaQueryList` in einem {{HTMLElement("span")}} an; das Ergebnis wird "true" anzeigen, wenn der Viewport kleiner oder gleich 600 Pixel breit ist, und "false", wenn das Fenster breiter ist.

### JavaScript

```js
let mql = window.matchMedia("(max-width: 600px)");

document.querySelector(".mq-value").innerText = mql.matches;
```

Der JavaScript-Code übergibt die Media Query an `matchMedia()`, um sie zu kompilieren, und setzt dann den [`innerText`](/de/docs/Web/API/HTMLElement/innerText) des `<span>` auf den Wert der `matches`-Eigenschaft der Ergebnisse, sodass angezeigt wird, ob das Dokument die Media Query in dem Moment erfüllt hat, als die Seite geladen wurde.

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

Siehe [Medienabfragen programmgesteuert testen](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries) für zusätzliche Codebeispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Medienabfragen aus Code verwenden](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)
