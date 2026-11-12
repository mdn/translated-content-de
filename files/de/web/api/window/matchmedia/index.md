---
title: "Window: matchMedia()-Methode"
short-title: matchMedia()
slug: Web/API/Window/matchMedia
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

{{APIRef("CSSOM view API")}}

Die Methode **`matchMedia()`** der [`Window`](/de/docs/Web/API/Window)-Schnittstelle gibt ein neues [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Objekt zurück. Mit diesem lässt sich feststellen, ob das [`document`](/de/docs/Web/API/Document) mit einem [Media-Query](/de/docs/Web/CSS/Guides/Media_queries/Using)-String übereinstimmt. Außerdem kann damit überwacht werden, wann das Dokument mit dem Media Query übereinstimmt oder nicht mehr übereinstimmt.

## Syntax

```js-nolint
matchMedia(mediaQueryString)
```

### Parameter

- `mediaQueryString`
  - : Ein String, der das Media Query angibt, das in eine [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) umgewandelt werden soll.

    Wie in CSS muss jedes [Media-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) innerhalb des Ausdrucks in Klammern stehen. Beispielsweise funktionieren `matchMedia("(width <= 600px)")` und `matchMedia("(orientation: landscape)")`, während `matchMedia("width < 600px")` und `matchMedia("orientation: landscape")` nicht funktionieren. Schlüsselwörter für Medientypen (`all`, `print`, `screen`) und logische Operatoren (`and`, `or`, `not`, `only`) müssen nicht in Klammern stehen.

### Rückgabewert

Ein neues [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Objekt für das Media Query. Mit den Eigenschaften und Ereignissen dieses Objekts können Sie Übereinstimmungen erkennen und Änderungen daran im Zeitverlauf überwachen.

## Verwendungshinweise

Mit dem zurückgegebenen Media Query können Sie sowohl einmalig als auch ereignisgesteuert prüfen, ob das Dokument damit übereinstimmt.

Für eine einmalige Prüfung sehen Sie sich den Wert der Eigenschaft [`matches`](/de/docs/Web/API/MediaQueryList/matches) an. Er ist `true`, wenn das Dokument die Anforderungen des Media Query erfüllt.

Wenn Sie fortlaufend darüber informiert werden möchten, ob das Dokument mit dem Media Query übereinstimmt, können Sie stattdessen das Ereignis [`change`](/de/docs/Web/API/MediaQueryList/change_event) des Objekts überwachen. Ein [anschauliches Beispiel dafür](/de/docs/Web/API/Window/devicePixelRatio#monitoring_screen_resolution_or_zoom_level_changes) finden Sie im Artikel zu [`Window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio).

## Beispiele

Dieses Beispiel führt das Media Query `(width <= 600px)` aus und zeigt den Wert der Eigenschaft `matches` der resultierenden `MediaQueryList` in einem {{HTMLElement("span")}} an. Die Ausgabe lautet „true“, wenn der Viewport höchstens 600 Pixel breit ist, und „false“, wenn das Fenster breiter ist.

### HTML

```html
<span class="mq-value"></span>
```

Ein einfaches `<span>` für die Ausgabe.

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

### JavaScript

```js
let mql = window.matchMedia("(width <= 600px)");

document.querySelector(".mq-value").innerText = mql.matches;
```

Der JavaScript-Code übergibt das zu prüfende Media Query an `matchMedia()`, um es zu verarbeiten. Anschließend setzt er die Eigenschaft [`innerText`](/de/docs/Web/API/HTMLElement/innerText) des `<span>` auf den Wert der Eigenschaft [`matches`](/de/docs/Web/API/MediaQueryList/matches) des Ergebnisses. So wird angezeigt, ob das Dokument zum Zeitpunkt des Ladens der Seite mit dem Media Query übereinstimmt.

### Ergebnis

{{EmbedLiveSample("Examples", "100%", "60")}}

Weitere Codebeispiele finden Sie unter [Media Queries programmatisch testen](/de/docs/Web/CSS/Guides/Media_queries/Testing).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [Media Queries im Code verwenden](/de/docs/Web/CSS/Guides/Media_queries/Testing)
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)
