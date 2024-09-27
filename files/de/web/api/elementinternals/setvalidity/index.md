---
title: "ElementInternals: setValidity() Methode"
short-title: setValidity()
slug: Web/API/ElementInternals/setValidity
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("Web Components")}}

Die **`setValidity()`**-Methode der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle legt die Gültigkeit des Elements fest.

## Syntax

```js-nolint
setValidity(flags)
setValidity(flags, message)
setValidity(flags, message, anchor)
```

### Parameter

- `flags` {{Optional_Inline}}

  - : Ein Wörterbuchobjekt, das ein oder mehrere Flags enthält, die den Gültigkeitszustand des Elements anzeigen:

    - `valueMissing`
      - : Ein boolescher Wert, der `true` ist, wenn das Element ein [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut besitzt, aber keinen Wert, oder `false` ansonsten. Wenn `true`, passt das Element zur {{cssxref(":invalid")}} CSS-Pseudoklasse.
    - `typeMismatch`
      - : Ein boolescher Wert, der `true` ist, wenn der Wert nicht dem erforderlichen Syntaxformat entspricht (wenn [`type`](/de/docs/Web/HTML/Element/input#type) `email` oder `url` ist), oder `false`, wenn die Syntax korrekt ist. Wenn `true`, passt das Element zur {{cssxref(":invalid")}} CSS-Pseudoklasse.
    - `patternMismatch`
      - : Ein boolescher Wert, der `true` ist, wenn der Wert nicht dem angegebenen [`pattern`](/de/docs/Web/HTML/Element/input#pattern) entspricht, und `false`, wenn er es tut. Wenn `true`, passt das Element zur {{cssxref(":invalid")}} CSS-Pseudoklasse.
    - `tooLong`
      - : Ein boolescher Wert, der `true` ist, wenn der Wert die angegebene `maxlength` für [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) oder [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) Objekte überschreitet, oder `false`, wenn seine Länge kleiner oder gleich der maximalen Länge ist. Wenn `true`, passt das Element zur {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
    - `tooShort`
      - : Ein boolescher Wert, der `true` ist, wenn der Wert die angegebene `minlength` für [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) oder [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) Objekte nicht erfüllt, oder `false`, wenn seine Länge größer oder gleich der minimalen Länge ist. Wenn `true`, passt das Element zur {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
    - `rangeUnderflow`
      - : Ein boolescher Wert, der `true` ist, wenn der Wert kleiner ist als das Minimum, das durch das [`min`](/de/docs/Web/HTML/Element/input#min)-Attribut festgelegt wurde, oder `false`, wenn er größer oder gleich dem Minimum ist. Wenn `true`, passt das Element zur {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
    - `rangeOverflow`
      - : Ein boolescher Wert, der `true` ist, wenn der Wert größer ist als das Maximum, das durch das [`max`](/de/docs/Web/HTML/Element/input#max)-Attribut festgelegt wurde, oder `false`, wenn er kleiner oder gleich dem Maximum ist. Wenn `true`, passt das Element zur {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
    - `stepMismatch`
      - : Ein boolescher Wert, der `true` ist, wenn der Wert nicht den vom [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut festgelegten Regeln entspricht (das heißt, er ist nicht gleichmäßig durch den Schrittwert teilbar), oder `false`, wenn er der Regel entspricht. Wenn `true`, passt das Element zur {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
    - `badInput`
      - : Ein boolescher Wert, der `true` ist, wenn der Benutzer eine Eingabe geliefert hat, die der Browser nicht konvertieren kann.
    - `customError`
      - : Ein boolescher Wert, der angibt, ob die benutzerdefinierte Gültigkeitsmeldung des Elements auf eine nicht-leere Zeichenkette gesetzt wurde, indem die Methode [`setCustomValidity()`](/de/docs/Web/API/HTMLObjectElement/setCustomValidity) des Elements aufgerufen wurde.

    > [!NOTE]
    > Um alle Flags auf `false` zu setzen, was bedeutet, dass dieses Element alle Gültigkeitsprüfungen besteht, übergeben Sie ein leeres Objekt `{}`. In diesem Fall müssen Sie keine `message` übergeben.

- `message` {{Optional_Inline}}
  - : Eine Zeichenkette, die eine Nachricht enthält, die gesetzt wird, wenn irgendeine der `flags` `true` ist. Dieser Parameter ist nur optional, wenn alle `flags` `false` sind.
- `anchor` {{Optional_Inline}}
  - : Ein [`HTMLElement`](/de/docs/Web/API/HTMLElement), das vom User-Agent verwendet werden kann, um Probleme mit dieser Formularübermittlung zu melden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Element seine `formAssociated` Eigenschaft nicht auf `true` gesetzt hat.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn eines oder mehrere `flags` `true` sind.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `anchor` angegeben ist, aber der Anker kein Shadow-umfassender Nachfolger des Elements ist.

## Beispiele

Im folgenden Beispiel wird `setValidity` mit einem leeren `flags`-Parameter aufgerufen, um anzuzeigen, dass das Element die Gültigkeitsprüfungsregeln erfüllt.

```js
this.internals_.setValidity({});
```

Im folgenden Beispiel wird `setValidity` mit dem Flag `valueMissing` auf `true` gesetzt. Ein `message`-Parameter muss dann auch übergeben werden und eine Nachricht enthalten.

```js
this.internals_.setValidity({ valueMissing: true }, "my message");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
