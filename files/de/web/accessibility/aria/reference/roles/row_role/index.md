---
title: 'ARIA: role="row"'
slug: Web/Accessibility/ARIA/Reference/Roles/row_role
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Ein Element mit `role="row"` ist eine Reihe von Zellen innerhalb einer tabellarischen Struktur. Eine Zeile enthält eine oder mehrere Zellen, Rasterzellen oder Spaltenüberschriften und möglicherweise eine Zeilenüberschrift innerhalb eines [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), [`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) und optional innerhalb eines [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role).

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

Das Element mit `role="row"` ist eine Zeile innerhalb eines [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), [`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) und optional innerhalb eines [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role), das ein oder mehrere [`cell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role), [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role), [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) oder [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role) Elemente in einer statischen tabellarischen Struktur enthält. Die Verwendung von nativen [HTML `<tr>`](/de/docs/Web/HTML/Reference/Elements/tr) Elementen, wann immer möglich, wird dringend empfohlen.

Um eine ARIA-Zeile zu erstellen, fügen Sie `role="row"` zum Containerelement hinzu. Diese Zeile sollte innerhalb eines Grids, einer Tabelle oder eines Treegrids verschachtelt sein. Eine Gruppe von Zeilen kann direkt innerhalb eines Grids, einer Tabelle oder eines Treegrids oder innerhalb einer Zeilengruppe in einem dieser Container verschachtelt sein. Jede Zeile enthält Kinderzellen. Diese Zellen können je nach Typ unterschiedliche Typen haben, abhängig davon, ob sie Spalten- oder Zeilenüberschriften oder Raster- oder reguläre Zellen sind.

Eine Zeile kann eine Anzahl von Attributen enthalten, die die Rolle der Zeile verdeutlichen, einschließlich [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex), [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level), [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) und [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected).

Wenn sich die Zeile innerhalb eines Treegrids befindet, können Zeilen das [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) Attribut einschließen, um den aktuellen Status anzuzeigen. Dies ist nicht der Fall in einer gewöhnlichen Tabelle oder einem Grid, in dem das `aria-expanded` Attribut nicht vorhanden ist.

Um ein interaktives Widget mit tabellarischer Struktur zu erstellen, verwenden Sie stattdessen das Grid-Muster. Wenn die Interaktion den Auswahlstatus einzelner Zellen ermöglicht, wenn von links nach rechts und von oben nach unten Navigation ermöglicht wird oder wenn die Benutzeroberfläche das Umordnen der Zellreihenfolge oder sonstiges Ändern der Reihenfolge einzelner Zellen wie durch Drag and Drop ermöglicht, verwenden Sie stattdessen [grid](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) oder [treegrid](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role).

> [!NOTE]
> Es wird dringend empfohlen, wann immer möglich, das native HTML-Tabellenelement ({{HTMLElement('table')}}) zusammen mit dem Tabellenzeilenelement ({{HTMLElement('tr')}}) zu verwenden.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

#### Kontextrollen

- [role="rowgroup"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
  - : Ein optionales kontextuelles Elternelement einer Zeile, das eine Beziehung zwischen nachgeordneten Zeilen herstellt. Es ist ein strukturequivalentes Element zu den thead, tfoot und tbody Elementen in einem HTML-Tabellenelement.
- [role="table"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
  - : Einer der drei möglichen Kontexte (zusammen mit grid und treegrid), in denen Sie eine Zeile finden werden. Es identifiziert die Zeile als Teil einer nicht-interaktiven Tabellenstruktur, die Daten enthält, die in Zeilen und Spalten angeordnet sind, ähnlich dem nativen {{HTMLElement('table')}} HTML-Element.
- [role="grid"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
  - : Einer der drei möglichen Kontexte (zusammen mit table und treegrid), in denen Sie eine Zeile finden werden. Es identifiziert die Zeile als Teil einer nicht-interaktiven Tabellenstruktur, die Daten enthält, die in Zeilen und Spalten angeordnet sind, ähnlich dem nativen {{HTMLElement('table')}} HTML-Element.
- [role="treegrid"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)
  - : Ähnlich wie ein Grid, jedoch mit Zeilen, die erweitert und reduziert werden können, genauso wie bei einem Baum.

#### Nachgeordnete Rollen

- [role="cell"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)
  - : Eine Zelle in einer Zeile innerhalb eines tabellarischen Containers.
- [role="gridcell"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
  - : Eine Zelle in einer Zeile innerhalb eines Grids oder Treegrids.
- [role="columnheader"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
  - : Eine Kopfzelle, die das strukturelle Äquivalent des HTML {{HTMLElement('th')}} Elements mit einem Spaltenbereich ({{HTMLElement('tr', '<code>&lt;tr scope="col"&gt;</code>')}}) ist. Im Gegensatz zu einer normalen Zelle stellt die Rolle columnheader eine Beziehung zwischen ihr und allen Zellen in der entsprechenden Spalte her.
- [role="rowheader"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
  - : Eine Kopfzelle, die das strukturelle Äquivalent des HTML {{HTMLElement('th')}} Elements mit einem Zeilenbereich ({{HTMLElement('tr', '<code>&lt;tr scope="row"&gt;</code>')}}) ist. Im Gegensatz zu einer normalen Zelle stellt die Rolle rowheader eine Beziehung zwischen ihr und allen Zellen in der entsprechenden Zeile her.

#### Zustände und Eigenschaften

- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) Zustand

  - : Das `aria-expanded` Attribut, das den Zustand der Zeile definiert, kann einen von drei Werten annehmen oder weggelassen werden:

    - `aria-expanded="true"`: Die Zeile ist derzeit erweitert.
    - `aria-expanded="false"`: Die Zeile ist derzeit reduziert.
    - `aria-expanded="undefined"` oder das Attribut fehlt: Die Zeile ist weder erweiterbar noch reduzierbar.

    Wenn das Element mit dem `aria-expanded` Attribut die Erweiterung eines anderen Gruppierungselements steuert, das nicht vom Element selbst "besessen" wird, sollte der Autor **muss** den Container durch Verwendung des `aria-controls` Attributs referenzieren.

- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) Zustand

  - : Nur relevant, wenn die Zeile in einem interaktiven Container, wie einem Grid oder Treegrid, aber nicht relevant, wenn die Zeile in einer Tabelle ist. Das `aria-selected` Attribut kann einen von drei Werten annehmen oder weggelassen werden:

    - `aria-selected="true"`: Die Zeile ist derzeit ausgewählt.
    - `aria-selected="false"`: Die Zeile ist derzeit nicht ausgewählt.
    - `aria-selected="undefined"` oder das Attribut fehlt: Die Zeile ist nicht auswählbar.

- [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) Attribut

  - : Das `aria-colindex` Attribut wird nur benötigt, wenn Spalten im DOM ausgeblendet sind. Es wird im Allgemeinen auf Kinder der Zeile und nicht auf die Zeile selbst gesetzt. Wenn die angezeigten Spalten zusammenhängend sind, kann es auf der Zeile platziert werden.

    Das Attribut nimmt als Wert eine Ganzzahl zwischen 1 und der Gesamtanzahl der Spalten innerhalb der Tabelle, des Grids oder des Treegrids an. Wenn es auf der Zeile platziert ist, definiert das `aria-colindex` den Spaltenindex oder die Position eines Elements in Bezug auf die Gesamtanzahl der Spalten innerhalb einer Zeile. Zum Beispiel, in einer Tabelle mit 15 Spalten, und die Spalten 4, 5 und 6 sind im DOM, könnte `aria-colindex="4"` auf jede Zeile gesetzt werden.

    Wenn die Gruppe von Spalten, die im DOM vorhanden ist, **nicht** zusammenhängend ist oder wenn es Zellen gibt, die sich über mehr als eine Zeile oder Spalte erstrecken, setzen Sie das `aria-colindex` Attribut bei allen Kindern jeder Zeile anstelle der Zeile selbst.

    Wenn alle Spalten im DOM sind, ist dieses Attribut nicht notwendig.

- [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) Attribut

  - : Das `aria-rowindex` Attribut wird nur benötigt, wenn Zeilen im DOM ausgeblendet sind, um anzugeben, welche Zeile in der Liste der gesamten Zeilen gelesen wird. Das Attribut, platziert mit einem eindeutigen Wert auf jeder Zeile, nimmt als Wert eine Ganzzahl zwischen 1 und der Gesamtanzahl der Zeilen innerhalb der Tabelle, des Grids oder des Treegrids an, wobei die Position oder der Index jeder Zeile angezeigt wird. Zum Beispiel, wenn eine Tabelle 1.500 Zeilen hat, aber nur die Kopfzeile und die Zeilen 47 und 52 im DOM sind, würde `aria-rowindex="1"` auf der Kopfzeile gesetzt, und `aria-rowindex="47"` und `aria-rowindex="52"` würden auf der 47. und 52. Zeile gesetzt.

    Wenn alle Zeilen im DOM sind, ist dieses Attribut nicht notwendig.

### Tastaturinteraktionen

Keine.

### Erforderliche JavaScript-Funktionen

Keine. Für sortierbare Spalten siehe die [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) ARIA-Rolle.

> [!NOTE]
> Die erste Regel der ARIA-Verwendung ist, wenn Sie eine native Funktion mit den bereits enthaltenen Semantiken und Verhaltensweisen verwenden können, anstatt ein Element umzufunktionieren und **zusätzlich** eine ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie das. Verwenden Sie das HTML {{HTMLElement('table')}} Element anstelle der ARIA-Rolle von 'table', wann immer möglich.

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

Das obige ist eine nicht-semantische ARIA-Tabelle mit fünf von 81 Zeilen, die im DOM vorhanden sind: Eine innerhalb eines Tabellenkopfes und vier Zeilen im Tabellenkörper. Die Kopfzeile allein in einer Kopfzeilengruppe hat zwei Spaltenüberschriften. Die Spalten sind sortierbar, aber derzeit nicht sortiert, wie durch die `aria-sort` Eigenschaft angezeigt. Der Tabellenkörper befindet sich in einer separaten Zeilengruppe mit vier Zeilen, die derzeit im DOM sind. Da nicht alle Zeilen im DOM sind, haben wir die `aria-rowindex` Eigenschaft auf jeder Zeile eingefügt.

## Beste Praktiken

Verwenden Sie nur {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}}, usw., für die Datenstrukturtabelle. Sie können diese ARIA-Rollen hinzufügen, um die Zugänglichkeit sicherzustellen, falls die nativen Semantiken der Tabelle entfernt werden, etwa durch CSS. Ein relevanter Anwendungsfall für die Verwendung der ARIA-Tabellenrolle ist, wenn die nativen Semantiken einer Tabelle durch die Anzeigeeigenschaft von CSS überschrieben werden, wie z.B. durch display: grid. In diesem Fall können Sie die ARIA-Tabellenrollen verwenden, um die Semantiken wieder hinzuzufügen.

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

Oben ist die semantische Art, eine Tabelle zu schreiben. Die ARIA-Rollen sind nur dann erforderlich, wenn die nativen Semantiken der Tabelle und damit die Tabellenzeilen aufgehoben wurden, etwa durch das Setzen der [display-Eigenschaft auf flex oder grid](/de/docs/Web/CSS/display#accessibility).

### Hinzugefügte Vorteile

Keine

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das HTML {{HTMLElement('tr', '<code>&lt;tr&gt;</code> Tabellenzeile')}} Element
- {{HTMLElement('table')}}
- [Die `rowgroup` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
- [Die `table` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
- [Die `grid` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
- [Die `treegrid` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)
- [Die `cell` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)
- [Die `gridcell` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [Die `columnheader` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [Die `rowheader` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
