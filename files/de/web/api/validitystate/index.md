---
title: ValidityState
slug: Web/API/ValidityState
l10n:
  sourceCommit: 879db96bee7cd8301bbc38d326d9b905ae4493d1
---

{{APIRef("HTML DOM")}}

Das **`ValidityState`**-Interface repräsentiert die _Gültigkeitszustände_, in denen sich ein Element im Hinblick auf die Einschränkungsvalidierung befinden kann. Zusammen helfen sie zu erklären, warum der Wert eines Elements die Validierung nicht besteht, falls es ungültig ist.

## Instanz-Eigenschaften

Für jede dieser booleschen Eigenschaften zeigt ein Wert von `true` an, dass der angegebene Grund der Validierung fehlschlagen könnte, mit der Ausnahme der `valid`-Eigenschaft, die `true` ist, wenn der Wert des Elements allen Einschränkungen entspricht.

- [`badInput`](/de/docs/Web/API/ValidityState/badInput) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Benutzer eine Eingabe bereitgestellt hat, die vom Browser nicht konvertiert werden kann.
- [`customError`](/de/docs/Web/API/ValidityState/customError) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der anzeigt, ob die benutzerdefinierte Fehlernachricht des Elements durch einen Aufruf der Methode [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity) auf einen nicht-leeren String gesetzt wurde.
- [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Wert nicht dem angegebenen [`pattern`](/de/docs/Web/HTML/Element/input#pattern) entspricht, und `false`, wenn er dies tut. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}}-CSS-Pseudoklasse.
- [`rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Wert größer als das durch das [`max`](/de/docs/Web/HTML/Element/input#max)-Attribut angegebene Maximum ist, oder `false`, wenn er kleiner oder gleich dem Maximum ist. Wenn `true`, entspricht das Element den {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}}-CSS-Pseudoklassen.
- [`rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Wert kleiner als das durch das [`min`](/de/docs/Web/HTML/Element/input#min)-Attribut angegebene Minimum ist, oder `false`, wenn er größer oder gleich dem Minimum ist. Wenn `true`, entspricht das Element den {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}}-CSS-Pseudoklassen.
- [`stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Wert nicht den durch das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut festgelegten Regeln entspricht (das heißt, er ist nicht gleichmäßig durch den Schrittwert teilbar), oder `false`, wenn er den Schrittregeln entspricht. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}}-CSS-Pseudoklasse.
- [`tooLong`](/de/docs/Web/API/ValidityState/tooLong) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Wert die angegebene `maxlength` für [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) oder [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Objekte überschreitet, oder `false`, wenn seine Länge kleiner oder gleich der maximalen Länge ist. _Hinweis: Diese Eigenschaft ist in Gecko nie `true`, da die Werte von Elementen daran gehindert werden, länger als `maxlength` zu sein._ Wenn `true`, entspricht das Element den {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}}-CSS-Pseudoklassen.
- [`tooShort`](/de/docs/Web/API/ValidityState/tooShort) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Wert die angegebene `minlength` für [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) oder [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Objekte nicht erfüllt, oder `false`, wenn seine Länge größer oder gleich der Mindestlänge ist. Wenn `true`, entspricht das Element den {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}}-CSS-Pseudoklassen.
- [`typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Wert nicht in der erforderlichen Syntax vorliegt (wenn der [`type`](/de/docs/Web/HTML/Element/input#type) `email` oder `url` ist), oder `false`, wenn die Syntax korrekt ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}}-CSS-Pseudoklasse.
- [`valid`](/de/docs/Web/API/ValidityState/valid) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn das Element alle seine Validierungseinschränkungen erfüllt und daher als gültig angesehen wird, oder `false`, wenn es eine Einschränkung nicht erfüllt. Wenn `true`, entspricht das Element der {{cssxref(":valid")}}-CSS-Pseudoklasse; andernfalls der {{cssxref(":invalid")}}-CSS-Pseudoklasse.
- [`valueMissing`](/de/docs/Web/API/ValidityState/valueMissing) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn das Element ein [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut hat, aber keinen Wert, oder `false` anderweitig. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}}-CSS-Pseudoklasse.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- [Tutorial: Formular-Datenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
