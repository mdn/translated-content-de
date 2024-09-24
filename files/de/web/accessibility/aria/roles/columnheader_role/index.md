---
title: "ARIA: columnheader Rolle"
slug: Web/Accessibility/ARIA/Roles/columnheader_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Der `columnheader` Wert des ARIA-Rollenattributs kennzeichnet ein Element als eine Zelle in einer Reihe, die Header-Informationen für eine Spalte enthält, ähnlich dem nativen {{HTMLElement('th')}}-Element mit Spaltenbereich.

## Beschreibung

Ein Element mit `role="columnheader"`, das als Nachfahre eines Elements mit `role="row"` verschachtelt ist, stellt eine statische tabellarische Struktur einer Spaltenheaderzelle in einem tabellarischen Container dar, entweder eine Tabelle oder ein Raster oder ein anderes Diagramm, das Datenbeziehungen zeigen muss. Um unterstützt zu werden, muss der `columnheader` in ein Element mit der [Rolle `row`](/de/docs/Web/Accessibility/ARIA/Roles/row_role) verschachtelt werden.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

Alle `columnheaders` sollten innerhalb einer [row](/de/docs/Web/Accessibility/ARIA/Roles/row_role) verschachtelt sein. Jede `row` sollte wiederum innerhalb eines [grid](/de/docs/Web/Accessibility/ARIA/Roles/grid_role), [table](/de/docs/Web/Accessibility/ARIA/Roles/table_role) oder [treegrid](/de/docs/Web/Accessibility/ARIA/Roles/row_role) oder alternativ innerhalb einer [rowgroup](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role) verschachtelt sein, die in einem der oben genannten enthalten ist.

- [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-sort)
  - : Wird nur auf einen Spaltenheader gleichzeitig angewendet, sofern vorhanden. Das `aria-sort`-Attribut zeigt an, ob eine Spalte in den drei Werten `ascending` oder `descending` sortiert ist, oder `none` für nicht sortiert.

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

## Beste Praktiken

Spaltenheader sollten einen Titel oder Header-Informationen für die Spalte enthalten.

Die erste Regel von ARIA lautet: Wenn ein natives HTML-Element oder -Attribut die benötigten Semantiken und das Verhalten bietet, sollten Sie es anstelle der Umwidmung eines Elements verwenden und eine ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzufügen, um es zugänglich zu machen. Es wird empfohlen, das native `<th>`-Element mit dem `scope`-Attribut `<th scope="col">` zu verwenden, anstatt ein `<div>` oder ein anderes Element zu verwenden. Wenn Sie das semantische HTML `<th scope="col">` verwenden, ist das Rollenattribut nicht erforderlich, kann jedoch als Backup hinzugefügt werden, um sicherzustellen, dass die Tabelle ihre Semantiken beibehält, falls die Standards durch einen CSS-Display-Eigenschaftswert entfernt werden.

Das `aria-sort`-Attribut kann einem `<th scope="col">` hinzugefügt werden, auch wenn das ARIA-Rollenattribut nicht angegeben ist.

### HTML bevorzugen

Der `columnheader` hat die gleichen Semantiken wie `<th scope="col">`.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`table` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/table_role)
- [`grid` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/grid_role)
- [`treegrid` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/row_role)
- [`row` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/row_role)
- [`rowgroup` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role)
- [Das `<th>` Element](/de/docs/Web/HTML/Element/th)
- [Das `<table>` Element](/de/docs/Web/HTML/Element/table)
- [Das `<tr>` Element](/de/docs/Web/HTML/Element/tr)
- [Das `<td>` Element](/de/docs/Web/HTML/Element/td)
