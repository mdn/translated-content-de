---
title: "ARIA: columnheader Rolle"
slug: Web/Accessibility/ARIA/Roles/columnheader_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Der `columnheader`-Wert des ARIA-Rollenattributs identifiziert ein Element als eine Zelle in einer Zeile, die Header-Informationen für eine Spalte enthält, ähnlich dem nativen {{HTMLElement('th')}}-Element mit Spaltenumfang.

## Beschreibung

Ein Element mit `role="columnheader"`, das als Nachkomme eines Elements mit `role="row"` verschachtelt ist, stellt eine statische tabellarische Struktur einer Spalten-Headerzelle in einem tabellarischen Container dar, sei es eine Tabelle oder ein Raster oder ein anderes Diagramm, das Datenbeziehungen darstellen muss. Um unterstützt zu werden, muss das `columnheader` in einem Element verschachtelt sein, das die [Rolle `row`](/de/docs/Web/Accessibility/ARIA/Roles/row_role) besitzt.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

Alle `columnheaders` sollten innerhalb einer [row](/de/docs/Web/Accessibility/ARIA/Roles/row_role) verschachtelt sein. Jede `row` sollte wiederum innerhalb eines [grid](/de/docs/Web/Accessibility/ARIA/Roles/grid_role), [table](/de/docs/Web/Accessibility/ARIA/Roles/table_role), oder [treegrid](/de/docs/Web/Accessibility/ARIA/Roles/row_role) verschachtelt sein, alternativ innerhalb einer [rowgroup](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role), die in einer der oben genannten Strukturen verschachtelt ist.

- [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-sort)
  - : Wird nur auf einen Spalten-Header angewendet, falls überhaupt, das `aria-sort`-Attribut gibt an, ob eine Spalte in den drei Werten `ascending` oder `descending` sortiert ist oder `none` für nicht sortiert.

### Tastaturinteraktionen

Diese Rolle unterstützt keine spezifische Tastaturinteraktion.

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

`Columnheaders` sollten einen Titel oder Header-Informationen für die Spalte enthalten.

Die erste Regel von ARIA lautet: Wenn ein natives HTML-Element oder Attribut die benötigte Semantik und das Verhalten hat, verwenden Sie es anstelle der Neuzuweisung eines Elements und fügen Sie eine ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzu, um es zugänglich zu machen. Es wird empfohlen, das native HTML-`<th>`-Element mit dem `scope`-Attribut `<th scope="col">` statt eines `<div>`- oder anderen Elements zu verwenden. Wenn Sie das semantische HTML-`<th scope="col">` verwenden, ist das Rollenattribut nicht erforderlich, kann jedoch als Sicherung hinzugefügt werden, um sicherzustellen, dass die Tabelle ihre Semantik behält, falls die Standardssemantik durch einen CSS-Displayproperty-Wert entfernt wird.

Das `aria-sort`-Attribut kann einem `<th scope="col">` hinzugefügt werden, auch wenn das ARIA-Rollenattribut nicht angegeben ist.

### HTML bevorzugen

`Columnheader` hat die gleiche Semantik wie `<th scope="col">`.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`table` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/table_role)
- [`grid` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/grid_role)
- [`treegrid` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/row_role)
- [`row` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/row_role)
- [`rowgroup` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role)
- [Das `<th>`-Element](/de/docs/Web/HTML/Element/th)
- [Das `<table>`-Element](/de/docs/Web/HTML/Element/table)
- [Das `<tr>`-Element](/de/docs/Web/HTML/Element/tr)
- [Das `<td>`-Element](/de/docs/Web/HTML/Element/td)
