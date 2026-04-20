---
title: "`maxlength` HTML-Attribut"
short-title: maxlength
slug: Web/HTML/Reference/Attributes/maxlength
l10n:
  sourceCommit: b50ed7ac1c2ca21b4b5cfb594474a17da3f2e6c2
---

Das **`maxlength`**-Attribut definiert die maximale [Zeichenkettenlänge](/de/docs/Web/JavaScript/Reference/Global_Objects/String/length), die der Benutzer in ein {{htmlelement('input')}} oder {{htmlelement('textarea')}} eingeben kann. Das Attribut muss einen ganzzahligen Wert von 0 oder höher haben.

Die Länge wird in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}} gemessen, was oft, aber nicht immer, der Anzahl der Zeichen entspricht. Wenn kein `maxlength` angegeben wird oder ein ungültiger Wert angegeben ist, gibt es keine maximale Länge für die Eingabe.

Ein beliebiger `maxlength`-Wert muss größer oder gleich dem Wert von [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) sein, wenn dieser vorhanden und gültig ist. Die Eingabe wird die Einschränkungsvalidierung nicht bestehen, wenn die Länge des Textwerts des Feldes länger als die `maxlength`-UTF-16-Codeeinheiten ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

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

### Einschränkungsvalidierung

Während der Browser im Allgemeinen verhindert, dass der Benutzer mehr Text eingibt, als das `maxlength`-Attribut erlaubt, wird, sollte die Länge länger sein als das `maxlength` erlaubt, die schreibgeschützte [`tooLong`](/de/docs/Web/API/ValidityState/tooLong)-Eigenschaft eines [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts wahr sein.

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
