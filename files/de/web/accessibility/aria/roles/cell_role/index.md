---
title: "ARIA: cell Rolle"
slug: Web/Accessibility/ARIA/Roles/cell_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Der `cell` Wert des ARIA _role_ Attributs identifiziert ein Element als Zelle in einem tabellarischen Container, der keine Spalten- oder Zeilenheader-Informationen enthält. Um unterstützt zu werden, muss die Zelle in einem Element mit der Rolle `row` verschachtelt sein.

```html
<div role="row">
  <span role="cell">France</span>
  <span role="cell">67 million</span>
</div>
```

Eine bessere, semantisch sinnvollere Art, die oben genannten Zellen zu schreiben, wäre die Verwendung des semantischen [`<td>`](/de/docs/Web/HTML/Element/td) Elements.

```html
<tr role="row">
  <td role="cell">France</td>
  <td role="cell">67 million</td>
</tr>
```

## Beschreibung

Das Element mit `role="cell"` ist eine Zelle innerhalb einer Zeile, optional innerhalb einer [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role), innerhalb einer [`table`](/de/docs/Web/Accessibility/ARIA/Roles/table_role). Wenn die Zelle in einem [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role) ist, wählen Sie [`gridcell`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role). Die Verwendung von nativen HTML {{HTMLElement('td')}} Elementen, wann immer möglich, wird dringend empfohlen.

Jedes Element mit `role="cell"` MUSS in einem Container-Element mit [`role="row"`](/de/docs/Web/Accessibility/ARIA/Roles/row_role) verschachtelt sein. Diese Zeile kann wiederum innerhalb eines Elements mit [`role="rowgroup"`](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role) verschachtelt sein und sollte innerhalb eines `grid`, `table` oder `treegrid` verschachtelt sein. Wenn eine Zelle Spalten- oder Zeilenheader-Informationen enthält, verwenden Sie entsprechend die Rollen `columnheader` oder `rowheader`. Wenn die Zelle keine Header-Informationen enthält und in einem `grid` oder `treegrid` verschachtelt ist, kann die Rolle `gridcell` geeigneter sein.

Eine Zelle kann eine Anzahl von Eigenschafts-Attributen enthalten, die die Position der Zelle innerhalb der tabellarischen Datenstruktur klären, einschließlich [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex), [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colspan), [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) und [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan).

> [!NOTE]
> Verwenden Sie das native HTML-Tabellenelement ({{HTMLElement('table')}}), zusammen mit dem Tabellenzeilenelement ({{HTMLElement('tr')}}) und dem Tabellenzellen-Element ({{HTMLElement('td')}}), wann immer möglich.

### Zugeordnete WAI-ARIA Rollen, Zustände und Eigenschaften

#### Kontext-Rollen

- [role="row"](/de/docs/Web/Accessibility/ARIA/Roles/row_role)
  - : Ein Element mit `role="row"` ist eine Reihe von Zellen innerhalb einer tabellarischen Struktur. Eine Zeile enthält eine oder mehrere Zellen, Gitterzellen, Spaltenheader oder Zeilenheader innerhalb eines [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role), [`table`](/de/docs/Web/Accessibility/ARIA/Roles/table_role) oder `treegrid`, und optional innerhalb einer [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role).
- [role="rowgroup"](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role)
  - : `Row` ist ein erforderliches Zell-Elternelement. `Rowgroup` ist ein optionales kontextabhängiges Zeilen-Elternelement. Es stellt eine Beziehung zwischen nachgeordneten Zeilen her. Es ist ein strukturelles Äquivalent zu den [`thead`](/de/docs/Web/HTML/Element/thead), [`tfoot`](/de/docs/Web/HTML/Element/tfoot) und [`tbody`](/de/docs/Web/HTML/Element/tbody) Elementen in einem HTML `table` Element.
- [role="table"](/de/docs/Web/Accessibility/ARIA/Roles/table_role)
  - : Eines der drei möglichen Kontexte (zusammen mit `grid` und `treegrid`), in denen Sie eine Zeile mit Zellen finden. Table identifiziert die Zelle als Teil einer nicht-interaktiven Tabellenstruktur mit in Zeilen und Spalten angeordneten Daten, ähnlich wie das native HTML [`<table>`](/de/docs/Web/HTML/Element/table) Element.
- [role="grid"](/de/docs/Web/Accessibility/ARIA/Roles/grid_role)
  - : Eines der drei möglichen Kontexte (zusammen mit `table` und `treegrid`), in denen Sie eine Zeile mit `cells` und `gridcells` finden. `Grid` identifiziert eine Zelle als Teil einer möglicherweise interaktiven Tabellenstruktur mit in Zeilen und Spalten angeordneten Daten, ähnlich wie das native [`<table>`](/de/docs/Web/HTML/Element/table) HTML-Element.
- [role="treegrid"](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role)
  - : Ähnlich wie ein Gitter, aber mit Zeilen, die auf dieselbe Weise wie bei einem Baum erweitert und reduziert werden können.

#### Unterklassen-Rollen

- [role="gridcell"](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
  - : Eine Zelle in einer Zeile innerhalb eines `grid` oder `treegrid`.
- [role="columnheader"](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
  - : Eine Header-Zelle, die das strukturelle Äquivalent des HTML [`<th>`](/de/docs/Web/HTML/Element/th) Elements mit Spaltenumfang ist. Im Gegensatz zu einer einfachen Zelle stellt die `columnheader` Rolle eine Beziehung zwischen ihr und allen Zellen in der entsprechenden Spalte her.
- [role="rowheader"](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role)
  - : Eine Header-Zelle, die das strukturelle Äquivalent des HTML [`<th>`](/de/docs/Web/HTML/Element/th) Elements mit Zeilenumfang ist. Im Gegensatz zu einer einfachen Zelle stellt die `rowheader` Rolle eine Beziehung zwischen ihr und allen Zellen in der entsprechenden Zeile her.

#### Zustände und Eigenschaften

- [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colspan)
  - : Ähnlich wie das HTML [`<th>`](/de/docs/Web/HTML/Element/th) und [`<td>` Colspan-Attribut](/de/docs/Web/HTML/Element/td), definiert es die Anzahl der vom Zellen überdeckten Spalten.
- [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan)
  - : Ähnlich wie das HTML [`<th>`](/de/docs/Web/HTML/Element/th) und [`<td>` Rowspan-Attribut](/de/docs/Web/HTML/Element/td), definiert es die Anzahl der vom Zellen überdeckten Zeilen.
- [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) Attribut
  - : Das `aria-colindex` Attribut wird nur benötigt, wenn Spalten im DOM verborgen sind. Das Attribut nimmt als Wert eine Ganzzahl zwischen 1 und der Gesamtanzahl der Spalten innerhalb der `table`, `grid` oder `treegrid`. Das `aria-colindex` definiert den Spaltenindex oder die Position eines Elements in Bezug auf die Gesamtzahl der Spalten innerhalb einer Zeile. Wenn alle Spalten im DOM sind, ist dieses Attribut nicht erforderlich.
- [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) Attribut
  - : Das `aria-rowindex` Attribut wird nur benötigt, wenn Zeilen im DOM verborgen sind, um anzugeben, in welcher Zeile sich die aktuelle Zelle in der Liste der Gesamtzeilen befindet. Das Attribut nimmt als Wert eine Ganzzahl zwischen 1 und der Gesamtanzahl der Zeilen innerhalb der Tabelle, des Rasters oder des Baumrasters an, um die Position oder den Index der Zelle anzugeben. Zum Beispiel würde eine Zelle in der ersten Zeile der ersten Überschrift wahrscheinlich `aria-rowindex="1"` gesetzt haben, und Zellen in Zeile 47 hätten `aria-rowindex="47"`, falls `aria-rowindex` benötigt würde, weil nicht alle Zeilen im DOM sind. Wenn die sichtbaren Zeilen zusammenhängend sind und es keine Zellen mit einem `colspan` oder `rowspan` größer als eins gibt, kann diese Eigenschaft den Elternzeilen anstelle aller Zellzeilen hinzugefügt werden.

### Tastaturinteraktionen

Keine

### Erforderliche JavaScript-Funktionen

Die erste Regel bei der Verwendung von ARIA ist, wenn Sie ein natives Feature verwenden können, das die Semantik und das Verhalten, das Sie benötigen, bereits eingebaut hat, anstatt ein Element umzufunktionieren und **eine** ARIA Rolle, Zustand oder Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie dies. Verwenden Sie das HTML [`<td>`](/de/docs/Web/HTML/Element/td) Element anstelle der ARIA Rolle `cell` wann immer möglich.

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

Oben ist eine nicht-semantische ARIA Tabelle mit fünf von 81 im DOM vorhandenen Zeilen: eine innerhalb eines Tabellenheaders und vier Zeilen im Tabellenkörper. Da nicht alle Zeilen im DOM sind, haben wir die `aria-rowindex` Eigenschaft in jede Zelle aufgenommen. Wenn keine Zellen mehr als eine Zeile oder Spalte überspannt haben, könnte `aria-rowindex` auf die Zeile anstatt auf die einzelnen Zellen der Zeile angewendet worden sein.

## Best Practices

Verwenden Sie nur {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}}, etc., für die Struktur von Datentabellen. Sie können ARIA-Rollen hinzufügen, um die Barrierefreiheit zu gewährleisten, falls die nativen Semantiken der Tabelle entfernt werden, beispielsweise durch CSS. Ein relevanter Anwendungsfall für die ARIA Tischrolle ist, wenn die nativen Semantiken einer Tabelle durch [CSS's display Eigenschaft, wie z.B. durch display: grid](/de/docs/Web/CSS/display#accessibility) überschrieben werden. In diesem Fall können Sie die ARIA Tischrollen verwenden, um die Semantiken wieder hinzuzufügen.

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

Oben ist die semantische Art, eine Tabelle zu schreiben. Die ARIA-Rollen sind nicht notwendig, wenn die nativen Semantiken der Tabelle, und damit der Tabellenzeilen, nicht verändert wurden, beispielsweise durch [die Display-Eigenschaft](/de/docs/Web/CSS/display#accessibility).

### Zusätzliche Vorteile

Wenn auf ein {{HTMLElement('td')}} angewendet, wird die Zellsemantik dem Element zurückgegeben, falls die Semantik entfernt wurde, z.B. mit `display: grid;`.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`role="row"`](/de/docs/Web/Accessibility/ARIA/Roles/row_role)
- [`role="gridcell"`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
- [HTML `<td>` Element](/de/docs/Web/HTML/Element/td)
- [HTML `<th>` Element](/de/docs/Web/HTML/Element/th)
- [Erweiterte Funktionen und Barrierefreiheit von HTML-Tabellen](/de/docs/Learn/HTML/Tables/Advanced)
- [HTML Tabellen-Grundlagen](/de/docs/Learn/HTML/Tables/Basics)
