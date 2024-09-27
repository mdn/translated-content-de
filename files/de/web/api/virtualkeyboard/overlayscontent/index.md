---
title: "VirtualKeyboard: overlaysContent-Eigenschaft"
short-title: overlaysContent
slug: Web/API/VirtualKeyboard/overlaysContent
l10n:
  sourceCommit: 5cdb341c723de0edb273769555d9124266d9c851
---

{{APIRef("VirtualKeyboard API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`overlaysContent`**-Eigenschaft der `VirtualKeyboard`-Schnittstelle kann verwendet werden, um sich von der automatischen Art, wie Browser mit virtuellen On-Screen-Tastaturen umgehen, abzumelden, indem die Größe des Viewports verkleinert wird, um Platz für sie zu schaffen.

Wenn die `overlaysContent`-Eigenschaft auf `true` gesetzt ist, verkleinert der Browser den Viewport nicht mehr, wenn die virtuelle Tastatur erscheint. Stattdessen überlagert die virtuelle Tastatur den Inhalt der Webseite, und Sie können das Seitenlayout anhand der [Virtual Keyboard API](/de/docs/Web/API/VirtualKeyboard_API) sowie Ihrem eigenen benutzerdefinierten CSS und JavaScript entsprechend anpassen.

## Wert

Ein boolean. Standardmäßig `false`, setzen Sie es auf `true`, um die automatische Behandlung der virtuellen On-Screen-Tastatur durch den Browser zu deaktivieren.

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

- [Die VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API)
- [Vollständige Kontrolle mit der VirtualKeyboard API](https://developer.chrome.com/docs/web-platform/virtual-keyboard/)
