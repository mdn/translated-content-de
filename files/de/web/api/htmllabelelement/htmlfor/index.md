---
title: "HTMLLabelElement: htmlFor-Eigenschaft"
short-title: htmlFor
slug: Web/API/HTMLLabelElement/htmlFor
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}

Die **`HTMLLabelElement.htmlFor`**-Eigenschaft spiegelt den Wert der [`for`](/de/docs/Web/HTML/Element/label#for) Inhalts-Eigenschaft wider. Das bedeutet, dass diese skriptzugängliche Eigenschaft verwendet wird, um den Wert der Inhalts-Eigenschaft `for` zu setzen und zu lesen, welcher die ID des zugehörigen Steuerelements des Labels ist.

## Wert

Ein String, der die ID des Steuerelements enthält, mit dem das Label verbunden ist.

> [!NOTE]
> Wenn diese Eigenschaft einen Wert hat, muss die {{domxref("HTMLLabelElement.control")}}-Eigenschaft auf das gleiche Steuerelement verweisen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLLabelElement")}}
- {{domxref("HTMLLabelElement.control")}}
- {{domxref("HTMLElement")}}
- {{HTMLElement("label")}}
- [HTML-Formularleitfaden](/de/docs/Learn/Forms)
