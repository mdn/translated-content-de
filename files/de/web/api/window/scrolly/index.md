---
title: "Window: scrollY-Eigenschaft"
short-title: scrollY
slug: Web/API/Window/scrollY
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("CSSOM View")}}

Die schreibgeschützte **`scrollY`**-Eigenschaft der [`Window`](/de/docs/Web/API/Window)-Schnittstelle gibt die Anzahl der Pixel zurück, um die das Dokument aktuell vertikal gescrollt wurde. Dieser Wert ist in modernen Browsern subpixelgenau, was bedeutet, dass es sich nicht unbedingt um eine ganze Zahl handelt. Sie können die Anzahl der Pixel, die das Dokument horizontal gescrollt wurde, von der [`scrollX`](/de/docs/Web/API/Window/scrollX)-Eigenschaft erhalten.

## Wert

Ein double-genauer Gleitkommawert, der die Anzahl der Pixel angibt, um die das Dokument derzeit vertikal vom Ursprung gescrollt ist, wobei ein positiver Wert bedeutet, dass der Inhalt nach unten gescrollt wird (um mehr Inhalte unten anzuzeigen). In technischeren Begriffen gibt `scrollY` die Y-Koordinate des oberen Rands des aktuellen [Viewports](/de/docs/Glossary/viewport) zurück. Wenn das Dokument überhaupt nicht gescrollt wird, weder nach oben noch nach unten, ist `scrollY` 0. Wenn kein Viewport vorhanden ist, ist der zurückgegebene Wert 0. Wenn das Dokument auf einem subpixel-genauen Gerät gerendert wird, ist der zurückgegebene Wert ebenfalls subpixelgenau und kann eine Dezimalkomponente enthalten.

> [!NOTE]
> Wenn Sie einen Ganzzahlwert benötigen, können Sie {{jsxref("Math.round()")}} verwenden, um diesen zu runden.

Safari reagiert auf Überscrollen, indem es `scrollY` über die maximale Scroll-Position hinaus aktualisiert (es sei denn, der standardmäßige "Bounce"-Effekt ist deaktiviert, zum Beispiel durch Setzen von {{cssxref("overscroll-behavior")}} auf `none`), während Chrome und Firefox dies nicht tun. Zum Beispiel kann `scrollY` in Safari negativ sein, wenn Sie weiter nach oben scrollen, während das Dokument bereits oben ist.

Diese Eigenschaft ist schreibgeschützt. Um das Fenster an eine bestimmte Stelle zu scrollen, verwenden Sie [`Window.scroll()`](/de/docs/Web/API/Window/scroll).

## Beispiele

```js
// make sure and go down to the second page
if (window.scrollY) {
  window.scroll(0, 0); // reset the scroll position to the top left of the document.
}

window.scrollByPages(1);
```

## Hinweise

Verwenden Sie diese Eigenschaft, um zu überprüfen, ob das Dokument nicht bereits gescrollt wurde, wenn Sie relative Scroll-Funktionen wie [`scrollBy()`](/de/docs/Web/API/Window/scrollBy),
[`scrollByLines()`](/de/docs/Web/API/Window/scrollByLines) oder
[`scrollByPages()`](/de/docs/Web/API/Window/scrollByPages) verwenden.

Die `pageYOffset`-Eigenschaft ist ein Alias für die `scrollY`-Eigenschaft. Dies bedeutet, wenn Sie keine der beiden Eigenschaften neu zugewiesen haben, ist `window.pageYOffset === window.scrollY` immer wahr.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`window.scrollX`](/de/docs/Web/API/Window/scrollX)
