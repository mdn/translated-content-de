---
title: "ARIA: columnheader-Rolle"
short-title: columnheader
slug: Web/Accessibility/ARIA/Reference/Roles/columnheader_role
l10n:
  sourceCommit: 26fb7eaa7b398a35c2463fa15ab6ccfa46a9e06d
---

Der Wert `columnheader` des ARIA-Rollenattributs identifiziert ein Element als eine Zelle in einer Zeile, die Headerinformationen für eine Spalte enthält, ähnlich dem nativen {{HTMLElement('th')}}-Element mit Spaltenbereich.

## Beschreibung

Ein Element mit `role="columnheader"`, das als Nachkomme eines Elements mit `role="row"` verschachtelt ist, stellt eine statische tabellarische Struktur einer Spalten-Headerzelle in einem tabellarischen Container dar, sei es eine Tabelle oder ein Raster oder ein anderes Diagramm, das Datenbeziehungen darstellen muss. Um unterstützt zu werden, muss der columnheader in einem Element mit der [Rolle `row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) verschachtelt sein.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

Alle Spalten-Header sollten innerhalb einer [row](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) verschachtelt sein. Jede Zeile sollte wiederum innerhalb eines [grid](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), [table](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role), oder [treegrid](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) verschachtelt sein, alternativ innerhalb einer [rowgroup](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role), die in einem der oben genannten verschachtelt ist.

- [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort)
  - : Wird nur auf einen Spalten-Header gleichzeitig angewandt, falls vorhanden. Das `aria-sort`-Attribut gibt an, ob eine Spalte in den drei Werten `ascending` oder `descending` geordnet ist oder `none` für nicht sortiert.

### Tastaturinteraktionen

Diese Rolle unterstützt keine speziellen Tastaturinteraktionen.

### Erforderliche JavaScript-Funktionen

JavaScript ist nur erforderlich, wenn das `aria-sort`-Attribut verwendet wird.

## Beispiele

```html
<table>
  <thead>
    <tr role="row">
      <th role="columnheader" scope="col">
        <button>First Name</button>
      </th>
      <th role="columnheader" scope="col">
        <button>Last Name</button>
      </th>
      <th role="columnheader" scope="col" aria-sort="ascending">
        <button>Company Name</button>
      </th>
      <th role="columnheader" scope="col">
        <button>Job Title</button>
      </th>
    </tr>
  </thead>
  <tbody>
    …
  </tbody>
</table>
```

## Best Practices

Spalten-Header sollten einen Titel oder Headerinformationen für die Spalte enthalten.

Die erste Regel von ARIA lautet: Wenn ein natives HTML-Element oder Attribut die von Ihnen benötigte Semantik und das Verhalten bietet, verwenden Sie es anstelle einer Umnutzung eines Elements und dem Hinzufügen einer ARIA-Rolle, eines Zustands oder einer Eigenschaft, um es zugänglich zu machen. Es wird empfohlen, das native HTML-`<th>`-Element mit dem `scope`-Attribut `<th scope="col">` anstelle eines `<div>`- oder anderen Elements zu verwenden. Wenn Sie das semantische HTML-`<th scope="col">` verwenden, ist das Rollenattribut nicht erforderlich, kann jedoch als Backup enthalten sein, um sicherzustellen, dass die Tabelle ihre Semantik beibehält, sollte die Standardsemantik mit einem CSS-Display-Eigenschaftswert entfernt werden.

Das `aria-sort`-Attribut kann einem `<th scope="col">` hinzugefügt werden, auch wenn das ARIA-Rollenattribut nicht spezifiziert ist.

### Bevorzugen Sie HTML

Columnheader hat die gleiche Semantik wie `<th scope="col">`.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`table`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
- [`grid`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
- [`treegrid`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [`row`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [`rowgroup`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
- [Das `<th>`-Element](/de/docs/Web/HTML/Reference/Elements/th)
- [Das `<table>`-Element](/de/docs/Web/HTML/Reference/Elements/table)
- [Das `<tr>`-Element](/de/docs/Web/HTML/Reference/Elements/tr)
- [Das `<td>`-Element](/de/docs/Web/HTML/Reference/Elements/td)
