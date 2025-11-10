---
title: "ElementInternals: Methode setValidity()"
short-title: setValidity()
slug: Web/API/ElementInternals/setValidity
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
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

  - : Ein Dictionary-Objekt, das ein oder mehrere Flags enthält, die den Gültigkeitsstatus des Elements angeben:

    - `valueMissing`
      - : Ein boolescher Wert, der `true` ist, wenn das Element ein [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut hat, aber keinen Wert besitzt, oder `false` ansonsten. Wenn `true`, entspricht das Element der CSS-Pseudoklasse {{cssxref(":invalid")}}.
    - `typeMismatch`
      - : Ein boolescher Wert, der `true` ist, wenn der Wert nicht im erforderlichen Syntaxformat (wenn [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) `email` oder `url` ist) vorliegt, oder `false`, wenn die Syntax korrekt ist. Wenn `true`, entspricht das Element der CSS-Pseudoklasse {{cssxref(":invalid")}}.
    - `patternMismatch`
      - : Ein boolescher Wert, der `true` ist, wenn der Wert nicht dem angegebenen [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) entspricht, und `false`, wenn es dem Muster entspricht. Wenn `true`, entspricht das Element der CSS-Pseudoklasse {{cssxref(":invalid")}}.
    - `tooLong`
      - : Ein boolescher Wert, der `true` ist, wenn der Wert die angegebene `maxlength` für [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) oder [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Objekte überschreitet, oder `false`, wenn seine Länge kleiner oder gleich der maximalen Länge ist. Wenn `true`, entspricht das Element den CSS-Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}}.
    - `tooShort`
      - : Ein boolescher Wert, der `true` ist, wenn der Wert die angegebene `minlength` für [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) oder [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Objekte nicht erfüllt, oder `false`, wenn seine Länge größer oder gleich der minimalen Länge ist. Wenn `true`, entspricht das Element den CSS-Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}}.
    - `rangeUnderflow`
      - : Ein boolescher Wert, der `true` ist, wenn der Wert kleiner als das durch das [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)-Attribut angegebene Minimum ist, oder `false`, wenn er größer oder gleich dem Minimum ist. Wenn `true`, entspricht das Element den CSS-Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}}.
    - `rangeOverflow`
      - : Ein boolescher Wert, der `true` ist, wenn der Wert größer als das durch das [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribut angegebene Maximum ist, oder `false`, wenn er kleiner oder gleich dem Maximum ist. Wenn `true`, entspricht das Element den CSS-Pseudoklassen {{cssxref(":invalid")}}, {{cssxref(":out-of-range")}} und der CSS-Pseudoklasse.
    - `stepMismatch`
      - : Ein boolescher Wert, der `true` ist, wenn der Wert nicht den durch das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut bestimmten Regeln entspricht (d.h. er nicht gleichmäßig durch den Schrittwert teilbar ist), oder `false`, wenn er der Schrittregel entspricht. Wenn `true`, entspricht das Element den CSS-Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}}.
    - `badInput`
      - : Ein boolescher Wert, der `true` ist, wenn der Benutzer eine Eingabe gemacht hat, die der Browser nicht konvertieren kann.
    - `customError`
      - : Ein boolescher Wert, der anzeigt, ob die benutzerdefinierte Gültigkeitsnachricht des Elements durch Aufrufen der Methode [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity) des Elements auf eine nicht leere Zeichenfolge gesetzt wurde.

    > [!NOTE]
    > Um alle Flags auf `false` zu setzen, was anzeigt, dass dieses Element alle Prüfungen der Einschränkungen besteht, geben Sie ein leeres Objekt `{}` an. In diesem Fall ist es nicht erforderlich, auch eine `message` zu übergeben.

- `message` {{Optional_Inline}}
  - : Eine Zeichenfolge, die eine Nachricht enthält, die gesetzt wird, wenn irgendein `flags`-Wert `true` ist. Dieser Parameter ist nur optional, wenn alle `flags`-Werte `false` sind.
- `anchor` {{Optional_Inline}}
  - : Ein [`HTMLElement`](/de/docs/Web/API/HTMLElement), das vom User-Agent zur Meldung von Problemen mit dieser Formularübermittlung verwendet werden kann.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Element nicht die Eigenschaft `formAssociated` auf `true` gesetzt hat.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn eines oder mehrere `flags`-Werte `true` sind.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `anchor` angegeben ist, aber das Ankerobjekt kein Schatten-inbegriffener Nachkomme des Elements ist.

## Beispiele

Im folgenden Beispiel wird `setValidity` mit einem leeren `flags`-Parameter aufgerufen, um anzuzeigen, dass das Element die Regeln zur Validierung von Einschränkungen erfüllt.

```js
this.internals_.setValidity({});
```

Im folgenden Beispiel wird `setValidity` mit dem `valueMissing`-Flag aufgerufen, das auf `true` gesetzt ist. Ein `message`-Parameter muss dann ebenfalls übergeben werden, der eine Nachricht enthält.

```js
this.internals_.setValidity({ valueMissing: true }, "my message");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
