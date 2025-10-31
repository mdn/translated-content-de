---
title: "ARIA: rowgroup Rolle"
short-title: rowgroup
slug: Web/Accessibility/ARIA/Reference/Roles/rowgroup_role
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Ein Element mit `role="rowgroup"` ist eine Gruppe von [Reihen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) innerhalb einer Tabellenstruktur. Ein `rowgroup` enthält eine oder mehrere Reihen von [Zellen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role), [Gitterzellen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role), [Spaltenüberschriften](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) oder [Reihenüberschriften](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role) innerhalb eines [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), einer [`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) oder eines [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role).

```html
<div
  role="table"
  aria-label="Populations"
  aria-describedby="country_population_desc">
  <div id="country_population_desc">World Populations by Country</div>
  <div role="rowgroup">
    <div role="row">
      <span role="columnheader" aria-sort="descending">Country</span>
      <span role="columnheader" aria-sort="none">Population</span>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row">
      <span role="cell">Finland</span>
      <span role="cell">5.5 million</span>
    </div>
    <div role="row">
      <span role="cell">France</span>
      <span role="cell">67 million</span>
    </div>
  </div>
</div>
```

## Beschreibung

`Rowgroup` stellt eine Beziehung zwischen den enthaltenen Reihen-Elementen her und ist ein strukturelles Äquivalent zu den {{HTMLElement('thead')}}, {{HTMLElement('tfoot')}} und {{HTMLElement('tbody')}} Elementen in HTML. Es gibt jedoch keine Unterscheidung zwischen verschiedenen Arten von Reihengruppen. Ihre Elemente müssen in oder von Elementen mit entweder der [table](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) oder [grid](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) Rolle enthalten bzw. besessen sein. Die Verwendung der nativen {{HTMLElement('thead')}}, {{HTMLElement('tfoot')}} und {{HTMLElement('tbody')}} HTML-Elemente wird, wann immer möglich, dringend empfohlen.

Um eine ARIA-Tabellenüberschrift, einen Tabellenfuß oder einen Tabellenkörper zu erstellen, fügen Sie dem Element `role="rowgroup"` hinzu. Dieses rowgroup sollte in einem Grid, einer Tabelle oder einem Treegrid verschachtelt sein, das eine Gruppe von einer oder mehreren Reihen umfasst. Jede Reihe enthält wiederum untergeordnete Zellen. Diese Zellen können je nach Art entweder Spalten- oder Reihenüberschriften sein oder normale oder Rasterzellen sein.

> [!NOTE]
> Die Verwendung des nativen HTML-Tabellenelements ({{HTMLElement('table')}}) zusammen mit den Tabellelementen Tabellenüberschrift ({{HTMLElement('thead')}}), Tabellenfuß ({{HTMLElement('tfoot')}}) und Tabellenkörper ({{HTMLElement('tbody')}}) wird nach Möglichkeit dringend empfohlen.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

#### Kontextrollen

- [role="table"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
  - : Einer der drei möglichen Kontexte (zusammen mit Grid und Treegrid), in denen Sie eine Reihe finden. Es identifiziert die Reihe als Teil einer nicht interaktiven Tabellenstruktur, die Daten in Reihen und Spalten enthält, ähnlich dem nativen {{HTMLElement('table')}} HTML-Element.
- [role="grid"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
  - : Einer der drei möglichen Kontexte (zusammen mit Tabelle und Treegrid), in denen Sie eine Reihe finden. Es identifiziert die Reihe als Teil einer nicht interaktiven Tabellenstruktur, die Daten in Reihen und Spalten enthält, ähnlich dem nativen {{HTMLElement('table')}} HTML-Element.
- [role="treegrid"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)
  - : Ähnlich einem Grid, aber mit Reihen, die in der gleichen Weise wie bei einem Baum erweitert und reduziert werden können.

#### Nachfahrenrollen

- [role="row"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
  - : Eine Reihe von Zellen innerhalb einer Tabellenstruktur. Eine Reihe enthält eine oder mehrere [Zellen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role), [gridcell](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role) oder [Spaltenüberschriften](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) und manchmal eine [Reihenüberschrift](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role).

### Tastaturinteraktionen

Keine.

### Erforderliche JavaScript-Funktionen

Keine.

> [!NOTE]
> Die erste Regel bei der Verwendung von ARIA lautet, dass Sie, wenn Sie eine native Funktion mit den erforderlichen eingebauten Semantiken und Verhaltensweisen verwenden können, anstatt ein Element zu zweckentfremden und eine ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, dies tun sollten. Verwenden Sie das HTML `<table>` Element anstelle der ARIA-Rolle von Tabelle, wann immer möglich.

## Beispiele

```html
<div
  role="table"
  aria-label="Semantic Elements"
  aria-describedby="semantic_elements_table_desc"
  aria-rowcount="81">
  <div id="semantic_elements_table_desc">
    Semantic Elements to use instead of ARIA's roles
  </div>
  <div role="rowgroup">
    <div role="row">
      <span role="columnheader" aria-sort="none">ARIA Role</span>
      <span role="columnheader" aria-sort="none">Semantic Element</span>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row" aria-rowindex="11">
      <span role="cell">header</span>
      <span role="cell">h1</span>
    </div>
    <div role="row" aria-rowindex="16">
      <span role="cell">header</span>
      <span role="cell">h6</span>
    </div>
    <div role="row" aria-rowindex="18">
      <span role="cell">rowgroup</span>
      <span role="cell">thead</span>
    </div>
    <div role="row" aria-rowindex="24">
      <span role="cell">term</span>
      <span role="cell">dt</span>
    </div>
  </div>
</div>
```

Oben ist eine nicht semantische ARIA-Tabelle mit einer Tabellenüberschrift und einem Tabellenkörper dargestellt, wobei fünf von 81 Reihen im DOM vorhanden sind: eine innerhalb einer Tabellenüberschrift und vier Reihen im Tabellenkörper. Die Kopfzeile, alleine in einem header rowgroup, hat zwei Spaltenüberschriften. Die Spalten sind sortierbar, aber derzeit nicht sortiert, wie durch die [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort) Eigenschaft angegeben. Der Tabellenkörper ist ein separates rowgroup, mit vier derzeit im DOM vorhandenen Reihen. Da nicht alle Reihen im DOM sind, haben wir die [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) Eigenschaft auf jeder Reihe eingefügt.

## Beste Praktiken

Verwenden Sie nur {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}} usw. für Daten-Tabellenstrukturen. Sie können diese ARIA-Rollen hinzufügen, um die Zugänglichkeit sicherzustellen, falls die nativen Semantiken der Tabelle entfernt werden, zum Beispiel mit CSS. Ein relevanter Anwendungsfall für die ARIA-Tabellenrolle ist, wenn die display-Eigenschaft von CSS die nativen Semantiken einer Tabelle überschreibt, z.B. durch `display: grid`. In diesem Fall können Sie die ARIA-Tabellenrollen verwenden, um die Semantiken hinzuzufügen.

```html
<table
  role="table"
  aria-label="Semantic Elements"
  aria-describedby="semantic_elements_table_desc"
  aria-rowcount="81">
  <caption id="semantic_elements_table_desc">
    Semantic Elements to use instead of ARIA's roles
  </caption>
  <thead role="rowgroup">
    <tr role="row">
      <th role="columnheader" aria-sort="none">ARIA Role</th>
      <th role="columnheader" aria-sort="none">Semantic Element</th>
    </tr>
  </thead>
  <tbody role="rowgroup">
    <tr role="row" aria-rowindex="11">
      <td role="cell">header</td>
      <td role="cell">h1</td>
    </tr>
    <tr role="row" aria-rowindex="16">
      <td role="cell">header</td>
      <td role="cell">h6</td>
    </tr>
  </tbody>
</table>
```

Oben ist die semantische Art und Weise, eine Tabelle zu schreiben. Die ARIA-Rollen sind nur erforderlich, wenn die nativen Semantiken der Tabelle und damit der Tabellenreihen entfernt werden, zum Beispiel durch Setzen der [display-Eigenschaft auf flex oder grid](/de/docs/Web/CSS/Reference/Properties/display#accessibility).

### Zusatznutzen

Keine

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTML Tabelle](/de/docs/Web/HTML/Reference/Elements/table)
- [HTML Tabellenkörper](/de/docs/Web/HTML/Reference/Elements/tbody)
- [HTML Tabellenfuß](/de/docs/Web/HTML/Reference/Elements/tfoot)
- [HTML Tabellenkopf](/de/docs/Web/HTML/Reference/Elements/thead)
