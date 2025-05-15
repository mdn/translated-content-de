---
title: "ARIA: rowgroup-Rolle"
short-title: rowgroup
slug: Web/Accessibility/ARIA/Reference/Roles/rowgroup_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Ein Element mit `role="rowgroup"` ist eine Gruppe von [rows](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) innerhalb einer tabellarischen Struktur. Ein `rowgroup` enthält eine oder mehrere Reihen von [cells](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role), [grid cells](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role), [column headers](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) oder [row headers](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role) innerhalb eines [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), [`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role).

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

`Rowgroup` stellt eine Beziehung zwischen den enthaltenen Zeilenelementen her und ist ein strukturelles Äquivalent zu den {{HTMLElement('thead')}}, {{HTMLElement('tfoot')}} und {{HTMLElement('tbody')}}-Elementen in HTML. Es gibt jedoch keine Unterscheidung zwischen verschiedenen Arten von Zeilengruppen. Ihre Elemente müssen in Elementen mit entweder der [table](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) oder [grid](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)-Rolle enthalten oder von ihnen besessen sein. Die Verwendung der nativen {{HTMLElement('thead')}}, {{HTMLElement('tfoot')}} und {{HTMLElement('tbody')}}-HTML-Elemente wird nachdrücklich empfohlen, wann immer möglich.

Um einen ARIA-Tabellenkopf, Tabellenfuß oder Tabellenkörper zu erstellen, fügen Sie dem Element `role="rowgroup"` hinzu. Diese Zeilengruppe sollte innerhalb eines Gitters, einer Tabelle oder eines Baumgitters verschachtelt sein und eine Gruppe von einer oder mehreren Zeilen umfassen. Jede Zeile enthält wiederum untergeordnete Zellen. Diese Zellen können von verschiedenen Typen sein, je nachdem, ob es sich um Spalten- oder Reihenüberschriften oder einfache oder Rasterzellen handelt.

> [!NOTE]
> Es wird nachdrücklich empfohlen, das native HTML-Tabellenelement ({{HTMLElement('table')}}) zusammen mit den Tabellenelementen ({{HTMLElement('thead')}}, {{HTMLElement('tfoot')}}, und {{HTMLElement('tbody')}}) wann immer möglich zu verwenden.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

#### Kontextrollen

- [role="table"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
  - : Einer der drei möglichen Kontexte (neben grid und treegrid), in denen eine Zeile gefunden wird. Es identifiziert die Zeile als Teil einer nicht-interaktiven Tabellenstruktur, die Daten in Zeilen und Spalten enthält, ähnlich dem nativen {{HTMLElement('table')}}-HTML-Element.
- [role="grid"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
  - : Einer der drei möglichen Kontexte (neben table und treegrid), in denen eine Zeile gefunden wird. Es identifiziert die Zeile als Teil einer nicht-interaktiven Tabellenstruktur, die Daten in Zeilen und Spalten enthält, ähnlich dem nativen {{HTMLElement('table')}}-HTML-Element.
- [role="treegrid"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)
  - : Ähnlich wie ein Gitter, aber mit Zeilen, die auf die gleiche Weise wie bei einem Baum erweitert und reduziert werden können.

#### Nachkommenrollen

- [role="row"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
  - : Eine Reihe von Zellen innerhalb einer tabellarischen Struktur. Eine Zeile enthält eine oder mehrere [cells](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role), [gridcell](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role) oder [column headers](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) und manchmal eine [row header](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role).

### Tastaturinteraktionen

Keine.

### Erforderliche JavaScript-Funktionen

Keine.

> [!NOTE]
> Die erste Regel der ARIA-Nutzung ist, wenn Sie eine native Funktion mit den gewünschten Semantiken und Verhaltensweisen verwenden können, anstatt ein Element neu zu verwenden und ihm eine ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie das. Verwenden Sie das HTML-Element `<table>` anstelle der ARIA-Rolle von table, wann immer möglich.

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

Das oben ist eine nicht-semantische ARIA-Tabelle mit einem Tabellenkopf und einem Tabellenkörper, wobei fünf von 81 Zeilen im DOM vorhanden sind: eine innerhalb eines Tabellenkopfes und vier Zeilen innerhalb des Tabellenkörpers. Die Kopfzeile, die allein im Header-Rowgroup ist, hat zwei Spaltenüberschriften. Die Spalten sind sortierbar, aber derzeit nicht sortiert, was durch die Eigenschaft [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort) angezeigt wird. Der Tabellenkörper ist eine separate Zeilengruppe, mit vier derzeit im DOM vorhandenen Zeilen. Da nicht alle Zeilen im DOM sind, haben wir die Eigenschaft [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) in jeder Zeile aufgenommen.

## Beste Praktiken

Verwenden Sie nur {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}} usw. für die Datenstruktur von Tabellen. Sie können diese ARIA-Rollen hinzufügen, um die Zugänglichkeit zu gewährleisten, falls die nativen Semantiken der Tabelle entfernt werden, zum Beispiel durch CSS. Ein relevanter Anwendungsfall für die ARIA-Tabellenrolle ist, wenn die display-Eigenschaft von CSS die nativen Semantiken einer Tabelle überschreibt, etwa durch `display: grid`. In diesem Fall können Sie die ARIA-Tabellenrollen verwenden, um die Semantik wieder hinzuzufügen.

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

Oben ist die semantische Art, eine Tabelle zu schreiben. Die ARIA-Rollen sind nur notwendig, wenn die nativen Semantiken der Tabelle und damit die Tabellenzeilen ausgelöscht werden, etwa durch Einstellen der [display-Eigenschaft auf flex oder grid](/de/docs/Web/CSS/display#accessibility).

### Zusätzliche Vorteile

Keine

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTML-Tabelle](/de/docs/Web/HTML/Reference/Elements/table)
- [HTML-Tabellenkörper](/de/docs/Web/HTML/Reference/Elements/tbody)
- [HTML-Tabellenfuß](/de/docs/Web/HTML/Reference/Elements/tfoot)
- [HTML-Tabellenüberschrift](/de/docs/Web/HTML/Reference/Elements/thead)
