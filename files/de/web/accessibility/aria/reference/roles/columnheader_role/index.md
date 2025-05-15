---
title: "ARIA: columnheader Rolle"
short-title: columnheader
slug: Web/Accessibility/ARIA/Reference/Roles/columnheader_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Der `columnheader`-Wert des ARIA-Rollenattributs identifiziert ein Element als eine Zelle in einer Zeile, die Header-Informationen für eine Spalte enthält, ähnlich dem nativen {{HTMLElement('th')}}-Element mit Spaltenbereich.

## Beschreibung

Ein Element mit `role="columnheader"`, das als Nachfahre eines Elements mit `role="row"` verschachtelt ist, ist eine statische tabellarische Struktur einer Spaltenkopfzelle in einem tabellarischen Container, sei es eine Tabelle oder ein Raster oder ein anderes Diagramm, das Datenbeziehungen zeigen muss. Damit es unterstützt wird, muss der `columnheader` in einem Element mit der [Rolle des `row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) verschachtelt sein.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

Alle Spaltenheader sollten innerhalb einer [Zeile](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) verschachtelt sein. Jede Zeile sollte wiederum innerhalb eines [Rasters](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), einer [Tabelle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) oder eines [Baumrasters](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) verschachtelt sein, alternativ innerhalb einer [Zeilengruppe](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role), die in einem der oben genannten verschachtelt ist.

- [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort)
  - : Wird nur auf einen Spaltenheader gleichzeitig angewendet, falls vorhanden, gibt das `aria-sort`-Attribut an, ob eine Spalte in den drei Werten `ascending` oder `descending` geordnet ist oder `none` für nicht sortiert.

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

Spaltenheader sollten einen Titel oder Header-Informationen für die Spalte enthalten.

Die erste Regel von ARIA ist: Wenn ein nativer HTML-Tag oder ein Attribut die gewünschte Semantik und das Verhalten hat, verwenden Sie es anstelle eines umgewidmeten Elements, dem Sie eine ARIA-Rolle, einen Status oder eine Eigenschaft hinzufügen, um es zugänglich zu machen. Es wird empfohlen, das native HTML-Element `<th>` mit dem gesetzten `scope`-Attribut `<th scope="col">` anstelle eines `<div>` oder eines anderen Elements zu verwenden. Wenn Sie das semantische HTML `<th scope="col">` verwenden, ist das Rollenattribut nicht erforderlich, kann aber als Sicherung aufgenommen werden, um sicherzustellen, dass die Tabelle ihre Semantik behält, sollten die Standardeinstellungen durch einen CSS-Display-Wert entfernt werden.

Das `aria-sort`-Attribut kann einem `<th scope="col">` hinzugefügt werden, auch wenn das ARIA-Rollenattribut nicht angegeben ist.

### Bevorzugen Sie HTML

Columnheader hat die gleiche Semantik wie `<th scope="col">`.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`table` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
- [`grid` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
- [`treegrid` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [`row` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [`rowgroup` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
- [Das `<th>` Element](/de/docs/Web/HTML/Reference/Elements/th)
- [Das `<table>` Element](/de/docs/Web/HTML/Reference/Elements/table)
- [Das `<tr>` Element](/de/docs/Web/HTML/Reference/Elements/tr)
- [Das `<td>` Element](/de/docs/Web/HTML/Reference/Elements/td)
