---
title: "HTMLFormElement: length property"
short-title: length
slug: Web/API/HTMLFormElement/length
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

Die **`HTMLFormElement.length`**-Eigenschaft ist schreibgeschützt und gibt die Anzahl der Steuerungselemente im {{HTMLElement("form")}}-Element zurück.

Sie können auf die Liste der Steuerelemente des Formulars mit der [`elements`](/de/docs/Web/API/HTMLFormElement/elements)-Eigenschaft zugreifen.

Dies umfasst sowohl Elemente, die Nachkommen des `<form>`-Elements sind, als auch Elemente, die über ihre `form`-Eigenschaft Mitglieder des Formulars werden.

Zu den Elementen, die für diese Eigenschaft berücksichtigt werden, gehören: {{HTMLElement("button")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}} (mit der Ausnahme, dass solche, deren Typ "image" ist, aus historischen Gründen weggelassen werden), {{HTMLElement("object")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}} und {{HTMLElement("textarea")}}.

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
