---
title: "ARIA: cell-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/cell_role
l10n:
  sourceCommit: ec98716dfe71c78db3f82ee3b1b9e7f68997fa19
---

Der `cell`-Wert des ARIA-_role_-Attributs identifiziert ein Element als eine Zelle in einem tabellarischen Container, der keine Spalten- oder Zeilenkopf-Informationen enthält. Um unterstützt zu werden, muss die Zelle in einem Element mit der Rolle `row` verschachtelt sein.

```html
<div role="row">
  <span role="cell">France</span>
  <span role="cell">67 million</span>
</div>
```

Eine bessere, semantischere Schreibweise der oben genannten Zellen wäre die Verwendung des semantischen [`<td>`](/de/docs/Web/HTML/Element/td)-Elements.

```html
<tr role="row">
  <td role="cell">France</td>
  <td role="cell">67 million</td>
</tr>
```

## Beschreibung

Das Element mit `role="cell"` ist eine Zelle innerhalb einer Zeile, optional innerhalb einer [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role), innerhalb einer [`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role). Wenn sich die Zelle in einem [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) befindet, wählen Sie `gridcell`. Die Verwendung nativer HTML-{{HTMLElement('td')}}-Elemente wird, wann immer möglich, dringend empfohlen.

Jedes Element mit `role="cell"` MUSS in einem Containerelement mit [`role="row"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) verschachtelt sein. Diese Zeile kann wiederum in einem Element mit [`role="rowgroup"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role) verschachtelt werden und sollte in einem `grid`, `table` oder `treegrid` verschachtelt sein. Wenn eine Zelle Spalten- oder Zeilenkopf-Informationen enthält, verwenden Sie die Rollen `columnheader` oder `rowheader`. Wenn die Zelle keine Kopf-Informationen enthält und in einem `grid` oder `treegrid` verschachtelt ist, kann die Rolle `gridcell` geeigneter sein.

Eine Zelle kann eine Anzahl von Eigenschaftenattributen enthalten, die die Position der Zelle innerhalb der tabellarischen Datenstruktur klären, einschließlich [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex), [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan), [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) und [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan).

> [!NOTE]
> Die Verwendung des nativen HTML-Tabellenelements ({{HTMLElement('table')}}), zusammen mit dem Tabellenzeilenelement ({{HTMLElement('tr')}}) und Zellen-Tabellenelement ({{HTMLElement('td')}}), wann immer möglich, wird dringend empfohlen.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

#### Kontextrollen

- [role="row"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
  - : Ein Element mit `role="row"` ist eine Zeile von Zellen innerhalb einer tabellarischen Struktur. Eine Zeile enthält eine oder mehrere Zellen, Rasterzellen, Spaltenköpfe oder Zeilenköpfe innerhalb eines [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), einer [`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) oder `treegrid`, und optional innerhalb einer [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role).
- [role="rowgroup"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
  - : `Row` ist eine erforderliche Zell-Elternelement. `Rowgroup` ist ein optionaler Kontext-Zeilen-Elternelement. Es stellt eine Beziehung zwischen untergeordneten Zeilen her. Es ist das strukturelle Äquivalent zu den [`thead`](/de/docs/Web/HTML/Element/thead)-, [`tfoot`](/de/docs/Web/HTML/Element/tfoot)- und [`tbody`](/de/docs/Web/HTML/Element/tbody)-Elementen in einem [HTML-`table`](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)-Element.
- [role="table"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
  - : Einer der drei möglichen Kontexte (neben `grid` und `treegrid`), in denen Sie eine Zeile mit Zellen finden. Die Tabelle identifiziert die Zelle als Teil einer nicht-interaktiven Tabellenstruktur mit Daten, die in Zeilen und Spalten angeordnet sind, ähnlich dem nativen HTML-`<table>`-Element.
- [role="grid"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
  - : Einer der drei möglichen Kontexte (neben `table` und `treegrid`), in denen Sie eine Zeile mit `cells` und `gridcells` finden. `Grid` identifiziert eine Zelle als Teil einer möglicherweise interaktiven Tabellenstruktur mit Daten, die in Zeilen und Spalten angeordnet sind, ähnlich dem nativen [`<table>`](/de/docs/Web/HTML/Element/table) HTML-Element.
- [role="treegrid"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)
  - : Ähnlich einem Raster, jedoch mit Zeilen, die auf die gleiche Weise wie bei einem Baum erweitert und reduziert werden können.

#### Unterklassenrollen

- [role="gridcell"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
  - : Eine Zelle in einer Zeile innerhalb eines `grid` oder `treegrid`.
- [role="columnheader"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
  - : Eine Kopfzelle, die das strukturelle Äquivalent zum HTML-`<th>`-Element mit Spaltenbereich ist. Im Gegensatz zu einer einfachen Zelle stellt die `columnheader`-Rolle eine Beziehung zwischen ihr und allen Zellen in der entsprechenden Spalte her.
- [role="rowheader"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
  - : Eine Kopfzelle, die das strukturelle Äquivalent zum HTML-`<th>`-Element mit Zeilenbereich ist. Im Gegensatz zu einer einfachen Zelle stellt die `rowheader`-Rolle eine Beziehung zwischen ihr und allen Zellen in der entsprechenden Zeile her.

#### Zustände und Eigenschaften

- [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan)
  - : Ähnlich dem HTML-`<th>`- und dem [`<td>` colspan-Attribut](/de/docs/Web/HTML/Element/td), definiert, wie viele Spalten von der Zelle überspannt werden.
- [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan)
  - : Ähnlich dem HTML-`<th>`- und dem [`<td>` rowspan-Attribut](/de/docs/Web/HTML/Element/td), definiert, wie viele Zeilen von der Zelle überspannt werden.
- [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex)-Attribut
  - : Das `aria-colindex`-Attribut ist nur erforderlich, wenn Spalten im DOM verborgen sind. Das Attribut nimmt als Wert eine ganze Zahl zwischen 1 und der Gesamtzahl der Spalten innerhalb der `table`, `grid` oder `treegrid`. `aria-colindex` definiert den Spaltenindex oder die Position eines Elements in Bezug auf die Gesamtanzahl der Spalten innerhalb einer Zeile. Wenn sich alle Spalten im DOM befinden, ist dieses Attribut nicht erforderlich.
- [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex)-Attribut
  - : Das `aria-rowindex`-Attribut ist nur erforderlich, wenn Zeilen im DOM verborgen sind, um anzugeben, in welcher Zeile, in der Liste der gesamten Zeilen, sich die aktuelle Zelle befindet. Das Attribut nimmt als Wert eine ganze Zahl zwischen 1 und der Gesamtzahl der Zeilen innerhalb der Tabelle, des Rasters oder des Baumrasters, die die Position oder den Index der Zelle anzeigt. Zum Beispiel hätte eine Zelle in der ersten Zeile des ersten Kopfbereichs wahrscheinlich `aria-rowindex="1"` gesetzt, und Zellen in Zeile 47 hätten `aria-rowindex="47"`, wenn `aria-rowindex` erforderlich ist, da nicht alle Zeilen im DOM vorhanden sind. Wenn die sichtbaren Zeilen zusammenhängend sind und es keine Zellen mit einem `colspan` oder `rowspan` von mehr als eins gibt, kann diese Eigenschaft den übergeordneten Zeilen hinzugefügt werden, anstatt allen Zellen der Zeilen.

### Tastaturinteraktionen

Keine.

### Erforderliche JavaScript-Funktionen

Die erste Regel bei der Verwendung von ARIA ist, wenn Sie ein natives Feature verwenden können, das die erforderliche Semantik und das Verhalten bereits eingebaut hat, anstatt ein Element umzufunktionieren und **eine** ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie dies. Verwenden Sie das HTML-`<td>`-Element anstelle der ARIA-Rolle `cell`, wann immer möglich.

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

Oben ist eine nicht-semantische ARIA-Tabelle mit fünf von 81 Zeilen im DOM: eine innerhalb eines Tabellenkopfes und vier Zeilen innerhalb des Tabellenkörpers. Da nicht alle Zeilen im DOM sind, haben wir die `aria-rowindex`-Eigenschaft auf jede Zelle angewendet. Wenn keine Zellen mehr als eine Zeile oder Spalte überspannten, hätte `aria-rowindex` auf die Zeile angewendet werden können, anstatt auf die einzelnen Zellen der Zeile.

## Beste Praktiken

Verwenden Sie nur {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}}, etc., für die Struktur von Datentabellen. Sie können ARIA-Rollen hinzufügen, um die Zugänglichkeit sicherzustellen, falls die nativen Semantiken der Tabelle, z. B. durch CSS, entfernt werden. Ein relevanter Anwendungsfall für die ARIA-Tabellenrolle ist, wenn die nativen Semantiken einer Tabelle durch [CSS's display-Property, wie z. B. display: grid](/de/docs/Web/CSS/display#accessibility) überschrieben werden. In diesem Fall können Sie die ARIA-Tabellenrollen verwenden, um die Semantik wiederherzustellen.

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

Oben ist die semantische Art, eine Tabelle zu schreiben. Die ARIA-Rollen sind nicht erforderlich, wenn die nativen Semantiken der Tabelle und daher die Tabellenzeilen nicht verändert wurden, wie z. B. durch [die display-Property](/de/docs/Web/CSS/display#accessibility).

### Zusätzliche Vorteile

Wenn auf ein {{HTMLElement('td')}} angewendet, stellt es die Zellsemantik des Elements wieder her, falls die Semantiken entfernt wurden, wie z. B. bei `display: grid;`.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`role="row"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [`role="gridcell"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [HTML `<td>`-Element](/de/docs/Web/HTML/Element/td)
- [HTML `<th>`-Element](/de/docs/Web/HTML/Element/th)
- [Lernen: HTML-Tabellenzugänglichkeit](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
- [Lernen: Grundlagen von HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
