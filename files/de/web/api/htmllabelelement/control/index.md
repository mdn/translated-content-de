---
title: "HTMLLabelElement: Eigenschaft control"
short-title: control
slug: Web/API/HTMLLabelElement/control
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`HTMLLabelElement.control`** Eigenschaft gibt eine Referenz zu dem Steuerelement zurück (in der Form eines Objekts vom Typ {{domxref("HTMLElement")}} oder einem seiner Derivate), mit dem das {{HTMLElement("label")}} Element assoziiert ist, oder `null` falls das Label nicht mit einem Steuerelement verbunden ist.

## Wert

Ein von {{domxref("HTMLElement")}} abgeleitetes Objekt, das das mit dem {{HTMLElement("label")}} verbundene Steuerelement darstellt, oder `null`, wenn das Label alleine steht.

> [!NOTE]
> Wenn diese Eigenschaft einen Wert hat und {{domxref("HTMLLabelElement.htmlFor")}} ebenfalls einen Wert hat, muss die {{domxref("HTMLLabelElement.htmlFor")}} Eigenschaft auf dasselbe Steuerelement verweisen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLLabelElement")}}
- {{domxref("HTMLElement")}}
- {{HTMLElement("label")}}
- [HTML-Formulare Leitfaden](/de/docs/Learn/Forms)
