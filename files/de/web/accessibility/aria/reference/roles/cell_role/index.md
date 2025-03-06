---
title: "ARIA: cell-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/cell_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Der `cell`-Wert des ARIA _role_ Attributs identifiziert ein Element als Zelle in einem tabellarischen Container, der keine Spalten- oder Zeilenüberschriften enthält. Damit es unterstützt wird, muss die Zelle in ein Element mit der Rolle `row` eingebettet sein.

```html
<div role="row">
  <span role="cell">France</span>
  <span role="cell">67 million</span>
</div>
```

Eine bessere, semantischere Weise, die obigen Zellen zu schreiben, wäre die Verwendung des semantischen [`<td>`](/de/docs/Web/HTML/Element/td) Elements.

```html
<tr role="row">
  <td role="cell">France</td>
  <td role="cell">67 million</td>
</tr>
```

## Beschreibung

Das Element mit `role="cell"` ist eine Zelle innerhalb einer Zeile, optional innerhalb einer [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role), innerhalb einer [`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role). Wenn sich die Zelle in einem [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) befindet, sollten Sie `gridcell` verwenden. Die Verwendung nativer HTML {{HTMLElement('td')}} Elemente wird, wann immer möglich, dringend empfohlen.

Jedes Element mit `role="cell"` MUSS in einem Containerelement mit [`role="row"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) eingebettet sein. Diese Zeile wiederum kann in einem Element mit [`role="rowgroup"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role) eingebettet sein und sollte innerhalb eines `grid`, `table` oder `treegrid` eingebettet sein. Wenn eine Zelle Spalten- oder Zeilenüberschriften enthält, verwenden Sie die Rollen `columnheader` oder `rowheader`. Wenn die Zelle keine Überschrifteninformationen enthält und in einem `grid` oder `treegrid` eingebettet ist, kann die Rolle `gridcell` geeigneter sein.

Eine Zelle kann eine Reihe von Eigenschaftsattributen enthalten, die die Position der Zelle innerhalb der tabellarischen Datenstruktur klären, einschließlich [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex), [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan), [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) und [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan).

> [!NOTE]
> Die Verwendung des nativen HTML-Tabellenelements ({{HTMLElement('table')}}), zusammen mit dem Tabellenzeilenelement ({{HTMLElement('tr')}}) und dem Tabellenzellen-Element ({{HTMLElement('td')}}), wird wann immer möglich, dringend empfohlen.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

#### Kontextrollen

- [role="row"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
  - : Ein Element mit `role="row"` ist eine Zeile von Zellen innerhalb einer tabellarischen Struktur. Eine Zeile enthält eine oder mehrere Zellen, Gridzellen, Spaltenüberschriften oder Zeilenüberschriften innerhalb eines [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), [`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) oder `treegrid` und optional innerhalb einer [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role).
- [role="rowgroup"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
  - : `Row` ist ein erforderlicher Elternteil einer Zelle. `Rowgroup` ist ein optionaler kontextueller Elternteil einer Zeile. Es stellt eine Beziehung zwischen den nachfolgenden Zeilen her. Es ist ein strukturelles Äquivalent zu den [`thead`](/de/docs/Web/HTML/Element/thead), [`tfoot`](/de/docs/Web/HTML/Element/tfoot) und [`tbody`](/de/docs/Web/HTML/Element/tbody) Elementen in einem [HTML `table`](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics) Element.
- [role="table"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
  - : Einer der drei möglichen Kontexte (neben `grid` und `treegrid`), in denen Sie eine Zeile mit Zellen finden. Tabelle identifiziert die Zelle als Teil einer nicht-interaktiven Tabellenstruktur, die Daten in Zeilen und Spalten enthält, ähnlich dem nativen HTML [`<table>`](/de/docs/Web/HTML/Element/table) Element.
- [role="grid"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
  - : Einer der drei möglichen Kontexte (neben `table` und `treegrid`), in denen Sie eine Zeile mit `cells` und `gridcells` finden. `Grid` identifiziert eine Zelle als Teil einer möglicherweise interaktiven Tabellenstruktur, die Daten in Zeilen und Spalten enthält, ähnlich dem nativen [`<table>`](/de/docs/Web/HTML/Element/table) HTML-Element.
- [role="treegrid"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)
  - : Ähnlich wie ein Grid, aber mit Zeilen, die auf die gleiche Weise wie bei einem Baum erweitert und reduziert werden können.

#### Unterklassenrollen

- [role="gridcell"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
  - : Eine Zelle in einer Zeile innerhalb eines `grid` oder `treegrid`.
- [role="columnheader"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
  - : Eine Header-Zelle, die das strukturelle Äquivalent des HTML [`<th>`](/de/docs/Web/HTML/Element/th) Elements mit einer Spaltensicht ist. Anders als eine einfache Zelle stellt die Rolle `columnheader` eine Beziehung zwischen ihr und allen Zellen in der entsprechenden Spalte her.
- [role="rowheader"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
  - : Eine Header-Zelle, die das strukturelle Äquivalent des HTML [`<th>`](/de/docs/Web/HTML/Element/th) Elements mit einer Zeilensicht ist. Anders als eine einfache Zelle stellt die Rolle `rowheader` eine Beziehung zwischen ihr und allen Zellen in der entsprechenden Zeile her.

#### Zustände und Eigenschaften

- [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan)
  - : Ähnlich dem HTML [`<th>`](/de/docs/Web/HTML/Element/th) und [`<td>` colspan Attribut](/de/docs/Web/HTML/Element/td), definiert es die Anzahl der Spalten, die von der Zelle überspannt werden.
- [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan)
  - : Ähnlich dem HTML [`<th>`](/de/docs/Web/HTML/Element/th) und [`<td>` rowspan Attribut](/de/docs/Web/HTML/Element/td), definiert es die Anzahl der Zeilen, die von der Zelle überspannt werden.
- [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) Attribut
  - : Das `aria-colindex` Attribut wird nur benötigt, wenn Spalten aus dem DOM ausgeblendet sind. Das Attribut nimmt als Wert eine ganze Zahl zwischen 1 und der Gesamtanzahl der Spalten innerhalb der `table`, `grid` oder `treegrid`. Das `aria-colindex` definiert den Spaltenindex oder die Position eines Elements in Bezug auf die Gesamtanzahl der Spalten innerhalb einer Zeile. Wenn alle Spalten im DOM sind, ist dieses Attribut nicht erforderlich.
- [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) Attribut
  - : Das `aria-rowindex` Attribut wird nur benötigt, wenn Zeilen aus dem DOM ausgeblendet sind, um anzuzeigen, welche Zeile in der Liste der Gesamtzeilen die aktuelle Zelle sich befindet. Das Attribut nimmt als Wert eine ganze Zahl zwischen 1 und der Gesamtanzahl der Zeilen innerhalb der Tabelle, des Grids oder des Treegrids an, die die Position oder den Index der Zelle angibt. Zum Beispiel hätte eine Zelle in der ersten Zeile der ersten Überschrift wahrscheinlich `aria-rowindex="1"` gesetzt, und Zellen in Zeile 47 hätten `aria-rowindex="47"`, wenn `aria-rowindex` benötigt würde, weil nicht alle Zeilen im DOM sind. Wenn die sichtbaren Zeilen zusammenhängend sind und es keine Zellen mit einem `colspan` oder `rowspan` größer als eins gibt, kann diese Eigenschaft den Elternzeilen anstelle von allen Zellen der Zeilen hinzugefügt werden.

### Tastaturinteraktionen

Keine

### Erforderliche JavaScript-Funktionen

Die erste Regel für die Verwendung von ARIA ist, dass Sie, wenn Sie ein natives Feature mit den erforderlichen Semantiken und Verhaltensweisen, die bereits eingebaut sind, verwenden können, anstatt ein Element neu zu verwenden und **eine** ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, dies tun sollten. Verwenden Sie das HTML [`<td>`](/de/docs/Web/HTML/Element/td) Element anstelle der ARIA-Rolle `cell`, wann immer möglich.

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

Das Obige ist eine nicht-semantische ARIA-Tabelle mit fünf von 81 Zeilen im DOM: eine innerhalb eines Tabellenkopfs und vier Zeilen innerhalb des Tabellenkörpers. Da nicht alle Zeilen im DOM sind, haben wir für jede Zelle die `aria-rowindex` Eigenschaft eingefügt. Wenn keine Zellen mehr als eine Zeile oder Spalte überspannt hätten, hätte das `aria-rowindex` auf die Zeile anstelle der einzelnen Zellen der Zeile gesetzt werden können.

## Best Practices

Verwenden Sie nur {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}}, usw., für die Tabellenstruktur. Sie können ARIA-Rollen hinzufügen, um die Zugänglichkeit zu gewährleisten, falls die nativen Semantiken der Tabelle entfernt wurden, z.B. mit CSS. Ein relevanter Anwendungsfall für die ARIA-Tabelle-Rolle ist, wenn die nativen Semantiken einer Tabelle durch [CSS's display property, wie durch display: grid](/de/docs/Web/CSS/display#accessibility) überschrieben werden. In diesem Fall können Sie die ARIA-Tabelle-Rollen verwenden, um die Semantiken wieder einzufügen.

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

Oben ist die semantische Art, eine Tabelle zu schreiben. Die ARIA-Rollen sind nicht notwendig, wenn die nativen Semantiken der Tabelle und damit die Tabellenzeilen nicht verändert wurden, z.B. durch [die display-Eigenschaft](/de/docs/Web/CSS/display#accessibility).

### Zusätzliche Vorteile

Wenn es auf ein {{HTMLElement('td')}} angewendet wird, stellt es die Zellsemantiken für das Element wieder her, falls die Semantiken entfernt wurden, z.B. mit `display: grid;`.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`role="row"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [`role="gridcell"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [HTML `<td>` Element](/de/docs/Web/HTML/Element/td)
- [HTML `<th>` Element](/de/docs/Web/HTML/Element/th)
- [Lernen: HTML-Tabellenzugänglichkeit](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
- [Lernen: Grundlagen der HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
