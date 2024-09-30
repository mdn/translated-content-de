---
title: "ElementInternals: setValidity() Methode"
short-title: setValidity()
slug: Web/API/ElementInternals/setValidity
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("Web Components")}}

Die **`setValidity()`**-Methode des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces setzt die Gültigkeit des Elements.

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
      - : Ein boolescher Wert, der `true` ist, wenn das Element ein [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut hat, aber keinen Wert, oder `false` sonst. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
    - `typeMismatch`
      - : Ein boolescher Wert, der `true` ist, wenn der Wert nicht im erforderlichen Format vorliegt (wenn [`type`](/de/docs/Web/HTML/Element/input#type) `email` oder `url` ist), oder `false`, wenn das Format korrekt ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
    - `patternMismatch`
      - : Ein boolescher Wert, der `true` ist, wenn der Wert nicht dem angegebenen [`pattern`](/de/docs/Web/HTML/Element/input#pattern) entspricht, und `false`, wenn er übereinstimmt. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
    - `tooLong`
      - : Ein boolescher Wert, der `true` ist, wenn der Wert die angegebene `maxlength` für [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) oder [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Objekte überschreitet, oder `false`, wenn seine Länge kleiner oder gleich der maximalen Länge ist. Wenn `true`, entspricht das Element den CSS-Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}}.
    - `tooShort`
      - : Ein boolescher Wert, der `true` ist, wenn der Wert die angegebene `minlength` für [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) oder [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Objekte nicht erfüllt, oder `false`, wenn seine Länge größer oder gleich der minimalen Länge ist. Wenn `true`, entspricht das Element den CSS-Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}}.
    - `rangeUnderflow`
      - : Ein boolescher Wert, der `true` ist, wenn der Wert kleiner als das durch das [`min`](/de/docs/Web/HTML/Element/input#min)-Attribut angegebene Minimum ist, oder `false`, wenn er größer oder gleich dem Minimum ist. Wenn `true`, entspricht das Element den CSS-Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}}.
    - `rangeOverflow`
      - : Ein boolescher Wert, der `true` ist, wenn der Wert größer als das durch das [`max`](/de/docs/Web/HTML/Element/input#max)-Attribut angegebene Maximum ist, oder `false`, wenn er kleiner oder gleich dem Maximum ist. Wenn `true`, entspricht das Element den CSS-Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}}.
    - `stepMismatch`
      - : Ein boolescher Wert, der `true` ist, wenn der Wert nicht den durch das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut festgelegten Regeln entspricht (das heißt, er ist nicht gleichmäßig durch den Schrittwert teilbar), oder `false`, wenn er die Schrittregel erfüllt. Wenn `true`, entspricht das Element den CSS-Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}}.
    - `badInput`
      - : Ein boolescher Wert, der `true` ist, wenn der Benutzer eine Eingabe gemacht hat, die der Browser nicht umwandeln kann.
    - `customError`
      - : Ein boolescher Wert, der angibt, ob die benutzerdefinierte Gültigkeitsnachricht des Elements durch Aufrufen der Methode [`setCustomValidity()`](/de/docs/Web/API/HTMLObjectElement/setCustomValidity) auf einen nicht-leeren String gesetzt wurde.

    > [!NOTE]
    > Um alle Flags auf `false` zu setzen, was anzeigt, dass dieses Element alle Einschränkungen der Validierung besteht, übergeben Sie ein leeres Objekt `{}`. In diesem Fall müssen Sie keine `message` übergeben.

- `message` {{Optional_Inline}}
  - : Ein String, der eine Nachricht enthält, die gesetzt wird, wenn eines der `flags` `true` ist. Dieser Parameter ist nur optional, wenn alle `flags` `false` sind.
- `anchor` {{Optional_Inline}}
  - : Ein [`HTMLElement`](/de/docs/Web/API/HTMLElement), das vom Nutzeragenten verwendet werden kann, um Probleme mit dieser Formularübermittlung zu melden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Element seine `formAssociated`-Eigenschaft nicht auf `true` gesetzt hat.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn eines oder mehrere `flags` `true` sind.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `anchor` angegeben ist, aber der Anker kein inklusiver Schatten-Nachfahre des Elements ist.

## Beispiele

Im folgenden Beispiel wird `setValidity` mit einem leeren `flags`-Parameter aufgerufen, um anzuzeigen, dass das Element die Validierungsregeln für Einschränkungen erfüllt.

```js
this.internals_.setValidity({});
```

Im folgenden Beispiel wird `setValidity` mit dem Flag `valueMissing` auf `true` gesetzt aufgerufen. Ein `message`-Parameter muss dann ebenfalls übergeben werden, der eine Nachricht enthält.

```js
this.internals_.setValidity({ valueMissing: true }, "my message");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
