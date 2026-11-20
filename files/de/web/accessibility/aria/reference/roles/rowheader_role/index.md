---
title: "ARIA: rowheader-Rolle"
short-title: rowheader
slug: Web/Accessibility/ARIA/Reference/Roles/rowheader_role
l10n:
  sourceCommit: 5af4f6e12c119ea0d809b35b3fa3266a0fbe4ef4
---

Ein Element mit `role="rowheader"` ist eine [Zelle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role), die Überschrifteninformationen für eine [Zeile](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) innerhalb einer tabellarischen Struktur vom Typ [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), [`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) enthält.

## Beschreibung

`Rowheader` ist die Überschriften-[`cell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role) einer Zeile und stellt eine Beziehung zu den anderen Zellen derselben [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) her.

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

Die Rolle entspricht strukturell einem {{HTMLElement('th')}}-Element mit dem Geltungsbereich `row`, also `<th scope="row">`. Die Verwendung des nativen HTML-Elements {{HTMLElement('th')}} wird dringend empfohlen.

Um eine ARIA-Zeilenüberschrift zu erstellen, fügen Sie dem Element `role="rowheader"` hinzu. Diese Zeilenüberschrift muss innerhalb einer `row` liegen, die ihrerseits innerhalb einer `rowgroup` oder direkt innerhalb eines `grid`, einer `table` oder eines `treegrid` liegt.

> [!NOTE]
> Es wird dringend empfohlen, nach Möglichkeit die nativen [Tabellenelemente](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics) zu verwenden.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

#### Kontextrollen

- [role="row"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
  - : Der einzige Kontext, in dem eine Zeilenüberschrift vorkommt. Die Zeile umfasst eine Zelle oder eine Gruppe von Zellen, von denen nur eine den Typ `rowheader` haben sollte. Sie entspricht dem nativen HTML-Element {{HTMLElement('tr')}}.

### Tastaturinteraktionen

Keine.

### Erforderliche JavaScript-Funktionen

Keine.

> [!NOTE]
> Die erste Regel für die Verwendung von ARIA lautet: Wenn Sie eine native Funktion verwenden können, die die benötigte Semantik und das benötigte Verhalten bereits mitbringt, sollten Sie dies tun, statt einem Element durch eine ARIA-Rolle, einen ARIA-Zustand oder eine ARIA-Eigenschaft die Zugänglichkeit **hinzuzufügen**. Verwenden Sie nach Möglichkeit die HTML-Elemente `<table>`, `<tr>`, `<th>`, `<td>` und andere [Tabellenelemente](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics) anstelle der ARIA-Tabellenrollen.

## Bewährte Verfahren

Verwenden Sie für die Struktur von Datentabellen ausschließlich {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}} und entsprechende Elemente. Wenn die native Semantik der Tabelle beispielsweise durch CSS verloren geht, können Sie diese ARIA-Rollen hinzufügen, um die Zugänglichkeit sicherzustellen. Ein Anwendungsfall für die ARIA-Tabellenrollen ist, wenn die CSS-Eigenschaft `display` die native Semantik einer Tabelle überschreibt, etwa durch `display: grid`. In diesem Fall können Sie die Semantik mithilfe der ARIA-Tabellenrollen wiederherstellen.

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

Oben sehen Sie, wie eine Tabelle mit nativer Semantik geschrieben wird. Die ARIA-Rollen sind nur erforderlich, wenn die native Semantik der Tabelle und damit auch die ihrer Zeilenüberschriften verloren geht, beispielsweise durch das [Setzen der display-Eigenschaft auf flex oder grid](/de/docs/Web/CSS/Reference/Properties/display#accessibility).

### Zusätzliche Vorteile

Keine.

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

Oben sehen Sie eine ARIA-Tabelle ohne native Tabellensemantik mit einem Tabellenkopf und einem Tabellenkörper. Von insgesamt 81 Zeilen befinden sich fünf im DOM: eine im Tabellenkopf und vier im Tabellenkörper. Die einzige Zeile in der Kopfzeilengruppe enthält zwei Spaltenüberschriften. Die Spalten sind sortierbar, derzeit aber nicht sortiert, wie die Eigenschaft [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort) angibt. Der Tabellenkörper bildet eine eigene Zeilengruppe mit derzeit vier Zeilen im DOM. Jede Datenzeile hat eine Zeilenüberschrift. Da sich nicht alle Zeilen im DOM befinden, enthält jede Zeile die Eigenschaft [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex).

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Das HTML-Element `<table>`](/de/docs/Web/HTML/Reference/Elements/table)
- [Das HTML-Element `<th>`](/de/docs/Web/HTML/Reference/Elements/th)
- [HTML-Tabellen-Tutorial](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- [ARIA-Rolle `cell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)
- [ARIA-Rolle `row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [ARIA-Rolle `gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
