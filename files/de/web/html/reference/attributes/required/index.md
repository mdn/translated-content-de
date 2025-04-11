---
title: "HTML-Attribut: required"
short-title: required
slug: Web/HTML/Reference/Attributes/required
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das {{Glossary("Boolean/HTML", "Boolean")}} **`required`**-Attribut gibt, falls vorhanden, an, dass der Benutzer einen Wert für die Eingabe festlegen muss, bevor das zugehörige Formular gesendet werden kann.

Das `required`-Attribut wird von den `{{HTMLElement("input/text","text")}}`, `{{HTMLElement("input/search","search")}}`, `{{HTMLElement("input/url","url")}}`, `{{HTMLElement("input/tel","tel")}}`, `{{HTMLElement("input/email","email")}}`, `{{HTMLElement("input/password","password")}}`, `{{HTMLElement("input/date","date")}}`, `{{HTMLElement("input/month","month")}}`, `{{HTMLElement("input/week","week")}}`, `{{HTMLElement("input/time","time")}}`, `{{HTMLElement("input/datetime-local","datetime-local")}}`, `{{HTMLElement("input/number","number")}}`, `{{HTMLElement("input/checkbox","checkbox")}}`, `{{HTMLElement("input/radio","radio")}}`, `{{HTMLElement("input/file","file")}}`, {{HTMLElement("input")}}-Typen sowie den Formularsteuerelementen {{HTMLElement("select")}} und {{HTMLElement("textarea")}} unterstützt. Ist es bei einem dieser Eingabetypen und Elemente vorhanden, wird die {{cssxref(':required')}} Pseudoklasse übereinstimmen. Ist das Attribut nicht enthalten, wird die {{cssxref(':optional')}} Pseudoklasse übereinstimmen.

Das Attribut wird nicht von den {{HTMLElement("input/range","range")}} und {{HTMLElement("input/color","color")}} Eingabetypen unterstützt oder ist dafür relevant, da beide Standardwerte haben. Typ `color` hat standardmäßig `#000000`. Typ `range` hat standardmäßig den Mittelwert zwischen `min` und `max` — mit `min` und `max`, die standardmäßig auf 0 und 100 in den meisten Browsern gesetzt sind, sofern nicht anders angegeben. `required` wird auch vom {{HTMLElement("input/hidden","hidden")}} Eingabetyp nicht unterstützt — Benutzer können nicht erwartet werden, ein verstecktes Formularfeld auszufüllen. Schließlich wird `required` bei keinem Button-Eingabetyp unterstützt, einschließlich {{HTMLElement("input/image","image")}}.

Im Fall einer gleichnamigen Gruppe von {{HTMLElement("input/radio","radio")}}-Buttons muss, wenn ein einzelner Radio-Button in der Gruppe das `required`-Attribut hat, ein Radio-Button in dieser Gruppe ausgewählt werden, auch wenn es nicht der ist, auf den das Attribut angewendet wird. Um die Wartung des Codes zu verbessern, wird empfohlen, entweder bei jedem gleichnamigen Radio-Button in der Gruppe das `required`-Attribut einzuschließen oder bei keinem.

Im Fall einer gleichnamigen Gruppe von {{HTMLElement("input/checkbox","checkbox")}} Eingabetypen sind nur die Checkboxen mit dem `required`-Attribut erforderlich.

> [!NOTE]
> Die Einstellung von [`aria-required="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required) teilt einem Screenreader mit, dass ein Element (jedes Element) erforderlich ist, hat jedoch keinen Einfluss auf die Optionalität des Elements.

### Attribut-Interaktionen

Da ein schreibgeschütztes Feld nicht geändert werden kann, hat `required` bei Eingaben mit dem ebenfalls festgelegten [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)-Attribut keine Auswirkung.

### Benutzerfreundlichkeit

Wenn Sie das `required`-Attribut verwenden, stellen Sie in der Nähe des Steuerelements eine sichtbare Angabe bereit, die den Benutzer darüber informiert, dass der {{HTMLElement("input")}}, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}} erforderlich ist. Darüber hinaus sollten Sie erforderliche Formularsteuerelemente mit der {{cssxref(':required')}} Pseudoklasse anvisieren und sie so gestalten, dass sie darauf hinweisen, dass sie erforderlich sind. Dies verbessert die Benutzerfreundlichkeit für sehende Benutzer. Hilfstechnologie sollte den Benutzer basierend auf dem `required`-Attribut darüber informieren, dass das Formularsteuerelement obligatorisch ist, aber `aria-required="true"` zu ergänzen, schadet nicht, falls die Kombination aus Browser / Screenreader `required` noch nicht unterstützt.

### Einschränkungsprüfung

Wenn das Element erforderlich ist und der Wert des Elements die leere Zeichenkette ist, leidet das Element an [`valueMissing`](/de/docs/Web/API/ValidityState/valueMissing) und das Element wird mit der {{cssxref(':invalid')}} Pseudoklasse übereinstimmen.

## Zugänglichkeitsbedenken

Stellen Sie eine Anzeige für Benutzer bereit, die ihnen mitteilt, dass das Formularsteuerelement erforderlich ist. Stellen Sie sicher, dass die Meldung facettenreich ist, z. B. durch Text, Farbe, Markierungen und Attribut, damit alle Benutzer die Anforderungen verstehen, unabhängig davon, ob sie Farbenblindheit, kognitive Unterschiede haben oder einen Screenreader verwenden.

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
