---
title: "ARIA: `row`-Rolle"
short-title: row
slug: Web/Accessibility/ARIA/Reference/Roles/row_role
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Ein Element mit `role="row"` ist eine Zeile von Zellen innerhalb einer tabellarischen Struktur. Eine Zeile enthält eine oder mehrere Zellen, Gitterzellen oder Spaltenüberschriften und möglicherweise eine Zeilenüberschrift innerhalb eines [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), [`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) und optional innerhalb einer [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role).

```html
<div
  role="table"
  aria-label="Populations"
  aria-describedby="country_population_desc">
  <div id="country_population_desc">World Populations by Country</div>
  <div role="rowgroup">
    <div role="row">
      <span role="columnheader" aria-sort="descending">Country</span>
      <span role="columnheader" aria-sort="none">Population</span>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row">
      <span role="cell">Finland</span>
      <span role="cell">5.5 million</span>
    </div>
    <div role="row">
      <span role="cell">France</span>
      <span role="cell">67 million</span>
    </div>
  </div>
</div>
```

## Beschreibung

Das Element mit `role="row"` ist eine Zeile innerhalb eines [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), [`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) und optional innerhalb einer [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role), das eine oder mehrere [`cell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role), [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role), [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) oder [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role) Elemente innerhalb einer statischen tabellarischen Struktur enthält. Die Verwendung von nativen [HTML `<tr>`](/de/docs/Web/HTML/Reference/Elements/tr)-Elementen wird, wann immer möglich, dringend empfohlen.

Um eine ARIA-Zeile zu erstellen, fügen Sie `role="row"` zum Containerelement hinzu. Diese Zeile sollte innerhalb eines Grid, einer Tabelle oder eines Treegrid verschachtelt sein. Eine Gruppe von Zeilen kann direkt innerhalb eines Grids, einer Tabelle oder eines Treegrids oder innerhalb einer Rowgroup in einem dieser Container verschachtelt sein. Jede Zeile enthält untergeordnete Zellen. Diese Zellen können von unterschiedlichem Typ sein, je nachdem, ob es sich um Spalten- oder Zeilenüberschriften oder Gitter- oder reguläre Zellen handelt.

Eine Zeile kann mehrere Attribute enthalten, die die Rolle der Zeile klären, einschließlich [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex), [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level), [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) und [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected).

Wenn die Zeile innerhalb eines Treegrid ist, können Zeilen das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) enthalten, um den aktuellen Status anzuzeigen. Dies ist nicht der Fall für eine gewöhnliche Tabelle oder ein Grid, in denen das `aria-expanded`-Attribut nicht vorhanden ist.

Um ein interaktives Widget mit einer tabellarischen Struktur zu erstellen, verwenden Sie stattdessen das Grid-Muster. Wenn die Interaktion den Auswahlstatus einzelner Zellen ermöglicht, wenn die Navigation von links nach rechts und von oben nach unten bereitgestellt wird, oder wenn die Benutzeroberfläche das Neuanordnen der Zellreihenfolge oder eine Änderung der Zellreihenfolge durch Drag-and-Drop erlaubt, verwenden Sie stattdessen [grid](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) oder [treegrid](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role).

> [!NOTE]
> Die Verwendung des nativen HTML-Tabellenelements ({{HTMLElement('table')}}) zusammen mit dem Tabellenzeilenelement ({{HTMLElement('tr')}}) wird wann immer möglich dringend empfohlen.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

#### Kontextrollen

- [role="rowgroup"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
  - : Ein optionales Kontext-Row-Elternteil, das eine Beziehung zwischen den Nachkommenzeilen herstellt. Es ist ein strukturelles Äquivalent zu den thead-, tfoot- und tbody-Elementen in einem HTML-Tabellenelement.
- [role="table"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
  - : Einer der drei möglichen Kontexte (neben Grid und Treegrid), in denen Sie eine Zeile finden werden, identifiziert die Zeile als Teil einer nicht interaktiven Tabellenstruktur, die Daten enthält, die in Zeilen und Spalten angeordnet sind, ähnlich dem nativen {{HTMLElement('table')}} HTML-Element.
- [role="grid"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
  - : Einer der drei möglichen Kontexte (neben Tabelle und Treegrid), in denen Sie eine Zeile finden werden, identifiziert die Zeile als Teil einer nicht interaktiven Tabellenstruktur, die Daten enthält, die in Zeilen und Spalten angeordnet sind, ähnlich dem nativen {{HTMLElement('table')}} HTML-Element.
- [role="treegrid"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)
  - : Ähnlich einem Grid, jedoch mit Zeilen, die in der gleichen Weise erweitert und reduziert werden können wie bei einem Baum.

#### Nachkommenrollen

- [role="cell"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)
  - : Eine Zelle in einer Zeile innerhalb eines tabellarischen Containers.
- [role="gridcell"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
  - : Eine Zelle in einer Zeile innerhalb eines Grids oder Treegrids.
- [role="columnheader"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
  - : Eine Kopfzelle, die das strukturelle Äquivalent des HTML-Elements {{HTMLElement('th')}} mit einem Spaltenscope ist ({{HTMLElement('tr', '<code>&lt;tr scope="col"&gt;</code>')}}). Im Gegensatz zu einer einfachen Zelle wird durch die columnheader-Rolle eine Beziehung zwischen ihr und allen Zellen in der entsprechenden Spalte hergestellt.
- [role="rowheader"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
  - : Eine Kopfzelle, die das strukturelle Äquivalent des HTML-Elements {{HTMLElement('th')}} mit einem Zeilenscope ist ({{HTMLElement('tr', '<code>&lt;tr scope="row"&gt;</code>')}}). Im Gegensatz zu einer einfachen Zelle wird durch die rowheader-Rolle eine Beziehung zwischen ihr und allen Zellen in der entsprechenden Zeile hergestellt.

#### Zustände und Eigenschaften

- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) Zustand

  - : Das `aria-expanded`-Attribut, das den Zustand der Zeile definiert, kann einen von drei Werten annehmen oder weggelassen werden:

    - `aria-expanded="true"`: Zeile ist derzeit erweitert.
    - `aria-expanded="false"`: Zeile ist derzeit reduziert.
    - `aria-expanded="undefined"` oder das Attribut fehlt: Die Zeile ist weder erweiterbar noch reduzierbar.

    Wenn das Element mit dem `aria-expanded`-Attribut die Erweiterung eines anderen Gruppierungscontainers kontrolliert, der nicht "im Besitz" des Elements ist, sollte der Autor den Container durch Verwendung des `aria-controls`-Attributs referenzieren.

- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) Zustand

  - : Nur relevant, wenn die Zeile in einem interaktiven Container wie einem Grid oder Treegrid ist, aber nicht relevant, wenn die Zeile in einer Tabelle ist. Das `aria-selected`-Attribut kann einen von drei Werten annehmen oder weggelassen werden:
    - `aria-selected="true"`: Zeile ist derzeit ausgewählt.
    - `aria-selected="false"`: Zeile ist derzeit nicht ausgewählt.
    - `aria-selected="undefined"` oder das Attribut fehlt: Die Zeile ist nicht auswählbar.

- [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) Attribut

  - : Das `aria-colindex`-Attribut ist nur erforderlich, wenn Spalten aus dem DOM ausgeblendet sind. Es wird allgemein auf Zeilen-Kinder platziert, anstatt auf die Zeile selbst. Wenn die angezeigten Spalten zusammenhängend sind, kann es auf der Zeile platziert werden.

    Das Attribut nimmt als Wert eine Zahl zwischen 1 und der Gesamtanzahl der Spalten innerhalb der Tabelle, des Grids oder Treegrids an. Wenn es auf der Zeile platziert wird, definiert das `aria-colindex` den Spaltenindex oder die Position eines Elements in Bezug auf die Gesamtanzahl der Spalten innerhalb einer Zeile. Zum Beispiel, in einer Tabelle mit 15 Spalten und die Spalten 4, 5 und 6 im DOM, könnte `aria-colindex="4"` auf jeder Zeile gesetzt werden.

    Wenn die Gruppe der Spalten, die im DOM vorhanden ist, **nicht** zusammenhängend ist oder wenn es Zellen gibt, die mehr als eine Zeile oder Spalte überspannen, setzen Sie das `aria-colindex` auf alle Kinder jeder Zeile anstelle auf die Zeile selbst.

    Wenn alle Spalten im DOM sind, ist dieses Attribut nicht notwendig.

- [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) Attribut

  - : Das `aria-rowindex`-Attribut ist nur erforderlich, wenn Zeilen aus dem DOM ausgeblendet sind, um anzugeben, welche Zeile in der Liste der gesamten Zeilen gelesen wird. Das Attribut, das mit einem eindeutigen Wert auf jeder Zeile platziert wird, nimmt als Wert eine Zahl zwischen 1 und der Gesamtanzahl der Zeilen innerhalb der Tabelle, des Grids oder Treegrids an, die die Position oder den Index jeder Zeile angibt. Zum Beispiel, wenn eine Tabelle 1.500 Zeilen hat, aber nur die Kopfzeile und die Zeilen 47 und 52 im DOM sind, würde `aria-rowindex="1"` auf der Kopfzeile gesetzt, und `aria-rowindex="47"` und `aria-rowindex="52"` würden auf der 47. bzw. 52. Zeile gesetzt.

    Wenn alle Zeilen im DOM vorhanden sind, ist dieses Attribut nicht notwendig.

### Tastaturinteraktionen

Keine.

### Erforderliche JavaScript-Funktionen

Keine. Für sortierbare Spalten siehe die [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) aria-Rolle.

> [!NOTE]
> Die erste Regel der ARIA-Nutzung ist, wenn Sie eine native Funktion mit der bereits eingebauten Semantik und dem Verhalten verwenden können, statt ein Element umzuproporieren und **eine** ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie das. Verwenden Sie das HTML-Element {{HTMLElement('table')}} anstelle der ARIA-Rolle der Tabelle wann immer möglich.

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
      <span role="columnheader" aria-sort="none">ARIA Role</span>
      <span role="columnheader" aria-sort="none">Semantic Element</span>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row" aria-rowindex="11">
      <span role="cell">header</span>
      <span role="cell">h1</span>
    </div>
    <div role="row" aria-rowindex="16">
      <span role="cell">header</span>
      <span role="cell">h6</span>
    </div>
    <div role="row" aria-rowindex="18">
      <span role="cell">rowgroup</span>
      <span role="cell">thead</span>
    </div>
    <div role="row" aria-rowindex="24">
      <span role="cell">term</span>
      <span role="cell">dt</span>
    </div>
  </div>
</div>
```

Das Obige ist eine nicht-semantische ARIA-Tabelle mit fünf von 81 Zeilen, die im DOM vorhanden sind: eine im Tabellenkopf und vier Zeilen im Tabellenkörper. Die Kopfzeile, allein in einer Header-Rowgroup, hat zwei Spaltenüberschriften. Die Spalten sind sortierbar, aber derzeit nicht sortiert, wie durch die `aria-sort`-Eigenschaft angezeigt wird. Der Tabellenkörper befindet sich in einer separaten Rowgroup, mit vier Zeilen, die derzeit im DOM sind. Da nicht alle Zeilen im DOM sind, haben wir das `aria-rowindex`-Attribut auf jeder Zeile eingefügt.

## Bewährte Methoden

Nur {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}}, etc. für die Datenstrukturtabelle verwenden. Sie können diese ARIA-Rollen hinzufügen, um die Barrierefreiheit zu gewährleisten, falls die nativen Semantiken der Tabelle entfernt werden, z.B. durch CSS. Ein relevanter Anwendungsfall für die ARIA-Tabellenrolle ist, wenn die nativen Semantiken einer Tabelle durch die CSS-Display-Eigenschaft überschrieben werden, z.B. durch display: grid. In diesem Fall können Sie die ARIA-Tabellenrollen verwenden, um die Semantiken wieder hinzuzufügen.

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
      <th role="columnheader" aria-sort="none">ARIA Role</th>
      <th role="columnheader" aria-sort="none">Semantic Element</th>
    </tr>
  </thead>
  <tbody role="rowgroup">
    <tr role="row" aria-rowindex="11">
      <td role="cell">header</td>
      <td role="cell">h1</td>
    </tr>
    <tr role="row" aria-rowindex="16">
      <td role="cell">header</td>
      <td role="cell">h6</td>
    </tr>
    <tr role="row" aria-rowindex="18">
      <td role="cell">rowgroup</td>
      <td role="cell">thead</td>
    </tr>
    <tr role="row" aria-rowindex="24">
      <td role="cell">term</td>
      <td role="cell">dt</td>
    </tr>
  </tbody>
</table>
```

Das Obige ist die semantische Weise, eine Tabelle zu schreiben. Die ARIA-Rollen sind nur notwendig, wenn die nativen Semantiken der Tabelle und somit der Tabellenzeilen durch das Setzen der [display-Eigenschaft auf flex oder grid](/de/docs/Web/CSS/display#accessibility) gelöscht werden.

### Zusatzvorteile

Keine

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das HTML {{HTMLElement('tr', '<code>&lt;tr&gt;</code> table row')}} Element
- {{HTMLElement('table')}}
- [Die `rowgroup`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
- [Die `table`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
- [Die `grid`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
- [Die `treegrid`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)
- [Die `cell`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)
- [Die `gridcell`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [Die `columnheader`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [Die `rowheader`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
