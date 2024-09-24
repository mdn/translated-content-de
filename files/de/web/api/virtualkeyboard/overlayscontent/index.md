---
title: "VirtualKeyboard: overlaysContent-Eigenschaft"
short-title: overlaysContent
slug: Web/API/VirtualKeyboard/overlaysContent
l10n:
  sourceCommit: 5cdb341c723de0edb273769555d9124266d9c851
---

{{APIRef("VirtualKeyboard API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`overlaysContent`**-Eigenschaft der VirtualKeyboard-Schnittstelle kann verwendet werden, um sich von der automatischen Art und Weise, wie Browser Bildschirmtastaturen handhaben, abzumelden, indem die Größe des Viewports verkleinert wird, um Platz für diese zu schaffen.

Wenn die `overlaysContent`-Eigenschaft auf `true` gesetzt ist, verändert der Browser nicht mehr die Größe des Viewports, wenn die virtuelle Tastatur erscheint. Stattdessen überlagert die virtuelle Tastatur den Inhalt der Webseite und Sie können das Seitenlayout entsprechend mit der {{domxref("VirtualKeyboard_API", "Virtual Keyboard API", "", "nocode")}} und Ihrem eigenen benutzerdefinierten CSS und JavaScript anpassen.

## Wert

Ein boolescher Wert. Standardmäßig `false`, setzen Sie ihn auf `true`, um sich von der automatischen Handhabung der Bildschirmtastatur des Browsers abzumelden.

## Beispiel

```js
if ("virtualKeyboard" in navigator) {
  console.log(navigator.virtualKeyboard.overlaysContent); // false
  navigator.virtualKeyboard.overlaysContent = true; // Von der automatischen Handhabung abmelden.
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("VirtualKeyboard_API", "Die VirtualKeyboard API", "", "nocode")}}
- [Volle Kontrolle mit der VirtualKeyboard API](https://developer.chrome.com/docs/web-platform/virtual-keyboard/)
