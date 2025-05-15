---
title: "ARIA: `gridcell` Rolle"
short-title: gridcell
slug: Web/Accessibility/ARIA/Reference/Roles/gridcell_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die [gridcell Rolle](https://www.w3.org/TR/wai-aria-1.1/#gridcell) wird verwendet, um eine Zelle in einem [grid](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) oder [treegrid](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) zu erstellen. Sie soll die Funktionalität des HTML-Elements {{HTMLElement('td')}} nachahmen und Informationen im Tabellenstil gruppieren.

```html
<div role="gridcell">Potato</div>
<div role="gridcell">Cabbage</div>
<div role="gridcell">Onion</div>
```

Elemente, denen `role="gridcell"` zugewiesen wurde, müssen untergeordnete Elemente eines Elements mit der Rolle [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) sein.

```html
<div role="row">
  <div role="gridcell">Jane</div>
  <div role="gridcell">Smith</div>
  <div role="gridcell">496-619-5098</div>
  …
</div>
```

Die erste Regel von ARIA ist: Wenn ein natürliches HTML-Element oder -Attribut die benötigten Semantiken und Verhaltensweisen bietet, verwenden Sie es anstelle einer Umwidmung eines Elements und dem Hinzufügen von ARIA. Verwenden Sie stattdessen das HTML-Element {{HTMLElement('td')}}:

```html
<td>Potato</td>
<td>Cabbage</td>
<td>Onion</td>
```

## Beschreibung

### `gridcells` mit dynamisch hinzugefügten, verborgenen oder entfernten Reihen und Spalten

Jedes Element mit einer angewendeten `role="gridcell"` sollte ARIA verwenden, um seine Ordnung in der Gruppierung im Tabellenstil zu beschreiben, sofern die Tabelle, das Raster oder das Baumraster die Möglichkeit hat, Zeilen und/oder Spalten dynamisch hinzuzufügen, zu verbergen oder zu entfernen.

Verwenden Sie [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex), um die Ordnung einer `gridcell` in der Liste der Spalten zu beschreiben, und [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex), um die Ordnung einer `gridcell` in der Liste der Reihen zu beschreiben. Verwenden Sie [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount) und [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount) auf dem übergeordneten Element mit angewendeter [`role="grid"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), um die Gesamtzahl der Spalten oder Reihen festzulegen.

Dieser Beispielcode demonstriert eine Gruppierung von Informationen im Tabellenstil, bei der die dritte und vierte Spalte entfernt wurden. [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) wird verwendet, um die Position der Reihen zu beschreiben und ermöglicht es einer Person, die unterstützende Technologie verwendet, zu erkennen, dass bestimmte Reihen entfernt wurden:

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

### Beschreibung der Position von `gridcells`, wenn die Gesamtstruktur unbekannt ist

In Situationen, in denen die Gruppierung der Inhalte im Tabellenstil keine Informationen über die Spalten und Reihen liefert, müssen `gridcells` ihre Positionen programmatisch durch Verwendung von [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) beschrieben bekommen. Die für `aria-describedby` angegebenen [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)s sollten den übergeordneten Elementen entsprechen, die als Reihen und Spalten vorgesehen sind.

Durch den Verweis auf die übergeordneten Elemente mit angewandten Rollen von [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role) oder [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) über `aria-describedby`, kann unterstützende Technologie die Position und Beziehung des `gridcell`-Elements zum Rest der Gruppierung von Inhalten im Tabellenstil verstehen.

### Interaktive Rasters und Baumraster

#### Bearbeitbare Zellen

Sowohl `<td>`-Elemente als auch Elemente mit der Rolle `gridcell` können bearbeitbar gemacht werden, was eine Funktionalität ähnlich der Bearbeitung einer Tabellenkalkulation nachahmen kann. Dies geschieht durch Zuweisung des HTML [`contenteditable`-Attributs](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable).

```html
<td contenteditable="true">Notes</td>

<div role="gridcell" contenteditable="true">Item cost</div>
```

`contenteditable` macht das Element, auf das es angewendet wird, fokussierbar über die <kbd>Tab</kbd>-Taste. Wenn eine `gridcell` bedingt in einen Zustand umgeschaltet wird, in dem das Bearbeiten verboten ist, schalten Sie [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly) auf dem `gridcell`-Element um.

#### Erweiterbare Zellen

In einem [treegrid](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) können `gridcells` erweiterbar gemacht werden, indem das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) umgeschaltet wird. Beachten Sie, dass wenn dieses Attribut bereitgestellt wird, es nur für die individuelle `gridcell` gilt.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- `grid`
  - : Kommuniziert, dass ein übergeordnetes Element eine tabellen- oder baumartige Gruppierung von Informationen ist.
- `row`
  - : Erforderlich, um zu kommunizieren, dass die `gridcell` Teil einer Reihe einer Gruppierung von Informationen im Tabellenstil ist.
- `columnheader`
  - : Gibt an, welches Element der zugehörige Spaltenkopf ist.
- [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex)
  - : Identifiziert die Position eines Elements im Verhältnis zu den Spalten der restlichen Gruppierung von Informationen im Tabellenstil.
- `rowheader`
  - : Gibt an, welches Element der zugehörige Zeilenkopf ist.
- [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex)
  - : Identifiziert die Position eines Elements im Verhältnis zu den Reihen der restlichen Gruppierung von Informationen im Tabellenstil.

### Beispiele

Das folgende Beispiel erstellt eine Gruppierung von Informationen im Tabellenstil:

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

Die Unterstützung für `gridcell` und bestimmte `gridcell`-bezogene ARIA-Rollen und -Eigenschaften ist mit unterstützenden Technologien schlecht. Wenn möglich, verwenden Sie stattdessen [HTML-Tabelle-Markup](/de/docs/Web/HTML/Reference/Elements/table).

## Beste Praktiken

Die erste Regel von ARIA ist: Wenn ein nativer HTML-Element oder -Attribut die Semantik und das Verhalten bietet, das Sie benötigen, verwenden Sie es anstelle der Umwidmung eines Elements und dem Hinzufügen einer ARIA-Rolle, eines Zustandes oder einer Eigenschaft, um es zugänglich zu machen. Daher wird empfohlen, [natürliches HTML-Tabellen-Markup](/de/docs/Web/HTML/Reference/Elements/table) zu verwenden, anstatt die Form und Funktionalität einer Tabelle mit ARIA und JavaScript nachzubilden.

## Siehe auch

- [Das Tabellen-Element](/de/docs/Web/HTML/Reference/Elements/table)
- [ARIA: Gitterrolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
- [Das Tabellenzeilen-Element](/de/docs/Web/HTML/Reference/Elements/tr)
- [ARIA: Zeilenrolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [ARIA: Zeilengruppenrolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
- [Das Tabellen-Kopfzeilen-Element](/de/docs/Web/HTML/Reference/Elements/th)
- [Das Tabellen-Datenzellen-Element](/de/docs/Web/HTML/Reference/Elements/td)
- [gridcell: Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria-1.1/#gridcell)
