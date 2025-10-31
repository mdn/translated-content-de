---
title: "ARIA: cell role"
short-title: cell
slug: Web/Accessibility/ARIA/Reference/Roles/cell_role
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Der `cell`-Wert des ARIA-_role_-Attributs identifiziert ein Element als Zelle in einem tabellarischen Container, der keine Spalten- oder Zeilenkopfinformationen enthält. Um unterstützt zu werden, muss die Zelle in ein Element mit der Rolle `row` eingebettet sein.

```html
<div role="row">
  <span role="cell">France</span>
  <span role="cell">67 million</span>
</div>
```

Eine bessere, semantischere Variante, die oben genannten Zellen zu schreiben, wäre die Verwendung des semantischen [`<td>`](/de/docs/Web/HTML/Reference/Elements/td)-Elements.

```html
<tr role="row">
  <td role="cell">France</td>
  <td role="cell">67 million</td>
</tr>
```

## Beschreibung

Das Element mit `role="cell"` ist eine Zelle innerhalb einer Zeile, optional innerhalb einer [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role), innerhalb einer [`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role). Befindet sich die Zelle in einem [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role), ist die Verwendung von [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role) angebracht. Die Verwendung von nativen HTML-{{HTMLElement('td')}}-Elementen, wann immer möglich, wird dringend empfohlen.

Jedes Element mit `role="cell"` MUSS in einem Containerelement mit [`role="row"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) verschachtelt sein. Diese Zeile kann wiederum innerhalb eines Elements mit [`role="rowgroup"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role) verschachtelt sein und sollte innerhalb eines `grid`, `table` oder `treegrid` eingebettet sein. Wenn eine Zelle Spalten- oder Zeilenkopfinformationen enthält, verwenden Sie die Rollen `columnheader` oder `rowheader`. Wenn die Zelle keine Kopfinformationen enthält und in einem `grid` oder `treegrid` eingebettet ist, könnte die Rolle `gridcell` angemessener sein.

Eine Zelle kann eine Anzahl von Attributen enthalten, die die Position der Zelle innerhalb der Tabellenstruktur klären, einschließlich [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex), [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan), [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex), und [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan).

> [!NOTE]
> Es wird dringend empfohlen, soweit möglich das native HTML-Tabellelement ({{HTMLElement('table')}}) Element, zusammen mit dem Tabellenzeilen-Element ({{HTMLElement('tr')}}) und dem Tabellenzellen-Element ({{HTMLElement('td')}}) zu verwenden.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

#### Kontextrollen

- [role="row"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
  - : Ein Element mit `role="row"` ist eine Zeile von Zellen innerhalb einer tabellarischen Struktur. Eine Zeile enthält eine oder mehrere Zellen, Gitterzellen, Spaltenüberschriften oder Zeilenüberschriften innerhalb eines [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), [`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) oder `treegrid`, und optional innerhalb einer [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role).
- [role="rowgroup"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
  - : `Row` ist eine erforderliche Zellenübergeordnete. `Rowgroup` ist eine optionale kontextuelle Zeilenübergeordnete. Sie stellt eine Beziehung zwischen nachfolgenden Zeilen her. Sie ist ein strukturelles Äquivalent zu den [`thead`](/de/docs/Web/HTML/Reference/Elements/thead), [`tfoot`](/de/docs/Web/HTML/Reference/Elements/tfoot), und [`tbody`](/de/docs/Web/HTML/Reference/Elements/tbody)-Elementen in einem [HTML-`table`](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)-Element.
- [role="table"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
  - : Eines der drei möglichen Kontexte (zusammen mit `grid` und `treegrid`), in denen eine Reihe mit Zellen vorkommt. Die Tabelle identifiziert die Zelle als Teil einer nicht-interaktiven Tabellenstruktur, die Daten in Zeilen und Spalten enthält, ähnlich dem nativen HTML-[`<table>`](/de/docs/Web/HTML/Reference/Elements/table)-Element.
- [role="grid"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
  - : Eines der drei möglichen Kontexte (zusammen mit `table` und `treegrid`), in denen Sie eine Zeile mit `cells` und `gridcells` finden. `Grid` identifiziert eine Zelle als Teil einer möglicherweise interaktiven Tabellenstruktur, die Daten in Zeilen und Spalten enthält, ähnlich dem nativen [`<table>`](/de/docs/Web/HTML/Reference/Elements/table)-HTML-Element.
- [role="treegrid"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)
  - : Ähnlich einem Raster, jedoch mit Zeilen, die ähnlich wie ein Baum erweitert und reduziert werden können.

#### Unterklassenrollen

- [role="gridcell"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
  - : Eine Zelle in einer Reihe innerhalb eines `grid` oder `treegrid`.
- [role="columnheader"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
  - : Eine Kopfzelle, die das strukturelle Äquivalent des HTML-[`<th>`](/de/docs/Web/HTML/Reference/Elements/th)-Elements mit einem Spaltenbereich darstellt. Im Gegensatz zu einer einfachen Zelle stellt die `columnheader`-Rolle eine Beziehung zwischen ihr und allen Zellen in der entsprechenden Spalte her.
- [role="rowheader"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
  - : Eine Kopfzelle, die das strukturelle Äquivalent des HTML-[`<th>`](/de/docs/Web/HTML/Reference/Elements/th)-Elements mit einem Zeilenbereich darstellt. Im Gegensatz zu einer einfachen Zelle stellt die `rowheader`-Rolle eine Beziehung zwischen ihr und allen Zellen in der entsprechenden Zeile her.

#### Zustände und Eigenschaften

- [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan)
  - : Ähnlich dem HTML-[`<th>`](/de/docs/Web/HTML/Reference/Elements/th)-Element und dem [`<td>` colspan-Attribut](/de/docs/Web/HTML/Reference/Elements/td), definiert es die Anzahl der Spalten, die von der Zelle überspannt werden.
- [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan)
  - : Ähnlich dem HTML-[`<th>`](/de/docs/Web/HTML/Reference/Elements/th)-Element und dem [`<td>` rowspan-Attribut](/de/docs/Web/HTML/Reference/Elements/td), definiert es die Anzahl der Zeilen, die von der Zelle überspannt werden.
- [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex)-Attribut
  - : Das `aria-colindex`-Attribut ist nur erforderlich, wenn Spalten im DOM ausgeblendet sind. Das Attribut nimmt als Wert einen Integer zwischen 1 und der Gesamtanzahl der Spalten innerhalb der `table`, `grid` oder `treegrid`. Das `aria-colindex` definiert den Spaltenindex oder die Position eines Elements in Bezug auf die Gesamtanzahl der Spalten innerhalb einer Zeile. Wenn alle Spalten im DOM sind, ist dieses Attribut nicht erforderlich.
- [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex)-Attribut
  - : Das `aria-rowindex`-Attribut ist nur erforderlich, wenn Zeilen im DOM ausgeblendet sind, um anzugeben, in welcher Zeile, in der Liste der Gesamtzeilen, sich die aktuelle Zelle befindet. Das Attribut nimmt als Wert einen Integer zwischen 1 und der Gesamtanzahl der Zeilen innerhalb der Tabelle, des Raster oder des Baumgitters, der die Position oder den Index der Zelle angibt. Zum Beispiel würde eine Zelle in der ersten Zeile der ersten Kopfzeile wahrscheinlich `aria-rowindex="1"` gesetzt haben, und Zellen in Zeile 47 hätten `aria-rowindex="47"`, wenn `aria-rowindex` benötigt würde, da nicht alle Zeilen im DOM sind. Wenn die sichtbaren Zeilen zusammenhängend sind und es keine Zellen mit einem `colspan` oder `rowspan` größer als eins gibt, kann diese Eigenschaft den übergeordneten Zeilen statt allen Zellenzeilen hinzugefügt werden.

### Tastaturinteraktionen

Keine.

### Erforderliche JavaScript-Funktionen

Die erste Regel der ARIA-Verwendung ist, dass, wenn Sie eine native Funktion mit den erforderlichen Semantiken und Verhaltensweisen verwenden können, anstatt ein Element umzuproporzionieren und eine ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, Sie dies tun sollten. Verwenden Sie das HTML-Element [`<td>`](/de/docs/Web/HTML/Reference/Elements/td) anstelle der ARIA-Rolle `cell` wann immer möglich.

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

Oben ist eine nicht-semantische ARIA-Tabelle mit fünf von 81 Zeilen, die im DOM vorhanden sind: eine innerhalb einer Tabellenüberschrift und vier Zeilen innerhalb des Tabellenkörpers. Da nicht alle Zeilen im DOM sind, haben wir die `aria-rowindex`-Eigenschaft auf jeder Zelle eingefügt. Wenn keine Zellen mehr als eine Zeile oder Spalte überspannten, hätte die `aria-rowindex` auf der Zeile anstelle der einzelnen Zellen der Zeile platziert werden können.

## Best Practices

Verwenden Sie nur {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}}, usw., für die Daten-Tabellenstruktur. Sie können ARIA-Rollen hinzufügen, um die Zugänglichkeit zu gewährleisten, falls die nativen Semantiken der Tabelle entfernt wurden, wie z. B. durch CSS. Ein relevanter Anwendungsfall für die ARIA-Tabelle-Rolle ist, wenn die nativen Semantiken einer Tabelle durch [CSS's display-Eigenschaft, wie z. B. durch display: grid](/de/docs/Web/CSS/Reference/Properties/display#accessibility) überschrieben werden. In diesem Fall können Sie die ARIA-Tabellenrollen verwenden, um die Semantiken wieder hinzuzufügen.

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

Oben ist die semantische Art, eine Tabelle zu schreiben. Die ARIA-Rollen sind nicht erforderlich, wenn die nativen Semantiken der Tabelle und damit auch die Tabellenzeilen nicht verändert wurden, wie z. B. durch [the display property](/de/docs/Web/CSS/Reference/Properties/display#accessibility).

### Zusätzliche Vorteile

Wenn an ein {{HTMLElement('td')}}-Element angewendet, stellt es die Zellsemantiken wieder her, falls die Semantiken entfernt wurden, wie bei `display: grid;`.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`role="row"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [`role="gridcell"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [HTML `<td>`-Element](/de/docs/Web/HTML/Reference/Elements/td)
- [HTML `<th>`-Element](/de/docs/Web/HTML/Reference/Elements/th)
- [Lernen: HTML-Tabellenzugänglichkeit](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
- [Lernen: HTML-Tabellengrundlagen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
