---
title: "ElementInternals: setValidity() Methode"
short-title: setValidity()
slug: Web/API/ElementInternals/setValidity
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("Web Components")}}

Die **`setValidity()`** Methode der {{domxref("ElementInternals")}} Schnittstelle setzt die Gültigkeit des Elements.

## Syntax

```js-nolint
setValidity(flags)
setValidity(flags, message)
setValidity(flags, message, anchor)
```

### Parameter

- `flags` {{Optional_Inline}}

  - : Ein Wörterbuchobjekt, das ein oder mehrere Flags enthält, die den Gültigkeitszustand des Elements angeben:

    - `valueMissing`
      - : Ein boolescher Wert, der `true` ist, wenn das Element ein [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut hat, aber keinen Wert, oder `false` sonst. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
    - `typeMismatch`
      - : Ein boolescher Wert, der `true` ist, wenn der Wert nicht im erforderlichen Syntaxformat (wenn [`type`](/de/docs/Web/HTML/Element/input#type) `email` oder `url` ist) vorliegt, oder `false`, wenn das Syntaxformat korrekt ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
    - `patternMismatch`
      - : Ein boolescher Wert, der `true` ist, wenn der Wert nicht dem angegebenen [`pattern`](/de/docs/Web/HTML/Element/input#pattern) entspricht, und `false`, wenn er übereinstimmt. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
    - `tooLong`
      - : Ein boolescher Wert, der `true` ist, wenn der Wert die angegebene `maxlength` für {{domxref("HTMLInputElement")}} oder {{domxref("HTMLTextAreaElement")}} Objekte überschreitet, oder `false`, wenn seine Länge kleiner oder gleich der maximalen Länge ist. Wenn `true`, entspricht das Element den {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
    - `tooShort`
      - : Ein boolescher Wert, der `true` ist, wenn der Wert die angegebene `minlength` für {{domxref("HTMLInputElement")}} oder {{domxref("HTMLTextAreaElement")}} Objekte nicht erfüllt, oder `false`, wenn seine Länge größer oder gleich der minimalen Länge ist. Wenn `true`, entspricht das Element den {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
    - `rangeUnderflow`
      - : Ein boolescher Wert, der `true` ist, wenn der Wert kleiner ist als das Minimum, das durch das [`min`](/de/docs/Web/HTML/Element/input#min) Attribut angegeben ist, oder `false`, wenn er größer oder gleich dem Minimum ist. Wenn `true`, entspricht das Element den {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
    - `rangeOverflow`
      - : Ein boolescher Wert, der `true` ist, wenn der Wert größer ist als das Maximum, das durch das [`max`](/de/docs/Web/HTML/Element/input#max)-Attribut angegeben ist, oder `false`, wenn er kleiner oder gleich dem Maximum ist. Wenn `true`, entspricht das Element den {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
    - `stepMismatch`
      - : Ein boolescher Wert, der `true` ist, wenn der Wert nicht zu den durch das [`step`](/de/docs/Web/HTML/Element/input#step) Attribut bestimmten Regeln passt (das heißt, er ist nicht gleichmäßig durch den Schrittwert teilbar), oder `false`, wenn er der Schrittregel entspricht. Wenn `true`, entspricht das Element den {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
    - `badInput`
      - : Ein boolescher Wert, der `true` ist, wenn der Benutzer eine Eingabe gemacht hat, die der Browser nicht konvertieren kann.
    - `customError`
      - : Ein boolescher Wert, der anzeigt, ob die benutzerdefinierte Gültigkeitsmeldung des Elements durch Aufrufen der {{domxref('HTMLObjectElement.setCustomValidity', 'setCustomValidity()')}} Methode auf einen nicht leeren String gesetzt wurde.

    > [!NOTE]
    > Um alle Flags auf `false` zu setzen, was anzeigt, dass dieses Element alle Validierungsbedingungen entspricht, übergeben Sie ein leeres Objekt `{}`. In diesem Fall ist es nicht erforderlich, auch eine `message` zu übergeben.

- `message` {{Optional_Inline}}
  - : Ein String, der eine Nachricht enthält, die gesetzt wird, wenn eines der `flags` `true` ist. Dieser Parameter ist nur optional, wenn alle `flags` `false` sind.
- `anchor` {{Optional_Inline}}
  - : Ein {{domxref("HTMLElement")}}, das vom Benutzeragenten verwendet werden kann, um Probleme mit dieser Formularübermittlung zu melden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NotSupportedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das Element seine `formAssociated` Eigenschaft nicht auf `true` gesetzt hat.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn eines oder mehrere der `flags` `true` sind.
- `NotFoundError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn `anchor` gegeben ist, aber der Anker kein Schatten-inbegriffener Nachkomme des Elements ist.

## Beispiele

Im folgenden Beispiel wird `setValidity` mit einem leeren `flags` Parameter aufgerufen, um anzuzeigen, dass das Element den Validierungsregeln entspricht.

```js
this.internals_.setValidity({});
```

Im folgenden Beispiel wird `setValidity` mit dem Flag `valueMissing` aufgerufen, das auf `true` gesetzt ist. Ein `message` Parameter muss dann ebenfalls übergeben werden, der eine Nachricht enthält.

```js
this.internals_.setValidity({ valueMissing: true }, "meine Nachricht");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
