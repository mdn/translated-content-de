---
title: aria-colspan
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-colspan
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Das `aria-colspan` Attribut definiert die Anzahl der Spalten, die von einer Zelle oder einem Gridcell innerhalb einer [`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role), [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) überspannt werden.

## Beschreibung

Vorgesehen für [`cell`s](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role) und [`gridcell`s](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role), die nicht in einem nativen HTML {{HTMLElement('table')}} enthalten sind, definiert der Wert der Eigenschaft `aria-colspan` die Anzahl der Spalten, die von einer einzelnen Zelle in einer ARIA [`table`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role), [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) überspannt werden.

Im HTML haben {{HTMLElement('th')}} und {{HTMLElement('td')}} Elemente das [`colspan`](/de/docs/Web/HTML/Element/td#attributes) Attribut. Wenn Sie ein semantisches {{HTMLElement('table')}} verwenden, benutzen Sie das native `colspan` Attribut wie vorgesehen. Dieses ARIA-Attribut ist für Zellen und Gridcells gedacht, die nicht in einer nativen Tabelle enthalten sind, und wird ignoriert, wenn es auf eine Zelle in einem {{HTMLElement('table')}} angewendet wird.

> [!NOTE]
> Die erste Regel bei der Verwendung von ARIA ist, wenn Sie eine native Funktion mit der gewünschten Semantik und dem gewünschten Verhalten verwenden können, anstatt ein Element umzuwidmen und **ein** ARIA-Rolle, -Zustand oder -Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie dies. Verwenden Sie HTML {{HTMLelement('table')}} Elemente, einschließlich {{HTMLelement('td')}} und {{HTMLelement('th')}} mit dem `colspan` Attribut anstelle von nicht-semantischen Elementen mit ARIA-Rollen und -Attributen, wann immer möglich.

Der Wert von `aria-colspan` sollte eine positive ganze Zahl sein. Der Standard- oder angenommene Wert für eine Zellspanne ist 1. Stellen Sie sicher, dass der angegebene Wert die Zelle oder Gridcell nicht mit der nächsten Zelle oder Gridcell in derselben Zeile überlappt und nicht dazu führt, dass die Zelle außerhalb der enthaltenden Tabelle, des Grids oder Treegrids reicht.

## Beispiel

Das folgende Beispiel zeigt einen Teil einer Bowlingturnier-Liga-Punktetabelle. Jedes Spiel umfasst 10 Frames und jedes Frame umfasst 3 Ergebnisse: zwei Würfe und die aktuelle Gesamtsumme. Das 10. (und letzte) Frame in jedem Spiel umfasst 4 Spalten, falls jemand nur Strikes erzielt.

```html
<div role="grid" aria-rowcount="27">
  aria-label="Bowling League Scores"
  <div role="rowgroup">
    <div role="row" aria-rowindex="1">
      <!--
            aria-rowspan and aria-colspan provide
            assistive technologies with the correct data cell header information
            when header cells span more than one row or column.
          -->

      <span role="columnheader" aria-rowspan="2">Team</span>
      <span role="columnheader" aria-colspan="2">Player</span>
      <span role="columnheader" aria-colspan="31">Game 1 Frames</span>
      <span role="columnheader" aria-colspan="31">Game 2 Frames</span>
      <span role="columnheader" aria-colspan="31">Game 3 Frames</span>
      <span role="columnheader" aria-rowspan="2">Total</span>
    </div>
    <div role="row" aria-rowindex="2">
      <span role="columnheader">Last Name</span>
      <span role="columnheader">First Name</span>
      <span role="columnheader" aria-colspan="3">1</span>
      <span role="columnheader" aria-colspan="3">2</span>
      <span role="columnheader" aria-colspan="3">3</span>
      <span role="columnheader" aria-colspan="3">4</span>
      <span role="columnheader" aria-colspan="3">5</span>
      <span role="columnheader" aria-colspan="3">6</span>
      <span role="columnheader" aria-colspan="3">7</span>
      <span role="columnheader" aria-colspan="3">8</span>
      <span role="columnheader" aria-colspan="3">9</span>
      <span role="columnheader" aria-colspan="4">10</span>
      <span role="columnheader" aria-colspan="3">1</span>
      <span role="columnheader" aria-colspan="3">2</span>
      <span role="columnheader" aria-colspan="3">3</span>
      <span role="columnheader" aria-colspan="3">4</span>
      <span role="columnheader" aria-colspan="3">5</span>
      <span role="columnheader" aria-colspan="3">6</span>
      <span role="columnheader" aria-colspan="3">7</span>
      <span role="columnheader" aria-colspan="3">8</span>
      <span role="columnheader" aria-colspan="3">9</span>
      <span role="columnheader" aria-colspan="4">10</span>
      <span role="columnheader" aria-colspan="3">1</span>
      <span role="columnheader" aria-colspan="3">2</span>
      <span role="columnheader" aria-colspan="3">3</span>
      <span role="columnheader" aria-colspan="3">4</span>
      <span role="columnheader" aria-colspan="3">5</span>
      <span role="columnheader" aria-colspan="3">6</span>
      <span role="columnheader" aria-colspan="3">7</span>
      <span role="columnheader" aria-colspan="3">8</span>
      <span role="columnheader" aria-colspan="3">9</span>
      <span role="columnheader" aria-colspan="4">10</span>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row" aria-rowindex="10">
      <span role="rowheader" aria-rowspan="3">The Mighty Quokkas</span>
      <span role="cell">Henderson</span>
      <span role="cell">Alice</span>
      <span role="cell">7</span>
      <span role="cell">/</span>
      <span role="cell">20</span>
      <span role="cell" aria-colspan="2">X</span>
      <span role="cell">39</span>
      <span role="cell">9</span>
      <span role="cell">-</span>
      <span role="cell">48</span>
      <span role="cell" aria-colspan="2">X</span>
      <span role="cell">76</span>
      <span role="cell" aria-colspan="2">X</span>
      <span role="cell">96</span>
      <span role="cell">8</span>
      <span role="cell">/</span>
      <span role="cell">113</span>
      <span role="cell">7</span>
      <span role="cell">-</span>
      <span role="cell">120</span>
      <span role="cell" aria-colspan="2">X</span>
      <span role="cell">146</span>
      <span role="cell" aria-colspan="2">X</span>
      <span role="cell">166</span>
      <span role="cell">6</span>
      <span role="cell">/</span>
      <span role="cell">X</span>
      <span role="cell">186</span>
      <span role="cell">7</span>
      <span role="cell">2</span>
      <span role="cell">9</span>
      <span role="cell">6</span>
      <span role="cell">-</span>
      <span role="cell">15</span>
      <span role="cell" aria-colspan="2">X</span>
      <span role="cell">35</span>
      <span role="cell">7</span>
      <span role="cell">/</span>
      …
    </div>
    <div role="row" aria-rowindex="11">
      <span role="cell">McPherson</span>
      <span role="cell">Leslie</span>
      <span role="cell">9</span>
      <span role="cell">-</span>
      <span role="cell">9</span>
      <span role="cell">8</span>
      <span role="cell">1</span>
      <span role="cell">18</span>
      …
    </div>
  </div>
</div>
```

Hätten wir ein {{HTMLElement('table')}} und semantische Tabellenelemente verwendet, wäre unser Markup weniger ausführlich und standardmäßig zugänglicher gewesen.

## Werte

- `<integer>`
  - : Eine ganzzahlige Zahl, die größer oder gleich dem Standardwert von 1 ist und die Anzahl der von der Zelle überspannten Spalten definiert. Der Wert muss kleiner sein, als dass eine Zelle die nächste Zelle in derselben Zeile überlappen würde.

## Zugehörige Schnittstellen

- [`Element.ariaColSpan`](/de/docs/Web/API/Element/ariaColSpan)
  - : Die [`ariaColSpan`](/de/docs/Web/API/Element/ariaColSpan) Eigenschaft, Teil der Schnittstelle jedes Elements, spiegelt den Wert des `aria-colspan` Attributs wider, das definiert, wie viele Spalten von einer Zelle oder einem Gridcell innerhalb einer Tabelle, eines Grids oder Treegrids überspannt werden.

## Zugehörige Rollen

Verwendet in Rollen:

- [`cell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)

Vererbt in Rollen:

- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('th')}} und {{HTMLElement('td')}} [`colspan`](/de/docs/Web/HTML/Element/td#attributes) Attribut
- [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) Eigenschaft
- [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan) Eigenschaft
- [`cell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role) Rolle
- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) Rolle
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) Rolle
