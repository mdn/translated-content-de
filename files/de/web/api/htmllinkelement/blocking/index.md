---
title: "HTMLLinkElement: blocking-Eigenschaft"
short-title: blocking
slug: Web/API/HTMLLinkElement/blocking
l10n:
  sourceCommit: c053b4b3bb0f34736e9f4402d4254830670af723
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`blocking`**-Eigenschaft des [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement) gibt ein lebendes [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Objekt zurück, das die Operationen enthält, die beim Abrufen einer externen Ressource blockiert werden sollten. Sie spiegelt das [`blocking`](/de/docs/Web/HTML/Reference/Elements/link#blocking)-Inhaltsattribut des {{HTMLElement("link")}}-Elements wider.

## Wert

Ein lebendes [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Objekt.

Obwohl die `blocking`-Eigenschaft selbst schreibgeschützt ist in dem Sinne, dass das `DOMTokenList`-Objekt nicht ersetzt werden kann, können Sie trotzdem direkt der `blocking`-Eigenschaft einen Wert zuweisen, was dem Zuweisen zu ihrer [`value`](/de/docs/Web/API/DOMTokenList/value)-Eigenschaft entspricht. Sie können das `DOMTokenList`-Objekt auch mit den Methoden [`add()`](/de/docs/Web/API/DOMTokenList/add), [`remove()`](/de/docs/Web/API/DOMTokenList/remove), [`replace()`](/de/docs/Web/API/DOMTokenList/replace) und [`toggle()`](/de/docs/Web/API/DOMTokenList/toggle) modifizieren.

## Beispiele

```html
<link
  id="el"
  rel="stylesheet"
  href="/example.css"
  blocking="render"
  crossorigin />
```

```js
const el = document.getElementById("el");
console.log(el.blocking); // Output: DOMTokenList ["render"]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLScriptElement.blocking`](/de/docs/Web/API/HTMLScriptElement/blocking)
- [`HTMLStyleElement.blocking`](/de/docs/Web/API/HTMLStyleElement/blocking)
