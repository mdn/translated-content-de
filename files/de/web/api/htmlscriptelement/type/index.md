---
title: "HTMLScriptElement: type-Eigenschaft"
short-title: type
slug: Web/API/HTMLScriptElement/type
l10n:
  sourceCommit: dadc5c5b6386e011bc296caedadec4287d55277f
---

{{APIRef("HTML DOM")}}

Die **`type`**-Eigenschaft des [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Interfaces ist ein String, der den Typ des Scripts widerspiegelt.

Sie spiegelt das `type`-Attribut des {{HTMLElement("script")}}-Elements wider.

## Wert

Ein String. Der Wert dieser Eigenschaft kann einer der folgenden sein:

- **Attribut ist nicht gesetzt (Standardwert), ein leerer String oder ein JavaScript MIME-Typ**
  - : Zeigt an, dass das Script ein "klassisches Script" ist, das JavaScript-Code enthält.
- `module`
  - : Dieser Wert bewirkt, dass der Code als JavaScript-Modul behandelt wird.
- `importmap`
  - : Dieser Wert zeigt an, dass der Inhalt des Elements eine Import-Karte enthält.
- `speculationrules` {{experimental_inline}}
  - : Dieser Wert zeigt an, dass der Inhalt des Elements Spekulationsregeln enthält.
- **Jeder andere Wert**
  - : Der eingebettete Inhalt wird als Datenblock behandelt und nicht von dem Browser verarbeitet.

Für weitere Informationen siehe das [`type`](/de/docs/Web/HTML/Element/script/type)-Attribut des {{HTMLElement("script")}}-Elements.

## Beispiele

```html
<script id="el" type="text/javascript"></script>
```

```js
const el = document.getElementById("el");
console.log(el.type); // Output: "text/javascript"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
