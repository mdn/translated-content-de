---
title: "HTML-Attribut: minlength"
short-title: minlength
slug: Web/HTML/Reference/Attributes/minlength
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`minlength`**-Attribut definiert die minimale [Zeichenkettenlänge](/de/docs/Web/JavaScript/Reference/Global_Objects/String/length), die der Benutzer in ein {{htmlelement('input')}} oder {{htmlelement('textarea')}} eingeben kann. Das Attribut muss einen ganzzahligen Wert von 0 oder höher haben.

Die Länge wird in {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}} gemessen, die oft, aber nicht immer, der Anzahl der Zeichen entsprechen. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben wird, gibt es keine Mindestlänge für die Eingabe. Dieser Wert muss kleiner oder gleich dem Wert von [maxlength](/de/docs/Web/HTML/Reference/Attributes/maxlength) sein, da der Wert andernfalls niemals gültig sein wird, da es unmöglich ist, beide Kriterien zu erfüllen.

Die Eingabe schlägt bei der Einschränkungsvalidierung fehl, wenn die Länge des Textwerts des Feldes kürzer ist als `minlength` UTF-16 Codeeinheiten lang ist, wobei [`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort) `true` zurückgibt. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird. Sobald die Einreichung fehlschlägt, zeigen einige Browser eine Fehlermeldung an, die die erforderliche Mindestlänge und die aktuelle Länge angibt.

`minlength` impliziert nicht [`required`](/de/docs/Web/HTML/Reference/Attributes/required); eine Eingabe verstößt nur gegen eine `minlength`-Einschränkung, wenn der Benutzer einen Wert eingegeben hat. Wenn eine Eingabe nicht `required` ist, kann eine leere Zeichenfolge eingereicht werden, selbst wenn `minlength` gesetzt ist.

{{InteractiveExample("HTML Demo: minlength", "tabbed-shorter")}}

```html interactive-example
<label for="name">Product name:</label>
<input
  id="name"
  name="name"
  type="text"
  value="Shampoo"
  minlength="3"
  maxlength="20"
  required />

<label for="description">Product description:</label>
<textarea
  id="description"
  name="description"
  minlength="10"
  maxlength="40"
  required></textarea>
```

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

input:valid,
textarea:valid {
  background-color: palegreen;
}
```

## Beispiele

Durch Hinzufügen von `minlength="5"` muss der Wert entweder leer oder fünf Zeichen oder länger sein, um gültig zu sein.

```html
<label for="fruit">Enter a fruit name that is at least 5 letters long</label>
<input type="text" minlength="5" id="fruit" />
```

Wir können Pseudoklassen verwenden, um das Element basierend darauf zu stylen, ob der Wert gültig ist. Der Wert ist gültig, solange er entweder null (leer) oder fünf oder mehr Zeichen lang ist. _Lime_ ist ungültig, _lemon is valid_.

```css
input {
  border: 2px solid currentcolor;
}
input:invalid {
  border: 2px dashed red;
}
input:invalid:focus {
  background-image: linear-gradient(pink, lightgreen);
}
```

{{EmbedLiveSample('Examples', '100%', 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)
- [`size`](/de/docs/Web/HTML/Reference/Attributes/size)
- [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)
- [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- {{htmlelement('input')}}
