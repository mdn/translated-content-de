---
title: "HTMLElement: lang-Eigenschaft"
short-title: lang
slug: Web/API/HTMLElement/lang
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{ APIRef("HTML DOM") }}

Die **`lang`**-Eigenschaft des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces gibt die Basissprache der Attributwerte und des Textinhalts eines Elements an, in Form eines {{Glossary("BCP_47_language_tag", "BCP 47-Sprachtags")}}. Sie entspricht dem [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut des Elements; das `xml:lang`-Attribut beeinflusst diese Eigenschaft nicht.

Beachten Sie, dass, wenn das `lang`-Attribut nicht angegeben ist, das Element selbst möglicherweise immer noch die Sprache von seinem übergeordneten Element erbt. Diese geerbte Sprache wird jedoch nicht durch den Wert dieser Eigenschaft widergespiegelt.

## Wert

Ein Zeichenfolgenwert. Häufige Beispiele sind "en" für Englisch, "ja" für Japanisch, "es" für Spanisch und so weiter. Wenn nicht angegeben, ist der Wert eine leere Zeichenfolge.

## Beispiele

```js
// this snippet compares the base language and
// redirects to another URL based on language
if (document.documentElement.lang === "en") {
  window.location.href = "Some_document.html.en";
} else if (document.documentElement.lang === "ru") {
  window.location.href = "Some_document.html.ru";
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
