---
title: "VirtualKeyboard: overlaysContent-Eigenschaft"
short-title: overlaysContent
slug: Web/API/VirtualKeyboard/overlaysContent
l10n:
  sourceCommit: 5cdb341c723de0edb273769555d9124266d9c851
---

{{APIRef("VirtualKeyboard API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`overlaysContent`**-Eigenschaft des `VirtualKeyboard`-Interfaces kann verwendet werden, um die automatische Art und Weise, wie Browser mit virtuellen On-Screen-Tastaturen umgehen, zu deaktivieren, indem die Größe des Viewports reduziert wird, um Platz für diese zu schaffen.

Wenn die `overlaysContent`-Eigenschaft auf `true` gesetzt wird, ändert der Browser die Größe des Viewports nicht mehr, wenn die virtuelle Tastatur erscheint. Stattdessen überlagert die virtuelle Tastatur den Inhalt der Webseite, und Sie können das Seitenlayout entsprechend mit der [Virtual Keyboard API](/de/docs/Web/API/VirtualKeyboard_API) sowie Ihrem eigenen benutzerdefinierten CSS und JavaScript anpassen.

## Wert

Ein boolescher Wert. Standardmäßig `false`, setzen Sie es auf `true`, um sich von der automatischen Behandlung der On-Screen-Tastatur durch den Browser abzumelden.

## Beispiel

```js
if ("virtualKeyboard" in navigator) {
  console.log(navigator.virtualKeyboard.overlaysContent); // false
  navigator.virtualKeyboard.overlaysContent = true; // Opt out of the automatic handling.
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die VirtualKeyboard-API](/de/docs/Web/API/VirtualKeyboard_API)
- [Volle Kontrolle mit der VirtualKeyboard-API](https://developer.chrome.com/docs/web-platform/virtual-keyboard/)
