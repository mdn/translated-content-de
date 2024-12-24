---
title: "ElementInternals: setValidity() Methode"
short-title: setValidity()
slug: Web/API/ElementInternals/setValidity
l10n:
  sourceCommit: 879db96bee7cd8301bbc38d326d9b905ae4493d1
---

{{APIRef("Web Components")}}

Die **`setValidity()`** Methode der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle setzt die Gültigkeit des Elements.

## Syntax

```js-nolint
setValidity(flags)
setValidity(flags, message)
setValidity(flags, message, anchor)
```

### Parameter

- `flags` {{Optional_Inline}}

  - : Ein Wörterbuch-Objekt, das ein oder mehrere Flags enthält, die den Gültigkeitszustand des Elements anzeigen:

    - `valueMissing`
      - : Ein boolescher Wert, der `true` ist, wenn das Element ein [`required`](/de/docs/Web/HTML/Element/input#required) Attribut hat, aber keinen Wert, oder `false` andernfalls. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
    - `typeMismatch`
      - : Ein boolescher Wert, der `true` ist, wenn der Wert nicht im erforderlichen Syntaxformat ist (wenn [`type`](/de/docs/Web/HTML/Element/input#type) `email` oder `url` ist), oder `false`, wenn der Syntax korrekt ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
    - `patternMismatch`
      - : Ein boolescher Wert, der `true` ist, wenn der Wert dem angegebenen [`pattern`](/de/docs/Web/HTML/Element/input#pattern) nicht entspricht, und `false`, wenn er passt. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
    - `tooLong`
      - : Ein boolescher Wert, der `true` ist, wenn der Wert die angegebene `maxlength` für [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) oder [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) Objekte überschreitet, oder `false`, wenn seine Länge kleiner oder gleich der maximalen Länge ist. Wenn `true`, entspricht das Element den CSS-Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}}.
    - `tooShort`
      - : Ein boolescher Wert, der `true` ist, wenn der Wert die angegebene `minlength` für [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) oder [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) Objekte nicht erfüllt, oder `false`, wenn seine Länge größer oder gleich der minimalen Länge ist. Wenn `true`, entspricht das Element den CSS-Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}}.
    - `rangeUnderflow`
      - : Ein boolescher Wert, der `true` ist, wenn der Wert kleiner ist als das durch das [`min`](/de/docs/Web/HTML/Element/input#min) Attribut angegebene Minimum, oder `false`, wenn er größer oder gleich dem Minimum ist. Wenn `true`, entspricht das Element den CSS-Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}}.
    - `rangeOverflow`
      - : Ein boolescher Wert, der `true` ist, wenn der Wert größer ist als das durch das [`max`](/de/docs/Web/HTML/Element/input#max) Attribut angegebene Maximum, oder `false`, wenn er kleiner oder gleich dem Maximum ist. Wenn `true`, entspricht das Element den CSS-Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}}.
    - `stepMismatch`
      - : Ein boolescher Wert, der `true` ist, wenn der Wert nicht den durch das [`step`](/de/docs/Web/HTML/Element/input#step) Attribut festgelegten Regeln entspricht (das heißt, er ist nicht gleichmäßig durch den Schrittwert teilbar), oder `false`, wenn er der Schrittregel entspricht. Wenn `true`, entspricht das Element den CSS-Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}}.
    - `badInput`
      - : Ein boolescher Wert, der `true` ist, wenn der Benutzer eine Eingabe gemacht hat, die der Browser nicht umwandeln kann.
    - `customError`
      - : Ein boolescher Wert, der anzeigt, ob die benutzerdefinierte Gültigkeitsnachricht des Elements durch den Aufruf der Methode [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity) des Elements auf einen nicht-leeren String gesetzt wurde.

    > [!NOTE]
    > Um alle Flags auf `false` zu setzen, was darauf hinweist, dass dieses Element alle Validierungsregeln erfüllt, geben Sie ein leeres Objekt `{}` ein. In diesem Fall müssen Sie auch keine `message` übergeben.

- `message` {{Optional_Inline}}
  - : Ein String, der eine Nachricht enthält, die gesetzt wird, wenn irgendein `flags` auf `true` steht. Dieser Parameter ist nur optional, wenn alle `flags` `false` sind.
- `anchor` {{Optional_Inline}}
  - : Ein [`HTMLElement`](/de/docs/Web/API/HTMLElement), das vom Benutzeragenten verwendet werden kann, um Probleme bei dieser Formularübermittlung zu melden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn das Element nicht seine `formAssociated` Eigenschaft zu `true` gesetzt hat.
- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn eines oder mehrere `flags` `true` sind.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn `anchor` angegeben ist, aber das Ziel nicht ein Schatten-inkludierender Nachfahre des Elements ist.

## Beispiele

Im folgenden Beispiel wird `setValidity` mit einem leeren `flags` Parameter aufgerufen, um anzuzeigen, dass das Element die Validierungsregeln erfüllt.

```js
this.internals_.setValidity({});
```

Im folgenden Beispiel wird `setValidity` mit dem Flag `valueMissing` auf `true` gesetzt aufgerufen. Ein `message` Parameter muss dann auch übergeben werden, der eine Nachricht enthält.

```js
this.internals_.setValidity({ valueMissing: true }, "my message");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
