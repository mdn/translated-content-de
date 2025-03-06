---
title: "ARIA: rowgroup-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/rowgroup_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Ein Element mit `role="rowgroup"` ist eine Gruppe von [Zeilen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) innerhalb einer tabellarischen Struktur. Ein `rowgroup` enthält eine oder mehrere Zeilen von [Zellen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role), [Gitterzellen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role), [Spaltenüberschriften](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) oder [Zeilenüberschriften](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role) innerhalb eines [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), [`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role).

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

`Rowgroup` stellt eine Verbindung zwischen den zugehörigen Zeilenelementen her und ist ein strukturelles Äquivalent zu den {{HTMLElement('thead')}}, {{HTMLElement('tfoot')}} und {{HTMLElement('tbody')}}-Elementen in HTML. Es gibt jedoch keine Unterscheidung zwischen verschiedenen Arten von Zeilengruppen. Ihre Elemente müssen in, oder von Elementen mit entweder der [table](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) oder [grid](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) Rolle enthalten oder besessen sein. Die Verwendung der nativen {{HTMLElement('thead')}}, {{HTMLElement('tfoot')}} und {{HTMLElement('tbody')}} HTML-Elemente, wann immer möglich, wird dringend empfohlen.

Um einen ARIA-Tabellenkopf, -Tabellenfuß oder -tabellenkörper zu erstellen, fügen Sie `role="rowgroup"` zu dem Element hinzu. Diese rowgroup sollte innerhalb eines Grid, einer Tabelle oder einer Baumstruktur (treegrid) geschachtelt sein und eine Gruppe von einer oder mehreren Zeilen umfassen. Jede Zeile enthält wiederum untergeordnete Zellen. Diese Zellen können von verschiedenen Typen sein, abhängig davon, ob sie Spalten- oder Zeilenüberschriften, oder einfache oder Gitterzellen sind.

> [!NOTE]
> Die Verwendung des nativen HTML-Tabellenelements ({{HTMLElement('table')}}) zusammen mit den Tabellenkopf- ({{HTMLElement('thead')}}), Fuß- ({{HTMLElement('tfoot')}}) und -körper- ({{HTMLElement('tbody')}}) Elementen wird, wann immer möglich, stark empfohlen.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

#### Kontextrollen

- [role="table"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
  - : Einer der drei möglichen Kontexte (zusammen mit grid und treegrid), in denen Sie eine Zeile finden. Sie identifiziert die Zeile als Teil einer nicht interaktiven Tabellenstruktur, die Daten in Zeilen und Spalten enthält, ähnlich dem nativen {{HTMLElement('table')}} HTML-Element.
- [role="grid"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
  - : Einer der drei möglichen Kontexte (zusammen mit table und treegrid), in denen Sie eine Zeile finden. Sie identifiziert die Zeile als Teil einer nicht interaktiven Tabellenstruktur, die Daten in Zeilen und Spalten enthält, ähnlich dem nativen {{HTMLElement('table')}} HTML-Element.
- [role="treegrid"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)
  - : Ähnlich einem Gitter, jedoch mit Zeilen, die auf die gleiche Weise wie in einer Baumstruktur erweitert und reduziert werden können.

#### Nachfolgende Rollen

- [role="row"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
  - : Eine Zeile von Zellen innerhalb einer tabellarischen Struktur. Eine Zeile enthält eine oder mehrere [Zellen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role), [Gitterzellen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role) oder [Spaltenüberschriften](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) und manchmal eine [Zeilenüberschrift](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role).

### Tastaturinteraktionen

Keine

### Erforderliche JavaScript-Funktionen

Keine.

> [!NOTE]
> Die erste Regel der ARIA-Nutzung ist, dass Sie, wenn Sie eine native Funktion mit den erforderlichen Semantiken und Verhaltensweisen verwenden können, statt ein Element umzuwidmen und eine ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, dies tun sollten. Verwenden Sie das HTML `<table>`-Element statt der ARIA-Rolle der Tabelle, wann immer möglich.

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

Oben ist eine nicht-semantische ARIA-Tabelle mit einem Tabellenkopf- und Tabellenkörper, wobei fünf von 81 Zeilen im DOM vorhanden sind: eine innerhalb eines Tabellenkopfes und vier Zeilen im Tabellenkörper. Die Kopfzeile, alleine in einer Kopfzeilen-rowgroup, hat zwei Spaltenüberschriften. Die Spalten können sortiert werden, sind jedoch derzeit nicht sortiert, was durch die [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort)-Eigenschaft angezeigt wird. Der Tabellenkörper ist eine separate rowgroup mit vier Zeilen, die derzeit im DOM sind. Da nicht alle Zeilen im DOM sind, haben wir die [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex)-Eigenschaft bei jeder Zeile hinzugefügt.

## Best Practices

Verwenden Sie nur {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}} usw. für die Daten-Struktur der Tabelle. Sie können diese ARIA-Rollen hinzufügen, um die Barrierefreiheit zu gewährleisten, sollte die native Semantik der Tabelle entfernt werden, z. B. durch CSS. Ein relevanter Anwendungsfall für die ARIA-Tabellenrolle ist, wenn die display-Eigenschaft von CSS die native Semantik einer Tabelle überschreibt, z. B. durch `display: grid`. In diesem Fall können Sie die ARIA-Tabellenrollen verwenden, um die Semantik hinzuzufügen.

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

Oben ist die semantische Art, eine Tabelle zu schreiben. Die ARIA-Rollen sind nur dann notwendig, wenn die native Semantik der Tabelle und damit der Tabellenzeilen vernichtet wird, z. B. durch das Setzen der [display-Eigenschaft auf flex oder grid](/de/docs/Web/CSS/display#accessibility).

### Zusätzliche Vorteile

keine

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTML Tabelle](/de/docs/Web/HTML/Element/table)
- [HTML Tabellenkörper](/de/docs/Web/HTML/Element/tbody)
- [HTML Tabellenfuß](/de/docs/Web/HTML/Element/tfoot)
- [HTML Tabellenkopf](/de/docs/Web/HTML/Element/thead)
