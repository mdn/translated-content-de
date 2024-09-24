---
title: "ARIA: Rolle gridcell"
slug: Web/Accessibility/ARIA/Roles/gridcell_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die [Rolle gridcell](https://www.w3.org/TR/wai-aria-1.1/#gridcell) wird verwendet, um eine Zelle in einem [Raster](/de/docs/Web/Accessibility/ARIA/Roles/grid_role) oder einem [Baumraster](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role) zu erstellen. Sie soll die Funktionalität des HTML {{HTMLElement('td')}}-Elements für tabellenartige Gruppierungen von Informationen nachahmen.

```html
<div role="gridcell">Potato</div>
<div role="gridcell">Cabbage</div>
<div role="gridcell">Onion</div>
```

Elemente, auf die `role="gridcell"` angewendet wird, müssen ein Kind von einem Element mit der Rolle [`row`](/de/docs/Web/Accessibility/ARIA/Roles/row_role) sein.

```html
<div role="row">
  <div role="gridcell">Jane</div>
  <div role="gridcell">Smith</div>
  <div role="gridcell">496-619-5098</div>
  …
</div>
```

Die erste Regel von ARIA ist: Wenn ein natives HTML-Element oder Attribut die benötigten Semantiken und Verhaltensweisen bietet, verwenden Sie es anstelle eines umfunktionierten Elements und der Hinzufügung von ARIA. Verwenden Sie stattdessen das HTML {{HTMLElement('td')}}-Element:

```html
<td>Potato</td>
<td>Cabbage</td>
<td>Onion</td>
```

## Beschreibung

### Gridcells mit dynamisch hinzugefügten, ausgeblendeten oder entfernten Zeilen und Spalten

Jedes Element, auf das `role="gridcell"` angewendet wird, sollte ARIA verwenden, um seine Reihenfolge in der tabellenartigen Gruppierung zu beschreiben, vorausgesetzt, das Raster oder Baumraster ermöglicht es, Zeilen und/oder Spalten dynamisch hinzuzufügen, auszublenden oder zu entfernen.

Verwenden Sie [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex), um die Reihenfolge eines `gridcell` in der Liste der Spalten zu beschreiben und [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex), um die Reihenfolge eines gridcell in der Liste der Zeilen zu beschreiben. Verwenden Sie [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colcount) und [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount) auf dem übergeordneten Element mit [`role="grid"`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role), um die Gesamtanzahl der Spalten oder Zeilen festzulegen.

Dieser Beispielcode zeigt eine tabellenartige Gruppierung von Informationen, bei der dritte und vierte Spalten entfernt wurden. [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) wird verwendet, um die Position der Zeilen zu beschreiben und ermöglicht es Personen, die Hilfstechnologien benutzen, zu erkennen, dass bestimmte Zeilen entfernt wurden:

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

In Situationen, in denen die tabellenartige Gruppierung von Inhalten keine Informationen über die Spalten und Zeilen liefert, müssen Gridcells ihre Position programmatisch mit [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) beschrieben haben. Die für `aria-describedby` bereitgestellten [`id`](/de/docs/Web/HTML/Global_attributes/id)s sollten den übergeordneten Elementen entsprechen, die als Zeilen und Spalten gedacht sind.

Durch das Verweisen auf die übergeordneten Elemente mit Rollen von [`rowheader`](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role) oder [`columnheader`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role) über `aria-describedby` ermöglicht es Hilfstechnologien, die Position und Beziehung des `gridcell`-Elements zum Rest der tabellenartigen Gruppierung von Inhalten zu verstehen.

### Interaktive Grids und Baumraster

#### Bearbeitbare Zellen

Sowohl `<td>`-Elemente als auch Elemente mit der Rolle `gridcell` können bearbeitbar gemacht werden, um eine Funktionalität ähnlich der Bearbeitung einer Tabellenkalkulation nachzuahmen. Dies wird durch Anwendung des HTML-Attributs [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) erreicht.

```html
<td contenteditable="true">Notes</td>

<div role="gridcell" contenteditable="true">Item cost</div>
```

Mit `contenteditable` wird das darauf angewendete Element über die <kbd>Tab</kbd>-Taste fokussierbar. Wenn ein Gridcell in einen Zustand versetzt wird, in dem das Bearbeiten untersagt ist, schalten Sie [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-readonly) auf dem Gridcell-Element um.

#### Erweiterbare Zellen

In einem [Baumraster](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role) können Gridcells erweiterbar gemacht werden, indem das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) umgeschaltet wird. Beachten Sie, dass dieses Attribut, wenn es bereitgestellt wird, nur für das einzelne Gridcell gilt.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- `grid`
  - : Kommuniziert, dass ein übergeordnetes Element eine Tabellen- oder baumartige Gruppierung von Informationen ist.
- `row`
  - : Muss angegeben werden, dass das `gridcell` Teil einer Zeile einer tabellenartigen Gruppierung von Informationen ist.
- `columnheader`
  - : Gibt an, welches Element der zugehörige Spaltenkopf ist.
- [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex)
  - : Bestimmt die Position eines Elements im Verhältnis zu den Spalten der restlichen tabellenartigen Gruppierung von Informationen.
- `rowheader`
  - : Gibt an, welches Element der zugehörige Zeilenkopf ist.
- [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex)
  - : Bestimmt die Position eines Elements im Verhältnis zu den Zeilen der restlichen tabellenartigen Gruppierung von Informationen.

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

## Zugänglichkeitshinweise

Die Unterstützung für `gridcell` und bestimmte `gridcell` bezogene ARIA-Rollen und -Eigenschaften ist bei unterstützenden Technologien schlecht. Verwenden Sie, wenn möglich, [HTML-Tabelle-Markup](/de/docs/Web/HTML/Element/table) an ihrer Stelle.

## Beste Praktiken

Die erste Regel von ARIA lautet: Wenn ein natives HTML-Element oder -Attribut die Semantik und das Verhalten bietet, das Sie benötigen, verwenden Sie es anstatt ein Element umzufunktionieren und eine ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen. Daher wird empfohlen, [natives HTML-Tabelle-Markup](/de/docs/Web/HTML/Element/table) statt der Erstellung einer tabellenartigen Form und Funktionalität mit ARIA und JavaScript zu verwenden.

## Siehe auch

- [Das Tabellenelement](/de/docs/Web/HTML/Element/table)
- [ARIA: Gitterrolle](/de/docs/Web/Accessibility/ARIA/Roles/grid_role)
- [Grid Role - Maxability](https://www.maxability.co.in/wai-aria-overview/grid-role/)
- [Das Tabellenzeilen-Element](/de/docs/Web/HTML/Element/tr)
- [ARIA: Rollenrolle](/de/docs/Web/Accessibility/ARIA/Roles/row_role)
- [Row Role - Maxability](https://www.maxability.co.in/wai-aria-overview/row-role/)
- [aria-rowcount - Maxability](https://www.maxability.co.in/2018/09/07/aria-rowcount-property/)
- [ARIA: rowgroup Rolle](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role)
- [Rowgroup Role - Maxability](https://www.maxability.co.in/wai-aria-overview/rowgroup-role/)
- [Das Tabellenkopf-Element](/de/docs/Web/HTML/Element/th)
- [Columnheader - Maxability](https://www.maxability.co.in/wai-aria-overview/columnheader-role/)
- [aria-colcount - Maxability](https://www.maxability.co.in/2017/07/26/aria-colcount-property/)
- [Das Tabellendatenzellen-Element](/de/docs/Web/HTML/Element/td)
- [gridcell: Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria-1.1/#gridcell)
- [Gridcell Role - Maxability](https://www.maxability.co.in/wai-aria-overview/gridcell-role/)
