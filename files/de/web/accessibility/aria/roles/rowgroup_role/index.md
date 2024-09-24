---
title: "ARIA: rowgroup-Rolle"
slug: Web/Accessibility/ARIA/Roles/rowgroup_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Ein Element mit `role="rowgroup"` ist eine Gruppe von [Zeilen](/de/docs/Web/Accessibility/ARIA/Roles/row_role) innerhalb einer tabellarischen Struktur. Eine `rowgroup` enthält eine oder mehrere Zeilen von [Zellen](/de/docs/Web/Accessibility/ARIA/Roles/cell_role), [Rasterzellen](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role), [Spaltenüberschriften](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role) oder [Zeilenüberschriften](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role) innerhalb eines [`Gitter`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role), einer [`Tabelle`](/de/docs/Web/Accessibility/ARIA/Roles/table_role) oder eines [`Baumgitters`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role).

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

`Rowgroup` schafft eine Beziehung zwischen enthaltenen Zeilenelementen und ist ein strukturelles Äquivalent zu den {{HTMLElement('thead')}}, {{HTMLElement('tfoot')}} und {{HTMLElement('tbody')}} Elementen in HTML. Es gibt jedoch keine Unterscheidung zwischen verschiedenen Arten von Zeilengruppen. Ihre Elemente müssen in, oder von Elementen mit entweder der [Tabelle](/de/docs/Web/Accessibility/ARIA/Roles/table_role) oder [Gitter](/de/docs/Web/Accessibility/ARIA/Roles/grid_role) Rolle enthalten oder besessen sein. Die Verwendung der nativen {{HTMLElement('thead')}}, {{HTMLElement('tfoot')}} und {{HTMLElement('tbody')}} HTML-Elemente, wann immer möglich, wird dringend empfohlen.

Um eine ARIA-Tabellenüberschrift, Tabellenfuß oder Tabellenkörper zu erstellen, fügen Sie dem Element `role="rowgroup"` hinzu. Diese Zeilengruppe sollte innerhalb eines Gitters, einer Tabelle oder eines Baumgitters verschachtelt werden und eine Gruppe von einer oder mehreren Zeilen umfassen. Jede Zeile wiederum enthält untergeordnete Zellen. Diese Zellen können unterschiedliche Typen haben, je nachdem, ob sie Spalten- oder Zeilenüberschriften, einfache oder Rasterzellen sind.

> [!NOTE]
> Die Verwendung des nativen HTML-Tabellenelements ({{HTMLElement('table')}}) zusammen mit den Tabellenüberschriften ({{HTMLElement('thead')}}), Fußzeilen ({{HTMLElement('tfoot')}}) und Körper ({{HTMLElement('tbody')}}) ist wann immer möglich dringend empfohlen.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

#### Kontextrollen

- [role="table"](/de/docs/Web/Accessibility/ARIA/Roles/table_role)
  - : Einer der drei möglichen Kontexte (zusammen mit Gitter und Baumgitter), in denen Sie eine Zeile finden. Es identifiziert die Zeile als Teil einer nicht interaktiven Tabellenstruktur, die Daten in Zeilen und Spalten enthält, ähnlich dem nativen {{HTMLElement('table')}} HTML-Element.
- [role="grid"](/de/docs/Web/Accessibility/ARIA/Roles/grid_role)
  - : Einer der drei möglichen Kontexte (zusammen mit Tabelle und Baumgitter), in denen Sie eine Zeile finden. Es identifiziert die Zeile als Teil einer nicht interaktiven Tabellenstruktur, die Daten in Zeilen und Spalten enthält, ähnlich dem nativen {{HTMLElement('table')}} HTML-Element.
- [role="treegrid"](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role)
  - : Ähnlich einem Gitter, jedoch mit Zeilen, die auf die gleiche Weise wie für einen Baum erweitert und reduziert werden können.

#### Nachfolgerollen

- [role="row"](/de/docs/Web/Accessibility/ARIA/Roles/row_role)
  - : Eine Zeile von Zellen innerhalb einer tabellarischen Struktur. Eine Zeile enthält eine oder mehrere [Zellen](/de/docs/Web/Accessibility/ARIA/Roles/cell_role), [Rasterzellen](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role) oder [Spaltenüberschriften](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role) und manchmal eine [Zeilenüberschrift](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role).

### Tastaturinteraktionen

Keine

### Erforderliche JavaScript-Funktionen

Keine.

> [!NOTE]
> Die erste Regel der ARIA-Nutzung ist, dass Sie, wenn Sie eine native Funktion mit den benötigten semantischen und Verhaltensweisen bereits haben, diese verwenden sollten, anstatt ein Element neu zu nutzen und eine ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen. Verwenden Sie das HTML-`<table>`-Element anstelle der ARIA-Rolle der Tabelle, wann immer möglich.

## Beispiele

```html
<div
  role="table"
  aria-label="Semantic Elements"
  aria-describedby="semantic_elements_table_desc"
  aria-rowcount="81">
  <div id="semantic_elements_table_desc">
    Semantische Elemente anstelle von ARIA-Rollen zu verwenden
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

Das oben Gezeigte ist eine nicht-semantische ARIA-Tabelle mit einer Tabellenüberschrift und einem Tabellenkörper, mit fünf von 81 Zeilen, die im DOM vorhanden sind: eine in einer Tabellenüberschrift und vier Zeilen im Tabellenkörper. Die Überschriftenzeile, allein in einer Überschriftenzeilengruppe, hat zwei Spaltenüberschriften. Die Spalten sind sortierbar, aber derzeit nicht sortiert, wie durch die [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-sort) Eigenschaft angezeigt. Der Tabellenkörper ist eine separate Zeilengruppe, mit vier derzeit im DOM befindlichen Zeilen. Da nicht alle Zeilen im DOM sind, haben wir die [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) Eigenschaft auf jede Zeile gesetzt.

## Best Practices

Verwenden Sie nur {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}} usw. für Datenstrukturen in Tabellenform. Sie können diese ARIA-Rollen hinzufügen, um die Zugänglichkeit sicherzustellen, falls die nativen Semantiken der Tabelle, z. B. durch CSS, entfernt werden. Ein relevanter Anwendungsfall für die ARIA-Tabellenrolle ist, wenn die CSS-Display-Eigenschaft die nativen Semantiken einer Tabelle überschreibt, z. B. durch `display: grid`. In diesem Fall können Sie die ARIA-Tabellenrollen verwenden, um die Semantiken hinzuzufügen.

```html
<table
  role="table"
  aria-label="Semantic Elements"
  aria-describedby="semantic_elements_table_desc"
  aria-rowcount="81">
  <caption id="semantic_elements_table_desc">
    Semantische Elemente anstelle von ARIA-Rollen zu verwenden
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

Oben ist die semantische Art, eine Tabelle zu schreiben. Die ARIA-Rollen sind nur erforderlich, wenn die nativen Semantiken der Tabelle, und somit die Tabellenzeilen, zerstört sind, z. B. durch das Setzen der [Anzeigeeigenschaft auf Flex oder Gitter](/de/docs/Web/CSS/display#accessibility).

### Zusätzliche Vorteile

Keine

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTML Tabelle](/de/docs/Web/HTML/Element/table)
- [HTML Tabellenkörper](/de/docs/Web/HTML/Element/tbody)
- [HTML Tabellenfuß](/de/docs/Web/HTML/Element/tfoot)
- [HTML Tabellenüberschrift](/de/docs/Web/HTML/Element/thead)
