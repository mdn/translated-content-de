---
title: "HTML-Attribut: required"
short-title: required
slug: Web/HTML/Reference/Attributes/required
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das {{Glossary("Boolean/HTML", "Boolean")}} **`required`**-Attribut gibt, wenn vorhanden, an, dass der Benutzer einen Wert für das Eingabefeld angeben muss, bevor das dazugehörige Formular abgeschickt werden kann.

Das `required`-Attribut wird von den `{{HTMLElement("input/text","text")}}`, `{{HTMLElement("input/search","search")}}`, `{{HTMLElement("input/url","url")}}`, `{{HTMLElement("input/tel","tel")}}`, `{{HTMLElement("input/email","email")}}`, `{{HTMLElement("input/password","password")}}`, `{{HTMLElement("input/date","date")}}`, `{{HTMLElement("input/month","month")}}`, `{{HTMLElement("input/week","week")}}`, `{{HTMLElement("input/time","time")}}`, `{{HTMLElement("input/datetime-local","datetime-local")}}`, `{{HTMLElement("input/number","number")}}`, `{{HTMLElement("input/checkbox","checkbox")}}`, `{{HTMLElement("input/radio","radio")}}`, `{{HTMLElement("input/file","file")}}`, {{HTMLElement("input")}}-Typen sowie den Formularsteuerelementen {{HTMLElement("select")}} und {{HTMLElement("textarea")}} unterstützt. Wenn es bei einem dieser Eingabetypen und Elemente vorhanden ist, wird die {{cssxref(':required')}}-Pseudoklasse übereinstimmen. Wenn das Attribut nicht enthalten ist, wird die {{cssxref(':optional')}}-Pseudoklasse übereinstimmen.

Das Attribut wird bei den Eingabetypen {{HTMLElement("input/range","range")}} und {{HTMLElement("input/color","color")}} nicht unterstützt oder ist nicht relevant, da beide Standardwerte haben. Der Typ `color` hat standardmäßig `#000000`. Der Typ `range` hat standardmäßig den Mittelwert zwischen `min` und `max` — wobei `min` und `max` in den meisten Browsern standardmäßig 0 und 100 sind, wenn sie nicht deklariert sind. `required` wird auch beim Eingabetyp {{HTMLElement("input/hidden","hidden")}} nicht unterstützt — Benutzer können nicht erwartet werden, ein verstecktes Formularfeld auszufüllen. Schließlich wird `required` bei keinem Button-Eingabetyp unterstützt, einschließlich {{HTMLElement("input/image","image")}}.

Im Fall einer gleichnamigen Gruppe von {{HTMLElement("input/radio","radio")}}-Buttons muss, wenn ein einzelner Radio-Button in der Gruppe das `required`-Attribut hat, ein Radio-Button in dieser Gruppe ausgewählt werden, obwohl es nicht unbedingt derjenige sein muss, auf den das Attribut angewendet wird. Um die Wartung des Codes zu verbessern, wird empfohlen, entweder das `required`-Attribut in jedem gleichnamigen Radio-Button in der Gruppe aufzunehmen oder es in keinem.

Im Fall einer gleichnamigen Gruppe von {{HTMLElement("input/checkbox","checkbox")}}-Eingabetypen sind nur die Kontrollkästchen mit dem `required`-Attribut erforderlich.

> [!NOTE]
> Die Einstellung von [`aria-required="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required) teilt einem Screenreader mit, dass ein Element (jedes Element) erforderlich ist, hat jedoch keinen Einfluss auf die Optionalität des Elements.

### Attributinteraktionen

Da ein schreibgeschütztes Feld nicht geändert werden kann, hat `required` keine Auswirkung auf Eingaben, bei denen auch das [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)-Attribut angegeben ist.

### Benutzerfreundlichkeit

Wenn Sie das `required`-Attribut einschließen, sollten Sie eine sichtbare Anzeige in der Nähe der Steuerung bereitstellen, die den Benutzer darüber informiert, dass das {{HTMLElement("input")}}, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}} erforderlich ist. Zusätzlich sollten erforderliche Formulareingaben mit der {{cssxref(':required')}}-Pseudoklasse gezielt angesprochen und so gestaltet werden, dass sie als erforderlich erkennbar sind. Dies verbessert die Benutzerfreundlichkeit für sehende Benutzer. Unterstützende Technologie sollte den Benutzer aufgrund des `required`-Attributs darauf hinweisen, dass die Formulareingabe obligatorisch ist. Das Hinzufügen von `aria-required="true"` schadet jedoch nicht, falls die Kombination aus Browser und Screenreader `required` noch nicht unterstützt.

### Einschränkungsvalidierung

Wenn das Element erforderlich ist und der Wert des Elements der leere String ist, leidet das Element unter [`valueMissing`](/de/docs/Web/API/ValidityState/valueMissing), und das Element wird mit der {{cssxref(':invalid')}}-Pseudoklasse übereinstimmen.

## Barrierefreiheit

Stellen Sie den Benutzern einen Hinweis bereit, der sie darüber informiert, dass die Formulareingabe erforderlich ist. Sorgen Sie dafür, dass die Nachrichten vielfältig sind, z. B. durch Text, Farbe, Markierungen und Attribut, damit alle Benutzer die Anforderungen verstehen, egal ob sie an Farbblindheit, kognitiven Unterschieden leiden oder einen Screenreader verwenden.

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
