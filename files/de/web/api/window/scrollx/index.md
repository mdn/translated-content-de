---
title: "Window: scrollX Eigenschaft"
short-title: scrollX
slug: Web/API/Window/scrollX
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{ APIRef("CSSOM View") }}

Die schreibgeschützte **`scrollX`**-Eigenschaft der {{domxref("Window")}}-Schnittstelle gibt die Anzahl der Pixel zurück, um die das Dokument derzeit horizontal gescrollt ist. Dieser Wert ist in modernen Browsern subpixelgenau, was bedeutet, dass er nicht unbedingt eine ganze Zahl ist. Sie können die Anzahl der Pixel, um die das Dokument vertikal gescrollt ist, über die {{domxref("Window.scrollY", "scrollY")}}-Eigenschaft erhalten.

## Wert

Ein Gleitkommawert mit doppelter Genauigkeit, der die Anzahl der Pixel angibt, um die das Dokument derzeit horizontal vom Ursprung gescrollt ist, wobei ein positiver Wert bedeutet, dass der Inhalt nach rechts gescrollt wird (um mehr Inhalt rechts freizulegen). Technisch ausgedrückt gibt `scrollX` die X-Koordinate des linken Randes des aktuellen {{Glossary("viewport")}} zurück. Wenn das Dokument überhaupt nicht nach links oder rechts gescrollt ist, beträgt `scrollX` 0. Wenn kein Viewport vorhanden ist, wird der Wert 0 zurückgegeben. Wenn das Dokument auf einem subpixelgenauen Gerät dargestellt wird, ist der zurückgegebene Wert ebenfalls subpixelgenau und kann eine Dezimalkomponente enthalten.

> [!NOTE]
> Wenn Sie einen ganzzahligen Wert benötigen, können Sie {{jsxref("Math.round()")}} verwenden, um ihn zu runden.

Es ist möglich, dass `scrollX` negativ ist, wenn das Dokument links vom ursprünglichen Containing-Block gescrollt werden kann. Zum Beispiel, wenn das Dokument von rechts nach links ist und der Inhalt nach links wächst.

Safari reagiert auf Überscrollen, indem es `scrollX` über die maximale Scroll-Position hinaus aktualisiert (es sei denn, der Standard-"Bounce"-Effekt ist deaktiviert, z. B. durch Setzen von {{cssxref("overscroll-behavior")}} auf `none`), während Chrome und Firefox dies nicht tun.

Diese Eigenschaft ist schreibgeschützt. Um das Fenster an einen bestimmten Ort zu scrollen, verwenden Sie {{domxref("Window.scroll()")}}.

## Beispiele

Dieses Beispiel überprüft die aktuelle horizontale Scroll-Position des Dokuments. Wenn sie größer als 400 Pixel ist, wird das Fenster wieder an den Anfang gescrollt.

```js
if (window.scrollX > 400) {
  window.scroll(0, 0);
}
```

## Hinweise

Die `pageXOffset`-Eigenschaft ist ein Alias für die `scrollX`-Eigenschaft. Das bedeutet, wenn Sie keiner der Eigenschaften einen neuen Wert zugewiesen haben, ist `window.pageXOffset === window.scrollX` immer wahr.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Window.scrollY")}}
