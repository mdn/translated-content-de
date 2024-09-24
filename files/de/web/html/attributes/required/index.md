---
title: "HTML-Attribut: required"
short-title: required
slug: Web/HTML/Attributes/required
l10n:
  sourceCommit: 0496bb2fcef13172325e1cc25a5fc71410506557
---

{{HTMLSidebar}}

Das [Boolean](/de/docs/Glossary/Boolean/HTML) **`required`** Attribut gibt, falls vorhanden, an, dass der Benutzer vor dem Absenden des Formulars einen Wert für die Eingabe angeben muss.

Das `required` Attribut wird von `{{HTMLElement("input/text","text")}}`, `{{HTMLElement("input/search","search")}}`, `{{HTMLElement("input/url","url")}}`, `{{HTMLElement("input/tel","tel")}}`, `{{HTMLElement("input/email","email")}}`, `{{HTMLElement("input/password","password")}}`, `{{HTMLElement("input/date","date")}}`, `{{HTMLElement("input/month","month")}}`, `{{HTMLElement("input/week","week")}}`, `{{HTMLElement("input/time","time")}}`, `{{HTMLElement("input/datetime-local","datetime-local")}}`, `{{HTMLElement("input/number","number")}}`, `{{HTMLElement("input/checkbox","checkbox")}}`, `{{HTMLElement("input/radio","radio")}}`, `{{HTMLElement("input/file","file")}}`, {{HTMLElement("input")}} Typen sowie den {{HTMLElement("select")}} und {{HTMLElement("textarea")}} Formularelement-Steuerelementen unterstützt. Falls vorhanden, wird die {{cssxref(':required')}} Pseudoklasse übereinstimmen. Wenn das Attribut nicht enthalten ist, wird die {{cssxref(':optional')}} Pseudoklasse übereinstimmen.

Das Attribut wird nicht bei den {{HTMLElement("input/range","range")}} und {{HTMLElement("input/color","color")}} Eingabetypen unterstützt oder ist für diese relevant, da beide Standardwerte haben. Typ `color` standardisiert auf `#000000`. Typ `range` standardisiert auf den Mittelwert zwischen `min` und `max` — wobei `min` und `max` in den meisten Browsern standardmäßig 0 bzw. 100 sind, falls nicht angegeben. `required` wird ebenfalls nicht beim {{HTMLElement("input/hidden","hidden")}} Eingabetyp unterstützt — Benutzer können nicht erwartet werden, ein verstecktes Formularfeld auszufüllen. Schließlich wird `required` bei keinem der Schaltflächen-Eingabetypen unterstützt, einschließlich {{HTMLElement("input/image","image")}}.

Im Fall einer gleichnamigen Gruppe von {{HTMLElement("input/radio","radio")}} Schaltflächen, wenn eine einzige Schaltfläche in der Gruppe das `required` Attribut besitzt, muss eine Schaltfläche in dieser Gruppe ausgewählt werden, obwohl es nicht unbedingt diejenige sein muss, auf die das Attribut angewendet wurde. Zur Verbesserung der Wartbarkeit des Codes wird empfohlen, das `required` Attribut entweder in jeder gleichnamigen Radioschaltfläche der Gruppe einzuschließen oder in keiner.

Im Fall einer gleichnamigen Gruppe von {{HTMLElement("input/checkbox","checkbox")}} Eingabetypen sind nur die Kontrollkästchen mit dem `required` Attribut erforderlich.

> [!NOTE]
> Das Setzen von [`aria-required="true"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-required) teilt einem Screenreader mit, dass ein Element (jedes Element) erforderlich ist, hat jedoch keine Auswirkungen auf die Optionalität des Elements.

### Attribute-Interaktionen

Da ein schreibgeschütztes Feld nicht geändert werden kann, hat `required` keine Auswirkungen auf Eingaben mit dem auch angegebenen [`readonly`](/de/docs/Web/HTML/Attributes/readonly) Attribut.

### Benutzerfreundlichkeit

Wenn Sie das `required` Attribut einfügen, stellen Sie in der Nähe der Steuerung eine sichtbare Anzeige bereit, die den Benutzer darüber informiert, dass das {{HTMLElement("input")}}, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}} erforderlich ist. Zusätzlich sollten Sie erforderliche Formularsteuerelemente mit der {{cssxref(':required')}} Pseudoklasse anvisieren, indem Sie sie so gestalten, dass sie darauf hinweisen, dass sie erforderlich sind. Dies verbessert die Benutzerfreundlichkeit für sehende Benutzer. Unterstützende Technologie sollte den Benutzer basierend auf dem required Attribut darüber informieren, dass das Formularelement obligatorisch ist, aber das Hinzufügen von `aria-required="true"` schadet nicht, falls die Browser-/Screenreader-Kombination `required` noch nicht unterstützt.

### Einschränkungsvalidierung

Wenn das Element erforderlich ist und der Wert des Elements die leere Zeichenfolge ist, dann leidet das Element unter {{domxref('ValidityState.valueMissing','valueMissing')}} und das Element wird die {{cssxref(':invalid')}} Pseudoklasse zuordnen.

## Barrierefreiheitsbedenken

Bieten Sie den Benutzern einen Hinweis, dass das Formularelement erforderlich ist. Stellen Sie sicher, dass die Nachricht facettenreich ist, zum Beispiel durch Text, Farbe, Markierungen und Attribute, so dass alle Benutzer die Anforderungen verstehen, egal ob sie farbenblind sind, kognitive Unterschiede haben oder einen Screenreader verwenden.

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

- {{domxref('validityState.valueMissing')}}
- {{cssxref(':required')}} und {{cssxref(':optional')}}
- {{htmlelement('input')}}
- {{htmlelement('select')}}
