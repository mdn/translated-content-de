---
title: aria-colspan
slug: Web/Accessibility/ARIA/Attributes/aria-colspan
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das `aria-colspan` Attribut definiert die Anzahl der Spalten, die von einer Zelle oder `gridcell` in einer [`table`](/de/docs/Web/Accessibility/ARIA/Roles/table_role), [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role) überspannt werden.

## Beschreibung

Vorgesehen für [`cell`s](/de/docs/Web/Accessibility/ARIA/Roles/cell_role) und [`gridcell`s](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role), die nicht in einem nativen HTML {{HTMLElement('table')}} enthalten sind, definiert der Wert der `aria-colspan` Eigenschaft die Anzahl der Spalten, die von einer einzelnen Zelle in einer ARIA [`table`](/de/docs/Web/Accessibility/ARIA/Roles/table_role), [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role) oder [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role) überspannt werden.

In HTML haben {{HTMLElement('th')}} und {{HTMLElement('td')}} Elemente das [`colspan`](/de/docs/Web/HTML/Element/td#attributes) Attribut. Bei der Verwendung des semantischen {{HTMLElement('table')}} sollten Sie das native `colspan` Attribut so verwenden, wie es vorgesehen ist. Dieses ARIA-Attribut ist für Zellen und `gridcell`s gedacht, die nicht in einer nativen Tabelle enthalten sind, und wird ignoriert, wenn es auf eine Zelle in einem {{HTMLElement('table')}} verwendet wird.

> [!NOTE]
> Die erste Regel der ARIA-Nutzung ist, dass wenn Sie eine native Funktion mit den erforderlichen Semantiken und Verhaltensweisen verwenden können, anstelle ein Element umzufunktionieren und **ein** ARIA Rolle, Zustand oder Eigenschaft hinzuzufügen, um es zugänglich zu machen, tun Sie dies. Verwenden Sie HTML {{HTMLelement('table')}} Elemente, einschließlich {{HTMLelement('td')}} und {{HTMLelement('th')}} mit dem `colspan` Attribut anstelle von nicht-semantischen Elementen mit ARIA Rollen und Attributen wann immer möglich.

Der Wert von `aria-colspan` sollte eine positive ganze Zahl sein. Der Standardwert oder angenommene Wert des Zellenspans ist 1. Stellen Sie sicher, dass der angegebene Wert nicht dazu führt, dass die Zelle oder `gridcell` die nächste Zelle oder `gridcell` in derselben Zeile überlappt und nicht das Überspannen der Zelle außerhalb der enthaltenen Tabelle, des Gitters oder `treegrid` verursacht.

## Beispiel

Das folgende Beispiel ist ein Teil eines Punktespreadsheets einer Bowlingturnier-Liga. Jedes Spiel erstreckt sich über 10 Frames und jedes Frame erstreckt sich über 3 Wertungen: zwei Würfe und die aktuelle Gesamtpunktzahl. Der 10. (und letzte) Frame in jedem Spiel erstreckt sich über 4 Spalten, falls jemand nur Strikes wirft.

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
  - : Eine ganze Zahl, die größer oder gleich dem Standardwert von 1 ist und die Anzahl der Spalten definiert, die von der Zelle überspannt werden. Der Wert muss kleiner sein, als was dazu führen würde, dass eine Zelle die nächste Zelle in derselben Zeile überlappt.

## Zugehörige Schnittstellen

- [`Element.ariaColSpan`](/de/docs/Web/API/Element/ariaColSpan)
  - : Die [`ariaColSpan`](/de/docs/Web/API/Element/ariaColSpan) Eigenschaft, die Teil der Schnittstelle jedes Elements ist, spiegelt den Wert des `aria-colspan` Attributs wider, welches die Anzahl der Spalten definiert, die von einer Zelle oder einer `gridcell` innerhalb einer Tabelle, eines Grids oder `treegrid` überspannt werden.

## Zugehörige Rollen

Verwendet in Rollen:

- [`cell`](/de/docs/Web/Accessibility/ARIA/Roles/cell_role)

Erbt in Rollen:

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
