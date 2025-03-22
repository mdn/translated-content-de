---
title: "ARIA: rowheader-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/rowheader_role
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

Ein Element mit `role="rowheader"` ist eine [Zelle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role), die Header-Informationen für eine [Zeile](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) innerhalb einer tabellarischen Struktur wie einem [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), einer [`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) oder einem [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) enthält.

## Beschreibung

`Rowheader` ist die Header-[`Zelle`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role) für eine Zeile und etabliert eine Beziehung zwischen dieser und den anderen Zellen in derselben [`Zeile`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role).

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

Es ist ein strukturelles Äquivalent zum {{HTMLElement('th')}}-Element mit dem Geltungsbereich `row`, `<th scope="row">`. Die Verwendung des nativen {{HTMLElement('th')}} HTML-Elements wird dringend empfohlen.

Um einen ARIA-Zeilenheader zu erstellen, fügen Sie `role="rowheader"` zum Element hinzu. Dieser Zeilenheader muss innerhalb einer `Zeile` verschachtelt sein, die ihrerseits innerhalb einer `rowgroup` oder direkt innerhalb eines `grid`, `table` oder `treegrid` verschachtelt ist.

> [!NOTE]
> Die Verwendung nativer [Tabellenelemente](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics) wann immer möglich, wird dringend empfohlen.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

#### Kontextrollen

- [role="row"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
  - : Der einzige Kontext, in dem Sie eine Zeile finden werden. Sie umfasst eine Zelle oder eine Gruppe von Zellzeilen, von denen nur eine vom Typ rowheader sein sollte. Ähnlich dem nativen {{HTMLElement('tr')}} HTML-Element.

### Tastaturinteraktionen

Keine

### Erforderliche JavaScript-Funktionen

Keine.

> [!NOTE]
> Die erste Regel der ARIA-Nutzung ist: Wenn Sie eine native Funktion verwenden können, die die erforderlichen Semantiken und Verhaltensweisen bereits eingebaut hat, anstatt ein Element umzupolen und ihm **eine** ARIA-Rolle, -Zustand oder -Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann sollten Sie dies tun. Verwenden Sie die HTML-`<table>`, `<tr>`, `<th>`, `<td>` und andere [Tabellenelemente](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics) statt der ARIA-Tabellenrollen wann immer möglich.

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

Oben ist eine nicht-semantische ARIA-Tabelle mit einem Tabellenkopf und einem Tabellenkörper dargestellt, wobei fünf von 81 Zeilen im DOM vorhanden sind: Eine innerhalb eines Tabellenkopfes und vier Zeilen im Tabellenkörper. Die Kopfzeile, die allein in einer Kopfzeilengruppe ist, hat zwei Spaltenheader. Die Spalten sind sortierbar, aber derzeit nicht sortiert, wie durch die [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort)-Eigenschaft angezeigt wird. Der Tabellenkörper ist eine separate Zeilengruppe, mit vier aktuell im DOM vorhandenen Zeilen. Jede Datentabellezeile hat einen Zeilenheader. Da nicht alle Zeilen im DOM sind, haben wir auf jede Reihe die [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex)-Eigenschaft hinzugefügt.

## Best Practices

Verwenden Sie nur {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}}, und so weiter für die Daten-Tabellenstruktur. Sie können diese ARIA-Rollen hinzufügen, um die Zugänglichkeit sicherzustellen, falls die nativen Semantiken der Tabelle entfernt werden, z.B. mit CSS. Ein relevanter Anwendungsfall für alle ARIA-Tabellenrollen ist, wenn die `display`-Eigenschaft in CSS die nativen Semantiken einer Tabelle überschreibt, z.B. durch `display: grid`. In diesem Fall können Sie die ARIA-Tabellenrollen verwenden, um die Semantiken hinzuzufügen.

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

Oben ist die semantische Art, eine Tabelle zu schreiben. Die ARIA-Rollen sind nur notwendig, wenn die nativen Semantiken der Tabelle und somit die Zeilenköpfe der Tabelle zerstört werden, zum Beispiel durch Einstellen der [display-Eigenschaft auf flex oder grid](/de/docs/Web/CSS/display#accessibility).

### Zusätzliche Vorteile

Keine

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Das HTML-`<table>`-Element](/de/docs/Web/HTML/Element/table)
- [Das HTML-`<th>`-Element](/de/docs/Web/HTML/Element/th)
- [HTML-Tabellen-Tutorial](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- [ARIA-`cell`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)
- [ARIA-`row`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [ARIA-`gridcell`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
