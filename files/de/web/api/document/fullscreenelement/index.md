---
title: "Dokument: `fullscreenElement` Eigenschaft"
short-title: fullscreenElement
slug: Web/API/Document/fullscreenElement
l10n:
  sourceCommit: c17bd570e356cdf3e1abb4c2dfe1e57a2cfb5bc7
---

{{ApiRef("Fullscreen API")}}

Die schreibgeschützte
Eigenschaft **`Document.fullscreenElement`** gibt das [`Element`](/de/docs/Web/API/Element) zurück, das aktuell in diesem Dokument im
Vollbildmodus dargestellt wird, oder `null`, wenn der Vollbildmodus aktuell nicht genutzt wird.

Obwohl diese Eigenschaft schreibgeschützt ist, wird keine Ausnahme ausgelöst, wenn sie modifiziert wird (auch im
Strikmodus); der Setter ist eine No-Operation und wird ignoriert.

## Wert

Das [`Element`](/de/docs/Web/API/Element) Objekt, das sich derzeit im Vollbildmodus befindet; wenn der
Vollbildmodus vom `document` derzeit nicht genutzt wird, ist der zurückgegebene
Wert `null`. Wenn sich mehrere Elemente im Vollbildmodus befinden, wird das oberste (zuletzt angeforderte) Element zurückgegeben.

## Beispiele

Dieses Beispiel stellt eine Funktion `isVideoInFullscreen()` dar, die den
von `fullscreenElement` zurückgegebenen Wert überprüft; wenn sich das Dokument im
Vollbildmodus befindet (`fullscreenElement` ist nicht `null`) und der
Vollbildelemente [`nodeName`](/de/docs/Web/API/Node/nodeName) `VIDEO` ist, was auf ein
{{HTMLElement("video")}} Element hinweist, gibt die Funktion `true` zurück, was darauf hinweist,
dass das Video im Vollbildmodus ist.

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

- [Fullscreen-API](/de/docs/Web/API/Fullscreen_API)
- [Leitfaden zur Fullscreen-API](/de/docs/Web/API/Fullscreen_API/Guide)
- [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)
- [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen)
- {{ cssxref(":fullscreen") }} und {{cssxref("::backdrop")}}
- Das {{HTMLElement("iframe")}} [`allowfullscreen`](/de/docs/Web/HTML/Element/iframe#allowfullscreen)
  Attribut
