---
title: "Window: matchMedia() Methode"
short-title: matchMedia()
slug: Web/API/Window/matchMedia
l10n:
  sourceCommit: 7eb271b638ce9fccd7e8866649d51f2710b481d2
---

{{APIRef}}

Die **`matchMedia()`** Methode des [`Window`](/de/docs/Web/API/Window) Interfaces
gibt ein neues [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) Objekt zurück, das verwendet werden kann, um festzustellen, ob
das [`document`](/de/docs/Web/API/Document) der [Media-Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)-Zeichenkette entspricht. Außerdem kann damit das Dokument überwacht werden, um festzustellen, wann es dieser Media-Query entspricht (oder nicht mehr entspricht).

## Syntax

```js-nolint
matchMedia(mediaQueryString)
```

### Parameter

- `mediaQueryString`

  - : Ein String, der die Media-Query spezifiziert, die in eine [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) geparst wird.

    Genau wie in CSS muss jede [Media-Funktion](/de/docs/Web/CSS/@media#media_features) in der Expression in Klammern gesetzt werden. Zum Beispiel: `matchMedia("(max-width: 600px)")` funktioniert, während `matchMedia("max-width: 600px")` nicht funktioniert. Schlüsselwörter für Medientypen (`all`, `print`, `screen`) und logische Operatoren (`and`, `or`, `not`, `only`) müssen nicht in Klammern gesetzt werden.

### Rückgabewert

Ein neues [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) Objekt für die Media-Query. Verwenden Sie die Eigenschaften und Ereignisse dieses Objekts, um Übereinstimmungen zu erkennen und Änderungen dieser Übereinstimmungen über die Zeit zu überwachen.

## Verwendungshinweise

Sie können die zurückgegebene Media-Query sowohl für sofortige als auch ereignisgesteuerte
Überprüfungen verwenden, um zu sehen, ob das Dokument der Media-Query entspricht.

Um eine einmalige, sofortige Überprüfung durchzuführen, ob das Dokument der Media-Query entspricht, betrachten Sie den Wert der [`matches`](/de/docs/Web/API/MediaQueryList/matches)
Eigenschaft, die `true` sein wird, wenn das Dokument die Anforderungen der Media-Query erfüllt.

Wenn Sie ständig informiert werden müssen, ob das Dokument der Media-Query entspricht oder nicht, können Sie stattdessen auf das [`change`](/de/docs/Web/API/MediaQueryList/change_event) Ereignis achten, das dem Objekt übermittelt wird. Es gibt [ein gutes Beispiel dafür](/de/docs/Web/API/Window/devicePixelRatio#monitoring_screen_resolution_or_zoom_level_changes)
im Artikel über [`Window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio).

## Beispiele

Dieses Beispiel führt die Media-Query `(max-width: 600px)` aus und zeigt den
Wert der `matches` Eigenschaft des resultierenden `MediaQueryList` in einem
{{HTMLElement("span")}} an. Das Ergebnis wird "true" anzeigen, wenn das Ansichtsfenster
kleiner oder gleich 600 Pixel breit ist, und "false", wenn das Fenster breiter ist als das.

### JavaScript

```js
let mql = window.matchMedia("(max-width: 600px)");

document.querySelector(".mq-value").innerText = mql.matches;
```

Der JavaScript-Code übergibt die zu prüfende Media-Query an `matchMedia()`, um sie zu kompilieren, und setzt dann die `<span>` [`innerText`](/de/docs/Web/API/HTMLElement/innerText) auf den Wert der `matches` Eigenschaft des Ergebnisses, sodass deutlich wird, ob das Dokument momentan der Media-Query entspricht, als die Seite geladen wurde.

### HTML

```html
<span class="mq-value"></span>
```

Ein einfaches `<span>`, um die Ausgabe zu erhalten.

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

Siehe [Media-Queries programmatisch testen](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries) für zusätzliche Code-Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media-Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Media-Queries mit Code verwenden](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)
