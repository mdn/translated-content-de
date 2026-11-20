---
title: "ARIA: cell-Rolle"
short-title: cell
slug: Web/Accessibility/ARIA/Reference/Roles/cell_role
l10n:
  sourceCommit: 5af4f6e12c119ea0d809b35b3fa3266a0fbe4ef4
---

Der Wert `cell` des ARIA-Attributs _role_ kennzeichnet ein Element als Zelle in einer tabellarischen Struktur, die keine Informationen zu Spalten- oder Zeilenüberschriften enthält. Damit die Zelle unterstützt wird, muss sie in einem Element mit der Rolle `row` verschachtelt sein.

```html
<div role="row">
  <span role="cell">France</span>
  <span role="cell">67 million</span>
</div>
```

Eine bessere, semantisch aussagekräftigere Möglichkeit, die obigen Zellen zu schreiben, ist die Verwendung des semantischen Elements [`<td>`](/de/docs/Web/HTML/Reference/Elements/td).

```html
<tr role="row">
  <td role="cell">France</td>
  <td role="cell">67 million</td>
</tr>
```

## Beschreibung

Ein Element mit `role="cell"` ist eine Zelle innerhalb einer Zeile, optional innerhalb einer [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role), in einer [`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role). Befindet sich die Zelle in einem [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role), verwenden Sie stattdessen [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role). Die Verwendung nativer HTML-Elemente {{HTMLElement('td')}} wird nachdrücklich empfohlen, wann immer sie möglich ist.

Jedes Element mit `role="cell"` MUSS in einem Containerelement mit [`role="row"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) verschachtelt sein. Diese Zeile kann wiederum in einem Element mit [`role="rowgroup"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role) verschachtelt sein und sollte sich innerhalb eines `grid`, einer `table` oder eines `treegrid` befinden. Enthält eine Zelle Informationen zu einer Spalten- oder Zeilenüberschrift, verwenden Sie entsprechend die Rollen `columnheader` oder `rowheader`. Enthält die Zelle keine Überschrifteninformationen und ist sie in einem `grid` oder `treegrid` verschachtelt, ist die Rolle `gridcell` möglicherweise besser geeignet.

Eine Zelle kann mehrere Eigenschaftenattribute enthalten, die ihre Position innerhalb der tabellarischen Datenstruktur verdeutlichen. Dazu gehören [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex), [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan), [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) und [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan).

> [!NOTE]
> Die Verwendung der nativen HTML-Elemente für Tabellen ({{HTMLElement('table')}}), Tabellenzeilen ({{HTMLElement('tr')}}) und Tabellenzellen ({{HTMLElement('td')}}) wird nachdrücklich empfohlen, wann immer sie möglich ist.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

#### Kontextrollen

- [role="row"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
  - : Ein Element mit `role="row"` ist eine Zeile aus Zellen innerhalb einer tabellarischen Struktur. Eine Zeile enthält eine oder mehrere Zellen, Rasterzellen, Spaltenüberschriften oder Zeilenüberschriften innerhalb eines [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), einer [`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) oder eines `treegrid` und optional innerhalb einer [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role).
- [role="rowgroup"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
  - : `Row` ist als übergeordnetes Element einer Zelle erforderlich. `Rowgroup` ist ein optionales übergeordnetes Kontextelement einer Zeile. Es stellt eine Beziehung zwischen untergeordneten Zeilen her. Es entspricht strukturell den Elementen [`thead`](/de/docs/Web/HTML/Reference/Elements/thead), [`tfoot`](/de/docs/Web/HTML/Reference/Elements/tfoot) und [`tbody`](/de/docs/Web/HTML/Reference/Elements/tbody) in einem [HTML-Element `table`](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics).
- [role="table"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
  - : Einer der drei möglichen Kontexte (neben `grid` und `treegrid`), in denen sich eine Zeile mit Zellen befinden kann. Die Rolle `table` kennzeichnet die Zelle als Teil einer nicht interaktiven Tabellenstruktur mit Daten, die in Zeilen und Spalten angeordnet sind, ähnlich dem nativen HTML-Element [`<table>`](/de/docs/Web/HTML/Reference/Elements/table).
- [role="grid"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
  - : Einer der drei möglichen Kontexte (neben `table` und `treegrid`), in denen sich eine Zeile mit `cells` und `gridcells` befinden kann. Die Rolle `grid` kennzeichnet eine Zelle als Teil einer möglicherweise interaktiven Tabellenstruktur mit Daten, die in Zeilen und Spalten angeordnet sind, ähnlich dem nativen HTML-Element [`<table>`](/de/docs/Web/HTML/Reference/Elements/table).
- [role="treegrid"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)
  - : Ähnlich einem Raster, jedoch mit Zeilen, die wie bei einer Baumstruktur ein- und ausgeklappt werden können.

#### Untergeordnete Rollen

- [role="gridcell"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
  - : Eine Zelle in einer Zeile innerhalb eines `grid` oder `treegrid`.
- [role="columnheader"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
  - : Eine Überschriftenzelle, die strukturell einem HTML-Element [`<th>`](/de/docs/Web/HTML/Reference/Elements/th) mit Geltungsbereich für eine Spalte entspricht. Anders als eine gewöhnliche Zelle stellt die Rolle `columnheader` eine Beziehung zwischen der Überschriftenzelle und allen Zellen der entsprechenden Spalte her.
- [role="rowheader"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
  - : Eine Überschriftenzelle, die strukturell einem HTML-Element [`<th>`](/de/docs/Web/HTML/Reference/Elements/th) mit Geltungsbereich für eine Zeile entspricht. Anders als eine gewöhnliche Zelle stellt die Rolle `rowheader` eine Beziehung zwischen der Überschriftenzelle und allen Zellen der entsprechenden Zeile her.

#### Zustände und Eigenschaften

- [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan)
  - : Ähnlich dem Attribut `colspan` der HTML-Elemente [`<th>`](/de/docs/Web/HTML/Reference/Elements/th) und [`<td>`](/de/docs/Web/HTML/Reference/Elements/td) legt es fest, über wie viele Spalten sich die Zelle erstreckt.
- [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan)
  - : Ähnlich dem Attribut `rowspan` der HTML-Elemente [`<th>`](/de/docs/Web/HTML/Reference/Elements/th) und [`<td>`](/de/docs/Web/HTML/Reference/Elements/td) legt es fest, über wie viele Zeilen sich die Zelle erstreckt.
- Attribut [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex)
  - : Das Attribut `aria-colindex` wird nur benötigt, wenn Spalten im DOM nicht vorhanden sind. Als Wert erhält es eine ganze Zahl zwischen 1 und der Gesamtzahl der Spalten innerhalb der `table`, des `grid` oder des `treegrid`. `aria-colindex` gibt den Spaltenindex oder die Position eines Elements bezogen auf die Gesamtzahl der Spalten innerhalb einer Zeile an. Sind alle Spalten im DOM vorhanden, ist dieses Attribut nicht erforderlich.
- Attribut [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex)
  - : Das Attribut `aria-rowindex` wird nur benötigt, wenn Zeilen im DOM nicht vorhanden sind. Es gibt an, in welcher Zeile sich die aktuelle Zelle bezogen auf die Gesamtzahl der Zeilen befindet. Als Wert erhält das Attribut eine ganze Zahl zwischen 1 und der Gesamtzahl der Zeilen innerhalb der Tabelle, des Rasters oder des Baumrasters. Diese Zahl gibt die Position beziehungsweise den Index der Zelle an. Beispielsweise hätte eine Zelle in der ersten Zeile des ersten Tabellenkopfs wahrscheinlich `aria-rowindex="1"` und Zellen in Zeile 47 hätten `aria-rowindex="47"`, falls `aria-rowindex` erforderlich ist, weil nicht alle Zeilen im DOM vorhanden sind. Wenn die vorhandenen Zeilen aufeinanderfolgen und keine Zellen einen `colspan`- oder `rowspan`-Wert größer als eins haben, kann diese Eigenschaft statt auf allen Zellen auch auf deren übergeordneten Zeilen gesetzt werden.

### Tastaturinteraktionen

Keine.

### Erforderliche JavaScript-Funktionen

Die erste Regel für die Verwendung von ARIA lautet: Wenn Sie statt der Umwidmung eines Elements und des **Hinzufügens** einer ARIA-Rolle, eines ARIA-Zustands oder einer ARIA-Eigenschaft zur Herstellung der Barrierefreiheit eine native Funktion mit der benötigten Semantik und dem benötigten Verhalten verwenden können, sollten Sie das tun. Verwenden Sie nach Möglichkeit das HTML-Element [`<td>`](/de/docs/Web/HTML/Reference/Elements/td) anstelle der ARIA-Rolle `cell`.

## Bewährte Vorgehensweisen

Verwenden Sie {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}} usw. ausschließlich für die Struktur von Datentabellen. Sie können ARIA-Rollen hinzufügen, um die Barrierefreiheit sicherzustellen, wenn die native Semantik der Tabelle beispielsweise durch CSS entfernt wurde. Ein relevanter Anwendungsfall für die ARIA-Rolle `table` liegt vor, wenn die native Semantik einer Tabelle durch [die CSS-Eigenschaft `display`, etwa durch `display: grid`](/de/docs/Web/CSS/Reference/Properties/display#accessibility), überschrieben wird. In diesem Fall können Sie die ARIA-Tabellenrollen verwenden, um die Semantik wiederherzustellen.

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
      <th role="columnheader" aria-sort="none" aria-rowindex="1">ARIA Role</th>
      <th role="columnheader" aria-sort="none" aria-rowindex="1">
        Semantic Element
      </th>
    </tr>
  </thead>
  <tbody role="rowgroup">
    <tr role="row">
      <td role="cell" aria-rowindex="11">header</td>
      <td role="cell" aria-rowindex="11">h1</td>
    </tr>
    <tr role="row">
      <td role="cell" aria-rowindex="16">header</td>
      <td role="cell" aria-rowindex="16">h6</td>
    </tr>
    <tr role="row">
      <td role="cell" aria-rowindex="18">rowgroup</td>
      <td role="cell" aria-rowindex="18">thead</td>
    </tr>
    <tr role="row">
      <td role="cell" aria-rowindex="24">term</td>
      <td role="cell" aria-rowindex="24">dt</td>
    </tr>
  </tbody>
</table>
```

Oben sehen Sie die semantisch korrekte Schreibweise einer Tabelle. Die ARIA-Rollen sind nicht erforderlich, solange die native Semantik der Tabelle und damit auch der Tabellenzeilen nicht verändert wurde, beispielsweise durch [die Eigenschaft `display`](/de/docs/Web/CSS/Reference/Properties/display#accessibility).

### Zusätzliche Vorteile

Wird die Rolle auf ein {{HTMLElement('td')}} angewendet, gibt sie dem Element seine Zellensemantik zurück, falls diese beispielsweise durch `display: grid;` entfernt wurde.

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
      <span role="columnheader" aria-sort="none" aria-rowindex="1"
        >ARIA Role</span
      >
      <span role="columnheader" aria-sort="none" aria-rowindex="1"
        >Semantic Element</span
      >
    </div>
  </div>
  <div role="rowgroup">
    <div role="row">
      <span role="cell" aria-rowindex="11">header</span>
      <span role="cell" aria-rowindex="11">h1</span>
    </div>
    <div role="row">
      <span role="cell" aria-rowindex="16">header</span>
      <span role="cell" aria-rowindex="16">h6</span>
    </div>
    <div role="row">
      <span role="cell" aria-rowindex="18">rowgroup</span>
      <span role="cell" aria-rowindex="18">thead</span>
    </div>
    <div role="row">
      <span role="cell" aria-rowindex="24">term</span>
      <span role="cell" aria-rowindex="24">dt</span>
    </div>
  </div>
</div>
```

Das obige Beispiel zeigt eine nicht semantische ARIA-Tabelle, bei der fünf von 81 Zeilen im DOM vorhanden sind: eine im Tabellenkopf und vier im Tabellenkörper. Da nicht alle Zeilen im DOM vorhanden sind, wurde die Eigenschaft `aria-rowindex` auf jede Zelle angewendet. Würde sich keine Zelle über mehr als eine Zeile oder Spalte erstrecken, könnte `aria-rowindex` statt auf den einzelnen Zellen der Zeile auf der Zeile selbst gesetzt werden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`role="row"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [`role="gridcell"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [HTML-Element `<td>`](/de/docs/Web/HTML/Reference/Elements/td)
- [HTML-Element `<th>`](/de/docs/Web/HTML/Reference/Elements/th)
- [Lernen: Barrierefreiheit von HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
- [Lernen: Grundlagen von HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
