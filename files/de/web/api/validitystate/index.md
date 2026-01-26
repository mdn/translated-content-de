---
title: ValidityState
slug: Web/API/ValidityState
l10n:
  sourceCommit: 69cbda2568b49348e40e9fbae887cdabe1533038
---

{{APIRef("HTML DOM")}}

Das **`ValidityState`** Interface repräsentiert die _Gültigkeitszustände_, in denen sich ein Element im Hinblick auf die Einschränkungsvalidierung befinden kann. Zusammen helfen sie zu erklären, warum der Wert eines Elements die Validierung nicht besteht, falls er nicht gültig ist.

## Instanz-Eigenschaften

Jeder Gültigkeitszustand wird durch eine boolesche Eigenschaft dargestellt. Ein Wert von `true` zeigt an, dass die entsprechende Validierungseinschränkung fehlgeschlagen ist, außer bei der `valid`-Eigenschaft, die `true` ist, wenn der Wert des Elements allen Einschränkungen entspricht.

- [`badInput`](/de/docs/Web/API/ValidityState/badInput) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Benutzer eine Eingabe gemacht hat, die der Browser nicht konvertieren kann.
- [`customError`](/de/docs/Web/API/ValidityState/customError) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die benutzerdefinierte Fehlermeldung des Elements durch Aufrufen der Methode [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity) des Elements auf eine nicht-leere Zeichenkette gesetzt wurde.
- [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Wert nicht dem angegebenen [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) entspricht, und `false`, wenn er übereinstimmt. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
- [`rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Wert größer ist als das durch das [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribut spezifizierte Maximum, oder `false`, wenn er kleiner oder gleich dem Maximum ist. Wenn `true`, entspricht das Element den CSS-Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}}.
- [`rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Wert kleiner ist als das durch das [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)-Attribut spezifizierte Minimum, oder `false`, wenn er größer oder gleich dem Minimum ist. Wenn `true`, entspricht das Element den CSS-Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}}.
- [`stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Wert nicht den durch das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut bestimmten Regeln entspricht (d.h. er ist nicht gleichmäßig durch den Schrittwert teilbar), oder `false`, wenn er der Schrittregel entspricht. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
- [`tooLong`](/de/docs/Web/API/ValidityState/tooLong) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Wert das angegebene `maxlength` für [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) oder [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Objekte überschreitet, oder `false`, wenn seine Länge kleiner oder gleich der maximalen Länge ist. _Hinweis: Diese Eigenschaft ist in Gecko nie `true`, da die Werte der Elemente daran gehindert werden, länger als `maxlength` zu sein._ Wenn `true`, entspricht das Element den CSS-Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}}.
- [`tooShort`](/de/docs/Web/API/ValidityState/tooShort) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Wert das angegebene `minlength` für [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) oder [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Objekte nicht erreicht, oder `false`, wenn seine Länge größer oder gleich der Minimalen Länge ist. Wenn `true`, entspricht das Element den CSS-Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}}.
- [`typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Wert nicht der erforderlichen Syntax entspricht (wenn [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) `email` oder `url` ist), oder `false`, wenn die Syntax korrekt ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
- [`valid`](/de/docs/Web/API/ValidityState/valid) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn das Element alle seine Validierungseinschränkungen erfüllt und daher als gültig angesehen wird, oder `false`, wenn es eine Einschränkung nicht erfüllt. Wenn `true`, entspricht das Element der {{cssxref(":valid")}} CSS-Pseudoklasse; andernfalls der {{cssxref(":invalid")}} CSS-Pseudoklasse.
- [`valueMissing`](/de/docs/Web/API/ValidityState/valueMissing) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn das Element ein [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut hat, aber keinen Wert, oder `false` andernfalls. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Anleitung: Validierung von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
