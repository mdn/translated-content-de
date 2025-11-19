---
title: "HTML-Attribut: required"
short-title: required
slug: Web/HTML/Reference/Attributes/required
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

Das {{Glossary("Boolean/HTML", "Boolean")}} **`required`**-Attribut gibt an, dass der Benutzer einen Wert für die Eingabe angeben muss, bevor das zugehörige Formular gesendet werden kann.

Das `required`-Attribut wird von den `{{HTMLElement("input/text","text")}}`, `{{HTMLElement("input/search","search")}}`, `{{HTMLElement("input/url","url")}}`, `{{HTMLElement("input/tel","tel")}}`, `{{HTMLElement("input/email","email")}}`, `{{HTMLElement("input/password","password")}}`, `{{HTMLElement("input/date","date")}}`, `{{HTMLElement("input/month","month")}}`, `{{HTMLElement("input/week","week")}}`, `{{HTMLElement("input/time","time")}}`, `{{HTMLElement("input/datetime-local","datetime-local")}}`, `{{HTMLElement("input/number","number")}}`, `{{HTMLElement("input/checkbox","checkbox")}}`, `{{HTMLElement("input/radio","radio")}}`, `{{HTMLElement("input/file","file")}}`, {{HTMLElement("input")}}-Typen sowie den {{HTMLElement("select")}} und {{HTMLElement("textarea")}} Formularsteuerelementen unterstützt. Wenn es bei diesen Eingabetypen und Elementen vorhanden ist, wird die {{cssxref(':required')}} Pseudo-Klasse übereinstimmen. Wenn das Attribut nicht enthalten ist, wird die {{cssxref(':optional')}} Pseudo-Klasse übereinstimmen.

Das Attribut wird nicht für die Eingabetypen {{HTMLElement("input/range","range")}} und {{HTMLElement("input/color","color")}} unterstützt oder ist nicht relevant, da beide Standardwerte haben. Typ `color` wird standardmäßig auf `#000000` gesetzt. Typ `range` wird auf den Mittelwert zwischen `min` und `max` gesetzt — wobei `min` und `max` standardmäßig auf 0 bzw. 100 in den meisten Browsern gesetzt sind, wenn sie nicht deklariert werden. `required` wird auch nicht für den {{HTMLElement("input/hidden","hidden")}} Eingabetyp unterstützt — Benutzer können nicht erwartet werden, ein verstecktes Formularfeld auszufüllen. Schließlich wird `required` nicht für irgendeine Schaltflächen-Eingabetypen, einschließlich {{HTMLElement("input/image","image")}}, unterstützt.

Im Fall einer Gruppe von {{HTMLElement("input/radio","radio")}} Schaltflächen mit demselben Namen muss, wenn eine einzelne Radiobutton in der Gruppe das `required`-Attribut hat, eine Radiobutton in dieser Gruppe ausgewählt werden, auch wenn dies nicht diejenige sein muss, bei der das Attribut angewendet wird. Zur Verbesserung der Code-Wartung wird empfohlen, entweder bei jeder Radiobutton mit demselben Namen das `required`-Attribut einzuschließen oder bei keiner.

Im Fall einer Gruppe von {{HTMLElement("input/checkbox","checkbox")}} Eingabetypen mit demselben Namen sind nur die Checkboxen mit dem `required`-Attribut erforderlich.

> [!NOTE]
> Durch das Setzen von [`aria-required="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required) wird einem Screenreader mitgeteilt, dass ein Element (jedes Element) erforderlich ist, hat jedoch keinen Einfluss auf die Optionalität des Elements.

## Beschreibung

### Attribut-Interaktionen

Da ein schreibgeschütztes Feld nicht geändert werden kann, hat `required` keine Wirkung auf Eingaben mit dem ebenfalls angegebenen [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly) Attribut.

### Usability

Wenn Sie das `required`-Attribut einfügen, sollten Sie einen sichtbaren Hinweis in der Nähe des Steuerelements bereitstellen, der den Benutzer darüber informiert, dass das {{HTMLElement("input")}}, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}} erforderlich ist. Ziel ist es auch, erforderliche Formularsteuerelemente mit der {{cssxref(':required')}} Pseudoklasse zu versehen und sie so zu stylen, dass sie als erforderlich gekennzeichnet sind. Dies verbessert die Usability für sehende Benutzer. Technologien für Unterstützte Kommunikation sollten dem Benutzer mitteilen, dass das Formularsteuerelement basierend auf dem erforderlichen Attribut zwingend ist, aber das Hinzufügen von `aria-required="true"` schadet nicht, falls die Kombination aus Browser und Screenreader `required` noch nicht unterstützt.

### Beschränkungsvalidierung

Wenn das Element erforderlich ist und der Wert des Elements der leere String ist, leidet das Element an [`valueMissing`](/de/docs/Web/API/ValidityState/valueMissing) und das Element wird der {{cssxref(':invalid')}} Pseudoklasse entsprechen.

## Barrierefreiheitsbedenken

Geben Sie den Benutzern einen Hinweis darauf, dass das Formularsteuerelement erforderlich ist. Stellen Sie sicher, dass das Messaging facettenreich ist, z.B. durch Text, Farbe, Markierungen und Attribute, damit alle Benutzer die Anforderungen verstehen, unabhängig davon, ob sie farbenblind, kognitiv unterschiedlich sind oder einen Screenreader verwenden.

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
