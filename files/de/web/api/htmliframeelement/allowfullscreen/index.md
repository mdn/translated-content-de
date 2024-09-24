---
title: "HTMLIFrameElement: allowFullscreen-Eigenschaft"
short-title: allowFullscreen
slug: Web/API/HTMLIFrameElement/allowFullscreen
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}

Die **`allowFullscreen`**-Eigenschaft des {{domxref("HTMLIFrameElement")}}-Interfaces ist ein boolescher Wert, der das `allowfullscreen`-Attribut des {{HTMLElement("iframe")}}-Elements widerspiegelt und angibt, ob die Inhalte des iframes {{domxref("Element.requestFullscreen", "requestFullscreen()")}} verwenden dürfen.

> [!NOTE]
> Diese Eigenschaft wird als veraltet angesehen. Verwenden Sie stattdessen `allow="fullscreen"` und {{domxref("HTMLIFrameElement.allow")}}.

## Wert

Ein boolescher Wert.

## Beispiele

```html
<iframe id="el" allowfullscreen></iframe>
```

```js
const el = document.getElementById("el");
console.log(el.allowFullscreen); // Ausgabe: true
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Fullscreen API](/de/docs/Web/API/Fullscreen_API)
- {{domxref("Element.requestFullscreen()")}}
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
- {{httpheader("Permissions-Policy/fullscreen", "fullscreen")}} Richtlinie für Berechtigungsrichtlinien
