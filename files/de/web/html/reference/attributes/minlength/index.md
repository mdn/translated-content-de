---
title: "HTML-Attribut: minlength"
short-title: minlength
slug: Web/HTML/Reference/Attributes/minlength
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`minlength`**-Attribut definiert die minimale [Zeichenlänge](/de/docs/Web/JavaScript/Reference/Global_Objects/String/length), die der Benutzer in ein {{htmlelement('input')}} oder {{htmlelement('textarea')}} eingeben kann. Das Attribut muss einen ganzzahligen Wert von 0 oder höher haben.

Die Länge wird in UTF-16-Code-Einheiten gemessen, was ([für die meisten Schriftsysteme](/de/docs/Web/JavaScript/Reference/Global_Objects/String/length#strings_with_length_not_equal_to_the_number_of_characters)) der Anzahl der Zeichen entspricht. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert festgelegt wurde, gibt es keine Mindestlänge für die Eingabe. Dieser Wert muss kleiner oder gleich dem Wert von [maxlength](/de/docs/Web/HTML/Reference/Attributes/maxlength) sein, andernfalls ist der Wert nie gültig, da es unmöglich ist, beide Kriterien zu erfüllen.

Die Eingabe wird die Eingabebeschränkungsüberprüfung nicht bestehen, wenn die Länge des Textwerts des Feldes weniger als die `minlength`-Anzahl an UTF-16-Code-Einheiten beträgt, wobei [`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort) `true` zurückgibt. Die Eingabebeschränkungsüberprüfung wird nur angewendet, wenn der Wert durch den Benutzer geändert wird. Sobald die Übermittlung fehlschlägt, zeigen einige Browser eine Fehlermeldung an, die die erforderliche Mindestlänge und die aktuelle Länge angibt.

`minlength` impliziert nicht [`required`](/de/docs/Web/HTML/Reference/Attributes/required); eine Eingabe verletzt nur dann eine `minlength`-Einschränkung, wenn der Benutzer einen Wert eingegeben hat. Wenn eine Eingabe nicht `required` ist, kann ein leerer String eingereicht werden, selbst wenn `minlength` gesetzt ist.

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

Durch Hinzufügen von `minlength="5"` muss der Wert entweder leer sein oder fünf Zeichen oder länger, um gültig zu sein.

```html
<label for="fruit">Enter a fruit name that is at least 5 letters long</label>
<input type="text" minlength="5" id="fruit" />
```

Wir können Pseudoklassen verwenden, um das Element basierend darauf zu stylen, ob der Wert gültig ist. Der Wert ist gültig, solange er entweder null (leer) oder fünf oder mehr Zeichen lang ist. _Lime_ ist ungültig, _lemon ist gültig_.

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
- [Eingabebeschränkungsüberprüfung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- {{htmlelement('input')}}
