---
title: "ARIA: Rolle rowheader"
slug: Web/Accessibility/ARIA/Roles/rowheader_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Ein Element mit `role="rowheader"` ist eine [cell](/de/docs/Web/Accessibility/ARIA/Roles/cell_role), die Header-Informationen für eine [row](/de/docs/Web/Accessibility/ARIA/Roles/row_role) innerhalb einer tabellarischen Struktur eines [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role), [`table`](/de/docs/Web/Accessibility/ARIA/Roles/table_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role) enthält.

## Beschreibung

`Rowheader` ist die Header-[`cell`](/de/docs/Web/Accessibility/ARIA/Roles/cell_role) für eine Zeile und stellt eine Beziehung zwischen dieser und den anderen Zellen in derselben [`row`](/de/docs/Web/Accessibility/ARIA/Roles/row_role) her.

```html
<div
  role="table"
  aria-label="Populations"
  aria-describedby="country_population_desc">
  <div id="country_population_desc">Weltbevölkerungen nach Land</div>
  <div role="rowgroup">
    <div role="row">
      <span role="columnheader" aria-sort="descending">Land</span>
      <span role="columnheader" aria-sort="none">Bevölkerung</span>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row">
      <span role="rowheader">Finnland</span>
      <span role="cell">5,5 Millionen</span>
    </div>
    <div role="row">
      <span role="rowheader">Frankreich</span>
      <span role="cell">67 Millionen</span>
    </div>
  </div>
</div>
```

Es ist ein strukturelles Äquivalent zum {{HTMLElement('th')}}-Element mit einem Scope von `row`, `<th scope="row">`. Die Verwendung des nativen {{HTMLElement('th')}} HTML-Elements wird dringend empfohlen.

Um einen ARIA-Zeilen-Header zu erstellen, fügen Sie `role="rowheader"` zum Element hinzu. Dieser Zeilen-Header muss innerhalb einer `row` verschachtelt sein, die wiederum innerhalb einer `rowgroup` oder direkt innerhalb eines `grid`, `table` oder `treegrid` liegt.

> [!NOTE]
> Die Verwendung der nativen [Tabellen-Elemente](/de/docs/Learn/HTML/Tables/Basics) wird nachdrücklich empfohlen, wann immer dies möglich ist.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

#### Kontextrollen

- [role="row"](/de/docs/Web/Accessibility/ARIA/Roles/row_role)
  - : Der einzige Kontext, in dem Sie eine Zeile finden. Es umfasst eine Zellzeile oder Gruppe von Zellen, von denen nur eine vom Typ rowheader sein sollte. Ähnlich dem nativen {{HTMLElement('tr')}} HTML-Element.

### Tastaturinteraktionen

Keine

### Erforderliche JavaScript-Funktionen

Keine.

> [!NOTE]
> Die erste Regel der ARIA-Verwendung ist, wenn Sie eine native Funktion mit den von Ihnen benötigten Semantiken und Verhalten bereits eingebaut verwenden können, anstatt ein Element umzufunktionieren und **ein** ARIA-Rolle, -Zustand oder -Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie dies. Verwenden Sie die HTML-Elemente `<table>`, `<tr>`, `<th>`, `<td>` und andere [Tabellen-Elemente](/de/docs/Learn/HTML/Tables/Basics) anstelle der ARIA-Tabellenrollen, wann immer dies möglich ist.

## Beispiele

```html
<div
  role="table"
  aria-label="Semantische Elemente"
  aria-describedby="semantic_elements_table_desc"
  aria-rowcount="81">
  <div id="semantic_elements_table_desc">
    Semantische Elemente, die anstelle von ARIA-Rollen verwendet werden sollten
  </div>
  <div role="rowgroup">
    <div role="row">
      <span role="columnheader" aria-sort="none">ARIA-Rolle</span>
      <span role="columnheader" aria-sort="none">Semantisches Element</span>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row" aria-rowindex="11">
      <span role="rowheader">header</span>
      <span role="cell">h1</span>
    </div>
    <div role="row" aria-rowindex="16">
      <span role="rowheader">header</span>
      <span role="cell">h6</span>
    </div>
    <div role="row" aria-rowindex="18">
      <span role="rowheader">rowgroup</span>
      <span role="cell">thead</span>
    </div>
    <div role="row" aria-rowindex="24">
      <span role="rowheader">term</span>
      <span role="cell">dt</span>
    </div>
  </div>
</div>
```

Oben ist eine nicht-semantische ARIA-Tabelle mit einem Tabellen-Header und einem Tabellenkörper dargestellt, wobei fünf der 81 Zeilen im DOM vorhanden sind: eine im Tabellen-Header und vier Zeilen im Tabellenkörper. Die Header-Zeile, allein in einer Header-Zeilengruppe, hat zwei Spalten-Header. Die Spalten sind sortierbar, aber derzeit nicht sortiert, wie durch die [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-sort)-Eigenschaft angezeigt wird. Der Tabellenkörper ist eine separate Zeilengruppe, mit derzeit vier Zeilen im DOM. Jede Datenzeile der Tabelle hat einen Zeilen-Header. Da nicht alle Zeilen im DOM sind, haben wir die [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex)-Eigenschaft in jeder Zeile eingefügt.

## Beste Praktiken

Verwenden Sie nur {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}} usw. für die Struktur von Datentabellen. Sie können diese ARIA-Rollen hinzufügen, um die Barrierefreiheit zu gewährleisten, falls die native Semantik der Tabelle entfernt wird, beispielsweise durch CSS. Ein relevanter Anwendungsfall für alle ARIA-Tabellenrollen ist, wenn die native Semantik einer Tabelle durch die CSS-Eigenschaft `display` überschrieben wird, wie z.B. durch `display: grid`. In diesem Fall können Sie die ARIA-Tabellenrollen verwenden, um die Semantik hinzuzufügen.

```html
<table
  role="table"
  aria-label="Semantische Elemente"
  aria-describedby="semantic_elements_table_desc"
  aria-rowcount="81">
  <caption id="semantic_elements_table_desc">
    Semantische Elemente, die anstelle von ARIA-Rollen verwendet werden sollten
  </caption>
  <thead role="rowgroup">
    <tr role="row">
      <th role="columnheader" aria-sort="none">ARIA-Rolle</th>
      <th role="columnheader" aria-sort="none">Semantisches Element</th>
    </tr>
  </thead>
  <tbody role="rowgroup">
    <tr role="row" aria-rowindex="11">
      <th role="rowheader">header</th>
      <td role="cell">h1</td>
    </tr>
    <tr role="row" aria-rowindex="16">
      <th role="rowheader">header</th>
      <td role="cell">h6</td>
    </tr>
  </tbody>
</table>
```

Oben ist die semantische Art, eine Tabelle zu schreiben. Die ARIA-Rollen sind nur notwendig, wenn die native Semantik der Tabelle und damit die Reihenheader der Tabelle aufgehoben werden, wie z. B. durch Einstellen der [display-Eigenschaft auf flex oder grid](/de/docs/Web/CSS/display#accessibility).

### Zusätzliche Vorteile

Keine

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Das HTML `<table>`-Element](/de/docs/Web/HTML/Element/table)
- [Das HTML `<th>`-Element](/de/docs/Web/HTML/Element/th)
- [HTML-Tutorial für Tabellen](/de/docs/Learn/HTML/Tables/Basics)
- [ARIA `cell`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/cell_role)
- [ARIA `row`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/row_role)
- [ARIA `gridcell`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
