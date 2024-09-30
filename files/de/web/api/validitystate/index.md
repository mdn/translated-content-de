---
title: ValidityState
slug: Web/API/ValidityState
l10n:
  sourceCommit: e8805a6eb0b2af30cfd4ec54c30261f7e5f8163e
---

{{APIRef("HTML DOM")}}

Die **`ValidityState`**-Schnittstelle repräsentiert die _Gültigkeitszustände_, in denen sich ein Element befinden kann, im Hinblick auf die Einschränkungsvalidierung. Zusammen helfen sie zu erklären, warum der Wert eines Elements nicht gültig ist, wenn er nicht validiert wird.

## Instanz-Eigenschaften

Für jede dieser booleschen Eigenschaften zeigt ein Wert von `true` an, dass der angegebene Grund für das Scheitern der Validierung zutrifft, mit Ausnahme der `valid`-Eigenschaft, die `true` ist, wenn der Wert des Elements alle Einschränkungen erfüllt.

- [`badInput`](/de/docs/Web/API/ValidityState/badInput) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Benutzer eine Eingabe bereitgestellt hat, die der Browser nicht konvertieren kann.
- [`customError`](/de/docs/Web/API/ValidityState/customError) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der anzeigt, ob die benutzerdefinierte Fehlermeldung des Elements auf eine nicht-leere Zeichenfolge gesetzt wurde, indem die Methode [`setCustomValidity()`](/de/docs/Web/API/HTMLObjectElement/setCustomValidity) des Elements aufgerufen wurde.
- [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Wert nicht dem angegebenen [`pattern`](/de/docs/Web/HTML/Element/input#pattern) entspricht, und `false`, wenn er es tut. Bei `true` entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
- [`rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Wert größer ist als das durch das [`max`](/de/docs/Web/HTML/Element/input#max) Attribut festgelegte Maximum, oder `false`, wenn er kleiner oder gleich dem Maximum ist. Bei `true` entspricht das Element den CSS-Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}}.
- [`rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Wert kleiner ist als das durch das [`min`](/de/docs/Web/HTML/Element/input#min) Attribut festgelegte Minimum, oder `false`, wenn er größer oder gleich dem Minimum ist. Bei `true` entspricht das Element den CSS-Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}}.
- [`stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Wert nicht zu den durch das [`step`](/de/docs/Web/HTML/Element/input#step) Attribut festgelegten Regeln passt (d. h., er ist nicht gleichmäßig durch den Schrittwert teilbar), oder `false`, wenn er zu den Schrittregeln passt. Bei `true` entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
- [`tooLong`](/de/docs/Web/API/ValidityState/tooLong) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Wert die für [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) oder [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) Objekte angegebene `maxlength` überschreitet, oder `false`, wenn seine Länge kleiner oder gleich der maximalen Länge ist. _Hinweis: Diese Eigenschaft ist in Gecko niemals `true`, da die Werte von Elementen daran gehindert werden, länger als `maxlength` zu sein._ Bei `true` entspricht das Element den CSS-Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}}.
- [`tooShort`](/de/docs/Web/API/ValidityState/tooShort) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Wert die für [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) oder [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) Objekte angegebene `minlength` nicht erfüllt, oder `false`, wenn seine Länge größer oder gleich der Mindestlänge ist. Bei `true` entspricht das Element den CSS-Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}}.
- [`typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Wert nicht der erforderlichen Syntax entspricht (wenn [`type`](/de/docs/Web/HTML/Element/input#type) `email` oder `url` ist), oder `false`, wenn die Syntax korrekt ist. Bei `true` entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
- [`valid`](/de/docs/Web/API/ValidityState/valid) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn das Element alle seine Validierungseinschränkungen erfüllt und daher als gültig angesehen wird, oder `false`, wenn es eine Einschränkung nicht erfüllt. Bei `true` entspricht das Element der {{cssxref(":valid")}} CSS-Pseudoklasse; andernfalls der {{cssxref(":invalid")}} CSS-Pseudoklasse.
- [`valueMissing`](/de/docs/Web/API/ValidityState/valueMissing) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn das Element ein [`required`](/de/docs/Web/HTML/Element/input#required) Attribut hat, aber keinen Wert, oder `false` anders. Bei `true` entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- [Tutorial: Formulardatenvalidierung](/de/docs/Learn/Forms/Form_validation)
