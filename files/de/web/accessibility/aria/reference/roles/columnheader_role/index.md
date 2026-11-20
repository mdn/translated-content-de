---
title: "ARIA: Rolle columnheader"
short-title: columnheader
slug: Web/Accessibility/ARIA/Reference/Roles/columnheader_role
l10n:
  sourceCommit: 5af4f6e12c119ea0d809b35b3fa3266a0fbe4ef4
---

Der Wert `columnheader` des ARIA-Rollenattributs kennzeichnet ein Element als Zelle in einer Zeile, die Überschrifteninformationen für eine Spalte enthält. Dies entspricht dem nativen {{HTMLElement('th')}}-Element mit Spaltenbezug.

## Beschreibung

Ein Element mit `role="columnheader"`, das einem Element mit `role="row"` untergeordnet ist, stellt eine statische Spaltenüberschrift in einer tabellarischen Struktur dar. Diese kann sich in einer Tabelle, einem Grid oder einer anderen Darstellung befinden, die Datenbeziehungen aufzeigt. Damit die Rolle unterstützt wird, muss der Spaltenkopf einem Element mit der [Rolle `row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) untergeordnet sein.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

Alle Spaltenköpfe sollten sich innerhalb einer [Zeile](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) befinden. Jede Zeile sollte wiederum einem [Grid](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), einer [Tabelle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) oder einem [Treegrid](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) untergeordnet sein. Alternativ kann sie sich innerhalb einer [Zeilengruppe](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role) befinden, die einem dieser Elemente untergeordnet ist.

- [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort)
  - : Das Attribut `aria-sort` wird jeweils höchstens auf einen Spaltenkopf angewendet. Es gibt an, ob eine Spalte in aufsteigender (`ascending`) oder absteigender (`descending`) Reihenfolge sortiert oder nicht sortiert (`none`) ist.

### Tastaturinteraktionen

Diese Rolle unterstützt keine spezifischen Tastaturinteraktionen.

### Erforderliche JavaScript-Funktionen

JavaScript ist nur erforderlich, wenn das Attribut `aria-sort` verwendet wird.

## Bewährte Verfahren

Spaltenköpfe sollten einen Titel oder Überschrifteninformationen für die Spalte enthalten.

Die erste Regel von ARIA lautet: Wenn ein natives HTML-Element oder -Attribut die benötigte Semantik und das benötigte Verhalten bietet, verwenden Sie es, statt einem Element eine andere Funktion zuzuweisen und es durch eine ARIA-Rolle, einen ARIA-Zustand oder eine ARIA-Eigenschaft zugänglich zu machen. Es wird empfohlen, das native HTML-Element `<th>` mit dem Attribut `scope` als `<th scope="col">` zu verwenden, statt eines `<div>`- oder anderen Elements. Wenn Sie das semantische HTML-Element `<th scope="col">` verwenden, ist das Rollenattribut nicht erforderlich. Es kann jedoch ergänzend angegeben werden, damit die Tabelle ihre Semantik behält, falls die Standardsemantik durch einen Wert der CSS-Eigenschaft `display` entfernt wird.

Das Attribut `aria-sort` kann einem `<th scope="col">` auch dann hinzugefügt werden, wenn kein ARIA-Rollenattribut angegeben ist.

### HTML bevorzugen

`columnheader` hat dieselbe Semantik wie `<th scope="col">`.

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

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Rolle `table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
- [Rolle `grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
- [Rolle `treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [Rolle `row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [Rolle `rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
- [Das Element `<th>`](/de/docs/Web/HTML/Reference/Elements/th)
- [Das Element `<table>`](/de/docs/Web/HTML/Reference/Elements/table)
- [Das Element `<tr>`](/de/docs/Web/HTML/Reference/Elements/tr)
- [Das Element `<td>`](/de/docs/Web/HTML/Reference/Elements/td)
