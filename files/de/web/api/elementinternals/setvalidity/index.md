---
title: "ElementInternals: Methode setValidity()"
short-title: setValidity()
slug: Web/API/ElementInternals/setValidity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Web Components")}}

Die **`setValidity()`**-Methode der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle setzt die Gültigkeit des Elements.

## Syntax

```js-nolint
setValidity(flags)
setValidity(flags, message)
setValidity(flags, message, anchor)
```

### Parameter

- `flags` {{Optional_Inline}}

  - : Ein Wörterbuchobjekt, das ein oder mehrere Flags enthält, die den Gültigkeitsstatus des Elements angeben:

    - `valueMissing`
      - : Ein boolescher Wert, der `true` ist, wenn das Element ein [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut hat, aber keinen Wert, oder `false` sonst. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
    - `typeMismatch`
      - : Ein boolescher Wert, der `true` ist, wenn der Wert nicht in der erforderlichen Syntax vorliegt (wenn [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) `email` oder `url` ist), oder `false`, wenn die Syntax korrekt ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
    - `patternMismatch`
      - : Ein boolescher Wert, der `true` ist, wenn der Wert nicht dem angegebenen [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) entspricht, und `false`, wenn er es tut. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
    - `tooLong`
      - : Ein boolescher Wert, der `true` ist, wenn der Wert die angegebene `maxlength` für [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) oder [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Objekte überschreitet, oder `false`, wenn seine Länge kleiner oder gleich der maximalen Länge ist. Wenn `true`, entspricht das Element den {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
    - `tooShort`
      - : Ein boolescher Wert, der `true` ist, wenn der Wert die angegebene `minlength` für [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) oder [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Objekte nicht erfüllt, oder `false`, wenn seine Länge größer oder gleich der minimalen Länge ist. Wenn `true`, entspricht das Element den {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
    - `rangeUnderflow`
      - : Ein boolescher Wert, der `true` ist, wenn der Wert kleiner ist als das Minimum, das durch das [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)-Attribut angegeben wird, oder `false`, wenn er größer oder gleich dem Minimum ist. Wenn `true`, entspricht das Element den {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
    - `rangeOverflow`
      - : Ein boolescher Wert, der `true` ist, wenn der Wert größer ist als das Maximum, das durch das [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribut angegeben wird, oder `false`, wenn er kleiner oder gleich dem Maximum ist. Wenn `true`, entspricht das Element den {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
    - `stepMismatch`
      - : Ein boolescher Wert, der `true` ist, wenn der Wert nicht den Regeln entspricht, die durch das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut festgelegt sind (d.h. er ist nicht gleichmäßig durch den Schrittwert teilbar), oder `false`, wenn er die Schrittregel erfüllt. Wenn `true`, entspricht das Element den {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
    - `badInput`
      - : Ein boolescher Wert, der `true` ist, wenn der Benutzer eine Eingabe gemacht hat, die der Browser nicht konvertieren kann.
    - `customError`
      - : Ein boolescher Wert, der anzeigt, ob die benutzerdefinierte Gültigkeitsnachricht des Elements durch Aufrufen der Methode [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity) des Elements auf einen nicht-leeren String gesetzt wurde.

    > [!NOTE]
    > Um alle Flags auf `false` zu setzen, was anzeigt, dass dieses Element alle Validierungsbeschränkungen erfüllt, übergeben Sie ein leeres Objekt `{}`. In diesem Fall müssen Sie auch keine `message` übergeben.

- `message` {{Optional_Inline}}
  - : Ein String, der eine Nachricht enthält, die gesetzt wird, wenn eines der `flags` `true` ist. Dieser Parameter ist nur optional, wenn alle `flags` `false` sind.
- `anchor` {{Optional_Inline}}
  - : Ein [`HTMLElement`](/de/docs/Web/API/HTMLElement), das vom Benutzer-Agenten verwendet werden kann, um Probleme bei dieser Formularübermittlung zu melden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Element nicht seine `formAssociated`-Eigenschaft auf `true` gesetzt hat.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn eines oder mehrere `flags` `true` ist.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `anchor` angegeben ist, der Anker aber kein Shadow-inkludierender Nachfahre des Elements ist.

## Beispiele

Im folgenden Beispiel wird `setValidity` mit einem leeren `flags`-Parameter aufgerufen, um anzuzeigen, dass das Element die Validierungsregeln erfüllt.

```js
this.internals_.setValidity({});
```

Im folgenden Beispiel wird `setValidity` mit dem Flag `valueMissing` auf `true` aufgerufen. Ein `message`-Parameter muss dann ebenfalls mit einer Nachricht übergeben werden.

```js
this.internals_.setValidity({ valueMissing: true }, "my message");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
