---
title: "ARIA: row-Rolle"
slug: Web/Accessibility/ARIA/Roles/row_role
l10n:
  sourceCommit: 46e392021bad64eead1cea58be106fa364a14d8b
---

{{AccessibilitySidebar}}

Ein Element mit `role="row"` ist eine Zeile von Zellen innerhalb einer tabellarischen Struktur. Eine Zeile enthält eine oder mehrere Zellen, Gitternetz-Zellen oder Spaltenüberschriften und möglicherweise eine Zeilenüberschrift, innerhalb eines [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role), [`table`](/de/docs/Web/Accessibility/ARIA/Roles/table_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role) und optional innerhalb einer [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role).

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

Das Element `role="row"` ist eine Zeile innerhalb eines [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role), [`table`](/de/docs/Web/Accessibility/ARIA/Roles/table_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role) und optional innerhalb einer [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role), die als Container für eine oder mehrere [`cells`](/de/docs/Web/Accessibility/ARIA/Roles/cell_role), [`gridcells`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role), [`columnheaders`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role) oder [`rowheaders`](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role) innerhalb einer statischen tabellarischen Struktur dient. Die Verwendung nativer [HTML `<tr>`](/de/docs/Web/HTML/Element/tr) Elemente, wann immer möglich, wird stark empfohlen.

Um eine ARIA-Zeile zu erstellen, fügen Sie `role="row"` dem Container-Element hinzu. Diese Zeile sollte innerhalb eines Gitters, einer Tabelle oder eines Baumgitters verschachtelt sein. Eine Gruppe von Zeilen kann direkt innerhalb eines Gitters, einer Tabelle oder eines Baumgitters oder innerhalb einer Zeilengruppe in einem dieser Container verschachtelt werden. Jede Zeile enthält Kinderzellen. Diese Zellen können unterschiedlichen Typs sein, je nachdem, ob es sich um Spalten- oder Zeilenüberschriften oder um Gitter- oder normale Zellen handelt.

Eine Zeile kann eine Reihe von Attributen enthalten, die die Rolle der Zeile klären, einschließlich [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex), [`aria-level`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-level), [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) und [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected).

Wenn sich die Zeile innerhalb eines Baumgitters befindet, können Zeilen das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) enthalten, um den aktuellen Status anzuzeigen. Dies ist nicht der Fall bei einer gewöhnlichen Tabelle oder einem Gitter, in dem das Attribut `aria-expanded` nicht vorhanden ist.

Um ein interaktives Widget mit einer tabellarischen Struktur zu erstellen, verwenden Sie stattdessen das Gittermuster. Wenn die Interaktion den Auswahlstatus einzelner Zellen bereitstellt, wenn Navigation von links nach rechts und von oben nach unten verfügbar ist oder wenn die Benutzeroberfläche das Umordnen der Zellreihenfolge ermöglicht, wie z.B. durch Ziehen und Ablegen, verwenden Sie [grid](/de/docs/Web/Accessibility/ARIA/Roles/grid_role) oder [treegrid](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role) anstelle dessen.

> [!NOTE]
> Die Verwendung des nativen HTML-Tabellenelements ({{HTMLElement('table')}}) zusammen mit dem Tabellenzeilenelement ({{HTMLElement('tr')}}) wann immer möglich, wird stark empfohlen.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

#### Kontextrollen

- [role="rowgroup"](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role)
  - : Ein optionales kontextuelles Zeilenelternelement, es stellt eine Beziehung zwischen untergeordneten Zeilen her. Es ist ein strukturelles Äquivalent zu den thead, tfoot und tbody Elementen in einem HTML-Tabellenelement.
- [role="table"](/de/docs/Web/Accessibility/ARIA/Roles/table_role)
  - : Einer der drei möglichen Kontexte (zusammen mit grid und treegrid), in dem Sie eine Zeile finden, identifiziert die Zeile als Teil einer nicht-interaktiven Tabellenstruktur, die Daten in Zeilen und Spalten enthält, ähnlich dem nativen {{HTMLElement('table')}} HTML-Element.
- [role="grid"](/de/docs/Web/Accessibility/ARIA/Roles/grid_role)
  - : Einer der drei möglichen Kontexte (zusammen mit table und treegrid), in dem Sie eine Zeile finden, identifiziert die Zeile als Teil einer nicht-interaktiven Tabellenstruktur, die Daten in Zeilen und Spalten enthält, ähnlich dem nativen {{HTMLElement('table')}} HTML-Element.
- [role="treegrid"](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role)
  - : Ähnlich einem Gitter, aber mit Zeilen, die auf die gleiche Weise wie bei einem Baum erweitert und reduziert werden können.

#### Nachkommende Rollen

- [role="cell"](/de/docs/Web/Accessibility/ARIA/Roles/cell_role)
  - : Eine Zelle in einer Zeile innerhalb eines tabellarischen Containers.
- [role="gridcell"](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
  - : Eine Zelle in einer Zeile innerhalb eines Gitters oder Baumgitters.
- [role="columnheader"](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
  - : Eine Überschriftenzelle, die das strukturelle Äquivalent des HTML-Elements {{HTMLElement('th')}} mit einer Spaltenreichweite darstellt ({{HTMLElement('tr', '<code>&lt;tr scope="col"&gt;</code>')}}). Anders als eine einfache Zelle stellt die columnheader-Rolle eine Beziehung zwischen ihr und allen Zellen in der entsprechenden Spalte her.
- [role="rowheader"](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role)
  - : Eine Überschriftenzelle, die das strukturelle Äquivalent des HTML-Elements {{HTMLElement('th')}} mit einer Zeilenreichweite darstellt ({{HTMLElement('tr', '<code>&lt;tr scope="row"&gt;</code>')}}). Anders als eine einfache Zelle stellt die rowheader-Rolle eine Beziehung zwischen ihr und allen Zellen in der entsprechenden Zeile her.

#### Zustände und Eigenschaften

- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) Zustand

  - : Das `aria-expanded` Attribut, das den Zustand der Zeile definiert, kann einen von drei Werten annehmen oder weggelassen werden:

    - `aria-expanded="true"`: Die Zeile ist derzeit erweitert.
    - `aria-expanded="false"`: Die Zeile ist derzeit reduziert.
    - `aria-expanded="undefined"` oder das Attribut fehlt: Die Zeile ist weder erweiterbar noch reduzierbar.

    Wenn das Element mit dem Attribut `aria-expanded` die Erweiterung eines anderen Gruppierungscontainers steuert, der nicht "im Besitz" des Elements ist, sollte der Autor den Container mit dem Attribut `aria-controls` referenzieren.

- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) Zustand

  - : Nur relevant, wenn sich die Zeile in einem interaktiven Container wie einem Gitter oder einem Baumgitter befindet, aber nicht relevant, wenn sich die Zeile in einer Tabelle befindet. Das `aria-selected` Attribut kann einen von drei Werten annehmen oder weggelassen werden:

    - `aria-selected="true"`: Die Zeile ist derzeit ausgewählt.
    - `aria-selected="false"`: Die Zeile ist derzeit nicht ausgewählt.
    - `aria-selected="undefined"` oder das Attribut fehlt: Die Zeile ist nicht auswählbar.

- [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) Attribut

  - : Das `aria-colindex` Attribut ist nur erforderlich, wenn Spalten im DOM ausgeblendet sind. Es wird normalerweise auf den Kinderzellen der Zeile platziert, anstatt auf der Zeile selbst. Wenn die angezeigten Spalten zusammenhängend sind, kann es auf der Zeile platziert werden.

    Das Attribut nimmt als Wert eine ganze Zahl zwischen 1 und der Gesamtanzahl der Spalten innerhalb der Tabelle, des Gitters oder des Baumgitters an. Wenn es auf der Zeile platziert ist, definiert das `aria-colindex` den Spaltenindex oder die Position eines Elements in Bezug auf die Gesamtanzahl der Spalten innerhalb einer Zeile. Zum Beispiel könnte in einer Tabelle mit 15 Spalten, und Spalten 4, 5 und 6 befinden sich im DOM, `aria-colindex="4"` auf jeder Zeile gesetzt werden.

    Wenn die im DOM vorhandene Spaltenmenge **nicht** zusammenhängend ist oder es Zellen gibt, die über mehr als eine Zeile oder Spalte hinweggehen, setzen Sie das `aria-colindex` auf alle Kinder jeder Zeile, anstatt auf die Zeile selbst.

    Wenn alle Spalten im DOM vorhanden sind, ist dieses Attribut nicht erforderlich.

- [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) Attribut

  - : Das `aria-rowindex` Attribut ist nur erforderlich, wenn Zeilen im DOM ausgeblendet sind, um anzuzeigen, welche Zeile in der Liste der Gesamtzeilen gelesen wird. Das Attribut, mit einem eindeutigen Wert auf jeder Zeile platziert, nimmt als Wert eine ganze Zahl zwischen 1 und der Gesamtanzahl der Zeilen innerhalb der Tabelle, des Gitters oder des Baumgitters an und gibt die Position oder den Index jeder Zeile an. Zum Beispiel, wenn eine Tabelle 1.500 Zeilen umfasst, aber nur der Header und die Zeilen 47 und 52 im DOM sind, würde `aria-rowindex="1"` auf der Header-Zeile gesetzt werden und `aria-rowindex="47"` und `aria-rowindex="52"` auf der 47. bzw. 52. Zeile.

    Wenn alle Zeilen im DOM vorhanden sind, ist dieses Attribut nicht erforderlich.

### Tastaturinteraktionen

Keine

### Erforderliche JavaScript-Funktionen

Keine. Für sortierbare Spalten siehe die [`columnheader`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role) Aria-Rolle.

> [!NOTE]
> Die erste Regel der ARIA-Nutzung ist, dass Sie eine native Funktion mit den erforderlichen Semantiken und Verhaltensweisen verwenden können, anstatt ein Element neu zu definieren und **eine** ARIA-Rolle, einen Zustand oder ein Merkmal hinzuzufügen, um es zugänglich zu machen. Verwenden Sie das HTML {{HTMLElement('table')}} Element anstelle der ARIA-Rolle der Tabelle wann immer möglich.

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

Das obige ist eine nicht-semantische ARIA-Tabelle mit fünf von 81 Zeilen, die im DOM vorhanden sind: Eine innerhalb eines Tabellenheaders und vier Zeilen innerhalb des Tabellenkörpers. Die Header-Zeile, allein in einer Header-Zeilengruppe, hat zwei Spaltenüberschriften. Die Spalten sind sortierbar, aber derzeit nicht sortiert, wie durch die `aria-sort` Eigenschaft angezeigt wird. Der Tabellenkörper befindet sich in einer separaten Zeilengruppe, mit vier Zeilen derzeit im DOM. Da nicht alle Zeilen im DOM vorhanden sind, haben wir die `aria-rowindex` Eigenschaft auf jeder Zeile hinzugefügt.

## Best Practices

Verwenden Sie nur {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}}, usw. für die Struktur von Datentabellen. Sie können diese ARIA-Rollen hinzufügen, um die Zugänglichkeit zu gewährleisten, falls die nativen Semantiken der Tabelle entfernt werden, z.B. durch CSS. Ein relevanter Anwendungsfall für die ARIA-Tabellenrolle ist, wenn die nativen Semantiken einer Tabelle durch die `display`-Eigenschaft von CSS überschrieben werden, z.B. durch `display: grid`. In diesem Fall können Sie die ARIA-Tabellenrollen verwenden, um die Semantiken wiederhinzuzufügen.

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

Oben sehen Sie die semantische Art, eine Tabelle zu schreiben. Die ARIA-Rollen sind nur dann notwendig, wenn die nativen Semantiken der Tabelle und damit der Tabellenreihen durch das Setzen der [display-Eigenschaft auf flex oder grid](/de/docs/Web/CSS/display#accessibility) aufgehoben werden.

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
