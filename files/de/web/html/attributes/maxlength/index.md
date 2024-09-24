---
title: "HTML-Attribut: maxlength"
short-title: maxlength
slug: Web/HTML/Attributes/maxlength
l10n:
  sourceCommit: 067a40e4ed27ea6e1f3b8bbfec15cd9dc3078f4c
---

{{HTMLSidebar}}

Das **`maxlength`**-Attribut definiert die maximale [Zeichenlänge](/de/docs/Web/JavaScript/Reference/Global_Objects/String/length), die der Benutzer in ein {{htmlelement('input')}} oder {{htmlelement('textarea')}} eingeben kann. Das Attribut muss einen ganzzahligen Wert von 0 oder höher haben.

Die Länge wird in UTF-16 Code-Einheiten gemessen, was ([für die meisten Schriftsysteme](/de/docs/Web/JavaScript/Reference/Global_Objects/String/length#strings_with_length_not_equal_to_the_number_of_characters)) der Anzahl der Zeichen entspricht. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben wird, gibt es keine maximale Länge für die Eingabe.

Jeder `maxlength`-Wert muss größer oder gleich dem Wert von [`minlength`](/de/docs/Web/HTML/Attributes/minlength) sein, falls vorhanden und gültig. Die Eingabe wird die Überprüfung der Einschränkung nicht bestehen, wenn die Länge des Textwerts des Feldes größer als maxlength UTF-16 Code-Einheiten ist. Die Überprüfung der Einschränkung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### Einschränkungsvalidierung

Während der Browser in der Regel verhindert, dass der Benutzer mehr Text eingibt als das maxlength-Attribut erlaubt, wird, sollte die Länge länger als das erlaubte maxlength sein, die schreibgeschützte {{domxref("ValidityState.tooLong", "tooLong")}}-Eigenschaft eines {{domxref("ValidityState")}}-Objekts true sein.

{{EmbedInteractiveExample("pages/tabbed/attribute-maxlength.html", "tabbed-shorter")}}

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
- [Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- {{htmlelement('input')}}
