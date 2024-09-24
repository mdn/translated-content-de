---
title: "ARIA: row Rolle"
slug: Web/Accessibility/ARIA/Roles/row_role
l10n:
  sourceCommit: 46e392021bad64eead1cea58be106fa364a14d8b
---

{{AccessibilitySidebar}}

Ein Element mit `role="row"` ist eine Zeile von Zellen innerhalb einer tabellarischen Struktur. Eine Zeile enthält eine oder mehrere Zellen, Gitterzellen oder Spaltenköpfe und möglicherweise einen Zeilenkopf innerhalb eines [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role), [`table`](/de/docs/Web/Accessibility/ARIA/Roles/table_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role) und optional innerhalb einer [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role).

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

Das Element `role="row"` ist eine Zeile innerhalb eines [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role), [`table`](/de/docs/Web/Accessibility/ARIA/Roles/table_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role) und optional innerhalb einer [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role), das als Container für eine oder mehrere [`cells`](/de/docs/Web/Accessibility/ARIA/Roles/cell_role), [`gridcells`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role), [`columnheaders`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role) oder [`rowheaders`](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role) innerhalb einer statischen tabellarischen Struktur dient. Die Verwendung von nativen [HTML `<tr>`](/de/docs/Web/HTML/Element/tr) Elementen wann immer möglich wird stark empfohlen.

Um eine ARIA-Zeile zu erstellen, fügen Sie `role="row"` zum Container-Element hinzu. Diese Zeile sollte innerhalb eines Grids, einer Tabelle oder eines Treegrids eingebettet sein. Eine Gruppe von Zeilen kann direkt innerhalb eines Grids, einer Tabelle oder eines Treegrids oder innerhalb einer Rowgroup in einem dieser Container eingebettet werden. Jede Zeile enthält Kindzellen. Diese Zellen können von unterschiedlichem Typ sein, je nachdem, ob sie Spalten- oder Zeilenköpfe oder Gitter- oder normale Zellen sind.

Eine Zeile kann eine Reihe von Attributen enthalten, die die Rolle der Zeile klären, einschließlich [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex), [`aria-level`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-level), [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) und [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected).

Wenn sich die Zeile innerhalb eines Treegrids befindet, können die Zeilen das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) enthalten, um den aktuellen Status anzuzeigen. Dies ist nicht der Fall bei einer gewöhnlichen Tabelle oder einem Grid, in denen das `aria-expanded` Attribut nicht vorhanden ist.

Um ein interaktives Widget mit einer tabellarischen Struktur zu erstellen, verwenden Sie stattdessen das Gittermuster. Wenn die Interaktion den Auswahlstatus einzelner Zellen bereitstellt, wenn eine von links nach rechts und von oben nach unten Navigation ermöglicht wird oder wenn die Benutzeroberfläche erlaubt, die Zellreihenfolge umzuordnen oder auf andere Weise die Reihenfolge einzelner Zellen zu ändern, wie zum Beispiel durch Drag and Drop, verwenden Sie stattdessen [grid](/de/docs/Web/Accessibility/ARIA/Roles/grid_role) oder [treegrid](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role).

> [!NOTE]
> Die Verwendung des nativen HTML-Tabellenelements ({{HTMLElement('table')}}) zusammen mit dem Tabellenzeilenelement ({{HTMLElement('tr')}}) wann immer möglich wird stark empfohlen.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

#### Kontextrollen

- [role="rowgroup"](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role)
  - : Ein optionaler kontextueller Zeilenelternteil, es stellt eine Beziehung zwischen untergeordneten Zeilen her. Es ist ein strukturelles Äquivalent zu den thead, tfoot und tbody Elementen in einem HTML-Tabellenelement.
- [role="table"](/de/docs/Web/Accessibility/ARIA/Roles/table_role)
  - : Einer der drei möglichen Kontexte (zusammen mit Grid und Treegrid), in dem Sie eine Zeile finden, es identifiziert die Zeile als Teil einer nicht-interaktiven Tabellenstruktur, die Daten in Zeilen und Spalten anordnet, ähnlich dem nativen {{HTMLElement('table')}} HTML-Element.
- [role="grid"](/de/docs/Web/Accessibility/ARIA/Roles/grid_role)
  - : Einer der drei möglichen Kontexte (zusammen mit Tabelle und Treegrid), in dem Sie eine Zeile finden, es identifiziert die Zeile als Teil einer nicht-interaktiven Tabellenstruktur, die Daten in Zeilen und Spalten anordnet, ähnlich dem nativen {{HTMLElement('table')}} HTML-Element.
- [role="treegrid"](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role)
  - : Ähnlich einem Grid, aber mit Zeilen, die im gleichen Maße wie bei einem Baum erweitert und reduziert werden können.

#### Nachfolgende Rollen

- [role="cell"](/de/docs/Web/Accessibility/ARIA/Roles/cell_role)
  - : Eine Zelle in einer Zeile innerhalb eines tabellarischen Containers.
- [role="gridcell"](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
  - : Eine Zelle in einer Zeile innerhalb eines Grids oder Treegrids.
- [role="columnheader"](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
  - : Eine Kopfzelle, die das strukturelle Äquivalent des HTML-{{HTMLElement('th')}}-Elements mit einem Spaltenbereich ist ({{HTMLElement('tr', '<code>&lt;tr scope="col"&gt;</code>')}}). Im Gegensatz zu einer normalen Zelle stellt die Rolle columnheader eine Beziehung zwischen ihr und allen Zellen in der entsprechenden Spalte her.
- [role="rowheader"](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role)
  - : Eine Kopfzelle, die das strukturelle Äquivalent des HTML-{{HTMLElement('th')}}-Elements mit einem Zeilenbereich ist ({{HTMLElement('tr', '<code>&lt;tr scope="row"&gt;</code>')}}). Im Gegensatz zu einer normalen Zelle stellt die Rolle rowheader eine Beziehung zwischen ihr und allen Zellen in der entsprechenden Zeile her.

#### Zustände und Eigenschaften

- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) Zustand

  - : Das Attribut `aria-expanded`, das den Zustand der Zeile definiert, kann einen von drei Werten haben oder weggelassen werden:

    - `aria-expanded="true"`: Zeile ist derzeit erweitert.
    - `aria-expanded="false"`: Zeile ist derzeit reduziert.
    - `aria-expanded="undefined"` oder das Attribut fehlt: Die Zeile ist weder erweiterbar noch reduzierbar.

    Wenn das Element mit dem Attribut `aria-expanded` die Erweiterung eines anderen Gruppierungscontainers steuert, der nicht "im Besitz" des Elements ist, sollte der Autor den Container durch die Verwendung des `aria-controls` Attributs referenzieren.

- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) Zustand

  - : Nur relevant, wenn sich die Zeile in einem interaktiven Container wie einem Grid oder Treegrid befindet, aber nicht relevant, wenn sich die Zeile in einer Tabelle befindet. Das Attribut `aria-selected` kann einen von drei Werten haben oder weggelassen werden:

    - `aria-selected="true"`: Zeile ist derzeit ausgewählt.
    - `aria-selected="false"`: Zeile ist derzeit nicht ausgewählt.
    - `aria-selected="undefined"` oder das Attribut fehlt: Die Zeile ist nicht auswählbar.

- [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) Attribut

  - : Das Attribut `aria-colindex` ist nur erforderlich, wenn Spalten aus dem DOM ausgeblendet werden. Es wird im Allgemeinen auf Kindzeilen anstatt auf die Zeile selbst gesetzt. Wenn die angezeigten Spalten zusammenhängend sind, kann es auf die Zeile gesetzt werden.

    Das Attribut nimmt als Wert eine Ganzzahl zwischen 1 und der Gesamtanzahl der Spalten innerhalb der Tabelle, des Grids oder des Treegrids an. Wenn es auf die Zeile gesetzt ist, definiert `aria-colindex` den Spaltenindex oder die Position eines Elements in Bezug auf die Gesamtanzahl der Spalten innerhalb einer Zeile. Zum Beispiel kann in einer Tabelle mit 15 Spalten, in der sich die Spalten 4, 5 und 6 im DOM befinden, `aria-colindex="4"` für jede Zeile festgelegt werden.

    Wenn die im DOM vorhandene Spaltenmenge **nicht** zusammenhängend ist oder wenn es Zellen gibt, die mehr als eine Zeile oder Spalte überspannen, setzen Sie `aria-colindex` auf alle Kinder jeder Zeile anstatt auf die Zeile selbst.

    Wenn alle Spalten im DOM vorhanden sind, ist dieses Attribut nicht erforderlich.

- [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) Attribut

  - : Das Attribut `aria-rowindex` ist nur erforderlich, wenn Zeilen aus dem DOM ausgeblendet werden, um anzuzeigen, welche Zeile in der Liste der Gesamtzeilen gelesen wird. Das Attribut, das mit einem eindeutigen Wert auf jede Zeile gesetzt wird, nimmt als Wert eine Ganzzahl zwischen 1 und der Gesamtanzahl der Zeilen innerhalb der Tabelle, des Grids oder des Treegrids an, die die Position oder den Index jeder Zeile anzeigen. Zum Beispiel, wenn eine Tabelle 1.500 Zeilen hat, aber nur der Kopf und die Zeilen 47 und 52 im DOM sind, würde `aria-rowindex="1"` auf die Kopfzeile gesetzt werden und `aria-rowindex="47"` und `aria-rowindex="52"` auf die 47. und 52. Zeile bzw.

    Wenn alle Zeilen im DOM vorhanden sind, ist dieses Attribut nicht erforderlich.

### Tastaturinteraktionen

Keine

### Erforderliche JavaScript-Funktionen

Keine. Für sortierbare Spalten siehe die [`columnheader`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role) Aria-Rolle.

> [!NOTE]
> Die erste Regel der ARIA-Verwendung lautet, wenn Sie eine native Funktion mit den benötigten Semantiken und Verhaltensweisen haben, anstatt ein Element umzufunktionieren und **eine** ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie es. Verwenden Sie das HTML-Element {{HTMLElement('table')}} wann immer möglich anstelle der ARIA-Rolle "table".

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

Das obige ist eine nicht-semantische ARIA-Tabelle mit fünf von 81 Zeilen im DOM: Eine innerhalb eines Tabellenkopfes und vier Zeilen innerhalb des Tabellenkörpers. Die Kopfzeile, allein in einer Kopfzeilengruppe, hat zwei Spaltenüberschriften. Die Spalten sind sortierbar, aber derzeit nicht sortiert, wie durch die `aria-sort` Eigenschaft angezeigt. Der Tabellenkörper befindet sich in einer separaten Zeilengruppe, mit vier Zeilen derzeit im DOM. Da nicht alle Zeilen im DOM sind, haben wir die Eigenschaft `aria-rowindex` auf jede Zeile angewendet.

## Beste Praktiken

Verwenden Sie nur {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}}, usw., für die Datentabellenstruktur. Sie können diese ARIA-Rollen hinzufügen, um die Zugänglichkeit zu gewährleisten, falls die nativen Semantiken der Tabelle entfernt werden, z.B. durch CSS. Ein relevanter Anwendungsfall für die ARIA-Tabellenrolle ist, wenn die nativen Semantiken einer Tabelle durch die display-Eigenschaft von CSS überschrieben werden, wie z.B. durch display: grid. In diesem Fall können Sie die ARIA-Tabellenrollen nutzen, um die Semantiken wieder hinzuzufügen.

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

Oben ist die semantische Weise, eine Tabelle zu schreiben. Die ARIA-Rollen sind nur erforderlich, wenn die nativen Semantiken der Tabelle und damit der Tabellenzeilen entfernt werden, wie z.B. durch das Setzen der [display-Eigenschaft auf flex oder grid](/de/docs/Web/CSS/display#accessibility).

### Zusätzliche Vorteile

keine

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das HTML {{HTMLElement('tr', '<code>&lt;tr&gt;</code> table row')}} Element
- {{HTMLElement('table')}}
- [Die `rowgroup` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role)
- [Die `table` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/table_role)
- [Die `grid` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/grid_role)
- [Die `treegrid` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role)
- [Die `cell` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/cell_role)
- [Die `gridcell` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
- [Die `columnheader` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- [Die `rowheader` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role)
