---
title: "ARIA: Rolle `columnheader`"
slug: Web/Accessibility/ARIA/Reference/Roles/columnheader_role
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Der Wert `columnheader` des ARIA-Attributs role identifiziert ein Element als eine Zelle in einer Zeile, die Kopfzeileninformationen für eine Spalte enthält, ähnlich dem nativen {{HTMLElement('th')}}-Element mit Spaltenbereich.

## Beschreibung

Ein Element mit `role="columnheader"`, das als Nachfolger eines Elements mit `role="row"` verschachtelt ist, stellt eine statische tabellarische Struktur einer Spaltenkopfzelle in einem tabellarischen Container dar, sei es eine Tabelle oder ein Raster oder andere Diagramme, die Datenbeziehungen anzeigen müssen. Um unterstützt zu werden, muss der columnheader in einem Element mit der [Rolle `row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) verschachtelt sein.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

Alle Spaltenköpfe sollten innerhalb einer [Zeile](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) verschachtelt sein. Jede Zeile sollte wiederum innerhalb eines [Grids](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), [Tables](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) oder [Treegrids](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) verschachtelt sein, alternativ innerhalb einer [rowgroup](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role), die in eines der oben genannten verschachtelt ist.

- [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort)
  - : Wird nur auf einen Spaltenkopf gleichzeitig angewendet, falls vorhanden. Das `aria-sort`-Attribut gibt an, ob eine Spalte in den drei Werten `ascending` oder `descending` oder `none` für nicht sortiert sortiert ist.

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

Spaltenköpfe sollten einen Titel oder Kopfzeileninformationen für die Spalte enthalten.

Die erste Regel von ARIA lautet: Wenn ein natives HTML-Element oder Attribut über die Semantik und das Verhalten verfügt, die Sie benötigen, verwenden Sie es, anstatt ein Element umzufunktionieren und eine ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen. Es wird empfohlen, das native HTML-Element `<th>` mit dem Attribut `scope` auf `<th scope="col">` anstelle eines `<div>` oder eines anderen Elements zu verwenden. Wenn Sie die Semantik von HTML's `<th scope="col">` verwenden, ist das role-Attribut nicht erforderlich, kann jedoch als Backup einbezogen werden, um sicherzustellen, dass die Tabelle ihre Semantik beibehält, falls die Standardsprache mit einem CSS-Display-Eigenschaftswert entfernt wird.

Das `aria-sort`-Attribut kann einem `<th scope="col">` hinzugefügt werden, auch wenn das ARIA role-Attribut nicht angegeben ist.

### HTML bevorzugen

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
