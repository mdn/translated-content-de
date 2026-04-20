---
title: "`required` HTML-Attribut"
short-title: required
slug: Web/HTML/Reference/Attributes/required
l10n:
  sourceCommit: b50ed7ac1c2ca21b4b5cfb594474a17da3f2e6c2
---

Das {{Glossary("Boolean/HTML", "Boolean")}} **`required`** Attribut, wenn vorhanden, gibt an, dass der Benutzer einen Wert für die Eingabe angeben muss, bevor das zugehörige Formular abgeschickt werden kann.

Das `required` Attribut wird von den `{{HTMLElement("input/text","text")}}`, `{{HTMLElement("input/search","search")}}`, `{{HTMLElement("input/url","url")}}`, `{{HTMLElement("input/tel","tel")}}`, `{{HTMLElement("input/email","email")}}`, `{{HTMLElement("input/password","password")}}`, `{{HTMLElement("input/date","date")}}`, `{{HTMLElement("input/month","month")}}`, `{{HTMLElement("input/week","week")}}`, `{{HTMLElement("input/time","time")}}`, `{{HTMLElement("input/datetime-local","datetime-local")}}`, `{{HTMLElement("input/number","number")}}`, `{{HTMLElement("input/checkbox","checkbox")}}`, `{{HTMLElement("input/radio","radio")}}`, `{{HTMLElement("input/file","file")}}`, {{HTMLElement("input")}} Typen sowie den {{HTMLElement("select")}} und {{HTMLElement("textarea")}} Formularelementen unterstützt. Wenn es bei einem dieser Eingabetypen und Elemente vorhanden ist, wird die {{cssxref(':required')}} Pseudoklasse übereinstimmen. Wenn das Attribut nicht enthalten ist, wird die {{cssxref(':optional')}} Pseudoklasse übereinstimmen.

Das Attribut wird bei den {{HTMLElement("input/range","range")}} und {{HTMLElement("input/color","color")}} Eingabetypen nicht unterstützt und ist nicht relevant, da beide Standardwerte haben. Typ `color` hat standardmäßig den Wert `#000000`. Typ `range` hat standardmäßig den Mittelwert zwischen `min` und `max` — wobei `min` und `max` standardmäßig auf 0 bzw. 100 in den meisten Browsern eingestellt sind, wenn sie nicht deklariert werden. `required` wird auch nicht auf den {{HTMLElement("input/hidden","hidden")}} Eingabetyp unterstützt — Benutzer können nicht erwartet werden, ein verstecktes Formularfeld auszufüllen. Schließlich wird `required` nicht bei irgendeinem Button-Eingabetyp unterstützt, einschließlich {{HTMLElement("input/image","image")}}.

Im Fall einer gleichnamigen Gruppe von {{HTMLElement("input/radio","radio")}} Knöpfen, wenn ein einzelner Radiobutton in der Gruppe das `required` Attribut hat, muss ein Radiobutton in dieser Gruppe ausgewählt sein, obwohl es nicht der sein muss, auf dem das Attribut angewendet wurde. Um die Wartung des Codes zu verbessern, wird empfohlen, entweder das `required` Attribut in jedem gleichnamigen Radiobutton der Gruppe einzuschließen oder es bei keinem.

Im Fall einer gleichnamigen Gruppe von {{HTMLElement("input/checkbox","checkbox")}} Eingabetypen sind nur die Checkboxen mit dem `required` Attribut erforderlich.

> [!NOTE]
> Festlegen von [`aria-required="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required) teilt einem Screenreader mit, dass ein Element (jedes Element) erforderlich ist, hat aber keinen Einfluss auf die Optionalität des Elements.

## Beschreibung

### Attribut-Interaktionen

Da ein schreibgeschütztes Feld nicht geändert werden kann, hat `required` keine Auswirkungen auf Eingaben, bei denen das [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly) Attribut ebenfalls angegeben ist.

### Benutzbarkeit

Beim Einschließen des `required` Attributs sollte in der Nähe der Steuerung eine sichtbare Anzeige bereitgestellt werden, die dem Benutzer mitteilt, dass die {{HTMLElement("input")}}, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}} erforderlich ist. Zusätzlich sollten erforderliche Formularelemente mit der {{cssxref(':required')}} Pseudoklasse angesprochen werden, indem sie auf eine Weise gestaltet werden, die zeigt, dass sie erforderlich sind. Dies verbessert die Benutzbarkeit für sehende Benutzer. Assistive Technologie sollte den Benutzer informieren, dass das Formularelement basierend auf dem erforderlichen Attribut obligatorisch ist. Das Hinzufügen von `aria-required="true"` kann jedoch nicht schaden, falls die Kombination aus Browser / Screenreader `required` noch nicht unterstützt.

### Validierung von Einschränkungen

Wenn das Element erforderlich ist und der Wert des Elements der leere String ist, leidet das Element unter [`valueMissing`](/de/docs/Web/API/ValidityState/valueMissing) und das Element wird die {{cssxref(':invalid')}} Pseudoklasse übereinstimmen.

## Barrierefreiheitsbedenken

Bieten Sie den Benutzern eine Anzeige, die ihnen mitteilt, dass das Formularelement erforderlich ist. Stellen Sie sicher, dass die Nachricht facettenreich ist, beispielsweise durch Text, Farbe, Markierungen und Attribute, sodass alle Benutzer die Anforderungen verstehen, egal ob sie farbenblind sind, kognitive Unterschiede haben oder einen Screenreader verwenden.

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
