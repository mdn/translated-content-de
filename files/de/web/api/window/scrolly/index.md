---
title: "Fenster: scrollY Eigenschaft"
short-title: scrollY
slug: Web/API/Window/scrollY
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("CSSOM View")}}

Die schreibgeschützte **`scrollY`**-Eigenschaft des {{domxref("Window")}}-Interfaces gibt die Anzahl der Pixel zurück, um die das Dokument derzeit vertikal gescrollt wird. Dieser Wert ist in modernen Browsern subpixelgenau, was bedeutet, dass er nicht unbedingt eine ganze Zahl ist. Sie können die Anzahl der Pixel, um die das Dokument horizontal gescrollt wird, über die {{domxref("Window.scrollX", "scrollX")}}-Eigenschaft abrufen.

## Wert

Ein Gleitkommawert mit doppelter Genauigkeit, der angibt, um wie viele Pixel das Dokument aktuell vertikal vom Ursprung gescrollt wird, wobei ein positiver Wert bedeutet, dass der Inhalt nach unten gescrollt wird (um mehr Inhalt unten anzuzeigen). Technisch ausgedrückt gibt `scrollY` die Y-Koordinate des oberen Randes des aktuellen {{Glossary("viewport")}} zurück. Wenn das Dokument überhaupt nicht nach oben oder unten gescrollt wird, beträgt `scrollY` 0. Wenn es kein Viewport gibt, ist der zurückgegebene Wert ebenfalls 0. Wenn das Dokument auf einem subpixelgenauen Gerät gerendert wird, ist der zurückgegebene Wert ebenfalls subpixelgenau und kann eine Dezimalkomponente enthalten.

> [!NOTE]
> Wenn Sie einen ganzzahligen Wert benötigen, können Sie {{jsxref("Math.round()")}} verwenden, um ihn zu runden.

Safari reagiert auf Überscrollen, indem `scrollY` über die maximale Scrollposition hinaus aktualisiert wird (es sei denn, der Standard-"Bounce"-Effekt wird deaktiviert, z. B. durch Setzen von {{cssxref("overscroll-behavior")}} auf `none`), während Chrome und Firefox dies nicht tun. Zum Beispiel kann `scrollY` in Safari negativ sein, wenn Sie weiter nach oben scrollen, obwohl das Dokument bereits ganz oben ist.

Diese Eigenschaft ist schreibgeschützt. Um das Fenster an eine bestimmte Stelle zu scrollen, verwenden Sie {{domxref("Window.scroll()")}}.

## Beispiele

```js
// Stellen Sie sicher, dass Sie auf die zweite Seite gehen
if (window.scrollY) {
  window.scroll(0, 0); // setzen Sie die Scrollposition auf die obere linke Ecke des Dokuments zurück.
}

window.scrollByPages(1);
```

## Anmerkungen

Verwenden Sie diese Eigenschaft, um zu überprüfen, dass das Dokument noch nicht gescrollt wurde, wenn Sie relative Scrollfunktionen wie {{domxref("window.scrollBy", "scrollBy()")}},
{{domxref("window.scrollByLines", "scrollByLines()")}} oder
{{domxref("window.scrollByPages", "scrollByPages()")}} verwenden.

Die `pageYOffset`-Eigenschaft ist ein Alias für die `scrollY`-Eigenschaft. Das bedeutet, dass, wenn Sie keine der beiden Eigenschaften neu zugewiesen haben, `window.pageYOffset === window.scrollY` immer wahr ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("window.scrollX")}}
