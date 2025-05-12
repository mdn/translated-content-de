---
title: 'ARIA: Rolle "cell"'
short-title: cell
slug: Web/Accessibility/ARIA/Reference/Roles/cell_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Der Wert `cell` des ARIA-_role_-Attributs identifiziert ein Element als eine Zelle in einem tabellarischen Container, der keine Spalten- oder Zeilenheader-Informationen enthält. Um unterstützt zu werden, muss die Zelle in einem Element mit der Rolle `row` geschachtelt sein.

```html
<div role="row">
  <span role="cell">France</span>
  <span role="cell">67 million</span>
</div>
```

Eine bessere, semantischere Weise, die obigen Zellen zu schreiben, wäre die Verwendung des semantischen [`<td>`](/de/docs/Web/HTML/Reference/Elements/td)-Elements.

```html
<tr role="row">
  <td role="cell">France</td>
  <td role="cell">67 million</td>
</tr>
```

## Beschreibung

Das Element mit `role="cell"` ist eine Zelle innerhalb einer Zeile, optional innerhalb einer [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role), innerhalb einer [`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role). Befindet sich die Zelle in einem [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role), sollte `gridcell` bevorzugt werden. Wann immer möglich, wird dringend empfohlen, native HTML-{{HTMLElement('td')}}-Elemente zu verwenden.

Jedes Element mit `role="cell"` MUSS in einem Containerelement mit [`role="row"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) geschachtelt sein. Diese Zeile kann wiederum in einem Element mit [`role="rowgroup"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role) geschachtelt sein und sollte in einem `grid`, `table` oder `treegrid` geschachtelt sein. Wenn eine Zelle Spalten- oder Zeilenheader-Informationen enthält, verwenden Sie die Rollen `columnheader` oder `rowheader`. Wenn die Zelle keine Header-Informationen enthält und in einem `grid` oder `treegrid` geschachtelt ist, könnte die Rolle `gridcell` passender sein.

Eine Zelle kann eine Reihe von Property-Attributen enthalten, die die Position der Zelle innerhalb der tabellarischen Datenstruktur klären, einschließlich [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex), [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan), [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) und [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan).

> [!NOTE]
> Wann immer möglich, wird dringend empfohlen, das native HTML-Tabellenelement ({{HTMLElement('table')}}) zusammen mit dem Tabellenzeilenelement ({{HTMLElement('tr')}}) und dem Tabellenzellen-Element ({{HTMLElement('td')}}) zu verwenden.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

#### Kontextrollen

- [role="row"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
  - : Ein Element mit `role="row"` ist eine Zeile von Zellen innerhalb einer tabellarischen Struktur. Eine Zeile enthält eine oder mehrere Zellen, Grid Cells, Spaltenheader oder Zeilenheader innerhalb eines [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), einer [`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) oder eines `treegrid` und optional innerhalb einer [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role).
- [role="rowgroup"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
  - : `Row` ist ein erforderliches Zellenelternelement. `Rowgroup` ist ein optionales kontextuelles Zeilenelternelement. Es stellt eine Beziehung zwischen nachfolgenden Zeilen her. Es ist das strukturelle Äquivalent zu den [`thead`](/de/docs/Web/HTML/Reference/Elements/thead), [`tfoot`](/de/docs/Web/HTML/Reference/Elements/tfoot) und [`tbody`](/de/docs/Web/HTML/Reference/Elements/tbody)-Elementen in einem [HTML-`table`](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)-Element.
- [role="table"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
  - : Eine von drei möglichen Kontexten (zusammen mit `grid` und `treegrid`), in denen man eine Zeile mit Zellen finden kann. Tabelle identifiziert die Zelle als Teil einer nicht-interaktiven Tabellenstruktur, die Daten in Zeilen und Spalten anordnet, ähnlich dem nativen HTML-[`<table>`](/de/docs/Web/HTML/Reference/Elements/table)-Element.
- [role="grid"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
  - : Eine von drei möglichen Kontexten (zusammen mit `table` und `treegrid`), in denen man eine Zeile mit `cells` und `gridcells` finden kann. `Grid` identifiziert eine Zelle als Teil einer möglicherweise interaktiven Tabellenstruktur, die Daten in Zeilen und Spalten anordnet, ähnlich dem nativen [`<table>`](/de/docs/Web/HTML/Reference/Elements/table)-HTML-Element.
- [role="treegrid"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)
  - : Ähnlich einem Grid, aber mit Zeilen, die in derselben Weise erweitert und zusammengeklappt werden können wie in einem Baum.

#### Unterklassenrollen

- [role="gridcell"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
  - : Eine Zelle in einer Zeile innerhalb eines `grid` oder `treegrid`.
- [role="columnheader"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
  - : Eine Header-Zelle, die das strukturelle Äquivalent des HTML-[`<th>`](/de/docs/Web/HTML/Reference/Elements/th)-Elements mit einer Spaltenreichweite darstellt. Im Gegensatz zu einer einfachen Zelle stellt die Rolle `columnheader` eine Beziehung zwischen ihr und allen Zellen in der entsprechenden Spalte her.
- [role="rowheader"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
  - : Eine Header-Zelle, die das strukturelle Äquivalent des HTML-[`<th>`](/de/docs/Web/HTML/Reference/Elements/th)-Elements mit einer Zeilenreichweite darstellt. Im Gegensatz zu einer einfachen Zelle stellt die Rolle `rowheader` eine Beziehung zwischen ihr und allen Zellen in der entsprechenden Zeile her.

#### Zustände und Eigenschaften

- [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan)
  - : Ähnlich wie das HTML-[`<th>`](/de/docs/Web/HTML/Reference/Elements/th)- und das [`<td>`-`colspan`-Attribut](/de/docs/Web/HTML/Reference/Elements/td) definiert es, wie viele Spalten von der Zelle überspannt werden.
- [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan)
  - : Ähnlich wie das HTML-[`<th>`](/de/docs/Web/HTML/Reference/Elements/th)- und das [`<td>`-`rowspan`-Attribut](/de/docs/Web/HTML/Reference/Elements/td) definiert es, wie viele Zeilen von der Zelle überspannt werden.
- [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex)-Attribut
  - : Das `aria-colindex`-Attribut wird nur benötigt, wenn Spalten im DOM verborgen sind. Das Attribut nimmt als Wert eine ganze Zahl zwischen 1 und der Gesamtanzahl der Spalten innerhalb der `table`, `grid` oder `treegrid` an. Das `aria-colindex` definiert den Spaltenindex oder die Position eines Elements relativ zur Gesamtanzahl der Spalten innerhalb einer Zeile. Wenn alle Spalten im DOM vorhanden sind, ist dieses Attribut nicht notwendig.
- [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex)-Attribut
  - : Das `aria-rowindex`-Attribut wird nur benötigt, wenn Zeilen im DOM verborgen sind, um anzugeben, in welcher Zeile, in der Liste der gesamten Zeilen, sich die aktuelle Zelle befindet. Das Attribut nimmt als Wert eine ganze Zahl zwischen 1 und der Gesamtanzahl der Zeilen innerhalb der Tabelle, des Gitters oder des Baumgitters an und gibt die Position oder den Index der Zelle an. Zum Beispiel würde eine Zelle in der ersten Zeile des ersten Headers wahrscheinlich `aria-rowindex="1"` haben, und Zellen in Zeile 47 würden `aria-rowindex="47"` haben, falls `aria-rowindex` aufgrund der Tatsache benötigt wird, dass nicht alle Zeilen im DOM sind. Wenn die sichtbaren Zeilen aneinandergrenzen und es keine Zellen mit einem `colspan` oder `rowspan` größer als eins gibt, kann diese Eigenschaft zu den übergeordneten Zeilen anstelle aller Zellen der Reihen hinzugefügt werden.

### Tastaturinteraktionen

Keine.

### Erforderliche JavaScript-Funktionen

Die erste Regel für die Verwendung von ARIA lautet: Wenn Sie eine native Funktion mit den bereits integrierten Semantiken und Verhaltensweisen verwenden können, anstatt ein Element umzufunktionieren und eine ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie dies. Verwenden Sie das HTML-Element [`<td>`](/de/docs/Web/HTML/Reference/Elements/td) anstelle der ARIA-Rolle `cell` wann immer möglich.

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

Das oben stehende Beispiel ist eine nicht-semantische ARIA-Tabelle mit fünf von 81 Zeilen, die im DOM vorhanden sind: Eine innerhalb eines Tabellen-Headers und vier Zeilen innerhalb des Tabellenkörpers. Da nicht alle Zeilen im DOM sind, haben wir die `aria-rowindex`-Eigenschaft auf jeder Zelle hinzugefügt. Wenn keine Zellen mehr als eine Zeile oder Spalte überspannten, könnte das `aria-rowindex` auf die Zeile anstatt auf die einzelnen Zellen der Zeile gesetzt werden.

## Best Practices

Verwenden Sie nur {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}} usw. für die Daten-Tabellenstruktur. Sie können ARIA-Rollen hinzufügen, um die Barrierefreiheit zu gewährleisten, falls die nativen Semantiken der Tabelle entfernt werden, zum Beispiel durch CSS. Ein relevanter Anwendungsfall für die ARIA-Tabellenrolle ist gegeben, wenn die nativen Semantiken einer Tabelle durch [die CSS-Display-Eigenschaft, wie etwa durch `display: grid`](/de/docs/Web/CSS/display#accessibility), überschrieben werden. In diesem Fall können Sie die ARIA-Tabellenrollen verwenden, um die Semantiken wieder hinzuzufügen.

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

Oben ist die semantische Art, eine Tabelle zu schreiben. Die ARIA-Rollen sind nicht notwendig, wenn die nativen Semantiken der Tabelle und somit der Tabellenzeilen nicht verändert wurden, wie beispielsweise durch [die Display-Eigenschaft](/de/docs/Web/CSS/display#accessibility).

### Zugefügte Vorteile

Bei Anwendung auf ein {{HTMLElement('td')}} werden die Zellen-Semantiken dem Element zurückgegeben, falls die Semantiken entfernt wurden, etwa durch `display: grid;`.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`role="row"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [`role="gridcell"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [HTML `<td>`-Element](/de/docs/Web/HTML/Reference/Elements/td)
- [HTML `<th>`-Element](/de/docs/Web/HTML/Reference/Elements/th)
- [Erlernen: Barrierefreiheit für HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
- [Erlernen: Grundlegendes zu HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
