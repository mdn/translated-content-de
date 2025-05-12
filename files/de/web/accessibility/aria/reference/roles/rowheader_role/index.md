---
title: "ARIA: rowheader Rolle"
short-title: rowheader
slug: Web/Accessibility/ARIA/Reference/Roles/rowheader_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Ein Element mit `role="rowheader"` ist eine [Zelle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role), die Kopfzeileninformationen für eine [Zeile](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) innerhalb einer tabellarischen Struktur eines [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), [`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) enthält.

## Beschreibung

`Rowheader` ist die Kopfzeilen-[`Zelle`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role) für eine Zeile und stellt eine Beziehung zwischen ihr und den anderen Zellen in derselben [`Zeile`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) her.

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

Es ist ein strukturelles Äquivalent zum {{HTMLElement('th')}}-Element mit einem `row`-Bereich, `<th scope="row">`. Die Verwendung des nativen {{HTMLElement('th')}} HTML-Elements wird dringend empfohlen.

Um eine ARIA-Zeilenkopfzeile zu erstellen, fügen Sie dem Element `role="rowheader"` hinzu. Diese Zeilenkopfzeile muss in einer `row` eingebettet sein, die wiederum in einem `rowgroup` oder direkt in einem `grid`, `table` oder `treegrid` eingebettet ist.

> [!NOTE]
> Die Verwendung der nativen [Tabellenelemente](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics) wird wann immer möglich dringend empfohlen.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

#### Kontextrollen

- [role="row"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
  - : Der einzige Kontext, in dem Sie eine Zeile finden werden. Sie umfasst eine Zelle oder eine Gruppe von Zellen in einer Zeile, von denen nur eine vom Typ `rowheader` sein sollte. Ähnlich wie das native {{HTMLElement('tr')}} HTML-Element.

### Tastaturinteraktionen

Keine.

### Erforderliche JavaScript-Funktionen

Keine.

> [!NOTE]
> Die erste Regel bei der Verwendung von ARIA lautet: Wenn Sie eine native Funktion mit den bereits eingebauten Semantiken und dem benötigten Verhalten verwenden können, anstatt ein Element neu zu nutzen und eine ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es barrierefrei zu machen, dann tun Sie das. Verwenden Sie die HTML-Elemente `<table>`, `<tr>`, `<th>`, `<td>` und andere [Tabellenelemente](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics) anstelle der ARIA-Tabellenrollen, wann immer möglich.

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

Das obige ist eine nicht-semantische ARIA-Tabelle mit einer Tabellenkopfleiste und einem Tabellenkörper, wobei fünf von 81 Zeilen im DOM vorhanden sind: eine in einem Tabellenkopf und vier Zeilen im Tabellenkörper. Die Kopfzeile, die allein in einem Kopfzeilen-Gruppe ist, hat zwei Spaltenköpfe. Die Spalten sind sortierbar, aber derzeit nicht sortiert, wie durch die [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort)-Eigenschaft angezeigt wird. Der Tabellenkörper ist eine separate Zeilengruppe mit vier Zeilen, die derzeit im DOM sind. Jede Datentabelle-Zeile hat eine Zeilenkopfzeile. Da nicht alle Zeilen im DOM sind, haben wir die [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex)-Eigenschaft für jede Zeile hinzugefügt.

## Best Practices

Verwenden Sie nur {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}} usw. für den Aufbau von Datentabellen. Sie können diese ARIA-Rollen hinzufügen, um die Barrierefreiheit sicherzustellen, falls die nativen Semantiken der Tabelle, beispielsweise durch CSS, entfernt werden. Ein relevanter Anwendungsfall für alle ARIA-Tabellenrollen ist, wenn die CSS-`display`-Eigenschaft die nativen Semantiken einer Tabelle überschreibt, z.B. durch `display: grid`. In diesem Fall können Sie die ARIA-Tabellenrollen verwenden, um die Semantik hinzuzufügen.

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

Oben ist die semantische Weise, eine Tabelle zu schreiben. Die ARIA-Rollen sind nur dann notwendig, wenn die nativen Semantiken der Tabelle und somit der Zeilenkopfzeilen aufgehoben werden, wie etwa durch Einstellen der [display-Eigenschaft auf flex oder grid](/de/docs/Web/CSS/display#accessibility).

### Zusätzliche Vorteile

Keine

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Das HTML-`<table>`-Element](/de/docs/Web/HTML/Reference/Elements/table)
- [Das HTML-`<th>`-Element](/de/docs/Web/HTML/Reference/Elements/th)
- [HTML-Tabellenleitfaden](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- [ARIA `cell`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)
- [ARIA `row`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [ARIA `gridcell`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
