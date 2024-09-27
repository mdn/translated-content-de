---
title: "Window: scrollX Eigenschaft"
short-title: scrollX
slug: Web/API/Window/scrollX
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{ APIRef("CSSOM View") }}

Die schreibgeschützte **`scrollX`**-Eigenschaft des [`Window`](/de/docs/Web/API/Window)-Interfaces gibt die Anzahl der Pixel zurück, um die das Dokument derzeit horizontal gescrollt ist. In modernen Browsern ist dieser Wert subpixelgenau, was bedeutet, dass es sich nicht unbedingt um eine ganze Zahl handelt. Sie können die Anzahl der Pixel, um die das Dokument vertikal gescrollt ist, über die [`scrollY`](/de/docs/Web/API/Window/scrollY)-Eigenschaft erhalten.

## Wert

Ein doppelpräziser Gleitkommawert, der die Anzahl der Pixel angibt, um die das Dokument derzeit horizontal vom Ursprung aus gescrollt ist, wobei ein positiver Wert bedeutet, dass der Inhalt nach rechts gescrollt wurde (um mehr Inhalt auf der rechten Seite sichtbar zu machen). Technisch ausgedrückt, gibt `scrollX` die X-Koordinate des linken Randes des aktuellen [Ansichtsbereichs](/de/docs/Glossary/viewport) zurück. Wenn das Dokument überhaupt nicht nach links oder rechts gescrollt ist, dann ist `scrollX` 0. Wenn kein Ansichtsbereich vorhanden ist, beträgt der zurückgegebene Wert 0. Wenn das Dokument auf einem subpixelgenauen Gerät dargestellt wird, ist der zurückgegebene Wert ebenfalls subpixelgenau und kann eine dezimale Komponente enthalten.

> [!NOTE]
> Wenn Sie einen ganzzahligen Wert benötigen, können Sie {{jsxref("Math.round()")}} verwenden, um ihn zu runden.

Es ist möglich, dass `scrollX` negativ ist, wenn das Dokument von dem initialen umgebenden Block nach links gescrollt werden kann. Zum Beispiel, wenn das Dokument von rechts nach links aufgebaut ist und der Inhalt nach links erweitert wird.

Safari reagiert auf Überscrollen, indem `scrollX` über die maximale Scrollposition hinaus aktualisiert wird (es sei denn, der Standard-"Bounce"-Effekt wird deaktiviert, z. B. durch das Setzen von {{cssxref("overscroll-behavior")}} auf `none`), während Chrome und Firefox dies nicht tun.

Diese Eigenschaft ist schreibgeschützt. Um das Fenster an eine bestimmte Stelle zu scrollen, verwenden Sie [`Window.scroll()`](/de/docs/Web/API/Window/scroll).

## Beispiele

Dieses Beispiel überprüft die aktuelle horizontale Scrollposition des Dokuments. Wenn sie größer als 400 Pixel ist, wird das Fenster zum Anfang zurückgescrollt.

```js
if (window.scrollX > 400) {
  window.scroll(0, 0);
}
```

## Anmerkungen

Die `pageXOffset`-Eigenschaft ist ein Alias für die `scrollX`-Eigenschaft. Dies bedeutet, dass, wenn Sie keine der beiden Eigenschaften neu zugewiesen haben, `window.pageXOffset === window.scrollX` immer wahr ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.scrollY`](/de/docs/Web/API/Window/scrollY)
