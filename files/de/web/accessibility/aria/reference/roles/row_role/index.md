---
title: "ARIA: row-Rolle"
short-title: row
slug: Web/Accessibility/ARIA/Reference/Roles/row_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
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

Das Element mit `role="row"` ist eine Zeile innerhalb eines [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), [`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) und optional innerhalb eines [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role), das ein oder mehrere [Zellen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role), [Rasterzellen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role), [Spaltenüberschriften](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) oder [Zeilenüberschriften](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role) innerhalb einer statischen tabellarischen Struktur enthält. Die Verwendung von nativen [HTML `<tr>`](/de/docs/Web/HTML/Reference/Elements/tr) Elementen wird wann immer möglich dringend empfohlen.

Um eine ARIA-Zeile zu erstellen, fügen Sie `role="row"` zum Container-Element hinzu. Diese Zeile sollte innerhalb eines Grids, einer Tabelle oder eines Treegrids verschachtelt sein. Eine Gruppe von Zeilen kann direkt innerhalb eines Grids, einer Tabelle oder eines Treegrids oder innerhalb einer Rowgroup in einem dieser Container verschachtelt werden. Jede Zeile enthält untergeordnete Zellen. Diese Zellen können je nach ihrer Funktion als Spalten- oder Zeilenüberschriften, oder als Rasterzellen oder reguläre Zellen, von unterschiedlichem Typ sein.

Eine Zeile kann eine Reihe von Attributen enthalten, die die Rolle der Zeile klären, einschließlich [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex), [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level), [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) und [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected).

Wenn sich die Zeile innerhalb eines Treegrids befindet, können Zeilen das [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Attribut enthalten, wobei dieses Attribut den aktuellen Status anzeigt. Dies ist im Falle einer gewöhnlichen Tabelle oder eines Grids nicht der Fall, in denen das `aria-expanded`-Attribut nicht vorhanden ist.

Um ein interaktives Widget mit einer tabellarischen Struktur zu erstellen, verwenden Sie stattdessen das Rastermuster. Wenn die Interaktion den Auswahlstatus einzelner Zellen ermöglicht, wenn die Navigation von links nach rechts und von oben nach unten ermöglicht wird, oder wenn die Benutzeroberfläche das Neuanordnen der Zellreihenfolge oder eine anderweitige Änderung der individuellen Zellreihenfolge, wie etwa durch Drag & Drop, ermöglicht, verwenden Sie stattdessen [grid](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) oder [treegrid](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role).

> [!NOTE]
> Die Verwendung des nativen HTML-Tabellenelements ({{HTMLElement('table')}}) zusammen mit dem Tabellenzeilenelement ({{HTMLElement('tr')}}) wird wann immer möglich dringend empfohlen.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

#### Kontextrollen

- [role="rowgroup"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
  - : Ein optionales kontextuelles Zeilen-Element, das eine Beziehung zwischen untergeordneten Zeilen herstellt. Es ist das strukturelle Äquivalent zu den thead-, tfoot- und tbody-Elementen in einem HTML-Tabellenelement.
- [role="table"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
  - : Einer der drei möglichen Kontexte (zusammen mit grid und treegrid), in denen eine Zeile gefunden wird. Es identifiziert die Zeile als Teil einer nicht interaktiven Tabellenstruktur, die Daten in Zeilen und Spalten anordnet, ähnlich dem nativen {{HTMLElement('table')}} HTML-Element.
- [role="grid"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
  - : Einer der drei möglichen Kontexte (zusammen mit table und treegrid), in denen eine Zeile gefunden wird. Es identifiziert die Zeile als Teil einer nicht interaktiven Tabellenstruktur, die Daten in Zeilen und Spalten anordnet, ähnlich dem nativen {{HTMLElement('table')}} HTML-Element.
- [role="treegrid"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)
  - : Ähnlich einem Grid, aber mit Zeilen, die auf die gleiche Weise wie ein Baum erweitert und reduziert werden können.

#### Nachfolgerollen

- [role="cell"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)
  - : Eine Zelle in einer Zeile innerhalb eines tabellarischen Containers.
- [role="gridcell"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
  - : Eine Zelle in einer Zeile innerhalb eines Grids oder Treegrids.
- [role="columnheader"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
  - : Eine Kopfzelle, die das strukturelle Äquivalent des HTML-{{HTMLElement('th')}}-Elements mit einem Spaltenbereich ({{HTMLElement('tr', '<code>&lt;tr scope="col"&gt;</code>')}}) darstellt. Im Gegensatz zu einer einfachen Zelle stellt die Rollenbezeichnung columnheader eine Beziehung zwischen der Kopfzelle und allen Zellen in der entsprechenden Spalte her.
- [role="rowheader"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
  - : Eine Kopfzelle, die das strukturelle Äquivalent des HTML-{{HTMLElement('th')}}-Elements mit einem Zeilenbereich ({{HTMLElement('tr', '<code>&lt;tr scope="row"&gt;</code>')}}) darstellt. Im Gegensatz zu einer einfachen Zelle stellt die Rollenbezeichnung rowheader eine Beziehung zwischen der Kopfzelle und allen Zellen in der entsprechenden Zeile her.

#### Zustände und Eigenschaften

- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Zustand

  - : Das `aria-expanded`-Attribut, das den Zustand der Zeile definiert, kann einen von drei Werten annehmen oder weggelassen werden:

    - `aria-expanded="true"`: Die Zeile ist derzeit erweitert.
    - `aria-expanded="false"`: Die Zeile ist derzeit reduziert.
    - `aria-expanded="undefined"` oder das Attribut fehlt: Die Zeile ist weder erweiterbar noch reduzierbar.

    Wenn das Element mit dem `aria-expanded`-Attribut die Erweiterung eines anderen Gruppierungscontainers steuert, der dem Element nicht "gehört", sollte der Autor den Container mit dem Attribut `aria-controls` referenzieren.

- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)-Zustand

  - : Nur relevant, wenn sich die Zeile in einem interaktiven Container wie einem Grid oder Treegrid befindet, aber nicht relevant, wenn sich die Zeile in einer Tabelle befindet. Das `aria-selected`-Attribut kann einen von drei Werten annehmen oder weggelassen werden:

    - `aria-selected="true"`: Die Zeile ist derzeit ausgewählt.
    - `aria-selected="false"`: Die Zeile ist derzeit nicht ausgewählt.
    - `aria-selected="undefined"` oder das Attribut fehlt: Die Zeile ist nicht auswählbar.

- [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex)-Attribut

  - : Das `aria-colindex`-Attribut wird nur benötigt, wenn Spalten im DOM verborgen sind. Es wird im Allgemeinen auf Zeilenkinder gesetzt und nicht auf die Zeile selbst. Wenn die angezeigten Spalten zusammenhängend sind, kann es auf die Zeile gesetzt werden.

    Das Attribut nimmt als Wert eine ganze Zahl zwischen 1 und der Gesamtzahl der Spalten innerhalb der Tabelle, des Grids oder des Treegrids an. Wenn es auf die Zeile gesetzt wird, definiert das `aria-colindex` den Spaltenindex oder die Position eines Elements in Bezug auf die Gesamtanzahl der Spalten innerhalb einer Zeile. In einer Tabelle mit 15 Spalten, in der Spalten 4, 5 und 6 im DOM vorhanden sind, könnte `aria-colindex="4"` auf jede Zeile gesetzt werden.

    Wenn das Set der Spalten, das im DOM vorhanden ist, nicht zusammenhängend ist oder wenn Zellen mehr als eine Zeile oder Spalte überspannen, setzen Sie das `aria-colindex` auf alle Kinder jeder Zeile, anstelle es auf die Zeile selbst zu setzen.

    Wenn sich alle Spalten im DOM befinden, ist dieses Attribut nicht notwendig.

- [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex)-Attribut

  - : Das `aria-rowindex`-Attribut wird nur benötigt, wenn Zeilen im DOM verborgen sind, um anzuzeigen, welche Zeile in der Liste der Gesamtheit der Zeilen gelesen wird. Das Attribut, das mit einem eindeutigen Wert auf jede Zeile gesetzt wird, nimmt als Wert eine ganze Zahl zwischen 1 und der Gesamtzahl der Zeilen innerhalb der Tabelle, des Grids oder des Treegrids an, und zeigt die Position oder den Index jeder Zeile an. Zum Beispiel, wenn eine Tabelle 1.500 Zeilen hat, aber nur die Kopfzeile und die Zeilen 47 und 52 im DOM sind, würde `aria-rowindex="1"` auf die Kopfzeile gesetzt werden und `aria-rowindex="47"` und `aria-rowindex="52"` würden auf die 47. und 52. Zeile gesetzt werden.

    Wenn sich alle Zeilen im DOM befinden, ist dieses Attribut nicht notwendig.

### Tastaturinteraktionen

Keine.

### Erforderliche JavaScript-Funktionen

Keine. Für sortierbare Spalten siehe die [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)-ARIA-Rolle.

> [!NOTE]
> Die erste Regel der ARIA-Verwendung lautet: Wenn Sie ein natives Feature mit den notwendigen Semantiken und Verhaltensweisen bereits integriert verwenden können, anstatt ein Element umzufunktionieren und eine ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, tun Sie dies. Verwenden Sie das HTML-{{HTMLElement('table')}}-Element anstelle der ARIA-Rolle einer Tabelle wann immer möglich.

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

Oben ist eine nicht-semantische ARIA-Tabelle mit fünf von 81 Zeilen im DOM: Eine in einem Tabellenkopf und vier Zeilen im Tabellenkörper. Der Kopfzeile, alleine in einer Kopfzeilengruppe, hat zwei Spaltenköpfe. Die Spalten sind sortierbar, aber derzeit nicht sortiert, wie durch die `aria-sort`-Eigenschaft angezeigt wird. Der Tabellenkörper ist in einer separaten Zeilengruppe, mit vier Zeilen derzeit im DOM. Da nicht alle Zeilen im DOM sind, haben wir die `aria-rowindex`-Eigenschaft auf jede Zeile aufgenommen.

## Beste Praktiken

Verwenden Sie nur {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}}, usw., für die Struktur von Datentabellen. Sie können diese ARIA-Rollen hinzufügen, um die Zugänglichkeit sicherzustellen, falls die nativen Semantiken der Tabelle entfernt werden, z.B. durch CSS. Ein relevanter Anwendungsfall für die ARIA-Tabellenrolle ist, wenn die nativen Semantiken einer Tabelle durch die `display`-Eigenschaft von CSS überschrieben werden, wie z.B. durch `display: grid`. In diesem Fall können Sie die ARIA-Tabellenrollen verwenden, um die Semantiken wieder hinzuzufügen.

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

Oben ist die semantische Art, eine Tabelle zu schreiben. Die ARIA-Rollen sind nur notwendig, wenn die nativen Semantiken der Tabelle und daher der Tabellenzeilen eliminiert werden, z.B. durch das Setzen der [display-Eigenschaft auf flex oder grid](/de/docs/Web/CSS/display#accessibility).

### Hinzugefügte Vorteile

Keine

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das HTML-{{HTMLElement('tr', '<code>&lt;tr&gt;</code> table row')}}-Element
- {{HTMLElement('table')}}
- [Die `rowgroup`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
- [Die `table`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
- [Die `grid`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
- [Die `treegrid`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)
- [Die `cell`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)
- [Die `gridcell`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [Die `columnheader`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [Die `rowheader`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
