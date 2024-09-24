---
title: "ARIA: cell-Rolle"
slug: Web/Accessibility/ARIA/Roles/cell_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Der `cell`-Wert des ARIA-_role_-Attributs identifiziert ein Element als Zelle in einem tabellarischen Container, der keine Spalten- oder Zeilenkopfzeileninformationen enthält. Um unterstützt zu werden, muss die Zelle in ein Element mit der Rolle `row` eingebettet sein.

```html
<div role="row">
  <span role="cell">France</span>
  <span role="cell">67 million</span>
</div>
```

Eine bessere, semantischere Art, die obigen Zellen zu schreiben, wäre die Verwendung des semantischen [`<td>`](/de/docs/Web/HTML/Element/td)-Elements.

```html
<tr role="row">
  <td role="cell">France</td>
  <td role="cell">67 million</td>
</tr>
```

## Beschreibung

Das Element mit `role="cell"` ist eine Zelle innerhalb einer Zeile, optional innerhalb einer [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role), innerhalb einer [`table`](/de/docs/Web/Accessibility/ARIA/Roles/table_role). Wenn sich die Zelle in einem [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role) befindet, sollten Sie `gridcell` verwenden. Die Verwendung nativer HTML-{{HTMLElement('td')}}-Elemente, wann immer möglich, wird dringend empfohlen.

Jedes Element mit `role="cell"` MUSS in ein Containerelement mit [`role="row"`](/de/docs/Web/Accessibility/ARIA/Roles/row_role) eingebettet sein. Diese Zeile kann wiederum in ein Element mit [`role="rowgroup"`](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role) eingebettet sein und sollte in einem `grid`, `table` oder `treegrid` eingebettet sein. Wenn eine Zelle Spalten- oder Zeilenkopfzeileninformationen enthält, verwenden Sie die Rollen `columnheader` oder `rowheader`. Wenn die Zelle keine Kopfzeileninformationen enthält und in einem `grid` oder `treegrid` eingebettet ist, könnte die Rolle von `gridcell` geeigneter sein.

Eine Zelle kann eine Reihe von Eigenschaftsattributen enthalten, die die Position der Zelle innerhalb der tabellarischen Datenstruktur klären, einschließlich [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex), [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colspan), [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) und [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan).

> [!NOTE]
> Die Verwendung des nativen HTML-Tabellenelements ({{HTMLElement('table')}}) zusammen mit dem Tabellenzeilenelement ({{HTMLElement('tr')}}) und dem Tabellenzellenelement ({{HTMLElement('td')}}) wird wann immer möglich dringend empfohlen.

### Zugeordnete WAI-ARIA-Rollen, Zustände und Eigenschaften

#### Kontextrollen

- [role="row"](/de/docs/Web/Accessibility/ARIA/Roles/row_role)
  - : Ein Element mit `role="row"` ist eine Reihe von Zellen innerhalb einer tabellarischen Struktur. Eine Zeile enthält eine oder mehrere Zellen, Gitterzellen, Spalten- oder Zeilenkopfzeilen innerhalb eines [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role), [`table`](/de/docs/Web/Accessibility/ARIA/Roles/table_role) oder `treegrid` und optional innerhalb einer [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role).
- [role="rowgroup"](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role)
  - : `Row` ist ein obligatorisches Elternteil der Zelle. `Rowgroup` ist ein optionaler kontextueller Zeilenelternteil. Es stellt eine Beziehung zwischen nachfolgenden Zeilen her. Es ist das strukturelle Äquivalent zu den [`thead`](/de/docs/Web/HTML/Element/thead), [`tfoot`](/de/docs/Web/HTML/Element/tfoot) und [`tbody`](/de/docs/Web/HTML/Element/tbody)-Elementen in einem [HTML-`table`](/de/docs/Learn/HTML/Tables/Basics)-Element.
- [role="table"](/de/docs/Web/Accessibility/ARIA/Roles/table_role)
  - : Eines der drei möglichen Kontexte (neben `grid` und `treegrid`), in denen Sie eine Zeile mit Zellen finden. Tabelle identifiziert die Zelle als Teil einer nicht interaktiven Tabellenstruktur mit in Reihen und Spalten angeordneten Daten, ähnlich dem nativen HTML-Element [`<table>`](/de/docs/Web/HTML/Element/table).
- [role="grid"](/de/docs/Web/Accessibility/ARIA/Roles/grid_role)
  - : Einer der drei möglichen Kontexte (neben `table` und `treegrid`), in denen Sie eine Zeile mit `cells` und `gridcells` finden. `Grid` identifiziert eine Zelle als Teil einer möglicherweise interaktiven Tabellenstruktur mit in Reihen und Spalten angeordneten Daten, ähnlich dem nativen [HTML-`<table>`](/de/docs/Web/HTML/Element/table)-Element.
- [role="treegrid"](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role)
  - : Ähnlich einem Gitter, aber mit Reihen, die auf dieselbe Weise erweitert und reduziert werden können wie bei einem Baum.

#### Unterklassenrollen

- [role="gridcell"](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
  - : Eine Zelle in einer Zeile innerhalb eines `grid` oder `treegrid`.
- [role="columnheader"](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
  - : Eine Kopfzeilenzelle, die das strukturelle Äquivalent des HTML-Elements [`<th>`](/de/docs/Web/HTML/Element/th) mit einer Spaltenscope ist. Im Gegensatz zu einer einfachen Zelle stellt die `columnheader`-Rolle eine Beziehung zwischen ihr und allen Zellen in der entsprechenden Spalte her.
- [role="rowheader"](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role)
  - : Eine Kopfzeilenzelle, die das strukturelle Äquivalent des HTML-Elements [`<th>`](/de/docs/Web/HTML/Element/th) mit einer Zeilenscope ist. Im Gegensatz zu einer einfachen Zelle stellt die `rowheader`-Rolle eine Beziehung zwischen ihr und allen Zellen in der entsprechenden Zeile her.

#### Zustände und Eigenschaften

- [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colspan)
  - : Ähnlich dem HTML-Element [`<th>`](/de/docs/Web/HTML/Element/th) und dem [`<td>` colspan-Attribut](/de/docs/Web/HTML/Element/td), definiert es die Anzahl der von der Zelle überspannten Spalten.
- [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan)
  - : Ähnlich dem HTML-Element [`<th>`](/de/docs/Web/HTML/Element/th) und dem [`<td>` rowspan-Attribut](/de/docs/Web/HTML/Element/td), definiert es die Anzahl der von der Zelle überspannten Zeilen.
- [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex)-Attribut
  - : Das `aria-colindex`-Attribut wird nur benötigt, wenn Spalten im DOM ausgeblendet sind. Der Wert des Attributs ist eine Ganzzahl zwischen 1 und der Gesamtanzahl der Spalten innerhalb der `table`, `grid` oder `treegrid`. `aria-colindex` definiert den Spaltenindex oder die Position eines Elements hinsichtlich der Gesamtanzahl der Spalten innerhalb einer Zeile. Wenn alle Spalten im DOM sind, ist dieses Attribut nicht notwendig.
- [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex)-Attribut
  - : Das `aria-rowindex`-Attribut ist nur erforderlich, wenn Zeilen im DOM ausgeblendet sind, um anzugeben, in welcher Zeile der Liste der gesamten Zeilen sich die aktuelle Zelle befindet. Das Attribut nimmt als Wert eine Ganzzahl zwischen 1 und der Gesamtanzahl der Zeilen innerhalb der Tabelle, des Rasters oder des Baumrasters an und gibt die Position oder den Index der Zelle an. Beispielsweise hätte eine Zelle in der ersten Zeile der ersten Kopfzeile wahrscheinlich `aria-rowindex="1"`, und Zellen in Zeile 47 hätten `aria-rowindex="47"`, wenn `aria-rowindex` benötigt würde, weil nicht alle Zeilen im DOM sind. Wenn die sichtbaren Zeilen zusammenhängend sind und es keine Zellen mit einem `colspan` oder `rowspan` gibt, das größer als eins ist, kann diese Eigenschaft den übergeordneten Zeilen anstelle der Zellen aller Zeilen hinzugefügt werden.

### Tastaturinteraktionen

Keine

### Erforderliche JavaScript-Funktionen

Die erste Regel der ARIA-Nutzung ist, dass Sie, wenn Sie eine native Funktion mit den erforderlichen Semantiken und Verhaltensweisen bereits eingebaut verwenden können, anstatt ein Element umzuwidmen und eine ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, dies tun sollten. Verwenden Sie das HTML-Element [`<td>`](/de/docs/Web/HTML/Element/td) anstelle der ARIA-Rolle `cell`, wann immer möglich.

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

Das obige ist eine nicht-semantische ARIA-Tabelle mit fünf der 81 im DOM vorhandenen Zeilen: eine innerhalb eines Tabellenkopfs und vier Zeilen innerhalb des Tabellenkörpers. Da nicht alle Zeilen im DOM sind, haben wir die Eigenschaft `aria-rowindex` zu jeder Zelle hinzugefügt. Wenn keine Zellen mehr als eine Reihe oder Spalte überspannten, könnte `aria-rowindex` auf die Zeile anstelle der individuellen Zellen der Zeile gesetzt werden.

## Best Practices

Verwenden Sie nur {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}}, etc., für die Datenstrukturierung von Tabellen. Sie können ARIA-Rollen hinzufügen, um die Zugänglichkeit sicherzustellen, sollten die nativen Semantiken der Tabelle entfernt worden sein, beispielsweise mit CSS. Ein relevanter Anwendungsfall für die ARIA-Tabelle-Rolle ist, wenn die nativen Semantiken einer Tabelle durch [CSS' display-Eigenschaft, wie durch display: grid](/de/docs/Web/CSS/display#accessibility) überschrieben werden. In diesem Fall können Sie die ARIA-Tabellen-Rollen verwenden, um die Semantiken wieder hinzuzufügen.

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

Oben ist die semantische Art, eine Tabelle zu schreiben. Die ARIA-Rollen sind nicht notwendig, wenn die nativen Semantiken der Tabelle, und damit die Tabellenzeilen, nicht verändert wurden, wie durch [die display-Eigenschaft](/de/docs/Web/CSS/display#accessibility).

### Zusätzliche Vorteile

Angewendet auf ein {{HTMLElement('td')}}, gibt es dem Element die Zellsemantik zurück, falls die Semantiken entfernt wurden, beispielsweise mit `display: grid;`.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`role="row"`](/de/docs/Web/Accessibility/ARIA/Roles/row_role)
- [`role="gridcell"`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
- [HTML `<td>`-Element](/de/docs/Web/HTML/Element/td)
- [HTML `<th>`-Element](/de/docs/Web/HTML/Element/th)
- [Erweiterte Funktionen und Zugänglichkeit von HTML-Tabellen](/de/docs/Learn/HTML/Tables/Advanced)
- [HTML-Tabellengrundlagen](/de/docs/Learn/HTML/Tables/Basics)
