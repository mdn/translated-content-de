---
title: "ARIA: gridcell-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/gridcell_role
l10n:
  sourceCommit: ec98716dfe71c78db3f82ee3b1b9e7f68997fa19
---

Die [gridcell-Rolle](https://www.w3.org/TR/wai-aria-1.1/#gridcell) wird verwendet, um eine Zelle in einem [Gitter](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) oder [Baumgitter](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) zu erstellen. Sie soll die Funktionalität des HTML-{{HTMLElement('td')}}-Elements zur tabellenähnlichen Gruppierung von Informationen nachahmen.

```html
<div role="gridcell">Potato</div>
<div role="gridcell">Cabbage</div>
<div role="gridcell">Onion</div>
```

Elemente, denen `role="gridcell"` zugewiesen ist, müssen ein Kind eines Elements mit der Rolle [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) sein.

```html
<div role="row">
  <div role="gridcell">Jane</div>
  <div role="gridcell">Smith</div>
  <div role="gridcell">496-619-5098</div>
  …
</div>
```

Die erste Regel von ARIA besagt, dass Sie, wenn ein natives HTML-Element oder Attribut die benötigte Semantik und das Verhalten bietet, dieses anstelle der Neuzuweisung eines Elements und Hinzufügens von ARIA verwenden sollten. Verwenden Sie stattdessen das HTML-{{HTMLElement('td')}}-Element:

```html
<td>Potato</td>
<td>Cabbage</td>
<td>Onion</td>
```

## Beschreibung

### gridcells mit dynamisch hinzugefügten, versteckten oder entfernten Zeilen und Spalten

Jedes Element, dem `role="gridcell"` zugewiesen ist, sollte ARIA verwenden, um seine Reihenfolge in der tabellenähnlichen Gruppierung zu beschreiben, vorausgesetzt, das Gitter oder Baumgitter kann Zeilen und/oder Spalten dynamisch hinzufügen, verstecken oder entfernen.

Verwenden Sie [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex), um die Reihenfolge eines `gridcell` in der Liste der Spalten zu beschreiben, und [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex), um die Reihenfolge eines gridcell in der Liste der Zeilen zu beschreiben. Verwenden Sie [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount) und [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount) beim übergeordneten Element, dem die [`role="grid"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) zugewiesen ist, um die Gesamtzahl der Spalten oder Zeilen festzulegen.

Dieser Beispielcode demonstriert eine tabellenähnliche Gruppierung von Informationen, bei der die dritte und vierte Spalte entfernt wurden. [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) wird verwendet, um die Position der Zeilen zu beschreiben und ermöglicht es einer Person, die assistive Technologien verwendet, zu erkennen, dass bestimmte Zeilen entfernt wurden:

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

In Situationen, in denen die tabellenähnliche Gruppierung von Inhalten keine Informationen über die Spalten und Zeilen bietet, müssen gridcells ihre Position programmatisch beschrieben haben, indem [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) verwendet wird. Die für `aria-describedby` bereitgestellten [`id`](/de/docs/Web/HTML/Global_attributes/id)s sollten den übergeordneten Elementen entsprechen, die als Zeilen und Spalten gedacht sind.

Durch die Referenzierung der übergeordneten Elemente mit Rollen von [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role) oder [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role), die via `aria-describedby` angewendet werden, kann assistive Technologie die Position und Beziehung des `gridcell`-Elements zum Rest der tabellenähnlichen Gruppierung von Inhalten verstehen.

### Interaktive Gitter und Baumgitter

#### Bearbeitbare Zellen

Sowohl `<td>`-Elemente als auch Elemente mit der Rolle `gridcell` können bearbeitbar gemacht werden, was eine Funktionalität ähnlich der Bearbeitung einer Tabelle nachahmt. Dies geschieht durch Anwendung des HTML-Attributs [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable).

```html
<td contenteditable="true">Notes</td>

<div role="gridcell" contenteditable="true">Item cost</div>
```

`contenteditable` macht das Element, auf welches es angewendet wird, über die <kbd>Tab</kbd>-Taste fokussierbar. Wenn ein gridcell bedingt in einen Zustand versetzt wird, in dem Bearbeitung verboten ist, schalten Sie [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly) auf dem gridcell-Element um.

#### Erweiterbare Zellen

In einem [Baumgitter](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) können gridcells erweiterbar gemacht werden, indem das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) umgeschaltet wird. Beachten Sie, dass dieses Attribut, wenn es bereitgestellt wird, nur für die individuelle gridcell gilt.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- `grid`
  - : Kommuniziert, dass ein übergeordnetes Element eine tabellen- oder baumartige Gruppierung von Informationen darstellt.
- `row`
  - : Erforderlich, um zu kommunizieren, dass das `gridcell` Teil einer Zeile einer tabellenartigen Gruppierung von Informationen ist.
- `columnheader`
  - : Gibt an, welches Element der zugehörige Spaltenkopf ist.
- [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex)
  - : Identifiziert die Position eines Elements im Verhältnis zu den restlichen Spalten der tabellenartigen Gruppierung von Informationen.
- `rowheader`
  - : Gibt an, welches Element der zugehörige Zeilenkopf ist.
- [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex)
  - : Identifiziert die Position eines Elements im Verhältnis zu den restlichen Zeilen der tabellenartigen Gruppierung von Informationen.

### Beispiele

Das folgende Beispiel erstellt eine tabellenähnliche Gruppierung von Informationen:

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

## Barrierefreiheitsprobleme

Die Unterstützung für `gridcell` und bestimmte `gridcell`-bezogene ARIA-Rollen und -Eigenschaften ist bei unterstützenden Technologien schlecht. Wenn möglich, verwenden Sie [HTML-Tabellen-Markup](/de/docs/Web/HTML/Element/table) an deren Stelle.

## Bewährte Praktiken

Die erste Regel von ARIA lautet: Wenn ein natives HTML-Element oder Attribut die benötigte Semantik und das Verhalten bietet, verwenden Sie dieses, anstatt das Element neu zuzuweisen und eine ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen. Daher wird empfohlen, [nativen HTML-Tabellen-Markup](/de/docs/Web/HTML/Element/table) zu verwenden, anstatt die Form und Funktionalität einer Tabelle mit ARIA und JavaScript neu zu erstellen.

## Siehe auch

- [Das Table-Element](/de/docs/Web/HTML/Element/table)
- [ARIA: Grid-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
- [Grid Role - Maxability](https://www.maxability.co.in/wai-aria-overview/grid-role/)
- [Das Table Row-Element](/de/docs/Web/HTML/Element/tr)
- [ARIA: row-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [Row Role - Maxability](https://www.maxability.co.in/wai-aria-overview/row-role/)
- [aria-rowcount - Maxability](https://www.maxability.co.in/2018/09/07/aria-rowcount-property/)
- [ARIA: rowgroup-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
- [Rowgroup Role - Maxability](https://www.maxability.co.in/wai-aria-overview/rowgroup-role/)
- [Das Table Header-Element](/de/docs/Web/HTML/Element/th)
- [Columnheader - Maxability](https://www.maxability.co.in/wai-aria-overview/columnheader-role/)
- [aria-colcount - Maxability](https://www.maxability.co.in/2017/07/26/aria-colcount-property/)
- [Das Table Data Cell-Element](/de/docs/Web/HTML/Element/td)
- [gridcell: Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria-1.1/#gridcell)
- [Gridcell Role - Maxability](https://www.maxability.co.in/wai-aria-overview/gridcell-role/)
