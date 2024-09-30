---
title: aria-colspan
slug: Web/Accessibility/ARIA/Attributes/aria-colspan
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das `aria-colspan` Attribut definiert die Anzahl der Spalten, die von einer Zelle oder einem Rasterzelle in einer [`table`](/de/docs/Web/Accessibility/ARIA/Roles/table_role), einem [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role) oder einem [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role) überspannt werden.

## Beschreibung

Vorgesehen für [`cell`s](/de/docs/Web/Accessibility/ARIA/Roles/cell_role) und [`gridcell`s](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role), die nicht in einem nativen HTML {{HTMLElement('table')}} enthalten sind, definiert der Wert der `aria-colspan` Eigenschaft die Anzahl der Spalten, die von einer einzelnen Zelle in einer ARIA [`table`](/de/docs/Web/Accessibility/ARIA/Roles/table_role), einem [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role) oder einem [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role) überspannt werden.

In HTML haben {{HTMLElement('th')}} und {{HTMLElement('td')}} Elemente das [`colspan`](/de/docs/Web/HTML/Element/td#attributes) Attribut. Wenn Sie das semantische {{HTMLElement('table')}} verwenden, nutzen Sie das native `colspan` Attribut wie vorgesehen. Dieses ARIA-Attribut ist für Zellen und Rasterzellen gedacht, die nicht in einer nativen Tabelle enthalten sind und wird ignoriert, wenn es auf eine Zelle in einem {{HTMLElement('table')}} verwendet wird.

> [!NOTE]
> Die erste Regel der ARIA-Nutzung ist, wann immer möglich eine native Funktion mit den erforderlichen Semantiken und dem Verhalten zu verwenden, anstatt ein Element umzufunktionieren und **ein** ARIA-Rolle, -Status oder -Eigenschaft hinzuzufügen, um es zugänglich zu machen. Verwenden Sie HTML {{HTMLElement('table')}}-Elemente, einschließlich {{HTMLElement('td')}} und {{HTMLElement('th')}} mit dem `colspan` Attribut, anstatt nicht-semantische Elemente mit ARIA-Rollen und Attributen wann immer möglich.

Der Wert von `aria-colspan` sollte eine positive ganze Zahl sein. Der Standard- oder angenommene Wert einer Zellenspaltung ist 1. Stellen Sie sicher, dass der enthaltene Wert nicht dazu führt, dass sich die Zelle oder Rasterzelle mit der nächsten Zelle oder Rasterzelle in derselben Reihe überlappt und nicht dazu führt, dass die Zelle außerhalb der enthaltenen Tabelle, des Rasters oder des Baumrasters überspannt.

## Beispiel

Das Folgende ist ein Beispiel für einen Teil einer Bowling-Turnierliga-Punktetabelle. Jedes Spiel erstreckt sich über 10 Frames, und jedes Frame erstreckt sich über 3 Ergebnisse: zwei Würfe und das aktuelle Gesamtergebnis. Der 10. (und letzte) Frame in jedem Spiel erstreckt sich über 4 Spalten, falls jemand alle Strikes erzielt.

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

Wenn wir ein {{HTMLElement('table')}} und semantische Tabellenelemente verwendet hätten, wäre unser Markup weniger ausführlich und standardmäßig zugänglicher gewesen.

## Werte

- `<integer>`
  - : Eine ganze Zahl größer oder gleich dem Standardwert von 1, die die Anzahl der von der Zelle überspannten Spalten definiert. Der Wert muss kleiner sein, als dass es zu einer Überlappung der nächsten Zelle in derselben Reihe käme.

## Zugehörige Schnittstellen

- [`Element.ariaColSpan`](/de/docs/Web/API/Element/ariaColSpan)
  - : Die [`ariaColSpan`](/de/docs/Web/API/Element/ariaColSpan) Eigenschaft, die Teil jedes Elemente-Interfaces ist, spiegelt den Wert des `aria-colspan` Attributs wider, welches die Anzahl der von einer Zelle oder Rasterzelle in einer Tabelle, einem Raster oder einem Baumraster überspannten Spalten definiert.

## Zugehörige Rollen

Verwendet in Rollen:

- [`cell`](/de/docs/Web/Accessibility/ARIA/Roles/cell_role)

Wird in Rollen vererbt:

- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('th')}} und {{HTMLElement('td')}} [`colspan`](/de/docs/Web/HTML/Element/td#attributes) Attribut
- [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) Eigenschaft
- [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan) Eigenschaft
- [`cell`](/de/docs/Web/Accessibility/ARIA/Roles/cell_role) Rolle
- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role) Rolle
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role) Rolle
