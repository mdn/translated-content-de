---
title: "ARIA: rowheader Rolle"
slug: Web/Accessibility/ARIA/Roles/rowheader_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Ein Element mit `role="rowheader"` ist eine [Zelle](/de/docs/Web/Accessibility/ARIA/Roles/cell_role), die Header-Informationen für eine [Zeile](/de/docs/Web/Accessibility/ARIA/Roles/row_role) innerhalb einer tabellarischen Struktur eines [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role), [`table`](/de/docs/Web/Accessibility/ARIA/Roles/table_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role) enthält.

## Beschreibung

`Rowheader` ist die Header-[`Zelle`](/de/docs/Web/Accessibility/ARIA/Roles/cell_role) für eine Zeile und stellt eine Beziehung zwischen ihr und den anderen Zellen in derselben [`Zeile`](/de/docs/Web/Accessibility/ARIA/Roles/row_role) her.

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
      <span role="rowheader">Finland</span>
      <span role="cell">5.5 million</span>
    </div>
    <div role="row">
      <span role="rowheader">France</span>
      <span role="cell">67 million</span>
    </div>
  </div>
</div>
```

Es ist das strukturelle Äquivalent zum {{HTMLElement('th')}} Element mit einem Umfang von `row`, `<th scope="row">`. Die Verwendung des nativen {{HTMLElement('th')}} HTML-Elements wird nachdrücklich empfohlen.

Um einen ARIA-Zeilen-Header zu erstellen, fügen Sie dem Element `role="rowheader"` hinzu. Dieser Zeilen-Header muss innerhalb einer `row` verschachtelt sein, die wiederum innerhalb einer `rowgroup` oder direkt innerhalb eines `grid`, `table` oder `treegrid` verschachtelt ist.

> [!NOTE]
> Die Verwendung der nativen [Tabellen-Elemente](/de/docs/Learn/HTML/Tables/Basics) wird wann immer möglich dringend empfohlen.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

#### Kontextrollen

- [role="row"](/de/docs/Web/Accessibility/ARIA/Roles/row_role)
  - : Der einzige Kontext, in dem Sie eine Zeile finden werden. Sie umfasst eine Zelle oder Gruppe von Zellen einer Zeile, von denen nur eine vom Typ rowheader sein sollte. Ähnlich dem nativen {{HTMLElement('tr')}} HTML-Element.

### Tastaturinteraktionen

Keine

### Erforderliche JavaScript-Funktionen

Keine.

> [!NOTE]
> Die erste Regel bei der Verwendung von ARIA ist: Wenn Sie ein natives Feature mit der benötigten Semantik und Funktionalität verwenden können, anstatt ein Element umzufunktionieren und **eine** ARIA-Rolle, Zustände oder Eigenschaften hinzuzufügen, um es zugänglich zu machen, dann tun Sie dies. Verwenden Sie die HTML-Elemente `<table>`, `<tr>`, `<th>`, `<td>` und andere [Tabellen-Elemente](/de/docs/Learn/HTML/Tables/Basics) anstelle der ARIA-Tabellenrollen, wann immer möglich.

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
      <span role="rowheader">header</span>
      <span role="cell">h1</span>
    </div>
    <div role="row" aria-rowindex="16">
      <span role="rowheader">header</span>
      <span role="cell">h6</span>
    </div>
    <div role="row" aria-rowindex="18">
      <span role="rowheader">rowgroup</span>
      <span role="cell">thead</span>
    </div>
    <div role="row" aria-rowindex="24">
      <span role="rowheader">term</span>
      <span role="cell">dt</span>
    </div>
  </div>
</div>
```

Das oben gezeigte ist eine nicht-semantische ARIA-Tabelle mit einem Tabellenkopf und einem Tabellenkörper, wobei fünf von 81 Zeilen im DOM vorhanden sind: eine innerhalb eines Tabellenkopfes und vier Zeilen innerhalb des Tabellenkörpers. Die Kopfzeile, alleine in einer Kopfzeilengruppe, hat zwei Spalten-Header. Die Spalten sind sortierbar, aber derzeit nicht sortiert, wie durch die [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-sort) Eigenschaft angezeigt wird. Der Tabellenkörper ist eine separate Zeilengruppe mit vier derzeit im DOM befindlichen Zeilen. Jede Datenzeile der Tabelle hat einen Zeilen-Header. Da nicht alle Zeilen im DOM sind, haben wir die [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) Eigenschaft auf jeder Zeile berücksichtigt.

## Beste Praktiken

Verwenden Sie nur {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}}, usw. für die Struktur von Datentabellen. Sie können diese ARIA-Rollen hinzufügen, um Zugänglichkeit sicherzustellen, falls die nativen Semantiken der Tabelle, wie z.B. durch CSS, entfernt werden sollten. Ein relevanter Anwendungsfall für alle ARIA-Tabellenrollen ist, wenn die CSS-`display`-Eigenschaft die nativen Semantiken einer Tabelle überschreibt, z. B. durch `display: grid`. In diesem Fall können Sie die ARIA-Tabellenrollen verwenden, um die Semantiken hinzuzufügen.

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
      <th role="rowheader">header</th>
      <td role="cell">h1</td>
    </tr>
    <tr role="row" aria-rowindex="16">
      <th role="rowheader">header</th>
      <td role="cell">h6</td>
    </tr>
  </tbody>
</table>
```

Oben ist der semantische Weg zur Erstellung einer Tabelle. Die ARIA-Rollen sind nur notwendig, wenn die nativen Semantiken der Tabelle und daher die Tabellenzeilen-Header beseitigt werden, z. B. durch das Einstellen der [display-Eigenschaft auf flex oder grid](/de/docs/Web/CSS/display#accessibility).

### Zusätzliche Vorteile

Keine

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Das HTML `<table>`-Element](/de/docs/Web/HTML/Element/table)
- [Das HTML `<th>`-Element](/de/docs/Web/HTML/Element/th)
- [HTML-Tabellenanleitung](/de/docs/Learn/HTML/Tables/Basics)
- [ARIA `cell` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/cell_role)
- [ARIA `row` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/row_role)
- [ARIA `gridcell` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
