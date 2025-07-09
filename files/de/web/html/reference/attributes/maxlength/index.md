---
title: "HTML-Attribut: maxlength"
short-title: maxlength
slug: Web/HTML/Reference/Attributes/maxlength
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`maxlength`**-Attribut definiert die maximale [String-Länge](/de/docs/Web/JavaScript/Reference/Global_Objects/String/length), die der Benutzer in ein {{htmlelement('input')}}- oder {{htmlelement('textarea')}}-Element eingeben kann. Das Attribut muss einen ganzzahligen Wert von 0 oder höher haben.

Die Länge wird in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}} gemessen, was oft, aber nicht immer der Anzahl der Zeichen entspricht. Wenn kein `maxlength` angegeben oder ein ungültiger Wert spezifiziert wird, hat die Eingabe keine maximale Länge.

Ein `maxlength`-Wert muss größer oder gleich dem Wert von [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) sein, sofern vorhanden und gültig. Die Eingabe wird die Validierungseinschränkungen nicht bestehen, wenn die Länge des Textwerts des Feldes größer als maxlength UTF-16-Codeeinheiten ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### Einschränkungsvalidierung

Obwohl der Browser den Benutzer im Allgemeinen daran hindert, mehr Text einzugeben, als das `maxlength`-Attribut erlaubt, wird, falls die Länge länger ist, als `maxlength` erlaubt, die schreibgeschützte [`tooLong`](/de/docs/Web/API/ValidityState/tooLong)-Eigenschaft eines [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts wahr sein.

{{InteractiveExample("HTML Demo: maxlength", "tabbed-shorter")}}

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

```html
<input type="password" maxlength="4" />
```

{{EmbedLiveSample('Examples', '100%', 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength)
- [`size`](/de/docs/Web/HTML/Reference/Attributes/size)
- [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)
- [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- {{htmlelement('input')}}
