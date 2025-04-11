---
title: "HTMLScriptElement: type-Eigenschaft"
short-title: type
slug: Web/API/HTMLScriptElement/type
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`type`**-Eigenschaft des [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Interfaces ist ein String, der den Typ des Skripts widerspiegelt.

Sie spiegelt das `type`-Attribut des {{HTMLElement("script")}}-Elements wider.

## Wert

Ein String. Der Wert dieser Eigenschaft kann einer der folgenden sein:

- **Attribut ist nicht gesetzt (Standard), ein leerer String oder ein JavaScript-MIME-Typ**
  - : Gibt an, dass das Skript ein "klassisches Skript" ist, das JavaScript-Code enthält.
- `module`
  - : Dieser Wert führt dazu, dass der Code als JavaScript-Modul behandelt wird.
- `importmap`
  - : Dieser Wert zeigt an, dass der Körper des Elements eine Importkarte enthält.
- `speculationrules` {{experimental_inline}}
  - : Dieser Wert zeigt an, dass der Körper des Elements Spekulationsregeln enthält.
- **Jeder andere Wert**
  - : Der eingebettete Inhalt wird als Datenblock behandelt und nicht vom Browser verarbeitet.

Für weitere Informationen verweisen Sie bitte auf das [`type`](/de/docs/Web/HTML/Reference/Elements/script/type)-Attribut des {{HTMLElement("script")}}-Elements.

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
