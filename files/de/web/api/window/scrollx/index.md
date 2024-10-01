---
title: "Window: scrollX-Eigenschaft"
short-title: scrollX
slug: Web/API/Window/scrollX
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{ APIRef("CSSOM View") }}

Die schreibgeschützte **`scrollX`**-Eigenschaft der [`Window`](/de/docs/Web/API/Window)-Schnittstelle gibt die Anzahl der Pixel zurück, um die das Dokument derzeit horizontal gescrollt ist. Dieser Wert ist in modernen Browsern subpixelgenau, was bedeutet, dass er nicht unbedingt eine ganze Zahl ist. Sie können die Anzahl der Pixel, um die das Dokument vertikal gescrollt ist, von der [`scrollY`](/de/docs/Web/API/Window/scrollY)-Eigenschaft erhalten.

## Wert

Ein Gleitkommawert mit doppelter Genauigkeit, der die Anzahl der Pixel angibt, um die das Dokument derzeit horizontal vom Ursprung gescrollt ist, wobei ein positiver Wert bedeutet, dass der Inhalt nach rechts gescrollt ist (um mehr Inhalt auf der rechten Seite anzuzeigen). Technisch ausgedrückt, gibt `scrollX` die X-Koordinate des linken Randes des aktuellen {{Glossary("viewport", "Viewports")}} zurück. Wenn das Dokument überhaupt nicht nach links oder rechts gescrollt ist, ist `scrollX` 0. Wenn kein Viewport vorhanden ist, ist der zurückgegebene Wert 0. Wenn das Dokument auf einem subpixelgenauen Gerät gerendert wird, dann ist der zurückgegebene Wert ebenfalls subpixelgenau und kann eine Dezimalkomponente enthalten.

> [!NOTE]
> Wenn Sie einen ganzzahligen Wert benötigen, können Sie {{jsxref("Math.round()")}} verwenden, um ihn zu runden.

Es ist möglich, dass `scrollX` negativ ist, wenn das Dokument vom initialen umgebenden Block nach links gescrollt werden kann. Zum Beispiel, wenn das Dokument von rechts nach links verläuft und der Inhalt nach links wächst.

Safari reagiert auf das Überrollen, indem es `scrollX` über die maximale Scrollposition hinaus aktualisiert (es sei denn, der standardmäßige "Bounce"-Effekt wird deaktiviert, zum Beispiel durch Setzen von {{cssxref("overscroll-behavior")}} auf `none`), während Chrome und Firefox dies nicht tun.

Diese Eigenschaft ist schreibgeschützt. Um das Fenster an eine bestimmte Stelle zu scrollen, verwenden Sie [`Window.scroll()`](/de/docs/Web/API/Window/scroll).

## Beispiele

Dieses Beispiel überprüft die aktuelle horizontale Scrollposition des Dokuments. Wenn sie größer als 400 Pixel ist, wird das Fenster zum Anfang zurückgescrollt.

```js
if (window.scrollX > 400) {
  window.scroll(0, 0);
}
```

## Hinweise

Die `pageXOffset`-Eigenschaft ist ein Alias für die `scrollX`-Eigenschaft. Dies bedeutet, dass `window.pageXOffset === window.scrollX` immer true ist, wenn Sie keine der Eigenschaften neu zugewiesen haben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.scrollY`](/de/docs/Web/API/Window/scrollY)
