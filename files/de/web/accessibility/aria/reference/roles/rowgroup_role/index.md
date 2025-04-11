---
title: "ARIA: `rowgroup`-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/rowgroup_role
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Ein Element mit `role="rowgroup"` ist eine Gruppe von [Reihen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) innerhalb einer tabellarischen Struktur. Ein `rowgroup` enthält eine oder mehrere Reihen von [Zellen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role), [Gitterzellen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role), [Spaltenüberschriften](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) oder [Reihenüberschriften](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role) innerhalb eines [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), [`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role).

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

`Rowgroup` stellt eine Beziehung zwischen den zugehörigen Reihen-Elementen her und ist ein strukturelles Äquivalent zu den {{HTMLElement('thead')}}, {{HTMLElement('tfoot')}} und {{HTMLElement('tbody')}} Elementen in HTML. Es gibt jedoch keine Unterscheidung zwischen verschiedenen Typen von Reihengruppen. Ihre Elemente müssen in, oder im Besitz von, Elementen mit entweder der [table](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) oder [grid](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) Rolle sein. Es wird dringend empfohlen, wann immer möglich die nativen {{HTMLElement('thead')}}, {{HTMLElement('tfoot')}} und {{HTMLElement('tbody')}} HTML-Elemente zu verwenden.

Um einen ARIA-Tabellenkopf, Tabellenfuß oder Tabellenkörper zu erstellen, fügen Sie `role="rowgroup"` zum Element hinzu. Diese Reihengruppe sollte innerhalb eines Grids, einer Tabelle oder eines Treegrids verschachtelt sein und eine Gruppe von einer oder mehreren Reihen umfassen. Jede Reihe enthält wiederum untergeordnete Zellen. Diese Zellen können je nach Typ unterschiedlich sein, abhängig davon, ob sie Spalten- oder Reihenüberschriften oder einfache oder Gitterzellen sind.

> [!NOTE]
> Es wird dringend empfohlen, das native HTML-Tabellenelement ({{HTMLElement('table')}}) zusammen mit den Tabellenelementen Kopf ({{HTMLElement('thead')}}), Fuß ({{HTMLElement('tfoot')}}) und Körper ({{HTMLElement('tbody')}}) wann immer möglich zu verwenden.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

#### Kontextrollen

- [role="table"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
  - : Eines der drei möglichen Kontexte (zusammen mit Grid und Treegrid), in denen Sie eine Reihe finden. Es identifiziert die Reihe als Teil einer nicht-interaktiven Tabellenstruktur, die Daten in Reihen und Spalten enthält, ähnlich dem nativen {{HTMLElement('table')}} HTML-Element.
- [role="grid"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
  - : Eines der drei möglichen Kontexte (zusammen mit Table und Treegrid), in denen Sie eine Reihe finden. Es identifiziert die Reihe als Teil einer nicht-interaktiven Tabellenstruktur, die Daten in Reihen und Spalten enthält, ähnlich dem nativen {{HTMLElement('table')}} HTML-Element.
- [role="treegrid"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)
  - : Ähnlich wie ein Grid, jedoch mit Reihen, die auf die gleiche Weise wie bei einem Baum erweitert und reduziert werden können.

#### Nachfolge-Rollen

- [role="row"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
  - : Eine Reihe von Zellen innerhalb einer tabellarischen Struktur. Eine Reihe enthält eine oder mehrere [Zellen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role), [Gitterzellen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role) oder [Spaltenüberschriften](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) und manchmal eine [Reihenüberschrift](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role).

### Tastaturinteraktionen

Keine.

### Erforderliche JavaScript-Funktionen

Keine.

> [!NOTE]
> Die erste Regel der ARIA-Nutzung ist es, wenn Sie ein natives Feature mit den bereits integrierten Semantiken und Verhaltensweisen verwenden können, anstatt ein Element umzunutzen und eine ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie das. Verwenden Sie das HTML `<table>`-Element anstelle der ARIA-Rolle der Tabelle, wann immer möglich.

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

Das obige ist eine nicht-semantische ARIA-Tabelle mit einem Tabellenkopf und einem Tabellenkörper, wobei fünf von 81 Reihen im DOM vorhanden sind: eine innerhalb eines Tabellenkopfs und vier Reihen innerhalb des Tabellenkörpers. Die Kopfzeile, allein in einer Kopfzeilengruppe, hat zwei Spaltenüberschriften. Die Spalten sind sortierbar, jedoch derzeit nicht sortiert, wie durch die [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort) Eigenschaft angegeben. Der Tabellenkörper ist eine separate Reihengruppe, mit vier Reihen, die derzeit im DOM sind. Da nicht alle Reihen im DOM sind, haben wir die [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) Eigenschaft auf jede Reihe angewendet.

## Best Practices

Verwenden Sie nur {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}} und so weiter für die Struktur von Datentabellen. Sie können diese ARIA-Rollen hinzufügen, um die Zugänglichkeit zu gewährleisten, falls die nativen Semantiken der Tabelle entfernt werden, z.B. durch CSS. Ein relevanter Anwendungsfall für die ARIA-Tabel-Rolle ist, wenn die `display`-Eigenschaft von CSS die nativen Semantiken einer Tabelle überschreibt, z.B. durch `display: grid`. In diesem Fall können Sie die ARIA-Tabellenrollen verwenden, um die Semantiken zu ergänzen.

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

Oben ist die semantische Art und Weise, eine Tabelle zu schreiben. Die ARIA-Rollen sind nur dann notwendig, wenn die nativen Semantiken der Tabelle und daher der Tabellenreihen ausgelöscht werden, z.B. durch das Setzen der [display-Eigenschaft auf Flex oder Grid](/de/docs/Web/CSS/display#accessibility).

### Zusätzliche Vorteile

Keine

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTML-Tabelle](/de/docs/Web/HTML/Reference/Elements/table)
- [HTML-Tabellenkörper](/de/docs/Web/HTML/Reference/Elements/tbody)
- [HTML-Tabellenfuß](/de/docs/Web/HTML/Reference/Elements/tfoot)
- [HTML-Tabellenkopf](/de/docs/Web/HTML/Reference/Elements/thead)
