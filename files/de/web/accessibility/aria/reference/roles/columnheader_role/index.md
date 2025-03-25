---
title: "ARIA: Rolle columnheader"
slug: Web/Accessibility/ARIA/Reference/Roles/columnheader_role
l10n:
  sourceCommit: ec98716dfe71c78db3f82ee3b1b9e7f68997fa19
---

Der `columnheader`-Wert des ARIA-Rollenattributs identifiziert ein Element als eine Zelle in einer Zeile, die Kopfzeileninformationen für eine Spalte enthält, ähnlich dem nativen {{HTMLElement('th')}}-Element mit Spaltenbereich.

## Beschreibung

Ein Element mit `role="columnheader"`, das als Nachfahre eines Elements mit `role="row"` verschachtelt ist, stellt eine statische tabellarische Struktur einer Spaltenkopfzelle in einem tabellarischen Container dar, sei es eine Tabelle, ein Raster oder ein anderes Diagramm, das Datenbeziehungen darstellen muss. Damit es unterstützt wird, muss das columnheader in einem Element mit der [Rolle `row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) verschachtelt sein.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

Alle Spaltenköpfe sollten innerhalb einer [row](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) verschachtelt sein. Jede Zeile wiederum sollte innerhalb eines [grid](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), [table](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) oder [treegrid](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) verschachtelt sein, alternativ innerhalb einer [rowgroup](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role), die in eines der oben genannten verschachtelt ist.

- [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort)
  - : Nur auf einen Spaltenkopf gleichzeitig anwendbar, sofern vorhanden. Das `aria-sort`-Attribut gibt an, ob eine Spalte in den drei Werten `ascending` oder `descending` oder `none` für nicht sortiert sortiert ist.

### Tastaturinteraktionen

Diese Rolle unterstützt keine spezifische Tastaturinteraktion.

### Erforderliche JavaScript-Features

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

## Beste Praktiken

Spaltenköpfe sollten einen Titel oder Kopfzeileninformationen für die Spalte enthalten.

Die erste Regel von ARIA lautet: Wenn ein natives HTML-Element oder Attribut die erforderliche Semantik und das Verhalten bereitstellt, verwenden Sie es anstelle einer Anpassung eines Elements und der Hinzufügung einer ARIA-Rolle, eines Zustand oder einer Eigenschaft, um es zugänglich zu machen. Es wird empfohlen, das native HTML-Element `<th>` mit dem `scope`-Attribut `<th scope="col">` anstelle eines `<div>` oder eines anderen Elements zu verwenden. Wenn Sie das semantische HTML `<th scope="col">` verwenden, wird das Rollenattribut nicht benötigt, kann jedoch als Backup hinzugefügt werden, um sicherzustellen, dass die Tabelle ihre Semantik beibehält, falls die standardmäßigen Semantiken durch einen CSS-Anzeigenwert entfernt werden.

Das `aria-sort`-Attribut kann zu einem `<th scope="col">` hinzugefügt werden, auch wenn das ARIA-Rollenattribut nicht angegeben ist.

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
- [Das `<th>`-Element](/de/docs/Web/HTML/Element/th)
- [Das `<table>`-Element](/de/docs/Web/HTML/Element/table)
- [Das `<tr>`-Element](/de/docs/Web/HTML/Element/tr)
- [Das `<td>`-Element](/de/docs/Web/HTML/Element/td)
