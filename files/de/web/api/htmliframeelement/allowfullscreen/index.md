---
title: "HTMLIFrameElement: allowFullscreen-Eigenschaft"
short-title: allowFullscreen
slug: Web/API/HTMLIFrameElement/allowFullscreen
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}

Die **`allowFullscreen`** Eigenschaft des [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement)-Interfaces ist ein boolescher Wert, der das `allowfullscreen`-Attribut des {{HTMLElement("iframe")}}-Elements widerspiegelt. Es zeigt an, ob die Inhalte des iframes die Verwendung von [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) erlauben.

> [!NOTE]
> Diese Eigenschaft wird als veraltet betrachtet. Verwenden Sie stattdessen `allow="fullscreen"` und [`HTMLIFrameElement.allow`](/de/docs/Web/API/HTMLIFrameElement/allow).

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

- [Fullscreen-API](/de/docs/Web/API/Fullscreen_API)
- [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)
- [Berechtigungsrichtlinie (Permissions Policy)](/de/docs/Web/HTTP/Permissions_Policy)
- {{httpheader("Permissions-Policy/fullscreen", "fullscreen")}} Berechtigungsrichtlinien-Direktive
