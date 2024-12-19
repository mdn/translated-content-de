---
title: ValidityState
slug: Web/API/ValidityState
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

Das **`ValidityState`**-Interface repräsentiert die _Gültigkeitszustände_, in denen sich ein Element im Hinblick auf die Einschränkungsvalidierung befinden kann. Zusammen helfen sie dabei zu erklären, warum der Wert eines Elements ungültig ist, wenn er nicht den Validierungsbedingungen entspricht.

## Instanzeigenschaften

Bei jeder dieser booleschen Eigenschaften zeigt ein Wert von `true` an, dass der angegebene Grund für das Scheitern der Validierung zutrifft, mit der Ausnahme der `valid`-Eigenschaft, die `true` ist, wenn der Wert des Elements allen Einschränkungen entspricht.

- [`badInput`](/de/docs/Web/API/ValidityState/badInput) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Benutzer eine Eingabe gemacht hat, die der Browser nicht konvertieren kann.
- [`customError`](/de/docs/Web/API/ValidityState/customError) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der anzeigt, ob die benutzerdefinierte Gültigkeitsnachricht des Elements durch Aufruf der Methode [`setCustomValidity()`](/de/docs/Web/API/HTMLObjectElement/setCustomValidity) auf eine nicht-leere Zeichenkette gesetzt wurde.
- [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Wert nicht dem angegebenen [`pattern`](/de/docs/Web/HTML/Element/input#pattern) entspricht, und `false`, wenn er übereinstimmt. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
- [`rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Wert größer ist als das durch das [`max`](/de/docs/Web/HTML/Element/input#max)-Attribut angegebene Maximum, oder `false`, wenn er kleiner oder gleich dem Maximum ist. Wenn `true`, entspricht das Element den {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
- [`rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Wert kleiner ist als das durch das [`min`](/de/docs/Web/HTML/Element/input#min)-Attribut angegebene Minimum, oder `false`, wenn er größer oder gleich dem Minimum ist. Wenn `true`, entspricht das Element den {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
- [`stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Wert nicht den durch das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut festgelegten Regeln entspricht (das heißt, er ist nicht gleichmäßig durch den Schrittwert teilbar), oder `false`, wenn er der Schrittregel entspricht. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
- [`tooLong`](/de/docs/Web/API/ValidityState/tooLong) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Wert die für [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) oder [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) Objekte angegebene `maxlength` überschreitet, oder `false`, wenn seine Länge kleiner oder gleich der maximalen Länge ist. _Hinweis: Diese Eigenschaft ist in Gecko nie `true`, da die Werte der Elemente daran gehindert werden, länger als `maxlength` zu sein._ Wenn `true`, entspricht das Element den {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
- [`tooShort`](/de/docs/Web/API/ValidityState/tooShort) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Wert die festgelegte `minlength` für [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) oder [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) Objekte nicht erfüllt, oder `false`, wenn seine Länge größer oder gleich der minimalen Länge ist. Wenn `true`, entspricht das Element den {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
- [`typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Wert nicht dem erforderlichen Syntaxformat entspricht (wenn [`type`](/de/docs/Web/HTML/Element/input#type) `email` oder `url` ist), oder `false`, wenn die Syntax korrekt ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
- [`valid`](/de/docs/Web/API/ValidityState/valid) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn das Element alle seine Validierungsconstraints erfüllt und daher als gültig betrachtet wird, oder `false`, wenn es eine der Constraints nicht erfüllt. Wenn `true`, entspricht das Element der {{cssxref(":valid")}} CSS-Pseudoklasse; andernfalls der {{cssxref(":invalid")}} CSS-Pseudoklasse.
- [`valueMissing`](/de/docs/Web/API/ValidityState/valueMissing) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn das Element ein [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut hat, aber keinen Wert, oder `false` andernfalls. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- [Anleitung: Formular-Datenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
