---
title: "HTML-Attribut: maxlength"
short-title: maxlength
slug: Web/HTML/Attributes/maxlength
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

Das **`maxlength`**-Attribut definiert die maximale [Zeichenkettenlänge](/de/docs/Web/JavaScript/Reference/Global_Objects/String/length), die der Benutzer in ein {{htmlelement('input')}}- oder {{htmlelement('textarea')}}-Element eingeben kann. Das Attribut muss einen ganzzahligen Wert von 0 oder höher haben.

Die Länge wird in UTF-16-Codeeinheiten gemessen, was ([für die meisten Skripte](/de/docs/Web/JavaScript/Reference/Global_Objects/String/length#strings_with_length_not_equal_to_the_number_of_characters)) der Anzahl der Zeichen entspricht. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat die Eingabe keine maximale Länge.

Jeder `maxlength`-Wert muss größer oder gleich dem Wert von [`minlength`](/de/docs/Web/HTML/Attributes/minlength) sein, falls vorhanden und gültig. Die Eingabe wird die Eingabekonsistenzprüfung nicht bestehen, wenn die Länge des Textwerts des Feldes größer als die `maxlength`-UTF-16-Codeeinheiten ist. Die Konsistenzprüfung wird nur angewendet, wenn der Wert durch den Benutzer geändert wird.

### Konsistenzprüfung

Obwohl der Browser im Allgemeinen verhindert, dass der Benutzer mehr Text eingibt, als das `maxlength`-Attribut erlaubt, wird das schreibgeschützte [`tooLong`](/de/docs/Web/API/ValidityState/tooLong)-Eigenschaft eines [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts `true` sein, falls die Länge länger ist, als `maxlength` erlaubt.

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
- [Eingabekonsistenzprüfung](/de/docs/Web/HTML/Constraint_validation)
- [Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- {{htmlelement('input')}}
