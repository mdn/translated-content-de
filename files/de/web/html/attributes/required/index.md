---
title: "HTML-Attribut: required"
short-title: required
slug: Web/HTML/Attributes/required
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{HTMLSidebar}}

Das {{Glossary("Boolean/HTML", "Boolean")}} **`required`**-Attribut, wenn vorhanden, gibt an, dass der Benutzer einen Wert für die Eingabe angeben muss, bevor das zugehörige Formular abgeschickt werden kann.

Das `required`-Attribut wird von den `{{HTMLElement("input/text","text")}}`, `{{HTMLElement("input/search","search")}}`, `{{HTMLElement("input/url","url")}}`, `{{HTMLElement("input/tel","tel")}}`, `{{HTMLElement("input/email","email")}}`, `{{HTMLElement("input/password","password")}}`, `{{HTMLElement("input/date","date")}}`, `{{HTMLElement("input/month","month")}}`, `{{HTMLElement("input/week","week")}}`, `{{HTMLElement("input/time","time")}}`, `{{HTMLElement("input/datetime-local","datetime-local")}}`, `{{HTMLElement("input/number","number")}}`, `{{HTMLElement("input/checkbox","checkbox")}}`, `{{HTMLElement("input/radio","radio")}}`, `{{HTMLElement("input/file","file")}}`, {{HTMLElement("input")}}-Typen zusammen mit den {{HTMLElement("select")}} und {{HTMLElement("textarea")}} Formularsteuerelementen unterstützt. Wenn das Attribut bei einer dieser Eingabearten und Elemente vorhanden ist, wird die {{cssxref(':required')}}-Pseudoklasse übereinstimmen. Wenn das Attribut nicht enthalten ist, wird die {{cssxref(':optional')}}-Pseudoklasse übereinstimmen.

Das Attribut wird bei den {{HTMLElement("input/range","range")}} und {{HTMLElement("input/color","color")}} Eingabetypen nicht unterstützt oder ist nicht relevant, da beide standardmäßige Werte haben. Der Typ `color` hat den Standardwert `#000000`. Der Typ `range` hat den Standardwert zwischen `min` und `max` — wobei `min` und `max` standardmäßig 0 bzw. 100 in den meisten Browsern sind, wenn nicht anders angegeben. `required` wird auch beim {{HTMLElement("input/hidden","hidden")}} Eingabetyp nicht unterstützt — Benutzer können nicht erwartet werden, ein verstecktes Formularfeld auszufüllen. Schließlich wird `required` bei keinem der Button-Eingabetypen unterstützt, einschließlich {{HTMLElement("input/image","image")}}.

Im Fall einer Gruppe von {{HTMLElement("input/radio","radio")}} Buttons mit demselben Namen, wenn ein einzelner Radio Button in der Gruppe das `required`-Attribut hat, muss ein Radio Button in dieser Gruppe ausgewählt werden, obwohl es nicht der sein muss, auf den das Attribut angewendet ist. Um die Wartung des Codes zu verbessern, wird empfohlen, entweder das `required`-Attribut bei jedem gleich benannten Radio Button in der Gruppe einzuschließen oder bei keinem.

Im Fall einer Gruppe von {{HTMLElement("input/checkbox","checkbox")}} Eingabetypen mit demselben Namen, sind nur die mit dem `required`-Attribut versehenen Checkboxen erforderlich.

> [!NOTE]
> Das Setzen von [`aria-required="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required) teilt einem Screen Reader mit, dass ein Element (beliebiges Element) erforderlich ist, hat jedoch keinen Einfluss auf die Optionalität des Elements.

### Attributinteraktionen

Da ein schreibgeschütztes Feld nicht geändert werden kann, hat `required` keine Auswirkung auf Eingaben, die auch das [`readonly`](/de/docs/Web/HTML/Attributes/readonly)-Attribut spezifiziert haben.

### Benutzerfreundlichkeit

Wenn Sie das `required`-Attribut einschließen, sorgen Sie für einen sichtbaren Hinweis in der Nähe der Steuerelemente, der den Benutzer informiert, dass das {{HTMLElement("input")}}, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}} erforderlich ist. Zusätzlich sollten erforderliche Formularsteuerelemente mit der {{cssxref(':required')}}-Pseudoklasse gezielt angesprochen und so gestaltet werden, dass sie als erforderlich erkennbar sind. Dies verbessert die Benutzerfreundlichkeit für sehende Benutzer. Assistive Technologien sollten den Benutzer basierend auf dem erforderlichen Attribut darüber informieren, dass das Formularsteuerelement obligatorisch ist. Das Hinzufügen von `aria-required="true"` schadet nicht, falls die Kombination Browser / Screen Reader `required` noch nicht unterstützt.

### Validierung der Einschränkungen

Wenn das Element erforderlich ist und der Wert des Elements die leere Zeichenfolge ist, leidet das Element an [`valueMissing`](/de/docs/Web/API/ValidityState/valueMissing) und das Element wird mit der {{cssxref(':invalid')}}-Pseudoklasse übereinstimmen.

## Barrierefreiheitsbedenken

Stellen Sie einen Hinweis für Benutzer bereit, der sie darüber informiert, dass das Formularsteuerelement erforderlich ist. Stellen Sie sicher, dass die Meldung facettenreich ist, z. B. durch Text, Farbe, Markierungen und Attribute, damit alle Benutzer die Anforderungen verstehen, unabhängig davon, ob sie farbenblind sind, kognitive Unterschiede haben oder einen Screen Reader verwenden.

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
