---
title: "ARIA: gridcell-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/gridcell_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die [gridcell-Rolle](https://www.w3.org/TR/wai-aria-1.1/#gridcell) wird verwendet, um eine Zelle in einem [Grid](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) oder [Treegrid](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) zu erstellen. Sie soll die Funktionalität des HTML-Elements {{HTMLElement('td')}} nachahmen, um eine tabellenartige Gruppierung von Informationen zu ermöglichen.

```html
<div role="gridcell">Potato</div>
<div role="gridcell">Cabbage</div>
<div role="gridcell">Onion</div>
```

Elemente, die `role="gridcell"` zugewiesen bekommen, müssen Kind eines Elements mit der Rolle [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) sein.

```html
<div role="row">
  <div role="gridcell">Jane</div>
  <div role="gridcell">Smith</div>
  <div role="gridcell">496-619-5098</div>
  …
</div>
```

Die erste Regel von ARIA lautet, wenn ein natives HTML-Element oder -Attribut die gewünschten Semantiken und das Verhalten bietet, sollte es verwendet werden anstatt ein Element umzupurposieren und ARIA hinzuzufügen. Verwenden Sie stattdessen das HTML-Element {{HTMLElement('td')}}:

```html
<td>Potato</td>
<td>Cabbage</td>
<td>Onion</td>
```

## Beschreibung

### Gridcells mit dynamisch hinzugefügten, versteckten oder entfernten Zeilen und Spalten

Jedem Element mit `role="gridcell"` sollte ARIA verwenden, um seine Position in der tabellenartigen Gruppierung zu beschreiben, sofern die Tabelle, das Grid oder Treegrid die Möglichkeit hat, Zeilen und/oder Spalten dynamisch hinzuzufügen, zu verbergen oder zu entfernen.

Verwenden Sie [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex), um die Position einer `gridcell` in der Spaltenliste zu beschreiben, und [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) für die Position in der Zeilenliste. Verwenden Sie [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount) und [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount) auf dem Elternelement mit [`role="grid"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), um die Gesamtanzahl der Spalten oder Zeilen festzulegen.

Dieser Beispielcode zeigt eine tabellenartige Gruppierung von Informationen, bei der die dritte und vierte Spalte entfernt wurden. [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) wird verwendet, um die Position der Zeilen zu beschreiben und ermöglicht es einer Person, die unterstützende Technologie verwendet, zu schlussfolgern, dass bestimmte Zeilen entfernt wurden:

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

In Situationen, in denen die tabellenartige Gruppierung von Inhalten keine Informationen über die Spalten und Zeilen bietet, muss die Position der Gridcells programmatisch mit [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) beschrieben werden. Die für `aria-describedby` bereitgestellten [`id`](/de/docs/Web/HTML/Global_attributes/id)s sollten den beabsichtigten Elternteilen für die Reihen und Spalten entsprechen.

Durch die Referenzierung der Elternelemente mit den Rollen [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role) oder [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) via `aria-describedby` kann unterstützende Technologie die Position und Beziehung des `gridcell`-Elements zum Rest der tabellenartigen Gruppierung von Inhalten verstehen.

### Interaktive Grids und Treegrids

#### Editierbare Zellen

Sowohl `<td>`-Elemente als auch Elemente mit der Rolle `gridcell` können editierbar gemacht werden, was eine Funktionalität ähnlich dem Bearbeiten einer Tabellenkalkulation nachahmt. Dies wird durch Anwendung des HTML-Attributs [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) erreicht.

```html
<td contenteditable="true">Notes</td>

<div role="gridcell" contenteditable="true">Item cost</div>
```

`contenteditable` macht das Element, auf das es angewendet wird, über die <kbd>Tab</kbd>-Taste fokussierbar. Wenn eine Gridcell bedingt in einen Zustand versetzt wird, in dem Bearbeitung verboten ist, schalten Sie [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly) auf dem Gridcell-Element um.

#### Erweiterbare Zellen

In einem [Treegrid](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) können Gridcells erweiterbar gemacht werden, indem das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) umgeschaltet wird. Beachten Sie, dass, wenn dieses Attribut bereitgestellt wird, es nur für die einzelne Gridcell gilt.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- `grid`
  - : Kommuniziert, dass ein Elternelement eine Tabelle oder eine gruppierte Darstellung von Informationen darstellt.
- `row`
  - : Erforderlich, um zu kommunizieren, dass die `gridcell` Teil einer Reihe einer tabellenartigen Gruppierung von Informationen ist.
- `columnheader`
  - : Gibt an, welches Element der zugehörige Spaltenheader ist.
- [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex)
  - : Identifiziert die Position eines Elements in Bezug auf die restlichen Spalten der tabellenartigen Gruppierung von Informationen.
- `rowheader`
  - : Gibt an, welches Element der zugehörige Zeilenheader ist.
- [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex)
  - : Identifiziert die Position eines Elements in Bezug auf die restlichen Zeilen der tabellenartigen Gruppierung von Informationen.

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

Die Unterstützung für `gridcell` und bestimmte mit `gridcell` verbundene ARIA-Rollen und -Eigenschaften ist bei unterstützenden Technologien schlecht. Wenn möglich, verwenden Sie [HTML-Tabellen-Markup](/de/docs/Web/HTML/Element/table) stattdessen.

## Beste Praktiken

Die erste Regel von ARIA lautet: Wenn ein nativer HTML-Element oder -Attribut die benötigten Semantiken und das Verhalten bietet, verwenden Sie es anstatt ein Element zu repurposieren und eine ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen. Daher wird empfohlen, [natürliches HTML-Tabellen-Markup](/de/docs/Web/HTML/Element/table) zu verwenden, anstatt das Formular und die Funktionalität einer Tabelle mit ARIA und JavaScript nachzubilden.

## Siehe auch

- [Das Table-Element](/de/docs/Web/HTML/Element/table)
- [ARIA: Grid-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
- [Grid Rolle - Maxability](https://www.maxability.co.in/wai-aria-overview/grid-role/)
- [Das Table Row-Element](/de/docs/Web/HTML/Element/tr)
- [ARIA: row Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [Row Rolle - Maxability](https://www.maxability.co.in/wai-aria-overview/row-role/)
- [aria-rowcount - Maxability](https://www.maxability.co.in/2018/09/07/aria-rowcount-property/)
- [ARIA: rowgroup Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
- [Rowgroup Rolle - Maxability](https://www.maxability.co.in/wai-aria-overview/rowgroup-role/)
- [Das Table Header-Element](/de/docs/Web/HTML/Element/th)
- [Columnheader - Maxability](https://www.maxability.co.in/wai-aria-overview/columnheader-role/)
- [aria-colcount - Maxability](https://www.maxability.co.in/2017/07/26/aria-colcount-property/)
- [Das Table Data Cell-Element](/de/docs/Web/HTML/Element/td)
- [gridcell: Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria-1.1/#gridcell)
- [Gridcell Rolle - Maxability](https://www.maxability.co.in/wai-aria-overview/gridcell-role/)
