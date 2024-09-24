---
title: ValidityState
slug: Web/API/ValidityState
l10n:
  sourceCommit: e8805a6eb0b2af30cfd4ec54c30261f7e5f8163e
---

{{APIRef("HTML DOM")}}

Die **`ValidityState`**-Schnittstelle repräsentiert die _Gültigkeitszustände_, in denen sich ein Element im Hinblick auf die Constraint-Validierung befinden kann. Gemeinsam helfen sie zu erklären, warum der Wert eines Elements die Validierung nicht besteht, falls er ungültig ist.

## Instanz-Eigenschaften

Für jede dieser Boolean-Eigenschaften zeigt ein Wert von `true` an, dass der angegebene Grund für das Scheitern der Validierung zutreffen kann, mit Ausnahme der `valid`-Eigenschaft, die `true` ist, wenn der Wert des Elements alle Einschränkungen erfüllt.

- {{domxref("ValidityState.badInput", "badInput")}} {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Benutzer eine Eingabe gemacht hat, die der Browser nicht umwandeln kann.
- {{domxref("ValidityState.customError", "customError")}} {{ReadOnlyInline}}
  - : Ein boolescher Wert, der anzeigt, ob die benutzerdefinierte Validierungsnachricht des Elements durch Aufrufen der Methode {{domxref('HTMLObjectElement.setCustomValidity', 'setCustomValidity()')}} auf eine nicht-leere Zeichenfolge gesetzt wurde.
- {{domxref("ValidityState.patternMismatch", "patternMismatch")}} {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Wert nicht mit dem angegebenen [`pattern`](/de/docs/Web/HTML/Element/input#pattern) übereinstimmt, und `false`, wenn er übereinstimmt. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
- {{domxref("ValidityState.rangeOverflow", "rangeOverflow")}} {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Wert größer ist als das durch das [`max`](/de/docs/Web/HTML/Element/input#max)-Attribut angegebene Maximum, oder `false`, wenn er kleiner oder gleich dem Maximum ist. Wenn `true`, entspricht das Element den CSS-Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}}.
- {{domxref("ValidityState.rangeUnderflow", "rangeUnderflow")}} {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Wert kleiner ist als das durch das [`min`](/de/docs/Web/HTML/Element/input#min)-Attribut angegebene Minimum, oder `false`, wenn er größer oder gleich dem Minimum ist. Wenn `true`, entspricht das Element den CSS-Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}}.
- {{domxref("ValidityState.stepMismatch", "stepMismatch")}} {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Wert nicht den durch das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut bestimmten Regeln entspricht (d. h., er ist nicht gleichmäßig durch den Schrittwert teilbar), oder `false`, wenn er den Schrittregel entspricht. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
- {{domxref("ValidityState.tooLong", "tooLong")}} {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Wert die angegebene `maxlength` für {{domxref("HTMLInputElement")}} oder {{domxref("HTMLTextAreaElement")}}-Objekte überschreitet, oder `false`, wenn seine Länge kleiner oder gleich der maximalen Länge ist. _Hinweis: Diese Eigenschaft ist in Gecko niemals `true`, da die Werte der Elemente davon abgehalten werden, länger als `maxlength` zu sein._ Wenn `true`, entspricht das Element den CSS-Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}}.
- {{domxref("ValidityState.tooShort", "tooShort")}} {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Wert die angegebene `minlength` für {{domxref("HTMLInputElement")}} oder {{domxref("HTMLTextAreaElement")}}-Objekte nicht erreicht, oder `false`, wenn seine Länge größer oder gleich der minimalen Länge ist. Wenn `true`, entspricht das Element den CSS-Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}}.
- {{domxref("ValidityState.typeMismatch", "typeMismatch")}} {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Wert nicht in der erforderlichen Syntax vorliegt (wenn [`type`](/de/docs/Web/HTML/Element/input#type) `email` oder `url` ist), oder `false`, wenn die Syntax korrekt ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
- {{domxref("ValidityState.valid", "valid")}} {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn das Element alle seine Validierungseinschränkungen erfüllt und daher als gültig angesehen wird, oder `false`, wenn es eine der Einschränkungen nicht erfüllt. Wenn `true`, entspricht das Element der {{cssxref(":valid")}} CSS-Pseudoklasse; andernfalls der {{cssxref(":invalid")}} CSS-Pseudoklasse.
- {{domxref("ValidityState.valueMissing", "valueMissing")}} {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn das Element ein [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut, aber keinen Wert hat, oder `false`, andernfalls. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden: Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation)
- [Tutorial: Validierung von Formulardaten](/de/docs/Learn/Forms/Form_validation)
