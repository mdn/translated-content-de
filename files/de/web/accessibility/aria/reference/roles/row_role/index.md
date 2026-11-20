---
title: "ARIA: row-Rolle"
short-title: row
slug: Web/Accessibility/ARIA/Reference/Roles/row_role
l10n:
  sourceCommit: 5af4f6e12c119ea0d809b35b3fa3266a0fbe4ef4
---

Ein Element mit `role="row"` ist eine Zeile aus Zellen innerhalb einer tabellarischen Struktur. Eine Zeile enthält eine oder mehrere Zellen, Grid-Zellen oder Spaltenüberschriften und gegebenenfalls eine Zeilenüberschrift. Sie befindet sich innerhalb eines [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), einer [`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) oder eines [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) und optional innerhalb einer [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role).

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

Das Element mit `role="row"` ist eine Zeile innerhalb eines [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), einer [`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) oder eines [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) und optional innerhalb einer [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role). Es enthält ein oder mehrere Elemente mit den Rollen [`cell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role), [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role), [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) oder [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role) innerhalb einer statischen tabellarischen Struktur. Es wird dringend empfohlen, nach Möglichkeit native [HTML-Elemente `<tr>`](/de/docs/Web/HTML/Reference/Elements/tr) zu verwenden.

Um eine ARIA-Zeile zu erstellen, fügen Sie dem Container-Element `role="row"` hinzu. Diese Zeile sollte in ein grid, eine table oder ein treegrid eingebettet sein. Eine Gruppe von Zeilen kann direkt in ein grid, eine table oder ein treegrid oder in eine rowgroup innerhalb eines dieser Container eingebettet sein. Jede Zeile enthält untergeordnete Zellen. Diese Zellen können unterschiedliche Typen haben, je nachdem, ob es sich um Spalten- oder Zeilenüberschriften, Grid-Zellen oder reguläre Zellen handelt.

Eine Zeile kann mehrere Attribute enthalten, die ihre Rolle näher beschreiben, darunter [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex), [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level), [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) und [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected).

Befindet sich die Zeile innerhalb eines treegrid, kann sie das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) enthalten, um ihren aktuellen Zustand anzugeben. Bei einer gewöhnlichen table oder einem gewöhnlichen grid ist das nicht der Fall; dort ist das Attribut `aria-expanded` nicht vorhanden.

Um ein interaktives Widget mit tabellarischer Struktur zu erstellen, verwenden Sie stattdessen das grid-Muster. Wenn die Interaktion einen Auswahlzustand für einzelne Zellen vorsieht, eine Navigation von links nach rechts und von oben nach unten ermöglicht oder die Benutzeroberfläche das Umordnen von Zellen erlaubt – etwa per Drag-and-drop –, verwenden Sie [grid](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) oder [treegrid](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role).

> [!NOTE]
> Es wird dringend empfohlen, nach Möglichkeit das native HTML-Tabellenelement ({{HTMLElement('table')}}) zusammen mit dem Tabellenzeilenelement ({{HTMLElement('tr')}}) zu verwenden.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

#### Kontextrollen

- [role="rowgroup"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
  - : Ein optionales übergeordnetes Kontextelement für Zeilen, das eine Beziehung zwischen den untergeordneten Zeilen herstellt. Es entspricht strukturell den Elementen thead, tfoot und tbody in einer HTML-Tabelle.
- [role="table"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
  - : Einer der drei möglichen Kontexte – neben grid und treegrid –, in denen eine Zeile vorkommen kann. Die Rolle kennzeichnet die Zeile als Teil einer nicht interaktiven Tabellenstruktur mit Daten, die in Zeilen und Spalten angeordnet sind, ähnlich dem nativen HTML-Element {{HTMLElement('table')}}.
- [role="grid"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
  - : Einer der drei möglichen Kontexte – neben table und treegrid –, in denen eine Zeile vorkommen kann. Die Rolle kennzeichnet die Zeile als Teil einer nicht interaktiven Tabellenstruktur mit Daten, die in Zeilen und Spalten angeordnet sind, ähnlich dem nativen HTML-Element {{HTMLElement('table')}}.
- [role="treegrid"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)
  - : Ähnlich einem grid, jedoch mit Zeilen, die wie bei einer Baumstruktur ein- und ausgeklappt werden können.

#### Rollen untergeordneter Elemente

- [role="cell"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)
  - : Eine Zelle in einer Zeile innerhalb eines tabellarischen Containers.
- [role="gridcell"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
  - : Eine Zelle in einer Zeile innerhalb eines grid oder treegrid.
- [role="columnheader"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
  - : Eine Überschriftenzelle, die strukturell dem HTML-Element {{HTMLElement('th')}} mit einem Gültigkeitsbereich für eine Spalte ({{HTMLElement('tr', '<code>&lt;tr scope="col"&gt;</code>')}}) entspricht. Anders als eine einfache Zelle stellt die Rolle columnheader eine Beziehung zwischen der Überschriftenzelle und allen Zellen der zugehörigen Spalte her.
- [role="rowheader"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
  - : Eine Überschriftenzelle, die strukturell dem HTML-Element {{HTMLElement('th')}} mit einem Gültigkeitsbereich für eine Zeile ({{HTMLElement('tr', '<code>&lt;tr scope="row"&gt;</code>')}}) entspricht. Anders als eine einfache Zelle stellt die Rolle rowheader eine Beziehung zwischen der Überschriftenzelle und allen Zellen der zugehörigen Zeile her.

#### Zustände und Eigenschaften

- Zustand [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : Das Attribut `aria-expanded`, das den Zustand der Zeile definiert, kann einen von drei Werten annehmen oder weggelassen werden:
    - `aria-expanded="true"`: Die Zeile ist derzeit ausgeklappt.
    - `aria-expanded="false"`: Die Zeile ist derzeit eingeklappt.
    - `aria-expanded="undefined"` oder das Attribut fehlt: Die Zeile kann weder aus- noch eingeklappt werden.

    Wenn das Element mit dem Attribut `aria-expanded` das Ausklappen eines anderen gruppierenden Containers steuert, der dem Element nicht zugeordnet ist, **sollten** Autorinnen und Autoren mit dem Attribut `aria-controls` auf diesen Container verweisen.

- Zustand [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
  - : Nur relevant, wenn sich die Zeile in einem interaktiven Container wie einem grid oder treegrid befindet; für eine Zeile in einer table ist es nicht relevant. Das Attribut `aria-selected` kann einen von drei Werten annehmen oder weggelassen werden:
    - `aria-selected="true"`: Die Zeile ist derzeit ausgewählt.
    - `aria-selected="false"`: Die Zeile ist derzeit nicht ausgewählt.
    - `aria-selected="undefined"` oder das Attribut fehlt: Die Zeile kann nicht ausgewählt werden.

- Attribut [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex)
  - : Das Attribut `aria-colindex` wird nur benötigt, wenn Spalten im DOM ausgeblendet sind. Es wird üblicherweise auf untergeordneten Elementen der Zeile statt auf der Zeile selbst gesetzt. Wenn die angezeigten Spalten aufeinanderfolgen, kann es auf der Zeile gesetzt werden.

    Das Attribut hat als Wert eine ganze Zahl zwischen 1 und der Gesamtzahl der Spalten in der table, dem grid oder dem treegrid. Wird es auf der Zeile gesetzt, definiert `aria-colindex` den Spaltenindex beziehungsweise die Position eines Elements im Verhältnis zur Gesamtzahl der Spalten einer Zeile. Wenn beispielsweise in einer Tabelle mit 15 Spalten nur die Spalten 4, 5 und 6 im DOM vorhanden sind, könnte auf jeder Zeile `aria-colindex="4"` gesetzt werden.

    Wenn die im DOM vorhandenen Spalten **nicht** aufeinanderfolgen oder wenn Zellen sich über mehr als eine Zeile oder Spalte erstrecken, setzen Sie `aria-colindex` auf allen untergeordneten Elementen jeder Zeile statt auf der Zeile selbst.

    Wenn alle Spalten im DOM vorhanden sind, ist dieses Attribut nicht erforderlich.

- Attribut [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex)
  - : Das Attribut `aria-rowindex` wird nur benötigt, wenn Zeilen im DOM ausgeblendet sind. Es gibt an, welche Zeile innerhalb der Gesamtzahl der Zeilen gerade gelesen wird. Das Attribut wird auf jeder Zeile mit einem eindeutigen Wert gesetzt und hat als Wert eine ganze Zahl zwischen 1 und der Gesamtzahl der Zeilen in der table, dem grid oder dem treegrid. Dieser Wert gibt die Position beziehungsweise den Index der jeweiligen Zeile an. Wenn eine Tabelle beispielsweise 1.500 Zeilen hat, aber nur die Überschriftenzeile sowie die Zeilen 47 und 52 im DOM vorhanden sind, würde auf der Überschriftenzeile `aria-rowindex="1"`, auf der 47. Zeile `aria-rowindex="47"` und auf der 52. Zeile `aria-rowindex="52"` gesetzt.

    Wenn alle Zeilen im DOM vorhanden sind, ist dieses Attribut nicht erforderlich.

### Tastaturinteraktionen

Keine.

### Erforderliche JavaScript-Funktionen

Keine. Informationen zu sortierbaren Spalten finden Sie unter der ARIA-Rolle [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role).

> [!NOTE]
> Die erste Regel für die Verwendung von ARIA lautet: Wenn Sie eine native Funktion verwenden können, die die benötigte Semantik und das benötigte Verhalten bereits mitbringt, statt ein Element zweckzuentfremden und eine ARIA-Rolle, einen ARIA-Zustand oder eine ARIA-Eigenschaft **hinzuzufügen**, um es zugänglich zu machen, dann verwenden Sie die native Funktion. Verwenden Sie nach Möglichkeit das HTML-Element {{HTMLElement('table')}} statt der ARIA-Rolle table.

## Bewährte Praktiken

Verwenden Sie für die Struktur von Datentabellen ausschließlich {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}} usw. Sie können diese ARIA-Rollen hinzufügen, um die Barrierefreiheit sicherzustellen, falls die native Semantik der Tabelle beispielsweise durch CSS entfernt wird. Ein Anwendungsfall für die ARIA-Rolle table liegt vor, wenn die native Semantik einer Tabelle durch die CSS-Eigenschaft display überschrieben wird, etwa durch display: grid. In diesem Fall können Sie die Tabellensemantik mit den ARIA-Tabellenrollen wiederherstellen.

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
    <tr role="row" aria-rowindex="18">
      <td role="cell">rowgroup</td>
      <td role="cell">thead</td>
    </tr>
    <tr role="row" aria-rowindex="24">
      <td role="cell">term</td>
      <td role="cell">dt</td>
    </tr>
  </tbody>
</table>
```

Oben ist die semantisch korrekte Schreibweise einer Tabelle dargestellt. Die ARIA-Rollen sind nur erforderlich, wenn die native Semantik der Tabelle und damit auch der Tabellenzeilen aufgehoben wird, etwa indem die [Eigenschaft display auf flex oder grid gesetzt wird](/de/docs/Web/CSS/Reference/Properties/display#accessibility).

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

Oben ist eine nicht semantische ARIA-Tabelle dargestellt, bei der fünf von 81 Zeilen im DOM vorhanden sind: eine im Tabellenkopf und vier im Tabellenkörper. Die Überschriftenzeile, die allein in einer rowgroup für den Tabellenkopf steht, enthält zwei Spaltenüberschriften. Die Spalten sind sortierbar, derzeit aber nicht sortiert, wie die Eigenschaft `aria-sort` angibt. Der Tabellenkörper befindet sich in einer separaten rowgroup, von der derzeit vier Zeilen im DOM vorhanden sind. Da nicht alle Zeilen im DOM vorhanden sind, wurde die Eigenschaft `aria-rowindex` auf jeder Zeile gesetzt.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das HTML-Element {{HTMLElement('tr', '<code>&lt;tr&gt;</code> table row')}}
- {{HTMLElement('table')}}
- [Die Rolle `rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
- [Die Rolle `table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
- [Die Rolle `grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
- [Die Rolle `treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)
- [Die Rolle `cell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)
- [Die Rolle `gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [Die Rolle `columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [Die Rolle `rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
