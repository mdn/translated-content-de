---
title: "ARIA: gridcell-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/gridcell_role
l10n:
  sourceCommit: a52689c74c6c89f45c54447bb148e54ed320db62
---

Die [gridcell-Rolle](https://www.w3.org/TR/wai-aria-1.1/#gridcell) wird verwendet, um eine Zelle in einem [Gitter](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) oder [Treegrid](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) zu erstellen. Sie soll die Funktionalität des HTML-Elements {{HTMLElement('td')}} für tabellenartige Gruppierungen von Informationen nachahmen.

```html
<div role="gridcell">Potato</div>
<div role="gridcell">Cabbage</div>
<div role="gridcell">Onion</div>
```

Elemente, die `role="gridcell"` zugewiesen haben, müssen das Kind eines Elements mit der Rolle [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) sein.

```html
<div role="row">
  <div role="gridcell">Jane</div>
  <div role="gridcell">Smith</div>
  <div role="gridcell">496-619-5098</div>
  …
</div>
```

Die erste Regel von ARIA ist: Wenn ein natives HTML-Element oder Attribut die erforderlichen Semantiken und Verhaltensweisen aufweist, verwenden Sie es, anstatt ein Element zweckentfremdet und ARIA hinzuzufügen. Verwenden Sie stattdessen das HTML-Element {{HTMLElement('td')}}:

```html
<td>Potato</td>
<td>Cabbage</td>
<td>Onion</td>
```

## Beschreibung

### Gridcells mit dynamisch hinzugefügten, versteckten oder entfernten Zeilen und Spalten

Jedes Element, dem die `role="gridcell"` zugewiesen wurde, sollte ARIA verwenden, um seine Reihenfolge in der tabellenartigen Gruppierung zu beschreiben, vorausgesetzt, die Tabelle, das Gitter oder das Treegrid hat die Fähigkeit, Zeilen und/oder Spalten dynamisch hinzuzufügen, zu verbergen oder zu entfernen.

Verwenden Sie [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex), um die Reihenfolge eines `gridcell` in der Liste der Spalten zu beschreiben, und [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex), um die Reihenfolge eines `gridcell` in der Liste der Zeilen zu beschreiben. Verwenden Sie [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount) und [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount) auf dem übergeordneten Element mit [`role="grid"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), um die Gesamtanzahl der Spalten oder Zeilen festzulegen.

Dieser Beispielcode demonstriert eine tabellenartige Gruppierung von Informationen, bei der die dritte und vierte Spalte entfernt wurden. [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) wird verwendet, um die Position der Zeilen zu beschreiben und ermöglicht es einer Person mit unterstützenden Technologien zu erkennen, dass bestimmte Zeilen entfernt wurden:

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

In Situationen, in denen die tabellenartige Gruppierung von Inhalten keine Informationen über die Spalten und Zeilen bereitstellt, müssen die Positionen der Gridcells programmatisch mit [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) beschrieben werden. Die [`id`](/de/docs/Web/HTML/Global_attributes/id)s, die für `aria-describedby` bereitgestellt werden, sollten den übergeordneten Elementen entsprechen, die als Zeilen und Spalten gedacht sind.

Indem auf die übergeordneten Elemente mit Rollen von [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role) oder [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) über `aria-describedby` verwiesen wird, kann unterstützende Technologie die Position und Beziehung des `gridcell`-Elements zum Rest der tabellenartigen Gruppierung von Inhalten verstehen.

### Interaktive Grids und Treegrids

#### Bearbeitbare Zellen

Sowohl `<td>`-Elemente als auch Elemente mit einer Rolle von `gridcell` können bearbeitbar gemacht werden, was eine Funktionalität ähnlich der Bearbeitung einer Tabelle nachahmt. Dies wird durch die Anwendung des HTML-Attributs [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) erreicht.

```html
<td contenteditable="true">Notes</td>

<div role="gridcell" contenteditable="true">Item cost</div>
```

`contenteditable` macht das Element, auf das es angewendet wird, über die <kbd>Tab</kbd>-Taste fokussierbar. Wenn ein Gridcell bedingt in einen Zustand versetzt wird, in dem Bearbeitung verboten ist, schalten Sie [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly) auf dem Gridcell-Element um.

#### Erweiterbare Zellen

In einem [Treegrid](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) können Gridcells erweiterbar gemacht werden, indem das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) umgeschaltet wird. Beachten Sie, dass, wenn dieses Attribut bereitgestellt wird, es nur für das einzelne Gridcell gilt.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- `grid`
  - : Kommuniziert, dass ein übergeordnetes Element eine Tabellen- oder Baumstruktur von Informationen ist.
- `row`
  - : Erforderlich, um zu kommunizieren, dass sich das `gridcell` in einer Zeile einer tabellenartigen Gruppierung von Informationen befindet.
- `columnheader`
  - : Gibt an, welches Element der zugehörige Spaltenheader ist.
- [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex)
  - : Identifiziert die Position eines Elements im Verhältnis zum Rest der Spalten der tabellenartigen Gruppierung von Informationen.
- `rowheader`
  - : Gibt an, welches Element der zugehörige Zeilenheader ist.
- [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex)
  - : Identifiziert die Position eines Elements im Verhältnis zum Rest der Zeilen der tabellenartigen Gruppierung von Informationen.

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

Die Unterstützung für `gridcell` und bestimmte `gridcell`-bezogene ARIA-Rollen und -Eigenschaften ist bei unterstützenden Technologien schlecht. Wenn möglich, verwenden Sie [HTML-Tabellen-Markup](/de/docs/Web/HTML/Element/table) stattdessen.

## Gute Praktiken

Die erste Regel von ARIA ist: Wenn ein natives HTML-Element oder Attribut die erforderlichen Semantiken und Verhaltensweisen aufweist, verwenden Sie es, anstatt ein Element zu zweckentfremden und eine ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen. Daher wird empfohlen, [natives HTML-Tabellen-Markup](/de/docs/Web/HTML/Element/table) zu verwenden, anstatt eine Tabelle mit ARIA und JavaScript nachzubilden.

## Siehe auch

- [Das Table-Element](/de/docs/Web/HTML/Element/table)
- [ARIA: Grid-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
- [Das Table-Row-Element](/de/docs/Web/HTML/Element/tr)
- [ARIA: row-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [ARIA: rowgroup-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
- [Das Table-Header-Element](/de/docs/Web/HTML/Element/th)
- [Das Table-Data-Cell-Element](/de/docs/Web/HTML/Element/td)
- [gridcell: Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria-1.1/#gridcell)
