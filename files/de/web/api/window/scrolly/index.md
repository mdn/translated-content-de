---
title: "Window: scrollY-Eigenschaft"
short-title: scrollY
slug: Web/API/Window/scrollY
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("CSSOM View")}}

Die schreibgeschützte **`scrollY`**-Eigenschaft der [`Window`](/de/docs/Web/API/Window)-Schnittstelle gibt die Anzahl der Pixel zurück, um die das Dokument derzeit vertikal gescrollt ist. Dieser Wert ist in modernen Browsern subpixelgenau, was bedeutet, dass er nicht unbedingt eine ganze Zahl ist. Die Anzahl der Pixel, um die das Dokument horizontal gescrollt ist, können Sie über die [`scrollX`](/de/docs/Web/API/Window/scrollX)-Eigenschaft erhalten.

## Wert

Ein Wert in doppelter Genauigkeit, der die Anzahl der Pixel angibt, um die das Dokument derzeit vertikal vom Ursprung verschoben ist, wobei ein positiver Wert bedeutet, dass der Inhalt nach unten gescrollt wird (um mehr Inhalt unten zu enthüllen). Technischer ausgedrückt gibt `scrollY` die Y-Koordinate des oberen Randes des aktuellen [Viewports](/de/docs/Glossary/viewport) zurück. Wenn das Dokument überhaupt nicht nach oben oder unten gescrollt ist, beträgt `scrollY` 0. Wenn kein Viewport vorhanden ist, wird 0 zurückgegeben. Wenn das Dokument auf einem subpixelgenauen Gerät gerendert wird, ist der zurückgegebene Wert auch subpixelgenau und kann eine Dezimalkomponente enthalten.

> [!NOTE]
> Wenn Sie einen ganzzahligen Wert benötigen, können Sie {{jsxref("Math.round()")}} verwenden, um ihn zu runden.

Safari reagiert auf das Überscrollen, indem `scrollY` über die maximale Scrollposition hinaus aktualisiert wird (es sei denn, der Standard-"Bounce"-Effekt ist deaktiviert, z.B. durch Setzen von {{cssxref("overscroll-behavior")}} auf `none`), während Chrome und Firefox dies nicht tun. Zum Beispiel kann `scrollY` in Safari negativ sein, wenn einfach weiter nach oben gescrollt wird, obwohl das Dokument schon oben ist.

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

Die `pageYOffset`-Eigenschaft ist ein Alias für die `scrollY`-Eigenschaft. Das bedeutet, dass, wenn Sie keine der beiden Eigenschaften neu zugewiesen haben, `window.pageYOffset === window.scrollY` immer wahr ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`window.scrollX`](/de/docs/Web/API/Window/scrollX)
