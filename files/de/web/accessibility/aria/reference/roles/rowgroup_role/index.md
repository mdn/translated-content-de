---
title: "ARIA: rowgroup Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/rowgroup_role
l10n:
  sourceCommit: ec98716dfe71c78db3f82ee3b1b9e7f68997fa19
---

Ein Element mit `role="rowgroup"` ist eine Gruppe von [Zeilen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) innerhalb einer tabellarischen Struktur. Ein `rowgroup` enthält eine oder mehrere Zeilen von [Zellen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role), [Gitternetz-Zellen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role), [Spaltenüberschriften](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) oder [Zeilenüberschriften](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role) innerhalb eines [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), einer [`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) oder einer [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role).

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

`Rowgroup` stellt eine Beziehung zwischen den enthaltenen Zeilenelementen her und ist das strukturelle Äquivalent zu den {{HTMLElement('thead')}}, {{HTMLElement('tfoot')}} und {{HTMLElement('tbody')}} Elementen in HTML. Es gibt jedoch keinen Unterschied zwischen verschiedenen Arten von Zeilengruppen. Ihre Elemente müssen in bzw. von Elementen mit der Rolle [table](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) oder [grid](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) enthalten oder besessen sein. Die Verwendung der nativen {{HTMLElement('thead')}}, {{HTMLElement('tfoot')}} und {{HTMLElement('tbody')}} HTML-Elemente wird wann immer möglich dringend empfohlen.

Um eine ARIA Tabellenüberschrift, ein Tabellenfuß oder einen Tabellenkörper zu erstellen, fügen Sie `role="rowgroup"` zum Element hinzu. Diese Zeilengruppe sollte innerhalb eines Grids, einer Tabelle oder einer Baumstruktur (treegrid) verschachtelt sein und eine Gruppe von einer oder mehreren Zeilen umfassen. Jede Zeile enthält wiederum untergeordnete Zellen. Diese Zellen können verschiedenen Typs sein, je nachdem, ob es sich um Spalten- oder Zeilenüberschriften oder einfache oder Netz-Zellen handelt.

> [!NOTE]
> Die Verwendung des nativen HTML-Table-Elements ({{HTMLElement('table')}}) zusammen mit den Table Header ({{HTMLElement('thead')}}), Footer ({{HTMLElement('tfoot')}}) und Body ({{HTMLElement('tbody')}}) Elementen wird wann immer möglich dringend empfohlen.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

#### Kontextrollen

- [role="table"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
  - : Einer der drei möglichen Kontexte (zusammen mit grid und treegrid), in denen Sie eine Zeile finden. Es identifiziert die Zeile als Teil einer nicht-interaktiven Tabellenstruktur, die Daten in Zeilen und Spalten enthält, ähnlich dem nativen {{HTMLElement('table')}} HTML-Element.
- [role="grid"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
  - : Einer der drei möglichen Kontexte (zusammen mit table und treegrid), in denen Sie eine Zeile finden. Es identifiziert die Zeile als Teil einer nicht-interaktiven Tabellenstruktur, die Daten in Zeilen und Spalten enthält, ähnlich dem nativen {{HTMLElement('table')}} HTML-Element.
- [role="treegrid"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)
  - : Ähnlich einem Grid, aber mit Zeilen, die wie bei einem Baum erweitert und reduziert werden können.

#### Nachkommende Rollen

- [role="row"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
  - : Eine Zeile von Zellen innerhalb einer tabellarischen Struktur. Eine Zeile enthält eine oder mehrere [Zellen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role), [Gitternetz-Zellen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role) oder [Spaltenüberschriften](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) und manchmal eine [Zeilenüberschrift](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role).

### Tastaturinteraktionen

Keine.

### Erforderliche JavaScript-Funktionen

Keine.

> [!NOTE]
> Die erste Regel bei der Verwendung von ARIA ist, wenn Sie eine native Funktion mit der erforderlichen Semantik und dem Verhalten verwenden können, anstatt ein Element neu zu verwenden und **eine** ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie dies. Verwenden Sie das HTML `<table>`-Element anstelle der ARIA-Tabelle, wann immer es möglich ist.

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

Das oben gezeigte ist eine nicht-semantische ARIA-Tabelle mit einer Tabellenüberschrift und einem Tabellenkörper, wobei fünf von 81 Zeilen im DOM vorhanden sind: eine in einer Tabellenüberschrift und vier Zeilen im Tabellenkörper. Die Überschriftenzeile, alleine in einer Header-Zeilengruppe, hat zwei Spaltenüberschriften. Die Spalten sind sortierbar, aber derzeit nicht sortiert, wie durch die [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort) Eigenschaft angezeigt wird. Der Tabellenkörper ist eine separate Zeilengruppe, mit vier Zeilen, die derzeit im DOM sind. Da sich nicht alle Zeilen im DOM befinden, haben wir die [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) Eigenschaft auf jeder Zeile hinzugefügt.

## Beste Praktiken

Verwenden Sie nur {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}} und so weiter für die Daten-Tabellenstruktur. Sie können diese ARIA-Rollen hinzufügen, um die Zugänglichkeit sicherzustellen, sollte die native Semantik der Tabelle entfernt werden, beispielsweise durch CSS. Ein relevanter Anwendungsfall für die ARIA-Tabelle ist, wenn die CSS display-Eigenschaft die native Semantik einer Tabelle überschreibt, wie durch `display: grid`. In diesem Fall können Sie die ARIA-Tabelle-Rollen verwenden, um die Semantik hinzuzufügen.

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

Oben ist die semantische Art, eine Tabelle zu schreiben. Die ARIA-Rollen sind nur erforderlich, wenn die native Semantik der Tabelle und damit der Tabellenzeilen aufgehoben wird, beispielsweise durch das Setzen der [display-Eigenschaft auf flex oder grid](/de/docs/Web/CSS/display#accessibility).

### Zusätzliche Vorteile

keine

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTML Tabelle](/de/docs/Web/HTML/Element/table)
- [HTML Tabellenkörper](/de/docs/Web/HTML/Element/tbody)
- [HTML Tabellenfuß](/de/docs/Web/HTML/Element/tfoot)
- [HTML Tabellenüberschrift](/de/docs/Web/HTML/Element/thead)
