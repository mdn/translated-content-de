---
title: "HTMLScriptElement: blocking-Eigenschaft"
short-title: blocking
slug: Web/API/HTMLScriptElement/blocking
l10n:
  sourceCommit: c053b4b3bb0f34736e9f4402d4254830670af723
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`blocking`**-Eigenschaft des [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement) gibt ein dynamisches [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Objekt zurück, das die Operationen enthält, die beim Abrufen einer externen Ressource blockiert werden sollten. Sie spiegelt das [`blocking`](/de/docs/Web/HTML/Reference/Elements/script#blocking)-Inhaltsattribut des {{HTMLElement("script")}}-Elements wider.

## Wert

Ein dynamisches [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Objekt.

Obwohl die `blocking`-Eigenschaft selbst in dem Sinne schreibgeschützt ist, dass Sie das `DOMTokenList`-Objekt nicht ersetzen können, können Sie dennoch direkt der `blocking`-Eigenschaft einen Wert zuweisen, was gleichbedeutend mit der Zuweisung zu ihrer [`value`](/de/docs/Web/API/DOMTokenList/value)-Eigenschaft ist. Sie können das `DOMTokenList`-Objekt auch mit den Methoden [`add()`](/de/docs/Web/API/DOMTokenList/add), [`remove()`](/de/docs/Web/API/DOMTokenList/remove), [`replace()`](/de/docs/Web/API/DOMTokenList/replace) und [`toggle()`](/de/docs/Web/API/DOMTokenList/toggle) modifizieren.

## Beispiele

```html
<script id="el" async blocking="render"></script>
```

```js
const el = document.getElementById("el");
console.log(el.blocking); // Output: "render"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLLinkElement.blocking`](/de/docs/Web/API/HTMLLinkElement/blocking)
- [`HTMLStyleElement.blocking`](/de/docs/Web/API/HTMLStyleElement/blocking)
