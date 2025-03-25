---
title: "ARIA: row Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/row_role
l10n:
  sourceCommit: ec98716dfe71c78db3f82ee3b1b9e7f68997fa19
---

Ein Element mit `role="row"` ist eine Zeile von Zellen innerhalb einer tabellarischen Struktur. Eine Zeile enthält eine oder mehrere Zellen, Rasterzellen oder Spaltenüberschriften und möglicherweise eine Zeilenüberschrift innerhalb eines [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), [`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) und optional innerhalb einer [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role).

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

Das Element mit `role="row"` ist eine Zeile innerhalb eines [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), [`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role), und optional innerhalb einer [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role), die ein oder mehrere [`cell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role), [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role), [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) oder [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role) Elemente innerhalb einer statischen tabellarischen Struktur enthält. Die Verwendung nativer [HTML `<tr>`](/de/docs/Web/HTML/Element/tr) Elemente wird, wann immer möglich, dringend empfohlen.

Um eine ARIA-Zeile zu erstellen, fügen Sie `role="row"` zum Container-Element hinzu. Diese Zeile sollte innerhalb eines Grids, einer Tabelle oder eines Treegrids verschachtelt sein. Eine Gruppe von Zeilen kann direkt innerhalb eines Grids, einer Tabelle oder eines Treegrids oder innerhalb einer Rowgroup in einem dieser Container verschachtelt werden. Jede Zeile enthält untergeordnete Zellen. Diese Zellen können je nach ihrer Funktion als Spalten- oder Zeilenüberschriften, Rasters oder reguläre Zellen unterschiedliche Typen haben.

Eine Zeile kann eine Reihe von Attributen enthalten, die die Rolle der Zeile verdeutlichen, einschließlich [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex), [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level), [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) und [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected).

Wenn die Zeile innerhalb eines Treegrids ist, können Zeilen das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) einschließen, um den aktuellen Status anzuzeigen. Dies ist bei einer gewöhnlichen Tabelle oder einem Grid nicht der Fall, wo das Attribut `aria-expanded` nicht vorhanden ist.

Um ein interaktives Widget zu erstellen, das eine tabellarische Struktur hat, verwenden Sie stattdessen das Rastermuster. Wenn die Interaktion den Auswahlsstatus einzelner Zellen ermöglicht, wenn die Navigation von links nach rechts und von oben nach unten bereitgestellt wird oder wenn die Benutzeroberfläche das Umordnen der Zellreihenfolge oder das Ändern der Reihenfolge einzelner Zellen wie durch Drag-and-Drop ermöglicht, verwenden Sie stattdessen [Grid](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) oder [Treegrid](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role).

> [!NOTE]
> Die Verwendung des nativen HTML-Tabellenelements ({{HTMLElement('table')}}) zusammen mit dem Tabellenzeilenelement ({{HTMLElement('tr')}}) wird wann immer möglich dringend empfohlen.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

#### Kontextrollen

- [role="rowgroup"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
  - : Ein optionales kontextuelles Zeilen-Elternelement, es etabliert eine Beziehung zwischen nachfolgenden Zeilen. Es ist ein strukturelles Äquivalent zu den thead, tfoot und tbody Elementen in einem HTML-Tabellenelement.
- [role="table"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
  - : Einer der drei möglichen Kontexte (zusammen mit Grid und Treegrid), in denen Sie eine Zeile finden, identifiziert die Zeile als Teil einer nicht interaktiven Tabellenstruktur, die Daten in Zeilen und Spalten enthält, ähnlich dem nativen {{HTMLElement('table')}} HTML-Element.
- [role="grid"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
  - : Einer der drei möglichen Kontexte (zusammen mit Table und Treegrid), in denen Sie eine Zeile finden, identifiziert die Zeile als Teil einer nicht interaktiven Tabellenstruktur, die Daten in Zeilen und Spalten enthält, ähnlich dem nativen {{HTMLElement('table')}} HTML-Element.
- [role="treegrid"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)
  - : Ähnlich einem Grid, aber mit Zeilen, die auf die gleiche Weise wie bei einem Baum erweitert und reduziert werden können.

#### Nachfolgende Rollen

- [role="cell"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)
  - : Eine Zelle in einer Zeile innerhalb eines tabellarischen Containers.
- [role="gridcell"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
  - : Eine Zelle in einer Zeile innerhalb eines Grids oder Treegrids.
- [role="columnheader"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
  - : Eine Kopfzelle, die das strukturelle Äquivalent des HTML {{HTMLElement('th')}} Elements mit einer Spaltenbereich ist ({{HTMLElement('tr', '<code>&lt;tr scope="col"&gt;</code>')}}). Im Gegensatz zu einer einfachen Zelle, stellt die Rolle columnheader eine Beziehung zwischen ihr und allen Zellen in der entsprechenden Spalte her.
- [role="rowheader"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
  - : Eine Kopfzelle, die das strukturelle Äquivalent des HTML {{HTMLElement('th')}} Elements mit einem Zeilenbereich ist ({{HTMLElement('tr', '<code>&lt;tr scope="row"&gt;</code>')}}). Im Gegensatz zu einer einfachen Zelle, stellt die Rolle rowheader eine Beziehung zwischen ihr und allen Zellen in der entsprechenden Zeile her.

#### Zustände und Eigenschaften

- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) Zustand

  - : Das `aria-expanded` Attribut, das den Zustand der Zeile definiert, kann einen von drei Werten annehmen oder weggelassen werden:

    - `aria-expanded="true"`: Zeile ist aktuell erweitert.
    - `aria-expanded="false"`: Zeile ist aktuell reduziert.
    - `aria-expanded="undefined"` oder das Attribut fehlt: Die Zeile ist weder erweiterbar noch reduzierbar.

    Wenn das Element mit dem `aria-expanded` Attribut die Erweiterung eines anderen Gruppierungscontainers kontrolliert, der nicht "im Besitz" des Elements ist, **sollte** der Autor auf den Container mit dem `aria-controls` Attribut verweisen.

- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) Zustand

  - : Nur relevant, wenn die Zeile in einem interaktiven Container ist, wie einem Grid oder Treegrid, aber nicht relevant, wenn die Zeile in einer Tabelle ist. Das `aria-selected` Attribut kann einen von drei Werten annehmen oder weggelassen werden:

    - `aria-selected="true"`: Zeile ist aktuell ausgewählt.
    - `aria-selected="false"`: Zeile ist nicht aktuell ausgewählt.
    - `aria-selected="undefined"` oder das Attribut fehlt: Die Zeile ist nicht auswählbar.

- [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) Attribut

  - : Das `aria-colindex` Attribut ist nur erforderlich, wenn Spalten im DOM verborgen sind. Es wird generell auf die Zeilenkinder platziert, anstatt auf die Zeile selbst. Wenn die angezeigten Spalten zusammenhängend sind, kann es auf die Zeile gesetzt werden.

    Das Attribut nimmt als Wert eine ganze Zahl zwischen 1 und der Gesamtanzahl der Spalten innerhalb der Tabelle, des Grids oder des Treegrids. Wenn es auf die Zeile gesetzt wird, definiert das `aria-colindex` den Spaltenindex eines Elements oder die Position in Bezug auf die Gesamtanzahl der Spalten innerhalb einer Zeile. Zum Beispiel, in einer Tabelle mit 15 Spalten, und Spalte 4, 5 und 6 sind im DOM, könnte `aria-colindex="4"` auf jede Zeile gesetzt werden.

    Wenn die Reihe von Spalten, die im DOM vorhanden ist, **nicht** zusammenhängend ist oder wenn Zellen mehr als eine Zeile oder Spalte überspannen, setzen Sie das `aria-colindex` auf alle Kinder jeder Zeile anstatt auf die Zeile selbst.

    Wenn alle Spalten im DOM sind, ist dieses Attribut nicht notwendig.

- [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) Attribut

  - : Das `aria-rowindex` Attribut wird nur benötigt, wenn Zeilen im DOM verborgen sind, um anzugeben, welche Zeile in der Liste der Gesamtzeilen gelesen wird. Das Attribut, das mit einem eindeutigen Wert auf jeder Zeile platziert wird, nimmt als Wert eine ganze Zahl zwischen 1 und der Gesamtanzahl der Zeilen innerhalb der Tabelle, des Grids oder des Treegrids, die die Position oder den Index jeder Zeile anzeigt. Zum Beispiel, wenn eine Tabelle 1.500 Zeilen hat, aber nur die Kopfzeile und die Zeilen 47 und 52 im DOM sind, würde `aria-rowindex="1"` auf die Kopfzeile gesetzt werden, und `aria-rowindex="47"` und `aria-rowindex="52"` würden auf die 47. und 52. Zeile gesetzt.

    Wenn alle Zeilen im DOM vorhanden sind, ist dieses Attribut nicht notwendig.

### Tastaturinteraktionen

Keine.

### Erforderliche JavaScript-Funktionen

Keine. Für sortierbare Spalten, siehe die [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) aria Rolle.

> [!NOTE]
> Die erste Regel bei der Verwendung von ARIA ist, dass Sie eine native Funktion mit den bereits eingebauten Semantiken und Verhaltensweisen verwenden, anstatt ein Element umzufunktionieren und eine ARIA-Rolle, -Zustand oder -Eigenschaft hinzuzufügen, um es zugänglich zu machen. Verwenden Sie das HTML {{HTMLElement('table')}} Element anstelle der ARIA-Rolle der Tabelle, wann immer möglich.

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

Das obige ist eine nicht-semantische ARIA-Tabelle mit fünf von 81 im DOM vorhandenen Zeilen: Eine innerhalb eines Tabellenkopfes und vier Zeilen im Tabellenkörper. Die Kopfzeile, allein in einem Kopfzeilen-Rowgroup, hat zwei Spaltenüberschriften. Die Spalten sind sortierbar, aber derzeit nicht sortiert, wie durch die `aria-sort` Eigenschaft angezeigt wird. Der Tabellenkörper ist in einem separaten Rowgroup, mit vier derzeit im DOM vorhandenen Zeilen. Da nicht alle Zeilen im DOM vorhanden sind, haben wir das `aria-rowindex` Attribut auf jede Zeile eingefügt.

## Beste Praktiken

Verwenden Sie nur {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}}, usw., für die Datenstruktur der Tabelle. Sie können diese ARIA-Rollen hinzufügen, um die Barrierefreiheit sicherzustellen, falls die nativen Semantiken der Tabelle entfernt werden, z. B. durch CSS. Ein relevanter Anwendungsfall für die ARIA-Tabellenrolle ist, wenn die nativen Semantiken einer Tabelle durch die Anzeigeeigenschaft von CSS überschrieben werden, wie z. B. durch `display: grid`. In diesem Fall können Sie die ARIA-Tabellenrollen verwenden, um die Semantiken wieder hinzuzufügen.

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

Oben ist die semantische Weise, eine Tabelle zu schreiben. Die ARIA-Rollen sind nur notwendig, wenn die nativen Semantiken der Tabelle und daher die Tabellenzeilen gelöscht werden, wie über die Einstellung der [Display-Eigenschaft auf Flex oder Grid](/de/docs/Web/CSS/display#accessibility).

### Zusätzliche Vorteile

keine

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
