---
title: "HTMLElement: lang Eigenschaft"
short-title: lang
slug: Web/API/HTMLElement/lang
l10n:
  sourceCommit: 55353013e95844403fb16dd12d6a74a6be4f0120
---

{{ APIRef("HTML DOM") }}

Die **`lang`**-Eigenschaft der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle gibt die Basissprache der Attributwerte und des Textinhalts eines Elements an, in Form eines {{RFC(5646, "BCP 47 Sprachidentifikator-Tags")}}. Sie entspricht dem [`lang`](/de/docs/Web/HTML/Global_attributes/lang)-Attribut des Elements; das `xml:lang`-Attribut beeinflusst diese Eigenschaft nicht.

Beachten Sie, dass, wenn das `lang`-Attribut nicht angegeben ist, das Element selbst die Sprache möglicherweise vom übergeordneten Element erbt. Diese geerbte Sprache wird jedoch nicht im Wert dieser Eigenschaft widergespiegelt.

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
