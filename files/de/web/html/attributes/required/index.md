---
title: "HTML-Attribut: required"
short-title: required
slug: Web/HTML/Attributes/required
l10n:
  sourceCommit: 0496bb2fcef13172325e1cc25a5fc71410506557
---

{{HTMLSidebar}}

Das [Boolean](/de/docs/Glossary/Boolean/HTML) **`required`**-Attribut gibt, falls vorhanden, an, dass der Benutzer einen Wert für die Eingabe angeben muss, bevor das zugehörige Formular gesendet werden kann.

Das `required`-Attribut wird von `{{HTMLElement("input/text","text")}}`, `{{HTMLElement("input/search","search")}}`, `{{HTMLElement("input/url","url")}}`, `{{HTMLElement("input/tel","tel")}}`, `{{HTMLElement("input/email","email")}}`, `{{HTMLElement("input/password","password")}}`, `{{HTMLElement("input/date","date")}}`, `{{HTMLElement("input/month","month")}}`, `{{HTMLElement("input/week","week")}}`, `{{HTMLElement("input/time","time")}}`, `{{HTMLElement("input/datetime-local","datetime-local")}}`, `{{HTMLElement("input/number","number")}}`, `{{HTMLElement("input/checkbox","checkbox")}}`, `{{HTMLElement("input/radio","radio")}}`, `{{HTMLElement("input/file","file")}}`, {{HTMLElement("input")}}-Typen sowie den {{HTMLElement("select")}} und {{HTMLElement("textarea")}}-Formularelementen unterstützt. Wenn eines dieser Eingabetypen und Elemente vorhanden ist, wird die {{cssxref(':required')}}-Pseudoklasse übereinstimmen. Wenn das Attribut nicht enthalten ist, wird die {{cssxref(':optional')}}-Pseudoklasse übereinstimmen.

Das Attribut wird bei den Eingabetypen {{HTMLElement("input/range","range")}} und {{HTMLElement("input/color","color")}} nicht unterstützt oder ist nicht relevant, da beide Standardwerte haben. Der Typ `color` hat standardmäßig `#000000`. Der Typ `range` hat standardmäßig den Mittelwert zwischen `min` und `max` – wobei `min` und `max` in den meisten Browsern standardmäßig 0 bzw. 100 sind, wenn sie nicht deklariert werden. `required` wird auch beim {{HTMLElement("input/hidden","hidden")}}-Eingabetyp nicht unterstützt – es kann nicht erwartet werden, dass Benutzer ein verstecktes Formularfeld ausfüllen. Schließlich wird `required` bei keinem Button-Eingabetyp unterstützt, einschließlich {{HTMLElement("input/image","image")}}.

Im Falle einer gleichnamigen Gruppe von {{HTMLElement("input/radio","radio")}}-Schaltflächen muss, wenn eine einzelne Radiobutton in der Gruppe das `required`-Attribut hat, eine Radiobutton in dieser Gruppe aktiviert werden, obwohl es nicht diejenige sein muss, auf die das Attribut angewendet wird. Um die Wartung des Codes zu verbessern, wird empfohlen, entweder das `required`-Attribut in allen gleichnamigen Radiobuttons der Gruppe hinzuzufügen oder in keinem.

Im Falle einer gleichnamigen Gruppe von {{HTMLElement("input/checkbox","checkbox")}}-Eingabetypen sind nur die Kontrollkästchen mit dem `required`-Attribut erforderlich.

> [!NOTE]
> Die Einstellung von [`aria-required="true"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-required) informiert einen Screenreader darüber, dass ein Element (jedes Element) erforderlich ist, hat jedoch keinen Einfluss auf die Optionalität des Elements.

### Attributs-Interaktionen

Da ein schreibgeschütztes Feld nicht geändert werden kann, hat `required` keine Auswirkungen auf Eingaben, bei denen auch das [`readonly`](/de/docs/Web/HTML/Attributes/readonly)-Attribut angegeben ist.

### Benutzerfreundlichkeit

Beim Hinzufügen des `required`-Attributs sollte in der Nähe der Steuerung ein sichtbarer Hinweis angebracht werden, der den Benutzer darüber informiert, dass das {{HTMLElement("input")}}, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}} erforderlich ist. Außerdem sollten erforderliche Formularsteuerungen mit der {{cssxref(':required')}}-Pseudoklasse angesprochen werden, indem sie so gestaltet werden, dass ersichtlich ist, dass sie erforderlich sind. Dies verbessert die Benutzerfreundlichkeit für sehende Benutzer. Hilfstechnologien sollten den Benutzer basierend auf dem erforderlichen Attribut darüber informieren, dass das Formularelement obligatorisch ist, aber das Hinzufügen von `aria-required="true"` schadet nicht, falls die Kombination aus Browser und Screenreader `required` noch nicht unterstützt.

### Eingabebeschränkungen

Wenn das Element erforderlich ist und der Wert des Elements die leere Zeichenfolge ist, weist das Element [`valueMissing`](/de/docs/Web/API/ValidityState/valueMissing) auf und das Element wird die {{cssxref(':invalid')}}-Pseudoklasse erfüllen.

## Zugänglichkeitsbedenken

Geben Sie den Benutzern einen Hinweis, dass die Formulareingabe erforderlich ist. Stellen Sie sicher, dass die Nachricht vielseitig ist, z. B. durch Text, Farbe, Markierungen und Attribute, damit alle Benutzer die Anforderungen verstehen, unabhängig davon, ob sie farbenblind sind, kognitive Unterschiede haben oder einen Screenreader verwenden.

## Beispiel

### HTML

```html
<form>
  <div class="group">
    <input type="text" />
    <label>Normal</label>
  </div>
  <div class="group">
    <input type="text" required />
    <label>Required</label>
  </div>
  <input type="submit" />
</form>
```

### Ergebnis

{{EmbedLiveSample('Example')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`validityState.valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)
- {{cssxref(':required')}} und {{cssxref(':optional')}}
- {{htmlelement('input')}}
- {{htmlelement('select')}}
