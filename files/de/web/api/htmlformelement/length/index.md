---
title: "HTMLFormElement: length-Eigenschaft"
short-title: length
slug: Web/API/HTMLFormElement/length
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

Die **`HTMLFormElement.length`**-
schreibgeschützte Eigenschaft gibt die Anzahl der Steuerungselemente im {{HTMLElement("form")}}
Element zurück.

Sie können auf die Liste der Steuerelemente des Formulars über die
[`elements`](/de/docs/Web/API/HTMLFormElement/elements)-Eigenschaft zugreifen.

Dies umfasst sowohl Elemente, die Nachkommen des `<form>`
Elements sind, als auch Elemente, die durch ihre
`form`-Eigenschaft Mitglieder des Formulars geworden sind.

Elemente, die für diese Eigenschaft berücksichtigt werden, sind: {{HTMLElement("button")}},
{{HTMLElement("fieldset")}}, {{HTMLElement("input")}} (mit der Ausnahme,
dass solche mit dem Typ "image" aus historischen Gründen ausgeschlossen sind),
{{HTMLElement("object")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}},
und {{HTMLElement("textarea")}}.

## Wert

Eine Zahl.

## Beispiele

```js
if (document.getElementById("form1").length > 1) {
  // more than one form control here
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
