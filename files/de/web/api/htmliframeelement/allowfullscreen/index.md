---
title: "HTMLIFrameElement: allowFullscreen-Eigenschaft"
short-title: allowFullscreen
slug: Web/API/HTMLIFrameElement/allowFullscreen
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("HTML DOM")}}

Die **`allowFullscreen`**-Eigenschaft des [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement)-Interfaces ist ein boolescher Wert, der das `allowfullscreen`-Attribut des {{HTMLElement("iframe")}}-Elements widerspiegelt und anzeigt, ob die Inhalte des iframes [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) verwenden dürfen.

> [!NOTE]
> Diese Eigenschaft gilt als veraltete Eigenschaft. Verwenden Sie stattdessen `allow="fullscreen"` und [`HTMLIFrameElement.allow`](/de/docs/Web/API/HTMLIFrameElement/allow).

## Wert

Ein boolescher Wert.

## Beispiele

```html
<iframe id="el" allowfullscreen></iframe>
```

```js
const el = document.getElementById("el");
console.log(el.allowFullscreen); // Output: true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fullscreen API](/de/docs/Web/API/Fullscreen_API)
- [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
- {{httpheader("Permissions-Policy/fullscreen", "fullscreen")}}-Berechtigungsrichtlinien-Direktive
