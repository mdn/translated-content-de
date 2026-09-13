---
title: "HTMLScriptElement: blocking-Eigenschaft"
short-title: blocking
slug: Web/API/HTMLScriptElement/blocking
l10n:
  sourceCommit: 752996f4695156431af4e19feb0542a4d372ce1e
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`blocking`**-Eigenschaft des [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement) gibt ein dynamisches [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Objekt zurück, welches die Operationen enthält, die beim Abrufen einer externen Ressource blockiert werden sollten. Sie spiegelt das [`blocking`](/de/docs/Web/HTML/Reference/Elements/script#blocking)-Inhaltsattribut des {{HTMLElement("script")}}-Elements wider.

## Wert

Ein dynamisches [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Objekt.

Obwohl die `blocking`-Eigenschaft selbst in dem Sinne schreibgeschützt ist, dass Sie das `DOMTokenList`-Objekt nicht ersetzen können, können Sie dennoch direkt die `blocking`-Eigenschaft zuweisen, was dem Zuweisen zu seiner [`value`](/de/docs/Web/API/DOMTokenList/value)-Eigenschaft entspricht. Sie können das `DOMTokenList`-Objekt auch mit den Methoden [`add()`](/de/docs/Web/API/DOMTokenList/add), [`remove()`](/de/docs/Web/API/DOMTokenList/remove), [`replace()`](/de/docs/Web/API/DOMTokenList/replace) und [`toggle()`](/de/docs/Web/API/DOMTokenList/toggle) modifizieren.

## Beispiele

```html
<script id="el" async blocking="render"></script>
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

- [`HTMLLinkElement.blocking`](/de/docs/Web/API/HTMLLinkElement/blocking)
- [`HTMLStyleElement.blocking`](/de/docs/Web/API/HTMLStyleElement/blocking)
