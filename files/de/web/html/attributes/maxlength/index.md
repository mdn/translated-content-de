---
title: "HTML-Attribut: maxlength"
short-title: maxlength
slug: Web/HTML/Attributes/maxlength
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`maxlength`**-Attribut definiert die maximale [Zeichenlänge](/de/docs/Web/JavaScript/Reference/Global_Objects/String/length), die der Benutzer in ein {{htmlelement('input')}} oder ein {{htmlelement('textarea')}} eingeben kann. Das Attribut muss einen ganzzahligen Wert von 0 oder höher haben.

Die Länge wird in UTF-16-Code-Einheiten gemessen, was ([für die meisten Schriften](/de/docs/Web/JavaScript/Reference/Global_Objects/String/length#strings_with_length_not_equal_to_the_number_of_characters)) der Anzahl der Zeichen entspricht. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben wird, gibt es keine maximale Länge für die Eingabe.

Jeder `maxlength`-Wert muss größer oder gleich dem Wert von [`minlength`](/de/docs/Web/HTML/Attributes/minlength) sein, falls vorhanden und gültig. Die Eingabe schlägt bei der Einschränkungsvalidierung fehl, wenn die Länge des Textwertes des Feldes größer ist als die maximale Anzahl von UTF-16-Code-Einheiten. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### Einschränkungsvalidierung

Während der Browser im Allgemeinen verhindert, dass der Benutzer mehr Text eingibt, als das maxlength-Attribut erlaubt, ist die schreibgeschützte [`tooLong`](/de/docs/Web/API/ValidityState/tooLong)-Eigenschaft eines [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts wahr, wenn die Länge länger ist als das zulässige maxlength.

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

- [`minlength`](/de/docs/Web/HTML/Attributes/minlength)
- [`size`](/de/docs/Web/HTML/Attributes/size)
- [`pattern`](/de/docs/Web/HTML/Attributes/pattern)
- [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- [Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- {{htmlelement('input')}}
