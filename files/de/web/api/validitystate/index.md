---
title: ValidityState
slug: Web/API/ValidityState
l10n:
  sourceCommit: e8805a6eb0b2af30cfd4ec54c30261f7e5f8163e
---

{{APIRef("HTML DOM")}}

Die **`ValidityState`** Schnittstelle repräsentiert die _Gültigkeitszustände_, in denen sich ein Element in Bezug auf die Einschränkungsprüfung befinden kann. Zusammen helfen sie zu erklären, warum der Wert eines Elements ungültig ist, wenn er nicht gültig ist.

## Instanz-Eigenschaften

Für jede dieser booleschen Eigenschaften gibt ein Wert von `true` an, dass der angegebene Grund für das Fehlschlagen der Validierung zutrifft, mit der Ausnahme der `valid` Eigenschaft, die `true` ist, wenn der Wert des Elements alle Einschränkungen erfüllt.

- [`badInput`](/de/docs/Web/API/ValidityState/badInput) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Benutzer eine Eingabe bereitgestellt hat, die der Browser nicht konvertieren kann.
- [`customError`](/de/docs/Web/API/ValidityState/customError) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die benutzerdefinierte Gültigkeitsnachricht des Elements durch Aufrufen der [`setCustomValidity()`](/de/docs/Web/API/HTMLObjectElement/setCustomValidity) Methode des Elements auf eine nicht-leere Zeichenfolge gesetzt wurde.
- [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Wert nicht dem angegebenen [`pattern`](/de/docs/Web/HTML/Element/input#pattern) entspricht, und `false`, wenn er übereinstimmt. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
- [`rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Wert größer ist als das durch das [`max`](/de/docs/Web/HTML/Element/input#max) Attribut angegebene Maximum, oder `false`, wenn er kleiner oder gleich dem Maximum ist. Wenn `true`, entspricht das Element den {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
- [`rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Wert kleiner ist als das durch das [`min`](/de/docs/Web/HTML/Element/input#min) Attribut angegebene Minimum, oder `false`, wenn er größer oder gleich dem Minimum ist. Wenn `true`, entspricht das Element den {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
- [`stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Wert nicht den durch das [`step`](/de/docs/Web/HTML/Element/input#step) Attribut bestimmten Regeln entspricht (das heißt, er ist nicht gleichmäßig durch den Schrittwert teilbar), oder `false`, wenn er der Schrittregel entspricht. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
- [`tooLong`](/de/docs/Web/API/ValidityState/tooLong) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Wert die angegebene `maxlength` für [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) oder [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) Objekte überschreitet, oder `false`, wenn seine Länge kleiner oder gleich der maximalen Länge ist. _Hinweis: Diese Eigenschaft ist in Gecko niemals `true`, da die Werte der Elemente davon abgehalten werden, länger als `maxlength` zu sein._ Wenn `true`, entspricht das Element den {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
- [`tooShort`](/de/docs/Web/API/ValidityState/tooShort) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Wert nicht das angegebene `minlength` für [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) oder [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) Objekte erfüllt, oder `false`, wenn seine Länge größer oder gleich der minimalen Länge ist. Wenn `true`, entspricht das Element den {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
- [`typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Wert nicht in der erforderlichen Syntax ist (wenn [`type`](/de/docs/Web/HTML/Element/input#type) `email` oder `url` ist), oder `false`, wenn die Syntax korrekt ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
- [`valid`](/de/docs/Web/API/ValidityState/valid) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn das Element alle seine Validierungsbeschränkungen erfüllt und daher als gültig angesehen wird, oder `false`, wenn es eine Beschränkung nicht erfüllt. Wenn `true`, entspricht das Element der {{cssxref(":valid")}} CSS-Pseudoklasse; andernfalls der {{cssxref(":invalid")}} CSS-Pseudoklasse.
- [`valueMissing`](/de/docs/Web/API/ValidityState/valueMissing) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn das Element ein [`required`](/de/docs/Web/HTML/Element/input#required) Attribut hat, aber keinen Wert, oder `false` sonst. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden: Einschränkungsprüfung](/de/docs/Web/HTML/Constraint_validation)
- [Anleitung: Formular-Datenvalidierung](/de/docs/Learn/Forms/Form_validation)
