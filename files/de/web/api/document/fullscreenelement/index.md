---
title: "Document: fullscreenElement-Eigenschaft"
short-title: fullscreenElement
slug: Web/API/Document/fullscreenElement
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ApiRef("Fullscreen API")}}

Die
**`Document.fullscreenElement`**-Eigenschaft (nur lesbar) gibt das [`Element`](/de/docs/Web/API/Element) zurück, das derzeit in diesem Dokument im Vollbildmodus dargestellt wird, oder `null`, wenn der Vollbildmodus derzeit nicht verwendet wird.

Obwohl diese Eigenschaft nur lesbar ist, wird sie keinen Fehler auslösen, wenn sie verändert wird (selbst im Strict-Modus); der Setter ist eine No-Operation und wird ignoriert.

## Wert

Das [`Element`](/de/docs/Web/API/Element)-Objekt, das sich derzeit im Vollbildmodus befindet; wenn der Vollbildmodus nicht vom `document` verwendet wird, ist der zurückgegebene Wert `null`.

## Beispiele

Dieses Beispiel stellt eine Funktion `isVideoInFullscreen()` vor, die den von `fullscreenElement` zurückgegebenen Wert überprüft; wenn sich das Dokument im Vollbildmodus befindet (`fullscreenElement` ist nicht `null`) und der Vollbild-Element-`nodeName` `VIDEO` ist, was auf ein {{HTMLElement("video")}}-Element hindeutet, gibt die Funktion `true` zurück, was darauf hinweist, dass das Video im Vollbildmodus ist.

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
- Das `allowfullscreen`-Attribut des {{HTMLElement("iframe")}} [`allowfullscreen`](/de/docs/Web/HTML/Element/iframe#allowfullscreen)
