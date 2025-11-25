---
title: "HTMLStyleElement: blocking-Eigenschaft"
short-title: blocking
slug: Web/API/HTMLStyleElement/blocking
l10n:
  sourceCommit: c053b4b3bb0f34736e9f4402d4254830670af723
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`blocking`**-Eigenschaft des [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement) gibt ein dynamisches [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Objekt zurück, das die Operationen enthält, die beim Abrufen einer externen Ressource blockiert werden sollten. Sie spiegelt das [`blocking`](/de/docs/Web/HTML/Reference/Elements/style#blocking)-Inhaltsattribut des {{HTMLElement("style")}}-Elements wider.

## Wert

Ein dynamisches [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Objekt.

Obwohl die `blocking`-Eigenschaft selbst in dem Sinne schreibgeschützt ist, dass Sie das `DOMTokenList`-Objekt nicht ersetzen können, können Sie dennoch direkt der `blocking`-Eigenschaft einen Wert zuweisen, was gleichbedeutend mit der Zuweisung zum [`value`](/de/docs/Web/API/DOMTokenList/value)-Eigenschaft ist. Außerdem können Sie das `DOMTokenList`-Objekt mit den Methoden [`add()`](/de/docs/Web/API/DOMTokenList/add), [`remove()`](/de/docs/Web/API/DOMTokenList/remove), [`replace()`](/de/docs/Web/API/DOMTokenList/replace) und [`toggle()`](/de/docs/Web/API/DOMTokenList/toggle) modifizieren.

## Beispiele

```html
<style id="el" blocking="render">
  p {
    color: blue;
  }
</style>
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
- [`HTMLScriptElement.blocking`](/de/docs/Web/API/HTMLScriptElement/blocking)
