---
title: "HTML-Attribut: minlength"
short-title: minlength
slug: Web/HTML/Attributes/minlength
l10n:
  sourceCommit: 067a40e4ed27ea6e1f3b8bbfec15cd9dc3078f4c
---

{{HTMLSidebar}}

Das **`minlength`**-Attribut definiert die minimale [Zeichenlänge](/de/docs/Web/JavaScript/Reference/Global_Objects/String/length), die der Benutzer in ein {{htmlelement('input')}} oder {{htmlelement('textarea')}} eingeben kann. Das Attribut muss einen ganzzahligen Wert von 0 oder höher haben.

Die Länge wird in UTF-16-Codeeinheiten gemessen, was ([für die meisten Schriften](/de/docs/Web/JavaScript/Reference/Global_Objects/String/length#strings_with_length_not_equal_to_the_number_of_characters)) der Anzahl der Zeichen entspricht. Wenn kein `minlength` angegeben oder ein ungültiger Wert spezifiziert wird, hat die Eingabe keine Mindestlänge. Dieser Wert muss kleiner oder gleich dem Wert von [maxlength](/de/docs/Web/HTML/Attributes/maxlength) sein, andernfalls wird der Wert niemals gültig, da es unmöglich ist, beide Kriterien zu erfüllen.

Die Eingabe wird die Einschränkungsvalidierung nicht bestehen, wenn die Länge des Textwerts des Feldes kürzer ist als die Mindestlänge von UTF-16-Codeeinheiten, mit {{domxref('validityState.tooShort')}} gibt `true` zurück. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird. Wenn die Übermittlung fehlschlägt, zeigen einige Browser eine Fehlermeldung an, die die erforderliche Mindestlänge und die aktuelle Länge angibt.

`minlength` impliziert nicht [`required`](/de/docs/Web/HTML/Attributes/required); eine Eingabe verletzt nur dann eine `minlength`-Einschränkung, wenn der Benutzer einen Wert eingegeben hat. Ist eine Eingabe nicht `required`, kann ein leerer String übermittelt werden, auch wenn `minlength` festgelegt ist.

{{EmbedInteractiveExample("pages/tabbed/attribute-minlength.html", "tabbed-shorter")}}

## Beispiele

Durch das Hinzufügen von `minlength="5"` muss der Wert entweder leer oder fünf Zeichen oder länger sein, um gültig zu sein.

```html
<label for="fruit">Geben Sie einen Fruchtnamen ein, der mindestens 5 Buchstaben lang ist</label>
<input type="text" minlength="5" id="fruit" />
```

Wir können Pseudoklassen verwenden, um das Element basierend darauf zu stylen, ob der Wert gültig ist. Der Wert ist gültig, solange er entweder null (leer) oder fünf oder mehr Zeichen lang ist. _Limett_ ist ungültig, _Zitrone ist gültig_.

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

- [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength)
- [`size`](/de/docs/Web/HTML/Attributes/size)
- [`pattern`](/de/docs/Web/HTML/Attributes/pattern)
- [Einschränkungen bei der Validierung](/de/docs/Web/HTML/Constraint_validation)
- [Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- {{htmlelement('input')}}
