---
title: "Document: fullscreenElement-Eigenschaft"
short-title: fullscreenElement
slug: Web/API/Document/fullscreenElement
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ApiRef("Fullscreen API")}}

Die schreibgeschützte Eigenschaft **`Document.fullscreenElement`** gibt das [`Element`](/de/docs/Web/API/Element) zurück, das aktuell im Vollbildmodus in diesem Dokument angezeigt wird, oder `null`, wenn der Vollbildmodus derzeit nicht verwendet wird.

Obwohl diese Eigenschaft schreibgeschützt ist, wird sie nicht ausgelöst, wenn sie verändert wird (auch nicht im strikten Modus); der Setter hat keine Funktion und wird ignoriert.

## Wert

Das [`Element`](/de/docs/Web/API/Element)-Objekt, das sich aktuell im Vollbildmodus befindet; wenn der Vollbildmodus derzeit nicht vom `document` verwendet wird, ist der zurückgegebene Wert `null`.

## Beispiele

Dieses Beispiel zeigt eine Funktion, `isVideoInFullscreen()`, die den von `fullscreenElement` zurückgegebenen Wert überprüft; wenn sich das Dokument im Vollbildmodus befindet (`fullscreenElement` ist nicht `null`) und der `nodeName` des Vollbildelements [`nodeName`](/de/docs/Web/API/Node/nodeName) `VIDEO` ist, was auf ein {{HTMLElement("video")}}-Element hinweist, gibt die Funktion `true` zurück und zeigt an, dass das Video im Vollbildmodus ist.

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
- [Leitfaden zur Fullscreen API](/de/docs/Web/API/Fullscreen_API/Guide)
- [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)
- [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen)
- {{ cssxref(":fullscreen") }} und {{cssxref("::backdrop")}}
- Das {{HTMLElement("iframe")}}-Attribut [`allowfullscreen`](/de/docs/Web/HTML/Element/iframe#allowfullscreen)
