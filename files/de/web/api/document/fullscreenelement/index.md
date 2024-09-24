---
title: "Dokument: fullscreenElement Eigenschaft"
short-title: fullscreenElement
slug: Web/API/Document/fullscreenElement
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ApiRef("Fullscreen API")}}

Die schreibgeschützte Eigenschaft **`Document.fullscreenElement`** gibt das {{ domxref("Element") }} zurück, das aktuell in diesem Dokument im Vollbildmodus dargestellt wird, oder `null`, wenn der Vollbildmodus derzeit nicht verwendet wird.

Obwohl diese Eigenschaft schreibgeschützt ist, wird kein Fehler ausgegeben, wenn sie modifiziert wird (auch nicht im strikten Modus); der Setter ist eine No-Operation und wird ignoriert.

## Wert

Das {{domxref("Element")}}-Objekt, das aktuell im Vollbildmodus ist; wenn der Vollbildmodus vom `document` derzeit nicht genutzt wird, ist der zurückgegebene Wert `null`.

## Beispiele

Dieses Beispiel zeigt eine Funktion, `isVideoInFullscreen()`, die den von `fullscreenElement` zurückgegebenen Wert überprüft; wenn das Dokument im Vollbildmodus ist (`fullscreenElement` ist nicht `null`) und der {{domxref("Node.nodeName", "nodeName")}} des Fullscreen-Elements `VIDEO` ist, was auf ein {{HTMLElement("video")}}-Element hinweist, gibt die Funktion `true` zurück, was anzeigt, dass das Video im Vollbildmodus ist.

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
- {{ domxref("Element.requestFullscreen()") }}
- {{ domxref("Document.exitFullscreen()") }}
- {{ cssxref(":fullscreen") }} und {{cssxref("::backdrop")}}
- Das {{HTMLElement("iframe")}} [`allowfullscreen`](/de/docs/Web/HTML/Element/iframe#allowfullscreen) Attribut
