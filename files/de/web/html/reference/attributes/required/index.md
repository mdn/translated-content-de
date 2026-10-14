---
title: HTML-Attribut `required`
short-title: required
slug: Web/HTML/Reference/Attributes/required
l10n:
  sourceCommit: 46afd57950146568819d0bf98175a2ffdbe079d7
---

Das {{Glossary("Boolean/HTML", "boolesche")}} Attribut **`required`** gibt, wenn es vorhanden ist, an, dass Benutzer einen Wert für das Eingabefeld angeben müssen, bevor das zugehörige Formular abgesendet werden kann.

Das Attribut `required` wird von den {{HTMLElement("input")}}-Typen `{{HTMLElement("input/text","text")}}`, `{{HTMLElement("input/search","search")}}`, `{{HTMLElement("input/url","url")}}`, `{{HTMLElement("input/tel","tel")}}`, `{{HTMLElement("input/email","email")}}`, `{{HTMLElement("input/password","password")}}`, `{{HTMLElement("input/date","date")}}`, `{{HTMLElement("input/month","month")}}`, `{{HTMLElement("input/week","week")}}`, `{{HTMLElement("input/time","time")}}`, `{{HTMLElement("input/datetime-local","datetime-local")}}`, `{{HTMLElement("input/number","number")}}`, `{{HTMLElement("input/checkbox","checkbox")}}`, `{{HTMLElement("input/radio","radio")}}` und `{{HTMLElement("input/file","file")}}` sowie von den Formularsteuerelementen {{HTMLElement("select")}} und {{HTMLElement("textarea")}} unterstützt. Ist das Attribut bei einem dieser Eingabetypen oder Elemente vorhanden, trifft die Pseudoklasse {{cssxref(':required')}} zu. Ist es nicht vorhanden, trifft die Pseudoklasse {{cssxref(':optional')}} zu.

Für die Eingabetypen {{HTMLElement("input/range","range")}} und {{HTMLElement("input/color","color")}} wird das Attribut nicht unterstützt und ist auch nicht relevant, da beide Standardwerte haben. Der Typ `color` hat standardmäßig den Wert `#000000`. Der Typ `range` hat standardmäßig den Wert in der Mitte zwischen `min` und `max`. Wenn `min` und `max` nicht angegeben sind, haben sie in den meisten Browsern standardmäßig die Werte 0 beziehungsweise 100. `required` wird auch für den Eingabetyp {{HTMLElement("input/hidden","hidden")}} nicht unterstützt – von Benutzern kann nicht erwartet werden, ein verborgenes Formularfeld auszufüllen. Schließlich wird `required` für keinen Eingabetyp für Schaltflächen unterstützt, einschließlich {{HTMLElement("input/image","image")}}.

Wenn in einer Gruppe von {{HTMLElement("input/radio","radio")}}-Schaltflächen mit demselben Namen eine einzelne Schaltfläche das Attribut `required` hat, muss eine Schaltfläche dieser Gruppe ausgewählt sein. Das muss jedoch nicht die Schaltfläche sein, für die das Attribut gesetzt ist. Um die Wartbarkeit des Codes zu verbessern, empfiehlt es sich, das Attribut `required` entweder für alle gleichnamigen Radio-Buttons der Gruppe oder für keinen davon anzugeben.

Bei einer Gruppe von {{HTMLElement("input/checkbox","checkbox")}}-Eingaben mit demselben Namen sind nur die Checkboxen mit dem Attribut `required` erforderlich.

> [!NOTE]
> Durch Setzen von [`aria-required="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required) wird einem Screenreader mitgeteilt, dass ein Element (beliebiger Art) erforderlich ist. Dies hat jedoch keinen Einfluss darauf, ob das Element optional ist.

## Beschreibung

### Zusammenspiel mit anderen Attributen

Da ein schreibgeschütztes Feld nicht geändert werden kann, hat `required` keine Wirkung auf Eingabefelder, bei denen auch das Attribut [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly) angegeben ist.

### Benutzerfreundlichkeit

Wenn Sie das Attribut `required` verwenden, kennzeichnen Sie in der Nähe des Steuerelements sichtbar, dass {{HTMLElement("input")}}, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}} erforderlich ist. Wählen Sie außerdem erforderliche Formularsteuerelemente mit der Pseudoklasse {{cssxref(':required')}} aus und gestalten Sie sie so, dass erkennbar ist, dass sie erforderlich sind. Das verbessert die Benutzerfreundlichkeit für sehende Benutzer. Unterstützende Technologien sollten Benutzer anhand des Attributs `required` darüber informieren, dass das Formularsteuerelement ein Pflichtfeld ist. Zusätzlich `aria-required="true"` anzugeben, schadet jedoch nicht, falls die Kombination aus Browser und Screenreader `required` noch nicht unterstützt.

### Constraint Validation

Wenn das Element erforderlich und sein Wert eine leere Zeichenfolge ist, liegt der Gültigkeitsfehler [`valueMissing`](/de/docs/Web/API/ValidityState/valueMissing) vor und die Pseudoklasse {{cssxref(':invalid')}} trifft auf das Element zu.

## Barrierefreiheit

Kennzeichnen Sie für Benutzer, dass das Formularsteuerelement erforderlich ist. Verwenden Sie dafür mehrere Mittel, etwa Text, Farbe, Markierungen und Attribute. So können alle Benutzer die Anforderung verstehen – auch wenn sie eine Farbsehschwäche oder kognitive Einschränkungen haben oder einen Screenreader verwenden.

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

```js hidden
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
});
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
