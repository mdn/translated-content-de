---
title: "HTML-Attribut: maxlength"
short-title: maxlength
slug: Web/HTML/Reference/Attributes/maxlength
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`maxlength`**-Attribut definiert die maximale [Zeichenkettenlänge](/de/docs/Web/JavaScript/Reference/Global_Objects/String/length), die der Benutzer in ein {{htmlelement('input')}} oder {{htmlelement('textarea')}} eingeben kann. Das Attribut muss einen ganzzahligen Wert von 0 oder höher haben.

Die Länge wird in UTF-16-Code-Einheiten gemessen, was ([für die meisten Schriftsysteme](/de/docs/Web/JavaScript/Reference/Global_Objects/String/length#strings_with_length_not_equal_to_the_number_of_characters)) der Anzahl der Zeichen entspricht. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat die Eingabe keine maximale Länge.

Jeder `maxlength`-Wert muss größer oder gleich dem Wert von [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) sein, wenn dieser vorhanden und gültig ist. Die Eingabe schlägt bei der Constraint-Validierung fehl, wenn die Länge des Textwerts des Feldes länger als maxlength UTF-16-Code-Einheiten ist. Die Constraint-Validierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### Constraint-Validierung

Obwohl der Browser im Allgemeinen verhindert, dass Benutzer mehr Text eingeben, als das maxlength-Attribut zulässt, wird, sollte die Länge länger als das zulässige maxlength sein, die schreibgeschützte [`tooLong`](/de/docs/Web/API/ValidityState/tooLong)-Eigenschaft eines [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts wahr sein.

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
- [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- {{htmlelement('input')}}
