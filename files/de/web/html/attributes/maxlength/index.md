---
title: "HTML-Attribut: maxlength"
short-title: maxlength
slug: Web/HTML/Attributes/maxlength
l10n:
  sourceCommit: 067a40e4ed27ea6e1f3b8bbfec15cd9dc3078f4c
---

{{HTMLSidebar}}

Das **`maxlength`**-Attribut definiert die maximale [Zeichenfolgenlänge](/de/docs/Web/JavaScript/Reference/Global_Objects/String/length), die der Benutzer in ein {{htmlelement('input')}}- oder {{htmlelement('textarea')}}-Element eingeben kann. Das Attribut muss einen ganzzahligen Wert von 0 oder höher haben.

Die Länge wird in UTF-16-Codeeinheiten gemessen, was (für die meisten Schriftarten) der Anzahl der Zeichen entspricht. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben wird, gibt es keine maximale Länge für die Eingabe.

Jeder `maxlength`-Wert muss größer oder gleich dem Wert von [`minlength`](/de/docs/Web/HTML/Attributes/minlength) sein, sofern vorhanden und gültig. Die Eingabe wird bei der Beschränkungsvalidierung fehlschlagen, wenn die Länge des Textwertes des Feldes größer als die Anzahl der UTF-16-Codeeinheiten von maxlength ist. Die Beschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### Beschränkungsvalidierung

Während der Browser in der Regel verhindert, dass der Benutzer mehr Text eingibt, als das maxlength-Attribut erlaubt, wird die schreibgeschützte [`tooLong`](/de/docs/Web/API/ValidityState/tooLong)-Eigenschaft eines [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts wahr sein, sollte die Länge länger sein als das durch maxlength erlaubte.

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
- [Beschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- [Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- {{htmlelement('input')}}
