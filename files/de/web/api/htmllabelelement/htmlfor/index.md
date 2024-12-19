---
title: "HTMLLabelElement: htmlFor-Eigenschaft"
short-title: htmlFor
slug: Web/API/HTMLLabelElement/htmlFor
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

Die **`HTMLLabelElement.htmlFor`**-Eigenschaft spiegelt den Wert der [`for`](/de/docs/Web/HTML/Element/label#for) Inhalts-Eigenschaft wider. Das bedeutet, dass diese skriptzugängliche Eigenschaft verwendet wird, um den Wert der Inhalts-Eigenschaft `for` zu setzen und zu lesen, die die ID des verbundenen Steuerelements des Labels ist.

## Wert

Ein String, der die ID-Zeichenfolge des Elements enthält, welches mit dem Steuerelement verbunden ist.

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
- [HTML-Formulare Leitfaden](/de/docs/Learn_web_development/Extensions/Forms)
