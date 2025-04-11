---
title: "HTMLFormElement: acceptCharset-Eigenschaft"
short-title: acceptCharset
slug: Web/API/HTMLFormElement/acceptCharset
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`HTMLFormElement.acceptCharset`**-Eigenschaft steht für die {{Glossary("character_encoding", "Zeichenkodierung")}} des angegebenen {{htmlelement("form")}}-Elements.

Die Spezifikation erlaubt einen einzelnen, nicht case-sensitiven Wert von `"UTF-8"`, was die allgegenwärtige Verwendung dieser Kodierung widerspiegelt (historisch konnten mehrere Zeichenkodierungen als kommagetrennte oder leerzeichengetrennte Liste angegeben werden).

Dies spiegelt den Wert des [`accept-charset`](/de/docs/Web/HTML/Reference/Elements/form#accept-charset) HTML-Attributs des Formulars wider.

## Wert

Ein String, der eine nicht case-sensitive Übereinstimmung mit `UTF-8` sein kann.

## Beispiele

```js
let charSet = document.forms["my-form"].acceptCharset;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
