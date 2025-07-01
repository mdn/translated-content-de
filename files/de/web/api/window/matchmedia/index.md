---
title: "Window: matchMedia() Methode"
short-title: matchMedia()
slug: Web/API/Window/matchMedia
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{APIRef}}

Die **`matchMedia()`** Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle
gibt ein neues [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Objekt zurück, mit dem dann überprüft werden kann, ob das [`document`](/de/docs/Web/API/Document) mit dem [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)-String übereinstimmt. Außerdem kann damit das Dokument überwacht werden, um festzustellen, wann es mit dieser Media Query übereinstimmt oder nicht mehr übereinstimmt.

## Syntax

```js-nolint
matchMedia(mediaQueryString)
```

### Parameter

- `mediaQueryString`
  - : Ein String, der die Media Query spezifiziert, die in ein [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Objekt geparst wird.

    Genau wie in CSS muss jede [Media Feature](/de/docs/Web/CSS/@media#media_features) in Klammern innerhalb des Ausdrucks eingefasst sein. Zum Beispiel funktionieren `matchMedia("(width <= 600px)")` oder `matchMedia("(orientation: landscape)")`, während `matchMedia("width < 600px")` oder `matchMedia("orientation: landscape")` nicht funktionieren. Schlüsselwörter für Medientypen (`all`, `print`, `screen`) und logische Operatoren (`and`, `or`, `not`, `only`) müssen nicht in Klammern gesetzt werden.

### Rückgabewert

Ein neues [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Objekt für die Media Query. Verwenden Sie die Eigenschaften und Ereignisse dieses Objekts, um Übereinstimmungen zu erkennen und Änderungen dieser Übereinstimmungen im Laufe der Zeit zu überwachen.

## Nutzungshinweise

Sie können die zurückgegebene Media Query sowohl für sofortige Prüfungen als auch für ereignisgesteuerte Überprüfungen verwenden, um zu sehen, ob das Dokument mit der Media Query übereinstimmt.

Um eine einmalige, sofortige Prüfung durchzuführen, ob das Dokument mit der Media Query übereinstimmt, sehen Sie sich den Wert der [`matches`](/de/docs/Web/API/MediaQueryList/matches)-Eigenschaft an. Diese ist `true`, wenn das Dokument die Anforderungen der Media Query erfüllt.

Wenn Sie ständig informiert bleiben müssen, ob das Dokument mit der Media Query übereinstimmt oder nicht, können Sie stattdessen das [`change`](/de/docs/Web/API/MediaQueryList/change_event)-Ereignis des Objekts beobachten. Im Artikel zu [`Window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio) gibt es [ein gutes Beispiel dafür](/de/docs/Web/API/Window/devicePixelRatio#monitoring_screen_resolution_or_zoom_level_changes).

## Beispiele

Dieses Beispiel führt die Media Query `(width <= 600px)` aus und zeigt den Wert der `matches`-Eigenschaft der resultierenden `MediaQueryList` in einem {{HTMLElement("span")}} an. Das Ergebnis zeigt "true" an, wenn das Viewport weniger als oder gleich 600 Pixel breit ist, und "false", wenn das Fenster breiter ist.

### JavaScript

```js
let mql = window.matchMedia("(width <= 600px)");

document.querySelector(".mq-value").innerText = mql.matches;
```

Der JavaScript-Code übergibt die Media Query, die abgeglichen werden soll, an `matchMedia()`, um sie zu kompilieren, und setzt dann die [`innerText`](/de/docs/Web/API/HTMLElement/innerText) des `<span>` auf den Wert der [`matches`](/de/docs/Web/API/MediaQueryList/matches)-Eigenschaft der Ergebnisse, sodass er angibt, ob das Dokument bei der Seite geladen wurde, die Media Query erfüllt oder nicht.

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

Siehe [Media Queries programmatisch testen](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries) für zusätzliche Codebeispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Verwendung von Media Queries aus Code](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)
