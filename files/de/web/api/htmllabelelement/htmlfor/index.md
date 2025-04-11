---
title: "HTMLLabelElement: htmlFor Eigenschaft"
short-title: htmlFor
slug: Web/API/HTMLLabelElement/htmlFor
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`HTMLLabelElement.htmlFor`**-Eigenschaft spiegelt den Wert der [`for`](/de/docs/Web/HTML/Reference/Elements/label#for) Inhalts-Eigenschaft wider. Das bedeutet, dass diese skriptzugängliche Eigenschaft verwendet wird, um den Wert der Inhalts-Eigenschaft `for` zu setzen und auszulesen, welcher die ID des zugehörigen Steuerelements des Labels ist.

## Wert

Ein String, der die ID-Zeichenfolge des Elements enthält, das mit dem Steuerelement verbunden ist.

> [!NOTE]
> Wenn diese Eigenschaft einen Wert hat, muss die [`HTMLLabelElement.control`](/de/docs/Web/API/HTMLLabelElement/control)-Eigenschaft auf dasselbe Steuerelement verweisen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLLabelElement`](/de/docs/Web/API/HTMLLabelElement)
- [`HTMLLabelElement.control`](/de/docs/Web/API/HTMLLabelElement/control)
- [`HTMLElement`](/de/docs/Web/API/HTMLElement)
- {{HTMLElement("label")}}
- [Leitfaden zu HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms)
