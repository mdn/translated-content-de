---
title: "HTMLFormElement: Eigenschaft acceptCharset"
short-title: acceptCharset
slug: Web/API/HTMLFormElement/acceptCharset
l10n:
  sourceCommit: 56cbe48e4426172461d9297523b68716922690e5
---

{{APIRef("HTML DOM")}}

Die **`HTMLFormElement.acceptCharset`**-Eigenschaft repräsentiert die {{Glossary("character_encoding", "Zeichenkodierung")}} für das gegebene {{htmlelement("form")}}-Element.

Die Spezifikation erlaubt einen einzigen nicht case-sensitiven Wert von `"UTF-8"`, was die Allgegenwärtigkeit dieser Kodierung widerspiegelt (historisch konnten mehrere Zeichencodierungen als kommaseparierte oder leerzeichengetrennte Liste angegeben werden).

Dies spiegelt den Wert des [`accept-charset`](/de/docs/Web/HTML/Element/form#accept-charset) HTML-Attributs des Formulars wider.

## Wert

Ein String, der in case-insensitiver Übereinstimmung mit `UTF-8` stehen kann.

## Beispiele

```js
let charSet = document.forms["my-form"].acceptCharset;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
