---
title: "ARIA: cell Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/cell_role
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Der `cell` Wert des ARIA _role_ Attributs kennzeichnet ein Element als Zelle in einem tabellarischen Container, der keine Spalten- oder Zeilenkopfzeileninformationen enthält. Um unterstützt zu werden, muss die Zelle in einem Element mit der Rolle `row` verschachtelt sein.

```html
<div role="row">
  <span role="cell">France</span>
  <span role="cell">67 million</span>
</div>
```

Eine bessere, semantischere Möglichkeit, die obigen Zellen zu schreiben, wäre die Verwendung des semantischen [`<td>`](/de/docs/Web/HTML/Reference/Elements/td) Elements.

```html
<tr role="row">
  <td role="cell">France</td>
  <td role="cell">67 million</td>
</tr>
```

## Beschreibung

Das Element mit `role="cell"` ist eine Zelle innerhalb einer Reihe, optional innerhalb einer [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role), innerhalb einer [`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role). Wenn sich die Zelle in einem [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) befindet, nutzen Sie `gridcell`. Die Verwendung nativer HTML {{HTMLElement('td')}} Elemente wird, wann immer möglich, dringend empfohlen.

Jedes Element mit `role="cell"` MUSS in einem Container-Element mit [`role="row"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) verschachtelt sein. Diese Zeile kann wiederum in einem Element mit [`role="rowgroup"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role) verschachtelt sein und sollte innerhalb eines `grid`, `table` oder `treegrid` verschachtelt werden. Wenn eine Zelle Spalten- oder Zeilenkopfzeileninformationen enthält, verwenden Sie die `columnheader` oder `rowheader` Rollen. Wenn die Zelle keine Kopfzeileninformationen enthält und in einem `grid` oder `treegrid` verschachtelt ist, kann die Rolle `gridcell` angemessener sein.

Eine Zelle kann eine Reihe von Eigenschaften-Attributen enthalten, die die Position der Zelle innerhalb der tabellarischen Datenstruktur klären, einschließlich [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex), [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan), [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) und [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan).

> [!NOTE]
> Die Verwendung des nativen HTML Tabellen-Elements ({{HTMLElement('table')}}) zusammen mit dem Tabellenzeilen-Element ({{HTMLElement('tr')}}) und dem Tabellenzellen-Element ({{HTMLElement('td')}}) wird, wann immer möglich, dringend empfohlen.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

#### Kontextrollen

- [role="row"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
  - : Ein Element mit `role="row"` ist eine Zeile von Zellen innerhalb einer tabellarischen Struktur. Eine Zeile enthält eine oder mehrere Zellen, Gitterzellen, Spaltenkopfzeilen oder Zeilenkopfzeilen innerhalb eines [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), [`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) oder `treegrid`, und optional innerhalb einer [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role).
- [role="rowgroup"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
  - : `Row` ist ein erforderliches Zellen-Elternteil. `Rowgroup` ist ein optionales kontextuelles Zeilen-Elternteil. Es stellt eine Beziehung zwischen nachfolgenden Zeilen her. Es ist ein strukturelles Äquivalent zu den [`thead`](/de/docs/Web/HTML/Reference/Elements/thead), [`tfoot`](/de/docs/Web/HTML/Reference/Elements/tfoot) und [`tbody`](/de/docs/Web/HTML/Reference/Elements/tbody) Elementen in einem [HTML `table`](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics) Element.
- [role="table"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
  - : Eines der drei möglichen Kontexte (zusammen mit `grid` und `treegrid`), in dem Sie eine Zeile mit Zellen finden. Tabelle identifiziert die Zelle als Teil einer nicht-interaktiven Tabellenstruktur, die Daten enthält, die in Zeilen und Spalten angeordnet sind, ähnlich dem nativen HTML [`<table>`](/de/docs/Web/HTML/Reference/Elements/table) Element.
- [role="grid"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
  - : Eines der drei möglichen Kontexte (zusammen mit `table` und `treegrid`), in dem Sie eine Zeile mit `cells` und `gridcells` finden. `Grid` kennzeichnet eine Zelle als Teil einer möglicherweise interaktiven Tabellenstruktur, die Daten enthält, die in Zeilen und Spalten angeordnet sind, ähnlich dem nativen [`<table>`](/de/docs/Web/HTML/Reference/Elements/table) HTML Element.
- [role="treegrid"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)
  - : Ähnlich einem Grid, aber mit Zeilen, die erweitert und in der gleichen Weise wie bei einem Baum zusammengeklappt werden können.

#### Unterklassen Rollen

- [role="gridcell"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
  - : Eine Zelle in einer Zeile innerhalb eines `grid` oder `treegrid`.
- [role="columnheader"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
  - : Eine Header-Zelle, die das strukturelle Äquivalent des HTML [`<th>`](/de/docs/Web/HTML/Reference/Elements/th) Elements mit Spaltenscope ist. Anders als bei einer einfachen Zelle schafft die `columnheader` Rolle eine Beziehung zwischen ihr und allen Zellen in der entsprechenden Spalte.
- [role="rowheader"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
  - : Eine Header-Zelle, die das strukturelle Äquivalent des HTML [`<th>`](/de/docs/Web/HTML/Reference/Elements/th) Elements mit Zeilenscope ist. Anders als bei einer einfachen Zelle schafft die `rowheader` Rolle eine Beziehung zwischen ihr und allen Zellen in der entsprechenden Zeile.

#### Zustände und Eigenschaften

- [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan)
  - : Ähnlich dem HTML [`<th>`](/de/docs/Web/HTML/Reference/Elements/th) und [`<td>` colspan Attribut](/de/docs/Web/HTML/Reference/Elements/td), definiert es die Anzahl der von der Zelle überspannten Spalten.
- [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan)
  - : Ähnlich dem HTML [`<th>`](/de/docs/Web/HTML/Reference/Elements/th) und [`<td>` rowspan Attribut](/de/docs/Web/HTML/Reference/Elements/td), definiert es die Anzahl der von der Zelle überspannten Zeilen.
- [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) Attribut
  - : Das `aria-colindex` Attribut wird nur benötigt, wenn Spalten im DOM versteckt sind. Das Attribut nimmt als Wert eine ganze Zahl zwischen 1 und der Gesamtanzahl der Spalten innerhalb der `table`, `grid` oder `treegrid` ein. Das `aria-colindex` definiert den Spaltenindex oder die Position eines Elements in Bezug auf die Gesamtanzahl der Spalten innerhalb einer Zeile. Wenn alle Spalten im DOM sind, ist dieses Attribut nicht notwendig.
- [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) Attribut
  - : Das `aria-rowindex` Attribut wird nur benötigt, wenn Zeilen im DOM versteckt sind, um anzuzeigen, in welcher Zeile der Liste der Gesamtzeilen sich die aktuelle Zelle befindet. Das Attribut nimmt als Wert eine ganze Zahl zwischen 1 und der Gesamtanzahl der Zeilen in der Tabelle, dem Grid oder dem Treegrid ein, was die Position oder den Index der Zelle anzeigt. Zum Beispiel hätte eine Zelle in der ersten Zeile des ersten Headers wahrscheinlich `aria-rowindex="1"` gesetzt und Zellen in Zeile 47 hätten `aria-rowindex="47"`, wenn `aria-rowindex` aufgrund nicht aller Zeilen im DOM notwendig wäre. Wenn die sichtbaren Zeilen zusammenhängend sind und es keine Zellen mit einer `colspan` oder `rowspan` größer als eins gibt, kann diese Eigenschaft den übergeordneten Zeilen statt allen Zellen der Zeilen hinzugefügt werden.

### Tastaturinteraktionen

Keine.

### Erforderliche JavaScript-Features

Die erste Regel für die Verwendung von ARIA ist, dass Sie, wenn Sie eine native Funktion mit den bereits eingebauten Semantiken und Verhaltensweisen verwenden können, anstatt ein Element neu zu verwenden und **eine** ARIA Rolle, -Zustand oder -Eigenschaft hinzuzufügen, um es zugänglich zu machen, dies tun sollten. Verwenden Sie das HTML [`<td>`](/de/docs/Web/HTML/Reference/Elements/td) Element anstelle der ARIA-Rolle `cell`, wann immer möglich.

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

Oben ist eine nicht-semantische ARIA-Tabelle mit fünf von 81 Zeilen, die im DOM vorhanden sind: eine in einem Tabellenkopf und vier Zeilen im Tabellenkörper. Da nicht alle Zeilen im DOM sind, haben wir die `aria-rowindex` Eigenschaft in jeder Zelle inkludiert. Wenn keine Zellen mehr als eine Zeile oder Spalte überspannen würden, könnte das `aria-rowindex` auf die Zeile anstatt auf die individuellen Zellen der Zeile gesetzt werden.

## Beste Praktiken

Verwenden Sie nur {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}} usw., für die Datenstruktur der Tabelle. Sie können ARIA-Rollen hinzufügen, um die Zugänglichkeit sicherzustellen, falls die nativen Semantiken der Tabelle entfernt werden, wie z. B. durch CSS. Ein relevanter Anwendungsfall für die ARIA-Tabelle Rolle ist, wenn die nativen Semantik einer Tabelle durch [CSS-Display-Eigenschaft, wie durch display: grid](/de/docs/Web/CSS/display#accessibility), überschrieben wird. In diesem Fall können Sie die ARIA-Tabellenrollen verwenden, um die Semantiken wieder hinzuzufügen.

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

Oben ist die semantische Art, eine Tabelle zu schreiben. Die ARIA-Rollen sind nicht notwendig, wenn die nativen Semantiken der Tabelle und daher die Tabellenzeilen nicht verändert wurden, wie durch [die Display-Eigenschaft](/de/docs/Web/CSS/display#accessibility).

### Zusätzliche Vorteile

Wenn auf eine {{HTMLElement('td')}} angewendet, stellt es die Zellsemantik dem Element zurück, falls die Semantik entfernt wurde, wie durch `display: grid;`.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`role="row"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [`role="gridcell"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [HTML `<td>` Element](/de/docs/Web/HTML/Reference/Elements/td)
- [HTML `<th>` Element](/de/docs/Web/HTML/Reference/Elements/th)
- [Lernen: HTML Tabellen Zugänglichkeit](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
- [Lernen: Grundlagen der HTML Tabelle](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
