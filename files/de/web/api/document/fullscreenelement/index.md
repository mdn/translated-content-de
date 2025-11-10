---
title: "Document: fullscreenElement Eigenschaft"
short-title: fullscreenElement
slug: Web/API/Document/fullscreenElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ApiRef("Fullscreen API")}}

Die schreibgeschützte Eigenschaft **`Document.fullscreenElement`** gibt das [`Element`](/de/docs/Web/API/Element) zurück, das derzeit in diesem Dokument im Vollbildmodus angezeigt wird, oder `null`, wenn der Vollbildmodus derzeit nicht verwendet wird.

Obwohl diese Eigenschaft schreibgeschützt ist, wird sie keinen Fehler auslösen, wenn sie modifiziert wird (sogar im strikten Modus); der Setter ist eine nicht durchgeführte Operation und wird ignoriert.

## Wert

Das [`Element`](/de/docs/Web/API/Element) Objekt, das sich derzeit im Vollbildmodus befindet; wenn der Vollbildmodus vom `document` momentan nicht verwendet wird, ist der Rückgabewert `null`. Wenn mehrere Elemente im Vollbildmodus sind, wird das oberste (zuletzt angeforderte) Element zurückgegeben.

## Beispiele

Dieses Beispiel zeigt eine Funktion, `isVideoInFullscreen()`, die den Wert überprüft, der von `fullscreenElement` zurückgegeben wird. Wenn sich das Dokument im Vollbildmodus befindet (`fullscreenElement` ist nicht `null`) und der Name des Vollbildelements [`nodeName`](/de/docs/Web/API/Node/nodeName) `VIDEO` ist, was auf ein {{HTMLElement("video")}}-Element hinweist, gibt die Funktion `true` zurück, was darauf hinweist, dass das Video im Vollbildmodus ist.

```js
function isVideoInFullscreen() {
  if (document.fullscreenElement?.nodeName === "VIDEO") {
    return true;
  }
  return false;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fullscreen API](/de/docs/Web/API/Fullscreen_API)
- [Leitfaden zur Fullscreen-API](/de/docs/Web/API/Fullscreen_API/Guide)
- [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)
- [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen)
- {{ cssxref(":fullscreen") }} und {{cssxref("::backdrop")}}
- Das {{HTMLElement("iframe")}} [`allowfullscreen`](/de/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen) Attribut
