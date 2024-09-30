---
title: "ARIA: columnheader-Rolle"
slug: Web/Accessibility/ARIA/Roles/columnheader_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Der `columnheader`-Wert des ARIA-Rollenattributs identifiziert ein Element als eine Zelle in einer Reihe, die Header-Informationen für eine Spalte enthält, ähnlich dem nativen {{HTMLElement('th')}}-Element mit Spaltenbereich.

## Beschreibung

Ein Element mit `role="columnheader"`, das als Nachfahre eines Elements mit `role="row"` verschachtelt ist, ist eine statische tabellarische Struktur einer Spalten-Headerzelle in einem tabellarischen Container, entweder eine Tabelle oder ein Raster oder ein anderes Diagramm, das Datenbeziehungen anzeigen muss. Um unterstützt zu werden, muss das `columnheader` in einem Element mit der [Rolle `row`](/de/docs/Web/Accessibility/ARIA/Roles/row_role) verschachtelt sein.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

Alle `columnheader` sollten innerhalb einer [row](/de/docs/Web/Accessibility/ARIA/Roles/row_role) verschachtelt sein. Jede Reihe sollte wiederum innerhalb eines [grid](/de/docs/Web/Accessibility/ARIA/Roles/grid_role), [table](/de/docs/Web/Accessibility/ARIA/Roles/table_role) oder [treegrid](/de/docs/Web/Accessibility/ARIA/Roles/row_role) verschachtelt sein, alternativ innerhalb einer [rowgroup](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role) verschachtelt in einem der oben genannten.

- [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-sort)
  - : Wird nur auf einen Spaltenheader gleichzeitig angewendet, falls überhaupt. Das `aria-sort`-Attribut gibt an, ob eine Spalte in den drei Werten `ascending`, `descending` oder `none` (nicht sortiert) sortiert ist.

### Tastaturinteraktionen

Diese Rolle unterstützt keine spezifischen Tastaturinteraktionen.

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

`Columnheader` sollten einen Titel oder Header-Informationen für die Spalte enthalten.

Die erste Regel von ARIA lautet: Wenn ein nativer HTML-Element oder ein Attribut die erforderlichen Semantik und das Verhalten hat, verwenden Sie dieses anstelle der Umfunktionierung eines Elements und fügen Sie eine ARIA-Rolle, einen Status oder eine Eigenschaft hinzu, um es zugänglich zu machen. Es wird empfohlen, das native HTML-Element `<th>` mit dem `scope`-Attribut `<th scope="col">` anstelle eines `<div>` oder eines anderen Elements zu verwenden. Wenn Sie das semantische HTML `<th scope="col">` verwenden, ist das Rollenattribut nicht erforderlich, kann jedoch als Backup eingeschlossen werden, um sicherzustellen, dass die Tabelle ihre Semantik beibehält, falls die Standard-Semantik durch einen CSS-Display-Eigenschaftswert entfernt wird.

Das `aria-sort`-Attribut kann einem `<th scope="col">` hinzugefügt werden, auch wenn das ARIA-Rollenattribut nicht angegeben ist.

### Bevorzugen Sie HTML

`Columnheader` hat die gleichen Semantiken wie `<th scope="col">`.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`table`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/table_role)
- [`grid`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/grid_role)
- [`treegrid`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/row_role)
- [`row`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/row_role)
- [`rowgroup`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role)
- [Das `<th>`-Element](/de/docs/Web/HTML/Element/th)
- [Das `<table>`-Element](/de/docs/Web/HTML/Element/table)
- [Das `<tr>`-Element](/de/docs/Web/HTML/Element/tr)
- [Das `<td>`-Element](/de/docs/Web/HTML/Element/td)
