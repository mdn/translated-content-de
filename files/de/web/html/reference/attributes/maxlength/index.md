---
title: "HTML-Attribut: maxlength"
short-title: maxlength
slug: Web/HTML/Reference/Attributes/maxlength
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

Das **`maxlength`**-Attribut definiert die maximale [Zeichenkettenlänge](/de/docs/Web/JavaScript/Reference/Global_Objects/String/length), die der Benutzer in ein {{htmlelement('input')}} oder {{htmlelement('textarea')}} eingeben kann. Das Attribut muss einen ganzzahligen Wert von 0 oder höher haben.

Die Länge wird in {{Glossary("UTF-16", "UTF-16 Code-Einheiten")}} gemessen, was oft, aber nicht immer, der Anzahl der Zeichen entspricht. Wenn kein `maxlength` angegeben wird oder ein ungültiger Wert festgelegt ist, hat die Eingabe keine maximale Länge.

Jeder `maxlength`-Wert muss größer oder gleich dem Wert von [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) sein, sofern vorhanden und gültig. Die Eingabe wird bei der Überprüfung der Einschränkungen fehlschlagen, wenn die Länge des Textwerts des Felds größer ist als die Länge von `maxlength` in UTF-16 Code-Einheiten. Die Einschränkungsüberprüfung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

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

## Beschreibung

### Einschränkungsüberprüfung

Während der Browser generell verhindert, dass der Benutzer mehr Text eingibt, als das `maxlength`-Attribut zulässt, wird, sollte die Länge länger sein als `maxlength`, die schreibgeschützte [`tooLong`](/de/docs/Web/API/ValidityState/tooLong)-Eigenschaft eines [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts auf `true` gesetzt.

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
- [Einschränkungsüberprüfung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- {{htmlelement('input')}}
