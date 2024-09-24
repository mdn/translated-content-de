---
title: "Dokument: fullscreenEnabled Eigenschaft"
short-title: fullscreenEnabled
slug: Web/API/Document/fullscreenEnabled
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("Fullscreen API")}}

Die schreibgeschützte **`fullscreenEnabled`** Eigenschaft des {{domxref("Document")}} Interfaces zeigt an, ob der Vollbildmodus verfügbar ist oder nicht.

Der Vollbildmodus ist nur für eine Seite verfügbar, die keine fenstergestützten Plug-ins in einem ihrer Dokumente hat und wenn alle {{HTMLElement("iframe")}} Elemente, die das Dokument enthalten, ihr [`allowfullscreen`](/de/docs/Web/HTML/Element/iframe#allowfullscreen) Attribut gesetzt haben.

Obwohl diese Eigenschaft schreibgeschützt ist, wird sie keinen Fehler werfen, wenn sie modifiziert wird (selbst im strengen Modus); der Setter ist eine Nicht-Operation und wird ignoriert.

## Wert

Ein boolescher Wert, der `true` ist, wenn das Dokument und die darin enthaltenen Elemente durch Aufruf von {{domxref("Element.requestFullscreen()")}} in den Vollbildmodus versetzt werden können. Wenn der Vollbildmodus nicht verfügbar ist, ist dieser Wert `false`.

## Beispiele

In diesem Beispiel wird der Wert von `fullscreenEnabled` überprüft, bevor versucht wird, den Vollbildmodus für ein {{htmlElement("video")}} Element anzufordern, um zu vermeiden, dass der Versuch unternommen wird, wenn er nicht verfügbar ist.

```js
function requestFullscreen() {
  if (document.fullscreenEnabled) {
    videoElement.requestFullscreen();
  } else {
    console.log("Ihr Browser kann derzeit den Vollbildmodus nicht verwenden");
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fullscreen API](/de/docs/Web/API/Fullscreen_API)
- [Leitfaden zur Fullscreen API](/de/docs/Web/API/Fullscreen_API/Guide)
- {{domxref("Element.requestFullscreen()")}}
- {{domxref("Document.exitFullscreen()")}}
- {{domxref("Document.fullscreenElement")}}
- {{cssxref(":fullscreen") }} und {{cssxref("::backdrop")}}
- Das {{HTMLElement("iframe")}} [`allowfullscreen`](/de/docs/Web/HTML/Element/iframe#allowfullscreen) Attribut
