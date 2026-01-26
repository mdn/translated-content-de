---
title: "HTMLIFrameElement: sandbox-Eigenschaft"
short-title: sandbox
slug: Web/API/HTMLIFrameElement/sandbox
l10n:
  sourceCommit: c053b4b3bb0f34736e9f4402d4254830670af723
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`sandbox`**-Eigenschaft des [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement) gibt ein dynamisches [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Objekt zurück, das zusätzliche Einschränkungen für das Verhalten des eingebetteten Inhalts anzeigt. Sie spiegelt das [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox)-Inhaltsattribut des {{HTMLElement("iframe")}}-Elements wider.

## Wert

Ein dynamisches [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Objekt.

Obwohl die `sandbox`-Eigenschaft selbst im Sinne einer nicht austauschbaren `DOMTokenList`-Objekt schreibgeschützt ist, kann man der `sandbox`-Eigenschaft direkt einen Wert zuweisen, was dem Zuweisen zu ihrer [`value`](/de/docs/Web/API/DOMTokenList/value)-Eigenschaft entspricht. Sie können das `DOMTokenList`-Objekt auch mit den Methoden [`add()`](/de/docs/Web/API/DOMTokenList/add), [`remove()`](/de/docs/Web/API/DOMTokenList/remove), [`replace()`](/de/docs/Web/API/DOMTokenList/replace) und [`toggle()`](/de/docs/Web/API/DOMTokenList/toggle) verändern.

## Beispiele

```html
<iframe
  id="el"
  title="example"
  src="https://example.com"
  sandbox="allow-same-origin allow-scripts"></iframe>
```

```js
const el = document.getElementById("el");
console.log(Array.from(el.sandbox)); // Output: ["allow-same-origin", "allow-scripts"]

el.sandbox = "";
console.log(Array.from(el.sandbox)); // Output: []
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
