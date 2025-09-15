---
title: "Fenster: scrollY-Eigenschaft"
short-title: scrollY
slug: Web/API/Window/scrollY
l10n:
  sourceCommit: 896a41d7d9832367a1e24af567fb419e9d4182f8
---

{{APIRef("CSSOM view API")}}

Die schreibgeschützte **`scrollY`**-Eigenschaft der [`Window`](/de/docs/Web/API/Window)-Schnittstelle gibt die Anzahl der Pixel zurück, um die das Dokument derzeit vertikal gescrollt ist. Dieser Wert ist in modernen Browsern subpixel-genau, was bedeutet, dass er nicht unbedingt eine ganze Zahl ist. Sie können die Anzahl der Pixel, um die das Dokument horizontal gescrollt ist, von der [`scrollX`](/de/docs/Web/API/Window/scrollX)-Eigenschaft erhalten.

## Wert

Ein Gleitkommawert mit doppelter Genauigkeit, der angibt, um wie viele Pixel das Dokument derzeit vertikal vom Ursprung aus gescrollt ist, wobei ein positiver Wert bedeutet, dass der Inhalt nach unten gescrollt ist (um mehr Inhalt am unteren Rand freizugeben). Technisch ausgedrückt gibt `scrollY` die Y-Koordinate der oberen Kante des aktuellen {{Glossary("viewport", "Viewport")}} zurück. Wenn das Dokument überhaupt nicht nach oben oder unten gescrollt ist, ist `scrollY` 0. Wenn kein Viewport vorhanden ist, ist der zurückgegebene Wert 0. Wenn das Dokument auf einem subpixel-genauen Gerät gerendert wird, ist der zurückgegebene Wert ebenfalls subpixel-genau und kann eine dezimale Komponente enthalten.

> [!NOTE]
> Wenn Sie einen ganzzahligen Wert benötigen, können Sie {{jsxref("Math.round()")}} verwenden, um ihn zu runden.

Safari reagiert auf Overscrolling, indem `scrollY` über die maximale Scroll-Position hinaus aktualisiert wird (es sei denn, der Standard-"Bounce"-Effekt ist deaktiviert, z.B. durch Setzen von {{cssxref("overscroll-behavior")}} auf `none`), während Chrome und Firefox dies nicht tun. Beispielsweise kann `scrollY` auf Safari negativ sein, indem einfach weiter nach oben gescrollt wird, wenn sich das Dokument bereits ganz oben befindet.

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

Verwenden Sie diese Eigenschaft, um zu überprüfen, dass das Dokument noch nicht gescrollt wurde, wenn relative Scrollfunktionen wie [`scrollBy()`](/de/docs/Web/API/Window/scrollBy),
[`scrollByLines()`](/de/docs/Web/API/Window/scrollByLines) oder
[`scrollByPages()`](/de/docs/Web/API/Window/scrollByPages) verwendet werden.

Die `pageYOffset`-Eigenschaft ist ein Alias für die `scrollY`-Eigenschaft. Dies bedeutet, dass, wenn Sie keine der beiden Eigenschaften neu zugewiesen haben, `window.pageYOffset === window.scrollY` immer wahr ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`window.scrollX`](/de/docs/Web/API/Window/scrollX)
