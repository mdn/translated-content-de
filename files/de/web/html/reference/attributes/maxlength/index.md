---
title: "HTML-Attribut: maxlength"
short-title: maxlength
slug: Web/HTML/Reference/Attributes/maxlength
l10n:
  sourceCommit: 3e097148b4c6cb9c6d8824275599f855ca63827b
---

{{HTMLSidebar}}

Das Attribut **`maxlength`** definiert die maximale [Zeichenstringlänge](/de/docs/Web/JavaScript/Reference/Global_Objects/String/length), die der Benutzer in ein {{htmlelement('input')}} oder {{htmlelement('textarea')}} eingeben kann. Das Attribut muss einen ganzzahligen Wert von 0 oder höher haben.

Die Länge wird in {{Glossary("UTF-16", "UTF-16-Code-Einheiten")}} gemessen, was oft, aber nicht immer der Anzahl der Zeichen entspricht. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben wird, gibt es keine maximale Länge für die Eingabe.

Jeder `maxlength`-Wert muss größer als oder gleich dem Wert von [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) sein, wenn vorhanden und gültig. Die Eingabe schlägt bei der Einschränkungsvalidierung fehl, wenn die Länge des Textwertes des Feldes größer als die `maxlength` UTF-16-Code-Einheiten ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### Einschränkungsvalidierung

Während der Browser im Allgemeinen verhindern wird, dass Benutzer mehr Text eingeben, als das `maxlength`-Attribut erlaubt, wird die schreibgeschützte [`tooLong`](/de/docs/Web/API/ValidityState/tooLong)-Eigenschaft eines [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts wahr sein, sollte die Länge länger als die durch `maxlength` erlaubte sein.

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
