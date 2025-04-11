---
title: ValidityState
slug: Web/API/ValidityState
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Das **`ValidityState`**-Interface repräsentiert die _Gültigkeitszustände_, in denen sich ein Element in Bezug auf die Einschränkungsvalidierung befinden kann. Zusammen helfen sie zu erklären, warum der Wert eines Elements ungültig ist, wenn er die Validierung nicht besteht.

## Instanz-Eigenschaften

Für jede dieser booleschen Eigenschaften zeigt ein Wert von `true` an, dass der angegebene Grund, warum die Validierung fehlgeschlagen sein könnte, zutrifft, mit Ausnahme der `valid`-Eigenschaft, die `true` ist, wenn der Wert des Elements allen Einschränkungen entspricht.

- [`badInput`](/de/docs/Web/API/ValidityState/badInput) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Benutzer eine Eingabe bereitgestellt hat, die der Browser nicht konvertieren kann.
- [`customError`](/de/docs/Web/API/ValidityState/customError) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der anzeigt, ob die benutzerdefinierte Fehlermeldung des Elements durch Aufrufen der [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)-Methode auf eine nicht-leere Zeichenkette gesetzt wurde.
- [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Wert nicht dem angegebenen [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) entspricht, und `false`, wenn er übereinstimmt. Ist er `true`, entspricht das Element der CSS-Pseudoklasse {{cssxref(":invalid")}}.
- [`rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Wert größer ist als das Maximum, das durch das [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribut festgelegt ist, oder `false`, wenn er kleiner oder gleich dem Maximum ist. Ist er `true`, entspricht das Element den CSS-Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}}.
- [`rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Wert kleiner ist als das durch das [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)-Attribut festgelegte Minimum, oder `false`, wenn er größer oder gleich dem Minimum ist. Ist er `true`, entspricht das Element den CSS-Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}}.
- [`stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Wert nicht den durch das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut bestimmten Regeln entspricht (d.h. er ist nicht gleichmäßig durch den Schrittwert teilbar), oder `false`, wenn er den Schrittregeln entspricht. Ist er `true`, entspricht das Element der CSS-Pseudoklasse {{cssxref(":invalid")}}.
- [`tooLong`](/de/docs/Web/API/ValidityState/tooLong) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Wert die für [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) oder [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Objekte festgelegte `maxlength` überschreitet, oder `false`, wenn seine Länge kleiner oder gleich der maximalen Länge ist. _Hinweis: Diese Eigenschaft ist in Gecko niemals `true`, da die Werte der Elemente daran gehindert werden, länger als `maxlength` zu sein._ Ist er `true`, entspricht das Element den CSS-Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}}.
- [`tooShort`](/de/docs/Web/API/ValidityState/tooShort) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Wert nicht die für [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) oder [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Objekte festgelegte `minlength` erfüllt, oder `false`, wenn seine Länge größer oder gleich der Mindestlänge ist. Ist er `true`, entspricht das Element den CSS-Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}}.
- [`typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Wert nicht in der erforderlichen Syntax ist (wenn [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) `email` oder `url` ist), oder `false`, wenn die Syntax korrekt ist. Ist er `true`, entspricht das Element der CSS-Pseudoklasse {{cssxref(":invalid")}}.
- [`valid`](/de/docs/Web/API/ValidityState/valid) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn das Element alle seine Validierungsbeschränkungen erfüllt und daher als gültig betrachtet wird, oder `false`, wenn es eine Einschränkung nicht erfüllt. Ist er `true`, entspricht das Element der CSS-Pseudoklasse {{cssxref(":valid")}}; andernfalls der CSS-Pseudoklasse {{cssxref(":invalid")}}.
- [`valueMissing`](/de/docs/Web/API/ValidityState/valueMissing) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn das Element ein [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut hat, aber keinen Wert, oder `false` anders. Ist er `true`, entspricht das Element der CSS-Pseudoklasse {{cssxref(":invalid")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Anleitung: Formular-Datenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
