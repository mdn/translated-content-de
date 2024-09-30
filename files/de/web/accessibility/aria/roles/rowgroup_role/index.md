---
title: "ARIA: rowgroup Rolle"
slug: Web/Accessibility/ARIA/Roles/rowgroup_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Ein Element mit `role="rowgroup"` ist eine Gruppe von [Zeilen](/de/docs/Web/Accessibility/ARIA/Roles/row_role) innerhalb einer Tabellenstruktur. Eine `rowgroup` enthält eine oder mehrere Zeilen von [Zellen](/de/docs/Web/Accessibility/ARIA/Roles/cell_role), [Rasterzellen](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role), [Spaltenüberschriften](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role) oder [Zeilenüberschriften](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role) innerhalb eines [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role), [`table`](/de/docs/Web/Accessibility/ARIA/Roles/table_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role).

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

`Rowgroup` stellt eine Beziehung zwischen den enthaltenen Zeilenelementen her und ist das strukturelle Äquivalent zu den HTML-Elementen {{HTMLElement('thead')}}, {{HTMLElement('tfoot')}} und {{HTMLElement('tbody')}}. Es gibt jedoch keine Unterscheidung zwischen verschiedenen Arten von rowgroups. Ihre Elemente müssen in oder durch Elemente mit entweder der [table](/de/docs/Web/Accessibility/ARIA/Roles/table_role) oder [grid](/de/docs/Web/Accessibility/ARIA/Roles/grid_role) Rolle enthalten oder besessen werden. Die Verwendung der nativen HTML-Elemente {{HTMLElement('thead')}}, {{HTMLElement('tfoot')}} und {{HTMLElement('tbody')}}, wann immer möglich, wird dringend empfohlen.

Um einen ARIA-Tabellenkopf, -fuß oder -körper zu erstellen, fügen Sie `role="rowgroup"` zum Element hinzu. Diese rowgroup sollte innerhalb eines Raster-, Tabellen- oder Baumrasters verschachtelt sein, das eine Gruppe von einer oder mehreren Zeilen umfasst. Jede Zeile enthält wiederum untergeordnete Zellen. Diese Zellen können je nach Typ verschiedene sein, abhängig davon, ob sie Spalten- oder Zeilenüberschriften oder einfache oder Rasterzellen sind.

> [!NOTE]
> Die Verwendung des nativen HTML-Tabellenelements ({{HTMLElement('table')}}) zusammen mit den Tabellenelementen für Kopf ({{HTMLElement('thead')}}), Fuß ({{HTMLElement('tfoot')}}) und Körper ({{HTMLElement('tbody')}}) wird wann immer möglich dringend empfohlen.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

#### Kontextrollen

- [role="table"](/de/docs/Web/Accessibility/ARIA/Roles/table_role)
  - : Einer der drei möglichen Kontexte (neben grid und treegrid), in denen Sie eine Zeile finden. Es identifiziert die Zeile als Teil einer nicht interaktiven Tabellenstruktur, die Daten in Zeilen und Spalten enthält, ähnlich dem nativen {{HTMLElement('table')}} HTML-Element.
- [role="grid"](/de/docs/Web/Accessibility/ARIA/Roles/grid_role)
  - : Einer der drei möglichen Kontexte (neben table und treegrid), in denen Sie eine Zeile finden. Es identifiziert die Zeile als Teil einer nicht interaktiven Tabellenstruktur, die Daten in Zeilen und Spalten enthält, ähnlich dem nativen {{HTMLElement('table')}} HTML-Element.
- [role="treegrid"](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role)
  - : Ähnlich wie ein Raster, aber mit Zeilen, die auf die gleiche Weise wie ein Baum erweitert und reduziert werden können.

#### Nachfolgerrollen

- [role="row"](/de/docs/Web/Accessibility/ARIA/Roles/row_role)
  - : Eine Zeile von Zellen innerhalb einer Tabellenstruktur. Eine Zeile enthält eine oder mehrere [Zellen](/de/docs/Web/Accessibility/ARIA/Roles/cell_role), [Rasterzellen](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role) oder [Spaltenüberschriften](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role) und manchmal eine [Zeilenüberschrift](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role).

### Tastaturinteraktionen

Keine

### Erforderliche JavaScript-Funktionen

Keine.

> [!NOTE]
> Die erste Regel bei der Verwendung von ARIA ist, dass wenn Sie eine native Funktion mit den erforderlichen Semantiken und Verhaltensweisen verwenden können, anstatt ein Element umzufunktionieren und **eine** ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie dies. Verwenden Sie das HTML-Element `<table>` anstelle der ARIA-Rolle table, wann immer möglich.

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

Das obige ist eine nicht-semantische ARIA-Tabelle mit einem Tabellenkopf und einem Tabellenkörper, mit fünf von 81 Zeilen, die im DOM vorhanden sind: eine innerhalb eines Tabellenkopfes und vier Zeilen innerhalb des Tabellenkörpers. Die Kopfzeile, allein in einer Kopfzellen-gruppe, hat zwei Spaltenüberschriften. Die Spalten sind sortierbar, aber derzeit nicht sortiert, wie durch die Eigenschaft [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-sort) angegeben. Der Tabellenkörper ist eine separate Zeilengruppe mit vier Zeilen, die derzeit im DOM sind. Da nicht alle Zeilen im DOM sind, haben wir die Eigenschaft [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) auf jeder Zeile hinzugefügt.

## Beste Praktiken

Verwenden Sie nur {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}}, usw. für den Aufbau von Datentabellen. Sie können diese ARIA-Rollen hinzufügen, um Barrierefreiheit sicherzustellen, falls die nativen Semantiken der Tabelle entfernt werden, z. B. mit CSS. Ein relevanter Anwendungsfall für die ARIA-Tabelle-Rolle ist, wenn die CSS-Anzeigeeigenschaft die nativen Semantiken einer Tabelle überschreibt, z. B. durch `display: grid`. In diesem Fall können Sie die ARIA-Tabellenrollen verwenden, um die Semantiken hinzuzufügen.

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
  </tbody>
</table>
```

Oben ist die semantische Art, eine Tabelle zu schreiben. Die ARIA-Rollen sind nur dann erforderlich, wenn die nativen Semantiken der Tabelle und somit der Tabellenzeilen zerstört werden, z. B. durch das Festlegen der [Anzeigeneigenschaft auf Flex oder Grid](/de/docs/Web/CSS/display#accessibility).

### Zusätzliche Vorteile

Keine

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTML table](/de/docs/Web/HTML/Element/table)
- [HTML table body](/de/docs/Web/HTML/Element/tbody)
- [HTML table footer](/de/docs/Web/HTML/Element/tfoot)
- [HTML table header](/de/docs/Web/HTML/Element/thead)
