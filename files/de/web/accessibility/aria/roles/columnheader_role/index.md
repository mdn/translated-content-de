---
title: "ARIA: columnheader Rolle"
slug: Web/Accessibility/ARIA/Roles/columnheader_role
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{AccessibilitySidebar}}

Der Wert `columnheader` des ARIA-Attributs role identifiziert ein Element als eine Zelle in einer Zeile, die Header-Informationen für eine Spalte enthält, ähnlich dem nativen {{HTMLElement('th')}}-Element mit Spaltenumfang.

## Beschreibung

Ein Element mit `role="columnheader"`, das als Nachkomme eines Elements mit `role="row"` geschachtelt ist, stellt eine statische tabellarische Struktur einer Spalten-Header-Zelle in einem tabellarischen Container dar, sei es eine Tabelle oder ein Raster oder ein anderes Diagramm, das Datenbeziehungen anzeigen muss. Um unterstützt zu werden, muss das `columnheader`-Element in ein Element mit der [Rolle `row`](/de/docs/Web/Accessibility/ARIA/Roles/row_role) geschachtelt sein.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

Alle Spalten-Header sollten innerhalb einer [Zeile](/de/docs/Web/Accessibility/ARIA/Roles/row_role) geschachtelt sein. Jede Zeile sollte wiederum innerhalb eines [Rasters](/de/docs/Web/Accessibility/ARIA/Roles/grid_role), einer [Tabelle](/de/docs/Web/Accessibility/ARIA/Roles/table_role) oder eines [Baumrasters](/de/docs/Web/Accessibility/ARIA/Roles/row_role) geschachtelt sein, alternativ innerhalb einer [Zeilengruppe](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role), die in eine der oben genannten geschachtelt ist.

- [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-sort)
  - : Wird nur auf einen Spalten-Header gleichzeitig angewendet, falls überhaupt vorhanden. Das `aria-sort`-Attribut gibt an, ob eine Spalte in den drei Werten `ascending` (aufsteigend) oder `descending` (absteigend) sortiert ist, oder `none` für nicht sortiert.

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

Spalten-Header sollten einen Titel oder Header-Informationen für die Spalte enthalten.

Die erste Regel von ARIA lautet: Wenn ein nativer HTML-Element oder -Attribut die benötigten Semantiken und Verhaltensweisen aufweist, verwenden Sie dieses, anstatt ein Element neu zu zweckentfremden und eine ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen. Es wird empfohlen, das native HTML `<th>`-Element mit dem `scope`-Attribut `<th scope="col">` zu verwenden, anstatt ein `<div>` oder ein anderes Element. Wenn Sie semantisches HTML `<th scope="col">` verwenden, ist das role-Attribut nicht erforderlich, kann aber als Absicherung hinzugefügt werden, um sicherzustellen, dass die Tabelle ihre Semantik beibehält, sollten die Standardsemantiken durch einen CSS-Display-Eigenschaftswert entfernt werden.

Das `aria-sort`-Attribut kann zu einem `<th scope="col">` hinzugefügt werden, selbst wenn das ARIA role-Attribut nicht angegeben ist.

### HTML Bevorzugen

Der Spalten-Header hat die gleichen Semantiken wie `<th scope="col">`.

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
