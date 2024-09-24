---
title: "Fenster: matchMedia()-Methode"
short-title: matchMedia()
slug: Web/API/Window/matchMedia
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef}}

Die **`matchMedia()`**-Methode der {{domxref("Window")}}-Schnittstelle
gibt ein neues {{domxref("MediaQueryList")}}-Objekt zurück, das dann verwendet werden kann, um festzustellen, ob
das {{domxref("document")}} mit dem [Media-Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)-String übereinstimmt. Außerdem kann das Dokument überwacht werden, um zu erkennen, wann es dieser Abfrage entspricht (oder nicht mehr entspricht).

## Syntax

```js-nolint
matchMedia(mediaQueryString)
```

### Parameter

- `mediaQueryString`
  - : Ein String, der die Medienabfrage spezifiziert, die in eine {{domxref("MediaQueryList")}} geparst werden soll.

### Rückgabewert

Ein neues {{domxref("MediaQueryList")}}-Objekt für die Medienabfrage. Verwenden Sie die Eigenschaften und Ereignisse dieses Objekts, um Übereinstimmungen zu erkennen und Änderungen dieser Übereinstimmungen im Laufe der Zeit zu überwachen.

## Nutzungshinweise

Sie können die zurückgegebene Medienabfrage verwenden, um sowohl sofortige als auch ereignisgesteuerte Überprüfungen durchzuführen, ob das Dokument mit der Medienabfrage übereinstimmt.

Um eine einmalige, sofortige Überprüfung durchzuführen, ob das Dokument mit der Medienabfrage übereinstimmt, schauen Sie sich den Wert der {{domxref("MediaQueryList.matches", "matches")}}-Eigenschaft an, die `true` ist, wenn das Dokument die Anforderungen der Medienabfrage erfüllt.

Wenn Sie stets darüber informiert werden möchten, ob das Dokument mit der Medienabfrage übereinstimmt oder nicht, können Sie stattdessen auf das {{domxref("MediaQueryList.change_event", "change")}}-Ereignis achten, das an das Objekt gesendet wird. [Ein gutes Beispiel dafür](/de/docs/Web/API/Window/devicePixelRatio#monitoring_screen_resolution_or_zoom_level_changes) finden Sie im Artikel zu {{domxref("Window.devicePixelRatio")}}.

## Beispiele

Dieses Beispiel führt die Medienabfrage `(max-width: 600px)` aus und zeigt den Wert der `matches`-Eigenschaft des resultierenden `MediaQueryList` in einem {{HTMLElement("span")}} an. Das Ergebnis zeigt "true" an, wenn der Ansichtsbereich kleiner oder gleich 600 Pixel breit ist, und zeigt "false" an, wenn das Fenster breiter ist.

### JavaScript

```js
let mql = window.matchMedia("(max-width: 600px)");

document.querySelector(".mq-value").innerText = mql.matches;
```

Der JavaScript-Code übergibt die Medienabfrage an `matchMedia()`, um sie zu kompilieren, und setzt dann den {{domxref("HTMLElement.innerText", "innerText")}} des `<span>` auf den Wert der {{domxref("MediaQueryList.matches", "matches")}}-Eigenschaft der Ergebnisse, um anzuzeigen, ob das Dokument im Moment des Ladens der Seite mit der Medienabfrage übereinstimmt oder nicht.

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

Unter [Testen von Medienabfragen programmatisch](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries) finden Sie zusätzliche Code-Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Medienabfragen im Code verwenden](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- {{domxref("MediaQueryList")}}
