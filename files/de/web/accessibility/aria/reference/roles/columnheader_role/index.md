---
title: "ARIA: columnheader-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/columnheader_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Der `columnheader`-Wert des ARIA role-Attributs identifiziert ein Element als eine Zelle in einer Zeile, die Kopfzeileninformationen für eine Spalte enthält, ähnlich dem nativen {{HTMLElement('th')}}-Element mit Spaltenscope.

## Beschreibung

Ein Element mit `role="columnheader"`, das als Nachfahre eines Elements mit `role="row"` verschachtelt ist, stellt eine statische tabellarische Struktur einer Spaltenkopfzeile in einem tabellarischen Container dar, sei es eine Tabelle, ein Raster oder ein anderes Diagramm, das Datenbeziehungen anzeigen muss. Um unterstützt zu werden, muss der `columnheader` in einem Element mit der [Rolle `row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) verschachtelt sein.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

Alle Spaltenköpfe sollten innerhalb einer [Zeile](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) verschachtelt sein. Jede Zeile sollte wiederum innerhalb eines [Grids](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), einer [Tabelle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) oder eines [treegrid](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) verschachtelt sein, alternativ innerhalb eines [rowgroup](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role), das in einem der oben genannten enthalten ist.

- [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort)
  - : Nur auf einen Spaltenkopf gleichzeitig anwendbar, falls überhaupt, gibt das `aria-sort`-Attribut an, ob eine Spalte in den drei Werten `ascending` oder `descending` sortiert ist oder `none`, wenn nicht sortiert.

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

Spaltenköpfe sollten einen Titel oder Kopfzeileninformationen für die Spalte enthalten.

Die erste Regel von ARIA lautet: Wenn ein natives HTML-Element oder -Attribut die erforderlichen Semantiken und das Verhalten aufweist, verwenden Sie es anstelle der erneuten Zweckbestimmung eines Elements und dem Hinzufügen einer ARIA-Rolle, eines Zustands oder einer Eigenschaft, um es zugänglich zu machen. Es wird empfohlen, das native HTML-`<th>`-Element mit dem `scope`-Attribut `<th scope="col">` anstelle eines `<div>` oder eines anderen Elements zu verwenden. Wenn Sie das semantische HTML `<th scope="col">` verwenden, ist das role-Attribut nicht erforderlich, kann jedoch als Sicherung hinzugefügt werden, um sicherzustellen, dass die Tabelle ihre Semantik beibehält, falls die Standardsemantiken durch einen CSS-Darstellungswert entfernt werden.

Das `aria-sort`-Attribut kann einem `<th scope="col">` hinzugefügt werden, auch wenn das ARIA role-Attribut nicht angegeben ist.

### Bevorzugen Sie HTML

Columnheader hat die gleichen Semantiken `<th scope="col">`.

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
