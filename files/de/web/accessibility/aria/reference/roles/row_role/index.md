---
title: "ARIA: row Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/row_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Ein Element mit `role="row"` ist eine Zeile von Zellen innerhalb einer tabellarischen Struktur. Eine Zeile enthält eine oder mehrere Zellen, Rasterzellen oder Spaltenüberschriften und möglicherweise eine Zeilenüberschrift, innerhalb eines [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), einer [`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) oder einer [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) und optional innerhalb einer [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role).

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

Das Element mit `role="row"` ist eine Zeile innerhalb eines [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), einer [`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) oder einer [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) und optional innerhalb einer [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role), die ein oder mehrere [`cell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role), [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role), [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) oder [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role) Elemente innerhalb einer statischen tabellarischen Struktur enthält. Die Verwendung nativer [HTML `<tr>`](/de/docs/Web/HTML/Element/tr) Elemente wird, wann immer möglich, ausdrücklich empfohlen.

Um eine ARIA-Zeile zu erstellen, fügen Sie `role="row"` zum Containerelement hinzu. Diese Zeile sollte innerhalb eines Grids, einer Tabelle oder einer Treegrid verschachtelt werden. Eine Gruppe von Zeilen kann direkt innerhalb eines Grids, einer Tabelle oder einer Treegrid verschachtelt werden, oder innerhalb einer Rowgroup in einem dieser Container. Jede Zeile enthält Kinderzellen. Diese Zellen können unterschiedliche Typen haben, abhängig davon, ob sie Spalten- oder Zeilenüberschriften oder Raster- oder normale Zellen sind.

Eine Zeile kann eine Reihe von Attributen enthalten, die die Rolle der Zeile klären, darunter [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex), [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level), [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) und [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected).

Wenn die Zeile innerhalb einer Treegrid ist, können Zeilen das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) enthalten, wobei das Attribut verwendet wird, um den aktuellen Status anzuzeigen. Dies ist nicht der Fall bei einer gewöhnlichen Tabelle oder einem Raster, in denen das Attribut `aria-expanded` nicht vorhanden ist.

Um ein interaktives Widget zu erstellen, das eine tabellarische Struktur hat, verwenden Sie stattdessen das Rastermuster. Wenn die Interaktion den Auswahlstatus einzelner Zellen vorsieht, wenn von links nach rechts und von oben nach unten Navigationsmöglichkeiten bestehen, oder wenn die Benutzeroberfläche das Umordnen der Zellenreihenfolge oder auf andere Weise das Ändern der einzelnen Zellenreihenfolge wie durch Drag-and-Drop ermöglicht, verwenden Sie stattdessen [grid](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) oder [treegrid](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role).

> [!NOTE]
> Die Verwendung des nativen HTML-Tabellenelements ({{HTMLElement('table')}}) zusammen mit dem Tabellenelement ({{HTMLElement('tr')}}) wird wann immer möglich ausdrücklich empfohlen.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

#### Kontextrollen

- [role="rowgroup"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
  - : Ein optionales kontextuelles Zeilenelternelement, das eine Beziehung zwischen nachgeordneten Zeilen herstellt. Es ist ein strukturelles Äquivalent zu den <thead>, <tfoot> und <tbody> Elementen in einem HTML-Tabellenelement.
- [role="table"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
  - : Einer der drei möglichen Kontexte (zusammen mit Grid und Treegrid), in denen Sie eine Zeile finden, identifiziert die Zeile als Teil einer nicht-interaktiven Tabellenstruktur, die Daten in Zeilen und Spalten anordnet, ähnlich dem nativen {{HTMLElement('table')}} HTML-Element.
- [role="grid"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
  - : Einer der drei möglichen Kontexte (zusammen mit Tabelle und Treegrid), in denen Sie eine Zeile finden, identifiziert die Zeile als Teil einer nicht-interaktiven Tabellenstruktur, die Daten in Zeilen und Spalten anordnet, ähnlich dem nativen {{HTMLElement('table')}} HTML-Element.
- [role="treegrid"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)
  - : Ähnlich einem Raster, jedoch mit Zeilen, die wie bei einem Baum erweitert und eingeklappt werden können.

#### Nachgeordnete Rollen

- [role="cell"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)
  - : Eine Zelle in einer Zeile innerhalb eines tabellarischen Containers.
- [role="gridcell"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
  - : Eine Zelle in einer Zeile innerhalb eines Grids oder Treegrids.
- [role="columnheader"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
  - : Eine Kopfzelle, die das strukturelle Äquivalent des HTML-Elements {{HTMLElement('th')}} mit einer Spaltenreichweite ist ({{HTMLElement('tr', '<code>&lt;tr scope="col"&gt;</code>')}}). Im Gegensatz zu einer einfachen Zelle stellt die Columnheader-Rolle eine Beziehung zwischen ihr und allen Zellen in der entsprechenden Spalte her.
- [role="rowheader"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
  - : Eine Kopfzelle, die das strukturelle Äquivalent des HTML-Elements {{HTMLElement('th')}} mit einer Zeilenreichweite ist ({{HTMLElement('tr', '<code>&lt;tr scope="row"&gt;</code>')}}). Im Gegensatz zu einer einfachen Zelle stellt die Rowheader-Rolle eine Beziehung zwischen ihr und allen Zellen in der entsprechenden Zeile her.

#### Zustände und Eigenschaften

- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) Zustand

  - : Das `aria-expanded` Attribut, das den Zustand der Zeile definiert, kann einen von drei Werten annehmen oder ausgelassen werden:

    - `aria-expanded="true"`: Zeile ist derzeit erweitert.
    - `aria-expanded="false"`: Zeile ist derzeit eingeklappt.
    - `aria-expanded="undefined"` oder das Attribut fehlt: Die Zeile ist weder erweiterbar noch einklappbar.

    Wenn das Element mit dem `aria-expanded` Attribut die Erweiterung eines anderen Gruppencontainers kontrolliert, der nicht "im Besitz" des Elements ist, **sollte** der Autor den Container mit dem `aria-controls` Attribut referenzieren.

- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) Zustand

  - : Nur relevant, wenn sich die Zeile in einem interaktiven Container befindet, wie einem Grid oder Treegrid, jedoch nicht relevant, wenn die Zeile sich in einer Tabelle befindet. Das `aria-selected` Attribut kann einen von drei Werten annehmen oder ausgelassen werden:

    - `aria-selected="true"`: Zeile ist derzeit ausgewählt
    - `aria-selected="false"`: Zeile ist derzeit nicht ausgewählt.
    - `aria-selected="undefined"` oder das Attribut fehlt: Die Zeile ist nicht auswählbar.

- [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) Attribut

  - : Das `aria-colindex` Attribut ist nur erforderlich, wenn Spalten im DOM ausgeblendet sind. Es wird im Allgemeinen auf die Kinder einer Zeile gesetzt, anstatt auf die Zeile selbst. Wenn die angezeigten Spalten zusammenhängend sind, kann es auf die Zeile gesetzt werden.

    Das Attribut nimmt als Wert eine ganze Zahl zwischen 1 und der Gesamtzahl der Spalten innerhalb der Tabelle, des Grids oder der Treegrid. Wenn es auf der Zeile platziert wird, definiert das `aria-colindex` den Spaltenindex oder die Position eines Elements in Bezug auf die Gesamtanzahl der Spalten innerhalb einer Zeile. Beispiel: In einer Tabelle mit 15 Spalten und Spalten 4, 5 und 6 befinden sich im DOM, könnte `aria-colindex="4"` auf jede Zeile gesetzt werden.

    Wenn die Reihe der Spalten, die im DOM vorhanden sind, **nicht** zusammenhängend ist oder wenn es Zellen gibt, die mehr als eine Reihe oder Spalte überspannen, setzen Sie das `aria-colindex` auf alle Kinder jeder Zeile, anstatt auf die Zeile selbst.

    Wenn alle Spalten im DOM sind, ist dieses Attribut nicht erforderlich.

- [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) Attribut

  - : Das `aria-rowindex` Attribut ist nur erforderlich, wenn Zeilen im DOM ausgeblendet sind, um anzuzeigen, welche Zeile in der Liste der Gesamtzeilen gelesen wird. Das Attribut, das einen einzigartigen Wert auf jeder Zeile hat, nimmt als Wert eine ganze Zahl zwischen 1 und der Gesamtanzahl der Zeilen innerhalb der Tabelle, des Grids oder der Treegrid, die die Position oder den Index jeder Zeile angibt. Beispiel: Wenn eine Tabelle 1.500 Zeilen hat, aber nur die Überschrift und die Zeilen 47 und 52 im DOM sind, würde auf der Überschriftzeile `aria-rowindex="1"` gesetzt werden, und `aria-rowindex="47"` und `aria-rowindex="52"` würde auf der 47. und 52. Zeile gesetzt werden.

    Wenn alle Zeilen im DOM vorhanden sind, ist dieses Attribut nicht erforderlich.

### Tastaturinteraktionen

Keine

### Erforderliche JavaScript-Funktionen

Keine. Für sortierbare Spalten siehe die [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) aria Rolle.

> [!NOTE]
> Die erste Regel der ARIA-Nutzung besagt: Wenn Sie eine native Funktion mit den bereits eingebauten Semantik- und Verhaltensmerkmalen verwenden können, anstatt ein Element umzugestalten und **eine** ARIA-Rolle, -Zustand oder -Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie dies. Verwenden Sie das HTML {{HTMLElement('table')}} Element anstelle der ARIA-Rolle einer Tabelle, wann immer möglich.

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

Das obige ist eine nicht-semantische ARIA-Tabelle mit fünf von 81 Zeilen, die im DOM vorhanden sind: Eine innerhalb einer Tabellenüberschrift und vier Zeilen im Tabellenkörper. Die Kopfzeile, allein in einer Kopfzeilengruppe, hat zwei Spaltenüberschriften. Die Spalten sind sortierbar, aber derzeit nicht sortiert, wie durch die `aria-sort` Eigenschaft angegeben. Der Tabellenkörper befindet sich in einer separaten Rowgroup mit vier derzeit im DOM befindlichen Zeilen. Da nicht alle Zeilen im DOM sind, haben wir die `aria-rowindex` Eigenschaft auf jeder Zeile hinzugefügt.

## Beste Praktiken

Verwenden Sie nur {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}} usw. für die Struktur von Datentabellen. Sie können diese ARIA-Rollen hinzufügen, um die Zugänglichkeit zu gewährleisten, falls die nativen Semantiken der Tabelle entfernt werden, z. B. durch CSS. Ein relevanter Anwendungsfall für die ARIA-Tabellenrolle ist, wenn die nativen Semantiken einer Tabelle durch die CSS-Display-Eigenschaft überschrieben werden, z. B. durch display: grid. In diesem Fall können Sie die ARIA-Tabellenrollen verwenden, um die Semantiken wieder hinzuzufügen.

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

Oben ist die semantische Art, eine Tabelle zu schreiben. Die ARIA-Rollen sind nur erforderlich, wenn die nativen Semantiken der Tabelle, und damit die Tabellenzeilen, zerstört werden, z. B. durch das Setzen der [display property auf flex oder grid](/de/docs/Web/CSS/display#accessibility).

### Zusätzliche Vorteile

Keine

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das HTML {{HTMLElement('tr', '<code>&lt;tr&gt;</code> table row')}} Element
- {{HTMLElement('table')}}
- [Die `rowgroup` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
- [Die `table` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
- [Die `grid` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
- [Die `treegrid` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)
- [Die `cell` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)
- [Die `gridcell` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [Die `columnheader` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [Die `rowheader` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
