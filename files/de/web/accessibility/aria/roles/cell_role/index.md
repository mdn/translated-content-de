---
title: "ARIA: cell Rolle"
slug: Web/Accessibility/ARIA/Roles/cell_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Der `cell`-Wert des ARIA-_role_-Attributs kennzeichnet ein Element als eine Zelle in einem tabellarischen Container, der keine Spalten- oder Zeilenkopf-Informationen enthält. Damit es unterstützt wird, muss die Zelle innerhalb eines Elements mit der Rolle `row` verschachtelt sein.

```html
<div role="row">
  <span role="cell">France</span>
  <span role="cell">67 million</span>
</div>
```

Eine bessere, semantischere Art, die oben genannten Zellen zu schreiben, wäre die Verwendung des semantischen [`<td>`](/de/docs/Web/HTML/Element/td)-Elements.

```html
<tr role="row">
  <td role="cell">France</td>
  <td role="cell">67 million</td>
</tr>
```

## Beschreibung

Das Element mit `role="cell"` ist eine Zelle innerhalb einer Zeile, optional innerhalb einer [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role), innerhalb einer [`table`](/de/docs/Web/Accessibility/ARIA/Roles/table_role). Wenn sich die Zelle in einem [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role) befindet, sollten Sie `gridcell` verwenden. Die Verwendung nativer HTML {{HTMLElement('td')}}-Elemente wird, wann immer möglich, dringend empfohlen.

Jedes Element mit `role="cell"` MUSS in einem Container-Element mit [`role="row"`](/de/docs/Web/Accessibility/ARIA/Roles/row_role) verschachtelt sein. Diese Zeile kann wiederum in einem Element mit [`role="rowgroup"`](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role) verschachtelt sein und sollte innerhalb eines `grid`, `table` oder `treegrid` verschachtelt sein. Wenn eine Zelle Spalten- oder Zeilenkopf-Informationen enthält, verwenden Sie entsprechend die Rollen `columnheader` oder `rowheader`. Wenn die Zelle keine Kopf-Informationen enthält und in einem `grid` oder `treegrid` verschachtelt ist, könnte die Rolle `gridcell` angemessener sein.

Eine Zelle kann eine Reihe von Eigenschaftsattributen enthalten, die die Position der Zelle innerhalb der tabellarischen Datenstruktur verdeutlichen, einschließlich [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex), [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colspan), [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) und [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan).

> [!NOTE]
> Die Verwendung des nativen HTML-Tabellelements ({{HTMLElement('table')}}), zusammen mit dem Tabellenzeilenelement ({{HTMLElement('tr')}}) und dem Tabellenzellenelement ({{HTMLElement('td')}}) wird wann immer möglich dringend empfohlen.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

#### Kontext-Rollen

- [role="row"](/de/docs/Web/Accessibility/ARIA/Roles/row_role)
  - : Ein Element mit `role="row"` ist eine Reihe von Zellen innerhalb einer tabellarischen Struktur. Eine Zeile enthält eine oder mehrere Zellen, Rasterzellen, Spaltenköpfe oder Zeilenköpfe innerhalb eines [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role), [`table`](/de/docs/Web/Accessibility/ARIA/Roles/table_role) oder `treegrid`, und optional innerhalb einer [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role).
- [role="rowgroup"](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role)
  - : `Row` ist ein erforderlicher Zellenelternteil. `Rowgroup` ist ein optionaler kontextbezogener Zeilenelternteil. Es stellt eine Beziehung zwischen untergeordneten Zeilen her. Es ist ein strukturelles Äquivalent zu den Elementen [`thead`](/de/docs/Web/HTML/Element/thead), [`tfoot`](/de/docs/Web/HTML/Element/tfoot) und [`tbody`](/de/docs/Web/HTML/Element/tbody) in einem [HTML `table`](/de/docs/Learn/HTML/Tables/Basics)-Element.
- [role="table"](/de/docs/Web/Accessibility/ARIA/Roles/table_role)
  - : Einer der drei möglichen Kontexte (neben `grid` und `treegrid`), in denen Sie eine Zeile mit Zellen finden. Table identifiziert die Zelle als Teil einer nicht interaktiven Tabellenstruktur, die Daten in Reihen und Spalten enthält, ähnlich wie das native HTML [`<table>`](/de/docs/Web/HTML/Element/table)-Element.
- [role="grid"](/de/docs/Web/Accessibility/ARIA/Roles/grid_role)
  - : Einer der drei möglichen Kontexte (neben `table` und `treegrid`), in denen Sie eine Zeile mit `cells` und `gridcells` finden. `Grid` identifiziert eine Zelle als Teil einer möglicherweise interaktiven Tabellenstruktur, die Daten in Reihen und Spalten enthält, ähnlich wie das native [`<table>`](/de/docs/Web/HTML/Element/table)-HTML-Element.
- [role="treegrid"](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role)
  - : Ähnlich wie ein Grid, jedoch mit Zeilen, die auf die gleiche Weise wie ein Baum ein- und ausgeklappt werden können.

#### Unterklassenrollen

- [role="gridcell"](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
  - : Eine Zelle in einer Zeile innerhalb eines `grid` oder `treegrid`.
- [role="columnheader"](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
  - : Eine Kopfzelle, die das strukturelle Äquivalent des HTML [`<th>`](/de/docs/Web/HTML/Element/th)-Elements mit einer Spaltendimension ist. Anders als eine einfache Zelle stellt die `columnheader`-Rolle eine Beziehung zwischen ihr und allen Zellen in der entsprechenden Spalte her.
- [role="rowheader"](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role)
  - : Eine Kopfzelle, die das strukturelle Äquivalent des HTML [`<th>`](/de/docs/Web/HTML/Element/th)-Elements mit einer Zeilendimension ist. Anders als eine einfache Zelle stellt die `rowheader`-Rolle eine Beziehung zwischen ihr und allen Zellen in der entsprechenden Zeile her.

#### Zustände und Eigenschaften

- [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colspan)
  - : Ähnlich dem HTML [`<th>`](/de/docs/Web/HTML/Element/th) und dem [`<td>` colspan Attribut](/de/docs/Web/HTML/Element/td), definiert es die Anzahl der Spalten, die von der Zelle überspannt werden.
- [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan)
  - : Ähnlich dem HTML [`<th>`](/de/docs/Web/HTML/Element/th) und dem [`<td>` rowspan Attribut](/de/docs/Web/HTML/Element/td), definiert es die Anzahl der Zeilen, die von der Zelle überspannt werden.
- [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex)-Attribut
  - : Das `aria-colindex`-Attribut wird nur benötigt, wenn Spalten aus dem DOM ausgeblendet sind. Das Attribut nimmt als Wert eine Ganzzahl zwischen 1 und der Gesamtanzahl der Spalten innerhalb der `table`, `grid` oder `treegrid` an. Das `aria-colindex` definiert den Spaltenindex oder die Position eines Elements in Bezug auf die Gesamtanzahl der Spalten innerhalb einer Zeile. Wenn sich alle Spalten im DOM befinden, ist dieses Attribut nicht erforderlich.
- [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex)-Attribut
  - : Das `aria-rowindex`-Attribut wird nur benötigt, wenn Zeilen aus dem DOM ausgeblendet sind, um anzugeben, in welcher Zeile der aktuellen Zelle innerhalb der Gesamtliste von Zeilen sie sich befindet. Das Attribut nimmt als Wert eine Ganzzahl zwischen 1 und der Gesamtanzahl der Zeilen innerhalb der Tabelle, des Grids oder des Baumrasters an, um die Position oder den Index der Zelle anzugeben. Beispielsweise hätte eine Zelle in der ersten Zeile des ersten Headers wahrscheinlich `aria-rowindex="1"` gesetzt, und Zellen in Zeile 47 hätten `aria-rowindex="47"`, wenn `aria-rowindex` aufgrund nicht aller Zeilen im DOM benötigt wird. Wenn die sichtbaren Zeilen zusammenhängend sind und es keine Zellen mit einem `colspan` oder `rowspan` größer als eins gibt, kann diese Eigenschaft stattdessen zu den übergeordneten Zeilen anstatt zu allen Zeilenzellen hinzugefügt werden.

### Tastatur-Interaktionen

Keine

### Erforderliche JavaScript-Funktionen

Die erste Regel der ARIA-Verwendung ist, wenn Sie ein natives Feature mit den erforderlichen Semantiken und Verhaltensweisen verwenden können, anstatt ein Element zu zweckentfremden und **eine** ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie dies. Verwenden Sie das HTML [`<td>`](/de/docs/Web/HTML/Element/td)-Element anstelle der ARIA-Rolle `cell`, wann immer möglich.

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

Das Obige ist eine nicht-semantische ARIA-Tabelle mit fünf von 81 Zeilen, die im DOM präsent sind: eine innerhalb eines Tabellenkopfs und vier Zeilen innerhalb des Tabellenkörpers. Da nicht alle Zeilen im DOM sind, haben wir die `aria-rowindex`-Eigenschaft auf jeder Zelle hinzugefügt. Wenn keine Zellen mehr als eine Zeile oder Spalte überspannten, könnte `aria-rowindex` auf der Zeile anstatt auf den individuellen Zellen der Zeile platziert werden.

## Beste Praktiken

Verwenden Sie nur {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}} usw. für Datenstrukturen von Tabellen. Sie können ARIA-Rollen hinzufügen, um die Zugänglichkeit sicherzustellen, falls die nativen Semantiken der Tabelle entfernt werden, zum Beispiel durch CSS. Ein relevanter Anwendungsfall für die ARIA-Tabellenrolle ist, wenn die nativen Semantiken einer Tabelle durch [CSSs Anzeigeeigenschaft, wie durch display: grid](/de/docs/Web/CSS/display#accessibility), überschrieben werden. In diesem Fall können Sie die ARIA-Tabellenrollen verwenden, um die Semantiken wieder hinzuzufügen.

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

Oben ist die semantische Art, eine Tabelle zu schreiben. Die ARIA-Rollen sind nicht notwendig, wenn die nativen Semantiken der Tabelle, und somit die Tabellenzeilen, nicht verändert wurden, zum Beispiel durch [die Anzeigeeigenschaft](/de/docs/Web/CSS/display#accessibility).

### Zusätzliche Vorteile

Wenn auf ein {{HTMLElement('td')}} angewandt, stellt es die Zellensemantiken für das Element wieder her, falls die Semantiken entfernt wurden, wie z. B. durch `display: grid;`.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`role="row"`](/de/docs/Web/Accessibility/ARIA/Roles/row_role)
- [`role="gridcell"`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
- [HTML `<td>` Element](/de/docs/Web/HTML/Element/td)
- [HTML `<th>` Element](/de/docs/Web/HTML/Element/th)
- [HTML Tabellen erweiterte Funktionen und Barrierefreiheit](/de/docs/Learn/HTML/Tables/Advanced)
- [HTML Tabellen Grundlagen](/de/docs/Learn/HTML/Tables/Basics)
