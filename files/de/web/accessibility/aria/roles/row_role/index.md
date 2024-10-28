---
title: "ARIA: row Rolle"
slug: Web/Accessibility/ARIA/Roles/row_role
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{AccessibilitySidebar}}

Ein Element mit `role="row"` ist eine Zeile von Zellen innerhalb einer tabellarischen Struktur. Eine Zeile enthält eine oder mehrere Zellen, Rasterzellen oder Spaltenüberschriften und möglicherweise eine Zeilenüberschrift innerhalb eines [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role), einer [`table`](/de/docs/Web/Accessibility/ARIA/Roles/table_role) oder einer [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role) und optional innerhalb einer [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role).

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

Das Element mit `role="row"` ist eine Zeile innerhalb eines [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role), einer [`table`](/de/docs/Web/Accessibility/ARIA/Roles/table_role) oder einer [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role) und optional innerhalb einer [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role), die eine oder mehrere [`cell`](/de/docs/Web/Accessibility/ARIA/Roles/cell_role), [`gridcell`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role), [`columnheader`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role) oder [`rowheader`](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role)-Elemente innerhalb einer statischen tabellarischen Struktur enthält. Die Verwendung von nativen [HTML `<tr>`](/de/docs/Web/HTML/Element/tr)-Elementen, wann immer möglich, wird dringend empfohlen.

Um eine ARIA-Zeile zu erstellen, fügen Sie `role="row"` zum Containerelement hinzu. Diese Zeile sollte innerhalb eines Gitters, einer Tabelle oder eines Baumgitters verschachtelt sein. Eine Gruppe von Zeilen kann direkt innerhalb eines Gitters, einer Tabelle oder eines Baumgitters oder innerhalb einer Zeilengruppe in einem dieser Container verschachtelt sein. Jede Zeile enthält Kinderzellen. Diese Zellen können je nach ihrer Funktion als Spalten- oder Zeilenüberschriften oder Raster- bzw. reguläre Zellen unterschiedliche Typen haben.

Eine Zeile kann eine Anzahl von Attributen enthalten, die die Rolle der Zeile klären, einschließlich [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex), [`aria-level`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-level), [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) und [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected).

Wenn sich die Zeile innerhalb eines Baumgitters befindet, können Zeilen das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) enthalten, um den aktuellen Status anzuzeigen. Dies ist nicht der Fall bei einer gewöhnlichen Tabelle oder einem Gitter, in denen das `aria-expanded` Attribut nicht vorhanden ist.

Um ein interaktives Widget mit tablaturen Struktur zu erstellen, verwenden Sie stattdessen das Rastermuster. Wenn die Interaktion die Auswahl einzelner Zellen ermöglicht, die Navigation von links nach rechts und oben nach unten vorgesehen ist oder die Benutzeroberfläche das Umordnen der Zellreihenfolge oder eine andere Änderung der Zellreihenfolge durch Ziehen und Ablegen ermöglicht, verwenden Sie stattdessen [grid](/de/docs/Web/Accessibility/ARIA/Roles/grid_role) oder [treegrid](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role).

> [!NOTE]
> Die Verwendung des nativen HTML-Tabellenelements ({{HTMLElement('table')}}) zusammen mit dem Tabellenzeilenelement ({{HTMLElement('tr')}}) wird, wann immer möglich, dringend empfohlen.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

#### Kontextrollen

- [role="rowgroup"](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role)
  - : Ein optionales kontextuelles Zeilen-Elternelement, das eine Beziehung zwischen den nachgeordneten Zeilen herstellt. Es ist strukturell äquivalent zu den thead-, tfoot- und tbody-Elementen in einem HTML-Tabellenelement.
- [role="table"](/de/docs/Web/Accessibility/ARIA/Roles/table_role)
  - : Einer der drei möglichen Kontexte (zusammen mit grid und treegrid), in denen Sie eine Zeile finden, identifiziert die Zeile als Teil einer nicht-interaktiven Tabellenstruktur, die Daten in Zeilen und Spalten enthält, ähnlich dem nativen {{HTMLElement('table')}}-HTML-Element.
- [role="grid"](/de/docs/Web/Accessibility/ARIA/Roles/grid_role)
  - : Einer der drei möglichen Kontexte (zusammen mit table und treegrid), in denen Sie eine Zeile finden, identifiziert die Zeile als Teil einer nicht-interaktiven Tabellenstruktur, die Daten in Zeilen und Spalten enthält, ähnlich dem nativen {{HTMLElement('table')}}-HTML-Element.
- [role="treegrid"](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role)
  - : Ähnlich einem Grid, jedoch mit Zeilen, die in der gleichen Weise wie ein Baum erweitert und reduziert werden können.

#### Nachgeordnete Rollen

- [role="cell"](/de/docs/Web/Accessibility/ARIA/Roles/cell_role)
  - : Eine Zelle in einer Zeile innerhalb eines tabellarischen Containers.
- [role="gridcell"](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
  - : Eine Zelle in einer Zeile innerhalb eines Gitters oder Baumgitters.
- [role="columnheader"](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
  - : Eine Kopfzelle, die strukturell dem HTML {{HTMLElement('th')}}-Element mit einer Spaltenrichtung ({{HTMLElement('tr', '<code>&lt;tr scope="col"&gt;</code>')}}) entspricht. Im Gegensatz zu einer einfachen Zelle stellt die Rolle columnheader eine Beziehung zwischen ihr und allen Zellen in der entsprechenden Spalte her.
- [role="rowheader"](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role)
  - : Eine Kopfzelle, die strukturell dem HTML {{HTMLElement('th')}}-Element mit einer Zeilenrichtung ({{HTMLElement('tr', '<code>&lt;tr scope="row"&gt;</code>')}}) entspricht. Im Gegensatz zu einer einfachen Zelle stellt die Rolle rowheader eine Beziehung zwischen ihr und allen Zellen in der entsprechenden Zeile her.

#### Zustände und Eigenschaften

- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) Zustand

  - : Das Attribut `aria-expanded`, das den Zustand der Zeile definiert, kann einen von drei Werten annehmen oder weggelassen werden:

    - `aria-expanded="true"`: Zeile ist derzeit erweitert.
    - `aria-expanded="false"`: Zeile ist derzeit reduziert.
    - `aria-expanded="undefined"` oder das Attribut fehlt: Die Zeile ist weder erweiterbar noch reduzierbar.

    Wenn das Element mit dem Attribut `aria-expanded` die Expansion eines anderen Gruppierungscontainers steuert, der nicht "besessen" wird von diesem Element, sollte der Autor **den Container mit dem Attribut** `aria-controls` referenzieren.

- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) Zustand

  - : Nur relevant, wenn die Zeile in einem interaktiven Container, wie einem Grid oder Treegrid, aber nicht relevant, wenn die Zeile in einer Tabelle ist. Das Attribut `aria-selected` kann einen von drei Werten annehmen oder weggelassen werden:

    - `aria-selected="true"`: Zeile ist derzeit ausgewählt.
    - `aria-selected="false"`: Zeile ist derzeit nicht ausgewählt.
    - `aria-selected="undefined"` oder das Attribut fehlt: Die Zeile ist nicht auswählbar.

- [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) Attribut

  - : Das Attribut `aria-colindex` wird nur benötigt, wenn Spalten aus dem DOM ausgeblendet sind. Es wird in der Regel auf Zeilen-Kindern platziert, anstatt auf der Zeile selbst. Wenn die angezeigten Spalten zusammenhängend sind, kann es auf die Zeile gesetzt werden.

    Das Attribut nimmt als Wert eine ganze Zahl zwischen 1 und der Gesamtanzahl der Spalten innerhalb der Tabelle, des Gitters oder Baumgitters. Wenn es auf der Zeile platziert wird, definiert das `aria-colindex` den Spaltenindex oder die Position eines Elements in Bezug auf die Gesamtzahl der Spalten innerhalb einer Zeile. Zum Beispiel, in einer Tabelle mit 15 Spalten und Spalten 4, 5 und 6 sind im DOM, könnte `aria-colindex="4"` auf jede Zeile gesetzt werden.

    Wenn die Menge der im DOM vorhandenen Spalten **nicht** zusammenhängend ist oder wenn es Zellen gibt, die sich über mehr als eine Zeile oder Spalte erstrecken, setzen Sie das `aria-colindex` auf alle Kinder jeder Zeile, anstatt auf die Zeile selbst.

    Wenn alle Spalten im DOM sind, ist dieses Attribut nicht erforderlich.

- [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) Attribut

  - : Das Attribut `aria-rowindex` wird nur benötigt, wenn Zeilen aus dem DOM ausgeblendet sind, um anzuzeigen, welche Zeile in der Liste der Gesamtzeilen gelesen wird. Das Attribut, mit einem eindeutigen Wert auf jeder Zeile platziert, nimmt als Wert eine ganze Zahl zwischen 1 und der Gesamtanzahl der Zeilen innerhalb der Tabelle, des Gitters oder Baumgitters, und gibt die Position oder den Index jeder Zeile an. Zum Beispiel, wenn eine Tabelle 1.500 Zeilen hat, aber nur der Kopf und die Zeilen 47 und 52 im DOM sind, würde `aria-rowindex="1"` auf der Kopfzeile, und `aria-rowindex="47"` und `aria-rowindex="52"` auf der 47. und 52. Zeile gesetzt werden.

    Wenn alle Zeilen im DOM vorhanden sind, ist dieses Attribut nicht erforderlich.

### Tastaturinteraktionen

Keine

### Benötigte JavaScript-Funktionen

Keine. Für sortierbare Spalten siehe die [`columnheader`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role) aria Rolle.

> [!NOTE]
> Die erste Regel bei der Verwendung von ARIA ist, Sie können eine native Funktion mit den bereits eingebauten Semantiken und Verhalten verwenden, anstatt ein Element umzuwidmen und eine ARIA-Rolle, -Zustand oder -Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie das. Verwenden Sie das HTML {{HTMLElement('table')}}-Element anstelle der ARIA-Tabelle, wann immer möglich.

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

Oben ist eine nicht-semantische ARIA-Tabelle mit fünf von 81 Zeilen im DOM: Eine innerhalb eines Tabellenkopfs und vier Zeilen innerhalb des Tabellenkörpers. Die Kopfzeile, allein innerhalb einer Kopfzeilengruppe, hat zwei Spaltenüberschriften. Die Spalten sind sortierbar, aber derzeit nicht sortiert, wie durch die Eigenschaft `aria-sort` angezeigt. Der Tabellenkörper befindet sich in einer separaten Zeilengruppe, mit vier Zeilen, die derzeit im DOM sind. Da nicht alle Zeilen im DOM sind, haben wir die Eigenschaft `aria-rowindex` auf jeder Zeile hinzugefügt.

## Beste Praktiken

Verwenden Sie nur {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}}, etc., für die Datenstruktur einer Tabelle. Sie können diese ARIA-Rollen hinzufügen, um die Zugänglichkeit zu gewährleisten, sollte die native Semantik der Tabelle entfernt werden, zum Beispiel durch CSS. Ein relevanter Anwendungsfall für die ARIA-Tabellenrolle ist, wenn die native Semantik einer Tabelle durch die Anzeigeeigenschaft von CSS überschrieben wird, zum Beispiel durch display: grid. In diesem Fall können Sie die ARIA-Tabellenrollen verwenden, um die Semantiken wieder hinzuzufügen.

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

Oben ist die semantische Art, eine Tabelle zu schreiben. Die ARIA-Rollen sind nur notwendig, wenn die native Semantik der Tabelle und somit die Tabellenzeilen aufgehoben werden, wie durch das Setzen der [Anzeigen-Eigenschaft auf flex oder grid](/de/docs/Web/CSS/display#accessibility).

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
