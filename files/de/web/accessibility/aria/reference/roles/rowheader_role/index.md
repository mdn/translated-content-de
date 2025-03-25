---
title: "ARIA: Rolle `rowheader`"
slug: Web/Accessibility/ARIA/Reference/Roles/rowheader_role
l10n:
  sourceCommit: ec98716dfe71c78db3f82ee3b1b9e7f68997fa19
---

Ein Element mit `role="rowheader"` ist eine [Zelle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role), die Kopfzeileninformationen für eine [Zeile](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) innerhalb einer tabellarischen Struktur eines [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), [`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) enthält.

## Beschreibung

`Rowheader` ist die Kopfzeile der [`Zelle`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role) für eine Zeile und stellt eine Beziehung zwischen dieser und den anderen Zellen in derselben [`Zeile`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) her.

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

Es ist das strukturelle Äquivalent zum {{HTMLElement('th')}}-Element mit einem Scope von `row`, `<th scope="row">`. Die Verwendung des nativen {{HTMLElement('th')}} HTML-Elements wird dringend empfohlen.

Um eine ARIA-Zeilenkopfzeile zu erstellen, fügen Sie dem Element `role="rowheader"` hinzu. Diese Zeilenkopfzeile muss innerhalb einer `row` verschachtelt sein, die wiederum innerhalb einer `rowgroup` oder direkt innerhalb eines `grid`, `table` oder `treegrid` verschachtelt ist.

> [!NOTE]
> Die Verwendung der nativen [Tabellenelemente](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics) wann immer möglich, wird dringend empfohlen.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

#### Kontextrollen

- [role="row"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
  - : Der einzige Kontext, in dem Sie eine Zeile finden werden. Es umfasst eine Zelle oder eine Gruppe von Zellen, von denen nur eine vom Typ rowheader sein sollte. Ähnlich dem nativen {{HTMLElement('tr')}} HTML-Element.

### Tastaturinteraktionen

Keine.

### Erforderliche JavaScript-Funktionen

Keine.

> [!NOTE]
> Die erste Regel der ARIA-Nutzung lautet, wenn Sie eine native Funktion mit den erforderlichen Semantiken und Verhaltensweisen verwenden können, anstatt ein Element anderweitig zu benutzen und eine ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie dies. Verwenden Sie das HTML `<table>`, `<tr>`, `<th>`, `<td>` und andere [Tabellenelemente](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics), wann immer möglich, anstelle der ARIA-Tabellenrollen.

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

Das obenstehende Beispiel ist eine nicht-semantische ARIA-Tabelle mit Tabellenkopf und Tabellenkörper, wobei fünf von 81 Zeilen im DOM vorhanden sind: eine innerhalb eines Tabellenkopfes und vier Zeilen innerhalb des Tabellenkörpers. Die Kopfzeile, allein in einer Kopfzeilenzeile, hat zwei Spaltenköpfe. Die Spalten sind sortierbar, jedoch derzeit nicht sortiert, was durch die [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort)-Eigenschaft angezeigt wird. Der Tabellenkörper ist eine separate Zeilengruppe mit vier derzeit im DOM vorhandenen Zeilen. Jede Datentabellenzeile hat eine Zeilenkopfzeile. Da nicht alle Zeilen im DOM sind, haben wir die [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex)-Eigenschaft auf jeder Zeile eingefügt.

## Best Practices

Verwenden Sie nur {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}} usw. für die Struktur von Datentabellen. Sie können diese ARIA-Rollen hinzufügen, um die Barrierefreiheit zu gewährleisten, falls die nativen Semantiken der Tabelle entfernt werden, zum Beispiel durch CSS. Ein relevanter Anwendungsfall für alle ARIA-Tabellenrollen ist, wenn die `display`-Eigenschaft von CSS die nativen Semantiken einer Tabelle überschreibt, zum Beispiel durch `display: grid`. In diesem Fall können Sie die ARIA-Tabellenrollen verwenden, um die Semantiken hinzuzufügen.

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

Oben ist der semantische Weg zum Schreiben einer Tabelle. Die ARIA-Rollen sind nur notwendig, wenn die nativen Semantiken der Tabelle, und damit die Tabellenzeilenköpfe, gelöscht werden, zum Beispiel durch Setzen des [display-Eigenschaft auf flex oder grid](/de/docs/Web/CSS/display#accessibility).

### Zusätzliche Vorteile

Keine

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Das HTML `<table>`-Element](/de/docs/Web/HTML/Element/table)
- [Das HTML `<th>`-Element](/de/docs/Web/HTML/Element/th)
- [HTML-Tutorial zur Tabellenerstellung](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- [ARIA `cell`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)
- [ARIA `row`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [ARIA `gridcell`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
