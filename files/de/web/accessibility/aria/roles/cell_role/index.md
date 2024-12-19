---
title: "ARIA: cell Rolle"
slug: Web/Accessibility/ARIA/Roles/cell_role
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{AccessibilitySidebar}}

Der `cell`-Wert des ARIA- _role_-Attributs identifiziert ein Element als eine Zelle in einem Tabellar-Container, der keine Spalten- oder Zeilenkopf-Informationen enthält. Um unterstützt zu werden, muss die Zelle in einem Element mit der Rolle `row` verschachtelt sein.

```html
<div role="row">
  <span role="cell">France</span>
  <span role="cell">67 million</span>
</div>
```

Eine bessere, semantischere Methode, die oben genannten Zellen zu schreiben, ist die Verwendung des semantischen [`<td>`](/de/docs/Web/HTML/Element/td)-Elements.

```html
<tr role="row">
  <td role="cell">France</td>
  <td role="cell">67 million</td>
</tr>
```

## Beschreibung

Das Element mit `role="cell"` ist eine Zelle innerhalb einer Zeile, optional innerhalb einer [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role), innerhalb einer [`table`](/de/docs/Web/Accessibility/ARIA/Roles/table_role). Falls die Zelle in einem [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role) liegt, sollten Sie [`gridcell`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role) in Betracht ziehen. Die Verwendung nativer HTML {{HTMLElement('td')}}-Elemente, wann immer möglich, wird dringend empfohlen.

Jedes Element mit `role="cell"` MUSS in einem Containerelement mit [`role="row"`](/de/docs/Web/Accessibility/ARIA/Roles/row_role) verschachtelt sein. Diese Zeile kann wiederum in ein Element mit [`role="rowgroup"`](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role) verschachtelt werden und sollte innerhalb eines `grid`, `table` oder `treegrid` verschachtelt sein. Wenn eine Zelle Spalten- oder Zeilenkopfinformationen enthält, verwenden Sie die Rollen `columnheader` oder `rowheader`. Wenn die Zelle keine Kopfinformationen enthält und in einem `grid` oder `treegrid` verschachtelt ist, könnte die Rolle `gridcell` passender sein.

Eine Zelle kann mehrere Eigenschaftsattributen enthalten, die die Position der Zelle innerhalb der tabellarischen Datenstruktur klären, einschließlich [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex), [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colspan), [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) und [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan).

> [!NOTE]
> Die Verwendung des nativen HTML-Tabellen-Elements ({{HTMLElement('table')}}), zusammen mit dem Tabellenzeilen-Element ({{HTMLElement('tr')}}) und dem Tabellenzellen-Element ({{HTMLElement('td')}}) wann immer möglich, wird dringend empfohlen.

### Zugeordnete WAI-ARIA Rollen, Zustände und Eigenschaften

#### Kontextrollen

- [role="row"](/de/docs/Web/Accessibility/ARIA/Roles/row_role)
  - : Ein Element mit `role="row"` ist eine Zeile von Zellen innerhalb einer tabellarischen Struktur. Eine Zeile enthält eine oder mehrere Zellen, Gitterzellen, Spaltenüberschriften oder Zeilenüberschriften innerhalb eines [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role), [`table`](/de/docs/Web/Accessibility/ARIA/Roles/table_role) oder `treegrid` und optional innerhalb einer [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role).
- [role="rowgroup"](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role)
  - : `Row` ist ein erforderliches Zellen-Elternelement. `Rowgroup` ist ein optionales, kontextuelles Zeilen-Elternelement. Es stellt eine Beziehung zwischen Nachkommenzeilen her. Es ist ein strukturelles Äquivalent zu den Elementen [`thead`](/de/docs/Web/HTML/Element/thead), [`tfoot`](/de/docs/Web/HTML/Element/tfoot) und [`tbody`](/de/docs/Web/HTML/Element/tbody) in einem [HTML `table`](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)-Element.
- [role="table"](/de/docs/Web/Accessibility/ARIA/Roles/table_role)
  - : Eines der drei möglichen Kontexte (zusammen mit `grid` und `treegrid`), in denen Sie eine Zeile mit Zellen finden werden. Table identifiziert die Zelle als Teil einer nicht-interaktiven tabellarischen Struktur, die Daten in Zeilen und Spalten anordnet, ähnlich dem nativen HTML [`<table>`](/de/docs/Web/HTML/Element/table)-Element.
- [role="grid"](/de/docs/Web/Accessibility/ARIA/Roles/grid_role)
  - : Eine der drei möglichen Kontexte (zusammen mit `table` und `treegrid`), in denen Sie eine Zeile mit `cells` und `gridcells` finden. `Grid` identifiziert eine Zelle als Teil einer möglicherweise interaktiven Tabellenstruktur, die Daten in Zeilen und Spalten anordnet, ähnlich dem nativen [`<table>`](/de/docs/Web/HTML/Element/table) HTML-Element.
- [role="treegrid"](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role)
  - : Ähnlich einem Gitter, aber mit Zeilen, die wie bei einem Baum erweitert und reduziert werden können.

#### Unterklassenrollen

- [role="gridcell"](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
  - : Eine Zelle in einer Zeile innerhalb eines `grid` oder `treegrid`.
- [role="columnheader"](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
  - : Eine Kopfzelle, die das strukturelle Äquivalent des HTML [`<th>`](/de/docs/Web/HTML/Element/th)-Elements mit einer Spaltenscope ist. Anders als eine einfache Zelle stellt die `columnheader`-Rolle eine Beziehung zu allen Zellen in der entsprechenden Spalte her.
- [role="rowheader"](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role)
  - : Eine Kopfzelle, die das strukturelle Äquivalent des HTML [`<th>`](/de/docs/Web/HTML/Element/th)-Elements mit einer Zeilenscope ist. Anders als eine einfache Zelle stellt die `rowheader`-Rolle eine Beziehung zu allen Zellen in der entsprechenden Zeile her.

#### Zustände und Eigenschaften

- [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colspan)
  - : Ähnlich dem HTML [`<th>`](/de/docs/Web/HTML/Element/th) und dem [`<td>` colspan Attribut](/de/docs/Web/HTML/Element/td), definiert es die Anzahl der von der Zelle überspannten Spalten.
- [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan)
  - : Ähnlich dem HTML [`<th>`](/de/docs/Web/HTML/Element/th) und dem [`<td>` rowspan Attribut](/de/docs/Web/HTML/Element/td), definiert es die Anzahl der von der Zelle überspannten Zeilen.
- [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) Attribut
  - : Das `aria-colindex`-Attribut ist nur erforderlich, wenn Spalten aus dem DOM ausgeblendet sind. Das Attribut nimmt als Wert eine ganze Zahl zwischen 1 und der Gesamtanzahl der Spalten innerhalb der `table`, `grid` oder `treegrid`. Das `aria-colindex` definiert den Spaltenindex oder die Position eines Elements in Bezug auf die Gesamtzahl der Spalten innerhalb einer Zeile. Wenn alle Spalten im DOM sind, ist dieses Attribut nicht erforderlich.
- [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) Attribut
  - : Das `aria-rowindex`-Attribut ist nur erforderlich, wenn Zeilen aus dem DOM ausgeblendet sind, um anzugeben, in welcher Zeile, in der Liste der Gesamtzeilen, sich die aktuelle Zelle befindet. Das Attribut nimmt als Wert eine ganze Zahl zwischen 1 und der Gesamtzahl der Zeilen innerhalb der Tabelle, des Gitters oder des Baumgitters an und gibt die Position oder den Index der Zelle an. Zum Beispiel würde eine Zelle in der ersten Zeile der ersten Kopfzeile wahrscheinlich `aria-rowindex="1"` haben, und Zellen in Zeile 47 würden `aria-rowindex="47"` haben, wenn `aria-rowindex` benötigt würde, weil nicht alle Zeilen im DOM sind. Wenn die sichtbaren Zeilen zusammenhängend sind und es keine Zellen mit einem `colspan` oder `rowspan` größer als eins gibt, kann diese Eigenschaft den übergeordneten Zeilen anstelle der Zellen aller Zeilen hinzugefügt werden.

### Tastaturinteraktionen

Keine

### Erforderliche JavaScript-Funktionen

Die erste Regel der ARIA-Nutzung ist, wenn Sie eine native Funktion mit den benötigten Semantiken und Verhaltensweisen verwenden können, die bereits eingebaut sind, statt ein Element neu zu nutzen und eine ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie dies. Verwenden Sie das HTML [`<td>`](/de/docs/Web/HTML/Element/td)-Element anstelle der ARIA-Rolle `cell`, wann immer möglich.

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

Oben sehen Sie eine nicht-semantische ARIA-Tabelle mit fünf von 81 Zeilen, die im DOM vorhanden sind: eine innerhalb eines Tabellenkopfes und vier Zeilen innerhalb des Tabellenkörpers. Da nicht alle Zeilen im DOM sind, haben wir die `aria-rowindex`-Eigenschaft auf jede Zelle angewendet. Wenn keine Zellen mehr als eine Zeile oder Spalte überlappten, hätte `aria-rowindex` auf die Zeile und nicht auf die einzelnen Zellen der Zeile gesetzt werden können.

## Beste Praktiken

Verwenden Sie nur {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}}, usw., für die Daten-Tabellenstruktur. Sie können ARIA-Rollen hinzufügen, um die Zugänglichkeit sicherzustellen, sollte die native Semantik der Tabelle, z. B. durch CSS, entfernt werden. Ein relevanter Anwendungsfall für die ARIA-Tabellenrolle ist, wenn die native Semantik einer Tabelle durch [die CSS display-Eigenschaft, wie etwa durch display: grid](/de/docs/Web/CSS/display#accessibility), überschrieben wird. In diesem Fall können Sie die ARIA-Tabellenrollen verwenden, um die Semantik wiederherzustellen.

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

Oben sehen Sie die semantische Art, eine Tabelle zu schreiben. Die ARIA-Rollen sind nicht notwendig, wenn die native Semantik der Tabelle und damit der Tabellenzeilen nicht verändert wurde, wie etwa durch [die Display-Eigenschaft](/de/docs/Web/CSS/display#accessibility).

### Zusätzliche Vorteile

Wenn auf eine {{HTMLElement('td')}} angewendet, stellt es die Zellsemantik für das Element wieder her, falls die Semantik entfernt wurde, wie bei `display: grid;`.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`role="row"`](/de/docs/Web/Accessibility/ARIA/Roles/row_role)
- [`role="gridcell"`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
- [HTML `<td>` Element](/de/docs/Web/HTML/Element/td)
- [HTML `<th>` Element](/de/docs/Web/HTML/Element/th)
- [Lernen: HTML-Tabellenzugänglichkeit](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
- [Lernen: HTML-Tabellengrundlagen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
