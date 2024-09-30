---
title: "Window: matchMedia() Methode"
short-title: matchMedia()
slug: Web/API/Window/matchMedia
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef}}

Die **`matchMedia()`**-Methode des [`Window`](/de/docs/Web/API/Window)-Interfaces
gibt ein neues [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Objekt zurück, das verwendet werden kann, um zu bestimmen, ob das [`document`](/de/docs/Web/API/Document) die [Media-Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) Zeichenfolge erfüllt und um das Dokument zu überwachen, um zu erkennen, wann es diese Media-Query erfüllt (oder nicht mehr erfüllt).

## Syntax

```js-nolint
matchMedia(mediaQueryString)
```

### Parameter

- `mediaQueryString`
  - : Ein String, der die zu parsende Media-Query als [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) angibt.

### Rückgabewert

Ein neues [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Objekt für die Media-Query. Verwenden Sie die Eigenschaften und Ereignisse dieses Objekts, um Übereinstimmungen zu erkennen und um Änderungen dieser Übereinstimmungen im Laufe der Zeit zu überwachen.

## Hinweise zur Verwendung

Sie können die zurückgegebene Media-Query sowohl für sofortige als auch für ereignisgesteuerte Überprüfungen verwenden, um festzustellen, ob das Dokument die Media-Query erfüllt.

Um eine einmalige, sofortige Überprüfung durchzuführen, ob das Dokument die Media-Query erfüllt, schauen Sie sich den Wert der [`matches`](/de/docs/Web/API/MediaQueryList/matches)-Eigenschaft an, die `true` ist, wenn das Dokument die Anforderungen der Media-Query erfüllt.

Wenn Sie jederzeit informiert bleiben müssen, ob das Dokument die Media-Query erfüllt oder nicht, können Sie stattdessen das [`change`](/de/docs/Web/API/MediaQueryList/change_event)-Ereignis beobachten, das an das Objekt gesendet wird. Es gibt [ein gutes Beispiel dafür](/de/docs/Web/API/Window/devicePixelRatio#monitoring_screen_resolution_or_zoom_level_changes) im Artikel über [`Window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio).

## Beispiele

Dieses Beispiel führt die Media-Query `(max-width: 600px)` aus und zeigt den Wert der `matches`-Eigenschaft der resultierenden `MediaQueryList` in einem {{HTMLElement("span")}} an. Das Ergebnis zeigt "true", wenn der Viewport kleiner oder gleich 600 Pixel breit ist, und "false", wenn das Fenster breiter ist.

### JavaScript

```js
let mql = window.matchMedia("(max-width: 600px)");

document.querySelector(".mq-value").innerText = mql.matches;
```

Der JavaScript-Code übergibt die Media-Query an `matchMedia()`, um sie zu kompilieren, und setzt dann den [`innerText`](/de/docs/Web/API/HTMLElement/innerText) des `<span>` auf den Wert der [`matches`](/de/docs/Web/API/MediaQueryList/matches)-Eigenschaft der Ergebnisse, um anzugeben, ob das Dokument die Media-Query zum Zeitpunkt des Ladevorgangs der Seite erfüllt.

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

Siehe [Programmatische Tests von Media-Queries](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries) für zusätzliche Codebeispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media-Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Verwendung von Media-Queries im Code](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)
