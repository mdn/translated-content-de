---
title: "HTMLFormElement: length-Eigenschaft"
short-title: length
slug: Web/API/HTMLFormElement/length
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

Die **`HTMLFormElement.length`**
schreibgeschützte Eigenschaft gibt die Anzahl der Steuerelemente im {{HTMLElement("form")}}
Element zurück.

Sie können die Liste der Steuerelemente des Formulars mit der
{{domxref("HTMLFormElement.elements", "elements")}} Eigenschaft abrufen.

Dies schließt sowohl Elemente ein, die Nachkommen des `<form>`
Elements sind, als auch Elemente, die mithilfe ihrer
`form` Eigenschaft Mitglieder des Formulars gemacht werden.

Elemente, die für diese Eigenschaft berücksichtigt werden: {{HTMLElement("button")}},
{{HTMLElement("fieldset")}}, {{HTMLElement("input")}} (mit der Ausnahme,
dass alle, deren Typ "image" ist, aus historischen Gründen weggelassen werden),
{{HTMLElement("object")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}},
und {{HTMLElement("textarea")}}.

## Wert

Eine Zahl.

## Beispiele

```js
if (document.getElementById("form1").length > 1) {
  // mehr als ein Formularsteuerelement hier
}
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
