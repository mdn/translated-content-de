---
title: "HTMLScriptElement: text-Eigenschaft"
short-title: text
slug: Web/API/HTMLScriptElement/text
l10n:
  sourceCommit: 59873ba98645df59048c642f72237f31327a6c3b
---

{{APIRef("HTML DOM")}}

Die **`text`**-Eigenschaft der {{domxref("HTMLScriptElement")}}-Schnittstelle ist ein String, der den Textinhalt innerhalb des {{HTMLElement("script")}}-Elements widerspiegelt. Sie funktioniert genauso wie die {{domxref("Node.textContent")}}-Eigenschaft.

Sie spiegelt das `text`-Attribut des {{HTMLElement("script")}}-Elements wider.

## Wert

Ein String.

## Beispiele

```html
<script id="el" type="text/javascript">
  const num = 10;
  console.log(num);
</script>
```

```js
const el = document.getElementById("el");
console.log(el.text); // Ausgabe: "\n  const num = 10;\n  console.log(num);\n"
console.log(el.textContent); // Ausgabe: "\n  const num = 10;\n  console.log(num);\n"

el.text = "console.log(10);";
console.log(el.text); // Ausgabe: "console.log(10);"
console.log(el.textContent); // Ausgabe: "console.log(10);"
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
