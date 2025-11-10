---
title: "HTMLLabelElement: form-Eigenschaft"
short-title: form
slug: Web/API/HTMLLabelElement/form
l10n:
  sourceCommit: 477aaf5fca949e2e0dedbfbdb626c93c0a0fea0f
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`form`**-Eigenschaft der [`HTMLLabelElement`](/de/docs/Web/API/HTMLLabelElement)-Schnittstelle gibt ein [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Objekt zurück, das die mit diesem {{HTMLElement("label")}} verknüpfte [`control`](/de/docs/Web/API/HTMLLabelElement/control) besitzt, oder `null`, wenn dieses Label nicht mit einem [beschriftbaren](/de/docs/Web/HTML/Guides/Content_categories#labelable) [formularassoziierten](/de/docs/Web/HTML/Guides/Content_categories#form-associated_content) Element ({{htmlelement("button")}}, {{htmlelement("input")}}, {{htmlelement("output")}}, {{htmlelement("select")}}, {{htmlelement("textarea")}} oder [formularassoziierte benutzerdefinierte Elemente](https://html.spec.whatwg.org/multipage/custom-elements.html#form-associated-custom-element)) verknüpft ist, das zu einem Formular gehört.

Im Gegensatz zu [formularassoziierten Elementen](/de/docs/Web/HTML/Guides/Content_categories#form-associated_content) besitzt das `<label>`-Element kein [`form`](/de/docs/Web/HTML/Reference/Attributes/form)-Attribut. Diese Eigenschaft spiegelt kein HTML-Attribut wider, sondern ist nur eine Abkürzung für `label.control.form`.

## Wert

Ein [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) oder `null`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLLabelElement`](/de/docs/Web/API/HTMLLabelElement)
- [`HTMLInputElement.form`](/de/docs/Web/API/HTMLInputElement/form)
- [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)
- {{HTMLElement("label")}}
- [HTML-Formulare Leitfaden](/de/docs/Learn_web_development/Extensions/Forms)
