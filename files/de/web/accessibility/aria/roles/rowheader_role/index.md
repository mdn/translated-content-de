---
title: "ARIA: rowheader-Rolle"
slug: Web/Accessibility/ARIA/Roles/rowheader_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Ein Element mit `role="rowheader"` ist eine [cell](/de/docs/Web/Accessibility/ARIA/Roles/cell_role), die Header-Informationen für eine [row](/de/docs/Web/Accessibility/ARIA/Roles/row_role) innerhalb einer tabellarischen Struktur eines [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role), [`table`](/de/docs/Web/Accessibility/ARIA/Roles/table_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role) enthält.

## Beschreibung

`Rowheader` ist die Header-[`cell`](/de/docs/Web/Accessibility/ARIA/Roles/cell_role) für eine Reihe und stellt eine Beziehung zwischen ihm und den anderen Zellen in derselben [`row`](/de/docs/Web/Accessibility/ARIA/Roles/row_role) her.

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
      <span role="rowheader">Finland</span>
      <span role="cell">5.5 million</span>
    </div>
    <div role="row">
      <span role="rowheader">France</span>
      <span role="cell">67 million</span>
    </div>
  </div>
</div>
```

Es ist ein strukturelles Äquivalent zum {{HTMLElement('th')}}-Element mit einem `row`-Bereich, `<th scope="row">`. Die Verwendung des nativen {{HTMLElement('th')}} HTML-Elements wird dringend empfohlen.

Um einen ARIA-Row-Header zu erstellen, fügen Sie `role="rowheader"` zum Element hinzu. Dieser Row-Header muss in einer `row` verschachtelt sein, die wiederum in einem `rowgroup` oder direkt in einem `grid`, `table` oder `treegrid` verschachtelt ist.

> [!NOTE]
> Die Verwendung der nativen [Tabellenelemente](/de/docs/Learn/HTML/Tables/Basics) wird, wann immer möglich, dringend empfohlen.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

#### Kontextrollen

- [role="row"](/de/docs/Web/Accessibility/ARIA/Roles/row_role)
  - : Der einzige Kontext, in dem Sie eine Reihe finden. Sie umfasst eine Zelle oder eine Gruppe von Zellenreihen, von denen nur eine vom Typ Rowheader sein sollte. Ähnlich wie das native {{HTMLElement('tr')}} HTML-Element.

### Tastaturinteraktionen

Keine

### Erforderliche JavaScript-Funktionen

Keine.

> [!NOTE]
> Die erste Regel der ARIA-Nutzung lautet: Wenn Sie eine native Funktion mit den benötigten Semantiken und Verhaltensweisen verwenden können, anstatt ein Element umzuformen und eine ARIA-Rolle, einen Zustand oder eine Eigenschaft **hinzuzufügen**, um es zugänglich zu machen, dann tun Sie das. Verwenden Sie die HTML-Elemente `<table>`, `<tr>`, `<th>`, `<td>` und andere [Tabellenelemente](/de/docs/Learn/HTML/Tables/Basics) anstelle der ARIA-Tabellenrollen, wann immer dies möglich ist.

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

Oben ist eine nicht-semantische ARIA-Tabelle mit einem Tabellenkopf und einem Tabellenkörper gezeigt, wobei fünf der 81 Reihen im DOM vorhanden sind: eine innerhalb eines Tabellenkopfes und vier Reihen innerhalb des Tabellenkörpers. Die Kopfzeile, allein in einer Kopfzeilengruppe, hat zwei Spaltenköpfe. Die Spalten sind sortierbar, aber derzeit nicht sortiert, wie durch die [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-sort)-Eigenschaft angezeigt wird. Der Tabellenkörper ist eine separate Zeilengruppe, mit vier Reihen derzeit im DOM. Jede Datenzeile hat einen Reihenheader. Da nicht alle Reihen im DOM sind, haben wir die [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex)-Eigenschaft auf jeder Reihe hinzugefügt.

## Beste Praktiken

Verwenden Sie nur {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}} usw. für die Daten-Tabellenstruktur. Sie können diese ARIA-Rollen hinzufügen, um die Barrierefreiheit sicherzustellen, falls die nativen Semantiken der Tabelle entfernt werden, beispielsweise durch CSS. Ein relevanter Anwendungsfall für alle ARIA-Tabellenrollen ist, wenn die CSS-`display`-Eigenschaft die nativen Semantiken einer Tabelle überschreibt, zum Beispiel durch `display: grid`. In diesem Fall können Sie die ARIA-Tabellenrollen verwenden, um die Semantiken hinzuzufügen.

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

Oben ist die semantische Weise dargestellt, eine Tabelle zu schreiben. Die ARIA-Rollen sind nur erforderlich, wenn die nativen Semantiken der Tabelle und damit die Zeilenheader der Tabelle zerstört werden, z. B. durch das Setzen der [display-Eigenschaft auf flex oder grid](/de/docs/Web/CSS/display#accessibility).

### Zusätzliche Vorteile

Keine

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Das HTML-`<table>`-Element](/de/docs/Web/HTML/Element/table)
- [Das HTML-`<th>`-Element](/de/docs/Web/HTML/Element/th)
- [HTML-Tabellen-Tutorial](/de/docs/Learn/HTML/Tables/Basics)
- [ARIA `cell`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/cell_role)
- [ARIA `row`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/row_role)
- [ARIA `gridcell`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
