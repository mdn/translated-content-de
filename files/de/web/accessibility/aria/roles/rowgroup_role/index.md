---
title: "ARIA: rowgroup Rolle"
slug: Web/Accessibility/ARIA/Roles/rowgroup_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Ein Element mit `role="rowgroup"` ist eine Gruppe von [Zeilen](/de/docs/Web/Accessibility/ARIA/Roles/row_role) innerhalb einer tabellarischen Struktur. Ein `rowgroup` enthält eine oder mehrere Zeilen von [Zellen](/de/docs/Web/Accessibility/ARIA/Roles/cell_role), [Gitterzellen](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role), [Spaltenheadern](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role) oder [Zeilenheadern](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role) innerhalb eines [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role), [`table`](/de/docs/Web/Accessibility/ARIA/Roles/table_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role).

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

`Rowgroup` stellt eine Beziehung zwischen den zugehörigen Zeilenelementen her und ist ein strukturelles Äquivalent zu den {{HTMLElement('thead')}}, {{HTMLElement('tfoot')}} und {{HTMLElement('tbody')}} Elementen in HTML. Es gibt jedoch keine Unterscheidung zwischen verschiedenen Arten von Rowgroups. Ihre Elemente müssen in, oder von, Elementen mit entweder der [table](/de/docs/Web/Accessibility/ARIA/Roles/table_role) oder [grid](/de/docs/Web/Accessibility/ARIA/Roles/grid_role) Rolle enthalten sein oder ihnen gehören. Die Verwendung der nativen {{HTMLElement('thead')}}, {{HTMLElement('tfoot')}} und {{HTMLElement('tbody')}} HTML-Elemente wird, wann immer möglich, nachdrücklich empfohlen.

Um einen ARIA-Tabellenkopf, Tabellenfuß oder -körper zu erstellen, fügen Sie `role="rowgroup"` zum Element hinzu. Dieses Rowgroup sollte innerhalb eines Grids, einer Tabelle oder eines Treegrids verschachtelt sein und eine Gruppe von einer oder mehreren Zeilen umfassen. Jede Zeile enthält wiederum Kinderzellen. Diese Zellen können je nach Art, ob Spalten- oder Zeilenheader beziehungsweise normale oder Gitterzellen, variieren.

> [!NOTE]
> Die Verwendung des nativen HTML-Tabellenelements ({{HTMLElement('table')}}) zusammen mit den Tabellenkopfelementen ({{HTMLElement('thead')}}), Fuß ({{HTMLElement('tfoot')}}) und Körper ({{HTMLElement('tbody')}}) wird wann immer möglich nachdrücklich empfohlen.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

#### Kontextrollen

- [role="table"](/de/docs/Web/Accessibility/ARIA/Roles/table_role)
  - : Eine der drei möglichen Kontexte (zusammen mit Grid und Treegrid), in denen Sie eine Zeile finden. Es identifiziert die Zeile als Teil einer nicht interaktiven Tabellenstruktur, die Daten in Zeilen und Spalten anordnet, ähnlich dem nativen {{HTMLElement('table')}} HTML-Element.
- [role="grid"](/de/docs/Web/Accessibility/ARIA/Roles/grid_role)
  - : Eine der drei möglichen Kontexte (zusammen mit Tabelle und Treegrid), in denen Sie eine Zeile finden. Es identifiziert die Zeile als Teil einer nicht interaktiven Tabellenstruktur, die Daten in Zeilen und Spalten anordnet, ähnlich dem nativen {{HTMLElement('table')}} HTML-Element.
- [role="treegrid"](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role)
  - : Ähnlich einem Grid, jedoch mit Zeilen, die in der gleichen Weise wie bei einem Baum erweitert und reduziert werden können.

#### Nachfolgerrollen

- [role="row"](/de/docs/Web/Accessibility/ARIA/Roles/row_role)
  - : Eine Zeile von Zellen innerhalb einer tabellarischen Struktur. Eine Zeile enthält eine oder mehrere [Zellen](/de/docs/Web/Accessibility/ARIA/Roles/cell_role), [Gitterzellen](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role) oder [Spaltenheader](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role) und manchmal einen [Zeilenheader](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role).

### Tastaturinteraktionen

Keine

### Erforderliche JavaScript-Features

Keine.

> [!NOTE]
> Die erste Regel der ARIA-Nutzung lautet: Wenn Sie eine native Funktion mit den erforderten Semantiken und Verhaltensweisen bereits integriert nutzen können, anstatt ein Element neu zu verwenden und ihm eine ARIA Rolle, einen Zustand oder eine Eigenschaft **hinzuzufügen**, um es zugänglich zu machen, dann tun Sie dies. Verwenden Sie das HTML `<table>`-Element, anstelle der ARIA-Tabelle, wann immer möglich.

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

Oben ist eine nicht-semantische ARIA-Tabelle mit einem Tabellenkopf und Tabellenkörper zu sehen, mit fünf von 81 Zeilen, die im DOM vorhanden sind: eine im Tabellenkopf und vier Zeilen im Tabellenkörper. Die Headerzeile, allein in einer Header-Rowgroup, hat zwei Spaltenheader. Die Spalten sind sortierbar, aber derzeit nicht sortiert, wie durch die [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-sort) Eigenschaft angezeigt wird. Der Tabellenkörper ist eine separate Rowgroup, mit vier derzeit im DOM vorhandenen Zeilen. Da nicht alle Zeilen im DOM sind, haben wir die [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) Eigenschaft auf jede Zeile aufgenommen.

## Beste Praktiken

Verwenden Sie ausschließlich {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}} usw. für die Datenstruktur von Tabellen. Sie können diese ARIA-Rollen hinzufügen, um die Barrierefreiheit sicherzustellen, falls die nativen Semantiken der Tabelle entfernt werden, wie durch CSS. Ein relevanter Anwendungsfall für die ARIA-Tabellenrolle ist, wenn die `display`-Eigenschaft von CSS die nativen Semantiken einer Tabelle überschreibt, z.B. durch `display: grid`. In diesem Fall können Sie die ARIA-Tabellenrollen verwenden, um die Semantiken hinzuzufügen.

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

Oben ist der semantische Weg, eine Tabelle zu schreiben. Die ARIA-Rollen sind nur erforderlich, wenn die nativen Semantiken der Tabelle, und daher die Tabellenzeilen, getilgt werden, wie durch das Setzen der [display Eigenschaft auf flex oder grid](/de/docs/Web/CSS/display#accessibility).

### Zusätzliche Vorteile

keine

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTML Tabelle](/de/docs/Web/HTML/Element/table)
- [HTML Tabellenkörper](/de/docs/Web/HTML/Element/tbody)
- [HTML Tabellenfuß](/de/docs/Web/HTML/Element/tfoot)
- [HTML Tabellenkopf](/de/docs/Web/HTML/Element/thead)
