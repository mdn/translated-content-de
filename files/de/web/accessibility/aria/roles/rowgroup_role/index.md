---
title: "ARIA: rowgroup Rolle"
slug: Web/Accessibility/ARIA/Roles/rowgroup_role
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{AccessibilitySidebar}}

Ein Element mit `role="rowgroup"` ist eine Gruppe von [Zeilen](/de/docs/Web/Accessibility/ARIA/Roles/row_role) innerhalb einer Tabellensstruktur. Ein `rowgroup` enthält eine oder mehrere Zeilen von [Zellen](/de/docs/Web/Accessibility/ARIA/Roles/cell_role), [Gitterzellen](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role), [Spaltenköpfen](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role) oder [Zeilenköpfen](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role) innerhalb eines [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role), [`table`](/de/docs/Web/Accessibility/ARIA/Roles/table_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role).

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

`Rowgroup` stellt eine Beziehung zwischen den zugehörigen Zeilenelementen her und ist ein strukturelles Äquivalent zu den {{HTMLElement('thead')}}, {{HTMLElement('tfoot')}} und {{HTMLElement('tbody')}} Elementen in HTML. Es gibt jedoch keine Unterscheidung zwischen verschiedenen Typen von Zeilengruppen. Ihre Elemente müssen in Elementen mit entweder der [table](/de/docs/Web/Accessibility/ARIA/Roles/table_role) oder [grid](/de/docs/Web/Accessibility/ARIA/Roles/grid_role) Rolle enthalten sein oder von diesen Elementen übernommen werden. Die Verwendung der nativen {{HTMLElement('thead')}}, {{HTMLElement('tfoot')}} und {{HTMLElement('tbody')}} HTML-Elemente, wann immer möglich, wird dringend empfohlen.

Um einen ARIA Tabellenkopf, Tabellenfuß oder Tabellenkörper zu erstellen, fügen Sie dem Element `role="rowgroup"` hinzu. Dieses rowgroup sollte innerhalb eines Grids, einer Tabelle oder eines Treegrids verschachtelt sein und eine Gruppe von einer oder mehreren Zeilen umfassen. Jede Zeile enthält wiederum Kindzellen. Diese Zellen können von unterschiedlichen Typen sein, abhängig davon, ob sie Spalten- oder Zeilenköpfe, oder normale oder Gitterzellen sind.

> [!NOTE]
> Die Verwendung des nativen HTML-Tabellen-Elements ({{HTMLElement('table')}}) zusammen mit den Tabellenkopf- ({{HTMLElement('thead')}}), Fuß- ({{HTMLElement('tfoot')}}) und Körperelementen ({{HTMLElement('tbody')}}) wird, wann immer möglich, dringend empfohlen.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

#### Kontextrollen

- [role="table"](/de/docs/Web/Accessibility/ARIA/Roles/table_role)
  - : Eine der drei möglichen Kontexte (zusammen mit grid und treegrid), in denen Sie eine Zeile finden werden. Sie identifiziert die Zeile als Teil einer nicht interaktiven Tabellenstruktur, die Daten in Zeilen und Spalten anordnet, ähnlich dem nativen {{HTMLElement('table')}} HTML-Element.
- [role="grid"](/de/docs/Web/Accessibility/ARIA/Roles/grid_role)
  - : Eine der drei möglichen Kontexte (zusammen mit table und treegrid), in denen Sie eine Zeile finden werden. Sie identifiziert die Zeile als Teil einer nicht interaktiven Tabellenstruktur, die Daten in Zeilen und Spalten anordnet, ähnlich dem nativen {{HTMLElement('table')}} HTML-Element.
- [role="treegrid"](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role)
  - : Ähnlich einem Grid, jedoch mit Zeilen, die erweitert und reduziert werden können, wie bei einem Baum.

#### Nachfolgende Rollen

- [role="row"](/de/docs/Web/Accessibility/ARIA/Roles/row_role)
  - : Eine Zeile von Zellen innerhalb einer Tabellensstruktur. Eine Zeile enthält eine oder mehrere [Zellen](/de/docs/Web/Accessibility/ARIA/Roles/cell_role), [gridcell](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role), oder [Spaltenköpfe](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role) und manchmal einen [Zeilenkopf](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role).

### Tastaturinteraktionen

Keine

### Erforderliche JavaScript-Funktionen

Keine.

> [!NOTE]
> Die erste Regel der ARIA-Verwendung lautet: Wenn Sie eine native Funktion mit den erforderlichen Semantiken und Verhaltensweisen bereits integriert verwenden können, anstatt ein Element neu zu verwenden und **eine** ARIA-Rolle, -Zustand oder -Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie dies. Verwenden Sie das HTML-`<table>`-Element anstelle der ARIA-Rolle table, wann immer möglich.

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

Das obige ist eine nicht-semantische ARIA-Tabelle mit einem Tabellenkopf und einem Tabellenkörper, wobei fünf von 81 Zeilen im DOM vorhanden sind: eine im Tabellenkopf und vier Zeilen im Tabellenkörper. Die Kopfzeile, allein in einer Header-Rowgroup, hat zwei Spaltenköpfe. Die Spalten sind sortierbar, derzeit jedoch nicht sortiert, wie durch die [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-sort) Eigenschaft angegeben. Der Tabellenkörper ist eine separate Rowgroup, mit vier derzeit im DOM befindlichen Zeilen. Da nicht alle Zeilen im DOM sind, haben wir die [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex)-Eigenschaft auf jeder Zeile hinzugefügt.

## Beste Praktiken

Verwenden Sie nur {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}} usw. für die Datenstruktur der Tabelle. Sie können diese ARIA-Rollen hinzufügen, um die Barrierefreiheit sicherzustellen, falls die nativen Semantiken der Tabelle entfernt werden, z.B. durch CSS. Ein relevanter Anwendungsfall für die ARIA-Tabelle ist, wenn die Display-Eigenschaft des CSS die nativen Semantiken einer Tabelle außer Kraft setzt, wie z.B. durch `display: grid`. In diesem Fall können Sie die ARIA-Tabellenrollen verwenden, um die Semantiken hinzuzufügen.

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

Oben ist die semantische Art, eine Tabelle zu schreiben. Die ARIA-Rollen sind nur erforderlich, wenn die nativen Semantiken der Tabelle und damit der Tabellenzeilen zerstört werden, wie z.B. durch das Setzen der [Display-Eigenschaft auf flex oder grid](/de/docs/Web/CSS/display#accessibility).

### Zusätzliche Vorteile

keine

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTML-Tabelle](/de/docs/Web/HTML/Element/table)
- [HTML-Tabellenkörper](/de/docs/Web/HTML/Element/tbody)
- [HTML-Tabellenfuß](/de/docs/Web/HTML/Element/tfoot)
- [HTML-Tabellenkopf](/de/docs/Web/HTML/Element/thead)
