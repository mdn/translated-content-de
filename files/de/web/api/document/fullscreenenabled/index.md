---
title: "Dokument: fullscreenEnabled-Eigenschaft"
short-title: fullscreenEnabled
slug: Web/API/Document/fullscreenEnabled
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Fullscreen API")}}

Die schreibgeschützte **`fullscreenEnabled`**
Eigenschaft der [`Document`](/de/docs/Web/API/Document) Schnittstelle zeigt an, ob der Vollbildmodus verfügbar ist oder nicht.

Der Vollbildmodus ist nur für eine Seite verfügbar, die keine Fenster-Plug-ins in einem ihrer Dokumente hat und wenn alle {{HTMLElement("iframe")}} Elemente, die das Dokument enthalten, ihr [`allowfullscreen`](/de/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen)-Attribut gesetzt haben.

Obwohl diese Eigenschaft schreibgeschützt ist, wird sie keinen Fehler auslösen, wenn sie modifiziert wird (auch nicht im strikten Modus); der Setter ist ein leeres Operation und wird ignoriert.

## Wert

Ein boolescher Wert, der `true` ist, wenn das Dokument und die darin enthaltenen Elemente durch Aufrufen von [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) in den Vollbildmodus versetzt werden können. Wenn der Vollbildmodus nicht verfügbar ist, ist dieser Wert `false`.

## Beispiele

In diesem Beispiel wird, bevor versucht wird, den Vollbildmodus für ein {{htmlElement("video")}} Element anzufordern, der Wert von `fullscreenEnabled` überprüft, um zu vermeiden, dass der Versuch unternommen wird, wenn er nicht verfügbar ist.

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
- [Leitfaden zur Fullscreen-API](/de/docs/Web/API/Fullscreen_API/Guide)
- [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)
- [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen)
- [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement)
- {{cssxref(":fullscreen")}} und {{cssxref("::backdrop")}}
- Das {{HTMLElement("iframe")}} [`allowfullscreen`](/de/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen)
  Attribut
