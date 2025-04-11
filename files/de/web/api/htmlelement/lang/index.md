---
title: "HTMLElement: lang-Eigenschaft"
short-title: lang
slug: Web/API/HTMLElement/lang
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die **`lang`**-Eigenschaft des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces gibt die Basissprache der Attributwerte und des Textinhalts eines Elements an, in Form eines {{RFC(5646, "BCP 47 Sprachkennzeichens")}}. Sie spiegelt das [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut des Elements wider; das `xml:lang`-Attribut beeinflusst diese Eigenschaft nicht.

Beachten Sie, dass, wenn das `lang`-Attribut nicht angegeben ist, das Element selbst möglicherweise die Sprache von seinem übergeordneten Element erbt. Diese geerbte Sprache wird jedoch nicht durch den Wert dieser Eigenschaft widergespiegelt.

## Wert

Ein String. Häufige Beispiele sind "en" für Englisch, "ja" für Japanisch, "es" für Spanisch und so weiter. Wenn nicht angegeben, ist der Wert ein leerer String.

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
