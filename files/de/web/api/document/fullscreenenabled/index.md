---
title: "Document: fullscreenEnabled-Eigenschaft"
short-title: fullscreenEnabled
slug: Web/API/Document/fullscreenEnabled
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("Fullscreen API")}}

Die schreibgeschützte **`fullscreenEnabled`**-Eigenschaft des [`Document`](/de/docs/Web/API/Document)-Interfaces zeigt an, ob der Vollbildmodus verfügbar ist oder nicht.

Der Vollbildmodus ist nur für eine Seite verfügbar, die in keinem ihrer Dokumente fensterbasierte Plug-ins enthält, und wenn alle {{HTMLElement("iframe")}}-Elemente, die das Dokument enthalten, das [`allowfullscreen`](/de/docs/Web/HTML/Element/iframe#allowfullscreen)-Attribut gesetzt haben.

Obwohl diese Eigenschaft schreibgeschützt ist, wird sie keinen Fehler auslösen, wenn sie modifiziert wird (selbst im Strict-Modus); der Setter hat keine Operation und wird ignoriert.

## Wert

Ein boolescher Wert, der `true` ist, wenn das Dokument und die darin befindlichen Elemente in den Vollbildmodus versetzt werden können, indem [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) aufgerufen wird. Wenn der Vollbildmodus nicht verfügbar ist, ist dieser Wert `false`.

## Beispiele

In diesem Beispiel wird, bevor versucht wird, den Vollbildmodus für ein {{htmlElement("video")}}-Element anzufordern, der Wert von `fullscreenEnabled` überprüft, um zu vermeiden, den Versuch zu unternehmen, wenn er nicht verfügbar ist.

```js
function requestFullscreen() {
  if (document.fullscreenEnabled) {
    videoElement.requestFullscreen();
  } else {
    console.log("Your browser cannot use fullscreen right now");
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
- [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)
- [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen)
- [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement)
- {{cssxref(":fullscreen") }} und {{cssxref("::backdrop")}}
- Das {{HTMLElement("iframe")}} [`allowfullscreen`](/de/docs/Web/HTML/Element/iframe#allowfullscreen)-Attribut
