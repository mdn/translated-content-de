---
title: "ARIA: gridcell-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/gridcell_role
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Die [gridcell-Rolle](https://www.w3.org/TR/wai-aria-1.1/#gridcell) wird verwendet, um eine Zelle in einem [Gitter](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) oder [Baumgitter](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) zu erzeugen. Sie soll die Funktionalität des HTML-{{HTMLElement('td')}}-Elements für tabellenartige Gruppierungen von Informationen nachbilden.

```html
<div role="gridcell">Potato</div>
<div role="gridcell">Cabbage</div>
<div role="gridcell">Onion</div>
```

Elemente, denen `role="gridcell"` zugewiesen ist, müssen untergeordnete Elemente eines Elements mit der Rolle [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) sein.

```html
<div role="row">
  <div role="gridcell">Jane</div>
  <div role="gridcell">Smith</div>
  <div role="gridcell">496-619-5098</div>
  …
</div>
```

Die erste Regel von ARIA lautet: Wenn ein natives HTML-Element oder -Attribut die gewünschten Semantiken und Verhaltensweisen bietet, verwenden Sie es, anstatt ein Element umzufunktionieren und ARIA hinzuzufügen. Verwenden Sie stattdessen das HTML-{{HTMLElement('td')}}-Element:

```html
<td>Potato</td>
<td>Cabbage</td>
<td>Onion</td>
```

## Beschreibung

### Gitterzellen mit dynamisch hinzugefügten, ausgeblendeten oder entfernten Zeilen und Spalten

Jedes Element, dem `role="gridcell"` zugewiesen ist, sollte ARIA verwenden, um seine Reihenfolge in der tabellenartigen Gruppierung zu beschreiben, vorausgesetzt, dass das Gitter oder Baumgitter in der Lage ist, Zeilen und/oder Spalten dynamisch hinzuzufügen, auszublenden oder zu entfernen.

Verwenden Sie [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex), um die Reihenfolge einer `gridcell` in der Auflistung der Spalten zu beschreiben, und [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex), um die Reihenfolge einer `gridcell` in der Auflistung der Zeilen zu beschreiben. Verwenden Sie [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount) und [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount) beim übergeordneten Element mit [`role="grid"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), um die Gesamtnummer der Spalten oder Zeilen festzulegen.

Dieser Beispielcode zeigt eine tabellenartige Gruppierung von Informationen, bei der die dritte und vierte Spalte entfernt wurden. [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) wird verwendet, um die Position der Zeilen zu beschreiben und ermöglicht es einer Person, die unterstützende Technologie verwendet, zu erkennen, dass bestimmte Zeilen entfernt wurden:

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

### Beschreibung der Position von Gitterzellen, wenn die Gesamtstruktur unbekannt ist

In Situationen, in denen die tabellenartige Gruppierung von Inhalten keine Informationen über die Spalten und Zeilen bereitstellt, müssen die Positionen der Gitterzellen programmatisch mit [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) beschrieben werden. Die für `aria-describedby` bereitgestellten [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)s sollten den übergeordneten Elementen entsprechen, die als Zeilen und Spalten vorgesehen sind.

Durch das Verweisen auf die übergeordneten Elemente mit den Rollen [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role) oder [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) über `aria-describedby` ermöglicht es die unterstützende Technologie, die Position und Beziehung des `gridcell`-Elements zum Rest der tabellenartigen Gruppierung von Inhalten zu verstehen.

### Interaktive Gitter und Baumgitter

#### Editierbare Zellen

Sowohl `<td>`-Elemente als auch Elemente mit der Rolle `gridcell` können editierbar gemacht werden und damit eine ähnliche Funktionalität wie das Bearbeiten eines Tabellenkalkulationsblatts nachahmen. Dies geschieht durch Anwenden des HTML-[`contenteditable`-Attributs](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable).

```html
<td contenteditable="true">Notes</td>

<div role="gridcell" contenteditable="true">Item cost</div>
```

`contenteditable` macht das Element, auf das es angewendet wird, über die <kbd>Tab</kbd>-Taste fokussierbar. Wenn eine Gitterzelle bedingt in einen Zustand umgeschaltet wird, in dem das Bearbeiten verboten ist, schalten Sie [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly) auf dem Gitterzellen-Element um.

#### Erweiterbare Zellen

In einem [treegrid](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) können Gitterzellen durch Umschalten des [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Attributs erweiterbar gemacht werden. Beachten Sie, dass wenn dieses Attribut angegeben ist, es nur für die individuelle Gitterzelle gilt.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- `grid`
  - : Kommuniziert, dass ein übergeordnetes Element eine tabellen- oder baumartige Gruppierung von Informationen ist.
- `row`
  - : Erforderlich, um zu kommunizieren, dass die `gridcell` Teil einer tabellenartigen Gruppierung von Informationen ist.
- `columnheader`
  - : Gibt an, welches Element der zugehörige Spaltenkopf ist.
- [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex)
  - : Identifiziert die Position eines Elements in Relation zu den restlichen Spalten der tabellenartigen Gruppierung von Informationen.
- `rowheader`
  - : Gibt an, welches Element der zugehörige Zeilenkopf ist.
- [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex)
  - : Identifiziert die Position eines Elements in Relation zu den restlichen Zeilen der tabellenartigen Gruppierung von Informationen.

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

Die Unterstützung von `gridcell` und bestimmten `gridcell`-bezogenen ARIA-Rollen und -Eigenschaften haben eine schlechte Unterstützung mit unterstützenden Technologien. Wenn möglich, verwenden Sie [HTML-Tabellen-Markup](/de/docs/Web/HTML/Reference/Elements/table) an deren Stelle.

## Best Practices

Die erste Regel von ARIA lautet: Wenn ein natives HTML-Element oder -Attribut die gewünschten Semantiken und Verhaltensweisen bietet, verwenden Sie es, anstatt ein Element umzufunktionieren und eine ARIA-Rolle, -Status oder -Eigenschaft hinzuzufügen, um es zugänglich zu machen. Daher wird empfohlen, [natives HTML-Tabellen-Markup](/de/docs/Web/HTML/Reference/Elements/table) zu verwenden, anstatt die Form und Funktionalität einer Tabelle mit ARIA und JavaScript neu zu gestalten.

## Siehe auch

- [Das Table-Element](/de/docs/Web/HTML/Reference/Elements/table)
- [ARIA: Grid-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
- [Das Tabellenelement](/de/docs/Web/HTML/Reference/Elements/tr)
- [ARIA: row-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [ARIA: rowgroup-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
- [Das Tabellenkopf-Element](/de/docs/Web/HTML/Reference/Elements/th)
- [Das Tabellendatenzellen-Element](/de/docs/Web/HTML/Reference/Elements/td)
- [gridcell: Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria-1.1/#gridcell)
