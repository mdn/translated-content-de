---
title: "HTML-Attribut: required"
short-title: required
slug: Web/HTML/Attributes/required
l10n:
  sourceCommit: 0496bb2fcef13172325e1cc25a5fc71410506557
---

{{HTMLSidebar}}

Das {{Glossary("Boolean/HTML", "Boolean")}} **`required`**-Attribut gibt, falls vorhanden, an, dass der Benutzer einen Wert für die Eingabe angeben muss, bevor das zugehörige Formular übermittelt werden kann.

Das `required`-Attribut wird von den `{{HTMLElement("input/text","text")}}`, `{{HTMLElement("input/search","search")}}`, `{{HTMLElement("input/url","url")}}`, `{{HTMLElement("input/tel","tel")}}`, `{{HTMLElement("input/email","email")}}`, `{{HTMLElement("input/password","password")}}`, `{{HTMLElement("input/date","date")}}`, `{{HTMLElement("input/month","month")}}`, `{{HTMLElement("input/week","week")}}`, `{{HTMLElement("input/time","time")}}`, `{{HTMLElement("input/datetime-local","datetime-local")}}`, `{{HTMLElement("input/number","number")}}`, `{{HTMLElement("input/checkbox","checkbox")}}`, `{{HTMLElement("input/radio","radio")}}`, `{{HTMLElement("input/file","file")}}`, {{HTMLElement("input")}}-Typen sowie den Formularsteuerelementen {{HTMLElement("select")}} und {{HTMLElement("textarea")}} unterstützt. Wenn es bei einem dieser Eingabetypen und Elemente vorhanden ist, wird die {{cssxref(':required')}}-Pseudoklasse übereinstimmen. Wenn das Attribut nicht enthalten ist, wird die {{cssxref(':optional')}}-Pseudoklasse übereinstimmen.

Das Attribut wird nicht für, oder in Bezug auf, die Eingabetypen {{HTMLElement("input/range","range")}} und {{HTMLElement("input/color","color")}} unterstützt, da beide Standardwerte haben. Der Typ `color` hat den Standardwert `#000000`. Der Typ `range` hat den Standardwert als Mittelwert zwischen `min` und `max` — wobei `min` und `max` standardmäßig auf 0 bzw. 100 in den meisten Browsern gesetzt sind, wenn sie nicht deklariert sind. `required` wird auch nicht für den Eingabetyp {{HTMLElement("input/hidden","hidden")}} unterstützt — Benutzer können nicht erwartet werden, ein verstecktes Formularfeld auszufüllen. Schließlich wird `required` bei keinem Button-Eingabetypen unterstützt, einschließlich {{HTMLElement("input/image","image")}}.

Im Falle einer gleichnamigen Gruppe von {{HTMLElement("input/radio","radio")}}-Buttons, wenn ein einzelner Radiobutton in der Gruppe das `required`-Attribut hat, muss ein Radiobutton in dieser Gruppe ausgewählt werden, obwohl es nicht derjenige sein muss, auf den das Attribut angewendet wird. Zur Verbesserung der Pflege des Codes empfiehlt es sich, entweder das `required`-Attribut in jedem gleichnamigen Radiobutton der Gruppe zu inkludieren oder in keinem.

Im Falle einer gleichnamigen Gruppe von {{HTMLElement("input/checkbox","checkbox")}}-Eingabetypen sind nur die mit dem `required`-Attribut versehenen Checkboxen erforderlich.

> [!NOTE]
> Die Einstellung von [`aria-required="true"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-required) teilt einem Screenreader mit, dass ein Element (beliebiges Element) erforderlich ist, hat aber keine Auswirkungen auf die Optionalität des Elements.

### Attributinteraktionen

Da ein schreibgeschütztes Feld nicht geändert werden kann, hat `required` keine Auswirkungen auf Eingaben mit dem ebenfalls angegebenen [`readonly`](/de/docs/Web/HTML/Attributes/readonly)-Attribut.

### Benutzerfreundlichkeit

Beim Einfügen des `required`-Attributs sollten Sie in der Nähe des Steuerelements einen sichtbaren Hinweis bereitstellen, der dem Benutzer anzeigt, dass das {{HTMLElement("input")}}, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}} erforderlich ist. Darüber hinaus sollten Sie erforderliche Formularsteuerelemente mit der {{cssxref(':required')}}-Pseudoklasse ansprechen und diese so gestalten, dass sie darauf hinweisen, dass sie erforderlich sind. Dies verbessert die Benutzerfreundlichkeit für sehende Benutzer. Unterstützende Technologien sollten den Benutzer darüber informieren, dass das Formularsteuerelement obligatorisch ist, basierend auf dem required-Attribut, aber das Hinzufügen von `aria-required="true"` schadet nicht, falls die Kombination aus Browser und Screenreader `required` noch nicht unterstützt.

### Validierungsbeschränkungen

Wenn das Element erforderlich ist und der Wert des Elements der leere String ist, leidet das Element unter [`valueMissing`](/de/docs/Web/API/ValidityState/valueMissing), und das Element wird die {{cssxref(':invalid')}}-Pseudoklasse übereinstimmen.

## Barrierefreiheitsbedenken

Bieten Sie einen Hinweis für Benutzer an, der sie darüber informiert, dass das Formularsteuerelement erforderlich ist. Sicherstellen Sie, dass die Mitteilungen facettenreich sind, beispielsweise durch Text, Farbe, Markierungen und Attribute, damit alle Benutzer die Anforderungen verstehen, unabhängig davon, ob sie farbenblind sind, kognitive Unterschiede haben oder einen Screenreader verwenden.

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
