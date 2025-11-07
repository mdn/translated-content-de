---
title: "Window: matchMedia() Methode"
short-title: matchMedia()
slug: Web/API/Window/matchMedia
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

{{APIRef}}

Die **`matchMedia()`**-Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle
gibt ein neues [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Objekt zurück, das verwendet werden kann, um festzustellen, ob das [`document`](/de/docs/Web/API/Document) mit dem [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)-String übereinstimmt. Außerdem kann das Dokument überwacht werden, um zu erkennen, wann es diesen Media Query erfüllt (oder nicht mehr erfüllt).

## Syntax

```js-nolint
matchMedia(mediaQueryString)
```

### Parameter

- `mediaQueryString`
  - : Ein String, der den zu parsenden Media Query in eine [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) spezifiziert.

    Genau wie in CSS muss jedes [Media-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) innerhalb des Ausdrucks in Klammern eingeschlossen sein. Zum Beispiel: `matchMedia("(width <= 600px)")` oder `matchMedia("(orientation: landscape)")` funktionieren, während `matchMedia("width < 600px")` oder `matchMedia("orientation: landscape")` nicht funktionieren. Schlüsselwörter für Medientypen (`all`, `print`, `screen`) und logische Operatoren (`and`, `or`, `not`, `only`) müssen nicht in Klammern eingeschlossen werden.

### Rückgabewert

Ein neues [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Objekt für den Media Query. Verwenden Sie die Eigenschaften und Ereignisse dieses Objekts, um Übereinstimmungen zu erkennen und Änderungen dieser Übereinstimmungen im Laufe der Zeit zu überwachen.

## Nutzungshinweise

Den zurückgegebenen Media Query können Sie sowohl für unmittelbare als auch für ereignisgesteuerte Überprüfungen verwenden, ob das Dokument dem Media Query entspricht.

Um eine einmalige, unmittelbare Überprüfung durchzuführen, ob das Dokument dem Media Query entspricht, schauen Sie sich den Wert der [`matches`](/de/docs/Web/API/MediaQueryList/matches)-Eigenschaft an, die auf `true` gesetzt ist, wenn das Dokument die Anforderungen des Media Query erfüllt.

Falls Sie fortwährende Informationen darüber benötigen, ob das Dokument dem Media Query entspricht, haben Sie die Möglichkeit, das [`change`](/de/docs/Web/API/MediaQueryList/change_event)-Ereignis zu beobachten, das dem Objekt übermittelt wird. Es gibt [ein gutes Beispiel hierfür](/de/docs/Web/API/Window/devicePixelRatio#monitoring_screen_resolution_or_zoom_level_changes) im Artikel zu [`Window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio).

## Beispiele

Dieses Beispiel führt den Media Query `(width <= 600px)` aus und zeigt den Wert der `matches`-Eigenschaft der resultierenden `MediaQueryList` in einem {{HTMLElement("span")}} an; das Ergebnis wird somit "true" anzeigen, wenn das Ansichtsfenster 600 Pixel oder schmaler ist, und "false", wenn das Fenster breiter ist.

### JavaScript

```js
let mql = window.matchMedia("(width <= 600px)");

document.querySelector(".mq-value").innerText = mql.matches;
```

Der JavaScript-Code übergibt den Media Query an `matchMedia()`, um ihn zu kompilieren, und setzt dann die [`innerText`](/de/docs/Web/API/HTMLElement/innerText) des `<span>` auf den Wert der `matches`-Eigenschaft der Ergebnisse, sodass angezeigt wird, ob das Dokument zum Zeitpunkt des Ladens der Seite dem Media Query entspricht.

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

Weitere Codebeispiele finden Sie unter [Medienabfragen programmatisch testen](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Verwendung von Medienabfragen aus Code](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)
