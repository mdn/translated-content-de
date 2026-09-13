---
title: "Window: matchMedia() Methode"
short-title: matchMedia()
slug: Web/API/Window/matchMedia
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("CSSOM view API")}}

Die **`matchMedia()`** Methode des [`Window`](/de/docs/Web/API/Window)-Interfaces gibt ein neues [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Objekt zurück, das anschließend verwendet werden kann, um festzustellen, ob das [`document`](/de/docs/Web/API/Document) der [Media Query](/de/docs/Web/CSS/Guides/Media_queries/Using)-Zeichenfolge entspricht. Zudem kann das Dokument überwacht werden, um zu erkennen, wann es dieser Media Query entspricht (oder nicht mehr entspricht).

## Syntax

```js-nolint
matchMedia(mediaQueryString)
```

### Parameter

- `mediaQueryString`
  - : Ein String, der die Media Query angibt, die in ein [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Objekt geparst werden soll.

    Genau wie in CSS muss jede [Media Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) in Klammern innerhalb des Ausdrucks eingeschlossen sein. Zum Beispiel: `matchMedia("(width <= 600px)")` oder `matchMedia("(orientation: landscape)")` sind korrekt, während `matchMedia("width < 600px")` oder `matchMedia("orientation: landscape")` nicht funktionieren. Schlüsselwörter für Medientypen (`all`, `print`, `screen`) und logische Operatoren (`and`, `or`, `not`, `only`) müssen nicht in Klammern eingeschlossen werden.

### Rückgabewert

Ein neues [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Objekt für die Media Query. Nutzen Sie die Eigenschaften und Ereignisse dieses Objekts, um Übereinstimmungen zu erkennen und die Änderungen dieser Übereinstimmungen über die Zeit zu überwachen.

## Verwendungshinweise

Sie können die zurückgegebene Media Query sowohl für sofortige als auch für ereignisgesteuerte Überprüfungen verwenden, um festzustellen, ob das Dokument der Media Query entspricht.

Um eine einmalige, sofortige Überprüfung durchzuführen, ob das Dokument der Media Query entspricht, schauen Sie sich den Wert der [`matches`](/de/docs/Web/API/MediaQueryList/matches)-Eigenschaft an, der `true` ist, wenn das Dokument die Anforderungen der Media Query erfüllt.

Wenn Sie ständig informiert werden möchten, ob das Dokument der Media Query entspricht oder nicht, können Sie statt dessen das [`change`](/de/docs/Web/API/MediaQueryList/change_event)-Ereignis beobachten, das an das Objekt übermittelt wird. Im Artikel zu [`Window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio) gibt es [ein gutes Beispiel hierfür](/de/docs/Web/API/Window/devicePixelRatio#monitoring_screen_resolution_or_zoom_level_changes).

## Beispiele

Dieses Beispiel führt die Media Query `(width <= 600px)` durch und zeigt den Wert der `matches`-Eigenschaft des resultierenden `MediaQueryList` in einem {{HTMLElement("span")}} an. Dadurch wird die Ausgabe "true" anzeigen, wenn das Viewport kleiner oder gleich 600 Pixel breit ist, und "false" zeigen, wenn das Fenster breiter ist.

### JavaScript

```js
let mql = window.matchMedia("(width <= 600px)");

document.querySelector(".mq-value").innerText = mql.matches;
```

Der JavaScript-Code übergibt die zu vergleichende Media Query an `matchMedia()` zur Kompilierung und setzt dann den [`innerText`](/de/docs/Web/API/HTMLElement/innerText) des `<span>` auf den Wert der [`matches`](/de/docs/Web/API/MediaQueryList/matches)-Eigenschaft des Ergebnisses, so dass angezeigt wird, ob das Dokument der Media Query entspricht, zu dem Zeitpunkt, als die Seite geladen wurde.

### HTML

```html
<span class="mq-value"></span>
```

Ein einfaches `<span>`, um die Ausgabe zu erhalten.

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

Sehen Sie [Testen von Media Queries programmatisch](/de/docs/Web/CSS/Guides/Media_queries/Testing) für zusätzliche Codebeispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [Verwenden von Media Queries aus dem Code](/de/docs/Web/CSS/Guides/Media_queries/Testing)
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)
