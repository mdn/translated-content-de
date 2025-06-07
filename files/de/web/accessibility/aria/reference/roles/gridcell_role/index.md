---
title: "ARIA: Rolle gridcell"
short-title: gridcell
slug: Web/Accessibility/ARIA/Reference/Roles/gridcell_role
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

Die `gridcell`-Rolle wird verwendet, um eine Zelle in einem [grid](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) oder [treegrid](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) zu erstellen. Sie ist dafür gedacht, die Funktionalität des HTML-Elements {{HTMLElement('td')}} zur tabellenartigen Gruppierung von Informationen nachzuahmen.

```html
<div role="gridcell">Potato</div>
<div role="gridcell">Cabbage</div>
<div role="gridcell">Onion</div>
```

Elemente, die `role="gridcell"` zugewiesen haben, müssen Kind eines Elements mit der Rolle [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) sein.

```html
<div role="row">
  <div role="gridcell">Jane</div>
  <div role="gridcell">Smith</div>
  <div role="gridcell">496-619-5098</div>
  …
</div>
```

Die erste Regel von ARIA besagt, dass, wenn ein natives HTML-Element oder Attribut die erforderliche Semantik und das Verhalten bietet, es verwendet werden sollte, anstatt ein Element umzufunktionieren und ARIA hinzuzufügen. Verwenden Sie stattdessen das HTML-Element {{HTMLElement('td')}}:

```html
<td>Potato</td>
<td>Cabbage</td>
<td>Onion</td>
```

## Beschreibung

### Gridcells mit dynamisch hinzugefügten, ausgeblendeten oder entfernten Zeilen und Spalten

Jedes Element, dem `role="gridcell"` zugewiesen ist, sollte ARIA verwenden, um seine Position in der tabellenartigen Gruppierung zu beschreiben, vorausgesetzt, das Table, Grid oder Treegrid hat die Möglichkeit, Zeilen und/oder Spalten dynamisch hinzuzufügen, auszublenden oder zu entfernen.

Verwenden Sie [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex), um die Reihenfolge einer `gridcell` in der Liste der Spalten zu beschreiben, und [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex), um die Reihenfolge einer `gridcell` in der Liste der Zeilen zu beschreiben. Verwenden Sie [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount) und [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount) auf dem übergeordneten Element mit [`role="grid"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), um die Gesamtzahl der Spalten oder Zeilen festzulegen.

Dieses Beispiel demonstriert eine tabellenartige Gruppierung von Informationen, bei der die dritte und vierte Spalte entfernt wurden. [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) wird verwendet, um die Position der Zeilen zu beschreiben, und ermöglicht es einer Person, die unterstützende Technologien verwendet, zu erkennen, dass bestimmte Zeilen entfernt wurden:

```html
<div role="grid" aria-colcount="6">
  <div role="rowgroup">
    <div role="row">
      <div role="columnheader" aria-colindex="1">First name</div>
      <div role="columnheader" aria-colindex="2">Last name</div>
      <div role="columnheader" aria-colindex="5">City</div>
      <div role="columnheader" aria-colindex="6">Zip</div>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row">
      <div role="gridcell" aria-colindex="1">Debra</div>
      <div role="gridcell" aria-colindex="2">Burks</div>
      <div role="gridcell" aria-colindex="5">New York</div>
      <div role="gridcell" aria-colindex="6">14127</div>
    </div>
  </div>
  …
</div>
```

### Beschreibung der Position von Gridcells, wenn die Gesamtstruktur unbekannt ist

In Situationen, in denen die tabellenartige Gruppierung von Inhalten keine Informationen über die Spalten und Zeilen liefert, müssen Gridcells ihre Position programmatisch mit [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) beschrieben haben. Die für `aria-describedby` bereitgestellten [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)s sollten den übergeordneten Elementen entsprechen, die als Zeilen und Spalten gedacht sind.

Durch die Referenzierung der übergeordneten Elemente mit Rollen von [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role) oder [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) über `aria-describedby` können unterstützende Technologien die Position und die Beziehung des `gridcell`-Elements zum Rest der tabellenartigen Gruppierung von Inhalten verstehen.

### Interaktive Grids und Treegrids

#### Bearbeitbare Zellen

Sowohl `<td>`-Elemente als auch Elemente mit der Rolle `gridcell` können bearbeitbar gemacht werden, um eine Funktionalität ähnlich der Bearbeitung einer Tabelle zu ermöglichen. Dies geschieht durch Anwenden des HTML-Attributs [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable).

```html
<td contenteditable="true">Notes</td>

<div role="gridcell" contenteditable="true">Item cost</div>
```

`contenteditable` macht das Element, auf das es angewendet wird, über die <kbd>Tab</kbd>-Taste fokussierbar. Wenn ein Gridcell bedingt in einen Zustand gebracht wird, in dem die Bearbeitung untersagt ist, sollte [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly) auf dem Gridcell-Element umgeschaltet werden.

#### Erweiterbare Zellen

In einem [treegrid](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) können Gridcells durch Umschalten des Attributs [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) erweiterbar gemacht werden. Beachten Sie, dass, wenn dieses Attribut bereitgestellt wird, es nur für die individuelle Gridcell gilt.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- `grid`
  - : Kommuniziert, dass ein übergeordnetes Element eine Tabelle oder tree-artige Gruppierung von Informationen ist.
- `row`
  - : Notwendig, um zu kommunizieren, dass das `gridcell` Teil einer Zeile einer tabellenartigen Gruppierung von Informationen ist.
- `columnheader`
  - : Gibt an, welches Element die zugehörige Spaltenüberschrift ist.
- [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex)
  - : Identifiziert die Position eines Elements in Bezug auf die Spalten der restlichen tabellenartigen Gruppierung von Informationen.
- `rowheader`
  - : Gibt an, welches Element die zugehörige Zeilenüberschrift ist.
- [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex)
  - : Identifiziert die Position eines Elements in Bezug auf die Zeilen der restlichen tabellenartigen Gruppierung von Informationen.

### Beispiele

Das folgende Beispiel erstellt eine tabellenartige Gruppierung von Informationen:

```html
<h3 id="table-title">Jovian gas giant planets</h3>
<div role="grid" aria-describedby="table-title">
  <div role="rowgroup">
    <div role="row">
      <div role="columnheader">Name</div>
      <div role="columnheader">Diameter (km)</div>
      <div role="columnheader">Length of day (hours)</div>
      <div role="columnheader">Distance from Sun (10<sup>6</sup>km)</div>
      <div role="columnheader">Number of moons</div>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row">
      <div role="gridcell">Jupiter</div>
      <div role="gridcell">142,984</div>
      <div role="gridcell">9.9</div>
      <div role="gridcell">778.6</div>
      <div role="gridcell">67</div>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row">
      <div role="gridcell">Saturn</div>
      <div role="gridcell">120,536</div>
      <div role="gridcell">10.7</div>
      <div role="gridcell">1433.5</div>
      <div role="gridcell">62</div>
    </div>
  </div>
</div>
```

## Zugänglichkeitsbedenken

Die Unterstützung für `gridcell` und bestimmte `gridcell`-bezogene ARIA-Rollen und -Eigenschaften ist bei unterstützenden Technologien schlecht. Wenn möglich, sollten [HTML-Tabellen-Markups](/de/docs/Web/HTML/Reference/Elements/table) stattdessen verwendet werden.

## Best Practices

Die erste Regel von ARIA lautet: Wenn ein natives HTML-Element oder Attribut die erforderliche Semantik und das Verhalten bietet, verwenden Sie es, anstatt ein Element umzufunktionieren und eine ARIA-Rolle, -Zustand oder -Eigenschaft hinzuzufügen, um es zugänglich zu machen. Daher wird empfohlen, [native HTML-Tabellen-Markups](/de/docs/Web/HTML/Reference/Elements/table) zu verwenden, anstatt die Form und Funktionalität einer Tabelle mit ARIA und JavaScript nachzubilden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Das Table-Element](/de/docs/Web/HTML/Reference/Elements/table)
- [ARIA: Grid-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
- [Das Table-Zeilen-Element](/de/docs/Web/HTML/Reference/Elements/tr)
- [ARIA: row-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [ARIA: rowgroup-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
- [Das Table-Header-Element](/de/docs/Web/HTML/Reference/Elements/th)
- [Das Table-Datenzellen-Element](/de/docs/Web/HTML/Reference/Elements/td)
