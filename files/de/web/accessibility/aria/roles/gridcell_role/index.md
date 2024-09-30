---
title: "ARIA: gridcell Rolle"
slug: Web/Accessibility/ARIA/Roles/gridcell_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die [gridcell Rolle](https://www.w3.org/TR/wai-aria-1.1/#gridcell) wird verwendet, um eine Zelle in einem [grid](/de/docs/Web/Accessibility/ARIA/Roles/grid_role) oder [treegrid](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role) zu erstellen. Sie soll die Funktionalität des HTML-Elements {{HTMLElement('td')}} für tabellenartige Gruppierungen von Informationen nachahmen.

```html
<div role="gridcell">Potato</div>
<div role="gridcell">Cabbage</div>
<div role="gridcell">Onion</div>
```

Elemente, die `role="gridcell"` haben, müssen das Kind eines Elements mit der Rolle [`row`](/de/docs/Web/Accessibility/ARIA/Roles/row_role) sein.

```html
<div role="row">
  <div role="gridcell">Jane</div>
  <div role="gridcell">Smith</div>
  <div role="gridcell">496-619-5098</div>
  …
</div>
```

Die erste Regel von ARIA lautet, wenn ein nativer HTML-Element oder -Attribut die gewünschte Semantik und das Verhalten bietet, verwenden Sie es anstelle der Zweckentfremdung eines Elements und der Hinzufügung von ARIA. Verwenden Sie stattdessen das HTML-Element {{HTMLElement('td')}}:

```html
<td>Potato</td>
<td>Cabbage</td>
<td>Onion</td>
```

## Beschreibung

### gridcells mit dynamisch hinzugefügten, versteckten oder entfernten Zeilen und Spalten

Jedem Element mit einer Rolle `gridcell` sollte mithilfe von ARIA seine Position in der tabellenartigen Gruppierung beschrieben werden, sofern die Tabelle, das Raster oder das Baumraster die Möglichkeit bietet, Zeilen und/oder Spalten dynamisch hinzuzufügen, zu verstecken oder zu entfernen.

Verwenden Sie [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex), um die Position eines `gridcell` in der Liste der Spalten zu beschreiben, und [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex), um die Position eines `gridcell` in der Liste der Zeilen zu beschreiben. Verwenden Sie [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colcount) und [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount) am Elternelement mit [`role="grid"`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role), um die Gesamtanzahl der Spalten oder Zeilen festzulegen.

Dieser Code zeigt eine tabellenartige Gruppierung von Informationen, bei der die dritte und vierte Spalte entfernt wurden. [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) wird verwendet, um die Position der Zeilen zu beschreiben und ermöglicht es einer Person mit unterstützenden Technologien zu schließen, dass bestimmte Zeilen entfernt wurden:

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

### Beschreibung der Position von gridcells, wenn die Gesamtstruktur unbekannt ist

In Situationen, in denen die tabellenartige Gruppierung von Inhalten keine Informationen über die Spalten und Zeilen bereitstellt, müssen gridcells ihre Position programmgesteuert mit [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) beschrieben haben. Die [`id`](/de/docs/Web/HTML/Global_attributes/id)s, die für `aria-describedby` bereitgestellt werden, sollten den Elternelementen entsprechen, die als Zeilen und Spalten gedacht sind.

Indem die Elternelemente mit Rollen von [`rowheader`](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role) oder [`columnheader`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role) über `aria-describedby` referenziert werden, kann unterstützende Technologie die Position und Beziehung des `gridcell`-Elements zur restlichen tabellenartigen Gruppierung von Inhalten erfassen.

### Interaktive Grids und Treegrids

#### Editierbare Zellen

Sowohl `<td>`-Elemente als auch Elemente mit einer Rolle von `gridcell` können bearbeitbar gemacht werden, was eine Funktionalität ähnlich dem Bearbeiten einer Tabelle nachahmt. Dies geschieht durch Anwenden des HTML-Attributs [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable).

```html
<td contenteditable="true">Notes</td>

<div role="gridcell" contenteditable="true">Item cost</div>
```

`contenteditable` wird das Element, auf das es angewendet wird, über die <kbd>Tab</kbd>-Taste fokussierbar machen. Wenn ein gridcell bedingt in einen Zustand umgeschaltet wird, in dem das Bearbeiten verboten ist, schalten Sie [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-readonly) am gridcell-Element um.

#### Erweiterbare Zellen

In einem [treegrid](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role) können gridcells erweiterbar gemacht werden, indem das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) umgeschaltet wird. Beachten Sie, dass, wenn dieses Attribut angegeben ist, es nur auf das einzelne gridcell zutrifft.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- `grid`
  - : Kommuniziert, dass ein Elternelement eine Tabellen- oder Baumstrukturierung von Informationen ist.
- `row`
  - : Erforderlich, um zu kommunizieren, dass das `gridcell` Teil einer Zeile einer tabellenartigen Gruppierung von Informationen ist.
- `columnheader`
  - : Gibt an, welches Element der zugehörige Spaltenheader ist.
- [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex)
  - : Identifiziert die Position eines Elements in Bezug auf die restlichen Spalten der tabellenartigen Gruppierung von Informationen.
- `rowheader`
  - : Gibt an, welches Element der zugehörige Zeilenheader ist.
- [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex)
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

## Barrierefreiheitsbedenken

Die Unterstützung für `gridcell` und bestimmte `gridcell` bezogene ARIA-Rollen und -Eigenschaften hat eine schlechte Unterstützung durch unterstützende Technologien. Wenn möglich, verwenden Sie [HTML-Tabellen-Markup](/de/docs/Web/HTML/Element/table) an ihrer Stelle.

## Beste Praktiken

Die erste Regel von ARIA lautet: wenn ein nativer HTML-Element oder -Attribut die gewünschte Semantik und das Verhalten bietet, verwenden Sie es anstelle der Zweckentfremdung eines Elements und der Hinzufügung einer ARIA-Rolle, eines Zustands oder einer Eigenschaft, um es zugänglich zu machen. Daher wird empfohlen, [native HTML-Tabellen-Markup](/de/docs/Web/HTML/Element/table) zu verwenden, anstatt das Formular und die Funktionalität einer Tabelle mit ARIA und JavaScript neu zu erstellen.

## Siehe auch

- [Das Tabellenelement](/de/docs/Web/HTML/Element/table)
- [ARIA: Grid Rolle](/de/docs/Web/Accessibility/ARIA/Roles/grid_role)
- [Grid Rolle - Maxability](https://www.maxability.co.in/wai-aria-overview/grid-role/)
- [Das Tabellenzeilen-Element](/de/docs/Web/HTML/Element/tr)
- [ARIA: row Rolle](/de/docs/Web/Accessibility/ARIA/Roles/row_role)
- [Row Rolle - Maxability](https://www.maxability.co.in/wai-aria-overview/row-role/)
- [aria-rowcount - Maxability](https://www.maxability.co.in/2018/09/07/aria-rowcount-property/)
- [ARIA: rowgroup Rolle](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role)
- [Rowgroup Rolle - Maxability](https://www.maxability.co.in/wai-aria-overview/rowgroup-role/)
- [Das Tabellenkopf-Element](/de/docs/Web/HTML/Element/th)
- [Columnheader - Maxability](https://www.maxability.co.in/wai-aria-overview/columnheader-role/)
- [aria-colcount - Maxability](https://www.maxability.co.in/2017/07/26/aria-colcount-property/)
- [Das Tabellen-Datenzellen-Element](/de/docs/Web/HTML/Element/td)
- [gridcell: Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria-1.1/#gridcell)
- [Gridcell Rolle - Maxability](https://www.maxability.co.in/wai-aria-overview/gridcell-role/)
